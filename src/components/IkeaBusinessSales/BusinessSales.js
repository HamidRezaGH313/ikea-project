import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import Slider from "../Slider/Slider";
import slider1 from "../../Images/ikeabusiness/toplanti-masalari.webp";
import slider2 from "../../Images/ikeabusiness/ofis-calisma-sandalyeleri.webp";
import slider3 from "../../Images/ikeabusiness/calisma-masalari.webp";
import slider4 from "../../Images/ikeabusiness/calisma-sandalyeleri.webp";
import slider5 from "../../Images/ikeabusiness/ofis-masalari.webp";
import slider6 from "../../Images/ikeabusiness/ofis-mobilya-setleri.webp";
import slider7 from "../../Images/ikeabusiness/ofis-dolaplari.webp";
import slider8 from "../../Images/ikeabusiness/kesonlar.webp";
import slider9 from "../../Images/ikeabusiness/kitapliklar.webp";
import slider10 from "../../Images/ikeabusiness/ofis-aydinlatmalari.webp";
import slider11 from "../../Images/ikeabusiness/laptop-masalari.webp";
import slider12 from "../../Images/ikeabusiness/calisma-masasi-lambalari.webp";
import slider13 from "../../Images/ikeabusiness/calisma-odasi-aksesuarlari.webp";

import image1 from "../../Images/ikeabusiness/ikea-kurumsalkartavantajlari.webp";
import image2 from "../../Images/ikeabusiness/hizmetler.webp";
import image3 from "../../Images/ikeabusiness/hediye-ceki.webp";

import imageTable1 from "../../Images/ikeabusiness/ikea-kurumsal-bekant-calisma-masasi.webp";
import imageTable2 from "../../Images/ikeabusiness/ikea-kurumsal-lagra-calisma-lambasi.webp";
import imageTable3 from "../../Images/ikeabusiness/ikea-kurumsal-markus-calisma-sandalyesi.webp";
import imageTable4 from "../../Images/ikeabusiness/ikea-kurumsal-elloven-monitor-yukseltici.webp";
import imageTable5 from "../../Images/ikeabusiness/ikea-kurumsal-lennart-keson.webp";


import slider14 from "../../Images/ikeabusiness/uzaktan-siparis-2.webp";
import slider15 from "../../Images/ikeabusiness/uzaktanodeme.jpg";
import slider16 from "../../Images/ikeabusiness/icmimarihizmeti.jpg";
import slider17 from "../../Images/ikeabusiness/uruntoplama.jpg";
import slider18 from "../../Images/ikeabusiness/nakliyehizmeti.jpg";
import slider19 from "../../Images/ikeabusiness/montajhizmeti.jpg";



import side1 from "../../Images/ikeabusiness/ikea-kurumsal-billy-kitaplik.webp";
import side2 from "../../Images/ikeabusiness/ikea-kurumsal-vihals-kitaplik.webp";
import imageBG from "../../Images/ikeabusiness/ikea-giftcard.webp";

import { BsBasket3 } from "react-icons/bs";

