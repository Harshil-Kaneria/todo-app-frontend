"use client";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
// Make Function
const LoginPage = () => {

  const router = useRouter()
  const userAuth = useSelector((state) => state?.persistedReducer?.user?.auth);
  useEffect(()=>{
    if(userAuth){
      router.push('/')
    }
  },[])

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
