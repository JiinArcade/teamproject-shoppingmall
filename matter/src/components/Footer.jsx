import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='Footer-Container'>
        <div className="Footer-Box">
            <div className='Footer-CS'>
                <ul className="CS-List">
                    <li><strong>CS CENTER</strong></li>
                    <li>tel <strong>010 1234 5678</strong></li>
                    <li>open <strong>09:00am - 7:00pm</strong></li>
                    <li><strong>Lunch Time</strong> 1:30pm - 2:30pm</li>
                    <strong>SAT, SUN, HOLIDAY OFF</strong>
                </ul>
            </div>
            <div className='Footer-Info'>
                <ul className="Info-List">
                    <h1>Matter</h1>
                    <li><strong>COMPANY</strong> 주식회사 <span>Matter</span> <strong>CEO</strong> 아무개</li>
                    <li><strong>BUSINESS NUMBER</strong> 123-45-67891 [사업자정보확인] <strong>MAIL Matter.official@gmail.com</strong> <strong>ORDER LICENSE</strong> 2023-대전-1234호</li>
                    <li><strong>ADDRESS</strong> 12324 대전광역시 중구 중앙로121번길 20</li>
                    <p>Copyright ©MATTER All rights reserved.</p>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
