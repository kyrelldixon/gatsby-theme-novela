import React, { useState } from "react"
import { Formik, Form, Field } from "formik";
import { addToConvertKit } from '../../utils';

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = `Hi, I'm Kai. What’s your name?`
  }

  if (!values.email) {
    errors.email = "This one's important!"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Forgot a character?'
  }

  return errors
}

const initialValues = {
  name: '',
  email: '',
}

const EmailForm = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(values) {
    const formId = 1241734
    const tags = [1343912]
    addToConvertKit(formId, values.email, values.name, null, tags)
      .then(() => {
        setSubscribed(true)

        setTimeout(() => {
          setSubscribed(false);
        }, 6000);
      })
      .catch(error => {
        if (!error.message) {
          // If there is a timeout error, then there is no error message
          // then the error is likely content blocking.
          setError('Looks like your browser is blocking this. Try to disable any tracker-blocking feature and resubmit.');
          return;
        }
        setError(error.message);
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="w-full text-grey-900 mx-auto rounded-lg pt-8">
          <div className="mb-4">
            <p className="text-2xl font-semibold text-grey-1000 mb-4">Join the newsletter</p>
            <p className="text-base">
              Subscribe to get free tips, ebooks, and blog posts that will help you get started building websites now. You'll also get exclusive pricing and an inside look into the book's development.
            </p>
          </div>
          <Form className="text-base flex flex-col flex-wrap md:flex-row py-2">
            <div className="flex-1 mb-4 md:mr-2">
              <Field
                className={`appearance-none border placeholder-grey-700 ${errors.name && touched.name ? "border-red-500" : "border-grey-400"} rounded w-full py-3 px-3 text-grey-800 leading-tight focus:border-blue-400`}
                name="name"
                placeholder="Name"
                type="text"
              />
              {errors.name && touched.name && <p className="text-red-500 text-xs mt-2 italic">{errors.name}</p>}
            </div>
            <div className="flex-1 mb-4 md:mr-2">
              <Field
                className={`appearance-none border placeholder-grey-700 ${errors.email && touched.email ? "border-red-500" : "border-grey-400"} rounded w-full py-3 px-3 text-grey-800 leading-tight focus:border-blue-400`}
                name="email"
                placeholder="Email"
                type="email"
              />
              {errors.email && touched.email && <p className="text-red-500 text-xs mt-2 italic">{errors.email}</p>}
            </div>
            <button
              className={
                `bg-blue-500 mb-4 md:w-full lg:w-32 ${!isSubmitting ? "hover:bg-blue-600" : "cursor-not-allowed"} text-base text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`
              }
              type="submit"
              disabled={isSubmitting || subscribed}
            >
              {subscribed ? "👍🏽" : "Subscribe"}
            </button>
            <div className="w-full">
              {
                error &&
                <p className="text-center text-red-500 text-sm italic mb-3">{error}</p>
              }
              {
                subscribed &&
                <p className="text-center text-green-500 text-sm italic mb-3">Your opt-in email is on the way!</p>
              }
            </div>
          </Form>
          <p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      )}
    </Formik>
  )
}

export default EmailForm