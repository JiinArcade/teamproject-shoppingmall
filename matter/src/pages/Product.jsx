import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSpeechSynthesis } from "react-speech-kit";

const Product = ({ texts }) => {
  const navigate = useNavigate();
  const click = (id, data) => {
    // props 넘겨주기
    console.log(id);
    navigate(`/Detail/${id}`, {
      state: {
        id: id,
      },
    });
  };
  const [selectImg, setSelectImg] = useState("");
  const handleImageClick = (img) => {
    setSelectImg(img);
  };

  //가격대 모달창처럼 열고 닫기 ////////
  const [isShown, setIsShown] = useState(false);
  const [showDown, setShowDown] = useState(true);

  const handleClick = () => {
    setIsShown(!isShown);
    setShowDown(!showDown);
  };

  const [prices, setPrices] = useState([
    { label: "0 ~ 50,000원", checked: false },
    { label: "50,000 ~ 100,000원", checked: false },
    { label: "100,000 ~ 150,000원", checked: false },
    { label: "150,000 ~ 200,000원", checked: false },
  ]);

  const handlePriceClick = (index) => {
    const newPrices = [...prices];
    newPrices[index].checked = !newPrices[index].checked;
    setPrices(newPrices);
  };
  ////////////////////////////////////////////////////

  //////////// 남여 성별 모달창처럼 열고 닫기 ///////////
  const [isPeople, setIsPeople] = useState(false);
  const [isDown, setIsDown] = useState(true);

  const handleClick1 = () => {
    setIsPeople(!isPeople);
    setIsDown(!isDown);
  };

  const [people, setPeople] = useState([
    { name: "남성", checked: false },
    { name: "여성", checked: false },
    { name: "남여공용", checked: false },
  ]);

  const peopleClick = (index) => {
    const newPeople = [...people];
    newPeople[index].checked = !newPeople[index].checked;
    setPeople(newPeople);
  };

  /////// 사이즈 클릭 //////
  const [isSize, setIsSize] = useState(false);
  const [sizeDown, setSizeDown] = useState(true);

  const handleClick2 = () => {
    setIsSize(!isSize);
    setSizeDown(!sizeDown);
  };

  const [size, setSize] = useState([
    { size: "S", checked: false },
    { size: "M", checked: false },
    { size: "L", checked: false },
    { size: "XL", checked: false },
  ]);

  const sizeClick = (index) => {
    const newSize = [...size];
    newSize[index].checked = !newSize[index].checked;
    setSize(newSize);
  };
  //////////////처음에는 추천순이 나오고 클릭했을 때 다른 텍스트가 나오고
  ////클릭 했을 때 다른 텍스트가 맨 처음 화면에 나오게 ////////////////////

  const [isChoice, setIsChoice] = useState(false);
  const [choiceDown, setChoiceDown] = useState(true);

  const handleClick3 = () => {
    setIsChoice(!isChoice);
    setChoiceDown(!choiceDown);
  };
  const [choice, setChoice] = useState([
    { choice: "추천순", checked: true },
    { choice: "최신순", checked: false },
    { choice: "높은 가격순", checked: false },
    { choice: "낮은 가격순", checked: false },
  ]);

  const choiceClick = (index) => {
    const updatedChoice = choice.map((c, i) => {
      if (i === index) {
        return { ...c, checked: true };
      } else {
        return { ...c, checked: false };
      }
    });
    setChoice(updatedChoice);
    setIsChoice(false);
  };

  useEffect(() => {
    setSelectedChoice(choice.find((c) => c.checked));
  }, [choice]);

  const [selectedChoice, setSelectedChoice] = useState(
    choice.find((c) => c.checked)
  );

  /////// 음성인식 API ////////////
  const { speak } = useSpeechSynthesis();
  const text = useState([
    "탑&티셔츠",
    "후디",
    "니트",
    "재킷&베스트",
    "팬츠",
    "쇼츠",
    "스커트&드레스",
    "악세사리",
    "신발",
    "성별",
    "가격대",
    "사이즈",
  ]);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  /////////swich button ///////
  const modes = [
    { id: "switch1", text: "뇌전증 안전모드" },
    { id: "switch2", text: "인지 장애 집중모드" },
    { id: "switch3", text: "난독증 친화적 모드" },
  ];

  ///////////// 버튼 클릭했을 때 텍스트 변경 ////////
  const [sizeText, setSizeText] = useState([
    { text: "기본" },
    { text: "5%" },
    { text: "10%" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = sizeText.length - 1;
      }
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= sizeText.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  ///////////////클릭 했을 때 텍스트 색상 변경 ////////////
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];
  const [currentColor, setCurrentColor] = useState("black");

  const handleColorClick = (color) => {
    setCurrentColor(color);
  };

  const colorButtons = colors.map((color, index) => (
    <button
      className="bgcolor"
      key={index}
      onClick={() => handleColorClick(color)}
      style={{ backgroundColor: color }}
      title="글자색상 선택하기"
    ></button>
  ));

  ///////////////클릭 했을 때 배경 색상 변경 ////////////
  const bgColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const [currentBgColor, setCutrrentBgColor] = useState("");
  const bgHandleColorClick = (color) => {
    setCutrrentBgColor(color);
  };

  const bgColorButton = bgColors.map((color, i) => (
    <button
      tabindex="0"
      className="bgcolor"
      key={i}
      onClick={() => bgHandleColorClick(color)}
      style={{ backgroundColor: color }}
      title="배경색상 선택하기"
    ></button>
  ));

  /////// 클릭했을 때 border가 생기게 /////////////

  const [borderVisible, setBorderVisible] = useState(false);

  const handleBorder = () => {
    setBorderVisible(!borderVisible);
  };

  const borderStyle = borderVisible ? "1px solid blue" : "none";

  ////// 클릭했을 때 font-family 바뀌게 /////////
  const [fontFamily, setFontFamily] = useState("BareunBatang");

  const handleFontChange = () => {
    setFontFamily(!fontFamily);
  };

  const fontStyle = fontFamily ? "BareunBatang" : "none";

  // 친화적 모드 토글 ////
  const [toggleModal, setToggleModal] = useState(false);

  const openModal1 = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div>
      <div className="banner-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          rewind={false}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="swiperSlideBox swiperSlide1"
              title="남자 두명, 여자 한명 총 세명의 모델이 2022년 신상 제품을 입었다."
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlideBox swiperSlide2"
              title="빈티지 느낌이 어우러진 1990년대의 디카프리오 등 외국 배우들의 사진으로 보여집니다."
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlideBox swiperSlide3"
              title="2022년 겨울 신상을 착용한 이미지입니다."
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlideBox swiperSlide4"
              title="2022년 겨울 신상을 착용한 이미지입니다."
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className="product-wrapper"
        style={{ color: currentColor, fontFamily: fontStyle }}
      >
        <h1 className="product-title">Product</h1>
        <div className="product-wrapper-inner">
          <div className="productName ">
            <ul className="product-item-list">
              <li tabindex="0">탑&티셔츠</li>
              <li tabindex="0">후디</li>
              <li tabindex="0">니트</li>
              <li tabindex="0">재킷 & 베스트</li>
              <li tabindex="0">팬츠</li>
              <li tabindex="0">쇼츠</li>
              <li tabindex="0">스커트 & 드레스</li>
              <li tabindex="0">악세사리</li>
              <li tabindex="0">신발</li>
            </ul>
            <ul className="product-item-list">
              <p tabindex="0" className="list-item" onClick={handleClick1}>
                성별
                {isDown ? (
                  <FontAwesomeIcon
                    tabindex="0"
                    className="faChevron"
                    icon={faChevronDown}
                    title="성별 카테고리가 열려집니다."
                  />
                ) : (
                  <FontAwesomeIcon
                    tabindex="0"
                    className="faChevron"
                    icon={faChevronUp}
                    title="성별 카테고리가 닫혀집니다."
                  />
                )}
              </p>
              {isPeople && (
                <>
                  {people.map((people, index) => (
                    <li
                      tabindex="0"
                      key={index}
                      onClick={() => peopleClick(index)}
                    >
                      <input
                        alt="체크버튼입니다."
                        tabindex="0"
                        type="checkbox"
                        checked={people.checked}
                        readOnly
                      />
                      <span tabindex="0" className="list-detail">
                        {people.name}
                      </span>
                    </li>
                  ))}
                </>
              )}
            </ul>
            <ul tabindex="0" className="product-item-list">
              <p tabindex="0" className="list-item" onClick={handleClick}>
                가격대
                {showDown ? (
                  <FontAwesomeIcon
                    tabindex="0"
                    className="faChevron"
                    icon={faChevronDown}
                    alt="클릭하면 가격대의 상세내용이 펼쳐집니다."
                  />
                ) : (
                  <FontAwesomeIcon
                    className="faChevron"
                    icon={faChevronUp}
                    alt="클릭하면 가격대의 상세내용이 접어집니다."
                  />
                )}
              </p>
              {isShown && (
                <>
                  {prices.map((price, index) => (
                    <li key={index} onClick={() => handlePriceClick(index)}>
                      <input type="checkbox" checked={price.checked} readOnly />
                      <span className="list-detail">{price.label}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
            <ul className="product-item-list">
              <p tabindex="0" className="list-item" onClick={handleClick2}>
                사이즈
                {sizeDown ? (
                  <FontAwesomeIcon
                    tabindex="0"
                    className="faChevron"
                    icon={faChevronDown}
                  />
                ) : (
                  <FontAwesomeIcon
                    tabindex="0"
                    className="faChevron"
                    icon={faChevronUp}
                  />
                )}
              </p>
              {isSize && (
                <>
                  {size.map((size, index) => (
                    <li
                      tabindex="0"
                      key={index}
                      onClick={() => sizeClick(index)}
                    >
                      <input
                        tabindex="0"
                        type="checkbox"
                        checked={size.checked}
                        readOnly
                        alt="체크하면 해당 제품의 사이즈가 나타납니다."
                      />
                      <span tabindex="0" className="list-detail">
                        {size.size}
                      </span>
                    </li>
                  ))}
                </>
              )}
            </ul>

            <div className="voice">
              <ul>
                <button
                  tabindex="0"
                  onClick={() => speak({ text: text, rate, pitch })}
                  alt="음성인식을 조절할 수 있습니다."
                >
                  <span>음성 인식</span>
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    alt="클릭하면 음성이 출력됩니다."
                  />
                </button>
                <p tabindex="0" className="voice-guide">
                  클릭하시면 음성이 출력됩니다
                </p>
              </ul>
              <ul>
                <label htmlFor="pitch">
                  <span tabindex="0">Rate:</span>{" "}
                  <span tabindex="0">{rate}</span>
                </label>

                <input
                  alt="말하는 속도를 조절합니다."
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                />
              </ul>
              <ul>
                <label htmlFor="pitch">
                  <span tabindex="0">Pitch:</span>{" "}
                  <span tabindex="0">{pitch}</span>
                </label>

                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={pitch}
                  id="pitch"
                  onChange={(event) => {
                    setPitch(event.target.value);
                  }}
                />
              </ul>
            </div>
          </div>

          <div className="product-main-inner">
            <div className="filter">
              <ul className="list">
                <p
                  tabindex="0"
                  className="list-item"
                  style={{
                    backgroundColor: currentBgColor,
                    border: borderStyle,
                  }}
                >
                  필터 숨기기
                  <FontAwesomeIcon
                    className="faSliders"
                    icon={faSliders}
                    alt="클릭하면 왼쪽에 비치된 필터들이 사라집니다."
                  />
                </p>

                <div className="list-item-array">
                  <p
                    tabindex="0"
                    style={{
                      backgroundColor: currentBgColor,
                      border: borderStyle,
                    }}
                  >
                    정렬 기준 :
                  </p>
                  <div className="list-item-choice">
                    <p
                      tabindex="0"
                      className="choice-array"
                      onClick={handleClick3}
                      style={{
                        backgroundColor: currentBgColor,
                        border: borderStyle,
                      }}
                    >
                      {choice.find((c) => c.checked)?.choice || "추천순"}
                      {choiceDown ? (
                        <FontAwesomeIcon
                          className="faChevron"
                          icon={faChevronDown}
                          tabindex="0"
                          title="선택하시면 카테고리가 열려집니다."
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="faChevron"
                          icon={faChevronUp}
                          tabindex="0"
                          title="선택하시면 카테고리가 닫혀집니다."
                        />
                      )}
                    </p>
                    {isChoice && (
                      <div>
                        {choice.map((choice, index) => (
                          <li key={index} onClick={() => choiceClick(index)}>
                            <p tabindex="0">{choice.choice}</p>
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ul>
            </div>
            <div className="product-list">
              {texts.map((test, index) => (
                <div className="product-preview" key={index}>
                  <div tabindex="0" onClick={() => click(index)}>
                    <img
                      src={test.img}
                      alt="각 제품의 해당상품 이미지 입니다."
                    />
                  </div>
                  <h2
                    tabindex="0"
                    className="best-text"
                    style={{
                      backgroundColor: currentBgColor,
                      border: borderStyle,
                    }}
                  >
                    {test.recommend}
                  </h2>
                  <h3
                    tabindex="0"
                    className="title-text"
                    style={{
                      backgroundColor: currentBgColor,
                      border: borderStyle,
                    }}
                  >
                    {test.title}
                  </h3>
                  <p
                    tabindex="0"
                    className="length-text"
                    style={{
                      backgroundColor: currentBgColor,
                      border: borderStyle,
                    }}
                  >
                    {test.length}
                  </p>
                  <p
                    tabindex="0"
                    className="price-text"
                    style={{
                      backgroundColor: currentBgColor,
                      border: borderStyle,
                    }}
                  >
                    {test.price}
                  </p>
                </div>
              ))}
            </div>
            <div tabindex="0" className="detail-wrapper">
              <img
                tabindex="0"
                className="modalImg"
                src="/메인사진/detailLogo.png"
                alt="사진을 클릭하면 시각적으로 불편하신 분에게 도움을 줄 수 있습니다."
                onClick={openModal1}
              />
              <div
                tabindex="0"
                className="detail-box"
                style={{ display: toggleModal ? "block" : "none" }}
              >
                <div className="detail-innerBox">
                  <div className="swich-wrap">
                    <div className="swich-item">
                      <span tabindex="0">
                        <input
                          tabindex="0"
                          type="checkbox"
                          id="switch"
                          className="hide"
                          alt="클릭하시면 뇌전증 안전모드가 실행됩니다."
                        />
                        <label
                          tabindex="0"
                          for="switch"
                          className="detail-input"
                        ></label>
                      </span>
                      <span tabindex="0">뇌전증 안전모드</span>
                    </div>
                    <div className="swich-item">
                      <span tabindex="0">
                        <input
                          tabindex="0"
                          type="checkbox"
                          id="switch1"
                          className="hide"
                          alt="클릭하시면 인지장애집중모드가 실행됩니다."
                        />
                        <label
                          tabindex="0"
                          onClick={handleBorder}
                          for="switch1"
                          className="detail-input"
                        ></label>
                      </span>
                      <span tabindex="0">인지 장애 집중모드</span>
                    </div>
                    <div className="swich-item">
                      <span tabindex="0">
                        <input
                          tabindex="0"
                          type="checkbox"
                          id="switch2"
                          className="hide"
                          alt="클릭하시면 난독증 친화적 모드가 실행됩니다."
                        />
                        <label
                          tabindex="0"
                          onClick={handleFontChange}
                          for="switch2"
                          className="detail-input"
                        ></label>
                      </span>
                      <span tabindex="0">난독증 친화적 모드</span>
                    </div>
                  </div>

                  <div className="light-wrap">
                    <span tabindex="0">밝기 조절</span>
                    <p>
                      <button tabindex="0">
                        <img
                          src="/메인사진/lightDark.png"
                          alt="이 이미지는 밝기 낮추기 버튼입니다."
                        />
                      </button>
                      <span tabindex="0">0</span>
                      <button>
                        <img
                          src="/메인사진/light.png"
                          alt="이 이미지는 밝기 높이기 버튼입니다."
                        />
                      </button>
                    </p>
                  </div>

                  <div className="text-wrap">
                    <span tabindex="0">글자 크기조절</span>
                    <div className="text-size">
                      <button
                        className="min-button"
                        onClick={handlePreviousClick}
                        alt="이 버튼을 클릭하시면 글자가 작아집니다"
                      >
                        <FontAwesomeIcon icon={faMinus} className="prev" />
                      </button>
                      <span tabindex="0">{sizeText[currentIndex].text}</span>
                      <button
                        className="plus-button"
                        onClick={handleNextClick}
                        alt="이 버튼을 클릭하시면 글자가 커집니다"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>

                  <div className="textColor-changeWrap">
                    <span className="change-color-text" tabindex="0">
                      글자 색상 변경
                    </span>
                    <div tabindex="0" className="change-color">
                      {colorButtons}
                    </div>
                  </div>

                  <div className="bgcColor-changeWrap">
                    <span tabindex="0" className="change-color-text">
                      배경 색상 변경
                    </span>
                    <div tabindex="0" className="change-color">
                      {bgColorButton}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
