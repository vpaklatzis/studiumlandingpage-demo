import React from 'react';
import { 
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Container, 
    Icon, 
    Form, 
    FormH1, 
    Text 
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Studium</Icon>
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
