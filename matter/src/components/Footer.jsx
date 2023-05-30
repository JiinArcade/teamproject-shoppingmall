import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer-Container">
        <div className="Footer-Box">
          <div className="Footer-CS">
            <ul className="CS-List">
              <li title="Customer Service Center">
                <strong tabindex="0">CS CENTER</strong>
              </li>
              <li tabindex="0" title="Telephone">
                tel <strong>010 1234 5678</strong>
              </li>
              <li tabindex="0">
                open <strong>09:00am - 7:00pm</strong>
              </li>
              <li tabindex="0">
                <strong>Lunch Time</strong> 1:30pm - 2:30pm
              </li>
              <strong tabindex="0" title="Saturday, Sunday, HOLIDAY OFF">
                SAT, SUN, HOLIDAY OFF
              </strong>
            </ul>
          </div>
          <div className="Footer-Info">
            <ul className="Info-List">
              <h1 tabindex="0" title="회사 이름입니다.">
                Matter
              </h1>
              <li tabindex="0">
                <strong>COMPANY</strong> 주식회사 <span>Matter</span>{" "}
                <strong title="executive officer">CEO</strong> 아무개
              </li>
              <li tabindex="0">
                <strong>BUSINESS NUMBER</strong> 123-45-67891 [사업자정보확인]{" "}
                <strong>MAIL Matter.official@gmail.com</strong>{" "}
                <strong>ORDER LICENSE</strong> 2023-대전-1234호
              </li>
              <li tabindex="0">
                <strong>ADDRESS</strong> 12324 대전광역시 중구 중앙로121번길 20
              </li>
              <p tabindex="0">Copyright ©MATTER All rights reserved.</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
