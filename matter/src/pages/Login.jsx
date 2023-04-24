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
            <button className='sign-in'>SIGN IN</button>
            <button className='join-us'>JOIN US</button>
          </div>

          <div className='Login-Box'>
            <div className="Id-Box">
              <p>ID</p>
              <input type="text" placeholder='아이디' />
            </div>

            <div className="Pw-Box">
              <p>Password</p>
              <input type="password" placeholder='비밀번호' />
            </div>

            <div className='Next-btn'>
              <button>SIGN IN</button>
              <button>JOIN US</button>
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

          <div className='Join-Box'>
            <div className="Join-List">
              <div className="Name-Box">
                <input type="text" placeholder='이름' />
                <input type="text" placeholder='성' />
              </div>
              <div className="Join-Pw">
                <input type="password" placeholder='비밀번호' />
                <img src="assets/Img/eye.png" alt="비밀번호 보기" />
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
