import React from 'react';
import './Stats.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Stats = () => {

    const [ref, inView] = useInView({ triggerOnce: true });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <div className='stats_bg'>
        <div className='stats_container'>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.5, duration: 1 }} className='item1'>
                <h1>27k+</h1>
                <p>Artworks</p>
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.7, duration: 1 }} className='item1'>
                <h1>20k+</h1>
                <p>Auctions</p>
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.9, duration: 1 }} className='item1' >
                <h1>120k+</h1>
                <p>Members</p>
            </motion.div>
        </div>
        </div>
        </>
    );
}

export default Stats;
