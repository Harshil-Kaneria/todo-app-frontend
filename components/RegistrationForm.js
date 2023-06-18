import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Make Function
const RegistrationForm = () => {
  return (<>
       <Form>

       <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

    <Container className='text-center'>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Container>

    </Form>
  </>);
}

// Export Function For Use in Another File
export default RegistrationForm;