import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import col_1 from '../Assets/Images/col_1.png';
import col_2 from '../Assets/Images/col_2.png';
import col_3 from '../Assets/Images/col_3.png';
import col_4 from '../Assets/Images/col_4.png';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SliderComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

      const [ref, inView] = useInView({ triggerOnce: true });

      const animationVariants = {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
      };

    return (
        <>
            <div className='slider_bg'>
                
                <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 0.3, duration: 1.5 }} className='slider_containertext'>
                    <h1>Our Hottest Collection</h1>
                    
                   
                </motion.div>
                <motion.div className='slide' ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1, duration: 1.5 }}>
                    <Slider {...settings}>
                        <div>
                            <img src={col_1} alt="picture" />
                        </div>
                        <div>
                            <img src={col_2} alt="picture" />
                        </div>
                        <div>
                            <img src={col_3} alt="picture" />
                        </div>
                        <div>
                            <img src={col_4} alt="picture" />
                        </div>
                        <div>
                            <img src={col_1} alt="picture" />
                        </div>
                        <div>
                            <img src={col_2} alt="picture" />
                        </div>
      
                    </Slider>
                    </motion.div>
                    <motion.div ref={ref} initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{ delay: 1.5, duration: 1.5 }}   className='slider_container center'>
                    
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.</p>
                    <button className='cta'>Start collecting</button>
                </motion.div>
                
            </div>
        </>
    );
}

export default SliderComponent;
