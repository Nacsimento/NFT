import React from 'react';
import Contact_img from '../Assets/Images/Contact_img.png';
import './Contact.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Contact = () => {

    const [ref, inView] = useInView({ triggerOnce: true });

    const animationVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className='contact_bg'>
                <div className='contact_container'>
                    <motion.h1 ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.8, duration: 1 }}>Become a member today and <br /> start trading</motion.h1>
                    <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1, duration: 1 }} className='contact_form'>
                        <input type="text" placeholder='Email id' className='contact_input'/>
                        <button className='contactbtn'>Get started</button>
                    </motion.div>
                    <motion.p ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1.2, duration: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</motion.p>
                    <motion.img ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1.4, duration: 1 }} src={Contact_img} alt="Contact_img" />
                </div>
            </div>
        </>
    );
}

export default Contact;
