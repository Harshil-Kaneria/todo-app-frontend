"use client"
import NavBar from "@/components/Navbar";
import styles from './page.module.css'
import { Container } from "react-bootstrap";

export default function Home() {
  return (<>
    <NavBar />
    <Container className={`text-center vh-100`}>
      <h1 className={styles["tracking-in-contract-bck"]}>Todo Application</h1>
    </Container>
  </>)
}
