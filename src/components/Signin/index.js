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
    ForgotPassword,
    NotAMember,
    Register
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
                            <ForgotPassword>Forgot password?</ForgotPassword>
                            <NotAMember> Not a member? <Register>Register now</Register></NotAMember>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
