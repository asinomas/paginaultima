import { useState } from 'react';
import { askAI } from '../services/ai';

export default function AIConsultant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    try {
      setLoading(true);
      const reply = await askAI(prompt);
      setResponse(reply);
    } catch (err: any) {
      setResponse(err.message || 'Error obteniendo respuesta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #eaeaea', borderRadius: '12px', maxWidth: '500px' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Consultor Inteligente</h2>
      <textarea 
        value={prompt} 
        onChange={e => setPrompt(e.target.value)} 
        placeholder="¿En qué puedo ayudarte?"
        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
      />
      <button 
        onClick={handleAsk} 
        disabled={loading}
        style={{ marginTop: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: loading ? 'wait' : 'pointer' }}
      >
        {loading ? 'Pensando...' : 'Preguntar a la IA'}
      </button>
      {response && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f0f7ff', borderRadius: '8px' }}>
          <strong>Respuesta:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
