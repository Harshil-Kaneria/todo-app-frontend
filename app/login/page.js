"use client";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

// Make Function
const LoginPage = () => {

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={0} md={4} lg={4}></Col>
          <Col xs={12} md={4} lg={4}>
            <LoginForm />
          </Col>
          <Col xs={0} md={4} lg={4}></Col>
        </Row>
      </Container>
      <p className="mt-5 pt-1">&nbsp;</p>
      <Footer />
    </>
  );
};

// Export Function For Use in Another File
export default LoginPage;
