import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    HeroContainer, 
    HeroWrapper, 
    HeroRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ArrowForward,
    ArrowRight,
    ImgWrap, 
    Img } from './HeroElements';

const Hero = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
    
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };
    
    return (
        <>
            <HeroContainer lightBg={lightBg} id={id}>
                <HeroWrapper>
                    <HeroRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to="home" 
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 0 : 1}
                                    >{buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </HeroRow>
                </HeroWrapper>
            </HeroContainer>
        </>
    )
}

export default Hero;