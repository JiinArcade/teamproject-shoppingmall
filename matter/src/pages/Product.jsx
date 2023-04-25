import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination,Virtual} from 'swiper'
import './Product.css'
import './slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

    

  return (
    <div>
     <Swiper
      slidesPerView={2}
      spaceBetween={100}
      rewind={false}
      loop={true}
      pagination={{
        type: "fraction"
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      >
        <SwiperSlide><img src="베너사진/MAIN-BANNER-01.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="베너사진/MAIN-BANNER-02.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="베너사진/MAIN-BANNER-03.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="베너사진/MAIN-BANNER-04.png" alt="" /></SwiperSlide>
      </Swiper>

      <div className="product-list">
        {texts.map((test, index) => (
          <div className="product-preview" key={index}>
            <div onClick={() => click(index)}>
              <img src={test.url} alt="" />
            </div>
              <h2 className='best-text'>{test.recommend}</h2>
              <h3 className='title-text'>{test.title}</h3>
              <p className='length-text'>{test.length}</p>
              <p className='price-text'>{test.price}</p>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Product