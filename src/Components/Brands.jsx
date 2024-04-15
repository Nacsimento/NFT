import React from 'react';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import brand_1 from '../Assets/Images/brand_1.png';
import brand_2 from '../Assets/Images/brand_2.png';
import brand_3 from '../Assets/Images/brand_3.png';
import brand_4 from '../Assets/Images/brand_4.png';

const Brands = () => {

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
                    transition={{ delay: 0.4, duration: 1 }} className='item1'>
                <img src={brand_1} alt="AT&T" />
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.6, duration: 1 }} className='item1'>
                <img src={brand_2} alt="AT&T" />
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.8, duration: 1 }} className='item1' >
                <img src={brand_3} alt="AT&T" />
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1, duration: 1 }} className='item1' >
                <img src={brand_4} alt="AT&T" />
            </motion.div>
        </div>
        </div>
        </>
    );
}

export default Brands;
