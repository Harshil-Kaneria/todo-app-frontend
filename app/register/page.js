"use client"
import RegistrationForm from "@/components/RegistrationForm";
import NavBar from "@/components/Navbar";
import { Card, Container } from "react-bootstrap";
// Make Function
const RegisterPage = () => {
    return (<>
        <NavBar />
    <Container className="mt-5">
      <Card>
        <Card.Body className="shadow p-3 bg-body rounded">
          <RegistrationForm />
        </Card.Body>
      </Card>
    </Container>
    </>);
  }
  
  // Export Function For Use in Another File
  export default RegisterPage;