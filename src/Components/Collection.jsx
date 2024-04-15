import React from 'react';
import Collection_img from '../Assets/Images/Collection_img.png';
import './Collection.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Collection = () => {

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
       <div className='collection_bg'>
       <div className='collection_container'>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.5, duration: 1.5 }} className='collection_image'>
                <img src={Collection_img} alt="collection_image" />
            </motion.div>
            <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants2}
                    transition={{ delay: 0.5, duration: 1.5 }} className='collection_text'>
                <h1>We give the best <br /> quality NFT  </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.</p>
                <button className='cta'>Start collecting</button>
            </motion.div>
       </div>
       </div>
       </>
    );
}

export default Collection;
