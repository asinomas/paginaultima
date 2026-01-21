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
    } catch {
      setResponse('Error obteniendo respuesta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Consultor IA</h3>
      <textarea 
        value={prompt} 
        onChange={e => setPrompt(e.target.value)} 
        placeholder="Escribe tu consulta aquí..."
        style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleAsk} disabled={loading} style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
        {loading ? 'Consultando…' : 'Consultar'}
      </button>
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '10px' }}>
        <strong>Respuesta:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
