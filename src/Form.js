import React, { useState, useReducer } from 'react';
// import { useForm } from 'react-hook-form';

const formReducer = (state, e) => (
    {
    ...state,
    [e.target.name]: e.target.value
    }
  )

function Form() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log('data: ', data);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
  }

  return (
    <>
    {/* alert the user that their form is submitting by displaying a short message in the HTML that will display when submitting is true. */}
      {submitting &&
        <div>Submitting Form...</div>
      }

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input type="text" name="name" onChange={setFormData} />
        </label>

        {/* <label htmlFor="email">
          Email:
          <input type='text' name='email' />
        </label> */}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
