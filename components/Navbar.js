import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { logoutSet } from "@/redux/reducers/slice/authSlice";

// Make Function
const NavBar = () => {
  
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state?.persistedReducer?.user?.auth);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link className="navbar-brand" href="/">
            Todo Application
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {userAuth ? (
                <>
                  <Link className="nav-link" onClick={()=>{dispatch(logoutSet())}} href="">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" href="/login">
                    Login
                  </Link>
                  <Link className="nav-link" href="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// Export Function For Use in Another File
export default NavBar;
