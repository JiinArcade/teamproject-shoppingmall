import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="Header-Container">
      <div className="Header-Box">
        <div className="logo">
          <img
            tabindex="0"
            src="assets/Img/matter.logo.png"
            alt="브랜드 matter의 글자로고"
          />
        </div>

        <div className="userList">
          <ul className="userItemBox">
            <li tabindex="0" title="로그인 및 회원가입">
              로그인 / 회원가입
            </li>
            <li tabindex="0" title="찜 목록보기" className="icon icon-heart">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li tabindex="0" title="장바구니 보기" className="icon icon-cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
