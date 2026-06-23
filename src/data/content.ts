// Central content file — edit this to update site copy without touching components.

export const profile = {
  name: "Devesh Sai Pandian G",
  role: "AI Engineer & Computer Vision Researcher",
  institution: "St. Joseph's College of Engineering",
  tagline:
    "I build vision systems that look at images and explain what they see — for floods, gemstones, and customer feedback.",
  location: "Chennai, India",
  email: "deveshsaipandian@gmail.com",
  links: {
    github: "https://github.com/Deveshsaipandian",
    linkedin: "https://www.linkedin.com/in/deveshsaipandian",
  },
};

export const credentials = [
  {
    kind: "Publication",
    title: "FloodSense-VLM: A Lightweight Vision-Language Model for Real-Time Disaster Management",
    detail: "First author. Parameter-efficient VLM fine-tuning for flood detection.",
  },
  {
    kind: "Innovation",
    title: "AI-Powered System for Automated Emerald Grading and Quality Assessment",
    detail: "Computer-vision-based gemstone evaluation pipeline.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  hasDemo?: boolean;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "floodsense-vlm",
    name: "FloodSense-VLM",
    category: "Vision-Language Model · Disaster Management",
    oneLiner:
      "A 262M-parameter VLM, LoRA-tuned on just 2.2% of its weights, that reasons over flood imagery in plain language.",
    description:
      "FloodSense-VLM fine-tunes SmolVLM-256M-Instruct (Idefics3 architecture) with Low-Rank Adaptation, training only the attention and feed-forward projection layers — 2.20% of total parameters — on a custom 200-sample Flood-VQA dataset. The result is a vision-language model that takes a ground-level, aerial, or satellite image plus a question and answers in natural language: whether an area is flooded, what condition a street is in, what kind of terrain is affected. Built light enough to run on constrained edge hardware rather than a server farm, for use in the field, not a dashboard.",
    metrics: [
      { label: "precision", value: "80%" },
      { label: "F1-score", value: "0.615" },
      { label: "MMStar benchmark", value: "73.3%" },
      { label: "params trained", value: "2.20%" },
    ],
    stack: ["PyTorch", "Hugging Face", "LoRA", "SmolVLM", "Idefics3"],
    hasDemo: true,
    repoUrl: "https://github.com/Deveshsaipandian/FloodSense-VLM",
  },
  {
    slug: "emerald-grading",
    name: "Emerald Grading System",
    category: "Computer Vision · Gemstone Quality Assessment",
    oneLiner: "Automated clarity, color, and cut grading from a single gemstone photograph.",
    description:
      "A computer vision pipeline that replicates a gemologist's first-pass assessment — clarity, color saturation, and cut symmetry — from a standard image. Built to assist (not replace) trained graders by flagging stones for closer inspection and cutting down manual triage time.",
    metrics: [
      { label: "grading axes", value: "3" },
    ],
    stack: ["Python", "OpenCV", "Deep Learning"],
  },
  {
    slug: "restaurant-intelligence",
    name: "Restaurant Intelligence Platform",
    category: "Data Analytics · Review Mining",
    oneLiner: "Turns scraped ratings and reviews into a ranked, explainable restaurant intelligence feed.",
    description:
      "An end-to-end pipeline: scrape restaurant listings and reviews, clean and normalize messy real-world data, then rank venues with a transparent scoring algorithm instead of a black-box star average. Built for the kind of decision a person actually makes — where should I eat tonight — backed by real review signal.",
    metrics: [
      { label: "pipeline", value: "scrape → clean → rank" },
    ],
    stack: ["Python", "Selenium", "BeautifulSoup"],
  },
  {
    slug: "sentiment-intelligence",
    name: "Customer Sentiment Intelligence Engine",
    category: "NLP · Text Classification",
    oneLiner: "Classifies customer reviews by sentiment with a transparent TF-IDF + classical ML pipeline.",
    description:
      "A sentiment classification engine built on TF-IDF feature engineering and classical ML rather than an opaque pretrained model — chosen deliberately, so every prediction can be traced back to the words that drove it. Useful where explainability matters as much as accuracy.",
    metrics: [
      { label: "test accuracy", value: "77.66%" },
      { label: "train accuracy", value: "79.87%" },
    ],
    stack: ["Python", "scikit-learn", "TF-IDF", "NLP"],
  },
];

export const experience = [
  {
    role: "Data Science / Data Analytics Intern",
    org: "Tecnonauts Technology Services Pvt. Ltd.",
    points: [
      "Worked on vision-language model evaluation and dataset preparation",
      "Ran performance analysis across computer vision research tasks",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Brainwave Matrix Solutions",
    points: [
      "Built NLP systems for sentiment analysis",
      "Handled text preprocessing and feature engineering",
    ],
  },
  {
    role: "Automation Intern",
    org: "Overseas Cyber Technical Services Pvt. Ltd.",
    points: [
      "Built web scraping and process automation pipelines",
      "Delivered restaurant analytics and data aggregation systems",
    ],
  },
];

export const skills = {
  "AI & ML": ["Deep Learning", "Computer Vision", "Generative AI", "LLMs", "RAG", "NLP"],
  Frameworks: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "FastAPI", "OpenCV"],
  Analytics: ["Power BI", "Tableau", "KNIME", "Excel"],
  Programming: ["Python", "Java", "SQL"],
};
