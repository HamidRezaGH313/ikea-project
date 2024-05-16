import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode,Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { BsBasket3 } from "react-icons/bs";


import slide1 from "../../Images/yaz-ikeada-en-1.webp";
import slide2 from "../../Images/yeni-ne-var-mayis-en.webp";
import slide3 from "../../Images/iyi-fikirlerden-ilham-alin-en-mayis.webp";
import image1 from '../../Images/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.webp';
import image2 from '../../Images/yilin-en-guzel-mevsimi-en.webp';
import image3 from '../../Images/segeron-beyaz-bej-kolcakli-sandalye.webp';
import image4 from '../../Images/lerholmen-akasya-piknik-masasi.webp';
import image5 from '../../Images/nammaro-acik-kahverengi-bahce-banki.webp';

import secondSlider1 from '../../Images/balkon-masalari.webp'
import secondSlider2 from '../../Images/balkon-sandalyeleri.webp'
import secondSlider3 from '../../Images/bahce-ve-balkon-yer-dosemeleri.webp'
import secondSlider4 from '../../Images/dis-mekan-aydinlatma.webp'
import secondSlider5 from '../../Images/balkon-halilari.webp'
import secondSlider6 from '../../Images/dis-mekan-kirlent-ve-kirlent-kiliflari.webp'
import secondSlider7 from '../../Images/ciceklik-saksi.webp'
import secondSlider8 from '../../Images/bahce-oturma-gruplari-ve-setleri.webp'
import secondSlider9 from '../../Images/bahce-banklari.webp'
import secondSlider10 from '../../Images/bahce-masa-ve-sandalye-setleri.webp'
import secondSlider11 from '../../Images/hamaklar.webp'


import image6 from '../../Images/hyllis-galvanizli-dis-mekan-raf-unitesi.webp'
import image7 from '../../Images/sundso-yesil-kapakli-dolap.webp'

import slider21 from "../../Images/broggan-slider-en.webp";
import slider22 from "../../Images/tesammans-slider-tr.webp";
import slider23 from "../../Images/gokvalla-slider-en.webp";
import slider24 from "../../Images/dajlien-slider-en.webp";
import slider25 from "../../Images/nytillverkad-slider-en.webp";
import slider26 from "../../Images/daksjus-slider-en-1.webp";
import slider27 from "../../Images/aftonsparv-slider-en-new.webp";
import slider28 from "../../Images/mavinn-slider-en.webp";


import image8 from '../../Images/tonstad-kirik-beyaz-calisma-masasi.webp';
import image9 from '../../Images/yeni-en.webp';
import image10 from '../../Images/rosenoxali-cok-renkli-plaj-havlusu.webp';
import image11 from '../../Images/sotronn-beyaz-45-saat-seramik-kapta-kokulu-mum-2.webp';
import image12 from '../../Images/visslaan-gri-kutu-seti.webp';


import slider31 from "../../Images/organizasyon-icin-gunluk-ihtiyaclar.webp";
import slider32 from "../../Images/evinizi-yenilemek-icin-gunluk-ihtiyaclar.webp";
import slider33 from "../../Images/yemek-hazirlama-icin-gunluk-ihtiyaclar.webp";
import slider34 from "../../Images/temizlik-icin-gunluk-ihtiyaclar.webp";
import slider35 from "../../Images/kutlamalar-icin-gunluk-ihtiyaclar.webp";
import slider36 from "../../Images/sofra-icin-gunluk-ihtiyaclar.webp";
// import slider37 from "../../Images/aftonsparv-slider-en-new.webp";
// import slider38 from "../../Images/mavinn-slider-en.webp";

import image13 from '../../Images/solviden-beyaz-ledli-gunes-enerjili-aydinlatma.webp';
import image14 from '../../Images/solviden-beyaz-aydinlatma-zinciri.webp';
import image15 from '../../Images/solviden-ledli-gunes-enerjili-yer-lambasi.webp';
import image16 from '../../Images/solviden-cokrenkli-aydinlatma-zinciri.webp';
import image17 from '../../Images/solviden-aluminyum-ledli-gunes-enerjili-yer-lambasi.webp';

import image18 from '../../Images/broggan-koleksiyonu.webp';


