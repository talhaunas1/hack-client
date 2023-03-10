import React, { useState } from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import main9 from "../assests/images/main9.jpg";
import { Link } from 'react-router-dom';
import axios from '../axios'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async () => {
        try {
            // const data = {
            //     userName,
            //     email,
            //     password
            // }
            // console.log('running');
            const response = await axios.post('/auth/signup', { userName, email, password })
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Form>
                <Heading>Sign up</Heading>
                <Line />
                <Welcome>Create your account</Welcome>
                <Input placeholder="Name " type='text' required onChange={(e)=>setUserName(e.target.value)} /> <br />
                <Input placeholder="Email " type='email' required onChange={(e)=>setEmail(e.target.value)} /> <br />
                <Input placeholder="Password"  type='password'  required minLength='4' onChange={(e)=>setPassword(e.target.value)}/>
                <Info>

                </Info>
                <Button onClick={submitHandler}>Register</Button>
                <Or>
                    <Text>Or sign in with</Text>
                    <Logos>
                        <FacebookIcon fontSize="large" />
                        <GoogleIcon fontSize="large" />
                    </Logos>
                </Or>
                <ExtraInfo>
                    <Dont>Already have an account?</Dont>
                    <Link to="/" style={{ color: "inherit" }}>
                        <Create>Login</Create>
                    </Link>
                </ExtraInfo>
            </Form>
        </Container>
    );
};

export default Signup;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${main9});
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
`;

const Form = styled.div`
  /* border: 1px solid #ff6767; */
  border-radius: 4px;
  width: 30vw;
  height: 70vh;
  padding: 20px;
  background-color: white;
`;
const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: grey;
`;

const Line = styled.div`
  border: 1px solid #ff6767;
  -webkit-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  margin: 10px 0px;
`;
const Welcome = styled.div`
    font-size: 18px;
    color: gray;
`;
const Input = styled.input`
    width: 100%;
    height: 7vh;
    margin: 5px 0px;
    padding: 2px 10px;
    color:grey;
    border: 1px solid grey;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;


const Button = styled.div`
    padding: 7px 15px;
    color: white;
    background-color: #ff6767;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 10px 0px;
    cursor:pointer;
`;


const Or = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const Text = styled.div`
    color: grey;
`;
const Logos = styled.div`
    display: flex;
    gap: 5px;
    color: #ff6767;
    cursor: pointer;
`;
const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top: 5vh;
`;

const Dont = styled.div``;
const Create = styled.div`
    color: #ff6767;
`;