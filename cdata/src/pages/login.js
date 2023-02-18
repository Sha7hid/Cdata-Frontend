import React from "react";
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
const login = () => {
    const {data: session} = useSession()
    console.log(session);
    if(session){
        return (
            <div className={styles.background3}>
                <h2>Welcome, {session.user.name}</h2><br></br>
                <img src={session.user.image} alt="" style={{borderRadius:'50px'}}/>
                <br></br>
                <button className="btn btn-danger" onClick={() => signOut()}>Sign Out</button><br></br>
                <Link href='/'><button className="btn btn-primary">Go to Home Page</button></Link>
              
            
            </div>
        )
    }else{
        return (
            <div className={styles.background3} >
                <h3>You are not signed in</h3>
                <br></br>
                <button className="btn btn-primary" onClick={() => signIn()}>Sign In</button>
            </div>
        )
    }
    
}
export default login