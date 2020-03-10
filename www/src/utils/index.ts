/**
 * Enable or disable scrolling behavior. Particularly useful for mobile interactions
 * and toggling of different drawers.
 * 
 * From https: //github.com/narative/narative.co/blob/master/src/utils/index.ts
 *
 * @param {string} action enable or disable
 *
 * @example
 *    scrollable('enable') Will allow the user to scroll again
 *    scrollable('disable') Will freeze the screen
 */
export const scrollable = (action: string) => {
  if (action.toLowerCase() === 'enable') {
    document.body.style.cssText = null
  } else {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }
}

/**
 * Submit form data to a Serverless ConvertKit function
 *
 * @param {number} formId Convertkit Form ID
 * @param {string} email Subscriber email address
 * @param {string} firstName Subscriber first name
 * @param {string} fields Object of key/value pairs for custom fields (the custom field must exist before you can use it here)
 * @param {string[]} tags Array of tag ids to subscribe to
 *
 * @example
 *    addToConvertkit('289382', 'name@email.com') Subscribe to a form with just email
 *    addToConvertkit('289382', 'name@email.com', 'name') Subscribe to a form with name and email
 *    addToConvertkit('289382', 'name@email.com', { last_name: "ross", age: 25 }, [1234, 2348]) Subscribe to a form with all params filled
 */
export const addToConvertKit = (formId: number, email: string, firstName: string | null = null, fields: {} | null = null, tags: number[] | null = null) => {
  const url = `/.netlify/functions/convertkit?formId=${formId}`

  // elegant optional properties https://stackoverflow.com/questions/47892127/succinct-concise-syntax-for-optional-object-keys-in-es6-es7/47892178
  const body = {
    email,
    ...(firstName && { first_name: firstName }),
    ...(fields && fields),
    ...(tags && tags)
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(err => (console.log(err), { ...err, message: "Something went wrong" }));
}
