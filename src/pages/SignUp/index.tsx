import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Login</h1>

        <Input icon={FiUser} name="name" placeholder="Email" />

        <Input icon={FiMail} name="email" placeholder="Email" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Sign Up</Button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Sign Up
      </a>
    </Content>
  </Container>
);

export default SignUp;
