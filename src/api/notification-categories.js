export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await fetch('https://api.notifications.directory/categories');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
