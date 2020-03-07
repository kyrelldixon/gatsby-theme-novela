const axios = require('axios')

exports.handler = async (event) => {
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
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}
