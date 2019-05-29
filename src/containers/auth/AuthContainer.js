// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Signin from 'components/auth/signin';
import Signup from 'components/auth/signup';

import login from 'image/login.jpg';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        margin: 0px;
    }
    #root{
        height: 100%;
    }
    .App{
        height: 100%;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 900px){
        flex-direction: column;
    }
`

const IntroSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${login});
    background-repeat: no-repeat;
    background-size: 1920px 1080px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Mask = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
`

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
`

const ToHome = styled(Link)`
    z-index: 2;
    color: white;

    &:visited{
        text-decoration: none;
        color: white;
    }
    &:hover{
        text-decoration: none;
        color: ${oc.gray[3]}
    }
    &:link{
        text-decoration: none;
    }
`

const Title = styled.h1`
    z-index: 2;
    font-size: 2rem;
    margin: 0;
    margin-left: 1rem;
`

const AuthSection = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${oc.indigo[5]};
    display: flex;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }
`

class AuthForm extends React.Component {
    render(){
        return (
            <Wrapper>
                <GlobalStyle />
                <IntroSection>
                    <Mask />
                    <TitleWrapper>
                    </TitleWrapper>
                    <Route path='/auth/signin' component={Signin} />
                    <Route path='/auth/signup' component={Signup} />
                </IntroSection>
            </Wrapper>
        )
    }
}

export default AuthForm;