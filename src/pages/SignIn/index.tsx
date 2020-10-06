import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Login</h1>

        <Input icon={FiMail} name="email" placeholder="Email" />

        <Input icon={FiLock} name="password" placeholder="Password" />

        <Button type="submit">Sign In</Button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Sign Up
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
