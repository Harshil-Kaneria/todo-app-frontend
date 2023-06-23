import { Button, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

// Make Function
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
      <Form onSubmit={formik.handleSubmit} className="shadow p-3 bg-body rounded">
        <Card>
          <Card.Header className="text-center fw-bolder">Login</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" hasValidation>
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
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </>
  );
};

// Export Function For Use in Another File
export default LoginForm;