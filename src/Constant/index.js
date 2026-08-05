import { asset } from "../utils/asset";

export const RESUME_URL = asset("Aswin_Resume.pdf");
export const RESUME_DRIVE_URL =
  "https://drive.google.com/uc?export=download&id=1FGcE50Gf24SrCK6yj0zRqYilGcjeKoFN";

export const myProjects = [
  {
    id: 0,
    title: "The Hybrid Agent",
    description:
      "Work in progress — an AI assistant that can chat, use tools, and optionally talk out loud for local + cloud workflows.",
    subDescription: [
      "Orchestrates agent workflows with LangGraph and LangChain tool adapters.",
      "Connects MCP servers for desktop actions like Notepad and Microsoft Office apps.",
      "Uses Groq-hosted Llama models with conversation memory and safety guidelines.",
      "Includes Whisper speech-to-text and TTS for a multimodal assistant experience.",
    ],
    href: "https://github.com/ASWINN-M/The_Hybrid_Agent",
    logo: "",
    image: asset("assets/projects/game-engine.jpg"),
    status: "In Progress",
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python-logo-only.png") },
      { id: 2, name: "LangGraph", path: asset("assets/logos/python-logo-only.png") },
      { id: 3, name: "MCP", path: asset("assets/logos/microsoft.svg") },
      { id: 4, name: "Git", path: asset("assets/logos/git.svg") },
    ],
  },
  {
    id: 1,
    title: "Multilingual OCR & Translation",
    description:
      "Takes text from photos or a camera, figures out the language, translates it, and can read it out loud.",
    subDescription: [
      "Uses PaddleOCR with Groq vision models for language detection and high-accuracy text extraction.",
      "Supports live capture from an ESP32-CAM stream plus image upload workflows.",
      "Translates recognized text and generates audio output with text-to-speech.",
      "Built with a FastAPI backend and a frontend interface for interactive document processing.",
    ],
    href: "https://github.com/ASWINN-M/OCR",
    logo: "",
    image: asset("assets/projects/auth-system.jpg"),
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python-logo-only.png") },
      { id: 2, name: "JavaScript", path: asset("assets/logos/javascript.svg") },
      { id: 3, name: "React", path: asset("assets/logos/react.svg") },
      { id: 4, name: "Git", path: asset("assets/logos/git.svg") },
    ],
  },
  {
    id: 2,
    title: "RAG Document Intelligence",
    description:
      "Ask questions about your own PDFs and get answers grounded in those documents using embeddings and vector search.",
    subDescription: [
      "Ingests PDFs and text with PyMuPDF / PyPDF, then embeds content with sentence-transformers and Ollama.",
      "Stores and retrieves vectors with ChromaDB, FAISS, and MongoDB Atlas Vector Search.",
      "Implements similarity search with metadata filtering for grounded answers.",
      "Includes evaluation notebooks and experiment tracking for retrieval quality.",
    ],
    href: "https://github.com/ASWINN-M/RAG-2",
    logo: "",
    image: asset("assets/projects/elearning.jpg"),
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python-logo-only.png") },
      { id: 2, name: "LangChain", path: asset("assets/logos/python-logo-only.png") },
      { id: 3, name: "ChromaDB", path: asset("assets/logos/sqlite.svg") },
      { id: 4, name: "Git", path: asset("assets/logos/git.svg") },
    ],
  },
  {
    id: 3,
    title: "Emotion Detection from Text",
    description:
      "A small app that guesses the emotion in a message — even if the text isn't in English.",
    subDescription: [
      "Automatically detects input language and translates non-English text to English before classification.",
      "Applies NLP cleaning (tokenization, stopword removal) and predicts emotions with a trained XGBoost pipeline.",
      "Classifies emotions such as joy, sadness, anger, fear, surprise, and more with confidence scores.",
      "Deployed as an interactive Streamlit app for real-time emotion analysis.",
    ],
    href: "https://github.com/ASWINN-M/EmotionsBasedOnTexts",
    logo: "",
    image: asset("assets/projects/wordpress-theme.jpg"),
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python-logo-only.png") },
      { id: 2, name: "XGBoost", path: asset("assets/logos/python-logo-only.png") },
      { id: 3, name: "NLP", path: asset("assets/logos/deep-learning.png") },
      { id: 4, name: "Git", path: asset("assets/logos/git.svg") },
    ],
  },
  {
    id: 4,
    title: "Healthcare AI Agent",
    description:
      "An agent that looks up medical literature first, then explains findings carefully with clear disclaimers.",
    subDescription: [
      "LangGraph agent pipeline with conversation memory and user thread persistence.",
      "Uses MCP to query medical literature and summarize findings with Groq LLMs.",
      "Provides structured interpretation: summary, possible causes, and next steps.",
      "Includes SQL setup for user profiles and conversation storage.",
    ],
    href: "https://github.com/ASWINN-M/Healthcare-Agent",
    logo: "",
    image: asset("assets/projects/blazor-app.jpg"),
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python-logo-only.png") },
      { id: 2, name: "LangGraph", path: asset("assets/logos/python-logo-only.png") },
      { id: 3, name: "MCP", path: asset("assets/logos/microsoft.svg") },
      { id: 4, name: "Git", path: asset("assets/logos/git.svg") },
    ],
  },
];

