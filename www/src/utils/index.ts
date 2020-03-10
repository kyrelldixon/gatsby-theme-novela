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

export const addToConvertkit = (email) => {
  const url = `/.netlify/functions/convertkit`
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
    .then(res => (console.log(res), res.json()))
    .catch(err => (console.log(err), { ...err, message: "Something went wrong" }));
}
