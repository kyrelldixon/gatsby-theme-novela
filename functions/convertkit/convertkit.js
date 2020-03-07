const axios = require('axios')

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { CONVERTKIT_FORM_ID, CONVERTKIT_API_KEY } = process.env
  const URL = `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`

  try {
    const body = {
      ...JSON.parse(event.body),
      api_key: CONVERTKIT_API_KEY,
    }

    const { data, status } = await axios.post(URL, body)
    return {
      statusCode: status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { data, status } = error.response;
    return {
      statusCode: status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  }
}
