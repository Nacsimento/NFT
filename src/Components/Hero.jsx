
import './Hero.css';
import HeroBanner from '../Assets/Images/HeroBanner.png';
import { motion } from 'framer-motion';




const Hero = () => {

 
   

 
    return (
        <>
        <section className='hero_container'>
            <motion.div initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3, duration: 1.5 , }} className='hero_text'>
                <h1>Collect and trade <br /> woolly’s amazing <br /> collections</h1>
                
                    
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                <button className='cta'>Start collecting</button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3, duration: 1.5 , }} className='hero_image'>
                <img src={HeroBanner} alt="Hero Banner" className='herobanner'  style={{
                            animation: 'wiggle 2s infinite',
                            transformOrigin: 'center',
                        }} />
            </motion.div>
        </section>
        </>
    );
}

export default Hero;
