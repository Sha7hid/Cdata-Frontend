import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Card, Container, Navbar, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession, signOut, getSession } from "next-auth/react";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://cdata-backend-production-b82b.up.railway.app/api/students"
  );
  const data = await res.json();
  return {
    props: { results: data },
  };
};
export default function Students({ results }) {
  const { data: session, status } = useSession();
  if (session) {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm" >
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
        <Container>
          <Navbar.Brand href="/">
            <h2 className={styles.navBrand}>Cdata</h2>
          </Navbar.Brand>
          <Navbar.Collapse>
            <NavLink eventKey="1">
            <Link href="/" className={styles.navlink}>
            Home
          </Link>
            </NavLink><br></br>
            <NavLink eventKey="2">
          <Link href="/students" className={styles.navlink}>
            students
          </Link>
          </NavLink>
          <NavLink eventKey="3">
          <Link href="/teachers" className={styles.navlink}>
            teachers
          </Link>
          </NavLink>
          </Navbar.Collapse>
        
          <button className="btn btn-danger" onClick={() => signOut()} >SignOut</button>
        </Container>
      </Navbar>
      <div  className={styles.background}>
        <div className={styles.gridview}>
          {results.map((result) => (
            <div className={styles.cardwrapper}>
              <Card bg="dark"
              border="primary"
                style={{
                  width: "15rem",
                  height: "20rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color:"white",
                  borderWidth:4,
                  borderRadius:"rounded"
                }}
              >
                <Card.Img
                  style={{ width: "9rem", height: "10rem",marginTop:"1rem" }}
                  variant="top"
                  src={result.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p className={styles.text}>{result.name}</p>
                  </Card.Title>
                  <Card.Text><p className={styles.para}>Course - {result.course}</p></Card.Text>
                  <Card.Text><p className={styles.para}>Age - {result.age}</p></Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );}else {
    return (
      <div className={styles.background3}>
        <h2>You are not signed in</h2>
        <Link href='/login'><button className="btn btn-primary">Go to Login page</button></Link>
      </div>
    );
  }
}
