export function Research() {
  return (
    <section id="research" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-moss md:pt-2">
            How I work
          </p>
          <div className="max-w-2xl">
            <p className="font-display text-[1.5rem] md:text-[1.8rem] leading-[1.35] text-ink">
              I started in machine learning the usual way — predicting prices, classifying
              flowers. What kept me in it was the moment a model had to look at something
              messy and say something specific.
            </p>
            <p className="mt-6 text-[16px] text-ink-soft leading-relaxed">
              That's the thread through everything here: a flood photo that needs a
              plain-language risk read, a gemstone that needs a clarity score, a pile of
              reviews that needs an honest ranking instead of a star average. I care about
              models that can explain themselves and run somewhere realistic — on a phone,
              offline, in the field — not just in a benchmark table.
            </p>
            <p className="mt-6 text-[16px] text-ink-soft leading-relaxed">
              That approach led to FloodSense-VLM — research on parameter-efficient
              vision-language fine-tuning that I led as first author — and it's the same lens I
              bring to every project below: pick a judgment people currently make by eye, and
              build a system that can do a defensible first pass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
