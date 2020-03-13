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

interface ConvertKitOptions {
  firstName?: string
  fields?: {
    [key: string]: string | number;
  }
  tags?: number[]
}

/**
 * Submit form data to a Serverless ConvertKit function
 *
 * @param {number} formId Convertkit Form ID
 * @param {string} email Subscriber email address
 * @param {ConvertKitOptions} options A set of optional fields accepted by the ConvertKit API
 *
 * @example
 *    addToConvertkit(289382, 'name@email.com') Subscribe to a form with just email
 *    addToConvertkit(289382, 'name@email.com', { firstName: 'name' }) Subscribe to a form with name and email
 *    addToConvertkit(289382, 'name@email.com', { firstName: 'name', tags: [1234, 2348], fields: {last_name: "ross", age: 25} }) Subscribe to a form with all params filled
 */
export const addToConvertKit = (formId: number, email: string, options: ConvertKitOptions) => {
  const url = `/.netlify/functions/convertkit?formId=${formId}`

  // elegant optional properties https://stackoverflow.com/questions/47892127/succinct-concise-syntax-for-optional-object-keys-in-es6-es7/47892178
  const body = {
    email,
    ...(options.firstName && { first_name: options.firstName }),
    ...(options.fields && { fields: options.fields }),
    ...(options.tags && { tags: options.tags })
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
