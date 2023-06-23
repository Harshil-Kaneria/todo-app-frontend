import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className="footer mt-5">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <span>© 2023 Todo Application. All rights reserved.</span>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;