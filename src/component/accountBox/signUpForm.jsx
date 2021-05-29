import React, { useContext } from 'react'
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from "./common"
import {Marginer} from "../marginer";
import { AccountContext } from './accountContext';

function SignUp() {

    // -- destructure the object function
    let {switchToSignin} = useContext(AccountContext);
    // console.log(switchToSignin)

    // -- without destructure the object function
    // let myContext = useContext(AccountContext);
    // console.log(myContext.switchToSignin)

    return (
        <div>
            <BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="Full Name" required/>
                    <Input type="text" placeholder="Email" required/>
                    <Input type="password" placeholder="Password" required/>
                    <Input type="password" placeholder="Confirm Password" required/>
                    <Marginer direction="vertical" margin="10px"/>
                    <MutedLink href="#">Forget Your Password ?</MutedLink>
                    <Marginer direction="vertical" margin="10px" />
                    <SubmitButton type="button">Sign in</SubmitButton>
                    <Marginer direction="vertical" margin="10px"/>
                    <MutedLink>
                        Already An account?  
                        <BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink></MutedLink>
                </FormContainer>
            </BoxContainer>
        </div>
    )
}

export default SignUp;