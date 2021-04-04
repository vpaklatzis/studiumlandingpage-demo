import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ArrowBack,
    ArrowLeft,
    ImgWrap, 
    Img } from './InfoElements';

const Info = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
    
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to="/" 
                                    smooth={true} 
                                    duration={500} 
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    spy={true} 
                                    exact="true"
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    >{hover ? <ArrowBack /> : <ArrowLeft /> } {buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info;
