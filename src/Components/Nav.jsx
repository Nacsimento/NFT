import React, { useState } from 'react';
import './Nav.css';
import Logo from '../Assets/Images/Logo.png';
import Search_icon from '../Assets/Images/Search_icon.png';
import { motion } from "framer-motion";
import { auth  } from '../Config/firebase';
import { GoogleAuthProvider, signInWithPopup , signOut} from 'firebase/auth';


const Nav = ({ isAuthenticated, setIsAuthenticated }) => {

    const[pic , setpic] = useState();
    const[name , setname] = useState();

    const SignIn = async () => {
        try{
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth , provider )
            setIsAuthenticated(true);
           
            setpic(auth?.currentUser?.photoURL);
            setname(auth?.currentUser?.displayName);
            
        }catch (err){
            console.error(err);
        }
    }
    

      const handleSignOut  = async () => {
        try{
            
            await signOut(auth)
            setIsAuthenticated(false);
            window.location.reload();
        }catch (err){
            console.error(err);
        }
    }
    return (
        <>
        <nav>
            <motion.div initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 1.5 , }} className='nav_left'>
                <div className='nav_logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='nav_links'>
                    <div className='links'>Market</div>
                    <div className='links'>Collections</div>
                    <div className='links'>Community</div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 1.5 }} className='nav_right'>
                <div className='nav_search'>
                    <input type="text" placeholder='What are you looking for?' className='Nav_input' />
                    <img src={Search_icon} alt="Search_icon" className='Search_icon' />
                </div>
                <div className='nav_btn'>
                {!isAuthenticated ? (
                        <button className='navbtn' onClick={SignIn}>
                            Log in
                        </button>
                    ) : (
                        <>
                        <div className='login'>
                        
                        
                        
                        <div className='username'>Welcome back ! {name.split(" ")[0]}</div>
                        {/* <img className='dp' src={pic} alt="" /> */}
                        <button className='navbtn' onClick={handleSignOut}>
                            Log out
                        </button>
                        </div>
                        </>
                    )}
                </div>
            </motion.div>
        </nav>
        </>
    );
}

export default Nav;