import "../../css/swiper.min.css";
import "../../css/magiclick.ikea.min.css";
const NewHome = () => {
  return (
    <>
     
      <div class="main-container main-pt font-vazir text-2xl">
        <section id="HomePageWrapper" class="homepage-wrapper">
          <div class="container-fluid">
            <div className= "w-[100%] pl-32  flex items-center justify-center">
              
            <Swiper
              autoplay={true}
              loop={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
              className=" lg:w-[100%]"
            >
             
              <SwiperSlide className="w-full   object-cover flex items-center justify-center">
                <div
                  className="h-[465px] w-full  flex items-center justify-center"
                  // class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                  data-timing="5000"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 2"
                  style={{ width: "1189px" }}
                >
                  <a
                    href="https://www.ikea.com.tr/en/new-products"
                    id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl01_lnkImage"
                    target="_self"

                  >
                    <div
                      className="flex items-center justify-center w-full"
                      // class="image-parent"
                    >
                      <img
                        src={slide1}
                        // src="https://image-ikea.mncdn.com/Banner/web/yeni-ne-var-mayis-en.jpg"
                        id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl01_imgWithLink"
                        // class="img-responsive"
                        className="w-full h-full  object-cover"
                        alt="IKEA&#39;da Yeni Ne Var - Nisan EN"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full  flex items-center justify-center">
                <div
                  className="h-[465px] w-full flex items-center justify-center"
                  // class="swiper-slide swiper-slide-duplicate swiper-slide-active"
                  data-timing="5000"
                  data-swiper-slide-index="0"
                  role="group"
                  aria-label="1 / 2"
                  style={{ width: "1189px" }}
                >
                  <a
                    href="https://www.ikea.com.tr/en/category/outdoor-products"
                    id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl00_lnkImage"
                    target="_self"
                  >
                    <div
                      className="flex items-center justify-center w-full"
                      // class="image-parent"
                    >
                      <img
                        src={slide2}
                        // src="https://image-ikea.mncdn.com/Banner/web/yaz-ikeada-en-1.jpg"
                        id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl00_imgWithLink"
                        // class="img-responsive"
                        className="w-full h-full  object-cover"
                        alt="CY24 Yaz IKEA&#39;da EN"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full  flex items-center justify-center">
                <div
                  className="h-[465px] w-full flex items-center justify-center "
                  // class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                  data-timing="5000"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 2"
                  style={{ width: "1189px" }}
                >
                  <a
                    href="https://www.ikea.com.tr/en/new-products"
                    id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl01_lnkImage"
                    target="_self"
                  >
                    <div
                      className="flex items-center justify-center w-full"
                      // class="image-parent"
                    >
                      <img
                        src={slide3}
                        // src="https://image-ikea.mncdn.com/Banner/web/yeni-ne-var-mayis-en.jpg"
                        id="ctl00_ContentPlaceHolder1_ctrlMainBanners_rptBannerWithCodeAreaWeb_ctl01_imgWithLink"
                        // class="img-responsive"
                        className="w-full h-full  object-cover"
                        alt="IKEA&#39;da Yeni Ne Var - Nisan EN"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
             
            </Swiper>
          </div>
           
          
            <div
              className="w-full pl-32"
              // class="shoppable-info-container"
            >
              <h2>
                <span>
                  <span>لورم ایپسوم متن ساختگی با تولید سات.?</span>
                </span>
              </h2>
              <p>
                <span>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن
                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است.
                  </span>
                </span>
              </p>
              <a
                href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                class="btn btn-outline-black"
              >
                لورم ایپسوم متن ساختگی .
              </a>
            </div>
            <div
              class="row grid-images pl-32">
              <div class="col-md-6">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <img
                      src={image1}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                      id="i1brf"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="ixac7i"
                    data-spr="60547200"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "50%", left: "70%" }}
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
                      style={{ boxSizing: "border-box",left:"70%" }}
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
                              <u
                                id="islbk57"
                                style={{ boxSizing: "border-box" }}
                              >
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
                  <div
                    id="ipvboah"
                    data-spr="10510299"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: " border-box",
                      top: "69%",
                      left: " 40%",
                    }}
                  >
                    <a
                      id="idz1542"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="isd4jp1"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="itj3nhf"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"40%" }}
                    >
                      <div
                        id="idy1tck"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="i6f8vr6"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-seat-section-for-outdoor-sofa-10510299"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="i3guejj"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="ijjvh9p"
                            src="https://www.ikea.com.tr/en/"
                            alt="IKEA - NAMMARÖ, seat section for outdoor sofa, light brown"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="ib6vfbv">
                          <a
                            id="idm3iz9"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-seat-section-for-outdoor-sofa-10510299"
                            target="_self"
                          >
                            NÄMMARÖ
                          </a>
                        </h3>
                        <span
                          id="izpa5q9"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          {/* لورم ایپسوم متن ساختگی با تولید */}
                        </span>
                        <span
                          id="iefax4r"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="issfac1"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u
                              id="i01l6hc"
                              style={{ boxSizing: "border-box" }}
                            >
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="iqs9zsw" class="price-wrapper">
                          <span
                            id="ipkegai"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            2,000
                            <span
                              id="i8f23vc"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="i1mly8e"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="is8f6mb"
                          data-onclick="shopping.addCartItem(&#39;10510299&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;10510299&#39;, false);"
                        >
                          <span class="btn-basket-text">
                          </span>
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
                  <div
                    id="ig6v48"
                    data-spr="29533875"
                    class="pin view black"
                    style={{ top: " 20%", left: "60%", display: "block" }}
                  >
                    <div id="ii7ola" class="pin-layer hide-mobile">
                      <div id="iwyknj" class="product-bottom column">
                        <a
                          id="ijja0q"
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="izx0xx"
                            // src={image2}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="iopr3q">
                          <a
                            id="ihvaq8"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                            target="_self"
                          >
                            NÄMMARÖ
                            <span id="i2vfsw">
                              {/* لورم ایپسوم متن ساختگی با تولید */}
                            </span>
                          </a>
                        </h3>
                        <a
                          id="ibkp45"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                          target="_self"
                        >
                          <span
                            id="irl96j"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span id="iqmv1s" class="tl">
                              <u id="ipezmx">₺</u>
                            </span>
                          </span>
                          <div id="icp6vk" class="price">
                            <span
                              id="if2npn"
                              data-classname=""
                              class="new bti-none"
                            >
                              21,100
                              <span id="ie2qpu" class="tl">
                                <u id="i8ajl8">₺</u>
                              </span>
                            </span>
                          </div>
                        </a>
                        {/* <a
                          id="in0w1j"
                          data-onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                        >
                          <span class="btn-basket-text">
                            {" "}
                            متن ساختگی با تولید
                          </span>
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
                    <div id="i3ng8q" class="pin-dots show-mobile"></div>
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
              </div>
              <div class="col-md-3">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/rooms/balcony-garden">
                    <img
                      src={image2}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                      alt="IKEA-yilin en guzel mevsimi en"
                      id="imw4n"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>
                  <div
                    id="isv63k"
                    data-spr="50510810"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "50%", left: "50%" }}
                  >
                    <a
                      id="i1uu8"
                      href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"
                    ></a>
                    <a
                      id="i2gtrm"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="icbtmv"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="ihad1g"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"50%" }}
                    >
                      <div
                        id="iji62j"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
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
                        <h3 id="ij45zl">
                          <a
                            id="iahwuh"
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
                          {/* لورم ایپسوم متن ساختگی با تولید سادگی */}
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
                        <div id="ihm1t8" class="price-wrapper">
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
                              <u
                                id="i2i03f"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="igf27j"
                          data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
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
                      src={image3}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                      alt="IKEA-segeron beyaz bej kolcakli sandalye"
                      id="igtnt"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
              </div>
              <div class="col-md-3">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263">
                    <img
                      src={image4}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                      alt="IKEA-lerholmen akasya piknik masasi"
                      id="imz12"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="i16xh3"
                    data-spr="40539263"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: "70%",
                      left: "50%",
                    }}
                  >
                    <a
                      id="i03fs"
                      href="https://www.ikea.com.tr/urun/lerholmen-akasya-piknik-masasi-40539263"
                    ></a>
                    <a
                      id="ir1zqa"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="ixez6n"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="il47hz"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"50%" }}
                    >
                      <div
                        id="i7cnif"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="igh8mz"
                          href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="iisdp8"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="ip1pu7"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="ikodgs">
                          <a
                            id="ikaupk"
                            href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263"
                            target="_self"
                          >
                            LERHOLMEN
                          </a>
                        </h3>
                        <span
                          id="iq3mpv"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          picnic table, acacia
                        </span>
                        <span
                          id="if6ycv"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="ibst26"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="iwajds" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ii21x5" class="price-wrapper">
                          <span
                            id="iems14"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            9,999
                            <span
                              id="it3szb"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="idyg31"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="i5tbfw"
                          data-onclick="shopping.addCartItem(&#39;40539263&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;40539263&#39;, false);"
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
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-banki-30510302"></a>
                  <div
                    id="i9z22s"
                    data-spr="30510302"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "60%", left: "55%" }}
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
                      style={{ boxSizing: "border-box",left:"55%" }}
                    >
                      <div
                        id="ildmh5"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="iv0kt6"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="ifnv08"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="ib84gf"
                            src="https://www.ikea.com.tr/en/"
                            alt="IKEA - NAMMARÖ, garden bank, light brown"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="ilvupx">
                          <a
                            id="ilu1wi"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302"
                            target="_self"
                          >
                            NÄMMARÖ
                          </a>
                        </h3>
                        <span
                          id="igwpra"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          garden bank, light brown
                        </span>
                        <span
                          id="i9l2l1"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="iy8nmf"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="iz7bxj" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="i9jiv3" class="price-wrapper">
                          <span
                            id="iq8l1l"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            3,999
                            <span
                              id="i6xtmf"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="incy1a"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="iex51g"
                          data-onclick="shopping.addCartItem(&#39;30510302&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;30510302&#39;, false);"
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
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302">
                    <img
                      src={image5}
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
            </div>
            {/*  YAZ IKEA'DA BİTİŞ  YAZ IKEA'DA KATEGORİLER BAŞLANGIÇ  */}
            {/* <div class="shoppable-info-container">
              <h2>
                <span>لورم ایپسوم متن ساختگی با تولید سادگی</span>
              </h2>
            </div> */}
            <span id="i59zp" class="d-none"></span>
            <div className="pl-24">

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
                    src={secondSlider1}
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
                    src={secondSlider2}
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
                    src={secondSlider3}
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
                    src={secondSlider4}
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
                    src={secondSlider5}
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
                    src={secondSlider6}
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
                    src={secondSlider7}
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
                    src={secondSlider8}
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
                    src={secondSlider9}
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
                    src={secondSlider10}
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
                    src={secondSlider11}
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

              
              </Swiper>
            </div>

            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
            <div class="shoppable-info-container">
              <h2>
                <span>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
                </span>
              </h2>
              <p>
                <span>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است..
                  </span>
                </span>
              </p>
            </div>
            {/* <div class="row shoppable-image pl-24">
              <div class="col-sm-6 col-xs-12">
                <div class="image-parent">
                  <div
                    id="i0x2dl"
                    data-spr="30428326"
                    class="pin view white"
                    style={{ top: " 80%;", left: "30%;", display: " block" }}
                  >
                    <div id="ix1yx3" class="pin-layer hide-mobile">
                      <div id="iandfw" class="product-bottom column">
                        <a
                          id="id7jou"
                          target="_self"
                          href="https://www.ikea.com.tr/en/campaign/lowest-price"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="iampel"
                            src={image6}
                            // src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="iz15k7">
                          <a
                            id="imgivb"
                            href="https://www.ikea.com.tr/en/product/hyllis-galvanised-60x27x74-cm-outdoor-shelving-unit-30428326"
                            target="_self"
                          >
                            HYLLIS
                            <span id="iz7kbt">
                              outdoor shelving unit, galvanised
                            </span>
                          </a>
                        </h3>
                        <a
                          id="iv722j"
                          href="https://www.ikea.com.tr/en/product/hyllis-galvanised-60x27x74-cm-outdoor-shelving-unit-30428326"
                          target="_self"
                        >
                          <span
                            id="izzyag"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span id="i781ee" class="tl">
                              <u id="iu6lxp">₺</u>
                            </span>
                          </span>
                          <div id="i84vvw" class="price">
                            <span
                              id="ipb0df"
                              data-classname="bti"
                              class="new bti-price price"
                            >
                              649
                              <span id="i4bxul" class="tl">
                                <u id="isxovz">₺</u>
                              </span>
                            </span>
                          </div>
                        </a>
                        <a
                          id="i93183"
                          data-onclick="shopping.addCartItem(&#39;30428326&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;30428326&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a>
                      </div>
                    </div>
                    <div id="iudqmr" class="pin-dots show-mobile"></div>
                  </div>
                  <span>
                    <a href="https://www.ikea.com.tr/en/product/hyllis-galvanised-60x27x74-cm-outdoor-shelving-unit-30428326">
                      <img
                        src={image6}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/hyllis-galvanizli-dis-mekan-raf-unitesi.jpg"
                        id="ilq1hu"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/hyllis-galvanizli-dis-mekan-raf-unitesi.jpg"
                        alt="IKEA-hyllis galvanizli dis mekan raf unitesi"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                <div class="image-parent">
                  <div
                    id="iiz5us"
                    data-spr="40556361"
                    class="pin view white"
                    style={{ top: "55%;", left: "20%;", display: "block;" }}
                  >
                    <div id="izdpk7" class="pin-layer hide-mobile">
                      <div id="igrggl" class="product-bottom column">
                        <a
                          id="ilf8n3"
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="iuwnaf"
                            src={image6}
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="iuvrog">
                          <a
                            id="i0ftsk"
                            href="https://www.ikea.com.tr/en/product/sundso-green-60x35x86-cm-cabinet-with-door-40556361"
                            target="_self"
                          >
                            SUNDSÖ
                            <span id="iljajf">cabinet with door, green</span>
                          </a>
                        </h3>
                        <a
                          id="i1ijk8"
                          href="https://www.ikea.com.tr/en/product/sundso-green-60x35x86-cm-cabinet-with-door-40556361"
                          target="_self"
                        >
                          <span
                            id="i9yltx"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span id="ildqgs" class="tl">
                              <u id="i5gfot"></u>
                            </span>
                          </span>
                          <div id="iyc70y" class="price">
                            <span
                              id="ivbwoj"
                              data-classname=""
                              class="new bti-none"
                            >
                              3,699
                              <span id="igbec7" class="tl">
                                <u id="iqco5v">₺</u>
                              </span>
                            </span>
                          </div>
                        </a>
                        <a
                          id="i6yvwk"
                          data-onclick="shopping.addCartItem(&#39;40556361&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;40556361&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a>
                      </div>
                    </div>
                    <div id="iiqf1v" class="pin-dots show-mobile"></div>
                  </div>
                  <span>
                    <a href="https://www.ikea.com.tr/en/product/sundso-green-60x35x86-cm-cabinet-with-door-40556361">
                      <img
                        src={image7}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/sundso-yesil-kapakli-dolap.jpg"
                        id="ik9rrt"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/sundso-yesil-kapakli-dolap.jpg"
                        alt="IKEA-sundso yesil kapakli dolap"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div> */}

