const axios = require(`axios`);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await axios.get(
      `${process.env.GATSBY_NOTIFICATIONS_API_URL}/sub/${req.params.categoryId}/notifications`
    );
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