const BusinessSales = () => {
  const imagesArray = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider13,
  ];
  const imagesArray2 = [
    slider14,slider15,slider16,slider17,slider18,slider19,
  ]
  return (
    <>
      <div className="pr-40 pl-5 w-full">
        <div class=" w-full rtl  ">
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
                  مارت کسب و کار
                </span>
              </a>
              <meta itemprop="position" content="1" />
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center flex-col justify-center font-vazir">
          <h1>فروش تجاری ایکیا</h1>
          <div className="flex m-3 gap-8 w-full  items-center justify-center">
            <h5>درخواست سریع </h5>
            <h5>گزینه های پرداخت</h5>
            <h5>معرفی کسب و کار خود / وارد شوید </h5>
          </div>
        </div>
        <div className="mt-16">
          <span className=" font-vazir mb-10">
            <h3 className="py-10">
              هر نوع فضایی که قصد دارید مبله کنید، ما می توانیم کمک کنیم
            </h3>
          </span>
          <Slider array={imagesArray} />
        </div>
        <div className="mt-16">
          <span className=" font-vazir mb-10">
            <h3 className="py-10">
              مزایا و خدمات فروش تجاری ایکیا را کشف کنید
            </h3>
          </span>
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
                                src={image3}
                                // src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-100tl.jpg"
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
                              style={{ backgroundColor: "#D7BE9E" }}
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
                                  style={{ color: "white" }}
                                  className="text-5xl font-bold font-vazir "
                                >
                                  کارت هدیه
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
                                src={image2}
                                // src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-250tl.jpg"
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
                              style={{ backgroundColor: "#AEA1A3" }}
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
                                  style={{ color: "white" }}
                                  className="text-5xl font-bold font-vazir"
                                >
                                  خدمات
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
                                src={image1}
                                // src="https://image-ikea.mncdn.com/ozgur-icerik/cok-satanlar/cok-satanlar-500tl.jpg"
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
                              style={{ backgroundColor: "#24298E" }}
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
                                  style={{ color: "white" }}
                                  className="text-5xl font-bold font-vazir"
                                >
                                  مزایای کارت فروش ایکیا
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
        </div>
        {/* 5 khone  */}
        <div className="mt-16">
          <div className="w-full p-5 font-vazir">
            <h2>
              <span>
                <span>الهام بخش برای بهتر کردن فضای کسب و کار شما</span>
              </span>
            </h2>
            <p className="font-vazir">
              <span>
                <span>
                  از دفاتر اداری گرفته تا مغازه ها، رستوران ها تا خواب و صبحانه،
                  می توانید ایده های زیادی را در گالری ما بیابید تا به شما در
                  تجهیز و تزئین فضای کاری خود کمک کنند. برای راحت‌تر و
                  کاربردی‌تر کردن دفترتان، می‌توانید میزهای اداری، صندلی‌های
                  اداری و واحدهای کشو را برای گسترش فضای ذخیره‌سازی خود انتخاب
                  کنید. همچنین می توانید با استفاده از پایه های مانیتور، دید
                  راحت تری از صفحه نمایش رایانه خود ارائه دهید.{" "}
                </span>
              </span>
            </p>
            {/* <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه محصولات فضای کاری
                </button> */}
          </div>
          <div class="row grid-images p-5">
            <div class="col-md-3">
              <div class="image-parent">
                <a href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263">
                  <img
                    src={imageTable4}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                    alt="IKEA-lerholmen akasya piknik masasi"
                    id="imz12"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                    class="img-responsive lazyloaded"
                  />
                </a>

                <div
                  id="ixac7i"
                  data-spr="60547200"
                  class="shoppable-image-area"
                  style={{ boxSizing: "border-box", top: "15%", left: "55%" }}
                >
                  <a
                    id="idpx2"
                    href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-kose-kanepe-seti-29533875"
                  ></a>
                  <a
                    id="ipxd16"
                    href="https://www.ikea.com.tr/en/#"
                    style={{ boxSizing: "border-box" }}
                  ></a>
                  <a
                    id="ivtcmf"
                    href="javascript:;"
                    class="shoppable-image-dot"
                    style={{ boxSizing: "border-box" }}
                    aria-label="Product Detail"
                  ></a>
                  <div
                    id="ih2sr7"
                    class="shoppable-image-tag shoppable-image-tag-bottom"
                    style={{ boxSizing: "border-box", left: "70%" }}
                  >
                    <div
                      id="i29c3w"
                      class="shoppable-image-tag-inner"
                      style={{ boxSizing: "border-box" }}
                    >
                      <a
                        id="io8smd"
                        href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                        style={{ boxSizing: "border-box" }}
                      ></a>
                      <a
                        id="iba2mk"
                        data-classname=""
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box" }}
                      >
                        <img
                          id="iogu74"
                          src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                          alt="Custom Product Logo"
                          data-classname=""
                          class="product-isLogo IsNew"
                        />
                      </a>
                      <h3 id="iq2q1i">
                        <a
                          id="iowo3g"
                          href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                          target="_self"
                        ></a>
                      </h3>
                      <span
                        id="ilr03s"
                        data-desc=""
                        class="desc"
                        style={{ boxSizing: "border-box" }}
                      >
                        lace pillow cover, yellow-white
                      </span>
                      <span
                        id="ingada"
                        data-classname="hide"
                        class="wonwon-old-price hide"
                        style={{ boxSizing: "border-box" }}
                      >
                        <span
                          id="itr8gh"
                          class="tl"
                          style={{ boxSizing: "border-box" }}
                        >
                          <u
                            id="id6dej"
                            style={{ boxSizing: "border-box" }}
                          ></u>
                        </span>
                      </span>
                      <div id="i6ispf" class="price-wrapper">
                        <span
                          id="i4b0qy"
                          data-classname=""
                          class="price bti-none"
                          style={{ boxSizing: "border-box" }}
                        >
                          189
                          <span
                            id="ildccx"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="islbk57" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                      </div>
                      {/* <a
                          id="ixtspmt"
                          data-onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a> */}
                      <a
                        // id="igf27j"
                        data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                        href="javascript:;"
                        className="btn"
                        // class="btn btn-basket"
                        onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      >
                        <button className="w-full p-3  text-white bg-[#0058A2] rounded-full  flex  items-center">
                          <BsBasket3 className="ml-3" />
                          متن ساختگی با تولید
                        </button>
                        {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="image-parent">
                <a href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-banki-30510302"></a>
                <div
                  id="i9z22s"
                  data-spr="30510302"
                  class="shoppable-image-area"
                  style={{
                    boxSizing: "border-box",
                    top: "45%",
                    left: "45%",
                  }}
                >
                  <a
                    id="ih0vlg"
                    href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-banki-30510302"
                  ></a>
                  <a
                    id="igqtyf"
                    href="https://www.ikea.com.tr/en/#"
                    style={{ boxSizing: "border-box" }}
                  ></a>
                  <a
                    id="i1b0qi"
                    href="javascript:;"
                    class="shoppable-image-dot"
                    style={{ boxSizing: "border-box" }}
                  ></a>
                  <div
                    id="ize1st"
                    class="shoppable-image-tag shoppable-image-tag-bottom"
                    style={{ boxSizing: "border-box", left: "50%" }}
                  >
                    <a
                      id="i47li1"
                      href="https://www.ikea.com.tr/en/product/segeron-white-beige-chair-with-armrests-50510810"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="ih0rng"
                      data-classname=""
                      target="_self"
                      href="https://www.ikea.com.tr/en/"
                      style={{ boxSizing: "border-box" }}
                    >
                      <img
                        id="ijvnzv"
                        src="https://www.ikea.com.tr/en/"
                        alt="IKEA - SEGERÖN, chair with armrests, white-beige"
                        data-classname="hide"
                        class="product-isLogo IsNew"
                      />
                    </a>
                    {/* <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
                    <h3
                    // id="ij45zl"
                    >
                      <a
                        // id="iahwuh"
                        href="https://www.ikea.com.tr/en/product/segeron-white-beige-chair-with-armrests-50510810"
                        target="_self"
                      >
                        لورم ایپسوم
                      </a>
                    </h3>
                    <span
                      id="i97v0u"
                      data-desc=""
                      class="desc"
                      style={{ boxSizing: "border-box" }}
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی
                    </span>
                    <span
                      id="icm9p9"
                      data-classname="hide"
                      class="wonwon-old-price hide"
                      style={{ boxSizing: "border-box" }}
                    >
                      <span
                        id="iwu0ah"
                        class="tl"
                        style={{ boxSizing: "border-box" }}
                      >
                        <u id="ib5zxl" style={{ boxSizing: "border-box" }}>
                          ₺
                        </u>
                      </span>
                    </span>
                    <div
                      id="ihm1t8"
                      // className="bg-[#C40C0C] w-[45%] relative h-20"

                      // class="price-wrapper"
                    >
                      <div
                      // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                      >
                        <span
                          id="ifrxlp"
                          data-classname=""
                          class="price bti-none"
                          style={{ boxSizing: "border-box" }}
                        >
                          2,999
                          <span
                            id="isqk9y"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="i2i03f" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                      </div>
                    </div>
                    <a
                      id="igf27j"
                      data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      href="javascript:;"
                      className="btn"
                      // class="btn btn-basket"
                      // onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                    >
                      <button className="w-full p-5  text-white bg-[#0058A2] rounded-full  flex  items-center">
                        <BsBasket3 className="ml-3" />
                        متن ساختگی با تولید
                      </button>
                      {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                    </a>
                  </div>
                </div>
                <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302">
                  <img
                    src={imageTable5}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-banki.jpg"
                    alt="IKEA-nammaro acik kahverengi bahce banki"
                    id="i5i4g"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-banki.jpg"
                    class="img-responsive lazyloaded"
                  />
                </a>
                {/* لورم ایپسوم متن ساختگی با تولید{" "} */}
              </div>
            </div>

            <div class="col-md-3">
              <div class="image-parent">
                <a href="https://www.ikea.com.tr/en/rooms/balcony-garden">
                  <img
                    src={imageTable2}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                    alt="IKEA-yilin en guzel mevsimi en"
                    id="imw4n"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                    class="img-responsive lazyloaded"
                  />
                </a>

                <div
                  id="ixac7i"
                  data-spr="60547200"
                  class="shoppable-image-area"
                  style={{ boxSizing: "border-box", top: "15%", left: "55%" }}
                >
                  <a
                    id="idpx2"
                    href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-kose-kanepe-seti-29533875"
                  ></a>
                  <a
                    id="ipxd16"
                    href="https://www.ikea.com.tr/en/#"
                    style={{ boxSizing: "border-box" }}
                  ></a>
                  <a
                    id="ivtcmf"
                    href="javascript:;"
                    class="shoppable-image-dot"
                    style={{ boxSizing: "border-box" }}
                    aria-label="Product Detail"
                  ></a>
                  <div
                    id="ih2sr7"
                    class="shoppable-image-tag shoppable-image-tag-bottom"
                    style={{ boxSizing: "border-box", left: "70%" }}
                  >
                    <div
                      id="i29c3w"
                      class="shoppable-image-tag-inner"
                      style={{ boxSizing: "border-box" }}
                    >
                      <a
                        id="io8smd"
                        href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                        style={{ boxSizing: "border-box" }}
                      ></a>
                      <a
                        id="iba2mk"
                        data-classname=""
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box" }}
                      >
                        {/* <img
                            id="iogu74"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="Custom Product Logo"
                            data-classname=""
                            class="product-isLogo IsNew"
                          /> */}
                      </a>
                      <h3 id="iq2q1i">
                        <a
                          id="iowo3g"
                          href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                          target="_self"
                        ></a>
                      </h3>
                      <span
                        id="ilr03s"
                        data-desc=""
                        class="desc"
                        style={{ boxSizing: "border-box" }}
                      >
                        lace pillow cover, yellow-white
                      </span>
                      <span
                        id="ingada"
                        data-classname="hide"
                        class="wonwon-old-price hide"
                        style={{ boxSizing: "border-box" }}
                      >
                        <span
                          id="itr8gh"
                          class="tl"
                          style={{ boxSizing: "border-box" }}
                        >
                          <u
                            id="id6dej"
                            style={{ boxSizing: "border-box" }}
                          ></u>
                        </span>
                      </span>
                      <div id="i6ispf" class="price-wrapper">
                        <span
                          id="i4b0qy"
                          data-classname=""
                          class="price bti-none"
                          style={{ boxSizing: "border-box" }}
                        >
                          189
                          <span
                            id="ildccx"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="islbk57" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                      </div>
                      {/* <a
                          id="ixtspmt"
                          data-onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a> */}
                      <a
                        // id="igf27j"
                        data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                        href="javascript:;"
                        className="btn"
                        // class="btn btn-basket"
                        onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      >
                        <button className="w-full p-3  text-white bg-[#0058A2] rounded-full  flex  items-center">
                          <BsBasket3 className="ml-3" />
                          متن ساختگی با تولید
                        </button>
                        {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                      </a>
                    </div>
                  </div>
                </div>
                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
              </div>

              <div class="image-parent">
                <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>

                <div
                  id="ixac7i"
                  data-spr="60547200"
                  class="shoppable-image-area"
                  style={{ boxSizing: "border-box", top: "15%", left: "55%" }}
                >
                  <a
                    id="idpx2"
                    href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-kose-kanepe-seti-29533875"
                  ></a>
                  <a
                    id="ipxd16"
                    href="https://www.ikea.com.tr/en/#"
                    style={{ boxSizing: "border-box" }}
                  ></a>
                  <a
                    id="ivtcmf"
                    href="javascript:;"
                    class="shoppable-image-dot"
                    style={{ boxSizing: "border-box" }}
                    aria-label="Product Detail"
                  ></a>
                  <div
                    id="ih2sr7"
                    class="shoppable-image-tag shoppable-image-tag-bottom"
                    style={{ boxSizing: "border-box", left: "70%" }}
                  >
                    <div
                      id="i29c3w"
                      class="shoppable-image-tag-inner"
                      style={{ boxSizing: "border-box" }}
                    >
                      <a
                        id="io8smd"
                        href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                        style={{ boxSizing: "border-box" }}
                      ></a>
                      <a
                        id="iba2mk"
                        data-classname=""
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box" }}
                      >
                        {/* <img
                            id="iogu74"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="Custom Product Logo"
                            data-classname=""
                            class="product-isLogo IsNew"
                          /> */}
                      </a>
                      <h3 id="iq2q1i">
                        <a
                          id="iowo3g"
                          href="https://www.ikea.com.tr/en/product/gullbergso-yellow-white-50x50-cm-lace-pillow-cover-60547200"
                          target="_self"
                        ></a>
                      </h3>
                      <span
                        id="ilr03s"
                        data-desc=""
                        class="desc"
                        style={{ boxSizing: "border-box" }}
                      >
                        lace pillow cover, yellow-white
                      </span>
                      <span
                        id="ingada"
                        data-classname="hide"
                        class="wonwon-old-price hide"
                        style={{ boxSizing: "border-box" }}
                      >
                        <span
                          id="itr8gh"
                          class="tl"
                          style={{ boxSizing: "border-box" }}
                        >
                          <u
                            id="id6dej"
                            style={{ boxSizing: "border-box" }}
                          ></u>
                        </span>
                      </span>
                      <div id="i6ispf" class="price-wrapper">
                        <span
                          id="i4b0qy"
                          data-classname=""
                          class="price bti-none"
                          style={{ boxSizing: "border-box" }}
                        >
                          189
                          <span
                            id="ildccx"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="islbk57" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                      </div>
                      {/* <a
                          id="ixtspmt"
                          data-onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a> */}
                      <a
                        // id="igf27j"
                        data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                        href="javascript:;"
                        className="btn"
                        // class="btn btn-basket"
                        onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      >
                        <button className="w-full p-3  text-white bg-[#0058A2] rounded-full  flex  items-center">
                          <BsBasket3 className="ml-3" />
                          متن ساختگی با تولید
                        </button>
                        {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://www.ikea.com.tr/en/product/segeron-white-beige-chair-with-armrests-50510810">
                  <img
                    src={imageTable3}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                    alt="IKEA-segeron beyaz bej kolcakli sandalye"
                    id="igtnt"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                    class="img-responsive lazyloaded"
                  />
                </a>
              </div>
            </div>

            <div class="col-md-6">
              <div class="image-parent">
                <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                  <img
                    src={imageTable1}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                    id="i1brf"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    class="img-responsive lazyloaded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* side  */}
        <div className="mt-16 pl-5 mb-52">
              <div className="w-full p-5 font-vazir">
                <h2>
                  <span>
                    <span>فضاهای ذخیره سازی در محل کار خود ایجاد کنید</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                    آیا به فضای ذخیره سازی اضافی برای محل کار خود نیاز دارید؟ با انتخاب قفسه کتاب هم می توانید فایل ها، اسناد و کتاب های خود را به صورت سازماندهی شده ذخیره کنید و هم به دکوراسیون محل کار خود کمک کنید.
                    </span>
                  </span>
                </p>
              </div>
          <div className="grid grid-cols-2 gap-10  relative font-vazir">
            <div className="relative">
              <img src={side1} alt="" className="absolute "/>
              <div
                  id="iifke"
                  data-spr="00563071"
                  class="pin view black"
                  style={{ display: "block", top: "75%", left: "50%" ,position:"absolute",zIndex:"1"}}
                >
                  <div id="i5h6p" class="pin-layer hide-mobile">
                    <div id="im1pd" class="product-bottom column">
                      <a
                        id="ir92w"
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box", color:"white" }}
                      >
                        {/* <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
                      </a>

                      <h3 id="iewjg">
                        <a
                          id="iav8p"
                          href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                        target="_self"
                        className=""
                        >
                          BORRBY
                          <span id="iomns">lantern, green</span>
                        </a>
                      </h3>
                      <a
                        id="ib1wm"
                        href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                        target="_self"
                      >
                        <span id="iicwa" data-classname="hide" class="old hide">
                          <span id="i0in8" class="tl">
                            <u id="i4577">₺</u>
                          </span>
                        </span>
                        <div id="iffff" class="price">
                          <span
                            id="i99ws"
                            data-classname=""
                            class="new bti-none"
                          >
                            419
                            <span id="iqc6f" class="tl">
                              <u id="i8xsi">₺</u>
                            </span>
                          </span>
                        </div>
                      </a>
                      <a
                        // id="igf27j"
                        data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                        href="javascript:;"
                        className="btn"
                        // class="btn btn-basket"
                        onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      >
                        <button className="w-full p-3  text-white bg-[#0058A2] rounded-full  flex  items-center">
                          <BsBasket3 className="ml-3" />
                          متن ساختگی با تولید
                        </button>
                        {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                      </a>
                    </div>
                  </div>
                  <div id="i3n1h" class="pin-dots show-mobile"></div>
                </div>
            </div>
            <div className="relative">
            <div
                  id="iifke"
                  data-spr="00563071"
                  class="pin view black"
                  style={{ display: "block", top: "20%", left: "0%" ,position:"absolute",zIndex:"1"}}
                >
                  <div id="i5h6p" class="pin-layer hide-mobile">
                    <div id="im1pd" class="product-bottom column">
                      <a
                        id="ir92w"
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box", color:"white" }}
                      >
                        {/* <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
                      </a>

                      <h3 id="iewjg">
                        <a
                          id="iav8p"
                          href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                        target="_self"
                        className=""
                        >
                          BORRBY
                          <span id="iomns">lantern, green</span>
                        </a>
                      </h3>
                      <a
                        id="ib1wm"
                        href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                        target="_self"
                      >
                        <span id="iicwa" data-classname="hide" class="old hide">
                          <span id="i0in8" class="tl">
                            <u id="i4577">₺</u>
                          </span>
                        </span>
                        <div id="iffff" class="price">
                          <span
                            id="i99ws"
                            data-classname=""
                            class="new bti-none"
                          >
                            419
                            <span id="iqc6f" class="tl">
                              <u id="i8xsi">₺</u>
                            </span>
                          </span>
                        </div>
                      </a>
                      <a
                        // id="igf27j"
                        data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                        href="javascript:;"
                        className="btn"
                        // class="btn btn-basket"
                        onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                      >
                        <button className="w-full p-3  text-white bg-[#0058A2] rounded-full  flex  items-center">
                          <BsBasket3 className="ml-3" />
                          متن ساختگی با تولید
                        </button>
                        {/* <span class="btn-basket-text">Sepete Ekle</span> */}
                      </a>
                    </div>
                  </div>
                  <div id="i3n1h" class="pin-dots show-mobile"></div>
                </div>
              <img src={side2} alt="" />
            </div>
             </div>
            </div>
        {/* service */}
        <div className="mt-16">
        <Slider array={imagesArray2}/>
        </div>
        {/* imageBG */}
        <div className="mt-16">
              <div class="global-banner-container mt-10">
                <div class="global-banner">
                  <div>
                    <div class="item grey">
                      <div
                        id="iplr2f"
                        class="row"
                        style={{ backgroundColor: "#53664B" }}
                      >
                        <div
                          id="iihk6s"
                          class="col-md-8 pl-0 float-right"
                          style={{ float: "left" }}
                        >
                          <div class="shoppable-image">
                            <div class="image-parent">
                              <img
                                src={imageBG}
                                // src="./Accessories Models and Prices _ IKEA_files/surdurulebilir-malzeme-3.jpg"
                                id="ia4twl"
                                data-src="https://cdn.ikea.com.tr/ozgur-icerik/surdurulebilirlik/cy23/surdurulebilir-malzeme-3.jpg"
                                alt="IKEA-surdurulebilir malzeme 3"
                                class="img-responsive"
                              />

                             
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="global-banner-text">
                            <h2 id="i4g9yy" style={{ color: "white" }}>
                              <span>
                                {/* <span>پایین ترین قیمت</span> */}
                              </span>
                            </h2>
                            <p
                              id="iem7kk"
                              style={{
                                color: "white",
                                textDecoration: "justify",
                              }}
                            >
                              <span className="">
                                <span className="text-justify">
                                آیا به دنبال هدیه ای برای کارمندان، شرکای تجاری یا مشتریان خود هستید؟ بهتر است انتخاب را به آنها بسپارید. به آنها اجازه دهید از بین هزاران مبلمان و لوازم جانبی در فروشگاه های IKEA و فروشگاه آنلاین انتخاب کنند.
                                </span>
                              </span>
                            </p>
                            <a
                              href="https://www.ikea.com.tr/en/sustainability-materials"
                              id="igajqq"
                              style={{
                                color: "black",
                                backgroundColor: "#ffffff",
                              }}
                            >
                              پذیرش 
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default BusinessSales;
