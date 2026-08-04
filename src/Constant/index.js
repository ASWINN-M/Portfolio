export const myProjects = [
  {
    id: 0,
    title: "The Hybrid Agent",
    description:
      "Currently in progress — an advanced AI assistant with tool-calling agents, MCP integrations, and optional voice interaction for local + cloud workflows.",
    subDescription: [
      "Orchestrates agent workflows with LangGraph and LangChain tool adapters.",
      "Connects MCP servers for desktop actions like Notepad and Microsoft Office apps.",
      "Uses Groq-hosted Llama models with conversation memory and safety guidelines.",
      "Includes Whisper speech-to-text and TTS for a multimodal assistant experience.",
    ],
    href: "https://github.com/ASWINN-M/The_Hybrid_Agent",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    status: "In Progress",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo-only.png" },
      { id: 2, name: "LangGraph", path: "/assets/logos/python-logo-only.png" },
      { id: 3, name: "MCP", path: "/assets/logos/microsoft.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 1,
    title: "Multilingual OCR & Translation",
    description:
      "End-to-end OCR pipeline that captures text from images/camera streams, detects language, translates it, and converts results to speech.",
    subDescription: [
      "Uses PaddleOCR with Groq vision models for language detection and high-accuracy text extraction.",
      "Supports live capture from an ESP32-CAM stream plus image upload workflows.",
      "Translates recognized text and generates audio output with text-to-speech.",
      "Built with a FastAPI backend and a frontend interface for interactive document processing.",
    ],
    href: "https://github.com/ASWINN-M/OCR",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo-only.png" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 2,
    title: "RAG Document Intelligence",
    description:
      "Retrieval-Augmented Generation system for document Q&A using embeddings, vector search, and LangChain pipelines.",
    subDescription: [
      "Ingests PDFs and text with PyMuPDF / PyPDF, then embeds content with sentence-transformers and Ollama.",
      "Stores and retrieves vectors with ChromaDB, FAISS, and MongoDB Atlas Vector Search.",
      "Implements similarity search with metadata filtering for grounded answers.",
      "Includes evaluation notebooks and experiment tracking for retrieval quality.",
    ],
    href: "https://github.com/ASWINN-M/RAG-2",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo-only.png" },
      { id: 2, name: "LangChain", path: "/assets/logos/python-logo-only.png" },
      { id: 3, name: "ChromaDB", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 3,
    title: "Emotion Detection from Text",
    description:
      "Multilingual NLP app that detects emotions from user text using translation, preprocessing, TF-IDF features, and an XGBoost classifier.",
    subDescription: [
      "Automatically detects input language and translates non-English text to English before classification.",
      "Applies NLP cleaning (tokenization, stopword removal) and predicts emotions with a trained XGBoost pipeline.",
      "Classifies emotions such as joy, sadness, anger, fear, surprise, and more with confidence scores.",
      "Deployed as an interactive Streamlit app for real-time emotion analysis.",
    ],
    href: "https://github.com/ASWINN-M/EmotionsBasedOnTexts",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo-only.png" },
      { id: 2, name: "XGBoost", path: "/assets/logos/python-logo-only.png" },
      { id: 3, name: "NLP", path: "/assets/logos/deep-learning.png" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 4,
    title: "Healthcare AI Agent",
    description:
      "Clinical decision-support agent that retrieves medical literature via MCP/PubMed and returns structured, disclaimer-aware guidance.",
    subDescription: [
      "LangGraph agent pipeline with conversation memory and user thread persistence.",
      "Uses MCP to query medical literature and summarize findings with Groq LLMs.",
      "Provides structured interpretation: summary, possible causes, and next steps.",
      "Includes SQL setup for user profiles and conversation storage.",
    ],
    href: "https://github.com/ASWINN-M/Healthcare-Agent",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo-only.png" },
      { id: 2, name: "LangGraph", path: "/assets/logos/python-logo-only.png" },
      { id: 3, name: "MCP", path: "/assets/logos/microsoft.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
];
