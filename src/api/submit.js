const axios = require(`axios`);

const validateEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (!req?.body?.name || !req?.body?.email || !validateEmail(req?.body?.email)) {
    res.status(400).json({ error: true });
    return;
  }

  axios
    .post(process.env.HOOK_LINK, {
      name: req.body.name,
      email: req.body.email,
    })
    .then(() => {
      res.status(200).json({ sent: true });
    });
}
