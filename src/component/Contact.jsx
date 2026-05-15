import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    alert("Form Submitted");

    resetForm();
  };

  return (
    <div className="contact-container" id="contact">
      <h1>Contact</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">

          <Field
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <ErrorMessage name="name" component="p" className="error" />

          <Field
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <ErrorMessage name="email" component="p" className="error" />

          <Field
            as="textarea"
            name="message"
            placeholder="Enter Message"
          />
          <ErrorMessage name="message" component="p" className="error" />

          <button type="submit">Send Message</button>

        </Form>
      </Formik>
    </div>
  );
}

export default Contact;