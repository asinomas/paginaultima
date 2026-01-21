import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;
const requests: Record<string, { count: number; time: number }> = {};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();

  const record = requests[ip as string];
  if (record && now - record.time < WINDOW_MS) {
    if (record.count >= RATE_LIMIT) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    record.count++;
  } else {
    requests[ip as string] = { count: 1, time: now };
  }

  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.length < 5) {
      return res.status(400).json({ error: 'Invalid prompt' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
      temperature: 0.6,
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'AI request failed' });
  }
}
