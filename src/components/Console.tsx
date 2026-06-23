"use client";

import { useState, useRef } from "react";
import { SectionHeading } from "./Projects";

type QA = { q: string; a: string; confidence: number; flag?: "limitation" };

type Scenario = {
  id: string;
  label: string;
  swatchClass: string;
  qa: QA[];
};

// Scenarios and answers are modeled on the qualitative examples reported in the
// FloodSense-VLM paper (clear water, street flooding, agricultural flooding,
// and a documented quantitative-reasoning limitation).
const scenarios: Scenario[] = [
  {
    id: "clear-river",
    label: "Forest river, clear water flow",
    swatchClass: "from-[#5b7a8c] to-[#3d5a4c]",
    qa: [
      {
        q: "Is there flooding in this image?",
        a: "No, there is no flooding in this image; the image shows a healthy, clear water flow.",
        confidence: 88,
      },
    ],
  },
  {
    id: "flooded-street",
    label: "Flooded residential street",
    swatchClass: "from-[#3d5a4c] to-[#1a1d1a]",
    qa: [
      {
        q: "What is the condition of the street for pedestrians?",
        a: "The street is flooded, posing challenges for pedestrians and cyclists.",
        confidence: 81,
      },
    ],
  },
  {
    id: "agricultural-flood",
    label: "Aerial view, flooded farmland",
    swatchClass: "from-[#8b6f47] to-[#5b7a8c]",
    qa: [
      {
        q: "What type of area is affected by the flood?",
        a: "This appears to be an agricultural area or rural settlement. The flooding has inundated extensive fields, with some residential houses affected.",
        confidence: 79,
      },
      {
        q: "How much of the area is affected by the floodwaters?",
        a: "The area affected by the floodwaters is 100 square kilometers.",
        confidence: 38,
        flag: "limitation",
      },
    ],
  },
];

export function Console() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [streamedText, setStreamedText] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [flagged, setFlagged] = useState(false);
  const streamTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  function findAnswer(scenario: Scenario, q: string): QA {
    const exact = scenario.qa.find((item) => item.q === q);
    if (exact) return exact;
    // Free-typed question: fall back to the scenario's first scripted answer
    // to keep the demo grounded in real reported examples rather than inventing new ones.
    return scenario.qa[0];
  }

  function runInference(q: string) {
    if (!q.trim()) return;
    if (streamTimer.current) clearInterval(streamTimer.current);
    setStatus("running");
    setStreamedText("");
    setConfidence(0);
    setFlagged(false);

    const { a, confidence: targetConfidence, flag } = findAnswer(activeScenario, q);

    setTimeout(() => {
      let i = 0;
      streamTimer.current = setInterval(() => {
        i += 2;
        setStreamedText(a.slice(0, i));
        if (i >= a.length) {
          if (streamTimer.current) clearInterval(streamTimer.current);
          setStatus("done");
          setFlagged(flag === "limitation");
          let c = 0;
          const confTimer = setInterval(() => {
            c += 3;
            if (c >= targetConfidence) {
              c = targetConfidence;
              clearInterval(confTimer);
            }
            setConfidence(c);
          }, 16);
        }
      }, 14);
    }, 450);
  }

  return (
    <section id="console" className="px-6 md:px-10 py-24 md:py-32 bg-paper-dim/60 border-y border-line">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Signature system"
            title="FloodSense-VLM, live"
            subtitle="An in-browser walkthrough of real reported Flood-VQA test examples from the paper — including a case where the model's quantitative reasoning fails. Pick a scene, ask one of its actual evaluation questions, and see the real recorded answer and what it reveals about the model's strengths and limits."
          />
          <a
            href="https://github.com/Deveshsaipandian/FloodSense-VLM"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] uppercase tracking-[0.06em] text-moss hover:text-moss-deep transition-colors whitespace-nowrap pt-1"
          >
            View source on GitHub →
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-[280px_1fr] gap-px bg-line border border-line max-w-4xl">
          {/* Scene picker */}
          <div className="bg-paper p-5 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft/70 mb-1">
              01 — Select scene
            </span>
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenario(s);
                  setStatus("idle");
                  setStreamedText("");
                  setConfidence(0);
                  setFlagged(false);
                  setQuestion("");
                }}
                className={`text-left group flex items-center gap-3 px-3 py-2.5 border transition-colors ${
                  activeScenario.id === s.id
                    ? "border-moss bg-moss/5"
                    : "border-line hover:border-ink-soft"
                }`}
              >
                <span
                  className={`w-9 h-9 shrink-0 rounded-sm bg-gradient-to-br ${s.swatchClass}`}
                  aria-hidden
                />
                <span className="font-mono text-[12px] text-ink leading-tight">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Console body */}
          <div className="bg-paper p-5 md:p-7 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft/70 mb-4">
              02 — Ask the model
            </span>

            <div className="flex flex-wrap gap-2 mb-4">
              {activeScenario.qa.map((item) => (
                <button
                  key={item.q}
                  onClick={() => {
                    setQuestion(item.q);
                    runInference(item.q);
                  }}
                  className="font-mono text-[11px] text-ink-soft border border-line px-2.5 py-1.5 hover:border-moss hover:text-moss transition-colors text-left"
                >
                  {item.q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                runInference(question);
              }}
              className="flex gap-2"
            >
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type a question, or pick one above…"
                className="flex-1 bg-transparent border border-line focus-visible:border-moss px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-soft/50 outline-none"
              />
              <button
                type="submit"
                className="bg-ink text-paper px-4 font-mono text-[12px] uppercase tracking-[0.05em] hover:bg-moss-deep transition-colors disabled:opacity-40"
                disabled={!question.trim()}
              >
                Run
              </button>
            </form>

            {/* Output readout */}
            <div className="mt-6 border border-line bg-paper-dim/40 p-4 min-h-[140px] flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft/70">
                  Model output
                </span>
                <StatusDot status={status} />
              </div>

              {status === "idle" && (
                <p className="font-mono text-[13px] text-ink-soft/50 italic">
                  Awaiting query…
                </p>
              )}

              {status !== "idle" && (
                <p className="font-mono text-[13.5px] text-ink leading-relaxed">
                  {streamedText}
                  {status === "running" && <span className="animate-pulse">▍</span>}
                </p>
              )}

              {status === "done" && (
                <div className="mt-4 pt-3 border-t border-line/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-ink-soft/70">confidence</span>
                    <span className="font-mono text-[11px] text-ink">{confidence}%</span>
                  </div>
                  <div className="h-1.5 bg-line w-full">
                    <div
                      className={`h-full transition-all duration-150 ease-out ${
                        flagged ? "bg-alert" : "bg-moss"
                      }`}
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                  {flagged && (
                    <p className="mt-3 font-mono text-[11px] text-alert leading-relaxed">
                      ⚠ Documented limitation: the paper reports this as an example of
                      overconfident quantitative reasoning — the model names a specific area
                      figure it has no way to actually measure from the image.
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="mt-4 font-mono text-[10.5px] text-ink-soft/50 leading-relaxed">
              Answers shown are the real qualitative examples reported in the FloodSense-VLM
              paper's evaluation, replayed here as a static walkthrough — not a live model
              endpoint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusDot({ status }: { status: "idle" | "running" | "done" }) {
  const label = status === "idle" ? "idle" : status === "running" ? "inferring" : "complete";
  const color =
    status === "idle" ? "bg-ink-soft/40" : status === "running" ? "bg-ochre animate-pulse" : "bg-moss";
  return (
    <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-soft">
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
