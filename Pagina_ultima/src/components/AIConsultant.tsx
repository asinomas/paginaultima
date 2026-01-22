import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Bienvenido a BlackTI! Soy tu consultor inteligente. ¿Te gustaría saber sobre nuestras soluciones de Arquitectura Cloud o Desarrollo Estratégico?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Usamos la API Key desde las variables de entorno de Cloudflare
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "Eres el Asistente Experto de BlackTI. Responde con tono ejecutivo, profesional y tecnológico. Ayuda a los usuarios con dudas sobre infraestructura, nube y gestión de proyectos. BlackTI es una consultora boutique de alto nivel de Chile."
      });

      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const modelText = response.text();

      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, estoy experimentando una alta demanda. Por favor contacta a soporte@blackti.cl para una atención directa.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-end p-6 sm:p-8 pointer-events-none">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col h-[650px] max-h-[85vh] overflow-hidden pointer-events-auto border border-slate-100 animate-fade-in">
        {/* Header */}
        <div className="bg-brand-dark px-6 py-5 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined !text-xl">bolt</span>
              </div>
              <span className="absolute -bottom-1 -right-1 size-3 bg-green-500 border-2 border-brand-dark rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight">Consultor IA BlackTI</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Online • Expert Mode</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-all">
            <span className="material-symbols-outlined !text-xl">expand_more</span>
          </button>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`group relative max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20' 
                  : 'bg-white border border-slate-200 text-slate-700 shadow-sm rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 px-5 py-4 rounded-3xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-5 bg-white border-t border-slate-100 shrink-0">
          <div className="flex gap-3 bg-slate-100 p-1.5 rounded-2xl items-center focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white transition-all">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Haz una pregunta técnica..."
              className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white size-10 rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined !text-xl">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
