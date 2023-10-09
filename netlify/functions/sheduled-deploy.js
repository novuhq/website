import { schedule } from '@netlify/functions';

const fetch = require('node-fetch');

const handler = schedule('0 */2 * * *', async () => {
  await fetch(process.env.REDEPLOY_HOOK_URL, {
    method: 'POST',
  }).then((response) => {
    console.log('Build hook response:', response);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
