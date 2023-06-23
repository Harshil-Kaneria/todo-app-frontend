import { Button, Card,Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

// Make Function
const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Must be grater then 2 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .min(2, "Must be grater then 2 characters")
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().password().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: RegistrationForm.js:31 ~ RegistrationForm ~ values:",
        values
      );
      formik.resetForm();
    },
  });

  return (
    <>
      <Form
        onSubmit={formik.handleSubmit}
        className="shadow p-3 bg-body rounded"
      >
        <Card>
          <Card.Header className="text-center fw-bolder">Register</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                name="first_name"
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <p className="text-danger">{formik.errors.first_name}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                name="last_name"
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <p className="text-danger">{formik.errors.last_name}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </>
  );
};

// Export Function For Use in Another File
export default RegistrationForm;
