import React from 'react';
import './Nav.css';
import Logo from '../Assets/Images/Logo.png';
import Search_icon from '../Assets/Images/Search_icon.png';
import { motion } from "framer-motion";
import { auth  } from '../Config/firebase';
import { signOut } from 'firebase/auth';


const Navlogin = ({ isAuthenticated, setIsAuthenticated }) => {

    
   
   

      const handleSignOut  = async () => {
        try{
            
            await signOut(auth)
            setIsAuthenticated(false);
            
        }catch (err){
            console.error(err);
        }
    }
    return (
        <>
        <nav>
           
                <div className='nav_btn'>
                   
                {isAuthenticated && (
                            <button className='navbtn' onClick={handleSignOut}>
                                Log out
                            </button>
                        )}
                   
                </div>
            
        </nav>
        </>
    );
}

export default Navlogin;
