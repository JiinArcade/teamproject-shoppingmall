import React, { useState, useEffect, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHeart} from '@fortawesome/free-solid-svg-icons'
import './Detail.css'
import { useLocation } from 'react-router-dom'


const Detail = ({tests, id}) => {
  
  const [selectImg, setSelectImg] = useState('');
  const [test, setFetchData] = useState([]);
  const location = useLocation();

  const handleImageClick = (img) => {
    setSelectImg(img);
  };



  useEffect(()=> {
   fetch(`http://localhost:5001/details/${location.state.id}`)
   .then(response => {
    return response.json()
   })
   .then(response => {
     console.log(response)
     setFetchData(response)
   });
  }, []);



  if (test) {
    return (
    <div className="detial-list">
      {/* {fetchData.map((test,index) => ( */}
        <div>
          <div className="detail-preview" key={test.id}>
              
            <div className="main-img-wrapper">
            {selectImg && (
                <div className='change-Img'>
                  <img src={selectImg} alt="" />
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
          
              <li className='size-info'>{test.size}</li>
              <button className='main-size-text'>
                <ul className='main-size-text-list'>
                  <li>{test.size1}</li>
                  <li>{test.size2}</li>
                  <li>{test.size3}</li>
                  <li>{test.size4}</li>
                  <li>{test.size5}</li>
                </ul>
              </button>
                <button className='main-size-text'>
                  <ul className='main-size-text-list'>
                    <li>{test.size6}</li>
                    <li>{test.size7}</li>
                    <li>{test.size8}</li>
                    <li>{test.size9}</li>
                    <li>{test.size10}</li>
                  </ul>
                </button>
                <button className='main-size-text'>
                  <ul className='main-size-text-list'>
                    <li>{test.size11}</li>
                    <li>{test.size12}</li>
                    <li>{test.size13}</li>
                    <li>{test.size14}</li>
                    <li>{test.size15}</li>
                  </ul>
                </button>
                <button className='main-size-text'>
                  <ul className='main-size-text-list'>
                    <li>{test.size16}</li>
                    <li>{test.size17}</li>
                    <li>{test.size18}</li>
                    <li>{test.size19}</li>
                    <li>{test.size20}</li>
                  </ul>
                </button>
                <button className='main-size-text'>
                  <ul className='main-size-text-list'>
                    <li>{test.size21}</li>
                    <li>{test.size22}</li>
                    <li>{test.size18}</li>
                    <li>{test.size23}</li>
                    <li>{test.size25}</li>
                  </ul>
                </button>
            </div>

            <div className='text-wrapper'>
              <h2>{test.subtext}</h2>
              <h2>{test.deatiltitle}</h2>
              <p>{test.deatillegth}</p>
              <p className='text'>{test.deatilprice}</p>
              <img src={test.colorimg} alt="" />
              <img src={test.colorimg2} alt="" />
              <div className='size-text-wrapper'>
                <button className='size-text'>{test.deatilsize}</button>
                <button className='size-text1'>{test.deatilsize1}</button>
                <button className='size-text2'>{test.deatilsize2}</button>
                <button className='size-text3'>{test.deatilsize3}</button>
              </div>
          
              <button className='order-wrapper'>
                <li className='order'>{test.order}</li>
                <li className='order1'>{test.order1}</li>
              </button>
              <button className='heart-icon'>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <div className='design-text-wrapper'>
                <p>{test.deatildesign}</p>
                <p>{test.deatildesign1}</p>
                <p>{test.deatildesign2}</p>
                <p>{test.deatildesign3}</p>
              </div>
              <p>{test.deatilcodyitem}</p>
              <p>{test.deatilcodyitem1}</p>
              <p>{test.deatilmaterial}</p>
              <p>{test.deatilmaterial1}</p>
              <p>{test.wash}</p>
              <p>{test.wash1}</p>
            </div>
          </div>
          
          {/* <div className="detail-wrapper">
            <h3>{test.detailtext}</h3>
            <div className="detail-img-wrapper">
              <img src={test.detailimg} alt="" />
              <img src={test.detailimg1} alt="" />
              <img src={test.detailimg2} alt="" />
              <img src={test.detailimg3} alt="" />
            </div>
            <h3>{test.detailtext}</h3>
            <h3>{test.detailtext}</h3>
            <h3>{test.detailtext}</h3>
          </div> */}








          
        </div>
      {/* ))} */}
    </div>
  );
  }
  
};


export default Detail