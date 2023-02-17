import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { Card, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const getStaticProps = async () => {
    const res = await fetch(
      "https://cdata-backend-production-b82b.up.railway.app/api/teachers"
    );
    const data = await res.json();
    return {
      props: { results: data },
    };
  };
export default function Teachers({results}) {
    return (
        <><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <h2 className={styles.navBrand}>Cdata</h2>
                </Navbar.Brand>
                <Link href='/' className={styles.navlink}>
                    Home
                </Link>
                <Link href='/students' className={styles.navlink}>
                    students
                </Link>
                <Link href='/teachers' className={styles.navlink}>
                    teachers
                </Link>
            </Container>
        </Navbar><div className={styles.background}>
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
                  style={{width: "9rem", height: "10rem" , marginTop:"1rem" }}
                  variant="top"
                  src={result.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p className={styles.text}>{result.name}</p>
                  </Card.Title>
                  <Card.Text><p className={styles.para}>Course - {result.course}</p></Card.Text>
                  <Card.Text><p className={styles.para}>Exp - {result.experience}</p></Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
            </div></>
    );
}