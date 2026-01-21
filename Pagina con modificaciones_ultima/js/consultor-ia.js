// Función para conectar con el backend
async function askAI(prompt) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error('Error en el servicio de IA');
  const data = await res.json();
  return data.reply;
}

// Lógica para manejar la interfaz
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ai-consultant-container');
    if (!container) return;

    container.innerHTML = `
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
        <h3>Consultor IA</h3>
        <textarea id="ai-prompt" placeholder="Escribe tu consulta aquí..." style="width: 100%; min-height: 100px; margin-bottom: 10px;"></textarea>
        <br>
        <button id="ai-btn" style="padding: 10px 20px; cursor: pointer;">Consultar</button>
        <div id="ai-response-box" style="margin-top: 20px; background-color: #f9f9f9; padding: 10px; display: none;">
          <strong>Respuesta:</strong>
          <p id="ai-response"></p>
        </div>
      </div>
    `;

    const btn = document.getElementById('ai-btn');
    const input = document.getElementById('ai-prompt');
    const responseBox = document.getElementById('ai-response-box');
    const responseText = document.getElementById('ai-response');

    btn.addEventListener('click', async () => {
        const prompt = input.value;
        if (!prompt) return;

        btn.disabled = true;
        btn.innerText = 'Consultando...';
        
        try {
            const reply = await askAI(prompt);
            responseText.innerText = reply;
            responseBox.style.display = 'block';
        } catch (error) {
            responseText.innerText = 'Error obteniendo respuesta';
            responseBox.style.display = 'block';
        } finally {
            btn.disabled = false;
            btn.innerText = 'Consultar';
        }
    });
});
