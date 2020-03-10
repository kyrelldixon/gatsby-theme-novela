import React, { useState } from "react"
import { Formik, Form, Field } from "formik";
import { addToConvertkit } from '../../utils';

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
    addToConvertkit(values.email)
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
        <div className="w-full sm:w-112 text-center bg-white mx-auto rounded-lg pt-8 sm:shadow-lg">
          <div className="px-8">
            <p className="text-2xl font-semibold text-center text-gray-800">Be an Insider</p>
            <p className="text-lg">Subscribe to get exclusive pricing and an inside look into the book's development.</p>
          </div>
          <Form className="flex-col px-8 pt-6 pb-8">
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:border-indigo-500"
                name="name"
                placeholder="Name"
                type="text"
              />
              {errors.name && touched.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-indigo-500"
                name="email"
                placeholder="Email"
                type="email"
              />
              {errors.email && touched.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="flex flex-col items-center justify-center">
              {
                error &&
                <p className="text-red-500 text-sm italic -mt-3 mb-3">{error}</p>
              }
              {
                subscribed &&
                <p className="text-green-500 text-sm italic -mt-3 mb-3">Your opt-in email is on the way!</p>
              }
              <button
                className={
                  `bg-teal-400 ${!isSubmitting ? "hover:bg-teal-500" : "cursor-not-allowed"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`
                }
                type="submit"
                disabled={isSubmitting || subscribed}
              >
                {subscribed ? "👍🏽" : "Subscribe"}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default EmailForm