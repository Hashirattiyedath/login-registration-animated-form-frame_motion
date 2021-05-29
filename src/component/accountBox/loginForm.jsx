import React, { useContext } from 'react'
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from "./common"
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';


function LoginForm() {

    // -- destructure the object function
    let {switchToSignup} = useContext(AccountContext);
    // console.log(switchToSignup)

    // -- without destructure the object function
    // let myContext = useContext(AccountContext);
    // console.log(myContext.switchToSignup)

    return (
        <div>
            <BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="Email" required/>
                    <Input type="password" placeholder="Password" required/>
                    <Marginer direction="vertical" margin="10px"/>
                    <MutedLink href="#">Forget Your Password ?</MutedLink>
                    <Marginer direction="vertical" margin="10px" />
                    <SubmitButton type="button">Sign in</SubmitButton>
                    <Marginer direction="vertical" margin="10px"/>
                    <MutedLink>
                        Don't have an account?  
                        <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink></MutedLink>
                </FormContainer>
            </BoxContainer>
        </div>
    )
}

export default LoginForm;