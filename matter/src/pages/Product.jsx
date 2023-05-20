import React, { useState,useRef, useEffect } from 'react'
import { useNavigate, Await } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faChevronUp} from '@fortawesome/free-solid-svg-icons'
import{faChevronDown} from '@fortawesome/free-solid-svg-icons'
import{faSliders} from '@fortawesome/free-solid-svg-icons'
import{faMicrophone} from '@fortawesome/free-solid-svg-icons'
import{faPlus} from '@fortawesome/free-solid-svg-icons'
import{faMinus} from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import './slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';


const Product = ({ texts }) => {
    const navigate = useNavigate();
    const click = (id, data) => {
    // props 넘겨주기
      console.log(id)
      navigate(`/Detail/${id}`, {
        state: {
          id: id
        }
      })
    }
const [selectImg, setSelectImg] = useState('');
const handleImageClick = (img) => {
  setSelectImg(img);
};

//가격대 모달창처럼 열고 닫기 ////////
const [isShown, setIsShown] = useState(false);
const [showDown, setShowDown] = useState(true);
  
const handleClick = () => {
  setIsShown(!isShown);
  setShowDown(!showDown)
}

const [prices, setPrices] = useState([
  { label: '0 ~ 50,000원', checked: false },
  { label: '50,000 ~ 100,000원', checked: false },
  { label: '100,000 ~ 150,000원', checked: false },
  { label: '150,000 ~ 200,000원', checked: false },
]);

const handlePriceClick = (index) => {
  const newPrices = [...prices];
  newPrices[index].checked = !newPrices[index].checked;
  setPrices(newPrices);
}
////////////////////////////////////////////////////

//////////// 남여 성별 모달창처럼 열고 닫기 ///////////
const [isPeople, setIsPeople] = useState(false);
const [isDown, setIsDown] = useState(true);
  
const handleClick1 = () => {
  setIsPeople(!isPeople);
  setIsDown(!isDown);
}

const[people, setPeople] = useState([
  { name: '남성', checked: false },
  { name: '여성', checked: false },
  { name: '남여공용', checked: false },
])

const peopleClick = (index) => {
  const newPeople = [...people];
  newPeople[index].checked = !newPeople[index].checked;
  setPeople(newPeople)
}

/////// 사이즈 클릭 //////
const [isSize, setIsSize] = useState(false);
const [sizeDown, setSizeDown] = useState(true);
  
const handleClick2 = () => {
  setIsSize(!isSize);
  setSizeDown(!sizeDown)
}

const[size, setSize] = useState([
  { size: 'S', checked: false },
  { size: 'M', checked: false },
  { size: 'L', checked: false },
  { size: 'XL', checked: false },
])

const sizeClick = (index) => {
  const newSize = [...size];
  newSize[index].checked = !newSize[index].checked;
  setSize(newSize)
}
//////////////처음에는 추천순이 나오고 클릭했을 때 다른 텍스트가 나오고 
////클릭 했을 때 다른 텍스트가 맨 처음 화면에 나오게 ////////////////////

const [isChoice, setIsChoice] = useState(false)
const[choiceDown, setChoiceDown] = useState(true)

const handleClick3 = () => {
  setIsChoice(!isChoice);
  setChoiceDown(!choiceDown);
};
const [choice, setChoice] = useState([
  { choice: '추천순', checked: true },
  { choice: '최신순', checked: false },
  { choice: '높은 가격순', checked: false },
  { choice: '낮은 가격순', checked: false }
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

const [selectedChoice, setSelectedChoice] = useState(choice.find((c) => c.checked));



/////// 음성인식 API ////////////
const { speak } = useSpeechSynthesis()
const text = useState([
  '탑&티셔츠',
  '후디',
  '니트',
  '재킷&베스트',
  '팬츠',
  '쇼츠',
  '스커트&드레스',
  '악세사리',
  '신발',
  '성별',
  '가격대',
  '사이즈'
])
const [pitch, setPitch] = useState(1)
const [rate, setRate] = useState(1)


/////////swich button ///////
const modes = [
  { id: 'switch1', text: '뇌전증 안전모드' },
  { id: 'switch2', text: '인지 장애 집중모드' },
  { id: 'switch3', text: '난독증 친화적 모드' }
];


///////////// 버튼 클릭했을 때 텍스트 변경 ////////
const [sizeText, setSizeText] = useState(
  [
    {text : '기본'},
    {text : '5%'},
    {text : '10%'},
  ]
)

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
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "black"];
const [currentColor, setCurrentColor] = useState("black");

const handleColorClick = (color) => {
  setCurrentColor(color);
};

const colorButtons = colors.map((color, index) => (
  <button
    className='bgcolor'
    key={index}
    onClick={() => handleColorClick(color)}
    style={{ backgroundColor: color }}
  >
  </button>
));

///////////////클릭 했을 때 배경 색상 변경 ////////////
const bgColors =  ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "black"];

const [currentBgColor, setCutrrentBgColor] = useState('');
const bgHandleColorClick = (color) => {
  setCutrrentBgColor(color)
};

const bgColorButton = bgColors.map((color,i) => (
  <button
  className='bgcolor'
  key={i}
  onClick={()=> bgHandleColorClick(color)}
  style={{ backgroundColor: color}}
  >
  </button>
));





/////// 클릭했을 때 border가 생기게 /////////////

const [borderVisible, setBorderVisible] = useState(false);

const handleBorder = () => {
  setBorderVisible(!borderVisible);
};

const borderStyle = borderVisible ? '1px solid blue' : 'none';

////// 클릭했을 때 font-family 바뀌게 /////////
const [fontFamily, setFontFamily] = useState('Pretendard-Thin');

const handleFontChange = () => {
  setFontFamily(!fontFamily);
}; 

const fontStyle = fontFamily ? 'BareunBatang' : 'none'

// 친화적 모드 토글 ////
const [toggleModal, setToggleModal] = useState(false);

const openModal1 = () => {
  setToggleModal(!toggleModal)
}

  return (
    <div>
      <div className='banner-wrapper'>
       <Swiper
        slidesPerView={3}
        spaceBetween={1}
        rewind={false}
        loop={true}
        pagination={{
          type: "fraction"
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        >
          <SwiperSlide><img src="베너사진/MAIN-BANNER-01.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-02.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-03.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-04.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-01.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-02.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-03.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-04.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-01.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="베너사진/MAIN-BANNER-02.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      
      <div className='product-wrapper' style={{color: currentColor, fontFamily:fontStyle}} >
        <h1 className='product-title'>Product</h1>

        <div className='filter'>
          <ul className="list">
          <p className='list-item' style={{backgroundColor: currentBgColor,border: borderStyle}}>
            필터 숨기기
            <FontAwesomeIcon icon={faSliders} />
          </p>
            <p className='ptag' style={{backgroundColor: currentBgColor,border: borderStyle}}>정렬 기준 :</p>
            <div className='list-item-choice'>
              <p onClick={handleClick3} style={{backgroundColor: currentBgColor,border: borderStyle}}>
                {choice.find((c) => c.checked)?.choice || '추천순'}
                {choiceDown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
              </p>
              {isChoice && (
                <>
                  {choice.map((choice, index) => (
                    <li key={index} onClick={() => choiceClick(index)}>
                      <p>{choice.choice}</p>
                    </li>
                  ))}
                </>
              )}
            </div>
          </ul>
        </div>

        <div className='productName 'style={{backgroundColor: currentBgColor,border: borderStyle}}>
          <ul className='product-item-list'>
            <li>탑&티셔츠</li>
            <li>후디</li>
            <li>니트</li>
            <li>재킷 & 베스트</li>
            <li>팬츠</li>
            <li>쇼츠</li>
            <li>스커트 & 드레스</li>
            <li>악세사리</li>
            <li>신발</li>
          </ul>

            
          <ul className="">
            <p onClick={handleClick1}>
              성별
              {isDown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </p>    
              {isPeople && (
                <>
                {people.map((people,index) => (
                  <li key={index} onClick={()=> peopleClick(index)}>
                    <input type="checkbox" checked={people.checked} readOnly />
                    {people.name}
                  </li>
                ))}
                </>
              )}
          </ul>

          <ul className="">
            <p onClick={handleClick}>가격대
              {showDown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </p>
              {isShown && (
                <>
                {prices.map((price,index) => (
                  <li key={index} onClick={()=> handlePriceClick(index)}>
                    <input type="checkbox" checked={price.checked} readOnly />
                    {price.label}
                  </li>
                ))}
                </>
              )}
          </ul>
      
          <ul className="">
            <p onClick={handleClick2}>사이즈
              {sizeDown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </p>
              {isSize && (
                <>
                {size.map((size,index) => (
                  <li key={index} onClick={()=> sizeClick(index)}>
                    <input type="checkbox" checked={size.checked} readOnly />
                    {size.size}
                  </li>
                ))}
                </>
              )}
          </ul>

          <div className='voice'>
            <label htmlFor="pitch">rate: </label>
            <span>{rate}</span>
            <input
            type="range"
            min='0.5'
            max='2'
            step='0.1'
            value={rate}
            onChange={(e)=> {
              setRate(e.target.value)
            }}
            />
            <label htmlFor="pitch">Pitch: </label>
            <span>{pitch}</span>
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
            <button onClick={() => speak({ text:text, rate, pitch })}><FontAwesomeIcon icon={faMicrophone} /></button>
          </div>

        </div>

        <div className="product-list" >
          {texts.map((test, index) => (
            <div className="product-preview" key={index} >
              <div onClick={() => click(index)} >
                <img  src={test.img} alt="" />
              </div>
                <h2 className='best-text' style={{backgroundColor: currentBgColor,border: borderStyle}}>{test.recommend}</h2>
                <h3 className='title-text' style={{backgroundColor: currentBgColor,border: borderStyle}}>{test.title}</h3>
                <p className='length-text' style={{backgroundColor: currentBgColor,border: borderStyle}}>{test.length}</p>
                <p className='price-text' style={{backgroundColor: currentBgColor,border: borderStyle}}>{test.price}</p>
            </div>
          ))}
        </div>

        <div className='detail' >
          <div className='detail-box' style={{display: toggleModal ? 'block' : 'none' }}>
            <span  className='detail-input-list' >
              <div className='detail-input-item'>
                <input type="checkbox" id="switch" className='hide' />
                <label for="switch" className='detail-input'></label>
                <p>뇌전증 안전모드</p>
              </div>

              <div className='detail-input-item'>
                <input type="checkbox" id="switch1" className='hide' />
                <label onClick={handleBorder} for="switch1" className='detail-input'></label>
                <p>인지 장애 집중모드</p>
              </div>

              <div className='detail-input-item'>
                <input type="checkbox" id="switch2" className='hide' />
                <label onClick={handleFontChange} for="switch2" className='detail-input'></label>
                <p>난독증 친화적 모드</p>
              </div>
            </span>
            
            <div className='light'>
              <button><img src="/메인사진/lightDark.png" alt="" /></button>
              <button><img src="/메인사진/light.png" alt="" /></button>
            </div>

            <div className='text-size'>
              <button className='min-button' onClick={handlePreviousClick} >
                <FontAwesomeIcon icon={faMinus} className='prev' />
              </button>
              <p>{sizeText[currentIndex].text}</p>
              <button className='plus-button' onClick={handleNextClick}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className='text-color-change'>
              <div className='change-color'>
                <h4 className='change-color-text'>글자 색상 변경</h4>
                {colorButtons}
              </div>
            </div>

            <div className='bg-color-change'>
              <div className='change-color'>
                <h4 className='change-color-text'>배경 색상 변경</h4>
                {bgColorButton}
              </div>
            </div>
          
    
          </div>
          <img className='modalImg' src="/메인사진/detailLogo.png" alt="" onClick={openModal1} />
        </div>
      </div>

    </div>
  );
};

export default Product