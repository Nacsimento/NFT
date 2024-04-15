import React from 'react';
import footer_logo from '../Assets/Images/footer_logo.png';
import fb from '../Assets/Images/fb.png';
import insta from '../Assets/Images/insta.png';
import twitter from '../Assets/Images/twitter.png';
import './Footer.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {

    const [ref, inView] = useInView({ triggerOnce: true });

    const animationVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };
    const animationVariants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };



    return (
        <>
            <div className='footer_bg'>
                <div className='footer_container'>
                    <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.5, duration: 1.5 }} className='footer_left'>
                        <div className='footer_linkslogo'><img src={footer_logo} alt="logo" /></div>
                        <div className='footer_links'>Contact</div>
                        <div className='footer_links'>About </div>
                        <div className='footer_links'>Policy</div>
                    </motion.div>
                    <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants2}
                    transition={{ delay: 0.5, duration: 1.5 }} className='footer_right'>
                        <div className='social'><img src={fb} alt="fackbook" /></div>
                        <div className='social'><img src={insta} alt="instagram" /></div>
                        <div className='social'><img src={twitter} alt="twitter" /></div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Footer;
