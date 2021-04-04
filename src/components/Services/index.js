import React from 'react';
import Search from '../../images/search.svg';
import VideoCall from '../../images/videocall.svg';
import Upload from '../../images/upload.svg';
import Feed from '../../images/feed.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Search}/>
                    <ServicesH2>Find Your Study Buddy</ServicesH2>
                    <ServicesP>Apply filters based on your needs and select your study buddy among a list of University students</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={VideoCall}/>
                    <ServicesH2>Make a Video Call</ServicesH2>
                    <ServicesP>Chat with your study buddy, arrange a meeting time and hop into a video call room</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Upload}/>
                    <ServicesH2>Upload Documents</ServicesH2>
                    <ServicesP>Keep your notes and online studying material in one place</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Feed}/>
                    <ServicesH2>Check Your Daily Feed</ServicesH2>
                    <ServicesP>We provide the most valuable info to University students</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