export const projectDeepDives = [
  {
    id: 0,
    title: "The Hybrid Agent",
    problem:
      "Regular chatbots are fine for Q&A, but they stop there. I wanted an assistant that can remember context, use tools, and even help with desktop tasks — not just talk.",
    approach:
      "I wired a LangGraph agent to Groq's Llama models and connected MCP tools so it can open apps like Notepad or Office. I also added Whisper for speech input and text-to-speech so it feels more natural to use.",
    impact:
      "It's becoming my main sandbox for agent work — a step from “chatbot” toward something that can help you get things done.",
    stack: ["LangGraph", "MCP", "Groq Llama", "Whisper", "Python"],
  },
  {
    id: 1,
    title: "Multilingual OCR & Translation",
    problem:
      "Text in photos or from a camera is messy to work with, especially when it's in languages like Tamil or Hindi. Detection, translation, and reading it out loud usually mean jumping between apps.",
    approach:
      "I built a flow that grabs a frame from an ESP32 camera (or an upload), figures out the language with a vision model, runs OCR, translates the text, and can speak both versions. FastAPI handles the backend.",
    impact:
      "A hands-on pipeline for multilingual documents — from camera capture to readable and spoken text.",
    stack: ["PaddleOCR", "Groq Vision", "FastAPI", "OpenCV", "TTS"],
  },
  {
    id: 2,
    title: "RAG Document Intelligence",
    problem:
      "If you ask an LLM about your own PDFs, it often makes things up. I wanted answers that actually come from the documents you give it.",
    approach:
      "I split PDFs into chunks, turned them into embeddings, stored them in vector DBs like Chroma and MongoDB, then used LangChain to search and answer with that context. I also kept notebooks to check how good the retrieval was.",
    impact:
      "A clear RAG setup I can reuse — load docs, search them, and get grounded answers instead of guesses.",
    stack: ["LangChain", "ChromaDB", "FAISS", "MongoDB", "Ollama"],
  },
  {
    id: 3,
    title: "Emotion Detection from Text",
    problem:
      "A lot of emotion tools assume English. Chat and social text show up in many languages, and I wanted something light that still works.",
    approach:
      "The app detects the language, translates to English if needed, cleans the text, and runs a trained XGBoost model to predict emotions with confidence scores. Streamlit makes it easy to try live.",
    impact:
      "A small but complete NLP project — from training and saving the model to a simple app anyone can use.",
    stack: ["XGBoost", "TF-IDF", "Streamlit", "NLP", "Translation"],
  },
  {
    id: 4,
    title: "Healthcare AI Agent",
    problem:
      "Health questions need careful answers. A normal chatbot can sound confident even when it's wrong, which is risky in a medical context.",
    approach:
      "This agent pulls literature through an MCP/PubMed setup, then summarizes it into clear sections like possible causes and next steps — with a disclaimer that it's not a diagnosis. Conversations and profiles are stored in SQL.",
    impact:
      "A safer pattern for domain agents: look things up first, then explain — instead of improvising medical advice.",
    stack: ["LangGraph", "MCP", "PubMed", "Groq", "SQL"],
  },
];
