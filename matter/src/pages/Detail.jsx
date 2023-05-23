import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Detail.css";

const Detail = ({ tests, id }) => {
  const [selectImg, setSelectImg] = useState("");
  const [test, setFetchData] = useState([]);
  const location = useLocation();

  const handleImageClick = (img) => {
    setSelectImg(img);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/details/${location.state.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setFetchData(response);
      });
  }, []);

  if (test) {
    return (
      <div className="detail-list">
        <div className="detail-preview" key={test.id}>
          <div className="main-img-wrapper">
            {selectImg ? (
              <div className="change-Img">
                <img src={selectImg} alt="해당 상품의 이미지입니다" />
              </div>
            ) : (
              <div className="change-Img">
                <img src={test.mainimg} alt="해당 상품의 이미지입니다" />
              </div>
            )}
            <div className="main-img-item">
              <img
                src={test.mainimg}
                alt={test.alt}
                className={selectImg === test.mainimg ? "" : ""}
                onMouseOver={() => handleImageClick(test.mainimg)}
              />
              <img
                src={test.mainimg2}
                alt={test.alt1}
                className={selectImg === test.mainimg2 ? "" : ""}
                onMouseOver={() => handleImageClick(test.mainimg2)}
              />
              <img
                src={test.mainimg3}
                alt={test.alt1}
                className={selectImg === test.mainimg3 ? "" : ""}
                onMouseOver={() => handleImageClick(test.mainimg3)}
              />
              <img
                src={test.mainimg4}
                alt={test.alt1}
                className={selectImg === test.mainimg4 ? "" : ""}
                onMouseOver={() => handleImageClick(test.mainimg4)}
              />
              <img
                src={test.mainimg5}
                alt={test.alt1}
                className={selectImg === test.mainimg5 ? "" : ""}
                onMouseOver={() => handleImageClick(test.mainimg5)}
              />
            </div>

            <div className="size-wrap">
              <h4 className="size-info">{test.size}</h4>
              <div className="sizp-girdBox">
                <button className="main-size-text">
                  <ul className="main-size-text-list">
                    <li>{test.size1}</li>
                    <li>{test.size2}</li>
                    <li>{test.size3}</li>
                    <li>{test.size4}</li>
                    <li>{test.size5}</li>
                  </ul>
                </button>
                <button className="main-size-text">
                  <ul className="main-size-text-list">
                    <li>{test.size6}</li>
                    <li>{test.size7}</li>
                    <li>{test.size8}</li>
                    <li>{test.size9}</li>
                    <li>{test.size10}</li>
                  </ul>
                </button>
                <button className="main-size-text">
                  <ul className="main-size-text-list">
                    <li>{test.size11}</li>
                    <li>{test.size12}</li>
                    <li>{test.size13}</li>
                    <li>{test.size14}</li>
                    <li>{test.size15}</li>
                  </ul>
                </button>
                <button className="main-size-text">
                  <ul className="main-size-text-list">
                    <li>{test.size16}</li>
                    <li>{test.size17}</li>
                    <li>{test.size18}</li>
                    <li>{test.size19}</li>
                    <li>{test.size20}</li>
                  </ul>
                </button>

                <button className="main-size-text">
                  <ul className="main-size-text-list">
                    <li>{test.size21}</li>
                    <li>{test.size22}</li>
                    <li>{test.size18}</li>
                    <li>{test.size23}</li>
                    <li>{test.size25}</li>
                  </ul>
                </button>
              </div>
            </div>
          </div>

          <div className="text-wrapper">
            <div className="text-inner-wrap">
              <ul className="text-top-wrap">
                <li>{test.subtext}</li>
                <li>{test.deatiltitle}</li>
                <li>{test.deatillegth}</li>
              </ul>
              <ul className="price-text-wrap">
                <li>{test.deatilprice}</li>
                <ul className="price-sub-text">
                  <li>{test.salepercent}</li>
                  <li>{test.saleprice}</li>
                </ul>
              </ul>
              {/* <img src={test.colorimg} alt="" />
                <img src={test.colorimg2} alt="" /> */}
              <div className="size-text-wrapper">
                <button className="size-text" alt="S사이즈 선택 버튼입니다">
                  {test.deatilsize}
                </button>
                <button className="size-text1" alt="M사이즈 선택 버튼입니다">
                  {test.deatilsize1}
                </button>
                <button className="size-text2" alt="L사이즈 선택 버튼입니다">
                  {test.deatilsize2}
                </button>
                <button className="size-text3" alt="XL사이즈 선택 버튼입니다">
                  {test.deatilsize3}
                </button>
              </div>
              <div className="order-wrapper">
                <div className="order-box">
                  <button
                    className="order"
                    alt="상품을 장바구니에 담는 버튼입니다"
                  >
                    {test.order}
                  </button>
                  <button
                    className="order1"
                    alt="상품을 바로 주문하는 버튼입니다"
                  >
                    {test.order1}
                  </button>
                </div>
                <button className="heart-icon">
                  <FontAwesomeIcon
                    icon={faHeart}
                    alt="상품을 찜하는 버튼입니다"
                  />
                </button>
              </div>
              <ul
                className="aboutDesign-wrapper"
                alt="상품의 디자인 설명입니다"
              >
                <li>{test.deatildesign}</li>
                <li>{test.deatildesign1}</li>
                <li>{test.deatildesign2}</li>
                <li>{test.deatildesign3}</li>
              </ul>
              <ul
                className="aboutWith-wrapper"
                alt="상품의 디자인 외 설명입니다"
              >
                <li>{test.deatilcodyitem}</li>
                <li>{test.deatilcodyitem1}</li>
                <li>{test.deatilmaterial}</li>
                <li>{test.deatilmaterial1}</li>
                <li>{test.wash}</li>
                <li>{test.wash1}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="detail-wrapper">
            <h3>{test.detailtext}</h3>
            <div className="detail-img-wrapper">
              <img src={test.detailimg} alt="" />
              <img src={test.detailimg1} alt="" />
              <ibmg src={test.detailimg2} alt="" />
              <img src={test.detailimg3} alt="" />
            </div>
            <h3>{test.detailtext}</h3>
            <h3>{test.detailtext}</h3>
            <h3>{test.detailtext}</h3>
          </div> */}
      </div>
    );
  }
};

export default Detail;
