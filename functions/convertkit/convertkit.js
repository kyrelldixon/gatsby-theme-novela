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

  if (!event.queryStringParameters.formId) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Missing Form ID" }),
    };
  }

  const { formId } = event.queryStringParameters

  const { CONVERTKIT_API_KEY } = process.env
  const URL = `https://api.convertkit.com/v3/forms/${formId}/subscribe`

  try {
    const body = {
      ...JSON.parse(event.body),
      api_key: CONVERTKIT_API_KEY,
    }

    console.log(JSON.stringify(body, null, 2))

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
