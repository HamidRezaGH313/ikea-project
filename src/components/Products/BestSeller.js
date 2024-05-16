import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "../../css/swiper.min.css";
import image1 from "../../Images/mobilyalar.jpg";
import image2 from "../../Images/depolama-ve-organizasyon.jpg";
import image3 from "../../Images/zuccaciye.jpg";
import image4 from "../../Images/calisma-alanlari.jpg";
import image5 from "../../Images/bebek-ve-cocuk.jpg";
import image6 from "../../Images/ev-tekstili.jpg";
import image7 from "../../Images/aydinlatma.jpg";
import image8 from "../../Images/dekorasyon.jpg";
import image9 from "../../Images/banyo-urunleri.jpg";
import image10 from "../../Images/60156121-EN.jpg";
import image11 from "../../Images/PE329567.webp";
import image12 from "../../Images/PH136365.webp";
import chair1 from "../../Images/PE734597.jpg";
import chari2 from "../../Images/PE866425.jpg";
import Billy1 from "../../Images/PE692385.jpg";
import Billy2 from "../../Images/PE664196.jpg";
import Billy3 from "../../Images/PE576236.jpg";
import malm1 from "../../Images/PE621344.jpg";
import malm2 from "../../Images/PE886002.jpg";
import malm3 from "../../Images/PE621355.jpg";
import micke1 from '../../Images/PE740345.webp';
import micke2 from '../../Images/PE740299.webp';
import micke3 from '../../Images/PE787985.webp';
import INGATORP1 from '../../Images/PE740879.webp'
import INGATORP2 from '../../Images/PE740878.webp'
import koncis from '../../Images/PE729198.webp';
import alex1 from '../../Images/PE813763.webp';
import alex2 from '../../Images/PE813770.webp';
import alex3 from '../../Images/PE813762.webp';
import ingolf1 from '../../Images/PE736035.webp'
import ingolf2 from '../../Images/PE736037.webp';
import kallax1 from '../../Images/PE702939.webp'
import kallax2 from '../../Images/PE627165.webp'
import kallax3 from '../../Images/PE702938.webp'
import kallax4 from '../../Images/PE693189.webp'
import HoverBilly from '../../Images/PE845813.webp';
import HoverMalm from '../../Images/PE885995.webp';
import HoverMike from '../../Images/PH151482.webp';
import HoverKallax from '../../Images/PE859876.webp';
import HoverAlex from '../../Images/PH167220.webp';
import HoverIngatrop from '../../Images/PH179330.webp';
import HoverIngolf from '../../Images/PH167220.webp';
import HoverKoncis from '../../Images/PE279397.webp';
import Hover from '../../Images/PE317999.webp';










import { FaAngleDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
const BestSeller = () => {
  const [Sort, setSort] = useState(false);
  const [hover, SetHover] = useState(false);
  const [hover2, SetHover2] = useState(false);
  const [hoverChair, SetHoverChair] = useState(false);
  const [hoverBilly, SethoverBilly] = useState(false);
  const [hoverMalm, SethoverMalm] = useState(false);
  const [hoverMike,SethoverMike] = useState(false);
  const [hoverKallax, SethoverKallax] = useState(false);
  const [hoverAlex, SethoverAlex] = useState(false);
  const [hoverIngatrop, SethoverIngatrop] = useState(false);
  const [hoverKoncis, SethoverKoncis] = useState(false);
  const [hoverIngolf, SethoverIngolf] = useState(false);
  // const [hover2, SetHover2] = useState(false);
  // const [hover2, SetHover2] = useState(false);
  const [Color, setColor] = useState(false);
  const [Function, setFunction] = useState(false);
  const [Category, setCategory] = useState(false);
  const [Price, setPrice] = useState(false);
  const [Size, setSize] = useState(false);
  const [Frimness, setFrimness] = useState(false);
  const [AllFilters, setAllFilters] = useState(false);
  const ImgRef = useRef();
  const onMouseEnterHandler = () => {
    // console.log(ImgRef.current.src);
    SetHover(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandler = () => {
    SetHover(false);
  };
  const onMouseEnterHandler2 = () => {
    // console.log(ImgRef.current.src);
    SetHover2(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandler2 = () => {
    SetHover2(false);
  };
  const onMouseEnterHandlerChair = () => {
    // console.log(ImgRef.current.src);
    SetHoverChair(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerChair = () => {
    SetHoverChair(false);
  };
  const onMouseEnterHandlerBilly= () => {
    // console.log(ImgRef.current.src);
    SethoverBilly(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerBilly = () => {
    SethoverBilly(false);
  };
  const onMouseEnterHandlerMalm =() => {
    // console.log(ImgRef.current.src);
    SethoverMalm(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerMalm = () => {
    SethoverMalm(false);
  };
  const onMouseEnterHandlerMike =() => {
    // console.log(ImgRef.current.src);
    SethoverMike(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerMike = () => {
    SethoverMike(false);
  };
  const onMouseEnterHandlerKallax =() => {
    // console.log(ImgRef.current.src);
    SethoverKallax(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerKallax = () => {
    SethoverKallax(false);
  };
  const onMouseEnterHandlerAlex =() => {
    // console.log(ImgRef.current.src);
    SethoverAlex(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerAlex = () => {
    SethoverAlex(false);
  };
  const onMouseEnterHandlerIngatrop =() => {
    // console.log(ImgRef.current.src);
    SethoverIngatrop(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerIngatrop = () => {
    SethoverIngatrop(false);
  };
  const onMouseEnterHandlerKoncis =() => {
    // console.log(ImgRef.current.src);
    SethoverKoncis(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerKoncis = () => {
    SethoverKoncis(false);
  };
  const onMouseEnterHandlerIngolf =() => {
    // console.log(ImgRef.current.src);
    SethoverIngolf(true);
    // require(ImgRef.current.src);
  };
  const onMouseLeaveHandlerIngolf = () => {
    SethoverIngolf(false);
  };
  
  
  
  
  
  return (
    <>
      <div
        className="w-[25%]"
        // class="breadcrumb-container subpage-content-pt"
      >
        <div class=" w-full rtl ">
          <ul
            id="ctl00_ctrlBreadcrumb_ulSiteDirectory"
            // class=" rtl breadcrumb"
            className="w-[30]  p-6 rounded-lg rtl flex  mt-5 font-vazir"
            aria-label="Breadcrumb"
            role="navigation"
            itemscope=""
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
              class=""
            >
              <a
                itemprop="item"
                href="https://www.ikea.com.tr/en/"
                class="breadcrumb-item mr-2 ml-2 text-[#6e6e6e] "
              >
                <span class="name" itemprop="name">
                  صفحه اصلي /
                </span>
              </a>
              <meta itemprop="position" content="0" />
            </li>

            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
              class=""
            >
              <a
                itemprop="item"
                href="https://www.ikea.com.tr/en/start-shopping"
                // class="breadcrumb-item"
                class="breadcrumb-item mr-1 ml-2 text-[#6e6e6e] "
              >
                <span class="name" itemprop="name">
                  محصولات /
                </span>
              </a>
              <meta itemprop="position" content="1" />
            </li>

            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="https://schema.org/ListItem"
            >
              <a
                onclick="return false;"
                itemprop="item"
                href="https://www.ikea.com.tr/en/pages/best-sellers"
                // class="breadcrumb-item"
                class="breadcrumb-item mr-2 ml-2 text-[#6e6e6e] "
              >
                <span itemprop="name" class="name">
                  پر فروش ترين ها
                </span>
              </a>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
      </div>

      {/* main */}
      <div
      // class="page-container"
      >
        <div
        //  class="subpage-content"
        >
          <div
          // class="container-fluid"
          >
            <h1 class="subpage-title font-vazir">پر فروش ترين ها</h1>
            <div class="subpage-free-content">
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
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                scrollbar={{ draggable: true }}
                // pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Autoplay, Scrollbar]}
                className=" lg:max-w-[100%]  flex items-center justify-center"
              >
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
                    src={image1}
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
                    src={image2}
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
                    src={image3}
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
                    src={image4}
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
                    src={image5}
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
                    src={image6}
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
                    src={image7}
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
                    src={image8}
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
                    src={image9}
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

                {/* <div class="pub-carousel-wrapper shop-products">
                  <div class="pub-carousel-inner">
                    <div class="pub-carousel-box">
                      <div
                        class="pub-carousel swiper-container
                 info-carousel swiper-initialized swiper-horizontal swiper-pointer-events
                 swiper-free-mode swiper-backface-hidden"
                      >
                        <ul
                          // class="swiper-wrapper"
                          id="swiper-wrapper-9bf5674e64fa0396"
                          aria-live="polite"
                          style={{ transform: "translate3d(0px, 0px, 0px);" }}
                        >
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
                            <li
                              data-gjs-highlightable="true"
                              id="i703"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="1 / 9"
                              // class="swiper-slide anchor swiper-slide-active"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="is53"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=furniture"
                              >
                                <span
                                  id="iqek"
                                  data-gjs-type="default"
                                  draggable="true"
                                  // class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="i8ryv"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                                    alt="IKEA-mobilyalar"
                                    data-mobil-src=""
                                    class="img-responsive gjs-hovered"
                                  />
                                </span>
                                <span
                                  id="i3b7j"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="ijnd7"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="iv5wb"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Furniture
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="i07er"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="2 / 9"
                              // class="swiper-slide anchor swiper-slide-next"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="i8bs2"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=storage-and-organisation"
                              >
                                <span
                                  id="ijo8d"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="impbl"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    // src="./Best Sellers _ IKEA_files/depolama-ve-organizasyon.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/depolama-ve-organizasyon.jpg"
                                    alt="IKEA-depolama ve organizasyon"
                                    data-mobil-src=""
                                    // class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="i50mh"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="iehhq"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="i9k5f"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Storage and Organisation
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="ing7g"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="3 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="iu8p4"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=cookware-and-tableware"
                              >
                                <span
                                  id="i6tpk"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="imiwp"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/zuccaciye.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/zuccaciye.jpg"
                                    alt="IKEA-zuccaciye"
                                    data-mobil-src=""
                                    // class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="ile5d"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="i59ti"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="irzm3"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Cookware and Tableware
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="i1un6"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="4 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="iaxye"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=working-spaces"
                              >
                                <span
                                  id="irf9i"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="ic0xa"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    // src="./Best Sellers _ IKEA_files/calisma-alanlari.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/calisma-alanlari.jpg"
                                    alt="IKEA-calisma alanlari"
                                    data-mobil-src=""
                                    // class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="iltgu"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="iqmsi"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="itxpj"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Working Spaces
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="in0du"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="5 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="in04x"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=baby-and-children-products"
                              >
                                <span
                                  id="ipv4s"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="inwjh"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/bebek-ve-cocuk.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/bebek-ve-cocuk.jpg"
                                    alt="IKEA-bebek ve cocuk"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="i7rec"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="ibs65"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="i3aig"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Baby and Children Products
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="inb11"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="6 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="ihjdf"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=home-textile"
                              >
                                <span
                                  id="i5ezn"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="i39gf"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/ev-tekstili.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/ev-tekstili.jpg"
                                    alt="IKEA-ev tekstili"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="iy6hh"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="i01ph"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="izsux"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Home Textile
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="ijeid"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="7 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="iqe6y"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=lighting"
                              >
                                <span
                                  id="ivt9j"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="iugt8"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/aydinlatma.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/aydinlatma.jpg"
                                    alt="IKEA-aydinlatma"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="izoic"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="ibjob"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="iuf8x"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Lighting
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="i6koc"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="8 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="iodat"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=home-decoration"
                              >
                                <span
                                  id="ic88x"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="iwy1x"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/dekorasyon.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/dekorasyon.jpg"
                                    alt="IKEA-dekorasyon"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="iulvd"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="icssg"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="ibrxi"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Home Decoration
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
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
                            <li
                              data-gjs-highlightable="true"
                              id="ic1na"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="9 / 9"
                              // class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="it8r8"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?category=bathroom-products"
                              >
                                <span
                                  id="i78if"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                                >
                                  <img
                                    id="i710i"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="./Best Sellers _ IKEA_files/banyo-urunleri.jpg"
                                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/banyo-urunleri.jpg"
                                    alt="IKEA-banyo urunleri"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <span
                                  id="idtr4"
                                  data-gjs-type="default"
                                  draggable="true"
                                  class="pub-btn-small"
                                >
                                  <span
                                    id="imq34"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="pub-btn-inner"
                                  >
                                    <span
                                      id="ir8sm"
                                      data-gjs-type="text"
                                      draggable="true"
                                    >
                                      Bathroom Products
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </li>
                          </SwiperSlide>
                        </ul>
                        <span
                          aria-live="assertive"
                          aria-atomic="true"
                          class="swiper-notification"
                        ></span>
                        <span
                          class="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="swiper-button swiper-button-prev swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-9bf5674e64fa0396"
                      aria-disabled="true"
                    ></div>
                    <div
                      class="swiper-button swiper-button-next"
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-9bf5674e64fa0396"
                      aria-disabled="false"
                    ></div>
                    <div class="swiper-scrollbar">
                      <div
                        class="swiper-scrollbar-drag"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "603.542px;",
                        }}
                      ></div>
                    </div>
                  </div>
                </div> */}
              </Swiper>

              <div class="shoppable-info-container font-vazir">
                <h2>خانه خود را با بهترین فروشندگان ما تکمیل کنید</h2>
                <p>
                  <span>
                    ما دوست داریم محصولات با کیفیت بالا را با قیمت پایین ارائه
                    دهیم. شما می توانید برای به حداکثر رساندن راحتی فضای زندگی
                    خود در خانه، پرفروش ترین مبلمان و لوازم منزل را که هر خانه
                    به آن نیاز دارد، جستجو کنید.;
                  </span>
                </p>
              </div>
              <span id="iojaj" class="d-none"></span>

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
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                scrollbar={{ draggable: true }}
                // pagination={{ clickable: true }}
                modules={[FreeMode, Pagination, Autoplay, Scrollbar]}
                className=" lg:max-w-[100%]  flex items-center justify-center"
              >
                <div class="pub-carousel-wrapper pub-carousel-type">
                  <div class="pub-carousel-inner">
                    <div class="pub-carousel-box">
                      <div class="pub-carousel swiper-container swiper-container-horizontal swiper-container-free-mode info-carousel swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
                        <ul
                          id="i4tq6t"
                          class="swiper-wrapper"
                          style={{ transform: "translate3d(0px, 0px, 0px);" }}
                          aria-live="polite"
                        >
                          <SwiperSlide>
                            <li
                              data-gjs-highlightable="true"
                              id="iozyik"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="1 / 4"
                              class="swiper-slide anchor swiper-slide-active"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="isjo0g-2"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=0&amp;maxPrice=100"
                                class=""
                              >
                                <span
                                  id="iht215"
                                  data-gjs-type="disabledElement"
                                  draggable="true"
                                  class="pub-aspect-ratio-image"
                                >
                                  <img
                                    id="ig5ym2"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-100tl.jpg"
                                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-100tl.jpg"
                                    alt="IKEA-cok satanlar 100tl"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <div
                                  id="itk6ir"
                                  data-gjs-type="default"
                                  draggable="true"
                                  className="h-[40vh] px-20 py-16"
                                  // class="pub-carousel-type-content pub-carousel-red"
                                  style={{ backgroundColor: "#ffe713" }}
                                >
                                  <span
                                    id="izreyx"
                                    data-gjs-type="text"
                                    draggable="true"
                                    // className="h-52"
                                    // class="pub-title"
                                  >
                                    <span
                                      id="i4yatt"
                                      data-gjs-type="text"
                                      draggable="true"
                                      style={{ color: "black" }}
                                      className="text-4xl font-bold font-vazir"
                                    >
                                      پرفروش ترین ها زیر 100
                                    </span>
                                  </span>
                                  <span
                                    id="iunycb"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="description"
                                  ></span>
                                  <span
                                    id="iyma79"
                                    data-gjs-type="default"
                                    draggable="true"
                                    className=" h-80 w-full"
                                    // class="detail-btn"
                                  >
                                    <svg
                                      id="i24q1k"
                                      data-gjs-type="svg"
                                      draggable="true"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      width="30"
                                      height="30"
                                      className="mt-52 rounded-full   bg-white"
                                      // class="pub__svg-icon pub__btn__icon"
                                    >
                                      <path
                                        id="i3d551"
                                        data-gjs-type="svg-in"
                                        draggable="true"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </SwiperSlide>
                          <SwiperSlide>
                            <li
                              data-gjs-highlightable="true"
                              id="it0opi"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="2 / 4"
                              class="swiper-slide anchor swiper-slide-next"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="ipa6mh"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=101&amp;maxPrice=250"
                              >
                                <span
                                  id="ifxb4k"
                                  data-gjs-type="disabledElement"
                                  draggable="true"
                                  class="pub-aspect-ratio-image"
                                >
                                  <img
                                    id="i2uvwm"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-250tl.jpg"
                                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-250tl.jpg"
                                    alt="IKEA-cok satanlar 250tl"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <div
                                  id="i7nj7i"
                                  data-gjs-type="default"
                                  draggable="true"
                                  className="h-[40vh] px-20 py-16"
                                  // class="pub-carousel-type-content pub-carousel-red"
                                  style={{ backgroundColor: "#ffe713" }}
                                >
                                  <span
                                    id="iqm8a2"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="pub-title"
                                  >
                                    <span
                                      id="ieh56p"
                                      data-gjs-type="text"
                                      draggable="true"
                                      style={{ color: "black" }}
                                      className="text-4xl font-bold font-vazir"
                                    >
                                      پرفروش ترین ها زیر 250
                                    </span>
                                  </span>
                                  <span
                                    id="iipl2k"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="description"
                                  ></span>
                                  <span
                                    id="i9un4d"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="detail-btn"
                                  >
                                    <svg
                                      id="iuivqh"
                                      data-gjs-type="svg"
                                      draggable="true"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      width="30"
                                      height="30"
                                      className="mt-52 rounded-full   bg-white"
                                      // class="pub__svg-icon pub__btn__icon"
                                    >
                                      <path
                                        id="i0z7dw"
                                        data-gjs-type="svg-in"
                                        draggable="true"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </SwiperSlide>
                          <SwiperSlide>
                            <li
                              data-gjs-highlightable="true"
                              id="igffxe"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="3 / 4"
                              class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="ivbqab"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=251&amp;maxPrice=500"
                              >
                                <span
                                  id="ieva5k"
                                  data-gjs-type="disabledElement"
                                  draggable="true"
                                  class="pub-aspect-ratio-image"
                                >
                                  <img
                                    id="i1do9s"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-500tl.jpg"
                                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-500tl.jpg"
                                    alt="IKEA-cok satanlar 500tl"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <div
                                  id="irmi1o"
                                  data-gjs-type="default"
                                  draggable="true"
                                  className="h-[40vh] px-20 py-16"
                                  // class="pub-carousel-type-content pub-carousel-red"
                                  style={{ backgroundColor: "#ffe713" }}
                                >
                                  <span
                                    id="in2jid"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="pub-title"
                                  >
                                    <span
                                      id="ivxpzp"
                                      data-gjs-type="text"
                                      draggable="true"
                                      style={{ color: "#000000" }}
                                      className="text-4xl font-bold font-vazir"
                                    >
                                      پرفروش ترین ها زیر 500
                                    </span>
                                  </span>
                                  <span
                                    id="ies7tk"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="description"
                                  ></span>
                                  <span
                                    id="igzyig"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="detail-btn"
                                  >
                                    <svg
                                      id="in2o6r"
                                      data-gjs-type="svg"
                                      draggable="true"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      width="30"
                                      height="30"
                                      className="mt-52 rounded-full   bg-white"
                                      // class="pub__svg-icon pub__btn__icon"
                                    >
                                      <path
                                        id="i432lq"
                                        data-gjs-type="svg-in"
                                        draggable="true"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </SwiperSlide>
                          <SwiperSlide>
                            <li
                              data-gjs-highlightable="true"
                              id="igffxe-2"
                              data-gjs-type="mini-slider-slide"
                              draggable="true"
                              role="group"
                              aria-label="4 / 4"
                              class="swiper-slide anchor"
                              style={{ marginRight: "10px" }}
                            >
                              <a
                                data-gjs-highlightable="true"
                                id="ivbqab-2"
                                data-gjs-type="link"
                                draggable="true"
                                href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=501&amp;maxPrice=1000"
                              >
                                <span
                                  id="ieva5k-2"
                                  data-gjs-type="disabledElement"
                                  draggable="true"
                                  class="pub-aspect-ratio-image"
                                >
                                  <img
                                    id="i1do9s-2"
                                    data-gjs-type="bs-image"
                                    draggable="true"
                                    src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-1000tl.jpg"
                                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-1000tl.jpg"
                                    alt="IKEA-cok satanlar 1000tl"
                                    data-mobil-src=""
                                    class="img-responsive"
                                  />
                                </span>
                                <div
                                  id="irmi1o-2"
                                  data-gjs-type="default"
                                  draggable="true"
                                  className="h-[40vh] px-20 py-16"
                                  // class="pub-carousel-type-content pub-carousel-red"
                                  style={{ backgroundColor: "#ffe713" }}
                                >
                                  <span
                                    id="in2jid-2"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="pub-title"
                                    style={{ color: "#2e2e2e;" }}
                                  >
                                    <span
                                      id="ivxpzp-2"
                                      data-gjs-type="text"
                                      draggable="true"
                                      style={{ color: "#000000" }}
                                      className="text-4xl font-bold font-vazir "
                                    >
                                      پرفروش ترین ها زیر 1.000{" "}
                                    </span>
                                  </span>
                                  <span
                                    id="ies7tk-2"
                                    data-gjs-type="text"
                                    draggable="true"
                                    class="description"
                                  ></span>
                                  <span
                                    id="igzyig-2"
                                    data-gjs-type="default"
                                    draggable="true"
                                    class="detail-btn"
                                  >
                                    <svg
                                      width="35"
                                      height="35"
                                      className="mt-52 rounded-full   bg-white"
                                      id="in2o6r-2"
                                      data-gjs-type="svg"
                                      draggable="true"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      // class="pub__svg-icon pub__btn__icon"
                                    >
                                      <path
                                        id="i432lq-2"
                                        data-gjs-type="svg-in"
                                        draggable="true"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </a>
                            </li>
                          </SwiperSlide>
                        </ul>
                        <span
                          aria-live="assertive"
                          aria-atomic="true"
                          class="swiper-notification"
                        ></span>
                        <span
                          class="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="swiper-button swiper-button-prev swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="i4tq6t"
                      aria-disabled="true"
                    ></div>
                    <div
                      class="swiper-button swiper-button-next"
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="i4tq6t"
                      aria-disabled="false"
                    ></div>
                    <div class="swiper-scrollbar">
                      <div
                        class="swiper-scrollbar-drag"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          width: "763.255px;",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Swiper>

              {/* <div class="pub-carousel-wrapper pub-carousel-type">
                <div class="pub-carousel-inner">
                  <div class="pub-carousel-box">
                    <div class="pub-carousel swiper-container swiper-container-horizontal swiper-container-free-mode info-carousel swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
                      <ul
                        id="i4tq6t"
                        class="swiper-wrapper"
                        style={{ transform: "translate3d(0px, 0px, 0px);" }}
                        aria-live="polite"
                      >
                        <li
                          data-gjs-highlightable="true"
                          id="iozyik"
                          data-gjs-type="mini-slider-slide"
                          draggable="true"
                          role="group"
                          aria-label="1 / 4"
                          class="swiper-slide anchor swiper-slide-active"
                          style={{ marginRight: "10px" }}
                        >
                          <a
                            data-gjs-highlightable="true"
                            id="isjo0g-2"
                            data-gjs-type="link"
                            draggable="true"
                            href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=0&amp;maxPrice=100"
                            class=""
                          >
                            <span
                              id="iht215"
                              data-gjs-type="disabledElement"
                              draggable="true"
                              class="pub-aspect-ratio-image"
                            >
                              <img
                                id="ig5ym2"
                                data-gjs-type="bs-image"
                                draggable="true"
                                src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-100tl.jpg"
                                data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-100tl.jpg"
                                alt="IKEA-cok satanlar 100tl"
                                data-mobil-src=""
                                class="img-responsive"
                              />
                            </span>
                            <div
                              id="itk6ir"
                              data-gjs-type="default"
                              draggable="true"
                              class="pub-carousel-type-content pub-carousel-red"
                              style={{ backgroundColor: "#ffe713;" }}
                            >
                              <span
                                id="izreyx"
                                data-gjs-type="text"
                                draggable="true"
                                class="pub-title"
                              >
                                <span
                                  id="i4yatt"
                                  data-gjs-type="text"
                                  draggable="true"
                                  style={{ color: "black;" }}
                                >
                                  پرفروش ترین ها زیر 100
                                </span>
                              </span>
                              <span
                                id="iunycb"
                                data-gjs-type="text"
                                draggable="true"
                                class="description"
                              ></span>
                              <span
                                id="iyma79"
                                data-gjs-type="default"
                                draggable="true"
                                class="detail-btn"
                              >
                                <svg
                                  id="i24q1k"
                                  data-gjs-type="svg"
                                  draggable="true"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="pub__svg-icon pub__btn__icon"
                                >
                                  <path
                                    id="i3d551"
                                    data-gjs-type="svg-in"
                                    draggable="true"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          data-gjs-highlightable="true"
                          id="it0opi"
                          data-gjs-type="mini-slider-slide"
                          draggable="true"
                          role="group"
                          aria-label="2 / 4"
                          class="swiper-slide anchor swiper-slide-next"
                          style={{ marginRight: "10px" }}
                        >
                          <a
                            data-gjs-highlightable="true"
                            id="ipa6mh"
                            data-gjs-type="link"
                            draggable="true"
                            href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=101&amp;maxPrice=250"
                          >
                            <span
                              id="ifxb4k"
                              data-gjs-type="disabledElement"
                              draggable="true"
                              class="pub-aspect-ratio-image"
                            >
                              <img
                                id="i2uvwm"
                                data-gjs-type="bs-image"
                                draggable="true"
                                src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-250tl.jpg"
                                data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-250tl.jpg"
                                alt="IKEA-cok satanlar 250tl"
                                data-mobil-src=""
                                class="img-responsive"
                              />
                            </span>
                            <div
                              id="i7nj7i"
                              data-gjs-type="default"
                              draggable="true"
                              class="pub-carousel-type-content pub-carousel-red"
                              style={{ backgroundColor: "#ffe713;" }}
                            >
                              <span
                                id="iqm8a2"
                                data-gjs-type="text"
                                draggable="true"
                                class="pub-title"
                              >
                                <span
                                  id="ieh56p"
                                  data-gjs-type="text"
                                  draggable="true"
                                  style={{ color: "black;" }}
                                >
                                  پرفروش ترین ها زیر 250
                                </span>
                              </span>
                              <span
                                id="iipl2k"
                                data-gjs-type="text"
                                draggable="true"
                                class="description"
                              ></span>
                              <span
                                id="i9un4d"
                                data-gjs-type="default"
                                draggable="true"
                                class="detail-btn"
                              >
                                <svg
                                  id="iuivqh"
                                  data-gjs-type="svg"
                                  draggable="true"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="pub__svg-icon pub__btn__icon"
                                >
                                  <path
                                    id="i0z7dw"
                                    data-gjs-type="svg-in"
                                    draggable="true"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          data-gjs-highlightable="true"
                          id="igffxe"
                          data-gjs-type="mini-slider-slide"
                          draggable="true"
                          role="group"
                          aria-label="3 / 4"
                          class="swiper-slide anchor"
                          style={{ marginRight: "10px" }}
                        >
                          <a
                            data-gjs-highlightable="true"
                            id="ivbqab"
                            data-gjs-type="link"
                            draggable="true"
                            href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=251&amp;maxPrice=500"
                          >
                            <span
                              id="ieva5k"
                              data-gjs-type="disabledElement"
                              draggable="true"
                              class="pub-aspect-ratio-image"
                            >
                              <img
                                id="i1do9s"
                                data-gjs-type="bs-image"
                                draggable="true"
                                src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-500tl.jpg"
                                data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-500tl.jpg"
                                alt="IKEA-cok satanlar 500tl"
                                data-mobil-src=""
                                class="img-responsive"
                              />
                            </span>
                            <div
                              id="irmi1o"
                              data-gjs-type="default"
                              draggable="true"
                              class="pub-carousel-type-content pub-carousel-red"
                              style={{ backgroundColor: "#ffe713" }}
                            >
                              <span
                                id="in2jid"
                                data-gjs-type="text"
                                draggable="true"
                                class="pub-title"
                              >
                                <span
                                  id="ivxpzp"
                                  data-gjs-type="text"
                                  draggable="true"
                                  style={{ color: "#000000;" }}
                                >
                                  پرفروش ترین ها زیر 500
                                </span>
                              </span>
                              <span
                                id="ies7tk"
                                data-gjs-type="text"
                                draggable="true"
                                class="description"
                              ></span>
                              <span
                                id="igzyig"
                                data-gjs-type="default"
                                draggable="true"
                                class="detail-btn"
                              >
                                <svg
                                  id="in2o6r"
                                  data-gjs-type="svg"
                                  draggable="true"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="pub__svg-icon pub__btn__icon"
                                >
                                  <path
                                    id="i432lq"
                                    data-gjs-type="svg-in"
                                    draggable="true"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          data-gjs-highlightable="true"
                          id="igffxe-2"
                          data-gjs-type="mini-slider-slide"
                          draggable="true"
                          role="group"
                          aria-label="4 / 4"
                          class="swiper-slide anchor"
                          style={{ marginRight: "10px" }}
                        >
                          <a
                            data-gjs-highlightable="true"
                            id="ivbqab-2"
                            data-gjs-type="link"
                            draggable="true"
                            href="https://www.ikea.com.tr/en/pages/best-sellers?minPrice=501&amp;maxPrice=1000"
                          >
                            <span
                              id="ieva5k-2"
                              data-gjs-type="disabledElement"
                              draggable="true"
                              class="pub-aspect-ratio-image"
                            >
                              <img
                                id="i1do9s-2"
                                data-gjs-type="bs-image"
                                draggable="true"
                                src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-1000tl.jpg"
                                data-src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-1000tl.jpg"
                                alt="IKEA-cok satanlar 1000tl"
                                data-mobil-src=""
                                class="img-responsive"
                              />
                            </span>
                            <div
                              id="irmi1o-2"
                              data-gjs-type="default"
                              draggable="true"
                              class="pub-carousel-type-content pub-carousel-red"
                              style={{ backgroundColor: "#ffe713" }}
                            >
                              <span
                                id="in2jid-2"
                                data-gjs-type="text"
                                draggable="true"
                                class="pub-title"
                                style={{ color: "#2e2e2e;" }}
                              >
                                <span
                                  id="ivxpzp-2"
                                  data-gjs-type="text"
                                  draggable="true"
                                  style={{ color: "#000000;" }}
                                >
                                  پرفروش ترین ها زیر 1.000{" "}
                                </span>
                              </span>
                              <span
                                id="ies7tk-2"
                                data-gjs-type="text"
                                draggable="true"
                                class="description"
                              ></span>
                              <span
                                id="igzyig-2"
                                data-gjs-type="default"
                                draggable="true"
                                class="detail-btn"
                              >
                                <svg
                                  id="in2o6r-2"
                                  data-gjs-type="svg"
                                  draggable="true"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="pub__svg-icon pub__btn__icon"
                                >
                                  <path
                                    id="i432lq-2"
                                    data-gjs-type="svg-in"
                                    draggable="true"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <span
                        aria-live="assertive"
                        aria-atomic="true"
                        class="swiper-notification"
                      ></span>
                      <span
                        class="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></span>
                    </div>
                  </div>
                  <div
                    class="swiper-button swiper-button-prev swiper-button-disabled"
                    tabindex="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="i4tq6t"
                    aria-disabled="true"
                  ></div>
                  <div
                    class="swiper-button swiper-button-next"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="i4tq6t"
                    aria-disabled="false"
                  ></div>
                  <div class="swiper-scrollbar">
                    <div
                      class="swiper-scrollbar-drag"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        width: "763.255px;",
                      }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="filter-wrapper">
              <div class="filter-box">
                <div class="filter-item arrow-none available-online">
                  <span>موجودي آنلاين</span>
                </div>

                <div class="filter-item arrow-none mr-3">
                  <span
                    className=" flex items-center "
                    onClick={() => setSort(!Sort)}
                  >
                    مرتب سازي
                    <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                    {/* <span></span> */}
                  </span>
                  {Sort && (
                    <div
                      className=" absolute z-50 border-4 rounded-xl border-black 
                    rtl bg-white p-5 mt-24 w-[200%] h-[40vh] overflow-x-hidden"
                      // class="filter-content sort-filter"
                      // style={{ display: "none;" }}
                    >
                      <div className="mb-10 cursor-pointer">
                        {/* <div class="radio"> */}
                        <input
                          name="sort-radio"
                          // id="None"
                          type="radio"
                          checked=""
                        />
                        {/* <label for="None" data-name="None"> */}
                        <span class="name">پر فروش ترين ها</span>
                        {/* </label> */}
                      </div>
                      <div className="mb-10 cursor-pointer">
                        {/* <div class="radio"> */}
                        <input name="sort-radio" id="PriceAsc" type="radio" />
                        {/* <label for="PriceAsc" data-name="PriceAsc"> */}
                        <span class="name">كمترين به بيشترين (قيمت)</span>
                        {/* </label> */}
                      </div>
                      <div className="mb-10 cursor-pointer">
                        {/* <div class="radio"> */}
                        <input name="sort-radio" id="PriceDesc" type="radio" />
                        {/* <label for="PriceDesc" data-name="PriceDesc"> */}
                        <span class="name">بيشترين به كمترين (قيمت)</span>
                        {/* </label> */}
                      </div>
                      <div className="mb-10 cursor-pointer">
                        {/* <div class="radio"> */}
                        <input name="sort-radio" id="NewAsc" type="radio" />
                        {/* <label for="NewAsc" data-name="NewAsc"> */}
                        <span class="name">جديد ترين</span>
                        {/* </label> */}
                      </div>
                      <div className="mb-10 flex cursor-pointer">
                        {/* <div class="radio"> */}
                        {/* <label for="NameAsc" data-name="NameAsc"> */}
                        <input type="radio" />
                        <span class="name">از الف تا ي</span>
                        {/* <input name="sort-radio" id="NameAsc" type="radio"  /> */}
                        {/* </label> */}
                      </div>
                      <div className="mb-10 cursor-pointer">
                        {/* <div class="radio"> */}
                        <input name="sort-radio" id="NameDesc" type="radio" />
                        {/* <label for="NameDesc" data-name="NameDesc"> */}
                        <span class="name">از ي تا الف </span>
                        {/* </label> */}
                      </div>
                    </div>
                  )}
                </div>

                <div class="filter-item arrow-none">
                  <span onClick={() => setColor(!Color)}>
                    رنگ
                    <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                  </span>
                  {Color && (
                    <div
                      className=" absolute z-50 border-4 rounded-xl border-black 
                    rtl bg-white p-5 mt-24 w-[400%] h-[80vh] overflow-y-auto"
                      // class="filter-content filter-color"
                      // style={{ display: "none;" }}
                    >
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col w-full hover:border-2 hover:border-black items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="white" name="white" /> */}
                          {/* <label for="white" data-name="white"> */}
                          <span
                            // class="color-filter-visual border-color beyaz"
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            style={{ backgroundColor: "#ffffff" }}
                          ></span>
                          <span class="name">white</span>
                          <span class="count mr-0">132</span>
                          {/* </label> */}
                        </div>
                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <div class="filter-color-checkbox checkbox"> */}
                          {/* <input type="checkbox" id="grey" name="grey" /> */}
                          {/* <label for="grey" data-name="grey"> */}
                          <span
                            // class="color-filter-visual grey"
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            style={{ backgroundColor: "#959595" }}
                          ></span>
                          <span class="name">grey</span>
                          <span class="count mr-0">64</span>
                          {/* </label> */}
                        </div>
                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <div class="filter-color-checkbox checkbox"> */}
                          {/* <input type="checkbox" id="black" name="black" /> */}
                          {/* <label for="black" data-name="black"> */}
                          <span
                            // class="color-filter-visual black"
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            style={{ backgroundColor: "#000000" }}
                          ></span>
                          <span class="name">black</span>
                          <span class="count mr-0">36</span>
                          {/* </label> */}
                        </div>
                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <div class="filter-color-checkbox checkbox"> */}
                          {/* <input type="checkbox" id="brown" name="brown" /> */}
                          {/* <label for="brown" data-name="brown"> */}
                          <span
                            // class="color-filter-visual brown"
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            style={{ backgroundColor: "#814820" }}
                          ></span>
                          <span class="name">brown</span>
                          <span class="count mr-0">30</span>
                          {/* </label> */}
                        </div>
                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <div class="filter-color-checkbox checkbox"> */}
                          {/* <input type="checkbox" id="beige" name="beige" /> */}
                          {/* <label for="beige" data-name="beige"> */}
                          <span
                            // class="color-filter-visual beige"
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            style={{ backgroundColor: "#f4f3d7" }}
                          ></span>
                          <span class="name">beige</span>
                          <span class="count mr-0">17</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="green" name="green" /> */}
                          {/* <label for="green" data-name="green"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual green"
                            style={{ backgroundColor: "#3b7d22" }}
                          ></span>
                          <span class="name">green</span>
                          <span class="count mr-0">15</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input
                            type="checkbox"
                            id="transparent"
                            name="transparent"
                          /> */}
                          {/* <label for="transparent" data-name="transparent"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual border-color beyaz"
                            style={{ backgroundColor: "#ffffff" }}
                          ></span>
                          <span class="name">transparent</span>
                          <span class="count mr-0">14</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input
                            type="checkbox"
                            id="multi-colour"
                            name="multi-colour"
                          /> */}
                          {/* <label for="multi-colour" data-name="multi-colour"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual multi-colour"
                            style={{
                              backgroundImage:
                                "url(//cdn.ikea.com.tr/colors/multicolor.svg)",
                            }}
                          ></span>
                          <span class="name">multi-colour</span>
                          <span class="count mr-0">12</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="yellow" name="yellow" /> */}
                          {/* <label for="yellow" data-name="yellow"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual yellow"
                            style={{ backgroundColor: "#ffdb00" }}
                          ></span>
                          <span class="name">yellow</span>
                          <span class="count mr-0">6</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="red" name="red" /> */}
                          {/* <label for="red" data-name="red"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual red"
                            style={{ backgroundColor: "#ff0000" }}
                          ></span>
                          <span class="name">red</span>
                          <span class="count mr-0">5</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="blue" name="blue" /> */}
                          {/* <label for="blue" data-name="blue"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual blue"
                            style={{ backgroundColor: "#0058a3" }}
                          ></span>
                          <span class="name">blue</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div className="flex flex-col w-full  items-center justify-center h-80 ">
                          {/* <input type="checkbox" id="pink" name="pink" /> */}
                          {/* <label for="pink" data-name="pink"> */}
                          <span
                            className="w-36 h-36 mb-16 cursor-pointer border-[20px] shadow-xl hover:border-8 border-gray-700  rounded-full"
                            // class="color-filter-visual pink"
                            style={{ backgroundColor: "#ffb8c3" }}
                          ></span>
                          <span class="name">pink</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>
                      </div>
                      {/* <div class="filter-color-checkbox checkbox"> */}
                    </div>
                  )}
                </div>

                <div class="filter-item arrow-none">
                  <span onClick={() => setFunction(!Function)}>
                    كاربرد
                    <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                  </span>

                  {Function && (
                    <div
                      className=" absolute z-50 border-4 rounded-xl border-black 
                     rtl bg-white p-5 mt-24 w-[350%] h-[80vh] overflow-y-auto"
                      // class="filter-content function-filter"
                      // style={{ display: "none;" }}
                    >
                      <div class="filter-content-search">
                        {/* <i class="icon-search-new"></i> */}
                        <i>
                          <MdSearch />
                        </i>
                        <a
                          href="javascript:;"
                          class="icon-close-pure search-close d-none"
                        ></a>

                        <input
                          type="text"
                          placeholder="Search"
                          class="filter-content-search-inp"
                        />
                        <div class="no-result d-none">
                          <p>
                            <span>There are no results for </span>
                            <span class="search-key"></span>
                          </p>
                        </div>
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input type="checkbox" id="box" name="box" />
                        {/* <label for="box" data-name="box"> */}
                        <span class="name">box</span>

                        <span class="count mr-0">3</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="tea-infuser"
                          name="tea-infuser"
                        />
                        {/* <label for="tea-infuser" data-name="tea-infuser"> */}
                        <span class="name">tea infuser</span>

                        <span class="count mr-0">3</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="led-bulb-e27"
                          name="led-bulb-e27"
                        />
                        {/* <label for="led-bulb-e27" data-name="led-bulb-e27"> */}
                        <span class="name">LED bulb E27</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input type="checkbox" id="colander" name="colander" />
                        {/* <label for="colander" data-name="colander"> */}
                        <span class="name">colander</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="cutlery-stand"
                          name="cutlery-stand"
                        />
                        {/* <label for="cutlery-stand" data-name="cutlery-stand"> */}
                        <span class="name">cutlery stand</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>

                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="glass-vase"
                          name="glass-vase"
                        />
                        {/* <label for="glass-vase" data-name="glass-vase"> */}
                        <span class="name">glass vase</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="mixing-bowl"
                          name="mixing-bowl"
                        />
                        {/* <label for="mixing-bowl" data-name="mixing-bowl"> */}
                        <span class="name">mixing bowl</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input type="checkbox" id="peeler" name="peeler" />
                        {/* <label for="peeler" data-name="peeler"> */}
                        <span class="name">peeler</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input
                          type="checkbox"
                          id="tealight-holder"
                          name="tealight-holder"
                        />
                        {/* <label for="tealight-holder" data-name="tealight-holder"> */}
                        <span class="name">tealight holder</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>
                      <div>
                        {/* <div class="checkbox"> */}
                        <input type="checkbox" id="turner" name="turner" />
                        {/* <label for="turner" data-name="turner"> */}
                        <span class="name">turner</span>

                        <span class="count mr-0">2</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="1-bowl-insert-sink-with-drainer"
                          name="1-bowl-insert-sink-with-drainer"
                        />
                        {/* <label
                        for="1-bowl-insert-sink-with-drainer"
                        data-name="1-bowl-insert-sink-with-drainer"
                      > */}
                        <span class="name">
                          1 bowl insert sink with drainer
                        </span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="2-seat-sofa"
                          name="2-seat-sofa"
                        />
                        {/* <label for="2-seat-sofa" data-name="2-seat-sofa"> */}
                        <span class="name">2-seat sofa</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="3-seat-sofa"
                          name="3-seat-sofa"
                        />
                        {/* <label for="3-seat-sofa" data-name="3-seat-sofa"> */}
                        <span class="name">3-seat sofa</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="3-seat-sofa-bed"
                          name="3-seat-sofa-bed"
                        />
                        {/* <label for="3-seat-sofa-bed" data-name="3-seat-sofa-bed"> */}
                        <span class="name">3-seat sofa-bed</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="4-way-socket-with-2-usb-ports"
                          name="4-way-socket-with-2-usb-ports"
                        />
                        {/* <label
                        for="4-way-socket-with-2-usb-ports"
                        data-name="4-way-socket-with-2-usb-ports"
                      > */}
                        <span class="name">4-way socket with 2 USB ports</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="led-cabinet-lighting"
                          name="led-cabinet-lighting"
                        />
                        {/* <label
                          for="led-cabinet-lighting"
                          data-name="led-cabinet-lighting"
                        > */}
                        <span class="name">LED cabinet lighting</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="led-driver"
                          name="led-driver"
                        />
                        {/* <label for="led-driver" data-name="led-driver"> */}
                        <span class="name">LED driver</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="led-work-lamp"
                          name="led-work-lamp"
                        />
                        {/* <label for="led-work-lamp" data-name="led-work-lamp"> */}
                        <span class="name">LED work lamp</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="open-shelving-unit"
                          name="open-shelving-unit"
                        />
                        {/* <label
                          for="open-shelving-unit"
                          data-name="open-shelving-unit"
                        > */}
                        <span class="name">Open Shelving Unit</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="usb-a-to-usb-c-cable"
                          name="usb-a-to-usb-c-cable"
                        />
                        {/* <label
                          for="usb-a-to-usb-c-cable"
                          data-name="usb-a-to-usb-c-cable"
                        > */}
                        <span class="name">USB-A to USB-C cable</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wifi-bookshelf-speaker"
                          name="wifi-bookshelf-speaker"
                        />
                        {/* <label
                          for="wifi-bookshelf-speaker"
                          data-name="wifi-bookshelf-speaker"
                        > */}
                        <span class="name">WiFi bookshelf speaker</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="adhesive-hook"
                          name="adhesive-hook"
                        />
                        {/* <label for="adhesive-hook" data-name="adhesive-hook"> */}
                        <span class="name">adhesive hook</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="alarm-clock"
                          name="alarm-clock"
                        />
                        {/* <label for="alarm-clock" data-name="alarm-clock"> */}
                        <span class="name">alarm clock</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="armchair" name="armchair" />
                        {/* <label for="armchair" data-name="armchair"> */}
                        <span class="name">armchair</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="artificial-bouquet"
                          name="artificial-bouquet"
                        />
                        {/* <label
                          for="artificial-bouquet"
                          data-name="artificial-bouquet"
                        > */}
                        <span class="name">artificial bouquet</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="artificial-flower"
                          name="artificial-flower"
                        />
                        {/* <label
                          for="artificial-flower"
                          data-name="artificial-flower"
                        > */}
                        <span class="name">artificial flower</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="artificial-plant"
                          name="artificial-plant"
                        />
                        {/* <label
                          for="artificial-plant"
                          data-name="artificial-plant"
                        > */}
                        <span class="name">artificial plant</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="artificial-potted-plant-with-pot"
                          name="artificial-potted-plant-with-pot"
                        />
                        {/* <label
                          for="artificial-potted-plant-with-pot"
                          data-name="artificial-potted-plant-with-pot"
                        > */}
                        <span class="name">
                          artificial potted plant with pot
                        </span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="background-curtain-1-pair"
                          name="background-curtain-1-pair"
                        />
                        {/* <label
                          for="background-curtain-1-pair"
                          data-name="background-curtain-1-pair"
                        > */}
                        <span class="name">background curtain, 1 pair</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bahtroom-high-cabinet"
                          name="bahtroom-high-cabinet"
                        />
                        {/* <label
                          for="bahtroom-high-cabinet"
                          data-name="bahtroom-high-cabinet"
                        > */}
                        <span class="name">bahtroom high cabinet</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bamboo-plant-pot"
                          name="bamboo-plant-pot"
                        />
                        {/* <label
                          for="bamboo-plant-pot"
                          data-name="bamboo-plant-pot"
                        > */}
                        <span class="name">bamboo plant pot</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bar-chair"
                          name="bar-chair"
                        />
                        {/* <label for="bar-chair" data-name="bar-chair"> */}
                        <span class="name">bar chair</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bar-stool"
                          name="bar-stool"
                        />
                        {/* <label for="bar-stool" data-name="bar-stool"> */}
                        <span class="name">bar stool</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bar-table"
                          name="bar-table"
                        />
                        {/* <label for="bar-table" data-name="bar-table"> */}
                        <span class="name">bar table</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bar-table-and-bar-stools-set"
                          name="bar-table-and-bar-stools-set"
                        />
                        {/* <label
                          for="bar-table-and-bar-stools-set"
                          data-name="bar-table-and-bar-stools-set"
                        > */}
                        <span class="name">bar table and bar stools set</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="base-cab-dr-front-shlvs-2-low-drwrs"
                          name="base-cab-dr-front-shlvs-2-low-drwrs"
                        />
                        {/* <label
                          for="base-cab-dr-front-shlvs-2-low-drwrs"
                          data-name="base-cab-dr-front-shlvs-2-low-drwrs"
                        > */}
                        <span class="name">
                          base cab dr/front/shlvs/2 low drwrs
                        </span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="basket" name="basket" />
                        {/* <label for="basket" data-name="basket"> */}
                        <span class="name">basket</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="bath-mat" name="bath-mat" />
                        {/* <label for="bath-mat" data-name="bath-mat"> */}
                        <span class="name">bath mat</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bath-robe"
                          name="bath-robe"
                        />
                        {/* <label for="bath-robe" data-name="bath-robe"> */}
                        <span class="name">bath robe</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>
                      {/* <div class="checkbox hidden"> */}
                      <div>
                        <input
                          type="checkbox"
                          id="bath-sheet"
                          name="bath-sheet"
                        />
                        {/* <label for="bath-sheet" data-name="bath-sheet"> */}
                        <span class="name">bath sheet</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bathroom-set"
                          name="bathroom-set"
                        />
                        {/* <label for="bathroom-set" data-name="bathroom-set"> */}
                        <span class="name">bathroom set</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bathroom-wall-cabinet"
                          name="bathroom-wall-cabinet"
                        />
                        {/* <label
                          for="bathroom-wall-cabinet"
                          data-name="bathroom-wall-cabinet"
                        > */}
                        <span class="name">bathroom wall cabinet</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bathtub-mat"
                          name="bathtub-mat"
                        />
                        {/* <label for="bathtub-mat" data-name="bathtub-mat"> */}
                        <span class="name">bathtub mat</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="beads" name="beads" />
                        {/* <label for="beads" data-name="beads"> */}
                        <span class="name">beads</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="bed-tray" name="bed-tray" />
                        {/* <label for="bed-tray" data-name="bed-tray"> */}
                        <span class="name">bed tray</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bedside-table"
                          name="bedside-table"
                        />
                        {/* <label for="bedside-table" data-name="bedside-table"> */}
                        <span class="name">bedside table</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bedspread-blanket"
                          name="bedspread-blanket"
                        />
                        {/* <label
                          for="bedspread-blanket"
                          data-name="bedspread-blanket"
                        > */}
                        <span class="name">bedspread/blanket</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input type="checkbox" id="bench" name="bench" />
                        {/* <label for="bench" data-name="bench"> */}
                        <span class="name">bench</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="black-frame"
                          name="black-frame"
                        />
                        {/* <label for="black-frame" data-name="black-frame"> */}
                        <span class="name">black frame</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="blackout-curtain-1-pair"
                          name="blackout-curtain-1-pair"
                        />
                        {/* <label
                          for="blackout-curtain-1-pair"
                          data-name="blackout-curtain-1-pair"
                        > */}
                        <span class="name">blackout curtain, 1 pair</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="block-candle"
                          name="block-candle"
                        />
                        {/* <label for="block-candle" data-name="block-candle"> */}
                        <span class="name">block candle</span>

                        <span class="count mr-0">1</span>
                        {/* </label> */}
                      </div>

                      {/* <div>
                        <input
                          type="checkbox"
                          id="body-puff"
                          name="body-puff"
                        />
                        <label for="body-puff" data-name="body-puff">
                          <span class="name">body puff</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div> */}

                      {/* <div>
                        <input type="checkbox" id="bookcase" name="bookcase" />
                        <label for="bookcase" data-name="bookcase">
                          <span class="name">bookcase</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bookcase-with-glass-door"
                          name="bookcase-with-glass-door"
                        />
                        <label
                          for="bookcase-with-glass-door"
                          data-name="bookcase-with-glass-door"
                        >
                          <span class="name">bookcase with glass door</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bookcase-with-glass-panel-doors"
                          name="bookcase-with-glass-panel-doors"
                        />
                        <label
                          for="bookcase-with-glass-panel-doors"
                          data-name="bookcase-with-glass-panel-doors"
                        >
                          <span class="name">
                            bookcase with glass/panel doors
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="bottle-brush"
                          name="bottle-brush"
                        />
                        <label for="bottle-brush" data-name="bottle-brush">
                          <span class="name">bottle brush</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="bowl" name="bowl" />
                        <label for="bowl" data-name="bowl">
                          <span class="name">bowl</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="box-set" name="box-set" />
                        <label for="box-set" data-name="box-set">
                          <span class="name">box set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div> */}

                      {/* <div>
                        <input
                          type="checkbox"
                          id="box-with-compartments"
                          name="box-with-compartments"
                        />
                        <label
                          for="box-with-compartments"
                          data-name="box-with-compartments"
                        >
                          <span class="name">box with compartments</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="box-with-lid"
                          name="box-with-lid"
                        />
                        <label for="box-with-lid" data-name="box-with-lid">
                          <span class="name">box with lid</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="bunk-bed" name="bunk-bed" />
                        <label for="bunk-bed" data-name="bunk-bed">
                          <span class="name">bunk bed</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cabinet-combination-for-laundry-room-and-bathroom"
                          name="cabinet-combination-for-laundry-room-and-bathroom"
                        />
                        <label
                          for="cabinet-combination-for-laundry-room-and-bathroom"
                          data-name="cabinet-combination-for-laundry-room-and-bathroom"
                        >
                          <span class="name">
                            cabinet combination for laundry room and bathroom
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cabinet-for-washing-machine"
                          name="cabinet-for-washing-machine"
                        />
                        <label
                          for="cabinet-for-washing-machine"
                          data-name="cabinet-for-washing-machine"
                        >
                          <span class="name">cabinet for washing machine</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cabinet-with-door"
                          name="cabinet-with-door"
                        />
                        <label
                          for="cabinet-with-door"
                          data-name="cabinet-with-door"
                        >
                          <span class="name">cabinet with door</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cabinet-with-glass-doors"
                          name="cabinet-with-glass-doors"
                        />
                        <label
                          for="cabinet-with-glass-doors"
                          data-name="cabinet-with-glass-doors"
                        >
                          <span class="name">cabinet with glass doors</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="candle-dish"
                          name="candle-dish"
                        />
                        <label for="candle-dish" data-name="candle-dish">
                          <span class="name">candle dish</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="candlestick"
                          name="candlestick"
                        />
                        <label for="candlestick" data-name="candlestick">
                          <span class="name">candlestick</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="carafe" name="carafe" />
                        <label for="carafe" data-name="carafe">
                          <span class="name">carafe</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div> */}

                      {/* <div>
                        <input
                          type="checkbox"
                          id="cat-dog-food-bowl"
                          name="cat-dog-food-bowl"
                        />
                        <label
                          for="cat-dog-food-bowl"
                          data-name="cat-dog-food-bowl"
                        >
                          <span class="name">cat/dog food bowl</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ceiling-lamp-cord-set"
                          name="ceiling-lamp-cord-set"
                        />
                        <label
                          for="ceiling-lamp-cord-set"
                          data-name="ceiling-lamp-cord-set"
                        >
                          <span class="name">ceiling lamp cord set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ceramic-sharpener"
                          name="ceramic-sharpener"
                        />
                        <label
                          for="ceramic-sharpener"
                          data-name="ceramic-sharpener"
                        >
                          <span class="name">ceramic sharpener</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chair-pad"
                          name="chair-pad"
                        />
                        <label for="chair-pad" data-name="chair-pad">
                          <span class="name">chair pad</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="changing-table"
                          name="changing-table"
                        />
                        <label for="changing-table" data-name="changing-table">
                          <span class="name">changing table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chest-of-4-drawers"
                          name="chest-of-4-drawers"
                        />
                        <label
                          for="chest-of-4-drawers"
                          data-name="chest-of-4-drawers"
                        >
                          <span class="name">chest of 4 drawers</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chest-of-5-drawers"
                          name="chest-of-5-drawers"
                        />
                        <label
                          for="chest-of-5-drawers"
                          data-name="chest-of-5-drawers"
                        >
                          <span class="name">chest of 5 drawers</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chest-of-8-drawers"
                          name="chest-of-8-drawers"
                        />
                        <label
                          for="chest-of-8-drawers"
                          data-name="chest-of-8-drawers"
                        >
                          <span class="name">chest of 8 drawers</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cheval-glass"
                          name="cheval-glass"
                        />
                        <label for="cheval-glass" data-name="cheval-glass">
                          <span class="name">cheval glass</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-pendant-lamp"
                          name="children-pendant-lamp"
                        />
                        <label
                          for="children-pendant-lamp"
                          data-name="children-pendant-lamp"
                        >
                          <span class="name">children pendant lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-table-lamp"
                          name="children-table-lamp"
                        />
                        <label
                          for="children-table-lamp"
                          data-name="children-table-lamp"
                        >
                          <span class="name">children table lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-s-chair"
                          name="children-s-chair"
                        />
                        <label
                          for="children-s-chair"
                          data-name="children-s-chair"
                        >
                          <span class="name">children's chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-s-coat-hanger"
                          name="children-s-coat-hanger"
                        />
                        <label
                          for="children-s-coat-hanger"
                          data-name="children-s-coat-hanger"
                        >
                          <span class="name">children's coat-hanger</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-s-table"
                          name="children-s-table"
                        />
                        <label
                          for="children-s-table"
                          data-name="children-s-table"
                        >
                          <span class="name">children's table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-s-table-and-chairs"
                          name="children-s-table-and-chairs"
                        />
                        <label
                          for="children-s-table-and-chairs"
                          data-name="children-s-table-and-chairs"
                        >
                          <span class="name">children's table and chairs</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="children-s-tent"
                          name="children-s-tent"
                        />
                        <label
                          for="children-s-tent"
                          data-name="children-s-tent"
                        >
                          <span class="name">children's tent</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chopping-board"
                          name="chopping-board"
                        />
                        <label for="chopping-board" data-name="chopping-board">
                          <span class="name">chopping board</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="chopping-knife"
                          name="chopping-knife"
                        />
                        <label for="chopping-knife" data-name="chopping-knife">
                          <span class="name">chopping knife</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cleaning-cloth"
                          name="cleaning-cloth"
                        />
                        <label for="cleaning-cloth" data-name="cleaning-cloth">
                          <span class="name">cleaning cloth</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cleaning-gloves"
                          name="cleaning-gloves"
                        />
                        <label
                          for="cleaning-gloves"
                          data-name="cleaning-gloves"
                        >
                          <span class="name">cleaning gloves</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="closed-storage-box"
                          name="closed-storage-box"
                        />
                        <label
                          for="closed-storage-box"
                          data-name="closed-storage-box"
                        >
                          <span class="name">closed storage box</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="clothes-hanger"
                          name="clothes-hanger"
                        />
                        <label for="clothes-hanger" data-name="clothes-hanger">
                          <span class="name">clothes hanger</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="clothes-peg"
                          name="clothes-peg"
                        />
                        <label for="clothes-peg" data-name="clothes-peg">
                          <span class="name">clothes peg</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="coaster" name="coaster" />
                        <label for="coaster" data-name="coaster">
                          <span class="name">coaster</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cocktail-set"
                          name="cocktail-set"
                        />
                        <label for="cocktail-set" data-name="cocktail-set">
                          <span class="name">cocktail set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="coffee-table"
                          name="coffee-table"
                        />
                        <label for="coffee-table" data-name="coffee-table">
                          <span class="name">coffee table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="collage-frame"
                          name="collage-frame"
                        />
                        <label for="collage-frame" data-name="collage-frame">
                          <span class="name">collage frame</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="console" name="console" />
                        <label for="console" data-name="console">
                          <span class="name">console</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="container-with-suction-cup"
                          name="container-with-suction-cup"
                        />
                        <label
                          for="container-with-suction-cup"
                          data-name="container-with-suction-cup"
                        >
                          <span class="name">container with suction cup</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="corner-desk-right"
                          name="corner-desk-right"
                        />
                        <label
                          for="corner-desk-right"
                          data-name="corner-desk-right"
                        >
                          <span class="name">corner desk right</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="cot" name="cot" />
                        <label for="cot" data-name="cot">
                          <span class="name">cot</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="crepe-pancake-pan"
                          name="crepe-pancake-pan"
                        />
                        <label
                          for="crepe-pancake-pan"
                          data-name="crepe-pancake-pan"
                        >
                          <span class="name">crepe/pancake pan</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="curtain-rod-set"
                          name="curtain-rod-set"
                        />
                        <label
                          for="curtain-rod-set"
                          data-name="curtain-rod-set"
                        >
                          <span class="name">curtain rod set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="cutlery-for-6-people"
                          name="cutlery-for-6-people"
                        />
                        <label
                          for="cutlery-for-6-people"
                          data-name="cutlery-for-6-people"
                        >
                          <span class="name">cutlery for 6 people</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="day-bed" name="day-bed" />
                        <label for="day-bed" data-name="day-bed">
                          <span class="name">day-bed</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="decoration"
                          name="decoration"
                        />
                        <label for="decoration" data-name="decoration">
                          <span class="name">decoration</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="deep-plate"
                          name="deep-plate"
                        />
                        <label for="deep-plate" data-name="deep-plate">
                          <span class="name">deep plate</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="desk" name="desk" />
                        <label for="desk" data-name="desk">
                          <span class="name">desk</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dining-chair-set"
                          name="dining-chair-set"
                        />
                        <label
                          for="dining-chair-set"
                          data-name="dining-chair-set"
                        >
                          <span class="name">dining chair set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dining-set"
                          name="dining-set"
                        />
                        <label for="dining-set" data-name="dining-set">
                          <span class="name">dining set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dining-table"
                          name="dining-table"
                        />
                        <label for="dining-table" data-name="dining-table">
                          <span class="name">dining table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dish-drainer"
                          name="dish-drainer"
                        />
                        <label for="dish-drainer" data-name="dish-drainer">
                          <span class="name">dish drainer</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dish-drying-mat"
                          name="dish-drying-mat"
                        />
                        <label
                          for="dish-drying-mat"
                          data-name="dish-drying-mat"
                        >
                          <span class="name">dish drying mat</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dish-washing-brush"
                          name="dish-washing-brush"
                        />
                        <label
                          for="dish-washing-brush"
                          data-name="dish-washing-brush"
                        >
                          <span class="name">dish-washing brush</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="double-bed"
                          name="double-bed"
                        />
                        <label for="double-bed" data-name="double-bed">
                          <span class="name">double bed</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="double-bed-base"
                          name="double-bed-base"
                        />
                        <label
                          for="double-bed-base"
                          data-name="double-bed-base"
                        >
                          <span class="name">double bed base</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="double-duvet"
                          name="double-duvet"
                        />
                        <label for="double-duvet" data-name="double-duvet">
                          <span class="name">double duvet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="double-quilt-cover-and-2-pillowcases"
                          name="double-quilt-cover-and-2-pillowcases"
                        />
                        <label
                          for="double-quilt-cover-and-2-pillowcases"
                          data-name="double-quilt-cover-and-2-pillowcases"
                        >
                          <span class="name">
                            double quilt cover and 2 pillowcases
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="double-bowl-insert-sink"
                          name="double-bowl-insert-sink"
                        />
                        <label
                          for="double-bowl-insert-sink"
                          data-name="double-bowl-insert-sink"
                        >
                          <span class="name">double-bowl insert sink</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dough-cutter"
                          name="dough-cutter"
                        />
                        <label for="dough-cutter" data-name="dough-cutter">
                          <span class="name">dough cutter</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="drawer-mat"
                          name="drawer-mat"
                        />
                        <label for="drawer-mat" data-name="drawer-mat">
                          <span class="name">drawer mat</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="drawer-organizer"
                          name="drawer-organizer"
                        />
                        <label
                          for="drawer-organizer"
                          data-name="drawer-organizer"
                        >
                          <span class="name">drawer organizer</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="drawing-case"
                          name="drawing-case"
                        />
                        <label for="drawing-case" data-name="drawing-case">
                          <span class="name">drawing case</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="dressing-table"
                          name="dressing-table"
                        />
                        <label for="dressing-table" data-name="dressing-table">
                          <span class="name">dressing table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ergonomic-pillow"
                          name="ergonomic-pillow"
                        />
                        <label
                          for="ergonomic-pillow"
                          data-name="ergonomic-pillow"
                        >
                          <span class="name">ergonomic pillow</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="extendable-dining-table"
                          name="extendable-dining-table"
                        />
                        <label
                          for="extendable-dining-table"
                          data-name="extendable-dining-table"
                        >
                          <span class="name">extendable dining table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="extension-cord"
                          name="extension-cord"
                        />
                        <label for="extension-cord" data-name="extension-cord">
                          <span class="name">extension cord</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="face-towel"
                          name="face-towel"
                        />
                        <label for="face-towel" data-name="face-towel">
                          <span class="name">face towel</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="felt-tip-pen"
                          name="felt-tip-pen"
                        />
                        <label for="felt-tip-pen" data-name="felt-tip-pen">
                          <span class="name">felt-tip pen</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="fitted-sheet"
                          name="fitted-sheet"
                        />
                        <label for="fitted-sheet" data-name="fitted-sheet">
                          <span class="name">fitted sheet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="floating-candle"
                          name="floating-candle"
                        />
                        <label
                          for="floating-candle"
                          data-name="floating-candle"
                        >
                          <span class="name">floating candle</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="floor-lamp"
                          name="floor-lamp"
                        />
                        <label for="floor-lamp" data-name="floor-lamp">
                          <span class="name">floor lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="floor-lamp-with-wifi-speaker"
                          name="floor-lamp-with-wifi-speaker"
                        />
                        <label
                          for="floor-lamp-with-wifi-speaker"
                          data-name="floor-lamp-with-wifi-speaker"
                        >
                          <span class="name">floor lamp with WiFi speaker</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="floor-protector"
                          name="floor-protector"
                        />
                        <label
                          for="floor-protector"
                          data-name="floor-protector"
                        >
                          <span class="name">floor protector</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="floor-squeegee"
                          name="floor-squeegee"
                        />
                        <label for="floor-squeegee" data-name="floor-squeegee">
                          <span class="name">floor squeegee</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="flour-sifter"
                          name="flour-sifter"
                        />
                        <label for="flour-sifter" data-name="flour-sifter">
                          <span class="name">flour sifter</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="folding-kitchen-table"
                          name="folding-kitchen-table"
                        />
                        <label
                          for="folding-kitchen-table"
                          data-name="folding-kitchen-table"
                        >
                          <span class="name">folding kitchen table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="food-storage-container"
                          name="food-storage-container"
                        />
                        <label
                          for="food-storage-container"
                          data-name="food-storage-container"
                        >
                          <span class="name">food storage container</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="food-vacuum-flask"
                          name="food-vacuum-flask"
                        />
                        <label
                          for="food-vacuum-flask"
                          data-name="food-vacuum-flask"
                        >
                          <span class="name">food vacuum flask</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="foot-towel"
                          name="foot-towel"
                        />
                        <label for="foot-towel" data-name="foot-towel">
                          <span class="name">foot towel</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="french-press"
                          name="french-press"
                        />
                        <label for="french-press" data-name="french-press">
                          <span class="name">french press</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="frying-pan"
                          name="frying-pan"
                        />
                        <label for="frying-pan" data-name="frying-pan">
                          <span class="name">frying pan</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="functional-clock"
                          name="functional-clock"
                        />
                        <label
                          for="functional-clock"
                          data-name="functional-clock"
                        >
                          <span class="name">functional clock</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="funnel" name="funnel" />
                        <label for="funnel" data-name="funnel">
                          <span class="name">funnel</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="gaming-chair"
                          name="gaming-chair"
                        />
                        <label for="gaming-chair" data-name="gaming-chair">
                          <span class="name">gaming chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="gaming-desk"
                          name="gaming-desk"
                        />
                        <label for="gaming-desk" data-name="gaming-desk">
                          <span class="name">gaming desk</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="gaming-desk-and-chair"
                          name="gaming-desk-and-chair"
                        />
                        <label
                          for="gaming-desk-and-chair"
                          data-name="gaming-desk-and-chair"
                        >
                          <span class="name">gaming desk and chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="garlic-press"
                          name="garlic-press"
                        />
                        <label for="garlic-press" data-name="garlic-press">
                          <span class="name">garlic press</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="glass" name="glass" />
                        <label for="glass" data-name="glass">
                          <span class="name">glass</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="glass-containet-set"
                          name="glass-containet-set"
                        />
                        <label
                          for="glass-containet-set"
                          data-name="glass-containet-set"
                        >
                          <span class="name">glass containet set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="glass-door-cabinet"
                          name="glass-door-cabinet"
                        />
                        <label
                          for="glass-door-cabinet"
                          data-name="glass-door-cabinet"
                        >
                          <span class="name">glass-door cabinet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="grater-with-handle"
                          name="grater-with-handle"
                        />
                        <label
                          for="grater-with-handle"
                          data-name="grater-with-handle"
                        >
                          <span class="name">grater with handle</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="handle" name="handle" />
                        <label for="handle" data-name="handle">
                          <span class="name">handle</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="handshower"
                          name="handshower"
                        />
                        <label for="handshower" data-name="handshower">
                          <span class="name">handshower</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="handwoven-door-mat"
                          name="handwoven-door-mat"
                        />
                        <label
                          for="handwoven-door-mat"
                          data-name="handwoven-door-mat"
                        >
                          <span class="name">handwoven door mat</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="hanger-for-door"
                          name="hanger-for-door"
                        />
                        <label
                          for="hanger-for-door"
                          data-name="hanger-for-door"
                        >
                          <span class="name">hanger for door</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="height-adjustable-desk"
                          name="height-adjustable-desk"
                        />
                        <label
                          for="height-adjustable-desk"
                          data-name="height-adjustable-desk"
                        >
                          <span class="name">height adjustable desk</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="height-adjustable-gaming-desk"
                          name="height-adjustable-gaming-desk"
                        />
                        <label
                          for="height-adjustable-gaming-desk"
                          data-name="height-adjustable-gaming-desk"
                        >
                          <span class="name">
                            height adjustable gaming desk
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="high-pillow"
                          name="high-pillow"
                        />
                        <label for="high-pillow" data-name="high-pillow">
                          <span class="name">high pillow</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="hook" name="hook" />
                        <label for="hook" data-name="hook">
                          <span class="name">hook</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="hook-with-suction-cup"
                          name="hook-with-suction-cup"
                        />
                        <label
                          for="hook-with-suction-cup"
                          data-name="hook-with-suction-cup"
                        >
                          <span class="name">hook with suction cup</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ice-cube-tray"
                          name="ice-cube-tray"
                        />
                        <label for="ice-cube-tray" data-name="ice-cube-tray">
                          <span class="name">ice cube tray</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="interior-organiser"
                          name="interior-organiser"
                        />
                        <label
                          for="interior-organiser"
                          data-name="interior-organiser"
                        >
                          <span class="name">interior organiser</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ironing-board"
                          name="ironing-board"
                        />
                        <label for="ironing-board" data-name="ironing-board">
                          <span class="name">ironing board</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="jar-with-tap"
                          name="jar-with-tap"
                        />
                        <label for="jar-with-tap" data-name="jar-with-tap">
                          <span class="name">jar with tap</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="jug" name="jug" />
                        <label for="jug" data-name="jug">
                          <span class="name">jug</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kid-s-desk"
                          name="kid-s-desk"
                        />
                        <label for="kid-s-desk" data-name="kid-s-desk">
                          <span class="name">kid's desk</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="kids-rug" name="kids-rug" />
                        <label for="kids-rug" data-name="kids-rug">
                          <span class="name">kids rug</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kids-bedding-set"
                          name="kids-bedding-set"
                        />
                        <label
                          for="kids-bedding-set"
                          data-name="kids-bedding-set"
                        >
                          <span class="name">kids' bedding set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kitchen-chair-set"
                          name="kitchen-chair-set"
                        />
                        <label
                          for="kitchen-chair-set"
                          data-name="kitchen-chair-set"
                        >
                          <span class="name">kitchen chair set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kitchen-island"
                          name="kitchen-island"
                        />
                        <label for="kitchen-island" data-name="kitchen-island">
                          <span class="name">kitchen island</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kitchen-table"
                          name="kitchen-table"
                        />
                        <label for="kitchen-table" data-name="kitchen-table">
                          <span class="name">kitchen table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="kitchen-table-set"
                          name="kitchen-table-set"
                        />
                        <label
                          for="kitchen-table-set"
                          data-name="kitchen-table-set"
                        >
                          <span class="name">kitchen table set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="knife-set"
                          name="knife-set"
                        />
                        <label for="knife-set" data-name="knife-set">
                          <span class="name">knife set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="knob" name="knob" />
                        <label for="knob" data-name="knob">
                          <span class="name">knob</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lace-pillow"
                          name="lace-pillow"
                        />
                        <label for="lace-pillow" data-name="lace-pillow">
                          <span class="name">lace pillow</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lace-pillow-cover"
                          name="lace-pillow-cover"
                        />
                        <label
                          for="lace-pillow-cover"
                          data-name="lace-pillow-cover"
                        >
                          <span class="name">lace pillow cover</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lampshade"
                          name="lampshade"
                        />
                        <label for="lampshade" data-name="lampshade">
                          <span class="name">lampshade</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="lantern" name="lantern" />
                        <label for="lantern" data-name="lantern">
                          <span class="name">lantern</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="laptop-stand"
                          name="laptop-stand"
                        />
                        <label for="laptop-stand" data-name="laptop-stand">
                          <span class="name">laptop stand</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="laundry-bag"
                          name="laundry-bag"
                        />
                        <label for="laundry-bag" data-name="laundry-bag">
                          <span class="name">laundry bag</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="laundry-cabinet"
                          name="laundry-cabinet"
                        />
                        <label
                          for="laundry-cabinet"
                          data-name="laundry-cabinet"
                        >
                          <span class="name">laundry cabinet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="laundry-drying-rack"
                          name="laundry-drying-rack"
                        />
                        <label
                          for="laundry-drying-rack"
                          data-name="laundry-drying-rack"
                        >
                          <span class="name">laundry drying rack</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lazy-susan"
                          name="lazy-susan"
                        />
                        <label for="lazy-susan" data-name="lazy-susan">
                          <span class="name">lazy susan</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="leg" name="leg" />
                        <label for="leg" data-name="leg">
                          <span class="name">leg</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lemon-squeezer"
                          name="lemon-squeezer"
                        />
                        <label for="lemon-squeezer" data-name="lemon-squeezer">
                          <span class="name">lemon squeezer</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lighting-chain"
                          name="lighting-chain"
                        />
                        <label for="lighting-chain" data-name="lighting-chain">
                          <span class="name">lighting chain</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lint-roller"
                          name="lint-roller"
                        />
                        <label for="lint-roller" data-name="lint-roller">
                          <span class="name">lint roller</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="lunch-bag"
                          name="lunch-bag"
                        />
                        <label for="lunch-bag" data-name="lunch-bag">
                          <span class="name">lunch bag</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="magnetic-knife-rack"
                          name="magnetic-knife-rack"
                        />
                        <label
                          for="magnetic-knife-rack"
                          data-name="magnetic-knife-rack"
                        >
                          <span class="name">magnetic knife rack</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="makeup-mirror"
                          name="makeup-mirror"
                        />
                        <label for="makeup-mirror" data-name="makeup-mirror">
                          <span class="name">makeup mirror</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="mandoline"
                          name="mandoline"
                        />
                        <label for="mandoline" data-name="mandoline">
                          <span class="name">mandoline</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="mat" name="mat" />
                        <label for="mat" data-name="mat">
                          <span class="name">mat</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="mattress-for-cot"
                          name="mattress-for-cot"
                        />
                        <label
                          for="mattress-for-cot"
                          data-name="mattress-for-cot"
                        >
                          <span class="name">mattress for cot</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="monitor-stand"
                          name="monitor-stand"
                        />
                        <label for="monitor-stand" data-name="monitor-stand">
                          <span class="name">monitor stand</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="mug" name="mug" />
                        <label for="mug" data-name="mug">
                          <span class="name">mug</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="napkin-holder"
                          name="napkin-holder"
                        />
                        <label for="napkin-holder" data-name="napkin-holder">
                          <span class="name">napkin holder</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="office-chair"
                          name="office-chair"
                        />
                        <label for="office-chair" data-name="office-chair">
                          <span class="name">office chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="offset-spatula"
                          name="offset-spatula"
                        />
                        <label for="offset-spatula" data-name="offset-spatula">
                          <span class="name">offset spatula</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="oven-dish"
                          name="oven-dish"
                        />
                        <label for="oven-dish" data-name="oven-dish">
                          <span class="name">oven dish</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="oven-glove"
                          name="oven-glove"
                        />
                        <label for="oven-glove" data-name="oven-glove">
                          <span class="name">oven glove</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="oven-serving-dish"
                          name="oven-serving-dish"
                        />
                        <label
                          for="oven-serving-dish"
                          data-name="oven-serving-dish"
                        >
                          <span class="name">oven/serving dish</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="paper-napkin"
                          name="paper-napkin"
                        />
                        <label for="paper-napkin" data-name="paper-napkin">
                          <span class="name">paper napkin</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="pegboard" name="pegboard" />
                        <label for="pegboard" data-name="pegboard">
                          <span class="name">pegboard</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="pendant-lamp"
                          name="pendant-lamp"
                        />
                        <label for="pendant-lamp" data-name="pendant-lamp">
                          <span class="name">pendant lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="pendant-lamp-shade"
                          name="pendant-lamp-shade"
                        />
                        <label
                          for="pendant-lamp-shade"
                          data-name="pendant-lamp-shade"
                        >
                          <span class="name">pendant lamp shade</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="phone-tablet-stand"
                          name="phone-tablet-stand"
                        />
                        <label
                          for="phone-tablet-stand"
                          data-name="phone-tablet-stand"
                        >
                          <span class="name">phone/tablet stand</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="picture" name="picture" />
                        <label for="picture" data-name="picture">
                          <span class="name">picture</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="picture-frame-with-wifi-speaker"
                          name="picture-frame-with-wifi-speaker"
                        />
                        <label
                          for="picture-frame-with-wifi-speaker"
                          data-name="picture-frame-with-wifi-speaker"
                        >
                          <span class="name">
                            picture frame with WiFi speaker
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="picture-ledge"
                          name="picture-ledge"
                        />
                        <label for="picture-ledge" data-name="picture-ledge">
                          <span class="name">picture ledge</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="picture-with-frame-set"
                          name="picture-with-frame-set"
                        />
                        <label
                          for="picture-with-frame-set"
                          data-name="picture-with-frame-set"
                        >
                          <span class="name">picture with frame set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="place-mat"
                          name="place-mat"
                        />
                        <label for="place-mat" data-name="place-mat">
                          <span class="name">place mat</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="plastic-chair"
                          name="plastic-chair"
                        />
                        <label for="plastic-chair" data-name="plastic-chair">
                          <span class="name">plastic chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="plastic-food-container-set"
                          name="plastic-food-container-set"
                        />
                        <label
                          for="plastic-food-container-set"
                          data-name="plastic-food-container-set"
                        >
                          <span class="name">plastic food container set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="plate-set"
                          name="plate-set"
                        />
                        <label for="plate-set" data-name="plate-set">
                          <span class="name">plate set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="platter" name="platter" />
                        <label for="platter" data-name="platter">
                          <span class="name">platter</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="play-kitchen"
                          name="play-kitchen"
                        />
                        <label for="play-kitchen" data-name="play-kitchen">
                          <span class="name">play kitchen</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="pot-lid" name="pot-lid" />
                        <label for="pot-lid" data-name="pot-lid">
                          <span class="name">pot lid</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="pot-lid-organiser"
                          name="pot-lid-organiser"
                        />
                        <label
                          for="pot-lid-organiser"
                          data-name="pot-lid-organiser"
                        >
                          <span class="name">pot lid organiser</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="pot-stand"
                          name="pot-stand"
                        />
                        <label for="pot-stand" data-name="pot-stand">
                          <span class="name">pot stand</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="potpourri-in-a-bag"
                          name="potpourri-in-a-bag"
                        />
                        <label
                          for="potpourri-in-a-bag"
                          data-name="potpourri-in-a-bag"
                        >
                          <span class="name">potpourri in a bag</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="pouffe-with-storage"
                          name="pouffe-with-storage"
                        />
                        <label
                          for="pouffe-with-storage"
                          data-name="pouffe-with-storage"
                        >
                          <span class="name">pouffe with storage</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="quilt-cover-pillowcase-for-cot"
                          name="quilt-cover-pillowcase-for-cot"
                        />
                        <label
                          for="quilt-cover-pillowcase-for-cot"
                          data-name="quilt-cover-pillowcase-for-cot"
                        >
                          <span class="name">
                            quilt cover/pillowcase for cot
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="quilt-for-cot"
                          name="quilt-for-cot"
                        />
                        <label for="quilt-for-cot" data-name="quilt-for-cot">
                          <span class="name">quilt for cot</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="rack-with-hooks"
                          name="rack-with-hooks"
                        />
                        <label
                          for="rack-with-hooks"
                          data-name="rack-with-hooks"
                        >
                          <span class="name">rack with hooks</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="rail" name="rail" />
                        <label for="rail" data-name="rail">
                          <span class="name">rail</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="rattan-plant-pot"
                          name="rattan-plant-pot"
                        />
                        <label
                          for="rattan-plant-pot"
                          data-name="rattan-plant-pot"
                        >
                          <span class="name">rattan plant pot</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="rattan-sofa"
                          name="rattan-sofa"
                        />
                        <label for="rattan-sofa" data-name="rattan-sofa">
                          <span class="name">rattan sofa</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="remote-control"
                          name="remote-control"
                        />
                        <label for="remote-control" data-name="remote-control">
                          <span class="name">remote control</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="remote-control-kit"
                          name="remote-control-kit"
                        />
                        <label
                          for="remote-control-kit"
                          data-name="remote-control-kit"
                        >
                          <span class="name">remote control kit</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="resealable-bag"
                          name="resealable-bag"
                        />
                        <label for="resealable-bag" data-name="resealable-bag">
                          <span class="name">resealable bag</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="reversible-bed"
                          name="reversible-bed"
                        />
                        <label for="reversible-bed" data-name="reversible-bed">
                          <span class="name">reversible bed</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="rocking-chair"
                          name="rocking-chair"
                        />
                        <label for="rocking-chair" data-name="rocking-chair">
                          <span class="name">rocking-chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="roller-blind"
                          name="roller-blind"
                        />
                        <label for="roller-blind" data-name="roller-blind">
                          <span class="name">roller blind</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="round-dining-table"
                          name="round-dining-table"
                        />
                        <label
                          for="round-dining-table"
                          data-name="round-dining-table"
                        >
                          <span class="name">round dining table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="round-mirror"
                          name="round-mirror"
                        />
                        <label for="round-mirror" data-name="round-mirror">
                          <span class="name">round mirror</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="round-tray"
                          name="round-tray"
                        />
                        <label for="round-tray" data-name="round-tray">
                          <span class="name">round tray</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="rug" name="rug" />
                        <label for="rug" data-name="rug">
                          <span class="name">rug</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="rug-underlay-with-anti-slip"
                          name="rug-underlay-with-anti-slip"
                        />
                        <label
                          for="rug-underlay-with-anti-slip"
                          data-name="rug-underlay-with-anti-slip"
                        >
                          <span class="name">rug underlay with anti-slip</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="salad-spinner"
                          name="salad-spinner"
                        />
                        <label for="salad-spinner" data-name="salad-spinner">
                          <span class="name">salad spinner</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="scented-candle-in-cup"
                          name="scented-candle-in-cup"
                        />
                        <label
                          for="scented-candle-in-cup"
                          data-name="scented-candle-in-cup"
                        >
                          <span class="name">scented candle in cup</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="scented-tealight"
                          name="scented-tealight"
                        />
                        <label
                          for="scented-tealight"
                          data-name="scented-tealight"
                        >
                          <span class="name">scented tealight</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="sealing-clip"
                          name="sealing-clip"
                        />
                        <label for="sealing-clip" data-name="sealing-clip">
                          <span class="name">sealing clip</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="serving-bowl"
                          name="serving-bowl"
                        />
                        <label for="serving-bowl" data-name="serving-bowl">
                          <span class="name">serving bowl</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="set-of-kitchen-utensils"
                          name="set-of-kitchen-utensils"
                        />
                        <label
                          for="set-of-kitchen-utensils"
                          data-name="set-of-kitchen-utensils"
                        >
                          <span class="name">set of kitchen utensils</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="set-of-serveware"
                          name="set-of-serveware"
                        />
                        <label
                          for="set-of-serveware"
                          data-name="set-of-serveware"
                        >
                          <span class="name">set of serveware</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shoe-cabinet-storage"
                          name="shoe-cabinet-storage"
                        />
                        <label
                          for="shoe-cabinet-storage"
                          data-name="shoe-cabinet-storage"
                        >
                          <span class="name">shoe cabinet/storage</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shoe-organiser"
                          name="shoe-organiser"
                        />
                        <label for="shoe-organiser" data-name="shoe-organiser">
                          <span class="name">shoe organiser</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="shoehorn" name="shoehorn" />
                        <label for="shoehorn" data-name="shoehorn">
                          <span class="name">shoehorn</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shopping-trolley"
                          name="shopping-trolley"
                        />
                        <label
                          for="shopping-trolley"
                          data-name="shopping-trolley"
                        >
                          <span class="name">shopping trolley</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shoulder-shaper-for-hanger"
                          name="shoulder-shaper-for-hanger"
                        />
                        <label
                          for="shoulder-shaper-for-hanger"
                          data-name="shoulder-shaper-for-hanger"
                        >
                          <span class="name">shoulder shaper for hanger</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shower-basket"
                          name="shower-basket"
                        />
                        <label for="shower-basket" data-name="shower-basket">
                          <span class="name">shower basket</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shower-curtain"
                          name="shower-curtain"
                        />
                        <label for="shower-curtain" data-name="shower-curtain">
                          <span class="name">shower curtain</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="shower-hose"
                          name="shower-hose"
                        />
                        <label for="shower-hose" data-name="shower-hose">
                          <span class="name">shower hose</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="side-table-on-castors"
                          name="side-table-on-castors"
                        />
                        <label
                          for="side-table-on-castors"
                          data-name="side-table-on-castors"
                        >
                          <span class="name">side table on castors</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="single-bed-mattress"
                          name="single-bed-mattress"
                        />
                        <label
                          for="single-bed-mattress"
                          data-name="single-bed-mattress"
                        >
                          <span class="name">single bed mattress</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="single-duvet"
                          name="single-duvet"
                        />
                        <label for="single-duvet" data-name="single-duvet">
                          <span class="name">single duvet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="single-duvet-cover-sets"
                          name="single-duvet-cover-sets"
                        />
                        <label
                          for="single-duvet-cover-sets"
                          data-name="single-duvet-cover-sets"
                        >
                          <span class="name">single duvet cover sets</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="single-bowl-insert-sink"
                          name="single-bowl-insert-sink"
                        />
                        <label
                          for="single-bowl-insert-sink"
                          data-name="single-bowl-insert-sink"
                        >
                          <span class="name">single-bowl insert sink</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="sink-tap" name="sink-tap" />
                        <label for="sink-tap" data-name="sink-tap">
                          <span class="name">sink tap</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="sliding-door-cabinet"
                          name="sliding-door-cabinet"
                        />
                        <label
                          for="sliding-door-cabinet"
                          data-name="sliding-door-cabinet"
                        >
                          <span class="name">sliding door-cabinet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="soap-dispenser"
                          name="soap-dispenser"
                        />
                        <label for="soap-dispenser" data-name="soap-dispenser">
                          <span class="name">soap dispenser</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="soft-toy" name="soft-toy" />
                        <label for="soft-toy" data-name="soft-toy">
                          <span class="name">soft toy</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="spice-jar"
                          name="spice-jar"
                        />
                        <label for="spice-jar" data-name="spice-jar">
                          <span class="name">spice jar</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="spice-rack"
                          name="spice-rack"
                        />
                        <label for="spice-rack" data-name="spice-rack">
                          <span class="name">spice rack</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="splatter-screen"
                          name="splatter-screen"
                        />
                        <label
                          for="splatter-screen"
                          data-name="splatter-screen"
                        >
                          <span class="name">splatter screen</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="sponge" name="sponge" />
                        <label for="sponge" data-name="sponge">
                          <span class="name">sponge</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="spoon-set-for-children"
                          name="spoon-set-for-children"
                        />
                        <label
                          for="spoon-set-for-children"
                          data-name="spoon-set-for-children"
                        >
                          <span class="name">spoon set for children</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="spotlight"
                          name="spotlight"
                        />
                        <label for="spotlight" data-name="spotlight">
                          <span class="name">spotlight</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="spray-bottle"
                          name="spray-bottle"
                        />
                        <label for="spray-bottle" data-name="spray-bottle">
                          <span class="name">spray bottle</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="springform-pan"
                          name="springform-pan"
                        />
                        <label for="springform-pan" data-name="springform-pan">
                          <span class="name">springform pan</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="squeegee" name="squeegee" />
                        <label for="squeegee" data-name="squeegee">
                          <span class="name">squeegee</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="standing-mirror"
                          name="standing-mirror"
                        />
                        <label
                          for="standing-mirror"
                          data-name="standing-mirror"
                        >
                          <span class="name">standing mirror</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="steak-knife-set"
                          name="steak-knife-set"
                        />
                        <label
                          for="steak-knife-set"
                          data-name="steak-knife-set"
                        >
                          <span class="name">steak knife set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="step-stool"
                          name="step-stool"
                        />
                        <label for="step-stool" data-name="step-stool">
                          <span class="name">step stool</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="stool" name="stool" />
                        <label for="stool" data-name="stool">
                          <span class="name">stool</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="stool-side-table"
                          name="stool-side-table"
                        />
                        <label
                          for="stool-side-table"
                          data-name="stool-side-table"
                        >
                          <span class="name">stool/side table</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="storage-combination"
                          name="storage-combination"
                        />
                        <label
                          for="storage-combination"
                          data-name="storage-combination"
                        >
                          <span class="name">storage combination</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="storage-unit"
                          name="storage-unit"
                        />
                        <label for="storage-unit" data-name="storage-unit">
                          <span class="name">storage unit</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="swivel-chair"
                          name="swivel-chair"
                        />
                        <label for="swivel-chair" data-name="swivel-chair">
                          <span class="name">swivel chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="table-runner"
                          name="table-runner"
                        />
                        <label for="table-runner" data-name="table-runner">
                          <span class="name">table-runner</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="teapot" name="teapot" />
                        <label for="teapot" data-name="teapot">
                          <span class="name">teapot</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="teflon-sauce-pan-set"
                          name="teflon-sauce-pan-set"
                        />
                        <label
                          for="teflon-sauce-pan-set"
                          data-name="teflon-sauce-pan-set"
                        >
                          <span class="name">teflon sauce pan set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="throw" name="throw" />
                        <label for="throw" data-name="throw">
                          <span class="name">throw</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="toilet-brush"
                          name="toilet-brush"
                        />
                        <label for="toilet-brush" data-name="toilet-brush">
                          <span class="name">toilet brush</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="toilet-seat-adapter"
                          name="toilet-seat-adapter"
                        />
                        <label
                          for="toilet-seat-adapter"
                          data-name="toilet-seat-adapter"
                        >
                          <span class="name">toilet seat adapter</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="toiletry-bag"
                          name="toiletry-bag"
                        />
                        <label for="toiletry-bag" data-name="toiletry-bag">
                          <span class="name">toiletry bag</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="toothbrush-holder"
                          name="toothbrush-holder"
                        />
                        <label
                          for="toothbrush-holder"
                          data-name="toothbrush-holder"
                        >
                          <span class="name">toothbrush holder</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="towel-rail"
                          name="towel-rail"
                        />
                        <label for="towel-rail" data-name="towel-rail">
                          <span class="name">towel rail</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="train-set"
                          name="train-set"
                        />
                        <label for="train-set" data-name="train-set">
                          <span class="name">train set</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="tray" name="tray" />
                        <label for="tray" data-name="tray">
                          <span class="name">tray</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="trolley" name="trolley" />
                        <label for="trolley" data-name="trolley">
                          <span class="name">trolley</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="tv-bench" name="tv-bench" />
                        <label for="tv-bench" data-name="tv-bench">
                          <span class="name">tv bench</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="umbrella" name="umbrella" />
                        <label for="umbrella" data-name="umbrella">
                          <span class="name">umbrella</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="unscented-tealight"
                          name="unscented-tealight"
                        />
                        <label
                          for="unscented-tealight"
                          data-name="unscented-tealight"
                        >
                          <span class="name">unscented tealight</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="upholstered-chair"
                          name="upholstered-chair"
                        />
                        <label
                          for="upholstered-chair"
                          data-name="upholstered-chair"
                        >
                          <span class="name">upholstered chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="upholstered-wooden-chair"
                          name="upholstered-wooden-chair"
                        />
                        <label
                          for="upholstered-wooden-chair"
                          data-name="upholstered-wooden-chair"
                        >
                          <span class="name">upholstered wooden chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="vacuum-flask"
                          name="vacuum-flask"
                        />
                        <label for="vacuum-flask" data-name="vacuum-flask">
                          <span class="name">vacuum flask</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="vase" name="vase" />
                        <label for="vase" data-name="vase">
                          <span class="name">vase</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="vegetable-steamer"
                          name="vegetable-steamer"
                        />
                        <label
                          for="vegetable-steamer"
                          data-name="vegetable-steamer"
                        >
                          <span class="name">vegetable steamer</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-cabinet"
                          name="wall-cabinet"
                        />
                        <label for="wall-cabinet" data-name="wall-cabinet">
                          <span class="name">wall cabinet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-clock"
                          name="wall-clock"
                        />
                        <label for="wall-clock" data-name="wall-clock">
                          <span class="name">wall clock</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-decoration"
                          name="wall-decoration"
                        />
                        <label
                          for="wall-decoration"
                          data-name="wall-decoration"
                        >
                          <span class="name">wall decoration</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-lamp"
                          name="wall-lamp"
                        />
                        <label for="wall-lamp" data-name="wall-lamp">
                          <span class="name">wall lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-mirror"
                          name="wall-mirror"
                        />
                        <label for="wall-mirror" data-name="wall-mirror">
                          <span class="name">wall mirror</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-rail"
                          name="wall-rail"
                        />
                        <label for="wall-rail" data-name="wall-rail">
                          <span class="name">wall rail</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-shelf"
                          name="wall-shelf"
                        />
                        <label for="wall-shelf" data-name="wall-shelf">
                          <span class="name">wall shelf</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-shelf-piece"
                          name="wall-shelf-piece"
                        />
                        <label
                          for="wall-shelf-piece"
                          data-name="wall-shelf-piece"
                        >
                          <span class="name">wall shelf piece</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-shelf-with-drawers"
                          name="wall-shelf-with-drawers"
                        />
                        <label
                          for="wall-shelf-with-drawers"
                          data-name="wall-shelf-with-drawers"
                        >
                          <span class="name">wall shelf with drawers</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-shelf-with-suction-cup"
                          name="wall-shelf-with-suction-cup"
                        />
                        <label
                          for="wall-shelf-with-suction-cup"
                          data-name="wall-shelf-with-suction-cup"
                        >
                          <span class="name">wall shelf with suction cup</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wall-shelf-without-leg"
                          name="wall-shelf-without-leg"
                        />
                        <label
                          for="wall-shelf-without-leg"
                          data-name="wall-shelf-without-leg"
                        >
                          <span class="name">wall shelf without leg</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="wardrobe" name="wardrobe" />
                        <label for="wardrobe" data-name="wardrobe">
                          <span class="name">wardrobe</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wash-basin"
                          name="wash-basin"
                        />
                        <label for="wash-basin" data-name="wash-basin">
                          <span class="name">wash-basin</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wash-basin-cabinet"
                          name="wash-basin-cabinet"
                        />
                        <label
                          for="wash-basin-cabinet"
                          data-name="wash-basin-cabinet"
                        >
                          <span class="name">wash-basin cabinet</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="waste-bin"
                          name="waste-bin"
                        />
                        <label for="waste-bin" data-name="waste-bin">
                          <span class="name">waste bin</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="water-trap-strainer-1-bowl"
                          name="water-trap-strainer-1-bowl"
                        />
                        <label
                          for="water-trap-strainer-1-bowl"
                          data-name="water-trap-strainer-1-bowl"
                        >
                          <span class="name">water trap/strainer 1 bowl</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="water-trap-strainer-2-bowls"
                          name="water-trap-strainer-2-bowls"
                        />
                        <label
                          for="water-trap-strainer-2-bowls"
                          data-name="water-trap-strainer-2-bowls"
                        >
                          <span class="name">water trap/strainer 2 bowls</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="watering-can"
                          name="watering-can"
                        />
                        <label for="watering-can" data-name="watering-can">
                          <span class="name">watering can</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="waterproof-mattress-protector"
                          name="waterproof-mattress-protector"
                        />
                        <label
                          for="waterproof-mattress-protector"
                          data-name="waterproof-mattress-protector"
                        >
                          <span class="name">
                            waterproof mattress protector
                          </span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="whisk" name="whisk" />
                        <label for="whisk" data-name="whisk">
                          <span class="name">whisk</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="whiskey-glass"
                          name="whiskey-glass"
                        />
                        <label for="whiskey-glass" data-name="whiskey-glass">
                          <span class="name">whiskey glass</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="white-frame"
                          name="white-frame"
                        />
                        <label for="white-frame" data-name="white-frame">
                          <span class="name">white frame</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wooden-chair"
                          name="wooden-chair"
                        />
                        <label for="wooden-chair" data-name="wooden-chair">
                          <span class="name">wooden chair</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="wooden-stool"
                          name="wooden-stool"
                        />
                        <label for="wooden-stool" data-name="wooden-stool">
                          <span class="name">wooden stool</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="work-lamp"
                          name="work-lamp"
                        />
                        <label for="work-lamp" data-name="work-lamp">
                          <span class="name">work lamp</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="worktop" name="worktop" />
                        <label for="worktop" data-name="worktop">
                          <span class="name">worktop</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="writing-board"
                          name="writing-board"
                        />
                        <label for="writing-board" data-name="writing-board">
                          <span class="name">writing board</span>

                          <span class="count mr-0">1</span>
                        </label>
                      </div> */}

                      <a href="javascript" class="more-btn">
                        <span>+ 295 More</span>{" "}
                        <span class="hidden">Show less</span>
                      </a>
                    </div>
                  )}
                </div>

                <div class="filter-item arrow-none">
                  <span onClick={() => setCategory(!Category)}>
                    دسته بندي
                    <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                  </span>

                  {Category && (
                    <div
                      className=" absolute z-50 border-4 rounded-xl border-black rtl bg-white p-5 mt-24 w-[300%] h-[80vh] overflow-y-auto"

                      // class="filter-content category-filter"
                      // style={{ display: "none;" }}
                    >
                      {/* <div class="filter-category-list-item"> */}
                      <div className="mb-8 cursor-pointer font-vazir text-xl">
                        <ul>
                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="furniture" class="name">
                                Furniture
                              </span>

                              <span class="count mr-0">112</span>
                            </div>
                          </li>

                          <li>
                            <div className="mb-8 cursor-pointer">
                              {/* <div class="filter-category-item"> */}
                              <span
                                data-id="cookware-and-tableware"
                                class="name"
                              >
                                Cookware And Tableware
                              </span>

                              <span class="count mr-0">98</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="accessories" class="name">
                                Accessories
                              </span>

                              <span class="count mr-0">81</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="storage-and-organisation"
                                class="name"
                              >
                                Storage and Organisation
                              </span>

                              <span class="count mr-0">65</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="hallway-and-storage-solutions"
                                class="name"
                              >
                                Hallway and Storage Solutions
                              </span>

                              <span class="count mr-0">50</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="bathroom-products" class="name">
                                Bathroom Products
                              </span>

                              <span class="count mr-0">45</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="home-decoration" class="name">
                                Home Decoration
                              </span>

                              <span class="count mr-0">42</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="home-organisation" class="name">
                                Home Organisation
                              </span>

                              <span class="count mr-0">32</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="home-textile" class="name">
                                Home Textile
                              </span>

                              <span class="count mr-0">32</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="bedroom-furniture" class="name">
                                Bedroom Furniture
                              </span>

                              <span class="count mr-0">30</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="everyday-essentials" class="name">
                                Everyday Essentials
                              </span>

                              <span class="count mr-0">30</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="dining-room-furnitures"
                                class="name"
                              >
                                Dining Room Furnitures
                              </span>

                              <span class="count mr-0">30</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="working-spaces" class="name">
                                Working Spaces
                              </span>

                              <span class="count mr-0">29</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="baby-and-children-products"
                                class="name"
                              >
                                Baby and Children Products
                              </span>

                              <span class="count mr-0">29</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="home-office" class="name">
                                Home Office
                              </span>

                              <span class="count mr-0">28</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="lighting" class="name">
                                Lighting
                              </span>

                              <span class="count mr-0">21</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="outdoor-products" class="name">
                                Outdoor Products
                              </span>

                              <span class="count mr-0">14</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="bookcases-and-shelves"
                                class="name"
                              >
                                Bookcases and Shelves
                              </span>

                              <span class="count mr-0">10</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="mattresses-and-beds" class="name">
                                Mattresses and Beds
                              </span>

                              <span class="count mr-0">7</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="shelves" class="name">
                                Shelves
                              </span>

                              <span class="count mr-0">6</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="gaming-lights" class="name">
                                Gaming Lights
                              </span>

                              <span class="count mr-0">4</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="pet-products" class="name">
                                Pet Products
                              </span>

                              <span class="count mr-0">2</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="gaming-accessories" class="name">
                                Gaming Accessories
                              </span>

                              <span class="count mr-0">2</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="living-room-rugs" class="name">
                                Living Room Rugs
                              </span>

                              <span class="count mr-0">1</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span data-id="file-racks" class="name">
                                File Racks
                              </span>

                              <span class="count mr-0">1</span>
                            </div>
                          </li>

                          <li>
                            {/* <div class="filter-category-item"> */}
                            <div className="mb-8 cursor-pointer">
                              <span
                                data-id="gaming-desk-chair-sets"
                                class="name"
                              >
                                Gaming Desk &amp; Chair Sets
                              </span>

                              <span class="count mr-0">1</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div class="filter-item arrow-none">
                  <input type="hidden" class="last-price-input" />
                  <span onClick={() => setPrice(!Price)}>
                    قيمت
                    <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                  </span>

                  {Price && (
                    <div
                      className=" absolute z-50 border-4 rounded-xl border-black rtl bg-white p-10 mt-24 w-[380%] h-[25vh] overflow-y-auto"

                      // class="filter-content price-filter"
                      // style={{ display: "none;" }}
                    >
                      {/* <div class="price-box"> */}
                      <div className="grid grid-cols-1   w-full">
                        {/* <div class="price-input"> */}
                        <div className="flex items-center justify-center mb-5 gap-3 w-full">
                          <input
                            name="LastPriceFrom"
                            type="text"
                            id="LastPriceFrom"
                            // class="form-control only-number"
                            className="rounded-full border-2 border-black p-5"
                            maxlength="6"
                            data-name="LastPriceFrom"
                          />
                          <input
                            name="LastPriceTo"
                            type="text"
                            id="LastPriceTo"
                            // class="form-control only-number"
                            className="rounded-full border-2 border-black p-5"
                            maxlength="6"
                            data-name="LastPriceTo"
                          />
                        </div>
                        {/* <div class="price-btn"> */}
                        <div className="flex items-center justify-center gap-3 w-full">
                          {/* <a class="btn btn-default btn-sm filter_btn"> */}
                          <button
                            className="border-2 border-black w-full p-5 rounded-full  "
                            // href="#"
                          >
                            Filter
                          </button>
                          <button
                            className="border-2 border-black w-full p-5 rounded-full "
                            // href="#"
                          >
                            {/* <a class="btn btn-default btn-sm filter_price_clear"> */}
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div class="filter-variations-box">
                  <div
                    class="filter-item filter-variations arrow-none"
                    id="size"
                  >
                    <span onClick={() => setSize(!Size)}>
                      اندازه
                      <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                    </span>
                    {Size && (
                      <div
                        className=" absolute z-50 border-4 rounded-xl border-black 
                        rtl bg-white p-5 mt-24 w-[350%] h-[80vh] overflow-y-auto"

                        // class="filter-content size-filter"
                        // style={{ display: "none;" }}
                      >
                        <div class="filter-content-search size">
                          <a
                            href="javascript:;"
                            class="icon-close-pure search-close d-none"
                          ></a>
                          <i class=" arrow-none">
                            <MdSearch />
                          </i>

                          <input
                            type="text"
                            placeholder="Search"
                            className="border-2 border-balck rounded-full"
                            // class="filter-content-search-inp border-2 border-black rounded-full"
                          />
                          <div class="no-result d-none">
                            <p>
                              <span>There are no results for </span>
                              <span class="search-key"></span>
                            </p>
                          </div>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10 w-full rtl"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.160x200-cm"
                            name="size.160x200-cm"
                          />
                          {/* <label
                            for="size.160x200-cm"
                            data-name="size.160x200-cm"
                          >
                          </label> */}
                          <span class="ltr w-full ">160x200 cm</span>
                          <span class="count mr-0">4</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.17-cm"
                            name="size.17-cm"
                          />
                          {/* <label for="size.17-cm" data-name="size.17-cm">
                          </label> */}
                          <span class="name">17cm</span>
                          <span class="count mr-0">3</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.25-cm"
                            name="size.25-cm"
                          />
                          {/* <label for="size.25-cm" data-name="size.25-cm">
                          </label> */}
                          <span class="name">25cm</span>
                          <span class="count mr-0">3</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.28-cm"
                            name="size.28-cm"
                          />
                          {/* <label for="size.28-cm" data-name="size.28-cm">
                          </label> */}
                          <span class="name">28cm</span>
                          <span class="count mr-0">3</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.60x120-cm"
                            name="size.60x120-cm"
                          />
                          {/* <label
                            for="size.60x120-cm"
                            data-name="size.60x120-cm"
                          >
                          </label> */}
                          <span class="name">60x120cm</span>
                          <span class="count mr-0">3</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.10-cm"
                            name="size.10-cm"
                          />
                          {/* <label for="size.10-cm" data-name="size.10-cm"> */}
                          {/* </label> */}
                          <span class="name">10cm</span>
                          <span class="count mr-0">2</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.119x29-cm"
                            name="size.119x29-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.119x29-cm"
                            data-name="size.119x29-cm"
                          > */}
                          <span class="name">119x29cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.13-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.13-cm"
                          />
                          {/* <label for="size.13-cm" data-name="size.13-cm"> */}
                          <span class="name">13cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.15-cm"
                            name="size.15-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.15-cm" data-name="size.15-cm"> */}
                          <span class="name">15cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.150x200-50x60-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.150x200-50x60-cm"
                          />
                          {/* <label
                            for="size.150x200-50x60-cm"
                            data-name="size.150x200-50x60-cm"
                          > */}
                          <span class="name">150x200/50x60cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.16-cm"
                            name="size.16-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.16-cm" data-name="size.16-cm"> */}
                          <span class="name">16cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.26-cm"
                            name="size.26-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.26-cm" data-name="size.26-cm"> */}
                          <span class="name">26cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.33-cm"
                            name="size.33-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.33-cm" data-name="size.33-cm"> */}
                          <span class="name">33cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.50x80-cm"
                            name="size.50x80-cm"
                          />
                          {/* <label for="size.50x80-cm" data-name="size.50x80-cm"> */}
                          <span class="name">50x80cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.60-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.60-cm"
                          />
                          {/* <label for="size.60-cm" data-name="size.60-cm"> */}
                          <span class="name">60cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.70x90-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.70x90-cm"
                          />
                          {/* <label for="size.70x90-cm" data-name="size.70x90-cm"> */}
                          <span class="name">70x90cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            className="w-10 h-10 rounded-xl"
                            id="size.8-cm"
                            name="size.8-cm"
                          />
                          {/* <label for="size.8-cm" data-name="size.8-cm"> */}
                          <span class="name">8cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            className="w-10 h-10 rounded-xl"
                            type="checkbox"
                            id="size.80x200-cm"
                            name="size.80x200-cm"
                          />
                          {/* <label
                            for="size.80x200-cm"
                            data-name="size.80x200-cm"
                          > */}
                          <span class="name">80x200cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.9-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.9-cm"
                          />
                          {/* <label for="size.9-cm" data-name="size.9-cm"> */}
                          <span class="name">9cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.90x200-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.90x200-cm"
                          />
                          {/* <label
                            for="size.90x200-cm"
                            data-name="size.90x200-cm"
                          > */}
                          <span class="name">90x200cm</span>
                          <span class="count mr-0">2</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox"
                        >
                          <input
                            type="checkbox"
                            id="size.0-3-l"
                            name="size.0-3-l"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.0-3-l" data-name="size.0-3-l"> */}
                          <span class="name">0.3l</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.10-g"
                            name="size.10-g"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.10-g" data-name="size.10-g"> */}
                          <span class="name">10g</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.10-5-cm"
                            name="size.10-5-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.10-5-cm" data-name="size.10-5-cm"> */}
                          <span class="name">10.5cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.100-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.100-cm"
                          />
                          {/* <label for="size.100-cm" data-name="size.100-cm"> */}
                          <span class="name">100cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.100x150-cm"
                            name="size.100x150-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.100x150-cm"
                            data-name="size.100x150-cm"
                          >
                          </label> */}
                          <span class="name">100x150cm</span>
                          <span class="count mr-0">1</span>
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.100x160-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.100x160-cm"
                          />
                          {/* <label
                            for="size.100x160-cm"
                            data-name="size.100x160-cm"
                          > */}
                          <span class="name">100x160cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.100x43x90-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.100x43x90-cm"
                          />
                          {/* <label
                            for="size.100x43x90-cm"
                            data-name="size.100x43x90-cm"
                          > */}
                          <span class="name">100x43x90cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.105x32x190-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.105x32x190-cm"
                          />
                          {/* <label
                            for="size.105x32x190-cm"
                            data-name="size.105x32x190-cm"
                          > */}
                          <span class="name">105x32x190cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          // class="checkbox"
                          className="mt-10"
                        >
                          <input
                            type="checkbox"
                            id="size.105x50-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.105x50-cm"
                          />
                          {/* <label
                            for="size.105x50-cm"
                            data-name="size.105x50-cm"
                          > */}
                          <span class="name">105x50cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox"
                        >
                          <input
                            type="checkbox"
                            id="size.107x22x101-cm"
                            name="size.107x22x101-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.107x22x101-cm"
                            data-name="size.107x22x101-cm"
                          > */}
                          <span class="name">107x22x101cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.10x10-cm"
                            name="size.10x10-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.10x10-cm" data-name="size.10x10-cm"> */}
                          <span class="name">10x10cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.10x15x31-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.10x15x31-cm"
                          />
                          {/* <label
                            for="size.10x15x31-cm"
                            data-name="size.10x15x31-cm"
                          > */}
                          <span class="name">10x15x31cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.10x20x5-cm"
                            name="size.10x20x5-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.10x20x5-cm"
                            data-name="size.10x20x5-cm"
                          > */}
                          <span class="name">10x20x5cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.11-cm"
                            name="size.11-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.11-cm" data-name="size.11-cm"> */}
                          <span class="name">11cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.110x125-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.110x125-cm"
                          />
                          {/* <label
                            for="size.110x125-cm"
                            data-name="size.110x125-cm"
                          > */}
                          <span class="name">110x125cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.110x125-35x55-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.110x125-35x55-cm"
                          />
                          {/* <label
                            for="size.110x125-35x55-cm"
                            data-name="size.110x125-35x55-cm"
                          > */}
                          <span class="name">110x125/35x55cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.110x26-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.110x26-cm"
                          />
                          {/* <label
                            for="size.110x26-cm"
                            data-name="size.110x26-cm"
                          > */}
                          <span class="name">110x26cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.116-cm"
                            name="size.116-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.116-cm" data-name="size.116-cm"> */}
                          <span class="name">116cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.117x190-cm"
                            name="size.117x190-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.117x190-cm"
                            data-name="size.117x190-cm"
                          > */}
                          <span class="name">117x190cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.120-cm"
                            name="size.120-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.120-cm" data-name="size.120-cm"> */}
                          <span class="name">120cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.120-210-cm-19-mm"
                            name="size.120-210-cm-19-mm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.120-210-cm-19-mm"
                            data-name="size.120-210-cm-19-mm"
                          > */}
                          <span class="name">120-210cm19mm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden"
                        >
                          <input
                            type="checkbox"
                            id="size.120x160-cm"
                            name="size.120x160-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.120x160-cm"
                            data-name="size.120x160-cm"
                          > */}
                          <span class="name">120x160cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden">
                        >
                          <input
                            type="checkbox"
                            id="size.120x37-cm"
                            name="size.120x37-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.120x37-cm"
                            data-name="size.120x37-cm"
                          > */}
                          <span class="name">120x37cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <div
                          className="mt-10"
                          // class="checkbox hidden">
                        >
                          <input
                            type="checkbox"
                            id="size.120x41-cm"
                            name="size.120x41-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.120x41-cm"
                            data-name="size.120x41-cm"
                          > */}
                          <span class="name">120x41cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.120x42x38-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.120x42x38-cm"
                          />
                          {/* <label
                            for="size.120x42x38-cm"
                            data-name="size.120x42x38-cm"
                          > */}
                          <span class="name">120x42x38cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.120x42x65-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.120x42x65-cm"
                          />
                          {/* <label
                            for="size.120x42x65-cm"
                            data-name="size.120x42x65-cm"
                          > */}
                          <span class="name">120x42x65cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.126x77-cm"
                            name="size.126x77-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.126x77-cm"
                            data-name="size.126x77-cm"
                          > */}
                          <span class="name">126x77cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.12x10-cm"
                            className="w-10 h-10 rounded-xl"
                            name="size.12x10-cm"
                          />
                          {/* <label for="size.12x10-cm" data-name="size.12x10-cm"> */}
                          <span class="name">12x10cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.130x170-cm"
                            name="size.130x170-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label
                            for="size.130x170-cm"
                            data-name="size.130x170-cm"
                          > */}
                          <span class="name">130x170cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        {/* <div> */}
                        <div className="mt-10">
                          <input
                            type="checkbox"
                            id="size.13x18-cm"
                            name="size.13x18-cm"
                            className="w-10 h-10 rounded-xl"
                          />
                          {/* <label for="size.13x18-cm" data-name="size.13x18-cm"> */}
                          <span class="name">13x18cm</span>
                          <span class="count mr-0">1</span>
                          {/* </label> */}
                        </div>

                        <a href="javascript:;" class="more-btn">
                          <span>+ 20 More</span>{" "}
                          <span class="hidden">Show less</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div
                    className="flex-col  relative filter-item arrow-none mr-3 filter-variations"
                    // class="filter-item flex-col filter-variations arrow-none mr-3"
                    id="bed-firmness"
                  >
                    <span onClick={() => setFrimness(!Frimness)}>
                      Bed Frimness
                      <FaAngleDown className="flex  items-center  h-8 p-1 text-[6px]" />
                    </span>
                    {Frimness && (
                      <div
                        className=" absolute z-50 border-4 rounded-xl border-black rtl bg-gray-100 p-5 mt-24 w-[180%] h-40"
                        // class="filter-content size-filter"
                        // style={{ display: "none;" }}
                      >
                        <div class="w-full checkbox rtl">
                          <div className="grid grid-cols-2 w-full">
                            <span class="name" className="w-full ">
                              frim
                            </span>
                            <input
                              type="checkbox"
                              id="bed-firmness.firm"
                              name="bed-firmness.firm"
                            />
                            <label
                              for="bed-firmness.firm"
                              data-name="bed-firmness.firm"
                              className="ltr w-full"
                            >
                              <span class="count mr-0" className="ltr  w-full ">
                                1
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="burning-time"
                  >
                    <span>Burning Time</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="burning-time.4-hr"
                          name="burning-time.4-hr"
                        />
                        <label
                          for="burning-time.4-hr"
                          data-name="burning-time.4-hr"
                        >
                          <span class="name">4 hr</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="burning-time.20-hr"
                          name="burning-time.20-hr"
                        />
                        <label
                          for="burning-time.20-hr"
                          data-name="burning-time.20-hr"
                        >
                          <span class="name">20 hr</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="burning-time.3-5-hr"
                          name="burning-time.3-5-hr"
                        />
                        <label
                          for="burning-time.3-5-hr"
                          data-name="burning-time.3-5-hr"
                        >
                          <span class="name">3.5 hr</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="burning-time.40-hr"
                          name="burning-time.40-hr"
                        />
                        <label
                          for="burning-time.40-hr"
                          data-name="burning-time.40-hr"
                        >
                          <span class="name">40 hr</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="cushion"
                  >
                    <span>Cushion</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="cushion.with-djupvik-cushion"
                          name="cushion.with-djupvik-cushion"
                        />
                        <label
                          for="cushion.with-djupvik-cushion"
                          data-name="cushion.with-djupvik-cushion"
                        >
                          <span class="name">with DJUPVIK cushion</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="frame-colour"
                  >
                    <span>Frame Colour</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="frame-colour.black"
                          name="frame-colour.black"
                        />
                        <label
                          for="frame-colour.black"
                          data-name="frame-colour.black"
                        >
                          <span class="name">black</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="filter-item filter-variations hidden" id="info">
                    <span>Info</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div class="filter-content-search size">
                        <a
                          href="javascript:;"
                          class="icon-close-pure search-close d-none"
                        ></a>
                        <i class="icon-search-new"></i>

                        <input
                          type="text"
                          placeholder="Search"
                          class="filter-content-search-inp"
                        />
                        <div class="no-result d-none">
                          <p>
                            <span>There are no results for </span>
                            <span class="search-key"></span>
                          </p>
                        </div>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.extendable"
                          name="info.extendable"
                        />
                        <label
                          for="info.extendable"
                          data-name="info.extendable"
                        >
                          <span class="name">extendable</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.warm"
                          name="info.warm"
                        />
                        <label for="info.warm" data-name="info.warm">
                          <span class="name">warm</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.drop-leaf"
                          name="info.drop-leaf"
                        />
                        <label for="info.drop-leaf" data-name="info.drop-leaf">
                          <span class="name">drop-leaf</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.3-way-socket"
                          name="info.3-way-socket"
                        />
                        <label
                          for="info.3-way-socket"
                          data-name="info.3-way-socket"
                        >
                          <span class="name">3 way socket</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.4-compartments"
                          name="info.4-compartments"
                        />
                        <label
                          for="info.4-compartments"
                          data-name="info.4-compartments"
                        >
                          <span class="name">4 compartments</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.4-spots"
                          name="info.4-spots"
                        />
                        <label for="info.4-spots" data-name="info.4-spots">
                          <span class="name">4 spots</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.40-lights"
                          name="info.40-lights"
                        />
                        <label for="info.40-lights" data-name="info.40-lights">
                          <span class="name">40 lights</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.5-pack"
                          name="info.5-pack"
                        />
                        <label for="info.5-pack" data-name="info.5-pack">
                          <span class="name">5 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.lappviken"
                          name="info.lappviken"
                        />
                        <label for="info.lappviken" data-name="info.lappviken">
                          <span class="name">LAPPVIKEN</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input type="checkbox" id="info.led" name="info.led" />
                        <label for="info.led" data-name="info.led">
                          <span class="name">LED</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.dual"
                          name="info.dual"
                        />
                        <label for="info.dual" data-name="info.dual">
                          <span class="name">dual</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.handmade"
                          name="info.handmade"
                        />
                        <label for="info.handmade" data-name="info.handmade">
                          <span class="name">handmade</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.light-proof"
                          name="info.light-proof"
                        />
                        <label
                          for="info.light-proof"
                          data-name="info.light-proof"
                        >
                          <span class="name">light proof</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.multi-position"
                          name="info.multi-position"
                        />
                        <label
                          for="info.multi-position"
                          data-name="info.multi-position"
                        >
                          <span class="name">multi position</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.square"
                          name="info.square"
                        />
                        <label for="info.square" data-name="info.square">
                          <span class="name">square</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.wireless-dimmable"
                          name="info.wireless-dimmable"
                        />
                        <label
                          for="info.wireless-dimmable"
                          data-name="info.wireless-dimmable"
                        >
                          <span class="name">wireless dimmable</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.with-castors"
                          name="info.with-castors"
                        />
                        <label
                          for="info.with-castors"
                          data-name="info.with-castors"
                        >
                          <span class="name">with castors</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.with-shelf-unit"
                          name="info.with-shelf-unit"
                        />
                        <label
                          for="info.with-shelf-unit"
                          data-name="info.with-shelf-unit"
                        >
                          <span class="name">with shelf unit</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.with-two-mirror-doors"
                          name="info.with-two-mirror-doors"
                        />
                        <label
                          for="info.with-two-mirror-doors"
                          data-name="info.with-two-mirror-doors"
                        >
                          <span class="name">with two mirror doors</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.without-drawer"
                          name="info.without-drawer"
                        />
                        <label
                          for="info.without-drawer"
                          data-name="info.without-drawer"
                        >
                          <span class="name">without drawer</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.in-outdoor"
                          name="info.in-outdoor"
                        />
                        <label
                          for="info.in-outdoor"
                          data-name="info.in-outdoor"
                        >
                          <span class="name">in/outdoor</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="info.with-battery"
                          name="info.with-battery"
                        />
                        <label
                          for="info.with-battery"
                          data-name="info.with-battery"
                        >
                          <span class="name">with battery</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="filter-item filter-variations hidden" id="leg">
                    <span>Leg</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="leg.selsviken"
                          name="leg.selsviken"
                        />
                        <label for="leg.selsviken" data-name="leg.selsviken">
                          <span class="name">SELSVIKEN</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="filter-item filter-variations hidden" id="motif">
                    <span>Motif</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="motif.blue-landscape"
                          name="motif.blue-landscape"
                        />
                        <label
                          for="motif.blue-landscape"
                          data-name="motif.blue-landscape"
                        >
                          <span class="name">blue landscape</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="motif.garden"
                          name="motif.garden"
                        />
                        <label for="motif.garden" data-name="motif.garden">
                          <span class="name">garden</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="number-of-functions"
                  >
                    <span>number of functions</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="number-of-functions.5-spray-handshower"
                          name="number-of-functions.5-spray-handshower"
                        />
                        <label
                          for="number-of-functions.5-spray-handshower"
                          data-name="number-of-functions.5-spray-handshower"
                        >
                          <span class="name">5-spray handshower</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="number-of-seats"
                  >
                    <span>Number of Seats</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.4-chairs"
                          name="number-of-seats.4-chairs"
                        />
                        <label
                          for="number-of-seats.4-chairs"
                          data-name="number-of-seats.4-chairs"
                        >
                          <span class="name">4 chairs</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.4-pack"
                          name="number-of-seats.4-pack"
                        />
                        <label
                          for="number-of-seats.4-pack"
                          data-name="number-of-seats.4-pack"
                        >
                          <span class="name">4 pack</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.seats-4"
                          name="number-of-seats.seats-4"
                        />
                        <label
                          for="number-of-seats.seats-4"
                          data-name="number-of-seats.seats-4"
                        >
                          <span class="name">seats 4</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.seats-4-6"
                          name="number-of-seats.seats-4-6"
                        />
                        <label
                          for="number-of-seats.seats-4-6"
                          data-name="number-of-seats.seats-4-6"
                        >
                          <span class="name">seats 4-6</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.4-stools"
                          name="number-of-seats.4-stools"
                        />
                        <label
                          for="number-of-seats.4-stools"
                          data-name="number-of-seats.4-stools"
                        >
                          <span class="name">4 stools</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.seats-2-4"
                          name="number-of-seats.seats-2-4"
                        />
                        <label
                          for="number-of-seats.seats-2-4"
                          data-name="number-of-seats.seats-2-4"
                        >
                          <span class="name">seats 2-4</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="number-of-seats.seats-6-8"
                          name="number-of-seats.seats-6-8"
                        />
                        <label
                          for="number-of-seats.seats-6-8"
                          data-name="number-of-seats.seats-6-8"
                        >
                          <span class="name">seats 6-8</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="package-quantity"
                  >
                    <span>Package Quantity</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div class="filter-content-search size">
                        <a
                          href="javascript:;"
                          class="icon-close-pure search-close d-none"
                        ></a>
                        <i class="icon-search-new"></i>

                        <input
                          type="text"
                          placeholder="Search"
                          class="filter-content-search-inp"
                        />
                        <div class="no-result d-none">
                          <p>
                            <span>There are no results for </span>
                            <span class="search-key"></span>
                          </p>
                        </div>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.2-pack"
                          name="package-quantity.2-pack"
                        />
                        <label
                          for="package-quantity.2-pack"
                          data-name="package-quantity.2-pack"
                        >
                          <span class="name">2 pack</span>
                          <span class="count mr-0">8</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.3-piece"
                          name="package-quantity.3-piece"
                        />
                        <label
                          for="package-quantity.3-piece"
                          data-name="package-quantity.3-piece"
                        >
                          <span class="name">3 piece</span>
                          <span class="count mr-0">7</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.2-piece"
                          name="package-quantity.2-piece"
                        />
                        <label
                          for="package-quantity.2-piece"
                          data-name="package-quantity.2-piece"
                        >
                          <span class="name">2 piece</span>
                          <span class="count mr-0">6</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.3-pack"
                          name="package-quantity.3-pack"
                        />
                        <label
                          for="package-quantity.3-pack"
                          data-name="package-quantity.3-pack"
                        >
                          <span class="name">3 pack</span>
                          <span class="count mr-0">3</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.4-pack"
                          name="package-quantity.4-pack"
                        />
                        <label
                          for="package-quantity.4-pack"
                          data-name="package-quantity.4-pack"
                        >
                          <span class="name">4 pack</span>
                          <span class="count mr-0">3</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.24-pack"
                          name="package-quantity.24-pack"
                        />
                        <label
                          for="package-quantity.24-pack"
                          data-name="package-quantity.24-pack"
                        >
                          <span class="name">24 pack</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.5-piece"
                          name="package-quantity.5-piece"
                        />
                        <label
                          for="package-quantity.5-piece"
                          data-name="package-quantity.5-piece"
                        >
                          <span class="name">5 piece</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.8-pack"
                          name="package-quantity.8-pack"
                        />
                        <label
                          for="package-quantity.8-pack"
                          data-name="package-quantity.8-pack"
                        >
                          <span class="name">8 pack</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.100-pack"
                          name="package-quantity.100-pack"
                        />
                        <label
                          for="package-quantity.100-pack"
                          data-name="package-quantity.100-pack"
                        >
                          <span class="name">100 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.18-piece"
                          name="package-quantity.18-piece"
                        />
                        <label
                          for="package-quantity.18-piece"
                          data-name="package-quantity.18-piece"
                        >
                          <span class="name">18 piece</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.20-pack"
                          name="package-quantity.20-pack"
                        />
                        <label
                          for="package-quantity.20-pack"
                          data-name="package-quantity.20-pack"
                        >
                          <span class="name">20 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.24-piece"
                          name="package-quantity.24-piece"
                        />
                        <label
                          for="package-quantity.24-piece"
                          data-name="package-quantity.24-piece"
                        >
                          <span class="name">24 piece</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.25-pack"
                          name="package-quantity.25-pack"
                        />
                        <label
                          for="package-quantity.25-pack"
                          data-name="package-quantity.25-pack"
                        >
                          <span class="name">25 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.26-piece"
                          name="package-quantity.26-piece"
                        />
                        <label
                          for="package-quantity.26-piece"
                          data-name="package-quantity.26-piece"
                        >
                          <span class="name">26 piece</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.45-piece"
                          name="package-quantity.45-piece"
                        />
                        <label
                          for="package-quantity.45-piece"
                          data-name="package-quantity.45-piece"
                        >
                          <span class="name">45 piece</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.5-pack"
                          name="package-quantity.5-pack"
                        />
                        <label
                          for="package-quantity.5-pack"
                          data-name="package-quantity.5-pack"
                        >
                          <span class="name">5 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.50-pack"
                          name="package-quantity.50-pack"
                        />
                        <label
                          for="package-quantity.50-pack"
                          data-name="package-quantity.50-pack"
                        >
                          <span class="name">50 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.6-piece"
                          name="package-quantity.6-piece"
                        />
                        <label
                          for="package-quantity.6-piece"
                          data-name="package-quantity.6-piece"
                        >
                          <span class="name">6 piece</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.9-pack"
                          name="package-quantity.9-pack"
                        />
                        <label
                          for="package-quantity.9-pack"
                          data-name="package-quantity.9-pack"
                        >
                          <span class="name">9 pack</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="package-quantity.set-of-3"
                          name="package-quantity.set-of-3"
                        />
                        <label
                          for="package-quantity.set-of-3"
                          data-name="package-quantity.set-of-3"
                        >
                          <span class="name">set of 3</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="plant-type"
                  >
                    <span>Plant Type</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="plant-type.eucalyptus"
                          name="plant-type.eucalyptus"
                        />
                        <label
                          for="plant-type.eucalyptus"
                          data-name="plant-type.eucalyptus"
                        >
                          <span class="name">eucalyptus</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="filter-item filter-variations hidden" id="scent">
                    <span>Scent</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="scent.vanilla"
                          name="scent.vanilla"
                        />
                        <label for="scent.vanilla" data-name="scent.vanilla">
                          <span class="name">vanilla</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="storage-type"
                  >
                    <span>Storage Type</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="storage-type.with-base"
                          name="storage-type.with-base"
                        />
                        <label
                          for="storage-type.with-base"
                          data-name="storage-type.with-base"
                        >
                          <span class="name">with base</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="filter-item filter-variations hidden"
                    id="thickness"
                  >
                    <span>Thickness</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="thickness.11-cm"
                          name="thickness.11-cm"
                        />
                        <label
                          for="thickness.11-cm"
                          data-name="thickness.11-cm"
                        >
                          <span class="name">11 cm</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="filter-item filter-variations hidden" id="volume">
                    <span>Volume</span>
                    <div
                      class="filter-content size-filter"
                      style={{ display: "none;" }}
                    >
                      <div class="filter-content-search size">
                        <a
                          href="javascript:;"
                          class="icon-close-pure search-close d-none"
                        ></a>
                        <i class="icon-search-new"></i>

                        <input
                          type="text"
                          placeholder="Search"
                          class="filter-content-search-inp"
                        />
                        <div class="no-result d-none">
                          <p>
                            <span>There are no results for </span>
                            <span class="search-key"></span>
                          </p>
                        </div>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.1-l"
                          name="volume.1-l"
                        />
                        <label for="volume.1-l" data-name="volume.1-l">
                          <span class="name">1 l</span>
                          <span class="count mr-0">2</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.0-4-l"
                          name="volume.0-4-l"
                        />
                        <label for="volume.0-4-l" data-name="volume.0-4-l">
                          <span class="name">0,4 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.0-5-l"
                          name="volume.0-5-l"
                        />
                        <label for="volume.0-5-l" data-name="volume.0-5-l">
                          <span class="name">0,5 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.0-6-l"
                          name="volume.0-6-l"
                        />
                        <label for="volume.0-6-l" data-name="volume.0-6-l">
                          <span class="name">0,6 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.0-9-l"
                          name="volume.0-9-l"
                        />
                        <label for="volume.0-9-l" data-name="volume.0-9-l">
                          <span class="name">0.9 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.1-5-l"
                          name="volume.1-5-l"
                        />
                        <label for="volume.1-5-l" data-name="volume.1-5-l">
                          <span class="name">1,5 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.2-2-l"
                          name="volume.2-2-l"
                        />
                        <label for="volume.2-2-l" data-name="volume.2-2-l">
                          <span class="name">2,2 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.2-3-l-x-3-7-l"
                          name="volume.2-3-l-x-3-7-l"
                        />
                        <label
                          for="volume.2-3-l-x-3-7-l"
                          data-name="volume.2-3-l-x-3-7-l"
                        >
                          <span class="name">2,3 l x 3,7 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.2-5-l-and-1-2-l"
                          name="volume.2-5-l-and-1-2-l"
                        />
                        <label
                          for="volume.2-5-l-and-1-2-l"
                          data-name="volume.2-5-l-and-1-2-l"
                        >
                          <span class="name">2,5 l and 1,2 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.24-cm"
                          name="volume.24-cm"
                        />
                        <label for="volume.24-cm" data-name="volume.24-cm">
                          <span class="name">24 cm</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.34x23-cm"
                          name="volume.34x23-cm"
                        />
                        <label
                          for="volume.34x23-cm"
                          data-name="volume.34x23-cm"
                        >
                          <span class="name">34x23 cm</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.35-cl"
                          name="volume.35-cl"
                        />
                        <label for="volume.35-cl" data-name="volume.35-cl">
                          <span class="name">35 cl</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.4-l"
                          name="volume.4-l"
                        />
                        <label for="volume.4-l" data-name="volume.4-l">
                          <span class="name">4 l</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="volume.45-cl"
                          name="volume.45-cl"
                        />
                        <label for="volume.45-cl" data-name="volume.45-cl">
                          <span class="name">45 cl</span>
                          <span class="count mr-0">1</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="filter-item arrow-none global-modal-btn"
                  data-modal-id="filter-modal-box"
                >
                  <span>
                    همه فيلتر ها
                    <svg
                      focusable="false"
                      viewBox="0 0 24 24"
                      class="plp-svg-icon plp-pill__icon"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 5h2v1h12v2H8v1H6V8H4V6h2V5zm12 8h2v-2h-2v-1h-2v1H4v2h12v1h2v-1zm-5.9392 5H20v-2h-7.9392v-1h-2v1H4v2h6.0608v1h2v-1z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-full   grid grid-cols-1">
              <div className="mt-32 hidden border-2 border-black">
                <div class="col-lg- col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandler2}
                          onMouseLeave={onMouseLeaveHandler2}
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          />
                          <img
                            // ref={ImgRef}
                            src={image11}
                            className={hover2 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hover2 && (
                              <img
                                // ref={ImgRef}
                                src={image12}
                                className=""
                                // src="https://image-ikea.mncdn.com/urunler/500_500/PH136365.jpg"
                                alt="IKEA - BRIMNES wardrobe white"
                              />
                            )}
                          </span>
                        </a>
                      </div>
                      <div className="w-full  h-48 p-5">
                        {/* <div class="product-item-text"> */}
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-link"
                          target="_blank"
                          className="flex flex-col"
                        >
                          {/* <span class="is-logo"> */}
                          {/* <img src="https://www.ikea.com.tr/en/pages/best-sellers" /> */}
                          {/* </span> */}

                          {/* <span class="title">BRIMNES</span> */}
                          <span class="title font-vazir mb-10 text-3xl font-bold text-black">
                            لورم ایپسوم
                          </span>
                          <span class="desc text-gray-700 hover:underline-none text-2xl">
                            wardrobe, 117x190 cm
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a
                            className=" w-full ltr flex items-center "
                            href="javascript"
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="BRIMNES wardrobe, 117x190 cm"
                              onclick="shopping.addCartItem(&#39;40407922&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;40407922&#39;);"
                            >
                              <svg
                                focusable="false"
                                class="svg-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(40407922)"
                            >
                              <svg
                                width="34"
                                height="34"
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              {/* row 1 */}
              <div className="mt-32 border-2 border-gray-800">
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandler2}
                          onMouseLeave={onMouseLeaveHandler2}
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          />
                          <img
                            // ref={ImgRef}
                            src={image11}
                            className={hover2 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hover2 && (
                              <img
                                // ref={ImgRef}
                                src={image12}
                                className=""
                                // src="https://image-ikea.mncdn.com/urunler/500_500/PH136365.jpg"
                                alt="IKEA - BRIMNES wardrobe white"
                              />
                            )}
                          </span>
                        </a>
                      </div>
                      <div className="w-full  h-48 p-5">
                        {/* <div class="product-item-text"> */}
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-link"
                          target="_blank"
                          className="flex flex-col"
                        >
                          {/* <span class="is-logo"> */}
                          {/* <img src="https://www.ikea.com.tr/en/pages/best-sellers" /> */}
                          {/* </span> */}

                          {/* <span class="title">BRIMNES</span> */}
                          <span class="title font-vazir mb-10 text-3xl font-bold text-black">
                            لورم ایپسوم
                          </span>
                          <span class="desc text-gray-700 hover:underline-none text-2xl">
                            wardrobe, 117x190 cm
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a
                            className=" w-full ltr flex items-center "
                            href="javascript"
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="BRIMNES wardrobe, 117x190 cm"
                              onclick="shopping.addCartItem(&#39;40407922&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;40407922&#39;);"
                            >
                              <svg
                                focusable="false"
                                class="svg-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(40407922)"
                            >
                              <svg
                                width="34"
                                height="34"
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 wideImageCol col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            width="100"
                            height="100"
                            className="absolute z-50"
                            // class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src={image10}
                            className="relative"
                            // src="./Best Sellers _ IKEA_files/60156121-EN.jpg"
                            alt="IKEA - HEMNES shoe cabinet/storage white"
                          />
                        </a>
                      </div>
                      <div className="w-full  h-48 p-5">
                        {/* <div class="product-item-text"> */}
                        <a
                          href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121"
                          class="product-link"
                          target="_blank"
                          className="flex flex-col hover:underline-none"
                        >
                          <span class="is-logo">
                            {/* <img src="https://www.ikea.com.tr/en/pages/best-sellers" /> */}
                          </span>

                          {/* <span class="title">HEMNES</span> */}
                          <span class="title font-vazir mb-10 text-3xl font-bold text-black">
                            لورم ایپسوم
                          </span>

                          <span class="desc text-gray-700 hover:underline-none text-2xl">
                            shoe cabinet/storage, 107x22x101 cm
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl">₺</span>4,199
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center "
                          class="product-item-buttons"
                        >
                          <a
                            className=" w-full ltr flex items-center "
                            href="javascript"
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="HEMNES shoe cabinet/storage, 107x22x101 cm"
                              onclick="shopping.addCartItem(&#39;60156121&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;60156121&#39;);"
                            >
                              <svg
                                focusable="false"
                                class="svg-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(60156121)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                // class="pip-svg-icon"
                                aria-hidden="true"
                                width="34"
                                height="34"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630"
                          // class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandler}
                          onMouseLeave={onMouseLeaveHandler}
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/sert.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            width="100"
                            height="100"
                            alt="IKEA - sert"
                          />
                          <img
                            className={hover ? "display-none" : "relative"}
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE818094.jpg"
                            alt="IKEA - AFJALL single bed mattress white"

                            // onMouseOver={require("https://image-ikea.mncdn.com/urunler/500_500/PE842162.jpg")}
                            // onMouseOut={require( "https://image-ikea.mncdn.com/urunler/500_500/PE818094.jpg")}
                          />

                          <span
                            // className="absolute z-50"
                            class="img-hover"
                          >
                            {hover && (
                              <>
                                <img
                                  className="relative  "
                                  // ref={ImgRef}
                                  src="https://image-ikea.mncdn.com/urunler/500_500/PE842162.jpg"
                                  alt="IKEA - AFJALL single bed mattress white"
                                />
                                {/* <div className="w-full absolute bg-white z-50 opacity-10" /> */}
                              </>
                            )}
                          </span>
                        </a>
                      </div>
                      <div
                        className=" w-full h-48 "
                        // class="product-item-text"
                      >
                        <a
                          href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630"
                          class="product-link"
                          target="_blank"
                          className="flex flex-col p-5"
                        >
                          {/* <span class="is-logo">
                          <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                        </span> */}

                          <span class="title font-vazir mb-10 text-3xl font-bold text-black">
                            لورم ایپسوم
                          </span>
                          <span class="desc text-gray-700 hover:underline-none text-2xl">
                            single bed mattress, 80x200 cm
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price "></span>

                              <span class="price text-2xl font-bold text-black">
                                <span class="tl ">₺</span>
                                2,500
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
              <hr />
              {/* row 3 */}
              <div className="mt-24 w-full ">
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerChair}
                          onMouseLeave={onMouseLeaveHandlerChair}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={chair1}
                            className={hoverChair ?"display-none":"relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                          {hoverChair&&  <img
                          className="duration-300"
                              src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={chair1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={chari2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerBilly}
                          onMouseLeave={onMouseLeaveHandlerBilly}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={Billy1}
                            className={hoverBilly ? "display-none":"relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverBilly && <img
                              src={HoverBilly}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={Billy1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={Billy2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={Billy3}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerMalm}
                          onMouseLeave={onMouseLeaveHandlerMalm}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={malm1}
                            className={hoverMalm?"display-none": "relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverMalm && <img
                              src={HoverMalm}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={malm1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={malm2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={malm3}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerMike}
                          onMouseLeave={onMouseLeaveHandlerMike}

                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={micke1}
                            className={hoverMike ?"display-none": "relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverMike &&<img
                              src={HoverMike}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={micke1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={micke2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={micke3}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE702939.jpg"
                            alt="IKEA - KALLAX Open Shelving Unit white"
                          />

                          <span class="img-hover">
                            <img
                              src="https://image-ikea.mncdn.com/urunler/500_500/PE859876.jpg"
                              alt="IKEA - KALLAX Open Shelving Unit white"
                            />
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">KALLAX</span>

                          <span class="desc">
                            Open Shelving Unit, 77x147 cm
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>2,599
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a href="javascript:;">
                            <span
                              class="icon-basket-new basket-add mini-basket-btn"
                              data-title="KALLAX Open Shelving Unit, 77x147 cm"
                              onclick="shopping.addCartItem(&#39;80275887&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80275887&#39;);"
                            ></span>
                          </a>

                          <span
                            class="favorite-btn "
                            onclick="user.favorite.addItem(80275887)"
                          >
                            <svg
                              focusable="false"
                              viewBox="0 0 24 24"
                              class="pip-svg-icon"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                              ></path>
                            </svg>
                          </span>
                        </div>

                        <div class="product-thumbnails-box">
                          <span>More variants</span>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="2,599"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE702939.jpg"
                            data-sprcode="80275887"
                            data-url="/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE859876.jpg"
                          >
                            <img
                              src="https://image-ikea.mncdn.com/urunler/190_190/PE702939.jpg"
                              data-title="KALLAX"
                              alt="Open Shelving Unit, 77x147 cm"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="2,899"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE702938.jpg"
                            data-sprcode="20275885"
                            data-url="/en/product/kallax-blackbrown-77x147-cm-shelving-unit-20275885"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836444.jpg"
                            data-varyant="true"
                          >
                            <img
                              src="https://image-ikea.mncdn.com/urunler/190_190/PE702938.jpg"
                              data-title="KALLAX"
                              alt="Open Shelving Unit, 77x147 cm"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="2,899"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE627165.jpg"
                            data-sprcode="40346924"
                            data-url="/en/product/kallax-grey-wood-effect-77x147-cm-shelving-unit-40346924"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE845149.jpg"
                            data-varyant="true"
                          >
                            <img
                              src="https://image-ikea.mncdn.com/urunler/190_190/PE627165.jpg"
                              data-title="KALLAX"
                              alt="Open Shelving Unit, 77x147 cm"
                            />
                          </a>

                          <a
                            href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887"
                            class="product-link plp-more-count"
                          >
                            <span>+2</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <hr/>
              {/* row 4 */}
              <div className="mt-24">
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerIngatrop}
                          onMouseLeave={onMouseLeaveHandlerIngatrop}
                          
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={INGATORP1}
                            className={hoverIngatrop?"display-none":"relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverIngatrop&& <img
                              src={HoverIngatrop}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={INGATORP1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={INGATORP2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerKallax}
                          onMouseLeave={onMouseLeaveHandlerKallax}
                          
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={kallax4}
                            className={hoverKallax ?"display-none":"relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverKallax &&<img
                              src={HoverKallax}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={kallax1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={kallax2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={kallax3}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE740879.jpg"
                            alt="IKEA - INGATORP round dining table white"
                          />

                          <span class="img-hover">
                            <img
                              src="https://image-ikea.mncdn.com/urunler/500_500/PH179330.jpg"
                              alt="IKEA - INGATORP round dining table white"
                            />
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">INGATORP</span>

                          <span class="desc">
                            round dining table, seats 4-6
                          </span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>13,499
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a href="javascript:;">
                            <span
                              class="icon-basket-new basket-add mini-basket-btn"
                              data-title="INGATORP round dining table, seats 4-6"
                              onclick="shopping.addCartItem(&#39;40217069&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;40217069&#39;);"
                            ></span>
                          </a>

                          <span
                            class="favorite-btn "
                            onclick="user.favorite.addItem(40217069)"
                          >
                            <svg
                              focusable="false"
                              viewBox="0 0 24 24"
                              class="pip-svg-icon"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                              ></path>
                            </svg>
                          </span>
                        </div>

                        <div class="product-thumbnails-box">
                          <span>More variants</span>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="13,499"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740879.jpg"
                            data-sprcode="40217069"
                            data-url="/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH179330.jpg"
                          >
                            <img
                              src="https://image-ikea.mncdn.com/urunler/190_190/PE740879.jpg"
                              data-title="INGATORP"
                              alt="round dining table, seats 4-6"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="13,499"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740878.jpg"
                            data-sprcode="80217072"
                            data-url="/en/product/ingatorp-black-seats-4-6-round-dining-table-80217072"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE743395.jpg"
                            data-varyant="true"
                          >
                            <img
                              src="https://image-ikea.mncdn.com/urunler/190_190/PE740878.jpg"
                              data-title="INGATORP"
                              alt="round dining table, seats 4-6"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
<div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerKoncis}
                          onMouseLeave={onMouseLeaveHandlerKoncis}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={koncis}
                            className={hoverKoncis ?"display-none": "relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverKoncis && <img
                              src={HoverKoncis}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE728010.jpg"
                            alt="IKEA - BRANAS laundry bag rattan"
                          />

                          <span class="img-hover">
                            <img
                              src="https://image-ikea.mncdn.com/urunler/500_500/PE558467.jpg"
                              alt="IKEA - BRANAS laundry bag rattan"
                            />
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">BRANÄS</span>

                          <span class="desc">laundry bag, 80 l</span>
                          <span class="unit-color d-none">rattan</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>1,199
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a href="javascript:;">
                            <span
                              class="icon-basket-new basket-add mini-basket-btn"
                              data-title="BRANAS laundry bag, 80 l"
                              onclick="shopping.addCartItem(&#39;20214731&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;20214731&#39;);"
                            ></span>
                          </a>

                          <span
                            class="favorite-btn "
                            onclick="user.favorite.addItem(20214731)"
                          >
                            <svg
                              focusable="false"
                              viewBox="0 0 24 24"
                              class="pip-svg-icon"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
<div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerAlex}
                          onMouseLeave={onMouseLeaveHandlerAlex}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={alex1}
                            className={hoverAlex ?"display-none": "relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverAlex &&<img
                              src={HoverAlex}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={alex1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={alex2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={alex3}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <hr/>
                {/* <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE729198.jpg"
                            alt="IKEA - KONCIS garlic press stainless steel"
                          />

                          <span class="img-hover">
                            <img
                              src="https://image-ikea.mncdn.com/urunler/500_500/PE279397.jpg"
                              alt="IKEA - KONCIS garlic press stainless steel"
                            />
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">KONCIS</span>

                          <span class="desc">garlic press, 16 cm</span>
                          <span class="unit-color d-none">stainless steel</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>179
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a href="javascript:;">
                            <span
                              class="icon-basket-new basket-add mini-basket-btn"
                              data-title="KONCIS garlic press, 16 cm"
                              onclick="shopping.addCartItem(&#39;00089163&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;00089163&#39;);"
                            ></span>
                          </a>

                          <span
                            class="favorite-btn "
                            onclick="user.favorite.addItem(00089163)"
                          >
                            <svg
                              focusable="false"
                              viewBox="0 0 24 24"
                              class="pip-svg-icon"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546"
                          class="product-item-img active product-link"
                          target="_blank"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                          />
                          <img
                            src="https://image-ikea.mncdn.com/urunler/500_500/PE813763.jpg"
                            alt="IKEA - ALEX storage unit white"
                          />

                          <span class="img-hover">
                            <img
                              src="./Best Sellers _ IKEA_files/PH167220.jpg"
                              alt="IKEA - ALEX storage unit white"
                            />
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">ALEX</span>

                          <span class="desc">storage unit, 36x70 cm</span>
                          <span class="unit-color d-none">white</span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>3,400
                              </span>
                            </div>
                          </a>
                        </div>
                        <div class="product-item-buttons">
                          <a href="javascript:;">
                            <span
                              class="icon-basket-new basket-add mini-basket-btn"
                              data-title="ALEX storage unit, 36x70 cm"
                              onclick="shopping.addCartItem(&#39;00473546&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;00473546&#39;);"
                            ></span>
                          </a>

                          <span
                            class="favorite-btn "
                            onclick="user.favorite.addItem(00473546)"
                          >
                            <svg
                              focusable="false"
                              viewBox="0 0 24 24"
                              class="pip-svg-icon"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                              ></path>
                            </svg>
                          </span>
                        </div>

                        <div class="product-thumbnails-box">
                          <span>More variants</span>
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="3,400"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813763.jpg"
                            data-sprcode="00473546"
                            data-url="/en/product/alex-white-36x70-cm-storage-unit-00473546"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH167220.jpg"
                          >
                            <img
                              src="./Best Sellers _ IKEA_files/PE813763.jpg"
                              data-title="ALEX"
                              alt="storage unit, 36x70 cm"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="3,400"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813762.jpg"
                            data-sprcode="30483799"
                            data-url="/en/product/alex-grey-turquoise-36x70-cm-storage-unit-30483799"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888728.jpg"
                            data-varyant="true"
                          >
                            <img
                              src="./Best Sellers _ IKEA_files/PE813762.jpg"
                              data-title="ALEX"
                              alt="storage unit, 36x70 cm"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="3,400"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813770.jpg"
                            data-sprcode="60473548"
                            data-url="/en/product/alex-blackbrown-36x70-cm-storage-unit-60473548"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888217.jpg"
                            data-varyant="true"
                          >
                            <img
                              src="./Best Sellers _ IKEA_files/PE813770.jpg"
                              data-title="ALEX"
                              alt="storage unit, 36x70 cm"
                            />
                          </a>

                          <a
                            href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546"
                            class="product-link plp-more-count"
                          >
                            <span>+1</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
            <hr/>
              <div className="mt-24">

                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-item-img active product-link"
                        target="_blank"
                        onMouseEnter={onMouseEnterHandlerIngolf}
                        onMouseLeave={onMouseLeaveHandlerIngolf}
                        >
                          <img
                            width="100"
                            height="100"
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            class="custom-logo"
                            alt="IKEA - cok satan"
                            className="absolute z-50"
                          />
                          <img
                            src={ingolf1}
                            className={hoverIngolf ?"display-none":"relative"}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            alt="IKEA - MARKUS office chair vissle dark grey"
                          />

                          <span class="img-hover">
                            {hoverIngolf &&<img
                              src={Hover}
                              // src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                              alt="IKEA - MARKUS office chair vissle dark grey"
                            />}
                          </span>
                        </a>
                      </div>
                      <div class="product-item-text">
                        <a
                          href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                          class="product-link"
                          target="_blank"
                        >
                          <span class="is-logo">
                            <img src="https://www.ikea.com.tr/en/pages/best-sellers" />
                          </span>

                          <span class="title">MARKUS</span>

                          <span class="desc">office chair</span>
                          <span class="unit-color d-none">
                            vissle dark grey
                          </span>
                        </a>
                      </div>
                      <div class="product-item-bottom">
                        <div class="product-item-price ">
                          <a
                            href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            class="product-link"
                            target="_blank"
                          >
                            <div>
                              <span class="cross-price"></span>

                              <span class="price">
                                <span class="tl">₺</span>7,799
                              </span>
                            </div>
                          </a>
                        </div>
                        <div
                          className="w-full flex items-center justify-between"
                          // class="product-item-buttons"
                        >
                          <a
                            href="javascript display-none"
                            className=" w-full ltr flex items-center "
                          >
                            <span
                              className="w-16  h-16 text-white flex  p-1 items-center justify-center bg-blue-700 rounded-full"
                              // class="icon-basket-new basket-add mini-basket-btn"
                              data-title="AFJALL single bed mattress, 80x200 cm"
                              onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"
                            >
                              <svg
                                focusable="false"
                                class=" text-white"
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                                // fill="black"
                                xmlns="https://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                                ></path>
                              </svg>
                            </span>
                            <span
                              class="favorite-btn "
                              onclick="user.favorite.addItem(80568630)"
                            >
                              <svg
                                focusable="false"
                                viewBox="0 0 24 24"
                                class="pip-svg-icon"
                                width="34"
                                height="34"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 
                            0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544
                             2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>

                        <span>More variants</span>
                        <div className="w-full rtl  flex items-center">
                          {/* class="product-thumbnails-box"> */}
                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={ingolf1}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          <a
                            href="javascript:;"
                            class="variant"
                            data-issellable="true"
                            data-croseprice=""
                            data-isbti=""
                            data-customlogourl=""
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg"
                            data-sprcode="10521858"
                            data-url="/en/product/markus-light-grey-office-chair-10521858"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg"
                            data-varyant="true"
                          >
                            <img
                              src={ingolf2}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <script type="text/template" class="filterVariationsTemplate"> 
              {
  each(rc, function(item, key, list){ }
  <div class="filter-item filter-variations" id="{= item.id }">
      <span>{item.title }</span>
      <div class="filter-content size-filter">
          {if (item.items.length > 8) { }
              <div class="filter-content-search size">
              <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                  <i class="icon-search-new"></i>
                  { if (lang === 'en') { }
                      <input type="text" placeholder="Search" class="filter-content-search-inp" />
                      <div class="no-result d-none">
                          <p>
                              <span>There are no results for </span>
                              <span class="search-key"></span>
                          </p>
                      </div>
                  { } else { }
                      <input type="text" placeholder="Arama" class="filter-content-search-inp" />
                      <div class="no-result d-none">
                          <p>
                              <span class="search-key"></span>
                              <span> için sonuç bulunamadı.</span>
                          </p>
                      </div>
                  { } }
              </div>
          { } }

          { _.each(item.items, function(item, key, list){ }
          
              <div class="checkbox">
                  <input type="checkbox" id="{= item.id }" name="{= item.id }">
                  <label for="{= item.id }" data-name="{= item.id }">
                      { if(item.icon != ""){ }
                          <span class="filter-icon">
                              <img src="{= item.icon }" />
                          </span>
                      { } }
                      <span class="name">{= item.title }</span>
                      <span class="count mr-0">{= item.count }</span>
                  </label>
              </div>

          { }); }    
      </div>

  </div>
              }
  
  
</script> */}
            {/* <script type="text/template" class="filterColorTemplate">
    { _.each(rc, function(item, key, list){ }

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="{= item.id }" name="{= item.id }">
            <label for="{= item.id }" data-name="{= item.id }">
                <span class="color-filter-visual {= item.code == '#ffffff' ? 'border-color beyaz' : item.id  }" style="{= ((item.code.substr(0, 1) === "#") ? 'background-color:'+ item.code : 'background-image: url('+ Site.cdn.path + '/colors/' + item.code +'.svg)') }"></span>
                <span class="name">{= item.title }</span>
                <span class="count mr-0">{= item.count }</span>
            </label>
        </div> */}
            {/* </script> */}
            {/* <script type="text/template" class="filterCategoryTemplate">
    { _.each(rc, function(item, key, list){ }
                
        <li>
            <div class="filter-category-item">
                <span data-id="{= item.id }" class="name">{= item.title }</span>
                { if(item.count){ }
                    <span class="count mr-0">{= item.count }</span>
                {}}
            </div>
        </li>

    { }); }        
</script> */}
            {/* <script type="text/template" class="filterFunctionTemplate">
    { if (rc.length > 8) { }
    <div class="filter-content-search">
        <i class="icon-search-new"></i>
        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
        { if (lang === 'en') { }
            <input type="text" placeholder="Search" class="filter-content-search-inp" >
            <div class="no-result d-none">
                <p>
                    <span>There are no results for </span>
                    <span class="search-key"></span>
                </p>
            </div>
        { } else { }
            <input type="text" placeholder="Arama" class="filter-content-search-inp" >
            <div class="no-result d-none">
                <p>
                    <span class="search-key"></span>
                    <span> için sonuç bulunamadı.</span>
                </p>
            </div>
        { } }
    </div>
    { } }

    { _.each(rc, function(item, key, list){ }
                
        <div class="checkbox">
            <input type="checkbox" id="{= item.id }" name="{= item.id }">
            <label for="{= item.id }" data-name="{= item.id }">
                <span class="name">{= item.title }</span>
                { if(item.count){ }
                    <span class="count mr-0">{= item.count }</span>
                {}}
            </label>
        </div>

    { }); }
</script>

<script type="text/template" class="filterModalVariationsTemplate">
    { _.each(rc, function(item, key, list){ }
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">{= item.title }</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="{= item.id }">
                <div class="filter-content size-filter">
                    { if (item.items.length > 8) { }
                        <div class="filter-content-search size">
                        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                            <i class="icon-search-new"></i>
                            { if (lang === 'en') { }
                                <input type="text" placeholder="Search" class="filter-content-search-inp" >
                                <div class="no-result d-none">
                                    <p>
                                        <span>There are no results for </span>
                                        <span class="search-key"></span>
                                    </p>
                                </div>
                            { } else { }
                                <input type="text" placeholder="Arama" class="filter-content-search-inp" >
                                <div class="no-result d-none">
                                    <p>
                                        <span class="search-key"></span>
                                        <span> için sonuç bulunamadı.</span>
                                    </p>
                                </div>
                            { } }
                        </div>
                    { } }

                    { _.each(item.items, function(item, key, list){ }
                    
    <div>
                            <input type="checkbox" id="m-{= item.id }" name="m-{= item.id }">
                            <label for="m-{= item.id }" data-name="{= item.id }">
                                { if(item.icon != ""){ }
                                    <span class="filter-icon">
                                        <img src="{= item.icon }" />
                                    </span>
                                { } }
                                <span class="name">{= item.title }</span>
                                <span class="count mr-0">{= item.count }</span>
                            </label>
                        </div>

                    { }); }    
                </div>

            </div>
        </div>
    { }); }
</script>

<script type="text/template" class="filterModalColorTemplate">
    { _.each(rc, function(item, key, list){ }

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-{= item.id }" name="m-{= item.id }">
            <label for="m-{= item.id }" data-name="{= item.id }">
                <span class="color-filter-visual {= item.code == '#ffffff' ? 'border-color beyaz' : item.id  }" style="{= ((item.code.substr(0, 1) === "#") ? 'background-color:'+ item.code : 'background-image: url('+ Site.cdn.path + '/colors/' + item.code +'.svg)') }"></span>
                <span class="name">{= item.title }</span>
                <span class="count mr-0">{= item.count }</span>
            </label>
        </div>

    { }); } */}
            {/* </script>

<script type="text/template" class="filterModalFunctionTemplate">
    { if (rc.length > 8) { }
    <div class="filter-content-search">
        <i class="icon-search-new"></i>
        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
        { if (lang === 'en') { }
            <input type="text" placeholder="Search" class="filter-content-search-inp" >
            <div class="no-result d-none">
                <p>
                    <span>There are no results for </span>
                    <span class="search-key"></span>
                </p>
            </div>
        { } else { }
            <input type="text" placeholder="Arama" class="filter-content-search-inp" >
            <div class="no-result d-none">
                <p>
                    <span class="search-key"></span>
                    <span> için sonuç bulunamadı.</span>
                </p>
            </div>
        { } }
    </div>
    { } }

    { _.each(rc, function(item, key, list){ }
                
        <div class="checkbox">
            <input type="checkbox" id="m-{= item.id }" name="m-{= item.id }">
            <label for="m-{= item.id }" data-name="{= item.id }">
                <span class="name">{= item.title }</span>
                { if(item.count){ }
                    <span class="count mr-0">{= item.count }</span>
                {}}
            </label>
        </div>

    { }); }
</script>

<script type="text/template" class="availableOnlineTemplate">
    <div class="modal-accordion-box">
        <div class="modal-accordion-header">
            <div class="checkbox">
                <input type="checkbox" id="available-online" name="available-online" checked />
                <label for="available-online" data-name="available-online">
                    <span class="name">Available Online</span>
                </label>
            </div>
        </div>
    </div>
</script>
<script type="text/template" class="productLoadingTemplate">
    <div class="col-lg-3 col-sm-4 col-xs-6">
        <div class="plp-product-card-placeholder plp-fragment-wrapper">
            <div class="plp-product-card-placeholder__image"></div>
            <div class="plp-product-card-placeholder__name"></div>
            <div class="plp-product-card-placeholder__label"></div>
            <div class="plp-product-card-placeholder__price"></div>
        </div>
    </div>
</script> */}
            {/* <div id="productList" class="product-wrapper firstload">

    <div class="filters-bar hidden">
    </div>
    <div class="product-list-result hidden">
        <p>There are no products matching your search criteria.</p>
    </div>
    <div class="row">
    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg" alt="IKEA - BRIMNES wardrobe white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PH136365.jpg" alt="IKEA - BRIMNES wardrobe white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">BRIMNES 
                                </span>
                                
                            <span class="desc">wardrobe, 117x190 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>6,599</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="BRIMNES wardrobe, 117x190 cm" onclick="shopping.addCartItem(&#39;40407922&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;40407922&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(40407922)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-6 wideImageCol col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="./Best Sellers _ IKEA_files/60156121-EN.jpg" alt="IKEA - HEMNES shoe cabinet/storage white"/>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">HEMNES 
                                </span>
                                
                            <span class="desc">shoe cabinet/storage, 107x22x101 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>4,199</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="HEMNES shoe cabinet/storage, 107x22x101 cm" onclick="shopping.addCartItem(&#39;60156121&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;60156121&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(60156121)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/sert.svg" class="custom-logo" alt="IKEA - sert"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE818094.jpg" alt="IKEA - AFJALL single bed mattress white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE842162.jpg" alt="IKEA - AFJALL single bed mattress white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">AFJALL 
                                </span>
                                
                            <span class="desc">single bed mattress, 80x200 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/afjall-white-80x200-cm-single-bed-mattress-80568630" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>2,500</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="AFJALL single bed mattress, 80x200 cm" onclick="shopping.addCartItem(&#39;80568630&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80568630&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(80568630)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg" alt="IKEA - MARKUS office chair vissle dark grey"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg" alt="IKEA - MARKUS office chair vissle dark grey"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">MARKUS 
                                </span>
                                
                            <span class="desc">office chair</span>
                            <span class="unit-color d-none">vissle dark grey</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/markus-vissle-dark-grey-office-chair-70261150" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>7,799</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="MARKUS office chair" onclick="shopping.addCartItem(&#39;70261150&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;70261150&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(70261150)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="7,799" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg" data-sprcode="70261150" data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg" data-title="MARKUS" alt="office chair"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="7,799" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg" data-sprcode="10521858" data-url="/en/product/markus-light-grey-office-chair-10521858" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE866425.jpg" data-title="MARKUS" alt="office chair"/>
                                        </a>
                                    
                                
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/billy-white-80x28x202-cm-bookcase-00263850" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE692385.jpg" alt="IKEA - BILLY bookcase white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE845813.jpg" alt="IKEA - BILLY bookcase white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/billy-white-80x28x202-cm-bookcase-00263850" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">BILLY 
                                </span>
                                
                            <span class="desc">bookcase, 80x28x202 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/billy-white-80x28x202-cm-bookcase-00263850" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>2,499</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="BILLY bookcase, 80x28x202 cm" onclick="shopping.addCartItem(&#39;00263850&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;00263850&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(00263850)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="2,499" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE692385.jpg" data-sprcode="00263850" data-url="/en/product/billy-white-80x28x202-cm-bookcase-00263850" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE845813.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE692385.jpg" data-title="BILLY" alt="bookcase, 80x28x202 cm"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="2,999" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE664196.jpg" data-sprcode="90404209" data-url="/en/product/billy-white-stained-oak-veneer-80x28x202-cm-bookcase-90404209" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE845799.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE664196.jpg" data-title="BILLY"
                                             alt="bookcase, 80x28x202 cm"/>
                                        </a>
                                    
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/yeni.svg" data-logourl="" data-price="2,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE920347.jpg" data-sprcode="30504527" data-url="/en/product/billy-blue-black-80x28x202-cm-bookcase-30504527" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE733920.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE920347.jpg" 
                                            data-title="BILLY" alt="bookcase, 80x28x202 cm"/>
                                        </a>
                                    
                                
                                
                                    <a href="https://www.ikea.com.tr/en/product/billy-white-80x28x202-cm-bookcase-00263850" class="product-link plp-more-count"><span>+2</span></a>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/malm-white-80x100-cm-chest-of-4-drawers-30403571" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE621344.jpg" alt="IKEA - MALM chest of 4 drawers white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE885995.jpg" alt="IKEA - MALM chest of 4 drawers white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/malm-white-80x100-cm-chest-of-4-drawers-30403571" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">MALM 
                                </span>
                                
                            <span class="desc">chest of 4 drawers, 80x100 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/malm-white-80x100-cm-chest-of-4-drawers-30403571" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>3,999</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="MALM chest of 4 drawers, 80x100 cm" onclick="shopping.addCartItem(&#39;30403571&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;30403571&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(30403571)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="3,999" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE621344.jpg" data-sprcode="30403571" data-url="/en/product/malm-white-80x100-cm-chest-of-4-drawers-30403571" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE885995.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE621344.jpg" data-title="MALM" alt="chest of 4 drawers, 80x100 cm"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="4,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE886002.jpg" data-sprcode="70403574" data-url="/en/product/malm-white-stained-oak-veneer-80x100-cm-chest-of-4-drawers-70403574" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE886001.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE886002.jpg" data-title="MALM"
                                             alt="chest of 4 drawers, 80x100 cm"/>
                                        </a>
                                    
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="4,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE621355.jpg" data-sprcode="30403566" data-url="/en/product/malm-blackbrown-80x100-cm-chest-of-4-drawers-30403566" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE624308.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE621355.jpg"
                                             data-title="MALM" alt="chest of 4 drawers, 80x100 cm"/>
                                        </a>
                                    
                                
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/micke-white-105x50-cm-desk-80213074" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE740345.jpg" alt="IKEA - MICKE desk white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PH151482.jpg" alt="IKEA - MICKE desk white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/micke-white-105x50-cm-desk-80213074" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">MICKE 
                                </span>
                                
                            <span class="desc">desk, 105x50 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/micke-white-105x50-cm-desk-80213074" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>3,599</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="MICKE desk, 105x50 cm" onclick="shopping.addCartItem(&#39;80213074&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80213074&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(80213074)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="3,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740345.jpg" data-sprcode="80213074" data-url="/en/product/micke-white-105x50-cm-desk-80213074" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH151482.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE740345.jpg" data-title="MICKE" alt="desk, 105x50 cm"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="3,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740299.jpg" data-sprcode="10244743" data-url="/en/product/micke-blackbrown-105x50-cm-desk-10244743" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH165484.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE740299.jpg" data-title="MICKE" alt="desk, 105x50 cm"/>
                                        </a>
                                    
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="3,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE787985.jpg" data-sprcode="80489850" data-url="/en/product/micke-anthracite-red-105x50-cm-desk-80489850" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE787986.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE787985.jpg" data-title="MICKE" alt="desk, 105x50 cm"/>
                                        </a>
                                    
                                
                                
                                    <a href="https://www.ikea.com.tr/en/product/micke-white-105x50-cm-desk-80213074" class="product-link plp-more-count"><span>+2</span></a>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE702939.jpg" alt="IKEA - KALLAX Open Shelving Unit white">
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE859876.jpg" alt="IKEA - KALLAX Open Shelving Unit white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">KALLAX 
                                </span>
                                
                            <span class="desc">Open Shelving Unit, 77x147 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>2,599</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="KALLAX Open Shelving Unit, 77x147 cm" onclick="shopping.addCartItem(&#39;80275887&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;80275887&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(80275887)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="2,599" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE702939.jpg" data-sprcode="80275887" data-url="/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE859876.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE702939.jpg" data-title="KALLAX" alt="Open Shelving Unit, 77x147 cm"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="2,899" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE702938.jpg" data-sprcode="20275885" data-url="/en/product/kallax-blackbrown-77x147-cm-shelving-unit-20275885" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836444.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE702938.jpg" data-title="KALLAX" 
                                            alt="Open Shelving Unit, 77x147 cm"/>
                                        </a>
                                    
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="2,899" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE627165.jpg" data-sprcode="40346924" data-url="/en/product/kallax-grey-wood-effect-77x147-cm-shelving-unit-40346924" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE845149.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE627165.jpg" data-title="KALLAX" 
                                            alt="Open Shelving Unit, 77x147 cm"/>
                                        </a>
                                    
                                
                                
                                    <a href="https://www.ikea.com.tr/en/product/kallax-white-77x147-cm-open-shelving-unit-80275887" class="product-link plp-more-count"><span>+2</span></a>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE740879.jpg" alt="IKEA - INGATORP round dining table white"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PH179330.jpg" alt="IKEA - INGATORP round dining table white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">INGATORP 
                                </span>
                                
                            <span class="desc">round dining table, seats 4-6</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>13,499</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="INGATORP round dining table, seats 4-6" onclick="shopping.addCartItem(&#39;40217069&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;40217069&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(40217069)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="13,499" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740879.jpg" data-sprcode="40217069" data-url="/en/product/ingatorp-white-seats-4-6-round-dining-table-40217069" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH179330.jpg">
                                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE740879.jpg" data-title="INGATORP" alt="round dining table, seats 4-6">
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="13,499" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE740878.jpg" data-sprcode="80217072" data-url="/en/product/ingatorp-black-seats-4-6-round-dining-table-80217072" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE743395.jpg" data-varyant="true">
                                            <img src="https://image-ikea.mncdn.com/urunler/190_190/PE740878.jpg" 
                                            data-title="INGATORP" alt="round dining table, seats 4-6"/>
                                        </a>
                                    
                                
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE728010.jpg" alt="IKEA - BRANAS laundry bag rattan"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE558467.jpg" alt="IKEA - BRANAS laundry bag rattan"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">BRANÄS 
                                </span>
                                
                            <span class="desc">laundry bag, 80 l</span>
                            <span class="unit-color d-none">rattan</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/branas-rattan-80-l-laundry-bag-20214731" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>1,199</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="BRANAS laundry bag, 80 l" onclick="shopping.addCartItem(&#39;20214731&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;20214731&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(20214731)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE729198.jpg" alt="IKEA - KONCIS garlic press stainless steel"/>
                            
                                <span class="img-hover">
                                    <img src="https://image-ikea.mncdn.com/urunler/500_500/PE279397.jpg" alt="IKEA - KONCIS garlic press stainless steel"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">KONCIS 
                                </span>
                                
                            <span class="desc">garlic press, 16 cm</span>
                            <span class="unit-color d-none">stainless steel</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/koncis-stainless-steel-16-cm-garlic-press-00089163" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>179</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="KONCIS garlic press, 16 cm" onclick="shopping.addCartItem(&#39;00089163&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;00089163&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(00089163)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    
        
        
        

        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546" class="product-item-img active product-link" target="_blank">
                            <img src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" class="custom-logo" alt="IKEA - cok satan"/>
                            <img src="https://image-ikea.mncdn.com/urunler/500_500/PE813763.jpg" alt="IKEA - ALEX storage unit white"/>
                            
                                <span class="img-hover">
                                    <img src="./Best Sellers _ IKEA_files/PH167220.jpg" alt="IKEA - ALEX storage unit white"/>                               
                                </span>
                            
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="https://www.ikea.com.tr/en/pages/best-sellers"/>
                            </span>
                                
                                <span class="title">ALEX 
                                </span>
                                
                            <span class="desc">storage unit, 36x70 cm</span>
                            <span class="unit-color d-none">white</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price ">
                            <a href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price"></span>
                                    
                                    <span class="price"><span class="tl">₺</span>3,400</span>
                                    
                                </div>
                            </a>
                            
                        </div>
                        <div class="product-item-buttons">
                            
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="ALEX storage unit, 36x70 cm" onclick="shopping.addCartItem(&#39;00473546&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val(),null,null,);personaclick(&#39;track&#39;, &#39;cart&#39;, &#39;00473546&#39;);"></span></a>
                            
                            <span class="favorite-btn " onclick="user.favorite.addItem(00473546)">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        
                            <div class="product-thumbnails-box">
                                <span>More variants</span>
                                <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg" data-logourl="" data-price="3,400" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813763.jpg" data-sprcode="00473546" data-url="/en/product/alex-white-36x70-cm-storage-unit-00473546" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PH167220.jpg">
                                    <img src="./Best Sellers _ IKEA_files/PE813763.jpg" data-title="ALEX" alt="storage unit, 36x70 cm"/>
                                </a>
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="3,400" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813762.jpg" data-sprcode="30483799" data-url="/en/product/alex-grey-turquoise-36x70-cm-storage-unit-30483799" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888728.jpg" data-varyant="true">
                                            <img src="./Best Sellers _ IKEA_files/PE813762.jpg" data-title="ALEX" alt="storage unit, 36x70 cm"/>
                                        </a>
                                    
                                
                                    
                                        <a href="javascript:;" class="variant" data-issellable="true" data-croseprice="" data-isbti="" data-customlogourl="" data-logourl="" data-price="3,400" data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE813770.jpg" data-sprcode="60473548" data-url="/en/product/alex-blackbrown-36x70-cm-storage-unit-60473548" data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE888217.jpg" data-varyant="true">
                                            <img src="./Best Sellers _ IKEA_files/PE813770.jpg" data-title="ALEX" alt="storage unit, 36x70 cm"/>
                                        </a>
                                    
                                
                                
                                    <a href="https://www.ikea.com.tr/en/product/alex-white-36x70-cm-storage-unit-00473546" class="product-link plp-more-count"><span>+1</span></a>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

            

    
    

    

    

    

    

    

    

    

    

    

    

    
</div>
</div>
<div class="product-list-pager" style="display: block;">
    <div class="results-count">Showing <span class="list-count">12</span> results of <span class="total-count">337</span></div>
    <div class="pagination-progress">
        <div class="pagination-progress-indicator" style="width: 3.44828;"></div>
    </div>
</div>

<div class="global-modal-box filter-modal-box" id="filter-modal-box">
    <div class="global-modal-header">
        <p>Filter and Sort</p>
        <a href="javascript:;" class="icon-close-pure"></a>
    </div>
    <div class="global-modal-body">
        <div class="modal-accordion-wrapper" data-show="-1">
            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
<div>
                        <input type="checkbox" id="available-online" name="available-online" checked="">
                        <label for="available-online" data-name="available-online">
                            <span class="name">Available Online</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
                    <span class="modal-accordion-header-title">Sort</span>
                    <span class="modal-accordion-header-sub-title">Best Sellers</span>
                </div>
                <div class="modal-accordion-content">
                    <div class="filter-content sort-filter">
                        <div class="radio">
                            <input name="m-sort-radio" id="m-None" type="radio" checked="">
                            <label for="m-None" data-name="None"><span class="name">Best Sellers</span></label>
                        </div>
                        <div class="radio">
                            <input name="m-sort-radio" id="m-PriceAsc" type="radio">
                            <label for="m-PriceAsc" data-name="PriceAsc"><span class="name">Lowest to Highest (Price)</span></label>
                        </div>
                        <div class="radio">
                            <input name="m-sort-radio" id="m-PriceDesc" type="radio">
                            <label for="m-PriceDesc" data-name="PriceDesc"><span class="name">Highest to Lowest (Price)</span></label>
                        </div>
                        <div class="radio">
                            <input name="m-sort-radio" id="m-NewAsc" type="radio">
                            <label for="m-NewAsc" data-name="NewAsc"><span class="name">Newest</span></label>
                        </div>
                        <div class="radio">
                            <input name="m-sort-radio" id="m-NameAsc" type="radio">
                            <label for="m-NameAsc" data-name="NameAsc"><span class="name">From A to Z</span></label>
                        </div>
                        <div class="radio">
                            <input name="m-sort-radio" id="m-NameDesc" type="radio">
                            <label for="m-NameDesc" data-name="NameDesc"><span class="name">From Z to A</span></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
                    <span class="modal-accordion-header-title">Colour</span>
                    <span class="modal-accordion-header-sub-title"></span>
                </div>
                <div class="modal-accordion-content">
                    <div class="filter-content filter-color">
    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-white" name="m-white">
            <label for="m-white" data-name="white">
                <span class="color-filter-visual border-color beyaz" style="background-color:#ffffff"></span>
                <span class="name">white</span>
                <span class="count mr-0">132</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-grey" name="m-grey">
            <label for="m-grey" data-name="grey">
                <span class="color-filter-visual grey" style="background-color:#959595"></span>
                <span class="name">grey</span>
                <span class="count mr-0">64</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-black" name="m-black">
            <label for="m-black" data-name="black">
                <span class="color-filter-visual black" style="background-color:#000000"></span>
                <span class="name">black</span>
                <span class="count mr-0">36</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-brown" name="m-brown">
            <label for="m-brown" data-name="brown">
                <span class="color-filter-visual brown" style="background-color:#814820"></span>
                <span class="name">brown</span>
                <span class="count mr-0">30</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-beige" name="m-beige">
            <label for="m-beige" data-name="beige">
                <span class="color-filter-visual beige" style="background-color:#f4f3d7"></span>
                <span class="name">beige</span>
                <span class="count mr-0">17</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-green" name="m-green">
            <label for="m-green" data-name="green">
                <span class="color-filter-visual green" style="background-color:#3b7d22"></span>
                <span class="name">green</span>
                <span class="count mr-0">15</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-transparent" name="m-transparent">
            <label for="m-transparent" data-name="transparent">
                <span class="color-filter-visual border-color beyaz" style="background-color:#ffffff"></span>
                <span class="name">transparent</span>
                <span class="count mr-0">14</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-multi-colour" name="m-multi-colour">
            <label for="m-multi-colour" data-name="multi-colour">
                <span class="color-filter-visual multi-colour" style="background-image: url(//cdn.ikea.com.tr/colors/multicolor.svg)"></span>
                <span class="name">multi-colour</span>
                <span class="count mr-0">12</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-yellow" name="m-yellow">
            <label for="m-yellow" data-name="yellow">
                <span class="color-filter-visual yellow" style="background-color:#ffdb00"></span>
                <span class="name">yellow</span>
                <span class="count mr-0">6</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-red" name="m-red">
            <label for="m-red" data-name="red">
                <span class="color-filter-visual red" style="background-color:#ff0000"></span>
                <span class="name">red</span>
                <span class="count mr-0">5</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-blue" name="m-blue">
            <label for="m-blue" data-name="blue">
                <span class="color-filter-visual blue" style="background-color:#0058a3"></span>
                <span class="name">blue</span>
                <span class="count mr-0">2</span>
            </label>
        </div>

    

        <div class="filter-color-checkbox checkbox">
            <input type="checkbox" id="m-pink" name="m-pink">
            <label for="m-pink" data-name="pink">
                <span class="color-filter-visual pink" style="background-color:#ffb8c3"></span>
                <span class="name">pink</span>
                <span class="count mr-0">1</span>
            </label>
        </div>

    
</div>
                </div>
            </div>

            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
                    <span class="modal-accordion-header-title">Function</span>
                    <span class="modal-accordion-header-sub-title"></span>
                </div>
                <div class="modal-accordion-content">
                    <div class="filter-content function-filter">
    
    <div class="filter-content-search">
        <i class="icon-search-new"></i>
        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
        
            <input type="text" placeholder="Search" class="filter-content-search-inp">
            <div class="no-result d-none">
                <p>
                    <span>There are no results for </span>
                    <span class="search-key"></span>
                </p>
            </div>
        
    </div>
    

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-box" name="m-box">
            <label for="m-box" data-name="box">
                <span class="name">box</span>
                
                    <span class="count mr-0">3</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-tea-infuser" name="m-tea-infuser">
            <label for="m-tea-infuser" data-name="tea-infuser">
                <span class="name">tea infuser</span>
                
                    <span class="count mr-0">3</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-led-bulb-e27" name="m-led-bulb-e27">
            <label for="m-led-bulb-e27" data-name="led-bulb-e27">
                <span class="name">LED bulb E27</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-colander" name="m-colander">
            <label for="m-colander" data-name="colander">
                <span class="name">colander</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-cutlery-stand" name="m-cutlery-stand">
            <label for="m-cutlery-stand" data-name="cutlery-stand">
                <span class="name">cutlery stand</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-glass-vase" name="m-glass-vase">
            <label for="m-glass-vase" data-name="glass-vase">
                <span class="name">glass vase</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-mixing-bowl" name="m-mixing-bowl">
            <label for="m-mixing-bowl" data-name="mixing-bowl">
                <span class="name">mixing bowl</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-peeler" name="m-peeler">
            <label for="m-peeler" data-name="peeler">
                <span class="name">peeler</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-tealight-holder" name="m-tealight-holder">
            <label for="m-tealight-holder" data-name="tealight-holder">
                <span class="name">tealight holder</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-turner" name="m-turner">
            <label for="m-turner" data-name="turner">
                <span class="name">turner</span>
                
                    <span class="count mr-0">2</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-1-bowl-insert-sink-with-drainer" name="m-1-bowl-insert-sink-with-drainer">
            <label for="m-1-bowl-insert-sink-with-drainer" data-name="1-bowl-insert-sink-with-drainer">
                <span class="name">1 bowl insert sink with drainer</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-2-seat-sofa" name="m-2-seat-sofa">
            <label for="m-2-seat-sofa" data-name="2-seat-sofa">
                <span class="name">2-seat sofa</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-3-seat-sofa" name="m-3-seat-sofa">
            <label for="m-3-seat-sofa" data-name="3-seat-sofa">
                <span class="name">3-seat sofa</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-3-seat-sofa-bed" name="m-3-seat-sofa-bed">
            <label for="m-3-seat-sofa-bed" data-name="3-seat-sofa-bed">
                <span class="name">3-seat sofa-bed</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-4-way-socket-with-2-usb-ports" name="m-4-way-socket-with-2-usb-ports">
            <label for="m-4-way-socket-with-2-usb-ports" data-name="4-way-socket-with-2-usb-ports">
                <span class="name">4-way socket with 2 USB ports</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-led-cabinet-lighting" name="m-led-cabinet-lighting">
            <label for="m-led-cabinet-lighting" data-name="led-cabinet-lighting">
                <span class="name">LED cabinet lighting</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-led-driver" name="m-led-driver">
            <label for="m-led-driver" data-name="led-driver">
                <span class="name">LED driver</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-led-work-lamp" name="m-led-work-lamp">
            <label for="m-led-work-lamp" data-name="led-work-lamp">
                <span class="name">LED work lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-open-shelving-unit" name="m-open-shelving-unit">
            <label for="m-open-shelving-unit" data-name="open-shelving-unit">
                <span class="name">Open Shelving Unit</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-usb-a-to-usb-c-cable" name="m-usb-a-to-usb-c-cable">
            <label for="m-usb-a-to-usb-c-cable" data-name="usb-a-to-usb-c-cable">
                <span class="name">USB-A to USB-C cable</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-wifi-bookshelf-speaker" name="m-wifi-bookshelf-speaker">
            <label for="m-wifi-bookshelf-speaker" data-name="wifi-bookshelf-speaker">
                <span class="name">WiFi bookshelf speaker</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-adhesive-hook" name="m-adhesive-hook">
            <label for="m-adhesive-hook" data-name="adhesive-hook">
                <span class="name">adhesive hook</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-alarm-clock" name="m-alarm-clock">
            <label for="m-alarm-clock" data-name="alarm-clock">
                <span class="name">alarm clock</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-armchair" name="m-armchair">
            <label for="m-armchair" data-name="armchair">
                <span class="name">armchair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-artificial-bouquet" name="m-artificial-bouquet">
            <label for="m-artificial-bouquet" data-name="artificial-bouquet">
                <span class="name">artificial bouquet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-artificial-flower" name="m-artificial-flower">
            <label for="m-artificial-flower" data-name="artificial-flower">
                <span class="name">artificial flower</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-artificial-plant" name="m-artificial-plant">
            <label for="m-artificial-plant" data-name="artificial-plant">
                <span class="name">artificial plant</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-artificial-potted-plant-with-pot" name="m-artificial-potted-plant-with-pot">
            <label for="m-artificial-potted-plant-with-pot" data-name="artificial-potted-plant-with-pot">
                <span class="name">artificial potted plant with pot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-background-curtain-1-pair" name="m-background-curtain-1-pair">
            <label for="m-background-curtain-1-pair" data-name="background-curtain-1-pair">
                <span class="name">background curtain, 1 pair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div class="checkbox">
            <input type="checkbox" id="m-bahtroom-high-cabinet" name="m-bahtroom-high-cabinet">
            <label for="m-bahtroom-high-cabinet" data-name="bahtroom-high-cabinet">
                <span class="name">bahtroom high cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bamboo-plant-pot" name="m-bamboo-plant-pot">
            <label for="m-bamboo-plant-pot" data-name="bamboo-plant-pot">
                <span class="name">bamboo plant pot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bar-chair" name="m-bar-chair">
            <label for="m-bar-chair" data-name="bar-chair">
                <span class="name">bar chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bar-stool" name="m-bar-stool">
            <label for="m-bar-stool" data-name="bar-stool">
                <span class="name">bar stool</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bar-table" name="m-bar-table">
            <label for="m-bar-table" data-name="bar-table">
                <span class="name">bar table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bar-table-and-bar-stools-set" name="m-bar-table-and-bar-stools-set">
            <label for="m-bar-table-and-bar-stools-set" data-name="bar-table-and-bar-stools-set">
                <span class="name">bar table and bar stools set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-base-cab-dr-front-shlvs-2-low-drwrs" name="m-base-cab-dr-front-shlvs-2-low-drwrs">
            <label for="m-base-cab-dr-front-shlvs-2-low-drwrs" data-name="base-cab-dr-front-shlvs-2-low-drwrs">
                <span class="name">base cab dr/front/shlvs/2 low drwrs</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-basket" name="m-basket">
            <label for="m-basket" data-name="basket">
                <span class="name">basket</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bath-mat" name="m-bath-mat">
            <label for="m-bath-mat" data-name="bath-mat">
                <span class="name">bath mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bath-robe" name="m-bath-robe">
            <label for="m-bath-robe" data-name="bath-robe">
                <span class="name">bath robe</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bath-sheet" name="m-bath-sheet">
            <label for="m-bath-sheet" data-name="bath-sheet">
                <span class="name">bath sheet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bathroom-set" name="m-bathroom-set">
            <label for="m-bathroom-set" data-name="bathroom-set">
                <span class="name">bathroom set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bathroom-wall-cabinet" name="m-bathroom-wall-cabinet">
            <label for="m-bathroom-wall-cabinet" data-name="bathroom-wall-cabinet">
                <span class="name">bathroom wall cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bathtub-mat" name="m-bathtub-mat">
            <label for="m-bathtub-mat" data-name="bathtub-mat">
                <span class="name">bathtub mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-beads" name="m-beads">
            <label for="m-beads" data-name="beads">
                <span class="name">beads</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bed-tray" name="m-bed-tray">
            <label for="m-bed-tray" data-name="bed-tray">
                <span class="name">bed tray</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bedside-table" name="m-bedside-table">
            <label for="m-bedside-table" data-name="bedside-table">
                <span class="name">bedside table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bedspread-blanket" name="m-bedspread-blanket">
            <label for="m-bedspread-blanket" data-name="bedspread-blanket">
                <span class="name">bedspread/blanket</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bench" name="m-bench">
            <label for="m-bench" data-name="bench">
                <span class="name">bench</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-black-frame" name="m-black-frame">
            <label for="m-black-frame" data-name="black-frame">
                <span class="name">black frame</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-blackout-curtain-1-pair" name="m-blackout-curtain-1-pair">
            <label for="m-blackout-curtain-1-pair" data-name="blackout-curtain-1-pair">
                <span class="name">blackout curtain, 1 pair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-block-candle" name="m-block-candle">
            <label for="m-block-candle" data-name="block-candle">
                <span class="name">block candle</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-body-puff" name="m-body-puff">
            <label for="m-body-puff" data-name="body-puff">
                <span class="name">body puff</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bookcase" name="m-bookcase">
            <label for="m-bookcase" data-name="bookcase">
                <span class="name">bookcase</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bookcase-with-glass-door" name="m-bookcase-with-glass-door">
            <label for="m-bookcase-with-glass-door" data-name="bookcase-with-glass-door">
                <span class="name">bookcase with glass door</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bookcase-with-glass-panel-doors" name="m-bookcase-with-glass-panel-doors">
            <label for="m-bookcase-with-glass-panel-doors" data-name="bookcase-with-glass-panel-doors">
                <span class="name">bookcase with glass/panel doors</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bottle-brush" name="m-bottle-brush">
            <label for="m-bottle-brush" data-name="bottle-brush">
                <span class="name">bottle brush</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bowl" name="m-bowl">
            <label for="m-bowl" data-name="bowl">
                <span class="name">bowl</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-box-set" name="m-box-set">
            <label for="m-box-set" data-name="box-set">
                <span class="name">box set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-box-with-compartments" name="m-box-with-compartments">
            <label for="m-box-with-compartments" data-name="box-with-compartments">
                <span class="name">box with compartments</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-box-with-lid" name="m-box-with-lid">
            <label for="m-box-with-lid" data-name="box-with-lid">
                <span class="name">box with lid</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-bunk-bed" name="m-bunk-bed">
            <label for="m-bunk-bed" data-name="bunk-bed">
                <span class="name">bunk bed</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cabinet-combination-for-laundry-room-and-bathroom" name="m-cabinet-combination-for-laundry-room-and-bathroom">
            <label for="m-cabinet-combination-for-laundry-room-and-bathroom" data-name="cabinet-combination-for-laundry-room-and-bathroom">
                <span class="name">cabinet combination for laundry room and bathroom</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cabinet-for-washing-machine" name="m-cabinet-for-washing-machine">
            <label for="m-cabinet-for-washing-machine" data-name="cabinet-for-washing-machine">
                <span class="name">cabinet for washing machine</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cabinet-with-door" name="m-cabinet-with-door">
            <label for="m-cabinet-with-door" data-name="cabinet-with-door">
                <span class="name">cabinet with door</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cabinet-with-glass-doors" name="m-cabinet-with-glass-doors">
            <label for="m-cabinet-with-glass-doors" data-name="cabinet-with-glass-doors">
                <span class="name">cabinet with glass doors</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-candle-dish" name="m-candle-dish">
            <label for="m-candle-dish" data-name="candle-dish">
                <span class="name">candle dish</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-candlestick" name="m-candlestick">
            <label for="m-candlestick" data-name="candlestick">
                <span class="name">candlestick</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-carafe" name="m-carafe">
            <label for="m-carafe" data-name="carafe">
                <span class="name">carafe</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cat-dog-food-bowl" name="m-cat-dog-food-bowl">
            <label for="m-cat-dog-food-bowl" data-name="cat-dog-food-bowl">
                <span class="name">cat/dog food bowl</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-ceiling-lamp-cord-set" name="m-ceiling-lamp-cord-set">
            <label for="m-ceiling-lamp-cord-set" data-name="ceiling-lamp-cord-set">
                <span class="name">ceiling lamp cord set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-ceramic-sharpener" name="m-ceramic-sharpener">
            <label for="m-ceramic-sharpener" data-name="ceramic-sharpener">
                <span class="name">ceramic sharpener</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chair-pad" name="m-chair-pad">
            <label for="m-chair-pad" data-name="chair-pad">
                <span class="name">chair pad</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-changing-table" name="m-changing-table">
            <label for="m-changing-table" data-name="changing-table">
                <span class="name">changing table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chest-of-4-drawers" name="m-chest-of-4-drawers">
            <label for="m-chest-of-4-drawers" data-name="chest-of-4-drawers">
                <span class="name">chest of 4 drawers</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chest-of-5-drawers" name="m-chest-of-5-drawers">
            <label for="m-chest-of-5-drawers" data-name="chest-of-5-drawers">
                <span class="name">chest of 5 drawers</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chest-of-8-drawers" name="m-chest-of-8-drawers">
            <label for="m-chest-of-8-drawers" data-name="chest-of-8-drawers">
                <span class="name">chest of 8 drawers</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cheval-glass" name="m-cheval-glass">
            <label for="m-cheval-glass" data-name="cheval-glass">
                <span class="name">cheval glass</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-pendant-lamp" name="m-children-pendant-lamp">
            <label for="m-children-pendant-lamp" data-name="children-pendant-lamp">
                <span class="name">children pendant lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-table-lamp" name="m-children-table-lamp">
            <label for="m-children-table-lamp" data-name="children-table-lamp">
                <span class="name">children table lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-s-chair" name="m-children-s-chair">
            <label for="m-children-s-chair" data-name="children-s-chair">
                <span class="name">children's chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-s-coat-hanger" name="m-children-s-coat-hanger">
            <label for="m-children-s-coat-hanger" data-name="children-s-coat-hanger">
                <span class="name">children's coat-hanger</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-s-table" name="m-children-s-table">
            <label for="m-children-s-table" data-name="children-s-table">
                <span class="name">children's table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-s-table-and-chairs" name="m-children-s-table-and-chairs">
            <label for="m-children-s-table-and-chairs" data-name="children-s-table-and-chairs">
                <span class="name">children's table and chairs</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-children-s-tent" name="m-children-s-tent">
            <label for="m-children-s-tent" data-name="children-s-tent">
                <span class="name">children's tent</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chopping-board" name="m-chopping-board">
            <label for="m-chopping-board" data-name="chopping-board">
                <span class="name">chopping board</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-chopping-knife" name="m-chopping-knife">
            <label for="m-chopping-knife" data-name="chopping-knife">
                <span class="name">chopping knife</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cleaning-cloth" name="m-cleaning-cloth">
            <label for="m-cleaning-cloth" data-name="cleaning-cloth">
                <span class="name">cleaning cloth</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cleaning-gloves" name="m-cleaning-gloves">
            <label for="m-cleaning-gloves" data-name="cleaning-gloves">
                <span class="name">cleaning gloves</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-closed-storage-box" name="m-closed-storage-box">
            <label for="m-closed-storage-box" data-name="closed-storage-box">
                <span class="name">closed storage box</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-clothes-hanger" name="m-clothes-hanger">
            <label for="m-clothes-hanger" data-name="clothes-hanger">
                <span class="name">clothes hanger</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-clothes-peg" name="m-clothes-peg">
            <label for="m-clothes-peg" data-name="clothes-peg">
                <span class="name">clothes peg</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-coaster" name="m-coaster">
            <label for="m-coaster" data-name="coaster">
                <span class="name">coaster</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cocktail-set" name="m-cocktail-set">
            <label for="m-cocktail-set" data-name="cocktail-set">
                <span class="name">cocktail set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-coffee-table" name="m-coffee-table">
            <label for="m-coffee-table" data-name="coffee-table">
                <span class="name">coffee table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-collage-frame" name="m-collage-frame">
            <label for="m-collage-frame" data-name="collage-frame">
                <span class="name">collage frame</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-console" name="m-console">
            <label for="m-console" data-name="console">
                <span class="name">console</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-container-with-suction-cup" name="m-container-with-suction-cup">
            <label for="m-container-with-suction-cup" data-name="container-with-suction-cup">
                <span class="name">container with suction cup</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-corner-desk-right" name="m-corner-desk-right">
            <label for="m-corner-desk-right" data-name="corner-desk-right">
                <span class="name">corner desk right</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cot" name="m-cot">
            <label for="m-cot" data-name="cot">
                <span class="name">cot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-crepe-pancake-pan" name="m-crepe-pancake-pan">
            <label for="m-crepe-pancake-pan" data-name="crepe-pancake-pan">
                <span class="name">crepe/pancake pan</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-curtain-rod-set" name="m-curtain-rod-set">
            <label for="m-curtain-rod-set" data-name="curtain-rod-set">
                <span class="name">curtain rod set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-cutlery-for-6-people" name="m-cutlery-for-6-people">
            <label for="m-cutlery-for-6-people" data-name="cutlery-for-6-people">
                <span class="name">cutlery for 6 people</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-day-bed" name="m-day-bed">
            <label for="m-day-bed" data-name="day-bed">
                <span class="name">day-bed</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-decoration" name="m-decoration">
            <label for="m-decoration" data-name="decoration">
                <span class="name">decoration</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-deep-plate" name="m-deep-plate">
            <label for="m-deep-plate" data-name="deep-plate">
                <span class="name">deep plate</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-desk" name="m-desk">
            <label for="m-desk" data-name="desk">
                <span class="name">desk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dining-chair-set" name="m-dining-chair-set">
            <label for="m-dining-chair-set" data-name="dining-chair-set">
                <span class="name">dining chair set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dining-set" name="m-dining-set">
            <label for="m-dining-set" data-name="dining-set">
                <span class="name">dining set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dining-table" name="m-dining-table">
            <label for="m-dining-table" data-name="dining-table">
                <span class="name">dining table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dish-drainer" name="m-dish-drainer">
            <label for="m-dish-drainer" data-name="dish-drainer">
                <span class="name">dish drainer</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dish-drying-mat" name="m-dish-drying-mat">
            <label for="m-dish-drying-mat" data-name="dish-drying-mat">
                <span class="name">dish drying mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dish-washing-brush" name="m-dish-washing-brush">
            <label for="m-dish-washing-brush" data-name="dish-washing-brush">
                <span class="name">dish-washing brush</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-double-bed" name="m-double-bed">
            <label for="m-double-bed" data-name="double-bed">
                <span class="name">double bed</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-double-bed-base" name="m-double-bed-base">
            <label for="m-double-bed-base" data-name="double-bed-base">
                <span class="name">double bed base</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-double-duvet" name="m-double-duvet">
            <label for="m-double-duvet" data-name="double-duvet">
                <span class="name">double duvet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-double-quilt-cover-and-2-pillowcases" name="m-double-quilt-cover-and-2-pillowcases">
            <label for="m-double-quilt-cover-and-2-pillowcases" data-name="double-quilt-cover-and-2-pillowcases">
                <span class="name">double quilt cover and 2 pillowcases</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-double-bowl-insert-sink" name="m-double-bowl-insert-sink">
            <label for="m-double-bowl-insert-sink" data-name="double-bowl-insert-sink">
                <span class="name">double-bowl insert sink</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dough-cutter" name="m-dough-cutter">
            <label for="m-dough-cutter" data-name="dough-cutter">
                <span class="name">dough cutter</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-drawer-mat" name="m-drawer-mat">
            <label for="m-drawer-mat" data-name="drawer-mat">
                <span class="name">drawer mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-drawer-organizer" name="m-drawer-organizer">
            <label for="m-drawer-organizer" data-name="drawer-organizer">
                <span class="name">drawer organizer</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-drawing-case" name="m-drawing-case">
            <label for="m-drawing-case" data-name="drawing-case">
                <span class="name">drawing case</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-dressing-table" name="m-dressing-table">
            <label for="m-dressing-table" data-name="dressing-table">
                <span class="name">dressing table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-ergonomic-pillow" name="m-ergonomic-pillow">
            <label for="m-ergonomic-pillow" data-name="ergonomic-pillow">
                <span class="name">ergonomic pillow</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-extendable-dining-table" name="m-extendable-dining-table">
            <label for="m-extendable-dining-table" data-name="extendable-dining-table">
                <span class="name">extendable dining table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-extension-cord" name="m-extension-cord">
            <label for="m-extension-cord" data-name="extension-cord">
                <span class="name">extension cord</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-face-towel" name="m-face-towel">
            <label for="m-face-towel" data-name="face-towel">
                <span class="name">face towel</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-felt-tip-pen" name="m-felt-tip-pen">
            <label for="m-felt-tip-pen" data-name="felt-tip-pen">
                <span class="name">felt-tip pen</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-fitted-sheet" name="m-fitted-sheet">
            <label for="m-fitted-sheet" data-name="fitted-sheet">
                <span class="name">fitted sheet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-floating-candle" name="m-floating-candle">
            <label for="m-floating-candle" data-name="floating-candle">
                <span class="name">floating candle</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-floor-lamp" name="m-floor-lamp">
            <label for="m-floor-lamp" data-name="floor-lamp">
                <span class="name">floor lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-floor-lamp-with-wifi-speaker" name="m-floor-lamp-with-wifi-speaker">
            <label for="m-floor-lamp-with-wifi-speaker" data-name="floor-lamp-with-wifi-speaker">
                <span class="name">floor lamp with WiFi speaker</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-floor-protector" name="m-floor-protector">
            <label for="m-floor-protector" data-name="floor-protector">
                <span class="name">floor protector</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-floor-squeegee" name="m-floor-squeegee">
            <label for="m-floor-squeegee" data-name="floor-squeegee">
                <span class="name">floor squeegee</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-flour-sifter" name="m-flour-sifter">
            <label for="m-flour-sifter" data-name="flour-sifter">
                <span class="name">flour sifter</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-folding-kitchen-table" name="m-folding-kitchen-table">
            <label for="m-folding-kitchen-table" data-name="folding-kitchen-table">
                <span class="name">folding kitchen table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-food-storage-container" name="m-food-storage-container">
            <label for="m-food-storage-container" data-name="food-storage-container">
                <span class="name">food storage container</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-food-vacuum-flask" name="m-food-vacuum-flask">
            <label for="m-food-vacuum-flask" data-name="food-vacuum-flask">
                <span class="name">food vacuum flask</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-foot-towel" name="m-foot-towel">
            <label for="m-foot-towel" data-name="foot-towel">
                <span class="name">foot towel</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-french-press" name="m-french-press">
            <label for="m-french-press" data-name="french-press">
                <span class="name">french press</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-frying-pan" name="m-frying-pan">
            <label for="m-frying-pan" data-name="frying-pan">
                <span class="name">frying pan</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-functional-clock" name="m-functional-clock">
            <label for="m-functional-clock" data-name="functional-clock">
                <span class="name">functional clock</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-funnel" name="m-funnel">
            <label for="m-funnel" data-name="funnel">
                <span class="name">funnel</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-gaming-chair" name="m-gaming-chair">
            <label for="m-gaming-chair" data-name="gaming-chair">
                <span class="name">gaming chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-gaming-desk" name="m-gaming-desk">
            <label for="m-gaming-desk" data-name="gaming-desk">
                <span class="name">gaming desk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-gaming-desk-and-chair" name="m-gaming-desk-and-chair">
            <label for="m-gaming-desk-and-chair" data-name="gaming-desk-and-chair">
                <span class="name">gaming desk and chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-garlic-press" name="m-garlic-press">
            <label for="m-garlic-press" data-name="garlic-press">
                <span class="name">garlic press</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-glass" name="m-glass">
            <label for="m-glass" data-name="glass">
                <span class="name">glass</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-glass-containet-set" name="m-glass-containet-set">
            <label for="m-glass-containet-set" data-name="glass-containet-set">
                <span class="name">glass containet set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-glass-door-cabinet" name="m-glass-door-cabinet">
            <label for="m-glass-door-cabinet" data-name="glass-door-cabinet">
                <span class="name">glass-door cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-grater-with-handle" name="m-grater-with-handle">
            <label for="m-grater-with-handle" data-name="grater-with-handle">
                <span class="name">grater with handle</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-handle" name="m-handle">
            <label for="m-handle" data-name="handle">
                <span class="name">handle</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-handshower" name="m-handshower">
            <label for="m-handshower" data-name="handshower">
                <span class="name">handshower</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-handwoven-door-mat" name="m-handwoven-door-mat">
            <label for="m-handwoven-door-mat" data-name="handwoven-door-mat">
                <span class="name">handwoven door mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-hanger-for-door" name="m-hanger-for-door">
            <label for="m-hanger-for-door" data-name="hanger-for-door">
                <span class="name">hanger for door</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-height-adjustable-desk" name="m-height-adjustable-desk">
            <label for="m-height-adjustable-desk" data-name="height-adjustable-desk">
                <span class="name">height adjustable desk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-height-adjustable-gaming-desk" name="m-height-adjustable-gaming-desk">
            <label for="m-height-adjustable-gaming-desk" data-name="height-adjustable-gaming-desk">
                <span class="name">height adjustable gaming desk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-high-pillow" name="m-high-pillow">
            <label for="m-high-pillow" data-name="high-pillow">
                <span class="name">high pillow</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-hook" name="m-hook">
            <label for="m-hook" data-name="hook">
                <span class="name">hook</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-hook-with-suction-cup" name="m-hook-with-suction-cup">
            <label for="m-hook-with-suction-cup" data-name="hook-with-suction-cup">
                <span class="name">hook with suction cup</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-ice-cube-tray" name="m-ice-cube-tray">
            <label for="m-ice-cube-tray" data-name="ice-cube-tray">
                <span class="name">ice cube tray</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-interior-organiser" name="m-interior-organiser">
            <label for="m-interior-organiser" data-name="interior-organiser">
                <span class="name">interior organiser</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-ironing-board" name="m-ironing-board">
            <label for="m-ironing-board" data-name="ironing-board">
                <span class="name">ironing board</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-jar-with-tap" name="m-jar-with-tap">
            <label for="m-jar-with-tap" data-name="jar-with-tap">
                <span class="name">jar with tap</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-jug" name="m-jug">
            <label for="m-jug" data-name="jug">
                <span class="name">jug</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kid-s-desk" name="m-kid-s-desk">
            <label for="m-kid-s-desk" data-name="kid-s-desk">
                <span class="name">kid's desk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kids-rug" name="m-kids-rug">
            <label for="m-kids-rug" data-name="kids-rug">
                <span class="name">kids rug</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kids-bedding-set" name="m-kids-bedding-set">
            <label for="m-kids-bedding-set" data-name="kids-bedding-set">
                <span class="name">kids' bedding set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kitchen-chair-set" name="m-kitchen-chair-set">
            <label for="m-kitchen-chair-set" data-name="kitchen-chair-set">
                <span class="name">kitchen chair set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kitchen-island" name="m-kitchen-island">
            <label for="m-kitchen-island" data-name="kitchen-island">
                <span class="name">kitchen island</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kitchen-table" name="m-kitchen-table">
            <label for="m-kitchen-table" data-name="kitchen-table">
                <span class="name">kitchen table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-kitchen-table-set" name="m-kitchen-table-set">
            <label for="m-kitchen-table-set" data-name="kitchen-table-set">
                <span class="name">kitchen table set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-knife-set" name="m-knife-set">
            <label for="m-knife-set" data-name="knife-set">
                <span class="name">knife set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-knob" name="m-knob">
            <label for="m-knob" data-name="knob">
                <span class="name">knob</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lace-pillow" name="m-lace-pillow">
            <label for="m-lace-pillow" data-name="lace-pillow">
                <span class="name">lace pillow</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lace-pillow-cover" name="m-lace-pillow-cover">
            <label for="m-lace-pillow-cover" data-name="lace-pillow-cover">
                <span class="name">lace pillow cover</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lampshade" name="m-lampshade">
            <label for="m-lampshade" data-name="lampshade">
                <span class="name">lampshade</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lantern" name="m-lantern">
            <label for="m-lantern" data-name="lantern">
                <span class="name">lantern</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-laptop-stand" name="m-laptop-stand">
            <label for="m-laptop-stand" data-name="laptop-stand">
                <span class="name">laptop stand</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-laundry-bag" name="m-laundry-bag">
            <label for="m-laundry-bag" data-name="laundry-bag">
                <span class="name">laundry bag</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-laundry-cabinet" name="m-laundry-cabinet">
            <label for="m-laundry-cabinet" data-name="laundry-cabinet">
                <span class="name">laundry cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-laundry-drying-rack" name="m-laundry-drying-rack">
            <label for="m-laundry-drying-rack" data-name="laundry-drying-rack">
                <span class="name">laundry drying rack</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lazy-susan" name="m-lazy-susan">
            <label for="m-lazy-susan" data-name="lazy-susan">
                <span class="name">lazy susan</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-leg" name="m-leg">
            <label for="m-leg" data-name="leg">
                <span class="name">leg</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lemon-squeezer" name="m-lemon-squeezer">
            <label for="m-lemon-squeezer" data-name="lemon-squeezer">
                <span class="name">lemon squeezer</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lighting-chain" name="m-lighting-chain">
            <label for="m-lighting-chain" data-name="lighting-chain">
                <span class="name">lighting chain</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lint-roller" name="m-lint-roller">
            <label for="m-lint-roller" data-name="lint-roller">
                <span class="name">lint roller</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-lunch-bag" name="m-lunch-bag">
            <label for="m-lunch-bag" data-name="lunch-bag">
                <span class="name">lunch bag</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-magnetic-knife-rack" name="m-magnetic-knife-rack">
            <label for="m-magnetic-knife-rack" data-name="magnetic-knife-rack">
                <span class="name">magnetic knife rack</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-makeup-mirror" name="m-makeup-mirror">
            <label for="m-makeup-mirror" data-name="makeup-mirror">
                <span class="name">makeup mirror</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-mandoline" name="m-mandoline">
            <label for="m-mandoline" data-name="mandoline">
                <span class="name">mandoline</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-mat" name="m-mat">
            <label for="m-mat" data-name="mat">
                <span class="name">mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-mattress-for-cot" name="m-mattress-for-cot">
            <label for="m-mattress-for-cot" data-name="mattress-for-cot">
                <span class="name">mattress for cot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-monitor-stand" name="m-monitor-stand">
            <label for="m-monitor-stand" data-name="monitor-stand">
                <span class="name">monitor stand</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-mug" name="m-mug">
            <label for="m-mug" data-name="mug">
                <span class="name">mug</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-napkin-holder" name="m-napkin-holder">
            <label for="m-napkin-holder" data-name="napkin-holder">
                <span class="name">napkin holder</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-office-chair" name="m-office-chair">
            <label for="m-office-chair" data-name="office-chair">
                <span class="name">office chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-offset-spatula" name="m-offset-spatula">
            <label for="m-offset-spatula" data-name="offset-spatula">
                <span class="name">offset spatula</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-oven-dish" name="m-oven-dish">
            <label for="m-oven-dish" data-name="oven-dish">
                <span class="name">oven dish</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-oven-glove" name="m-oven-glove">
            <label for="m-oven-glove" data-name="oven-glove">
                <span class="name">oven glove</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-oven-serving-dish" name="m-oven-serving-dish">
            <label for="m-oven-serving-dish" data-name="oven-serving-dish">
                <span class="name">oven/serving dish</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-paper-napkin" name="m-paper-napkin">
            <label for="m-paper-napkin" data-name="paper-napkin">
                <span class="name">paper napkin</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pegboard" name="m-pegboard">
            <label for="m-pegboard" data-name="pegboard">
                <span class="name">pegboard</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pendant-lamp" name="m-pendant-lamp">
            <label for="m-pendant-lamp" data-name="pendant-lamp">
                <span class="name">pendant lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pendant-lamp-shade" name="m-pendant-lamp-shade">
            <label for="m-pendant-lamp-shade" data-name="pendant-lamp-shade">
                <span class="name">pendant lamp shade</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-phone-tablet-stand" name="m-phone-tablet-stand">
            <label for="m-phone-tablet-stand" data-name="phone-tablet-stand">
                <span class="name">phone/tablet stand</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-picture" name="m-picture">
            <label for="m-picture" data-name="picture">
                <span class="name">picture</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-picture-frame-with-wifi-speaker" name="m-picture-frame-with-wifi-speaker">
            <label for="m-picture-frame-with-wifi-speaker" data-name="picture-frame-with-wifi-speaker">
                <span class="name">picture frame with WiFi speaker</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-picture-ledge" name="m-picture-ledge">
            <label for="m-picture-ledge" data-name="picture-ledge">
                <span class="name">picture ledge</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-picture-with-frame-set" name="m-picture-with-frame-set">
            <label for="m-picture-with-frame-set" data-name="picture-with-frame-set">
                <span class="name">picture with frame set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-place-mat" name="m-place-mat">
            <label for="m-place-mat" data-name="place-mat">
                <span class="name">place mat</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-plastic-chair" name="m-plastic-chair">
            <label for="m-plastic-chair" data-name="plastic-chair">
                <span class="name">plastic chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-plastic-food-container-set" name="m-plastic-food-container-set">
            <label for="m-plastic-food-container-set" data-name="plastic-food-container-set">
                <span class="name">plastic food container set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-plate-set" name="m-plate-set">
            <label for="m-plate-set" data-name="plate-set">
                <span class="name">plate set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-platter" name="m-platter">
            <label for="m-platter" data-name="platter">
                <span class="name">platter</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-play-kitchen" name="m-play-kitchen">
            <label for="m-play-kitchen" data-name="play-kitchen">
                <span class="name">play kitchen</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pot-lid" name="m-pot-lid">
            <label for="m-pot-lid" data-name="pot-lid">
                <span class="name">pot lid</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pot-lid-organiser" name="m-pot-lid-organiser">
            <label for="m-pot-lid-organiser" data-name="pot-lid-organiser">
                <span class="name">pot lid organiser</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pot-stand" name="m-pot-stand">
            <label for="m-pot-stand" data-name="pot-stand">
                <span class="name">pot stand</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-potpourri-in-a-bag" name="m-potpourri-in-a-bag">
            <label for="m-potpourri-in-a-bag" data-name="potpourri-in-a-bag">
                <span class="name">potpourri in a bag</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-pouffe-with-storage" name="m-pouffe-with-storage">
            <label for="m-pouffe-with-storage" data-name="pouffe-with-storage">
                <span class="name">pouffe with storage</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-quilt-cover-pillowcase-for-cot" name="m-quilt-cover-pillowcase-for-cot">
            <label for="m-quilt-cover-pillowcase-for-cot" data-name="quilt-cover-pillowcase-for-cot">
                <span class="name">quilt cover/pillowcase for cot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-quilt-for-cot" name="m-quilt-for-cot">
            <label for="m-quilt-for-cot" data-name="quilt-for-cot">
                <span class="name">quilt for cot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rack-with-hooks" name="m-rack-with-hooks">
            <label for="m-rack-with-hooks" data-name="rack-with-hooks">
                <span class="name">rack with hooks</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rail" name="m-rail">
            <label for="m-rail" data-name="rail">
                <span class="name">rail</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rattan-plant-pot" name="m-rattan-plant-pot">
            <label for="m-rattan-plant-pot" data-name="rattan-plant-pot">
                <span class="name">rattan plant pot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rattan-sofa" name="m-rattan-sofa">
            <label for="m-rattan-sofa" data-name="rattan-sofa">
                <span class="name">rattan sofa</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-remote-control" name="m-remote-control">
            <label for="m-remote-control" data-name="remote-control">
                <span class="name">remote control</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-remote-control-kit" name="m-remote-control-kit">
            <label for="m-remote-control-kit" data-name="remote-control-kit">
                <span class="name">remote control kit</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-resealable-bag" name="m-resealable-bag">
            <label for="m-resealable-bag" data-name="resealable-bag">
                <span class="name">resealable bag</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-reversible-bed" name="m-reversible-bed">
            <label for="m-reversible-bed" data-name="reversible-bed">
                <span class="name">reversible bed</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rocking-chair" name="m-rocking-chair">
            <label for="m-rocking-chair" data-name="rocking-chair">
                <span class="name">rocking-chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-roller-blind" name="m-roller-blind">
            <label for="m-roller-blind" data-name="roller-blind">
                <span class="name">roller blind</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-round-dining-table" name="m-round-dining-table">
            <label for="m-round-dining-table" data-name="round-dining-table">
                <span class="name">round dining table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-round-mirror" name="m-round-mirror">
            <label for="m-round-mirror" data-name="round-mirror">
                <span class="name">round mirror</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-round-tray" name="m-round-tray">
            <label for="m-round-tray" data-name="round-tray">
                <span class="name">round tray</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rug" name="m-rug">
            <label for="m-rug" data-name="rug">
                <span class="name">rug</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-rug-underlay-with-anti-slip" name="m-rug-underlay-with-anti-slip">
            <label for="m-rug-underlay-with-anti-slip" data-name="rug-underlay-with-anti-slip">
                <span class="name">rug underlay with anti-slip</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-salad-spinner" name="m-salad-spinner">
            <label for="m-salad-spinner" data-name="salad-spinner">
                <span class="name">salad spinner</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-scented-candle-in-cup" name="m-scented-candle-in-cup">
            <label for="m-scented-candle-in-cup" data-name="scented-candle-in-cup">
                <span class="name">scented candle in cup</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-scented-tealight" name="m-scented-tealight">
            <label for="m-scented-tealight" data-name="scented-tealight">
                <span class="name">scented tealight</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-sealing-clip" name="m-sealing-clip">
            <label for="m-sealing-clip" data-name="sealing-clip">
                <span class="name">sealing clip</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-serving-bowl" name="m-serving-bowl">
            <label for="m-serving-bowl" data-name="serving-bowl">
                <span class="name">serving bowl</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-set-of-kitchen-utensils" name="m-set-of-kitchen-utensils">
            <label for="m-set-of-kitchen-utensils" data-name="set-of-kitchen-utensils">
                <span class="name">set of kitchen utensils</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-set-of-serveware" name="m-set-of-serveware">
            <label for="m-set-of-serveware" data-name="set-of-serveware">
                <span class="name">set of serveware</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shoe-cabinet-storage" name="m-shoe-cabinet-storage">
            <label for="m-shoe-cabinet-storage" data-name="shoe-cabinet-storage">
                <span class="name">shoe cabinet/storage</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shoe-organiser" name="m-shoe-organiser">
            <label for="m-shoe-organiser" data-name="shoe-organiser">
                <span class="name">shoe organiser</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shoehorn" name="m-shoehorn">
            <label for="m-shoehorn" data-name="shoehorn">
                <span class="name">shoehorn</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shopping-trolley" name="m-shopping-trolley">
            <label for="m-shopping-trolley" data-name="shopping-trolley">
                <span class="name">shopping trolley</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shoulder-shaper-for-hanger" name="m-shoulder-shaper-for-hanger">
            <label for="m-shoulder-shaper-for-hanger" data-name="shoulder-shaper-for-hanger">
                <span class="name">shoulder shaper for hanger</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shower-basket" name="m-shower-basket">
            <label for="m-shower-basket" data-name="shower-basket">
                <span class="name">shower basket</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shower-curtain" name="m-shower-curtain">
            <label for="m-shower-curtain" data-name="shower-curtain">
                <span class="name">shower curtain</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-shower-hose" name="m-shower-hose">
            <label for="m-shower-hose" data-name="shower-hose">
                <span class="name">shower hose</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-side-table-on-castors" name="m-side-table-on-castors">
            <label for="m-side-table-on-castors" data-name="side-table-on-castors">
                <span class="name">side table on castors</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-single-bed-mattress" name="m-single-bed-mattress">
            <label for="m-single-bed-mattress" data-name="single-bed-mattress">
                <span class="name">single bed mattress</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-single-duvet" name="m-single-duvet">
            <label for="m-single-duvet" data-name="single-duvet">
                <span class="name">single duvet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-single-duvet-cover-sets" name="m-single-duvet-cover-sets">
            <label for="m-single-duvet-cover-sets" data-name="single-duvet-cover-sets">
                <span class="name">single duvet cover sets</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-single-bowl-insert-sink" name="m-single-bowl-insert-sink">
            <label for="m-single-bowl-insert-sink" data-name="single-bowl-insert-sink">
                <span class="name">single-bowl insert sink</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-sink-tap" name="m-sink-tap">
            <label for="m-sink-tap" data-name="sink-tap">
                <span class="name">sink tap</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-sliding-door-cabinet" name="m-sliding-door-cabinet">
            <label for="m-sliding-door-cabinet" data-name="sliding-door-cabinet">
                <span class="name">sliding door-cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-soap-dispenser" name="m-soap-dispenser">
            <label for="m-soap-dispenser" data-name="soap-dispenser">
                <span class="name">soap dispenser</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-soft-toy" name="m-soft-toy">
            <label for="m-soft-toy" data-name="soft-toy">
                <span class="name">soft toy</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-spice-jar" name="m-spice-jar">
            <label for="m-spice-jar" data-name="spice-jar">
                <span class="name">spice jar</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-spice-rack" name="m-spice-rack">
            <label for="m-spice-rack" data-name="spice-rack">
                <span class="name">spice rack</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-splatter-screen" name="m-splatter-screen">
            <label for="m-splatter-screen" data-name="splatter-screen">
                <span class="name">splatter screen</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-sponge" name="m-sponge">
            <label for="m-sponge" data-name="sponge">
                <span class="name">sponge</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-spoon-set-for-children" name="m-spoon-set-for-children">
            <label for="m-spoon-set-for-children" data-name="spoon-set-for-children">
                <span class="name">spoon set for children</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-spotlight" name="m-spotlight">
            <label for="m-spotlight" data-name="spotlight">
                <span class="name">spotlight</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-spray-bottle" name="m-spray-bottle">
            <label for="m-spray-bottle" data-name="spray-bottle">
                <span class="name">spray bottle</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-springform-pan" name="m-springform-pan">
            <label for="m-springform-pan" data-name="springform-pan">
                <span class="name">springform pan</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-squeegee" name="m-squeegee">
            <label for="m-squeegee" data-name="squeegee">
                <span class="name">squeegee</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-standing-mirror" name="m-standing-mirror">
            <label for="m-standing-mirror" data-name="standing-mirror">
                <span class="name">standing mirror</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-steak-knife-set" name="m-steak-knife-set">
            <label for="m-steak-knife-set" data-name="steak-knife-set">
                <span class="name">steak knife set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-step-stool" name="m-step-stool">
            <label for="m-step-stool" data-name="step-stool">
                <span class="name">step stool</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-stool" name="m-stool">
            <label for="m-stool" data-name="stool">
                <span class="name">stool</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-stool-side-table" name="m-stool-side-table">
            <label for="m-stool-side-table" data-name="stool-side-table">
                <span class="name">stool/side table</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-storage-combination" name="m-storage-combination">
            <label for="m-storage-combination" data-name="storage-combination">
                <span class="name">storage combination</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-storage-unit" name="m-storage-unit">
            <label for="m-storage-unit" data-name="storage-unit">
                <span class="name">storage unit</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-swivel-chair" name="m-swivel-chair">
            <label for="m-swivel-chair" data-name="swivel-chair">
                <span class="name">swivel chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-table-runner" name="m-table-runner">
            <label for="m-table-runner" data-name="table-runner">
                <span class="name">table-runner</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-teapot" name="m-teapot">
            <label for="m-teapot" data-name="teapot">
                <span class="name">teapot</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-teflon-sauce-pan-set" name="m-teflon-sauce-pan-set">
            <label for="m-teflon-sauce-pan-set" data-name="teflon-sauce-pan-set">
                <span class="name">teflon sauce pan set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-throw" name="m-throw">
            <label for="m-throw" data-name="throw">
                <span class="name">throw</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-toilet-brush" name="m-toilet-brush">
            <label for="m-toilet-brush" data-name="toilet-brush">
                <span class="name">toilet brush</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-toilet-seat-adapter" name="m-toilet-seat-adapter">
            <label for="m-toilet-seat-adapter" data-name="toilet-seat-adapter">
                <span class="name">toilet seat adapter</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-toiletry-bag" name="m-toiletry-bag">
            <label for="m-toiletry-bag" data-name="toiletry-bag">
                <span class="name">toiletry bag</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-toothbrush-holder" name="m-toothbrush-holder">
            <label for="m-toothbrush-holder" data-name="toothbrush-holder">
                <span class="name">toothbrush holder</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-towel-rail" name="m-towel-rail">
            <label for="m-towel-rail" data-name="towel-rail">
                <span class="name">towel rail</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-train-set" name="m-train-set">
            <label for="m-train-set" data-name="train-set">
                <span class="name">train set</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-tray" name="m-tray">
            <label for="m-tray" data-name="tray">
                <span class="name">tray</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-trolley" name="m-trolley">
            <label for="m-trolley" data-name="trolley">
                <span class="name">trolley</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-tv-bench" name="m-tv-bench">
            <label for="m-tv-bench" data-name="tv-bench">
                <span class="name">tv bench</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-umbrella" name="m-umbrella">
            <label for="m-umbrella" data-name="umbrella">
                <span class="name">umbrella</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-unscented-tealight" name="m-unscented-tealight">
            <label for="m-unscented-tealight" data-name="unscented-tealight">
                <span class="name">unscented tealight</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-upholstered-chair" name="m-upholstered-chair">
            <label for="m-upholstered-chair" data-name="upholstered-chair">
                <span class="name">upholstered chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-upholstered-wooden-chair" name="m-upholstered-wooden-chair">
            <label for="m-upholstered-wooden-chair" data-name="upholstered-wooden-chair">
                <span class="name">upholstered wooden chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-vacuum-flask" name="m-vacuum-flask">
            <label for="m-vacuum-flask" data-name="vacuum-flask">
                <span class="name">vacuum flask</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-vase" name="m-vase">
            <label for="m-vase" data-name="vase">
                <span class="name">vase</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-vegetable-steamer" name="m-vegetable-steamer">
            <label for="m-vegetable-steamer" data-name="vegetable-steamer">
                <span class="name">vegetable steamer</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-cabinet" name="m-wall-cabinet">
            <label for="m-wall-cabinet" data-name="wall-cabinet">
                <span class="name">wall cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-clock" name="m-wall-clock">
            <label for="m-wall-clock" data-name="wall-clock">
                <span class="name">wall clock</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-decoration" name="m-wall-decoration">
            <label for="m-wall-decoration" data-name="wall-decoration">
                <span class="name">wall decoration</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-lamp" name="m-wall-lamp">
            <label for="m-wall-lamp" data-name="wall-lamp">
                <span class="name">wall lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-mirror" name="m-wall-mirror">
            <label for="m-wall-mirror" data-name="wall-mirror">
                <span class="name">wall mirror</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-rail" name="m-wall-rail">
            <label for="m-wall-rail" data-name="wall-rail">
                <span class="name">wall rail</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-shelf" name="m-wall-shelf">
            <label for="m-wall-shelf" data-name="wall-shelf">
                <span class="name">wall shelf</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-shelf-piece" name="m-wall-shelf-piece">
            <label for="m-wall-shelf-piece" data-name="wall-shelf-piece">
                <span class="name">wall shelf piece</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-shelf-with-drawers" name="m-wall-shelf-with-drawers">
            <label for="m-wall-shelf-with-drawers" data-name="wall-shelf-with-drawers">
                <span class="name">wall shelf with drawers</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-shelf-with-suction-cup" name="m-wall-shelf-with-suction-cup">
            <label for="m-wall-shelf-with-suction-cup" data-name="wall-shelf-with-suction-cup">
                <span class="name">wall shelf with suction cup</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wall-shelf-without-leg" name="m-wall-shelf-without-leg">
            <label for="m-wall-shelf-without-leg" data-name="wall-shelf-without-leg">
                <span class="name">wall shelf without leg</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wardrobe" name="m-wardrobe">
            <label for="m-wardrobe" data-name="wardrobe">
                <span class="name">wardrobe</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wash-basin" name="m-wash-basin">
            <label for="m-wash-basin" data-name="wash-basin">
                <span class="name">wash-basin</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wash-basin-cabinet" name="m-wash-basin-cabinet">
            <label for="m-wash-basin-cabinet" data-name="wash-basin-cabinet">
                <span class="name">wash-basin cabinet</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-waste-bin" name="m-waste-bin">
            <label for="m-waste-bin" data-name="waste-bin">
                <span class="name">waste bin</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-water-trap-strainer-1-bowl" name="m-water-trap-strainer-1-bowl">
            <label for="m-water-trap-strainer-1-bowl" data-name="water-trap-strainer-1-bowl">
                <span class="name">water trap/strainer 1 bowl</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-water-trap-strainer-2-bowls" name="m-water-trap-strainer-2-bowls">
            <label for="m-water-trap-strainer-2-bowls" data-name="water-trap-strainer-2-bowls">
                <span class="name">water trap/strainer 2 bowls</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-watering-can" name="m-watering-can">
            <label for="m-watering-can" data-name="watering-can">
                <span class="name">watering can</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-waterproof-mattress-protector" name="m-waterproof-mattress-protector">
            <label for="m-waterproof-mattress-protector" data-name="waterproof-mattress-protector">
                <span class="name">waterproof mattress protector</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-whisk" name="m-whisk">
            <label for="m-whisk" data-name="whisk">
                <span class="name">whisk</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-whiskey-glass" name="m-whiskey-glass">
            <label for="m-whiskey-glass" data-name="whiskey-glass">
                <span class="name">whiskey glass</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-white-frame" name="m-white-frame">
            <label for="m-white-frame" data-name="white-frame">
                <span class="name">white frame</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wooden-chair" name="m-wooden-chair">
            <label for="m-wooden-chair" data-name="wooden-chair">
                <span class="name">wooden chair</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-wooden-stool" name="m-wooden-stool">
            <label for="m-wooden-stool" data-name="wooden-stool">
                <span class="name">wooden stool</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-work-lamp" name="m-work-lamp">
            <label for="m-work-lamp" data-name="work-lamp">
                <span class="name">work lamp</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-worktop" name="m-worktop">
            <label for="m-worktop" data-name="worktop">
                <span class="name">worktop</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
                
        <div>
            <input type="checkbox" id="m-writing-board" name="m-writing-board">
            <label for="m-writing-board" data-name="writing-board">
                <span class="name">writing board</span>
                
                    <span class="count mr-0">1</span>
                
            </label>
        </div>

    
</div><a href="javascript:;" class="more-btn"><span>+ 295 More</span> <span class="hidden">Show less</span></a>
                </div>
            </div>

            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
                    <span class="modal-accordion-header-title">Category</span>
                    <span class="modal-accordion-header-sub-title"></span>
                </div>
                <div class="modal-accordion-content">
                    <div class="filter-content category-filter">

                        <div class="filter-category-list-item">
                            <ul>
    
                
        <li>
            <div class="filter-category-item">
                <span data-id="furniture" class="name">Furniture</span>
                
                    <span class="count mr-0">112</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="cookware-and-tableware" class="name">Cookware And Tableware</span>
                
                    <span class="count mr-0">98</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="accessories" class="name">Accessories</span>
                
                    <span class="count mr-0">81</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="storage-and-organisation" class="name">Storage and Organisation</span>
                
                    <span class="count mr-0">65</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="hallway-and-storage-solutions" class="name">Hallway and Storage Solutions</span>
                
                    <span class="count mr-0">50</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="bathroom-products" class="name">Bathroom Products</span>
                
                    <span class="count mr-0">45</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="home-decoration" class="name">Home Decoration</span>
                
                    <span class="count mr-0">42</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="home-organisation" class="name">Home Organisation</span>
                
                    <span class="count mr-0">32</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="home-textile" class="name">Home Textile</span>
                
                    <span class="count mr-0">32</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="bedroom-furniture" class="name">Bedroom Furniture</span>
                
                    <span class="count mr-0">30</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="everyday-essentials" class="name">Everyday Essentials</span>
                
                    <span class="count mr-0">30</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="dining-room-furnitures" class="name">Dining Room Furnitures</span>
                
                    <span class="count mr-0">30</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="working-spaces" class="name">Working Spaces</span>
                
                    <span class="count mr-0">29</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="baby-and-children-products" class="name">Baby and Children Products</span>
                
                    <span class="count mr-0">29</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="home-office" class="name">Home Office</span>
                
                    <span class="count mr-0">28</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="lighting" class="name">Lighting</span>
                
                    <span class="count mr-0">21</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="outdoor-products" class="name">Outdoor Products</span>
                
                    <span class="count mr-0">14</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="bookcases-and-shelves" class="name">Bookcases and Shelves</span>
                
                    <span class="count mr-0">10</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="mattresses-and-beds" class="name">Mattresses and Beds</span>
                
                    <span class="count mr-0">7</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="shelves" class="name">Shelves</span>
                
                    <span class="count mr-0">6</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="gaming-lights" class="name">Gaming Lights</span>
                
                    <span class="count mr-0">4</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="pet-products" class="name">Pet Products</span>
                
                    <span class="count mr-0">2</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="gaming-accessories" class="name">Gaming Accessories</span>
                
                    <span class="count mr-0">2</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="living-room-rugs" class="name">Living Room Rugs</span>
                
                    <span class="count mr-0">1</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="file-racks" class="name">File Racks</span>
                
                    <span class="count mr-0">1</span>
                
            </div>
        </li>

    
                
        <li>
            <div class="filter-category-item">
                <span data-id="gaming-desk-chair-sets" class="name">Gaming Desk &amp; Chair Sets</span>
                
                    <span class="count mr-0">1</span>
                
            </div>
        </li>

            
</ul>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal-accordion-box">
                <div class="modal-accordion-header">
                    <span class="modal-accordion-header-title">Price</span>
                    <span class="modal-accordion-header-sub-title"></span>
                </div>
                <div class="modal-accordion-content">
                    <div class="filter-content price-filter">
                        <div class="price-box">
                            <div class="price-input">
                                <input name="LastPriceFrom" type="text" id="LastPriceFrom" class="form-control only-number" maxlength="6" data-name="LastPriceFrom">
                                <input name="LastPriceTo" type="text" id="LastPriceTo" class="form-control only-number" maxlength="6" data-name="LastPriceTo">
                            </div>
                            <div class="price-btn">
                                <a class="btn btn-default btn-sm filter_btn">Filter</a>
                                <a class="btn btn-default btn-sm filter_price_clear">Clear</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Size</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="size">
                <div class="filter-content size-filter">
                    
                        <div class="filter-content-search size">
                        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                            <i class="icon-search-new"></i>
                            
                                <input type="text" placeholder="Search" class="filter-content-search-inp">
                                <div class="no-result d-none">
                                    <p>
                                        <span>There are no results for </span>
                                        <span class="search-key"></span>
                                    </p>
                                </div>
                            
                        </div>
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-size.160x200-cm" name="m-size.160x200-cm">
                            <label for="m-size.160x200-cm" data-name="size.160x200-cm">
                                
                                <span class="name">160x200 cm</span>
                                <span class="count mr-0">4</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.17-cm" name="m-size.17-cm">
                            <label for="m-size.17-cm" data-name="size.17-cm">
                                
                                <span class="name">17 cm</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.25-cm" name="m-size.25-cm">
                            <label for="m-size.25-cm" data-name="size.25-cm">
                                
                                <span class="name">25 cm</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.28-cm" name="m-size.28-cm">
                            <label for="m-size.28-cm" data-name="size.28-cm">
                                
                                <span class="name">28 cm</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.60x120-cm" name="m-size.60x120-cm">
                            <label for="m-size.60x120-cm" data-name="size.60x120-cm">
                                
                                <span class="name">60x120 cm</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.10-cm" name="m-size.10-cm">
                            <label for="m-size.10-cm" data-name="size.10-cm">
                                
                                <span class="name">10 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.119x29-cm" name="m-size.119x29-cm">
                            <label for="m-size.119x29-cm" data-name="size.119x29-cm">
                                
                                <span class="name">119x29 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.13-cm" name="m-size.13-cm">
                            <label for="m-size.13-cm" data-name="size.13-cm">
                                
                                <span class="name">13 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.15-cm" name="m-size.15-cm">
                            <label for="m-size.15-cm" data-name="size.15-cm">
                                
                                <span class="name">15 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.150x200-50x60-cm" name="m-size.150x200-50x60-cm">
                            <label for="m-size.150x200-50x60-cm" data-name="size.150x200-50x60-cm">
                                
                                <span class="name">150x200/50x60 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.16-cm" name="m-size.16-cm">
                            <label for="m-size.16-cm" data-name="size.16-cm">
                                
                                <span class="name">16 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.26-cm" name="m-size.26-cm">
                            <label for="m-size.26-cm" data-name="size.26-cm">
                                
                                <span class="name">26 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.33-cm" name="m-size.33-cm">
                            <label for="m-size.33-cm" data-name="size.33-cm">
                                
                                <span class="name">33 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.50x80-cm" name="m-size.50x80-cm">
                            <label for="m-size.50x80-cm" data-name="size.50x80-cm">
                                
                                <span class="name">50x80 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.60-cm" name="m-size.60-cm">
                            <label for="m-size.60-cm" data-name="size.60-cm">
                                
                                <span class="name">60 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.70x90-cm" name="m-size.70x90-cm">
                            <label for="m-size.70x90-cm" data-name="size.70x90-cm">
                                
                                <span class="name">70x90 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.8-cm" name="m-size.8-cm">
                            <label for="m-size.8-cm" data-name="size.8-cm">
                                
                                <span class="name">8 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.80x200-cm" name="m-size.80x200-cm">
                            <label for="m-size.80x200-cm" data-name="size.80x200-cm">
                                
                                <span class="name">80x200 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.9-cm" name="m-size.9-cm">
                            <label for="m-size.9-cm" data-name="size.9-cm">
                                
                                <span class="name">9 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.90x200-cm" name="m-size.90x200-cm">
                            <label for="m-size.90x200-cm" data-name="size.90x200-cm">
                                
                                <span class="name">90x200 cm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.0-3-l" name="m-size.0-3-l">
                            <label for="m-size.0-3-l" data-name="size.0-3-l">
                                
                                <span class="name">0.3 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.10-g" name="m-size.10-g">
                            <label for="m-size.10-g" data-name="size.10-g">
                                
                                <span class="name">10 g</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.10-5-cm" name="m-size.10-5-cm">
                            <label for="m-size.10-5-cm" data-name="size.10-5-cm">
                                
                                <span class="name">10,5 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.100-cm" name="m-size.100-cm">
                            <label for="m-size.100-cm" data-name="size.100-cm">
                                
                                <span class="name">100 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.100x150-cm" name="m-size.100x150-cm">
                            <label for="m-size.100x150-cm" data-name="size.100x150-cm">
                                
                                <span class="name">100x150 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.100x160-cm" name="m-size.100x160-cm">
                            <label for="m-size.100x160-cm" data-name="size.100x160-cm">
                                
                                <span class="name">100x160 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.100x43x90-cm" name="m-size.100x43x90-cm">
                            <label for="m-size.100x43x90-cm" data-name="size.100x43x90-cm">
                                
                                <span class="name">100x43x90 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.105x32x190-cm" name="m-size.105x32x190-cm">
                            <label for="m-size.105x32x190-cm" data-name="size.105x32x190-cm">
                                
                                <span class="name">105x32x190 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.105x50-cm" name="m-size.105x50-cm">
                            <label for="m-size.105x50-cm" data-name="size.105x50-cm">
                                
                                <span class="name">105x50 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-size.107x22x101-cm" name="m-size.107x22x101-cm">
                            <label for="m-size.107x22x101-cm" data-name="size.107x22x101-cm">
                                
                                <span class="name">107x22x101 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.10x10-cm" name="m-size.10x10-cm">
                            <label for="m-size.10x10-cm" data-name="size.10x10-cm">
                                
                                <span class="name">10x10 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.10x15x31-cm" name="m-size.10x15x31-cm">
                            <label for="m-size.10x15x31-cm" data-name="size.10x15x31-cm">
                                
                                <span class="name">10x15x31 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.10x20x5-cm" name="m-size.10x20x5-cm">
                            <label for="m-size.10x20x5-cm" data-name="size.10x20x5-cm">
                                
                                <span class="name">10x20x5 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.11-cm" name="m-size.11-cm">
                            <label for="m-size.11-cm" data-name="size.11-cm">
                                
                                <span class="name">11 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.110x125-cm" name="m-size.110x125-cm">
                            <label for="m-size.110x125-cm" data-name="size.110x125-cm">
                                
                                <span class="name">110x125 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.110x125-35x55-cm" name="m-size.110x125-35x55-cm">
                            <label for="m-size.110x125-35x55-cm" data-name="size.110x125-35x55-cm">
                                
                                <span class="name">110x125/35x55 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.110x26-cm" name="m-size.110x26-cm">
                            <label for="m-size.110x26-cm" data-name="size.110x26-cm">
                                
                                <span class="name">110x26 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.116-cm" name="m-size.116-cm">
                            <label for="m-size.116-cm" data-name="size.116-cm">
                                
                                <span class="name">116 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.117x190-cm" name="m-size.117x190-cm">
                            <label for="m-size.117x190-cm" data-name="size.117x190-cm">
                                
                                <span class="name">117x190 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120-cm" name="m-size.120-cm">
                            <label for="m-size.120-cm" data-name="size.120-cm">
                                
                                <span class="name">120 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120-210-cm-19-mm" name="m-size.120-210-cm-19-mm">
                            <label for="m-size.120-210-cm-19-mm" data-name="size.120-210-cm-19-mm">
                                
                                <span class="name">120-210 cm 19 mm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120x160-cm" name="m-size.120x160-cm">
                            <label for="m-size.120x160-cm" data-name="size.120x160-cm">
                                
                                <span class="name">120x160 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120x37-cm" name="m-size.120x37-cm">
                            <label for="m-size.120x37-cm" data-name="size.120x37-cm">
                                
                                <span class="name">120x37 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120x41-cm" name="m-size.120x41-cm">
                            <label for="m-size.120x41-cm" data-name="size.120x41-cm">
                                
                                <span class="name">120x41 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120x42x38-cm" name="m-size.120x42x38-cm">
                            <label for="m-size.120x42x38-cm" data-name="size.120x42x38-cm">
                                
                                <span class="name">120x42x38 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.120x42x65-cm" name="m-size.120x42x65-cm">
                            <label for="m-size.120x42x65-cm" data-name="size.120x42x65-cm">
                                
                                <span class="name">120x42x65 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.126x77-cm" name="m-size.126x77-cm">
                            <label for="m-size.126x77-cm" data-name="size.126x77-cm">
                                
                                <span class="name">126x77 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.12x10-cm" name="m-size.12x10-cm">
                            <label for="m-size.12x10-cm" data-name="size.12x10-cm">
                                
                                <span class="name">12x10 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.130x170-cm" name="m-size.130x170-cm">
                            <label for="m-size.130x170-cm" data-name="size.130x170-cm">
                                
                                <span class="name">130x170 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
                        <div>
                            <input type="checkbox" id="m-size.13x18-cm" name="m-size.13x18-cm">
                            <label for="m-size.13x18-cm" data-name="size.13x18-cm">
                                
                                <span class="name">13x18 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div><a href="javascript:;" class="more-btn"><span>+ 20 More</span> <span class="hidden">Show less</span></a>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Bed Firmness</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="bed-firmness">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-bed-firmness.firm" name="m-bed-firmness.firm">
                            <label for="m-bed-firmness.firm" data-name="bed-firmness.firm">
                                
                                <span class="name">firm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Burning Time</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="burning-time">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-burning-time.4-hr" name="m-burning-time.4-hr">
                            <label for="m-burning-time.4-hr" data-name="burning-time.4-hr">
                                
                                <span class="name">4 hr</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-burning-time.20-hr" name="m-burning-time.20-hr">
                            <label for="m-burning-time.20-hr" data-name="burning-time.20-hr">
                                
                                <span class="name">20 hr</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-burning-time.3-5-hr" name="m-burning-time.3-5-hr">
                            <label for="m-burning-time.3-5-hr" data-name="burning-time.3-5-hr">
                                
                                <span class="name">3.5 hr</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-burning-time.40-hr" name="m-burning-time.40-hr">
                            <label for="m-burning-time.40-hr" data-name="burning-time.40-hr">
                                
                                <span class="name">40 hr</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Cushion</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="cushion">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-cushion.with-djupvik-cushion" name="m-cushion.with-djupvik-cushion">
                            <label for="m-cushion.with-djupvik-cushion" data-name="cushion.with-djupvik-cushion">
                                
                                <span class="name">with DJUPVIK cushion</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Frame Colour</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="frame-colour">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-frame-colour.black" name="m-frame-colour.black">
                            <label for="m-frame-colour.black" data-name="frame-colour.black">
                                
                                <span class="name">black</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Info</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="info">
                <div class="filter-content size-filter">
                    
                        <div class="filter-content-search size">
                        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                            <i class="icon-search-new"></i>
                            
                                <input type="text" placeholder="Search" class="filter-content-search-inp">
                                <div class="no-result d-none">
                                    <p>
                                        <span>There are no results for </span>
                                        <span class="search-key"></span>
                                    </p>
                                </div>
                            
                        </div>
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-info.extendable" name="m-info.extendable">
                            <label for="m-info.extendable" data-name="info.extendable">
                                
                                <span class="name">extendable</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.warm" name="m-info.warm">
                            <label for="m-info.warm" data-name="info.warm">
                                
                                <span class="name">warm</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.drop-leaf" name="m-info.drop-leaf">
                            <label for="m-info.drop-leaf" data-name="info.drop-leaf">
                                
                                <span class="name">drop-leaf</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.3-way-socket" name="m-info.3-way-socket">
                            <label for="m-info.3-way-socket" data-name="info.3-way-socket">
                                
                                <span class="name">3 way socket</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.4-compartments" name="m-info.4-compartments">
                            <label for="m-info.4-compartments" data-name="info.4-compartments">
                                
                                <span class="name">4 compartments</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.4-spots" name="m-info.4-spots">
                            <label for="m-info.4-spots" data-name="info.4-spots">
                                
                                <span class="name">4 spots</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.40-lights" name="m-info.40-lights">
                            <label for="m-info.40-lights" data-name="info.40-lights">
                                
                                <span class="name">40 lights</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.5-pack" name="m-info.5-pack">
                            <label for="m-info.5-pack" data-name="info.5-pack">
                                
                                <span class="name">5 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.lappviken" name="m-info.lappviken">
                            <label for="m-info.lappviken" data-name="info.lappviken">
                                
                                <span class="name">LAPPVIKEN</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.led" name="m-info.led">
                            <label for="m-info.led" data-name="info.led">
                                
                                <span class="name">LED</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.dual" name="m-info.dual">
                            <label for="m-info.dual" data-name="info.dual">
                                
                                <span class="name">dual</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.handmade" name="m-info.handmade">
                            <label for="m-info.handmade" data-name="info.handmade">
                                
                                <span class="name">handmade</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.light-proof" name="m-info.light-proof">
                            <label for="m-info.light-proof" data-name="info.light-proof">
                                
                                <span class="name">light proof</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.multi-position" name="m-info.multi-position">
                            <label for="m-info.multi-position" data-name="info.multi-position">
                                
                                <span class="name">multi position</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.square" name="m-info.square">
                            <label for="m-info.square" data-name="info.square">
                                
                                <span class="name">square</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.wireless-dimmable" name="m-info.wireless-dimmable">
                            <label for="m-info.wireless-dimmable" data-name="info.wireless-dimmable">
                                
                                <span class="name">wireless dimmable</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.with-castors" name="m-info.with-castors">
                            <label for="m-info.with-castors" data-name="info.with-castors">
                                
                                <span class="name">with castors</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.with-shelf-unit" name="m-info.with-shelf-unit">
                            <label for="m-info.with-shelf-unit" data-name="info.with-shelf-unit">
                                
                                <span class="name">with shelf unit</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.with-two-mirror-doors" name="m-info.with-two-mirror-doors">
                            <label for="m-info.with-two-mirror-doors" data-name="info.with-two-mirror-doors">
                                
                                <span class="name">with two mirror doors</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.without-drawer" name="m-info.without-drawer">
                            <label for="m-info.without-drawer" data-name="info.without-drawer">
                                
                                <span class="name">without drawer</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.in-outdoor" name="m-info.in-outdoor">
                            <label for="m-info.in-outdoor" data-name="info.in-outdoor">
                                
                                <span class="name">in/outdoor</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-info.with-battery" name="m-info.with-battery">
                            <label for="m-info.with-battery" data-name="info.with-battery">
                                
                                <span class="name">with battery</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Leg</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="leg">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-leg.selsviken" name="m-leg.selsviken">
                            <label for="m-leg.selsviken" data-name="leg.selsviken">
                                
                                <span class="name">SELSVIKEN</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Motif</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="motif">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-motif.blue-landscape" name="m-motif.blue-landscape">
                            <label for="m-motif.blue-landscape" data-name="motif.blue-landscape">
                                
                                <span class="name">blue landscape</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-motif.garden" name="m-motif.garden">
                            <label for="m-motif.garden" data-name="motif.garden">
                                
                                <span class="name">garden</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">number of functions</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="number-of-functions">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-functions.5-spray-handshower" name="m-number-of-functions.5-spray-handshower">
                            <label for="m-number-of-functions.5-spray-handshower" data-name="number-of-functions.5-spray-handshower">
                                
                                <span class="name">5-spray handshower</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Number of Seats</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="number-of-seats">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.4-chairs" name="m-number-of-seats.4-chairs">
                            <label for="m-number-of-seats.4-chairs" data-name="number-of-seats.4-chairs">
                                
                                <span class="name">4 chairs</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.4-pack" name="m-number-of-seats.4-pack">
                            <label for="m-number-of-seats.4-pack" data-name="number-of-seats.4-pack">
                                
                                <span class="name">4 pack</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.seats-4" name="m-number-of-seats.seats-4">
                            <label for="m-number-of-seats.seats-4" data-name="number-of-seats.seats-4">
                                
                                <span class="name">seats 4</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.seats-4-6" name="m-number-of-seats.seats-4-6">
                            <label for="m-number-of-seats.seats-4-6" data-name="number-of-seats.seats-4-6">
                                
                                <span class="name">seats 4-6</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.4-stools" name="m-number-of-seats.4-stools">
                            <label for="m-number-of-seats.4-stools" data-name="number-of-seats.4-stools">
                                
                                <span class="name">4 stools</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.seats-2-4" name="m-number-of-seats.seats-2-4">
                            <label for="m-number-of-seats.seats-2-4" data-name="number-of-seats.seats-2-4">
                                
                                <span class="name">seats 2-4</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-number-of-seats.seats-6-8" name="m-number-of-seats.seats-6-8">
                            <label for="m-number-of-seats.seats-6-8" data-name="number-of-seats.seats-6-8">
                                
                                <span class="name">seats 6-8</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Package Quantity</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="package-quantity">
                <div class="filter-content size-filter">
                    
                        <div class="filter-content-search size">
                        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                            <i class="icon-search-new"></i>
                            
                                <input type="text" placeholder="Search" class="filter-content-search-inp">
                                <div class="no-result d-none">
                                    <p>
                                        <span>There are no results for </span>
                                        <span class="search-key"></span>
                                    </p>
                                </div>
                            
                        </div>
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.2-pack" name="m-package-quantity.2-pack">
                            <label for="m-package-quantity.2-pack" data-name="package-quantity.2-pack">
                                
                                <span class="name">2 pack</span>
                                <span class="count mr-0">8</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.3-piece" name="m-package-quantity.3-piece">
                            <label for="m-package-quantity.3-piece" data-name="package-quantity.3-piece">
                                
                                <span class="name">3 piece</span>
                                <span class="count mr-0">7</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.2-piece" name="m-package-quantity.2-piece">
                            <label for="m-package-quantity.2-piece" data-name="package-quantity.2-piece">
                                
                                <span class="name">2 piece</span>
                                <span class="count mr-0">6</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.3-pack" name="m-package-quantity.3-pack">
                            <label for="m-package-quantity.3-pack" data-name="package-quantity.3-pack">
                                
                                <span class="name">3 pack</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.4-pack" name="m-package-quantity.4-pack">
                            <label for="m-package-quantity.4-pack" data-name="package-quantity.4-pack">
                                
                                <span class="name">4 pack</span>
                                <span class="count mr-0">3</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.24-pack" name="m-package-quantity.24-pack">
                            <label for="m-package-quantity.24-pack" data-name="package-quantity.24-pack">
                                
                                <span class="name">24 pack</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.5-piece" name="m-package-quantity.5-piece">
                            <label for="m-package-quantity.5-piece" data-name="package-quantity.5-piece">
                                
                                <span class="name">5 piece</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.8-pack" name="m-package-quantity.8-pack">
                            <label for="m-package-quantity.8-pack" data-name="package-quantity.8-pack">
                                
                                <span class="name">8 pack</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.100-pack" name="m-package-quantity.100-pack">
                            <label for="m-package-quantity.100-pack" data-name="package-quantity.100-pack">
                                
                                <span class="name">100 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.18-piece" name="m-package-quantity.18-piece">
                            <label for="m-package-quantity.18-piece" data-name="package-quantity.18-piece">
                                
                                <span class="name">18 piece</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.20-pack" name="m-package-quantity.20-pack">
                            <label for="m-package-quantity.20-pack" data-name="package-quantity.20-pack">
                                
                                <span class="name">20 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.24-piece" name="m-package-quantity.24-piece">
                            <label for="m-package-quantity.24-piece" data-name="package-quantity.24-piece">
                                
                                <span class="name">24 piece</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.25-pack" name="m-package-quantity.25-pack">
                            <label for="m-package-quantity.25-pack" data-name="package-quantity.25-pack">
                                
                                <span class="name">25 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.26-piece" name="m-package-quantity.26-piece">
                            <label for="m-package-quantity.26-piece" data-name="package-quantity.26-piece">
                                
                                <span class="name">26 piece</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.45-piece" name="m-package-quantity.45-piece">
                            <label for="m-package-quantity.45-piece" data-name="package-quantity.45-piece">
                                
                                <span class="name">45 piece</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.5-pack" name="m-package-quantity.5-pack">
                            <label for="m-package-quantity.5-pack" data-name="package-quantity.5-pack">
                                
                                <span class="name">5 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.50-pack" name="m-package-quantity.50-pack">
                            <label for="m-package-quantity.50-pack" data-name="package-quantity.50-pack">
                                
                                <span class="name">50 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.6-piece" name="m-package-quantity.6-piece">
                            <label for="m-package-quantity.6-piece" data-name="package-quantity.6-piece">
                                
                                <span class="name">6 piece</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.9-pack" name="m-package-quantity.9-pack">
                            <label for="m-package-quantity.9-pack" data-name="package-quantity.9-pack">
                                
                                <span class="name">9 pack</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-package-quantity.set-of-3" name="m-package-quantity.set-of-3">
                            <label for="m-package-quantity.set-of-3" data-name="package-quantity.set-of-3">
                                
                                <span class="name">set of 3</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Plant Type</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="plant-type">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-plant-type.eucalyptus" name="m-plant-type.eucalyptus">
                            <label for="m-plant-type.eucalyptus" data-name="plant-type.eucalyptus">
                                
                                <span class="name">eucalyptus</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Scent</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="scent">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-scent.vanilla" name="m-scent.vanilla">
                            <label for="m-scent.vanilla" data-name="scent.vanilla">
                                
                                <span class="name">vanilla</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Storage Type</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="storage-type">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-storage-type.with-base" name="m-storage-type.with-base">
                            <label for="m-storage-type.with-base" data-name="storage-type.with-base">
                                
                                <span class="name">with base</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Thickness</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="thickness">
                <div class="filter-content size-filter">
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-thickness.11-cm" name="m-thickness.11-cm">
                            <label for="m-thickness.11-cm" data-name="thickness.11-cm">
                                
                                <span class="name">11 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
        <div class="modal-accordion-box variations">
            <div class="modal-accordion-header active">
                <span class="modal-accordion-header-title">Volume</span>
                <span class="modal-accordion-header-sub-title"></span>
            </div>
            <div class="modal-accordion-content" id="volume">
                <div class="filter-content size-filter">
                    
                        <div class="filter-content-search size">
                        <a href="javascript:;" class="icon-close-pure search-close d-none"></a>
                            <i class="icon-search-new"></i>
                            
                                <input type="text" placeholder="Search" class="filter-content-search-inp">
                                <div class="no-result d-none">
                                    <p>
                                        <span>There are no results for </span>
                                        <span class="search-key"></span>
                                    </p>
                                </div>
                            
                        </div>
                    

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.1-l" name="m-volume.1-l">
                            <label for="m-volume.1-l" data-name="volume.1-l">
                                
                                <span class="name">1 l</span>
                                <span class="count mr-0">2</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.0-4-l" name="m-volume.0-4-l">
                            <label for="m-volume.0-4-l" data-name="volume.0-4-l">
                                
                                <span class="name">0,4 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.0-5-l" name="m-volume.0-5-l">
                            <label for="m-volume.0-5-l" data-name="volume.0-5-l">
                                
                                <span class="name">0,5 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.0-6-l" name="m-volume.0-6-l">
                            <label for="m-volume.0-6-l" data-name="volume.0-6-l">
                                
                                <span class="name">0,6 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.0-9-l" name="m-volume.0-9-l">
                            <label for="m-volume.0-9-l" data-name="volume.0-9-l">
                                
                                <span class="name">0.9 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.1-5-l" name="m-volume.1-5-l">
                            <label for="m-volume.1-5-l" data-name="volume.1-5-l">
                                
                                <span class="name">1,5 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.2-2-l" name="m-volume.2-2-l">
                            <label for="m-volume.2-2-l" data-name="volume.2-2-l">
                                
                                <span class="name">2,2 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.2-3-l-x-3-7-l" name="m-volume.2-3-l-x-3-7-l">
                            <label for="m-volume.2-3-l-x-3-7-l" data-name="volume.2-3-l-x-3-7-l">
                                
                                <span class="name">2,3 l x 3,7 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.2-5-l-and-1-2-l" name="m-volume.2-5-l-and-1-2-l">
                            <label for="m-volume.2-5-l-and-1-2-l" data-name="volume.2-5-l-and-1-2-l">
                                
                                <span class="name">2,5 l and 1,2 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.24-cm" name="m-volume.24-cm">
                            <label for="m-volume.24-cm" data-name="volume.24-cm">
                                
                                <span class="name">24 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.34x23-cm" name="m-volume.34x23-cm">
                            <label for="m-volume.34x23-cm" data-name="volume.34x23-cm">
                                
                                <span class="name">34x23 cm</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.35-cl" name="m-volume.35-cl">
                            <label for="m-volume.35-cl" data-name="volume.35-cl">
                                
                                <span class="name">35 cl</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.4-l" name="m-volume.4-l">
                            <label for="m-volume.4-l" data-name="volume.4-l">
                                
                                <span class="name">4 l</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                    
                    
    <div>
                            <input type="checkbox" id="m-volume.45-cl" name="m-volume.45-cl">
                            <label for="m-volume.45-cl" data-name="volume.45-cl">
                                
                                <span class="name">45 cl</span>
                                <span class="count mr-0">1</span>
                            </label>
                        </div>

                        
                </div>

            </div>
        </div>
    
</div>
    </div>
    <div class="global-modal-footer">
        <div class="row">
            <div class="col-xs-6">
                <a href="javascript:;" class="btn btn-outline-black clear-filter disabled">Clear all filters</a>
            </div>
            <div class="col-xs-6">
                <a href="javascript:;" class="btn btn-black view-btn">Show</a>
            </div>
        </div>

    </div>
</div>

<div class="global-modal-box shopping-stock-status-modal" id="shopping-stock-status-modal">
    <div class="global-modal-header shopping-stock-status-modal-header">
        <a href="javascript:;" class="icon-close-pure"></a>
        <div class="shopping-stock-status-modal-title">
            <img src="./Best Sellers _ IKEA_files/message-box.png" alt="IKEA Contact"/>
            <p class="stock-modal-title">STOCK NOTIFY</p>
        </div>
    </div>

    <div class="global-modal-footer">
    </div>
</div>

<script type="text/template" class="productListTemplate">
    { _.each(rc, function(item, key, list){ }
        { var price = item.formattedPrice }
        { var dWidth = $(window).outerWidth() }
        { var wImageCondition = item.wideImage && item.wideImage !== '' && dWidth > 1199 }

        <div class="{ if(wImageCondition) { }col-lg-6 wideImageCol{ } else { }col-lg-3{ } } col-sm-4 col-xs-6">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="product-item-img-box">
                        <a href="{= item.url }" class="product-item-img active product-link" target="_blank">
                            <img src="{=item.customLogoUrl}" class="custom-logo"
                             alt="{ if(item.customLogoImageAlt) { }IKEA - {=item.customLogoImageAlt }{ } }"/>
                            <img src="{ if(wImageCondition) { }{=item.wideImage}{ } else { }{=item.images[0].image}{ } }" alt="IKEA - {= item.imageAlt }">
                            { if(item.images[1] != undefined && dWidth > 1199 && !item.wideImage){ }
                                <span class="img-hover">
                                    <img src="{=item.images[1].image }" alt="IKEA - {= item.imageAlt }"/>                               
                                </span>
                            { } }
                        </a>
                    </div>
                    <div class="product-item-text">
                        <a href="{= item.url }" class="product-link" target="_blank">
                            <span class="is-logo">
                                <img src="{=item.logoUrl }" />
                            </span>
                                { if(item.stats != undefined && item.stats != null) {}
                                    <span class="title" data-stats="{= item.stats.TotalScore }/{= item.stats.Ranking }">
                                    {=item.title } {= item.stats.TotalScore }/{= item.stats.Ranking }
                                    </span>
                                {}else{}
                                <span class="title">{=item.title } 
                                </span>
                                {}}
                            <span class="desc">{=item.subTitle }</span>
                            <span class="unit-color d-none">{=item.unitColorName }</span>
                        </a>
                    </div>
                    <div class="product-item-bottom">
                        <div class="product-item-price { if(item.isBti){  }price-content-bti{ } }">
                            <a href="{= item.url }" class="product-link" target="_blank">
                                <div className="mt-5">
                                    <span class="cross-price">{ if(item.formattedCrossPrice) { }{= IkeaResources.Global.PriceDisplayFormat.format(item.formattedCrossPrice) }{ } }</span>
                                    { if(item.isBti){  }
                                    <span class="product-price bti-price">
                                        <span>{= IkeaResources.Global.PriceDisplayFormat.format(price) }</span>
                                    </span>
                                    { }else{ }
                                    <span class="price">{= IkeaResources.Global.PriceDisplayFormat.format(price) }</span>
                                    { } }
                                </div>
                            </a>
                            { if(item.energyIcon) {}
                                <div class="energy-logo">
                                    <img src="{=item.energyIcon }"/>
                                </div>
                            { } }
                        </div>
                        <div class="product-item-buttons">
                            { if(item.stockStatus && item.stockStatus != 0 && item.stockStatus != -1 && item.isSellable) {}
                                <a href="javascript:;"><span class="icon-basket-new basket-add mini-basket-btn" data-title="{=item.familyName } {=item.subTitle }" onclick="shopping.addCartItem('{=item.sprCode }', false, $(this).parent().prev().find('.quantityInput').val(),null,null,{=item.isFood});personaclick('track', 'cart', '{=item.sprCode }');"></span></a>
                            { } else if((!item.stockStatus || item.stockStatus === 0 || item.stockStatus === -1) & item.isSellable) { }
                                <a href="javascript:;" class="stock-notify" data-spr="{=item.sprCode }">
                                    <span>
                                        <img src="https://cdn.ikea.com.tr/_assets/img/svg/zarf-ikonu.svg" alt="IKEA - Stoğa gelince haber ver"/>
                                    </span>
                                </a>
                            { } }
                            <span class="favorite-btn { if(!item.isSellable) {}no-basket-button{ } }" onclick="user.favorite.addItem({=item.sprCode })">
                                <svg focusable="false" viewBox="0 0 24 24" class="pip-svg-icon" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"></path></svg>
                            </span>
                        </div>
                        { if(item.colorVariants && item.colorVariants.length != 0){  }
                            <div class="product-thumbnails-box">
                                <span>{= IkeaResources.Search.moreVariants }</span>
                                <a href="javascript:;" class="variant" data-issellable="{= item.isSellable }" data-croseprice="{= item.formattedCrossPrice }"  data-isbti="{= item.isBti }" data-customLogoUrl="{= item.customLogoUrl }" data-logoUrl="{= item.logoUrl }" data-price="{= item.formattedPrice }" data-bigimage="{= item.images[0].image }" data-sprcode="{= item.sprCode }" data-url="{= item.url }" data-bigimagehover="{= item.images[1] ? item.images[1].image : item.images[0].image }">
                                    <img src="{= item.images[0].smallImage }" data-title="{= item.title }" alt="{= item.subTitle }"/>
                                </a>
                                { _.each(item.colorVariants, function(varyantItem , key, list){ }
                                    { if(varyantItem.images[0]) { }
                                        <a href="javascript:;" class="variant" data-issellable="{= varyantItem.isSellable }"
                                        data-croseprice="{= varyantItem.formattedCrossPrice }" data-isbti="{= varyantItem.isBti }"
                                        data-customLogoUrl="{= varyantItem.customLogoUrl }" data-logoUrl="{= varyantItem.logoUrl }"
                                        data-price="{= varyantItem.formattedPrice }" data-bigimage="{= varyantItem.images[0].image }"
                                        data-sprcode="{= varyantItem.sprCode }" data-url="{= varyantItem.url }"
                                        data-bigimagehover="{= varyantItem.images[1] ? varyantItem.images[1].image : varyantItem.images[0].image }"
                                        data-varyant="true">
                                            <img src="{= varyantItem.images[0].smallImage }" data-title="{= item.title }" alt="{= varyantItem.subTitle }">
                                        </a>
                                    { } }
                                { }); }
                                { if(item.colorVariantCount > 2) { }
                                    <a href="{= item.url }" class="product-link plp-more-count"><span>+{= item.colorVariantCount - 2 }</span></a>
                                { } }
                            </div>
                        { } }
                    </div>
                </div>
            </div>
        </div>

    { }); }        
</script>

<script type="text/template" class="productLoadingTemplate">
    <div class="col-lg-3 col-sm-4 col-xs-6">
        <div class="plp-product-card-placeholder plp-fragment-wrapper">
            <div class="plp-product-card-placeholder__image"></div>
            <div class="plp-product-card-placeholder__name"></div>
            <div class="plp-product-card-placeholder__label"></div>
            <div class="plp-product-card-placeholder__price"></div>
        </div>
    </div>
</script> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSeller;
