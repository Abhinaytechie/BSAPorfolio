import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

import { GoogleGenerativeAI } from "@google/generative-ai";

// Portfolio knowledge base for the AI
const PORTFOLIO_CONTEXT = `
You are the AI assistant for Bondalapati Bhargava Sai Abhinay's portfolio. 
Abhinay is an AI-Integrated Full-Stack Developer based in Hyderabad, India.

Key Information:
- Name: Bondalapati Bhargava Sai Abhinay (Abhinay)
- Education: B.Tech in CSE (AIML) at Malla Reddy University (2022-Present), CGPA: 9.11
- Role: AI-Integrated Full-Stack Developer
- Contact: bbsabhinaywork@gmail.com, linkedin.com/in/abhinaybondalapati, github.com/Abhinaytechie

Technical Skills:
- Languages: Python, Java, JavaScript, TypeScript, SQL
- Frontend: React, Tailwind CSS, Framer Motion, Vite
- Backend: FastAPI, Spring Boot, PostgreSQL, MongoDB, Docker
- AI/GenAI: LangChain, LangGraph, Gemini API, OpenAI, Groq, n8n automation

Experience:
1. AI Engineer Intern at One Tapp Consulting (Jan 2026 - Present):
   - Developed complex n8n automation workflows, reducing manual tasks by 80%.
   - Integrated APIs like OpenAI, Gemini, and Slack.
2. Full Stack Developer Intern at Spotmies LLP (Jun 2025 - Sep 2025):
   - Built RESTful APIs and React modules.
   - Deployed containerized microservices with Docker.
3. AI Developer Intern at VISWAM.AI (Apr 2025 - Jun 2025):
   - Developed AI chatbots and agents using LangChain and LLM APIs.
   - Improved response accuracy by 18%.

Projects:
- CodeAtlas — AI Engineering Ecosystem

Built CodeAtlas, a full-stack AI platform designed as a complete developer growth ecosystem rather than a traditional roadmap site.

Designed personalized skill-based learning roadmaps that adapt to user goals and experience levels.

Developed an AI mock interview simulator to help engineers practice technical interviews with realistic prompts and feedback.

Implemented mastery and confidence tracking dashboards to visualize learning progress and skill growth.

Created a GitHub repository visualizer to help developers quickly understand unfamiliar codebases and reduce onboarding time by ~40%.

Built an AI-powered README generator to automatically produce structured technical documentation.

Architected clean, scalable REST APIs enabling future integrations and modular feature expansion.
- LinkedIn Automation: AI-driven outreach tool using Python and Selenium.
- Smart Research Assistant — AI Paper Intelligence Platform

Built an AI-powered research platform that helps users analyze academic papers faster and organize knowledge efficiently.

Developed an instant paper summarization system powered by LLMs to extract key insights from research documents.

Implemented features for reference organization, structured knowledge extraction, and content analysis.

Designed an upload-to-analysis workflow that simplifies academic research into a single intelligent interface.

Enabled researchers to save significant time by automating reading, note-taking, and information structuring.
- SQL Agent — Natural Language to SQL (LangChain)

Developed an intelligent NLP-to-SQL agent that converts plain English questions into optimized SQL queries using LangChain.

Engineered LLM-driven prompt templates and chain workflows for query parsing, context handling, and error correction.

Integrated with live databases to execute generated queries and return real-time results without manual SQL writing.

Improved accessibility for non-technical users through a conversational database interface.

Implemented context retention to support multi-step queries and more accurate responses.

Reduced friction in data exploration by automating complex SQL generation.

Achievements:
- 100+ DSA problems solved on LeetCode/GFG.
- State-Level Buildathon selection by NxtWave (top ~1,000 from 60,000).
- GDG Active Member and SSOC Contributor (15+ PRs merged).

Guidelines:
- Be professional, helpful, and friendly.
- Keep responses concise and focused on the portfolio.
- If asked something unrelated to Abhinay's work or life, politely redirect them.
- Use the context provided above to answer accurately.
-always give a human readable markdown format response.
`;

async function generateAIResponse(history: Message[], userInput: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === "your_api_key_here") {
    return "I'm currently in 'offline' mode because the API key is missing. However, I can still tell you that Abhinay is an AI-Integrated Full-Stack Developer specializing in React, Spring Boot, and LangChain!";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: PORTFOLIO_CONTEXT
    });

    // Map the UI history to Gemini format (user -> user, assistant -> model)
    // Gemini expects the first message to be from the 'user' if history is provided.
    // Our first message in the 'messages' state is the assistant intro, so we skip it 
    // to start the 'history' with the first real user question.
    const mappedHistory = history.slice(1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model' as 'user' | 'model',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({ history: mappedHistory });
    const result = await chat.sendMessage(userInput);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("AI Error:", error);
    const errorMessage = error?.message || "Unknown error";
    if (errorMessage.includes("API key not valid")) {
      return "It seems the API key provided is not valid. Please check your .env file.";
    }
    if (errorMessage.includes("quota")) {
      return "I've reached my daily quota! Please try again later.";
    }
    return `I encountered a bit of a brain freeze! (Error: ${errorMessage})`;
  }
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m Abhinay\'s portfolio assistant. Ask me anything about his skills, projects, experience, or achievements!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const response = await generateAIResponse(messages, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={24} />
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-black border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/5">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Portfolio Assistant</p>
                <p className="text-white/40 text-xs">Ask about Abhinay</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 text-sm ${message.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/10'
                      }`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 border border-white/10 p-3 flex gap-1">
                    <motion.span
                      className="w-2 h-2 bg-white/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-white/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-white/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-3 py-2 bg-transparent border border-white/20 text-white text-sm placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="px-3 py-2 bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
