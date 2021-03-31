import React from 'react';
import { motion } from 'framer-motion';
import studyOne from '../../images/g10.svg';
import { 
    HeroContainer, 
    HeroSection, 
    HeroColumnLeft, 
    HeroColumnRight, 
    HeroBtn, 
    HeroLogo, 
    HeroPara,
    HeroImage 
} from './HeroElements';

const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroColumnLeft>
                    <HeroLogo>Studium</HeroLogo>
                    <HeroPara>The new studying app every uni student needs!</HeroPara>
                    <HeroBtn to="signup">Get Started</HeroBtn> 
                </HeroColumnLeft>
                <HeroColumnRight>
                    <HeroImage src={studyOne} alt='study' />
                </HeroColumnRight>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero;
