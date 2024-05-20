const HUBSPOT_API_ENDPOINT = 'https://api.hsforms.com/submissions/v3/integration/secure/submit';

const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { formId, data } = req.body;

  if (!formId || !data) {
    res.status(400).json({ error: true });
    return;
  }

  try {
    const response = await fetch(
      `${HUBSPOT_API_ENDPOINT}/${process.env.GATSBY_HUBSPOT_FORM_PORTAL_ID}/${formId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status >= 400) {
      const { message } = await response.json();

      return res.status(response.status).json({ error: true, message });
    }

    return res.status(200).json({ sent: true });
  } catch (error) {
    const errMessage = error instanceof Error ? error?.message ?? error?.toString() ?? '' : '';

    return res.status(500).json({ error: true, message: errMessage });
  }
};

export default handler;