<div
              class="row grid-images pl-32">
              
              
              <div class="col-md-3">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263">
                    <img
                      src={image11}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                      alt="IKEA-lerholmen akasya piknik masasi"
                      id="imz12"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/lerholmen-akasya-piknik-masasi.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="i16xh3"
                    data-spr="40539263"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: "40%",
                      left: "60%",
                    }}
                  >
                    <a
                      id="i03fs"
                      href="https://www.ikea.com.tr/urun/lerholmen-akasya-piknik-masasi-40539263"
                    ></a>
                    <a
                      id="ir1zqa"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="ixez6n"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="il47hz"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"60%" }}
                    >
                      <div
                        id="i7cnif"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="igh8mz"
                          href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="iisdp8"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="ip1pu7"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="ikodgs">
                          <a
                            id="ikaupk"
                            href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263"
                            target="_self"
                          >
                            LERHOLMEN
                          </a>
                        </h3>
                        <span
                          id="iq3mpv"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          picnic table, acacia
                        </span>
                        <span
                          id="if6ycv"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="ibst26"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="iwajds" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ii21x5" class="price-wrapper">
                          <span
                            id="iems14"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            9,999
                            <span
                              id="it3szb"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="idyg31"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="i5tbfw"
                          data-onclick="shopping.addCartItem(&#39;40539263&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;40539263&#39;, false);"
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
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/nammaro-acik-kahverengi-bahce-banki-30510302"></a>
                  <div
                    id="i9z22s"
                    data-spr="30510302"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "60%", left: "55%" }}
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
                      style={{ boxSizing: "border-box",left:"55%" }}
                    >
                      <div
                        id="ildmh5"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="iv0kt6"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="ifnv08"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="ib84gf"
                            src="https://www.ikea.com.tr/en/"
                            alt="IKEA - NAMMARÖ, garden bank, light brown"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                        <h3 id="ilvupx">
                          <a
                            id="ilu1wi"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302"
                            target="_self"
                          >
                            NÄMMARÖ
                          </a>
                        </h3>
                        <span
                          id="igwpra"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          garden bank, light brown
                        </span>
                        <span
                          id="i9l2l1"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="iy8nmf"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="iz7bxj" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="i9jiv3" class="price-wrapper">
                          <span
                            id="iq8l1l"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            3,999
                            <span
                              id="i6xtmf"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="incy1a"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="iex51g"
                          data-onclick="shopping.addCartItem(&#39;30510302&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;30510302&#39;, false);"
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
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-bank-30510302">
                    <img
                      src={image12}
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
                      src={image9}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                      alt="IKEA-yilin en guzel mevsimi en"
                      id="imw4n"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>
                  <div
                    id="isv63k"
                    data-spr="50510810"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "50%", left: "50%" }}
                  >
                    <a
                      id="i1uu8"
                      href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"
                    ></a>
                    <a
                      id="i2gtrm"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="icbtmv"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="ihad1g"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"50%" }}
                    >
                      <div
                        id="iji62j"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
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
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                        <h3 id="ij45zl">
                          <a
                            id="iahwuh"
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
                          {/* لورم ایپسوم متن ساختگی با تولید سادگی */}
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
                        <div id="ihm1t8" class="price-wrapper">
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
                              <u
                                id="i2i03f"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="igf27j"
                          data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
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
                      src={image10}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                      alt="IKEA-segeron beyaz bej kolcakli sandalye"
                      id="igtnt"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/segeron-beyaz-bej-kolcakli-sandalye.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
              </div>

              <div class="col-md-6">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <img
                      src={image8}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                      id="i1brf"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="ixac7i"
                    data-spr="60547200"
                    class="shoppable-image-area"
                    style={{ boxSizing: "border-box", top: "60%", left: "70%" }}
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
                      style={{ boxSizing: "border-box" ,left:"70%"}}
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
                          style={{ boxSizing: "border-box",left:"70%" }}
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
                              <u
                                id="islbk57"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        <a
                          id="ixtspmt"
                          data-onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;60547200&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a>
                      </div>
                    </div>
                  </div>
                 
                  <div
                    id="ig6v48"
                    data-spr="29533875"
                    class="pin view black"
                    style={{ top: " 60%", left: "50%", display: "block" }}
                  >
                    <div id="ii7ola" class="pin-layer hide-mobile">
                      <div id="iwyknj" class="product-bottom column">
                        <a
                          id="ijja0q"
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="izx0xx"
                            // src={image2}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                        <h3 id="iopr3q">
                          <a
                            id="ihvaq8"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                            target="_self"
                          >
                            NÄMMARÖ
                            <span id="i2vfsw">
                              {/* لورم ایپسوم متن ساختگی با تولید */}
                            </span>
                          </a>
                        </h3>
                        <a
                          id="ibkp45"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                          target="_self"
                        >
                          <span
                            id="irl96j"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span id="iqmv1s" class="tl">
                              <u id="ipezmx">₺</u>
                            </span>
                          </span>
                          <div id="icp6vk" class="price">
                            <span
                              id="if2npn"
                              data-classname=""
                              class="new bti-none"
                            >
                              21,100
                              <span id="ie2qpu" class="tl">
                                <u id="i8ajl8">₺</u>
                              </span>
                            </span>
                          </div>
                        </a>
                        {/* <a
                          id="in0w1j"
                          data-onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                        >
                          <span class="btn-basket-text">
                            {" "}
                            متن ساختگی با تولید
                          </span>
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
                    <div id="i3ng8q" class="pin-dots show-mobile"></div>
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
              </div>


            </div>
            <div>
            Make your everyday essentials practical

            </div>
            <div className="pl-24">

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
                    src={slider31}
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
                    src={slider32}
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
                    src={slider33}
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
                    src={slider34}
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
                    src={slider35}
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
                    src={slider36}
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
                    src={secondSlider7}
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
                    src={secondSlider8}
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
                    src={secondSlider9}
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
                    src={secondSlider10}
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
                    src={secondSlider11}
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

            <div class="shoppable-info-container">
              <h2>
                <span>لورم ایپسوم متن ساختگی با تولید سادگی </span>
              </h2>
              <p>
                <span>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </span>{" "}
                </span>
              </p>
            </div>
            {/* divi */}
            <div class="row grid-images">
             
             
              <div class="col-md-3">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/sotronn-white-45-hr-scented-candle-in-pot-80562384">
                    <img
                      src={image16}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/sotronn-beyaz-45-saat-seramik-kapta-kokulu-mum-2.jpg"
                      alt="IKEA-sotronn beyaz 45 saat seramik kapta kokulu mum 2"
                      id="i76nut"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/sotronn-beyaz-45-saat-seramik-kapta-kokulu-mum-2.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="ipu4tj"
                    data-spr="80562384"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: " 35%",
                      left: "45%",
                    }}
                  >
                    <a
                      id="iisjoi"
                      href="https://www.ikea.com.tr/urun/sotronn-beyaz-45-saat-seramik-kapta-kokulu-mum-80562384"
                    ></a>
                    <a
                      id="i6urpf"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="icwjaz"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box"}}
                    ></a>
                    <div
                      id="ieam05"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"45%"  }}
                    >
                      <div
                        id="izblka"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="idf4zs"
                          href="https://www.ikea.com.tr/en/product/sotronn-white-45-hr-scented-candle-in-pot-80562384"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="i9qeur"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            // src={image1}
                            id="ivneqj"
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            // alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="iczrwi">
                          <a
                            id="iql47n"
                            href="https://www.ikea.com.tr/en/product/sotronn-white-45-hr-scented-candle-in-pot-80562384"
                            target="_self"
                          >
                            SÖTRÖNN
                          </a>
                        </h3>
                        <span
                          id="idyiuo"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          scented candle in pot, white
                        </span>
                        <span
                          id="ieady1"
                          data-classname="hide"
                          // class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="iwjqlx"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="ib35s6" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ivax8h" class="price-wrapper">
                          <span
                            id="icr8xl"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            279
                            <span
                              id="iggqh7"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="ikjvgi"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="ix9x9y"
                          data-onclick="shopping.addCartItem(&#39;80562384&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;80562384&#39;, false);"
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
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید{" "} */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/visslaan-gri-kutu-seti-90554538"></a>
                  <div
                    id="ijugjc"
                    data-spr="90554538"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: "45%",
                      left: "45%",
                    }}
                  >
                    <a
                      id="iib51c"
                      href="https://www.ikea.com.tr/urun/visslaan-gri-kutu-seti-90554538"
                    ></a>
                    <a
                      id="ios4t8"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="itqkqr"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box"}}
                    ></a>
                    <div
                      id="ioq5qh"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"45%"  }}
                    >
                      <div
                        id="iicyry"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="i0dg7a"
                          href="https://www.ikea.com.tr/en/product/visslaan-grey-box-set-90554538"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="i7k2lo"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="i7o6qk"
                            // src={image1}
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            // alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>

                        <h3 id="i2fsmg">
                          <a
                            id="iqewsj"
                            href="https://www.ikea.com.tr/en/product/visslaan-grey-box-set-90554538"
                            target="_self"
                          >
                            VISSLAÅN
                          </a>
                        </h3>
                        <span
                          id="ixkr4v"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          box set, grey
                        </span>
                        <span
                          id="ib7zte"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="iae5ju"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="i33tal" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="i3oqok" class="price-wrapper">
                          <span
                            id="i8g5h7"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            399
                            <span
                              id="ifkm7l"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="id39gv"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
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
                        {/* <a
                          id="iclall"
                          data-onclick="shopping.addCartItem(&#39;90554538&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;90554538&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <a href="https://www.ikea.com.tr/en/product/visslaan-grey-box-set-90554538">
                    <img
                      src={image17}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/visslaan-gri-kutu-seti.jpg"
                      alt="IKEA-visslaan gri kutu seti"
                      id="iwsyui"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/visslaan-gri-kutu-seti.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "} */}
                </div>
              </div>


              <div class="col-md-3">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/new-products">
                    <img
                      src={image14}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-ocak/yeni-en.jpg"
                      alt="IKEA-yeni en"
                      id="iidhhn"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-ocak/yeni-en.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  <div
                    id="iuk5fw"
                    data-spr="20574851"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: " 25%",
                      left: "45%",
                    }}
                  >
                    <a
                      id="i5wtjd"
                      href="https://www.ikea.com.tr/urun/rosenoxalis-cok-renkli-100x180-cm-plaj-havlusu-20574851"
                    ></a>
                    <a
                      id="i80yzz"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="i6kp5f"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="ijxvh4"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"50%" }}
                    >
                      <div
                        id="ijkhj9"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="ivj0or"
                          href="https://www.ikea.com.tr/en/product/rosenoxalis-multicolour-100x180-cm-beach-towel-20574851"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="iu1p5v"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" ,left:"50%"}}
                        >
                          <img
                            id="i41id9"
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            // src={image15}
                            // alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        {/* <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}

                        <h3 id="iec9n1">
                          <a
                            // id="i17de2"
                            href="https://www.ikea.com.tr/en/product/rosenoxalis-multicolour-100x180-cm-beach-towel-20574851"
                            target="_self"
                          >
                            ROSENOXALIS
                          </a>
                        </h3>
                        <span
                          id="idoarm"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          beach towel, multicolour
                        </span>
                        <span
                          id="isry5g"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="isb9m5"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="i1yhay" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ifz9yh" class="price-wrapper">
                          <span
                            id="ik7rd7"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            329
                            <span
                              id="ibqgqi"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="if3xdn"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="iz1uow"
                          data-onclick="shopping.addCartItem(&#39;20574851&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;20574851&#39;, false);"
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
                  {/* لورم ایپسوم متن ساختگی با تولید{" "} */}
                </div>
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/urun/rosenoxalis-cok-renkli-100x180-cm-plaj-havlusu-20574851"></a>
                  <div
                    id="iuk5fw"
                    data-spr="20574851"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: " 50%",
                      left: "50%",
                    }}
                  >
                    <a
                      id="i5wtjd"
                      href="https://www.ikea.com.tr/urun/rosenoxalis-cok-renkli-100x180-cm-plaj-havlusu-20574851"
                    ></a>
                    <a
                      id="i80yzz"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="i6kp5f"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="ijxvh4"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box",left:"50%" }}
                    >
                      <div
                        id="ijkhj9"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="ivj0or"
                          href="https://www.ikea.com.tr/en/product/rosenoxalis-multicolour-100x180-cm-beach-towel-20574851"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="iu1p5v"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" ,left:"50%"}}
                        >
                          <img
                            id="i41id9"
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            // src={image15}
                            // alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>

                        <h3 id="iec9n1">
                          <a
                            // id="i17de2"
                            href="https://www.ikea.com.tr/en/product/rosenoxalis-multicolour-100x180-cm-beach-towel-20574851"
                            target="_self"
                          >
                            ROSENOXALIS
                          </a>
                        </h3>
                        <span
                          id="idoarm"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          beach towel, multicolour
                        </span>
                        <span
                          id="isry5g"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="isb9m5"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u id="i1yhay" style={{ boxSizing: "border-box" }}>
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ifz9yh" class="price-wrapper">
                          <span
                            id="ik7rd7"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            329
                            <span
                              id="ibqgqi"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="if3xdn"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        {/* <a
                          id="iz1uow"
                          data-onclick="shopping.addCartItem(&#39;20574851&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;20574851&#39;, false);"
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
                  <a href="https://www.ikea.com.tr/en/product/rosenoxalis-multicolour-100x180-cm-beach-towel-20574851">
                    <img
                      src={image15}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/rosenoxali-cok-renkli-plaj-havlusu.jpg"
                      alt="IKEA-rosenoxali cok renkli plaj havlusu"
                      id="ied10g"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/rosenoxali-cok-renkli-plaj-havlusu.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید{" "} */}
                </div>
              </div>

               <div class="col-md-6">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/tonstad-off-white-120x47-cm-desk-80538209">
                    <img
                      src={image13}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/tonstad-kirik-beyaz-calisma-masasi.jpg"
                      alt="IKEA-tonstad kirik beyaz calisma masasi"
                      id="i8rnvb"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/tonstad-kirik-beyaz-calisma-masasi.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  {/* <div
                    id="idzrtjg"
                    data-spr="50538201"
                    class="shoppable-image-area"
                    style={{
                      boxSizing: "border-box",
                      top: "70%",
                      left: "80%",
                    }}
                  >
                    <a
                      id="i6thk1"
                      href="https://www.ikea.com.tr/urun/tonstad-kirik-beyaz-120x47-cm-calisma-masasi-80538209"
                    ></a>
                    <a
                      id="iaq5v7a"
                      href="https://www.ikea.com.tr/en/#"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <a
                      id="i53ya9g"
                      href="javascript:;"
                      class="shoppable-image-dot"
                      style={{ boxSizing: "border-box" }}
                    ></a>
                    <div
                      id="i88qznh"
                      class="shoppable-image-tag shoppable-image-tag-bottom"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        id="iudkgxa"
                        class="shoppable-image-tag-inner"
                        style={{ boxSizing: "border-box" }}
                      >
                        <a
                          id="i7ybvsf"
                          href="https://www.ikea.com.tr/en/product/tonstad-off-white-35x60-cm-storage-unit-50538201"
                          style={{ boxSizing: "border-box" }}
                        ></a>
                        <a
                          id="idbyqog"
                          data-classname=""
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="it433r8"
                            src={image13}
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="IKEA - yeni"
                            data-classname=""
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <h3 id="ir5brne">
                          <a
                            id="itkhicx"
                            href="https://www.ikea.com.tr/en/product/tonstad-off-white-35x60-cm-storage-unit-50538201"
                            target="_self"
                          >
                            TONSTAD
                          </a>
                        </h3>
                        <span
                          id="ilu9on8"
                          data-desc=""
                          class="desc"
                          style={{ boxSizing: "border-box" }}
                        >
                          storage unit, off white
                        </span>
                        <span
                          id="iv172mf"
                          data-classname="hide"
                          class="wonwon-old-price hide"
                          style={{ boxSizing: "border-box" }}
                        >
                          <span
                            id="i0akmoj"
                            class="tl"
                            style={{ boxSizing: "border-box" }}
                          >
                            <u
                              id="i7pcpyp"
                              style={{ boxSizing: "border-box" }}
                            >
                              ₺
                            </u>
                          </span>
                        </span>
                        <div id="ilwvnhw" class="price-wrapper">
                          <span
                            id="irksjoi"
                            data-classname=""
                            class="price bti-none"
                            style={{ boxSizing: "border-box" }}
                          >
                            1,999
                            <span
                              id="iwxx19u"
                              class="tl"
                              style={{ boxSizing: "border-box" }}
                            >
                              <u
                                id="izmwgki"
                                style={{ boxSizing: "border-box" }}
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                        </div>
                        <a
                          id="i3z6gva"
                          data-onclick="shopping.addCartItem(&#39;50538201&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;50538201&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a>
                      </div>
                    </div>
                  </div> */}
                  <div
                    id="in83ae"
                    data-spr="80538209"
                    class="pin view black"
                    style={{ top: " 8%", left: " 88%", display: "block",color:"white" }}
                  >
                    {/* <div id="i2x4il" class="pin-layer hide-mobile">
                      <div id="irnraj" class="product-bottom column">
                        <a
                          id="izgews"
                          target="_self"
                          href="https://www.ikea.com.tr/en/new-products"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            // id="i0pyhv"
                            // src={image15}
                            // src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            data-classname=""
                            // class="product-isLogo IsNew"
                          />
                        </a>
                        <h3
className="text-white text-4xl"
                          // id="itfn6k"
                        >
                          <a
                            id="ixodxt"
                            href="https://www.ikea.com.tr/en/product/tonstad-off-white-120x47-cm-desk-80538209"
                            target="_self"
                            className="text-white "
                          >
                            TONSTAD<span className="text-white"
                              // id="ibqnrj"
                            >desk, off white</span>
                          </a>
                        </h3>
                        <a
                          id="ihuooo"
                          href="https://www.ikea.com.tr/en/product/tonstad-off-white-120x47-cm-desk-80538209"
                          target="_self"
                        >
                          <span
                            id="igtohu"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span id="i2o5rk" class="tl">
                              <u id="isq9vs">₺</u>
                            </span>
                          </span>
                          <div id="i7e8nl" class="price">
                            <span
                              id="iuhnpl"
                              data-classname=""
                              class="new bti-none"
                            >
                              4,499
                              <span id="i3xhrf" class="tl">
                                <u id="iuoxae">₺</u>
                              </span>
                            </span>
                          </div>
                        </a>
                        <a
                          id="irgp3w"
                          data-onclick="shopping.addCartItem(&#39;80538209&#39;, false);"
                          href="javascript:;"
                          class="btn btn-basket"
                          onclick="shopping.addCartItem(&#39;80538209&#39;, false);"
                        >
                          <span class="btn-basket-text">Sepete Ekle</span>
                        </a>
                      </div>
                    </div> */}
                    <div id="ii7ola" class="pin-layer hide-mobile">
                      <div
                        // id="iwyknj"
                        // class="product-bottom column"
                        className="flex-col flex "
                      >
                        <a
                          // id="ijja0q"
                          target="_self"
                          href="https://www.ikea.com.tr/en/"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            id="izx0xx"
                            // src={row1}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          />
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>

                        <h3
                          className="text-3x"
                          // id="iopr3q"
                        >
                          <a
                            // id="ihvaq8"
                            href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                            target="_self"
                            className=" flex flex-col font-bold text-white "
                          >
                            STORAVAN
                            <span
                              className="font-normal bover:underline-none mt-3"
                              // id="i2vfsw"
                            >
                              لورم ایپسوم متن ساختگی
                            </span>
                          </a>
                        </h3>
                        <a
                          // id="ibkp45"
                          href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875"
                          target="_self"
                        >
                          <span
                            // id="irl96j"
                            data-classname="hide"
                            class="old hide"
                          >
                            <span
                              // id="iqmv1s"
                              class="tl"
                            >
                              <u
                              // id="ipezmx"
                              >
                                ₺
                              </u>
                            </span>
                          </span>
                          <div
                            // id="icp6vk"
                            // class="price">
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                            // style={{
                            // backgroundColor:"#C40C0C"
                            // }}
                          >
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span
                                // id="if2npn"
                                data-classname=""
                                className="text-3xl font-vazir text-white font-bold"

                                // class="new bti-none"
                              >
                                21,100
                                <span
                                // id="ie2qpu" class="tl">
                                >
                                  <u
                                  // id="i8ajl8"
                                  >
                                    ₺
                                  </u>
                                </span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          // id="in0w1j"
                          data-onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                          href="javascript:;"
                          // class="btn btn-basket"
                          class="btn "
                          // className="rounded-full w-[150%] p-5 bg-red-600"
                          onclick="shopping.addCartItem(&#39;29533875&#39;, false);"
                        >
                          {/* <span class="btn-basket-text font-vazir"> */}{" "}
                          <button className="w-full p-5  text-white bg-[#0058A2] rounded-full  flex  items-center">
                            <BsBasket3 className="ml-3" />
                            متن ساختگی با تولید
                          </button>
                          {/* <span className="font-vazir">


                            متن ساختگی با تولید
                          </span> */}
                        </a>
                      </div>
                    </div>
                    <div id="ig0b7h" class="pin-dots show-mobile"></div>
                  </div>{" "}
                  {/* لورم ایپسوم متن ساختگی با تولید */}
                </div>
              </div>
            </div>{" "}


            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
            
            <span id="ildwk" class="d-none"></span>
            {/* <div class="shoppable-info-container">
              <h2>
                <span>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </span>
                </span>
              </h2>
            </div> */}
            {/* <span id="ik6dkv" class="d-none"></span>
            
            لورم ایپسوم متن ساختگی با تولید سادگی ن
            <div class="shoppable-info-container">
              <h2>
                <span>
                  <span>لورم ایپسوم متن ساختگی با تولید سادگی ن</span>
                </span>
              </h2>
              <p>
                <span>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                    گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </span>{" "}
                </span>
              </p>
              <a
                href="https://www.ikea.com.tr/en/category/outdoor-lighting"
                class="btn btn-outline-black"
              >
                لورم ایپسوم متن ساختگی با تولید<span>products</span>
              </a>
            </div> */}
           
            لورم ایپسوم متن ساختگی با تولی{" "}
            <div class="shoppableImageBox">
              <h2>لورم ایپسوم متن ساختگی با تولی</h2>
              <div class="boxWrapper">
                <div class="imageBox">
                  <a href="https://www.ikea.com.tr/en/category/broggan-collection">
                    <img
                      src={image18}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-nisan/broggan-koleksiyonu.jpg"
                      alt="IKEA-broggan koleksiyonu"
                      id="isdh"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-nisan/broggan-koleksiyonu.jpg"
                      class="img-responsive"
                    />
                  </a>
                </div>
                <div class="textBox">
                  <a href="https://www.ikea.com.tr/en/category/broggan-collection">
                    <div class="newBox">
                      <span>New</span>
                    </div>
                    <div class="titleBox">
                      <span>
                        <span>
                          لورم ایپسوم متن ساختگی با تولید<span>BRÖGGAN</span>{" "}
                          Collection!
                        </span>
                      </span>
                      <div class="mobileIconBox">
                        <svg
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="shoppableImageIconMobile"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="m15.5996 12.0007-5.785 5.7857-1.4143-1.4141 4.3711-4.3716L8.4003 7.629l1.4143-1.4142 5.785 5.7859z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="iconBox">
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="shoppableImageIcon"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="m20.0008 12.0001-8-8.001-1.4143 1.414L16.1727 11H4v2h12.1723l-5.5868 5.5866 1.4141 1.4142 8.0012-8.0007z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>{" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
            <div class="shoppable-info-container">
              <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم!</h2>
              <a
                href="https://www.ikea.com.tr/en/category/collections"
                class="btn btn-outline-black"
              >
                لورم ایپسوم متن ساختگی
              </a>
            </div>
            <span id="i04f" class="d-none"></span>
            

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
                    slidesPerView: 2.5,
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
                    src={slider21}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative"
                    // class="img-responsive gjs-hovered relative"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider22}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider23}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider24}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider25}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider26}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider27}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
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
                    src={slider28}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    class="img-responsive gjs-hovered"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span> */}
                </SwiperSlide>
              </Swiper>


            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
            <div class="row shoppable-image">
              <div class="col-xs-12 col-sm-3">
                <div class="image-parent">
                  <span>
                    <a href="https://www.ikea.com.tr/en/ideas/sustainability-small-changes-big-impacts">
                      <img
                        // src={image9}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-surdurulebilirlik-EN.jpg"
                        id="ix60wfs"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-surdurulebilirlik-EN.jpg"
                        alt="IKEA-ana sayfa surdurulebilirlik EN"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="image-parent">
                  <span>
                    <a href="https://www.ikea.com.tr/en/social-responsibility-projects">
                      <img
                        // src={image9}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-sosyal-sorumluluk-EN.jpg"
                        id="ie5d5px"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-sosyal-sorumluluk-EN.jpg"
                        alt="IKEA-ana sayfa sosyal sorumluluk EN"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="image-parent">
                  <span>
                    <a href="https://www.ikea.com.tr/en/safety-at-home">
                      <img
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-evde-guvenlik-EN.jpg"
                        // src={image9}
                        id="i8hmwfe"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-evde-guvenlik-EN.jpg"
                        alt="IKEA-ana sayfa evde guvenlik EN"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="image-parent">
                  <span>
                    <a href="https://www.ikea.com.tr/en/ikea-important-notice">
                      <img
                        // src={image9}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-onemli-bilgilendirme-EN.jpg"
                        id="iqhdx2k"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/ana-sayfa-onemli-bilgilendirme-EN.jpg"
                        alt="IKEA-ana sayfa onemli bilgilendirme EN"
                        class="img-responsive"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>{" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
            <div class="shoppable-info-container">
              <h2>لورم ایپسوم متن ساختگی</h2>
            </div>
            <div class="pub-carousel-wrapper shop-products">
              <div class="pub-carousel-inner">
                <div class="pub-carousel-box">
                  <div class="pub-carousel swiper-container info-carousel swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode">
                    <ul
                      class="swiper-wrapper"
                      id="swiper-wrapper-8c6a93a54b11e8a2"
                      aria-live="polite"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <li
                        id="ian1h-2"
                        role="group"
                        aria-label="1 / 11"
                        class="swiper-slide swiper-slide-active"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="io0wf-2"
                          href="https://www.ikea.com.tr/en/click-collect"
                        >
                          <span
                            id="ih2bv-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="iuoii-2"
                              // src={image9}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-magazadan-teslimat.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-magazadan-teslimat.jpg"
                              alt="IKEA-anasayfa hizmetler magazadan teslimat"
                              class="img-responsive"
                            />
                          </span>
                          <span id="iom0g-2" class="pub-btn-small">
                            <span id="imnt5-2" class="pub-btn-inner">
                              <span id="ifhds-2">Click and Collect</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="ic7bp-2"
                        role="group"
                        aria-label="2 / 11"
                        class="swiper-slide swiper-slide-next"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="i4ep6-2"
                          href="https://www.ikea.com.tr/en/assembly-service"
                        >
                          <span
                            id="isn1w-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="izcbp-2"
                              // src={image9}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-montaj.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-montaj.jpg"
                              alt="IKEA-anasayfa hizmetler montaj"
                              class="img-responsive"
                            />
                          </span>
                          <span id="i4u4o-2" class="pub-btn-small">
                            <span id="ioj2h-2" class="pub-btn-inner">
                              <span id="ijob4-2">Assembly Service</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="iwfpj-2"
                        role="group"
                        aria-label="3 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="i4jr7-2"
                          href="https://www.ikea.com.tr/en/planners"
                        >
                          <span
                            id="ig139-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="ix7qq-2"
                              // src={image9}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-planlayicilar.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-planlayicilar.jpg"
                              alt="IKEA-anasayfa hizmetler planlayicilar"
                              class="img-responsive"
                            />
                          </span>
                          <span id="iqlyl-2" class="pub-btn-small">
                            <span id="i305o-2" class="pub-btn-inner">
                              <span id="il7vz-2">Planners</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="ipff14r"
                        role="group"
                        aria-label="4 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="i9f8i3m"
                          href="https://www.ikea.com.tr/en/shop-online/order-change-refund"
                        >
                          <span
                            id="i2px4qk"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="i5daffl"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-iptal-iade.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-iptal-iade.jpg"
                              alt="IKEA-anasayfa hizmetler iptal iade"
                              class="img-responsive"
                            />
                          </span>
                          <span id="icyhpba" class="pub-btn-small">
                            <span id="ivlm0f2" class="pub-btn-inner">
                              <span id="injy3r2">Cancel &amp; Refund</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="igr7k-2"
                        role="group"
                        aria-label="5 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="inzfl-2"
                          href="https://www.ikea.com.tr/en/payment-options"
                        >
                          <span
                            id="iq3oq-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="idsfc-2"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-odeme-secenekleri.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-odeme-secenekleri.jpg"
                              alt="IKEA-anasayfa hizmetler odeme secenekleri"
                              class="img-responsive"
                            />
                          </span>
                          <span id="iwprf-2" class="pub-btn-small">
                            <span id="i6lkg-2" class="pub-btn-inner">
                              <span id="i017l-2">Payment Options</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="imo61-2"
                        role="group"
                        aria-label="6 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="i5t41-2"
                          href="https://www.ikea.com.tr/en/gift-card"
                        >
                          <span
                            id="iugd2-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="i6jle-2"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-hediye-kart.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-hediye-kart.jpg"
                              alt="IKEA-anasayfa hizmetler hediye kart"
                              class="img-responsive"
                            />
                          </span>
                          <span id="ifuym-2" class="pub-btn-small">
                            <span id="iz87i-2" class="pub-btn-inner">
                              <span id="iam4e-2">
                                Gift Card and Digital Coupon
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="iduih-2"
                        role="group"
                        aria-label="7 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="ijpco-2"
                          href="https://www.ikea.com.tr/en/delivery-service"
                        >
                          <span
                            id="i23lm-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="i5gq8-2"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-nakliye.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-nakliye.jpg"
                              alt="IKEA-anasayfa hizmetler nakliye"
                              class="img-responsive"
                            />
                          </span>
                          <span id="isy6f-2" class="pub-btn-small">
                            <span id="ijwa1-2" class="pub-btn-inner">
                              <span id="ioftm-2">Delivery Service</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="i1czf-2"
                        role="group"
                        aria-label="8 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="is92s-2"
                          href="https://www.ikea.com.tr/en/kitchen-measurement"
                        >
                          <span
                            id="ii1ey-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="iwe02-2"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-mutfak-olcum.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-mutfak-olcum.jpg"
                              alt="IKEA-anasayfa hizmetler mutfak olcum"
                              class="img-responsive"
                            />
                          </span>
                          <span id="i8wii-2" class="pub-btn-small">
                            <span id="i8y03-2" class="pub-btn-inner">
                              <span id="ihzph-2">
                                Kitchen Measurement Services
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="ixg7aqv"
                        role="group"
                        aria-label="9 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="im5t742"
                          href="https://www.ikea.com.tr/en/sewing-service"
                        >
                          <span
                            id="icdkv9k"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="i4warns"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-dikis.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-dikis.jpg"
                              alt="IKEA-anasayfa hizmetler dikis"
                              class="img-responsive"
                            />
                          </span>
                          <span id="i0amy5t" class="pub-btn-small">
                            <span id="ie3ibft" class="pub-btn-inner">
                              <span id="ir8go68">Sewing Service</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        id="im3y6-2"
                        role="group"
                        aria-label="10 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="iqzkk-2"
                          href="https://www.ikea.com.tr/en/picking-with-delivery"
                        >
                          <span
                            id="itoup-2"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="i2bqq-2"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-urun-toplama.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-urun-toplama.jpg"
                              alt="IKEA-anasayfa hizmetler urun toplama"
                              class="img-responsive"
                            />
                          </span>
                          <span id="i0viu-2" class="pub-btn-small" />
                          <span id="i4qap-2" class="pub-btn-inner">
                            <span id="ik1ot-2">Picking With Delivery</span>
                          </span>
                          {/* </span> */}
                        </a>
                      </li>
                      <li
                        id="iqetclk"
                        role="group"
                        aria-label="11 / 11"
                        class="swiper-slide"
                        style={{ marginRight: "10px" }}
                      >
                        <a
                          id="i6oifwx"
                          href="https://www.ikea.com.tr/en/spare-parts"
                        >
                          <span
                            id="if781ku"
                            class="pub-aspect-ratio-image pub-aspect-ratio-image-portrait"
                          >
                            <img
                              id="iepc8yh"
                              src={image1}
                              // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-yedek-parca.jpg"
                              data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/hizmetler/anasayfa-hizmetler-yedek-parca.jpg"
                              alt="IKEA-anasayfa hizmetler yedek parca"
                              class="img-responsive"
                            />
                          </span>
                          <span id="i3x0ogd" class="pub-btn-small">
                            <span id="il380rl" class="pub-btn-inner">
                              <span id="ib5of8w">Spare Parts</span>
                            </span>
                          </span>
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
                  aria-controls="swiper-wrapper-8c6a93a54b11e8a2"
                  aria-disabled="true"
                ></div>
                <div
                  class="swiper-button swiper-button-next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-8c6a93a54b11e8a2"
                  aria-disabled="false"
                ></div>
                <div class="swiper-scrollbar">
                  <div
                    class="swiper-scrollbar-drag"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      width: "495.087px",
                    }}
                  ></div>
                </div>
              </div>
            </div>{" "}
           
            لورم ایپسوم متن ساختگی{" "}
            <style>
              {/* @media (max-width: 400px) {
  #i0x2dl {
    top: 77% !important;
  }

  #ig6v48 {
    top: 50% !important;
    left: 25% !important;
  }

  #in83ae {
    top: 50% !important;
  }

  #ikymnm {
    top: 25% !important;
    left: 62% !important;
  }
} */}
            </style>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewHome;
