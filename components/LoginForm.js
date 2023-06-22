import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      console.log("🚀 ~ file: RegistrationForm.js:31 ~ RegistrationForm ~ values:", values)
      formik.resetForm()
    },
  });

  return (<>
    <Form onSubmit={formik.handleSubmit}>
      
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
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
        </Form.Group>

    <Container className='text-center'>
      <Button variant="outline-success" type="submit">
        Login
      </Button>
    </Container>

    </Form>
  </>);
}

// Export Function For Use in Another File
export default LoginForm;