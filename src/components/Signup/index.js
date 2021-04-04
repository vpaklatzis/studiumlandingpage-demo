import React from 'react';
import Studium from "../../images/Studium.png";
import { 
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Container, 
    SignUpLogo, 
    Img,
    Form, 
    FormH1
} from './SignupElements';

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <SignUpLogo to='/'>
                        <Img src={Studium} alt="logo"/>
                    </SignUpLogo>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign up and get notified on launch!</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormButton type='submit'>Sign up</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp;
