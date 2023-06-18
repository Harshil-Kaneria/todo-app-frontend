"use client"
import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";
import { Card, Container } from "react-bootstrap";
// Make Function
const LoginPage = () => {
  return (<>
    <NavBar />
    <Container className="mt-5">
      <Card>
        <Card.Body className="shadow p-3 bg-body rounded">
          <LoginForm />
        </Card.Body>
      </Card>
    </Container>
  </>);
}

// Export Function For Use in Another File
export default LoginPage;