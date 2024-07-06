import { useState } from "react";
import styles from "./Form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Form = () => {
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must contain at least 3 symbols")
        .max(15, "Name must contain no more than 15 symbols"),
      email: Yup.string()
        .required("Email is required")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email"),
      date: Yup.date().required("Date is required"),
      comment: Yup.string(),
    }),
    onSubmit: (values) => {
      if (formik.isValid) {
        setFormData(values);
        formik.resetForm();
        window.location.reload();
      } else {
        return;
      }
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Book your camper now</h2>
        <p className={styles.formDescription}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputsWrap}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={styles.input}
          />
          {formik.errors.name && formik.touched.name ? (
            <span className={styles.message}>{formik.errors.name}</span>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={styles.input}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className={styles.message}>{formik.errors.email}</span>
          ) : null}
          <input
            type="date"
            name="date"
            placeholder="Booking date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className={styles.input}
            min={new Date().toISOString().split("T")[0]}
          />
          {formik.errors.date && formik.touched.date ? (
            <span className={styles.message}>{formik.errors.date}</span>
          ) : null}
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            className={styles.textArea}
          />
        </div>
        <button type="submit" className={styles.btnSubmit}>Send</button>
      </form>
    </div>
  );
};