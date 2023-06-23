"use client";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
// Make Function
const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={0} md={4} lg={4}></Col>
          <Col xs={12} md={4} lg={4}>
            <RegistrationForm />
          </Col>
          <Col xs={0} md={4} lg={4}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

// Export Function For Use in Another File
export default RegisterPage;
