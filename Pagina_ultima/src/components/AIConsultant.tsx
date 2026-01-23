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
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "Eres el Asistente Experto de BlackTI. Responde con tono ejecutivo y profesional. Ayuda con dudas sobre infraestructura y nube."
      });

      const result = await model.generateContent(userMsg);
      const response = await result.response;
      setMessages(prev => [...prev, { role: 'model', text: response.text() }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error de conexión. Intenta más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-end p-6 pointer-events-none">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl flex flex-col h-[600px] pointer-events-auto border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
          <span className="font-bold">Consultor BlackTI</span>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">✕</button>
        </div>

        {/* Chat */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border rounded-xl px-4 py-2"
              placeholder="Escribe aquí..."
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-xl">➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
