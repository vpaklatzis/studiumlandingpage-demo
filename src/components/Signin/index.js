import React from 'react';
import Studium from "../../images/Studium.png";
import { 
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Container, 
    SignInLogo, 
    Img,
    Form, 
    FormH1, 
    Text 
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <SignInLogo to='/'>
                        <Img src={Studium} alt="logo"/>
                    </SignInLogo>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
