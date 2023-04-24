import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap'
import Footer from '../components/Footer'
import './Login.css'

const Login = () => {
  return (
    <div>
      <Container>
        <div className='login-logo'>
          <img src="assets/Img/matter.logo.png" alt="Matter 로고, 메인페이지로 이동하기" />
        </div>

        <Form className='Login-Container'>
          <div className="Login-btn">
            <button style={{ width: "50%", padding: "12px", outline: "none", border: "1px solid #dadada", borderBottom: "none", backgroundColor: "#fff" }} className='sign-in'>SIGN IN</button>
            <button style={{ width: "50%", padding: "12px", outline: "none", border: "1px solid #dadada", borderBottom: "none", borderLeft: "none", backgroundColor: "#fff" }} className='join-us'>JOIN US</button>
          </div>

          <div className='Login-Box'>
            <div className="Id-Box">
              <p>ID</p>
              <input style={{ width: "80%", padding: "12px", borderRadius: "5px", outline: "none", border: "1px solid #000" }} type="text" placeholder='아이디' />
            </div>

            <div className="Pw-Box">
              <p>Password</p>
              <input style={{ width: "80%", padding: "12px", borderRadius: "5px", outline: "none", border: "1px solid #000" }} type="text" placeholder='비밀번호' />
            </div>

            <div className='Next-btn'>
              <button style={{ width: "80%", padding: "12px", outline: "none", border: "1px solid #000", backgroundColor: "#000", color: "#fff" }}>SIGN IN</button>
              <button style={{ width: "80%", padding: "12px", outline: "none", border: "1px solid #000", backgroundColor: "#fff" }}>JOIN US</button>
            </div>

            <div className='SNS-Box'>

              <div className="sns-border-box">
                <div className='sns-border-left'></div>
                <div>SNS로 시작하기</div>
                <div className='sns-border-right'></div>
              </div>
         


              <div className='SNS-Img'>
                <li className='Naver'>
                  <img src="assets/Img/naver.png" alt="네이버계정으로 회원가입" />
                </li>
                <li className='Kakao'>
                  <img src="assets/Img/kakao.png" alt="카카오계정으로 회원가입" />
                </li>
                <li className='Apple'>
                  <img src="assets/Img/apple.png" alt="애플계정으로 회원가입" />
                </li>
              </div>
            </div>
          </div>

       
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Login
