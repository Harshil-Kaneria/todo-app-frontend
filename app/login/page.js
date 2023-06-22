"use client";
import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";
import { Card, Container, Row, Col } from "react-bootstrap";
// Make Function
const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={0} md={4} lg={4}></Col>
          <Col xs={12} md={4} lg={4}>
            <Card>
              <Card.Body className="shadow p-3 bg-body rounded">
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} md={4} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

// Export Function For Use in Another File
export default LoginPage;
