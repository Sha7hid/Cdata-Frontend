import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const login = () => {
    const {data: session} = useSession()
    console.log(session);
    if(session){
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <img src={session.user.image} alt="" style={{borderRadius:'50px'}}/>
                <button onClick={() => signOut()}>Sign Out</button><br></br>
                <Link href='/'>Go to Home Page</Link>
            </div>
        )
    }else{
        return (
            <div>
                <p>You are not signed in</p>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        )
    }
    
}
export default login