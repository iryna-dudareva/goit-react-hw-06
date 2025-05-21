import React from 'react'
import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'



const ContactForm = ({onAdd}) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!'). required('Required'),
    number: Yup.number().typeError('Invalid input!').min(100, 'Too short!').max(999999999, 'Too long!'). required('Required'),
  });



  const handleSubmit = (values, {resetForm}) => {
    console.log("Form submitted with values:", values);
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  )
};

export default ContactForm