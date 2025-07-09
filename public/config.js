export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`window.GEMINI_API_KEY = "${process.env.NEXT_PUBLIC_GEMINI_API_KEY}";`);
}
