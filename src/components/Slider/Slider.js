import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode,Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
const Slider = ({array}) => {
  return (
    <div>
<Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                scrollbar={{ draggable: true }}
                // pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Autoplay, Scrollbar]}
                className=" lg:max-w-[100%]  flex items-center justify-center"
      >
        {array.map((item) => {
          return <>
          <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={item}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative"
                    // class="img-responsive gjs-hovered relative"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                  {/* <span
                    id="i3b7j"
                    data-gjs-type="default"
                    draggable="true"
                    class="pub-btn-small"
                  >
                    <span
                      id="ijnd7"
                      data-gjs-type="default"
                      draggable="true"
                      class="pub-btn-inner absolute text-white"
                    >
                      <span id="iv5wb" data-gjs-type="text" draggable="true">
                        Furniture
                      </span>
                    </span>
                  </span> */}
                </SwiperSlide>
          
          </>
        })}
                
                {/* <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service2}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service3}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service4}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service5}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service6}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service7}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service8}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service9}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service10}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={service11}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span>
                </SwiperSlide> */}

              
              </Swiper>      
    </div>
  )
}

export default Slider
