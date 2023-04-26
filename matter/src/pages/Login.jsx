import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Login.css';
import DaumPostcode from 'react-daum-postcode';
import { Link } from 'react-router-dom';

const Login = () => {

  // input value State 함수당
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phoneFirst, setPhoneFirst] = useState('');
  const [phoneMiddle, setPhoneMiddle] = useState('');
  const [phoneLast, setPhoneLast] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 정규식 변수딩
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const nameRegex = /^[가-힣]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

  // 이 핸들러로 value값을 테스트하여 잘못된 경우 경고문구를 출력한당 (참고로 Regex는 정규식을 뜻함)
  const handleRegex = (e, regex, value) => {
    if (!regex.test(value)) {
      e.target.nextSibling.style.display = 'block';
    } else {
      e.target.nextSibling.style.display = 'none';
    }
  };

  // 비밀번호 확인 input에 기존 비밀번호와 value값이 동일한지 확인하는 핸들러당
  const handlePasswordConfirm = e => {
    if (password !== passwordConfirm) {
      e.target.nextSibling.style.display = 'block';
    } else {
      e.target.nextSibling.style.display = 'none';
    }
  };

  // Daum api 관련 기본 제공 소스 (주의 건들지 말것이야)
  const [address, setAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? ', ' + data.buildingName : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ' (' + extraAddress + ')' : '');
    }

    setAddress(fullAddress);
    setZoneCode(data.zonecode);
    setIsPostcodeOpen(false);
  };


  return (
    <div>
      <Container>
     
          <div className='login-logo'>
            <img src="assets/Img/matter.logo.png" alt="Matter 로고, 메인페이지로 이동하기" />
          </div>
      

        <Form className='Login-Container'>
          <div className="Login-btn">
            <button type='button' className='sign-in'>SIGN IN</button>
            <button type='button' className='join-us'>JOIN US</button>
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
              <button type='button'>SIGN IN</button>
              <button type='button'>JOIN US</button>
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
              <div className="Email-Box">
                <input
                  type="text"
                  placeholder='E-mail'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={e => handleRegex(e, emailRegex, email)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
              </div>
              <div className="Name-Box">
                <input
                  type="text"
                  placeholder='이름'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  onBlur={e => handleRegex(e, nameRegex, firstName)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
                <input
                  type="text"
                  placeholder='성'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  onBlur={e => handleRegex(e, nameRegex, lastName)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
              </div>
              <div className="Join-Pw">
                <input
                  type="password"
                  placeholder='비밀번호'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onBlur={e => handleRegex(e, passwordRegex, password)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
                <div><img src="assets/Img/eye.png" alt="비밀번호 보기" /></div>
                <div className="Join-text">
                  <span>최소 10자</span>
                  <p>알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자</p>
                </div>
              </div>
              <div className="Join-Pw">
                <input
                  type="password"
                  placeholder='비밀번호 확인'
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  onBlur={handlePasswordConfirm}
                />
                <p style={{ display: 'none' }}>경고문구</p>
                <div><img src="assets/Img/eye.png" alt="비밀번호 보기" /></div>
              </div>
              <div className="Birth-Box">
                <input
                  type="text"
                  placeholder='생년'
                  maxLength="4"
                  value={birthYear}
                  onChange={e => setBirthYear(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{4}$/, birthYear)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
                <input
                  type="text"
                  placeholder='월'
                  maxLength="2"
                  value={birthMonth}
                  onChange={e => setBirthMonth(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{2}$/, birthMonth)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
                <input
                  type="text"
                  placeholder='일'
                  maxLength="2"
                  value={birthDay}
                  onChange={e => setBirthDay(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{2}$/, birthDay)}
                />
                <p style={{ display: 'none' }}>경고문구</p>
              </div>
              <div className="Adress-Box">
                <div className="Adress-List">
                  <input type="text" placeholder='우편번호' value={zoneCode} readOnly />
                  <p style={{ display: 'none' }}>경고문구</p>
                  <button type='button' onClick={() => setIsPostcodeOpen(true)}>주소검색</button>
                </div>
                {isPostcodeOpen && (
                  <div
                    style={{
                      width: '400px',
                      position: 'absolute',
                      zIndex: 100,
                      backgroundColor: 'white',
                      border: '1px solid',
                    }}
                  >
                    <DaumPostcode onComplete={handleAddress} autoClose />
                    <button type="button" onClick={() => setIsPostcodeOpen(false)}>
                      닫기
                    </button>
                  </div>
                )}
                <input type="text" placeholder='기본주소' value={address} readOnly />
                <input type="text" placeholder='나머지 주소' />
              </div>
              <div className="Mobile-Box">
                <input
                  type="text"
                  placeholder='앞자리'
                  maxLength="3"
                  value={phoneFirst}
                  onChange={e => setPhoneFirst(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{3}$/, phoneFirst)}
                />
                <p style={{ display: 'none' }}>3자리 앞자리를 입력하세요.</p>
                -
                <input
                  type="text"
                  placeholder='중간자리'
                  maxLength="4"
                  value={phoneMiddle}
                  onChange={e => setPhoneMiddle(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{4}$/, phoneMiddle)}
                />
                <p style={{ display: 'none' }}>4자리 중간자리를 입력하세요.</p>
                -
                <input
                  type="text"
                  placeholder='뒷자리'
                  maxLength="4"
                  value={phoneLast}
                  onChange={e => setPhoneLast(e.target.value)}
                  onBlur={e => handleRegex(e, /^\d{4}$/, phoneLast)}
                />
                <p style={{ display: 'none' }}>4자리 뒷자리를 입력하세요.</p>
              </div>

              <div className='Agree-Box'>
                <input type='checkbox'></input>
                <p><span>Matter</span> 의 <strong>개인정보 처리방침</strong> 및 <strong>이용약관</strong>에 동의합니다.</p>
              </div>

              <div className='submit-Box'>
                <button type='button'>가입하기</button>
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