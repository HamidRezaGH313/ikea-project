import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { BsBasket3 } from "react-icons/bs";

import slider11 from "../../Images/NewProducts/yeni-dikey-en.jpg";
import slider12 from "../../Images/NewProducts/yeni-ne-var-mobilyalar-en.jpg";
import slider13 from "../../Images/NewProducts/yeni-ne-var-dekorasyon-en.jpg";
import slider14 from "../../Images/NewProducts/yeni-ne-var-ev-tekstili-en.jpg";
import slider15 from "../../Images/NewProducts/yeni-ne-var-calisma-alanlari-en.jpg";
import slider16 from "../../Images/NewProducts/yeni-ne-var-zuccaciye-en.jpg";
import slider17 from "../../Images/NewProducts/yeni-ne-var-depolama-ve-organizasyon-en.jpg";
import slider18 from "../../Images/NewProducts/yeni-ne-var-koleksiyonlar-en.jpg";

import image1 from "../../Images/NewProducts/furuon-kahverengi-masa-sandalye-tabure-seti.jpg";
import image2 from "../../Images/NewProducts/nammaro-acik-kahverengi-sezlong.jpg";
import image3 from "../../Images/NewProducts/solvinden-beyaz-led-li-gunes-enerjili-aydinlatma.jpg";
import image4 from "../../Images/NewProducts/lerholmen-akasya-piknik-masasi.jpg";
import image5 from "../../Images/NewProducts/solvinden-siyah-led-li-gunes-enerjili-aydinlatma.jpg";

import slider21 from "../../Images/NewProducts/PE907200.jpg";
import slider21Hover from "../../Images/NewProducts/PE907199.jpg";

import slider22 from "../../Images/NewProducts/PE912435.jpg";
import slider22Hover from "../../Images/NewProducts/PE913472.jpg";

import slider23 from "../../Images/NewProducts/PE913789.jpg";
import slider23Hover from "../../Images/NewProducts/PH196823.jpg";

import slider24 from "../../Images/NewProducts/PE933262.jpg";
import slider24Hover from "../../Images/NewProducts/PE932211.jpg";

import slider25 from "../../Images/NewProducts/PE939768.jpg";
import slider25Hover from "../../Images/NewProducts/PE933624.jpg";

import slider26 from "../../Images/NewProducts/PE926805.jpg";
import slider26Hover from "../../Images/NewProducts/PE926806.jpg";

import slider27 from "../../Images/NewProducts/PE896429.jpg";
import slider27Hover from "../../Images/NewProducts/PE916723.jpg";

import slider28 from "../../Images/NewProducts/PE929159.jpg";
import slider28Hover from "../../Images/NewProducts/PE929160.jpg";

import slider29 from "../../Images/NewProducts/PE890629.jpg";
import slider29Hover from "../../Images/NewProducts/PE890625.jpg";

import slider210 from "../../Images/NewProducts/PE925113.jpg";
import slider210Hover from "../../Images/NewProducts/PE925112.jpg";

import side1 from "../../Images/NewProducts/borrby-yesil-fener-web.jpg";
import side2 from "../../Images/NewProducts/borrby-yesil-fener-web (1).jpg";

import side3 from "../../Images/NewProducts/glasort-serisi-1.jpg";
import side4 from "../../Images/NewProducts/glasort-serisi-2.jpg";

import side5 from "../../Images/NewProducts/sath-ara-bant-web-en.jpg";
// import side6 from '../../Images/NewProducts/'

import image6 from "../../Images/NewProducts/baggebo-beyaz-vitrin.jpg";
import image7 from "../../Images/NewProducts/visslaan-gri-bolmeli-duzenleyici.jpg";
import image8 from "../../Images/NewProducts/ragodling-bej-bolmeli-duzenleyici.jpg";
import image9 from "../../Images/NewProducts/mjolkkanna-bambu-sepet.jpg";
import image10 from "../../Images/NewProducts/bollosund-bej-makyaj-cantasi.jpg";

import slider31 from "../../Images/NewProducts/PE901906.jpg";
import slider31Hover from "../../Images/NewProducts/PE920328.jpg";

import slider32 from "../../Images/NewProducts/PE902218.jpg";
import slider32Hover from "../../Images/NewProducts/PE915156.jpg";

import slider33 from "../../Images/NewProducts/PE930497.jpg";
import slider33Hover from "../../Images/NewProducts/PE930496.jpg";

import slider34 from "../../Images/NewProducts/PE928102.jpg";
import slider34Hover from "../../Images/NewProducts/PE930477.jpg";

import slider35 from "../../Images/NewProducts/PE901891.jpg";
import slider35Hover from "../../Images/NewProducts/PE920330.jpg";

import slider36 from "../../Images/NewProducts/PE923080.jpg";
import slider36Hover from "../../Images/NewProducts/PE933912.jpg";

import slider37 from "../../Images/NewProducts/PE911232.jpg";
import slider37Hover from "../../Images/NewProducts/PE911236.jpg";

import slider38 from "../../Images/NewProducts/PE933459.jpg";
// import slider38Hover from '../../Images/NewProducts/'

import slider39 from "../../Images/NewProducts/PE605590.jpg";
import slider39Hover from "../../Images/NewProducts/PE605588.jpg";

import slider310 from "../../Images/NewProducts/PE919717.jpg";
import slider310Hover from "../../Images/NewProducts/PE931436.jpg";

import slider311 from "../../Images/NewProducts/PE692561.jpg";
import slider311Hover from "../../Images/NewProducts/PE616310.jpg";

import slider312 from "../../Images/NewProducts/PE913678.jpg";
// import slider312Hover from '../../Images/NewProducts/'

import slider313 from "../../Images/NewProducts/PE905804.jpg";
import slider313Hover from "../../Images/NewProducts/PE905805.jpg";

import slider314 from "../../Images/NewProducts/PE668995.jpg";
import slider314Hover from "../../Images/NewProducts/PE668996.jpg";

import bgredImage from "../../Images/NewProducts/buskverk-gri-celik-saksi.jpg";

import side7 from "../../Images/NewProducts/fridhult-skiftebo-sari-2-li-yatakli-kanepe-1.jpg";
import side8 from "../../Images/NewProducts/fridhult-skiftebo-sari-2-li-yatakli-kanepe-2.jpg";

import slider41 from "../../Images/NewProducts/PE911199.jpg";
import slider41Hover from "../../Images/NewProducts/PE911198.jpg";

import slider42 from "../../Images/NewProducts/PE907297.jpg";
import slider42Hover from "../../Images/NewProducts/PH195683.jpg";

import slider43 from "../../Images/NewProducts/PE926999.jpg";
import slider43Hover from "../../Images/NewProducts/PH195671.jpg";

import slider44 from "../../Images/NewProducts/PE919734.jpg";
import slider44Hover from "../../Images/NewProducts/PE935887.jpg";

import slider45 from "../../Images/NewProducts/PE916686.jpg";
import slider45Hover from "../../Images/NewProducts/PE936337.jpg";

import slider46 from "../../Images/NewProducts/PE911311.jpg";
import slider46Hover from "../../Images/NewProducts/PE921160.jpg";

import slider47 from "../../Images/NewProducts/PE919730.jpg";
import slider47Hover from "../../Images/NewProducts/PE927497.jpg";

import slider48 from "../../Images/NewProducts/PE923207.jpg";
import slider48Hover from "../../Images/NewProducts/PE929651.jpg";

import slider49 from "../../Images/NewProducts/PE905849.jpg";
import slider49Hover from "../../Images/NewProducts/PE921235.jpg";

import slider410 from "../../Images/NewProducts/PE911231.jpg";
import slider410Hover from "../../Images/NewProducts/PE911237.jpg";

import image11 from "../../Images/NewProducts/mittzon-serisi-1.jpg";
import image12 from "../../Images/NewProducts/mittzon-serisi-2.jpg";
import image13 from "../../Images/NewProducts/mittzon-serisi-3.jpg";
import image14 from "../../Images/NewProducts/mittzon-serisi-4.jpg";
import image15 from "../../Images/NewProducts/mittzon-serisi-5.jpg";

import side9 from "../../Images/NewProducts/hotellrum-mavi-yesil-sari-hali-1.jpg";
import side10 from "../../Images/NewProducts/hotellrum-mavi-yesil-sari-hali-2.jpg";

import product1 from "../../Images/NewProducts/PE818094.webp";
import HoverProduct1 from "../../Images/NewProducts/PE842162.webp";

import product2 from "../../Images/NewProducts/PE818094.webp";
import HoverProduct2 from "../../Images/NewProducts/PE842162.webp";

import product3 from "../../Images/NewProducts/PE920354.webp";
import HoverProduct3 from "../../Images/NewProducts/PE920369.webp";
import SubProduct31 from "../../Images/NewProducts/PE920368.webp";
import SubProduct32 from "../../Images/NewProducts/PE774418.webp";
// import Subproduct3 from '../../Images/NewProducts/PE920369.webp'

import product4 from "../../Images/NewProducts/PE911203.webp";
import SubProduct41 from "../../Images/NewProducts/PE911199.webp";
import SubProduct42 from "../../Images/NewProducts/PE911201.webp";
import HoverProduct4 from "../../Images/NewProducts/PH195926.webp";

import product5 from "../../Images/NewProducts/PE911199 (1).jpg";
import HoverProduct5 from "../../Images/NewProducts/PE911198 (1).jpg";
import SubProduct51 from "../../Images/NewProducts/PE911199.webp";
import SubProduct52 from "../../Images/NewProducts/PE911201.webp";

import product6 from "../../Images/NewProducts/PE911201 (1).webp";
import HoverProduct6 from "../../Images/NewProducts/PE911206.webp";

import SubProduct61 from "../../Images/NewProducts/PE911199.webp";
import SubProduct62 from "../../Images/NewProducts/PE911201.webp";

import product7 from "../../Images/NewProducts/PE926999.jpg";
import HoverProduct7 from "../../Images/NewProducts/PH195671.jpg";
import product8 from "../../Images/NewProducts/PE911311.jpg";
import SubProduct81 from "../../Images/NewProducts/PE768589.webp";
import SubProduct82 from "../../Images/NewProducts/PE848987.webp";
import HoverProduct8 from "../../Images/NewProducts/PE921160.jpg";

import product9 from "../../Images/NewProducts/PE921899.webp";
import SubProduct91 from "../../Images/NewProducts/PE921874.webp";
import HoverProduct9 from "../../Images/NewProducts/PE921882.webp";

import product10 from "../../Images/NewProducts/PE763867.webp";
import HoverProduct10 from "../../Images/NewProducts/PE838679.webp";
import product11 from "../../Images/NewProducts/PE919359.webp";
import SubProduct11 from "../../Images/NewProducts/PE814147.webp";
import HoverProduct11 from "../../Images/NewProducts/PE927554.webp";
import product12 from "../../Images/NewProducts/PE815393.webp";
import HoverProduct12 from "../../Images/NewProducts/PH178225.webp";
import Filter from "../Filter";

const NewProducts = () => {
  const [Color, setColor] = useState(false);
  const [Function, setFunction] = useState(false);
  const [Category, setCategory] = useState(false);
  const [Price, setPrice] = useState(false);
  const [Size, setSize] = useState(false);
  const [Frimness, setFrimness] = useState(false);
  const [Sort, setSort] = useState(false);

  const [hoverSlider21, setHoverSlider21] = useState(false);
  const [hoverSlider22, setHoverSlider22] = useState(false);
  const [hoverSlider23, setHoverSlider23] = useState(false);
  const [hoverSlider24, setHoverSlider24] = useState(false);
  const [hoverSlider25, setHoverSlider25] = useState(false);
  const [hoverSlider26, setHoverSlider26] = useState(false);
  const [hoverSlider27, setHoverSlider27] = useState(false);
  const [hoverSlider28, setHoverSlider28] = useState(false);
  const [hoverSlider29, setHoverSlider29] = useState(false);
  const [hoverSlider210, setHoverSlider210] = useState(false);
  const onMouseEnterHandlerSlider21 = () => {
    setHoverSlider21(true);
  };
  const onMouseLeaveHandlerSlider21 = () => {
    setHoverSlider21(false);
  };
  const onMouseEnterHandlerSlider22 = () => {
    setHoverSlider22(true);
  };
  const onMouseLeaveHandlerSlider22 = () => {
    setHoverSlider22(false);
  };
  const onMouseEnterHandlerSlider23 = () => {
    setHoverSlider23(true);
  };
  const onMouseLeaveHandlerSlider23 = () => {
    setHoverSlider23(false);
  };
  const onMouseEnterHandlerSlider24 = () => {
    setHoverSlider24(true);
  };
  const onMouseLeaveHandlerSlider24 = () => {
    setHoverSlider24(false);
  };
  const onMouseEnterHandlerSlider25 = () => {
    setHoverSlider25(true);
  };
  const onMouseLeaveHandlerSlider25 = () => {
    setHoverSlider25(false);
  };
  const onMouseEnterHandlerSlider26 = () => {
    setHoverSlider26(true);
  };
  const onMouseLeaveHandlerSlider26 = () => {
    setHoverSlider26(false);
  };
  const onMouseEnterHandlerSlider27 = () => {
    setHoverSlider27(true);
  };
  const onMouseLeaveHandlerSlider27 = () => {
    setHoverSlider27(false);
  };
  const onMouseEnterHandlerSlider28 = () => {
    setHoverSlider28(true);
  };
  const onMouseLeaveHandlerSlider28 = () => {
    setHoverSlider28(false);
  };
  const onMouseEnterHandlerSlider29 = () => {
    setHoverSlider29(true);
  };
  const onMouseLeaveHandlerSlider29 = () => {
    setHoverSlider29(false);
  };
  const onMouseEnterHandlerSlider210 = () => {
    setHoverSlider210(true);
  };
  const onMouseLeaveHandlerSlider210 = () => {
    setHoverSlider210(false);
  };

  const [hoverSlider31, setHoverSlider31] = useState(false);
  const [hoverSlider32, setHoverSlider32] = useState(false);
  const [hoverSlider33, setHoverSlider33] = useState(false);
  const [hoverSlider34, setHoverSlider34] = useState(false);
  const [hoverSlider35, setHoverSlider35] = useState(false);
  const [hoverSlider36, setHoverSlider36] = useState(false);
  const [hoverSlider37, setHoverSlider37] = useState(false);
  const [hoverSlider38, setHoverSlider38] = useState(false);
  const [hoverSlider39, setHoverSlider39] = useState(false);
  const [hoverSlider310, setHoverSlider310] = useState(false);
  const [hoverSlider311, setHoverSlider311] = useState(false);
  const [hoverSlider312, setHoverSlider312] = useState(false);
  const [hoverSlider313, setHoverSlider313] = useState(false);
  const [hoverSlider314, setHoverSlider314] = useState(false);

  const onMouseEnterHandlerSlider31 = () => {
    setHoverSlider31(true);
  };
  const onMouseLeaveHandlerSlider31 = () => {
    setHoverSlider31(false);
  };
  const onMouseEnterHandlerSlider32 = () => {
    setHoverSlider32(true);
  };
  const onMouseLeaveHandlerSlider32 = () => {
    setHoverSlider32(false);
  };
  const onMouseEnterHandlerSlider33 = () => {
    setHoverSlider33(true);
  };
  const onMouseLeaveHandlerSlider33 = () => {
    setHoverSlider33(false);
  };
  const onMouseEnterHandlerSlider34 = () => {
    setHoverSlider34(true);
  };
  const onMouseLeaveHandlerSlider34 = () => {
    setHoverSlider34(false);
  };
  const onMouseEnterHandlerSlider35 = () => {
    setHoverSlider35(true);
  };
  const onMouseLeaveHandlerSlider35 = () => {
    setHoverSlider35(false);
  };
  const onMouseEnterHandlerSlider36 = () => {
    setHoverSlider36(true);
  };
  const onMouseLeaveHandlerSlider36 = () => {
    setHoverSlider36(false);
  };
  const onMouseEnterHandlerSlider37 = () => {
    setHoverSlider37(true);
  };
  const onMouseLeaveHandlerSlider37 = () => {
    setHoverSlider37(false);
  };
  const onMouseEnterHandlerSlider38 = () => {
    setHoverSlider38(true);
  };
  const onMouseLeaveHandlerSlider38 = () => {
    setHoverSlider38(false);
  };
  const onMouseEnterHandlerSlider39 = () => {
    setHoverSlider39(true);
  };
  const onMouseLeaveHandlerSlider39 = () => {
    setHoverSlider39(false);
  };
  const onMouseEnterHandlerSlider310 = () => {
    setHoverSlider310(true);
  };
  const onMouseLeaveHandlerSlider310 = () => {
    setHoverSlider310(false);
  };
  const onMouseEnterHandlerSlider311 = () => {
    setHoverSlider311(true);
  };
  const onMouseLeaveHandlerSlider311 = () => {
    setHoverSlider311(false);
  };
  const onMouseEnterHandlerSlider312 = () => {
    setHoverSlider312(true);
  };
  const onMouseLeaveHandlerSlider312 = () => {
    setHoverSlider312(false);
  };
  const onMouseEnterHandlerSlider313 = () => {
    setHoverSlider313(true);
  };
  const onMouseLeaveHandlerSlider313 = () => {
    setHoverSlider313(false);
  };
  const onMouseEnterHandlerSlider314 = () => {
    setHoverSlider314(true);
  };
  const onMouseLeaveHandlerSlider314 = () => {
    setHoverSlider314(false);
  };

  const [hoverSlider41, setHoverSlider41] = useState(false);
  const [hoverSlider42, setHoverSlider42] = useState(false);
  const [hoverSlider43, setHoverSlider43] = useState(false);
  const [hoverSlider44, setHoverSlider44] = useState(false);
  const [hoverSlider45, setHoverSlider45] = useState(false);
  const [hoverSlider46, setHoverSlider46] = useState(false);
  const [hoverSlider47, setHoverSlider47] = useState(false);
  const [hoverSlider48, setHoverSlider48] = useState(false);
  const [hoverSlider49, setHoverSlider49] = useState(false);
  const [hoverSlider410, setHoverSlider410] = useState(false);

  const onMouseEnterHandlerSlider41 = () => {
    setHoverSlider41(true);
  };
  const onMouseLeaveHandlerSlider41 = () => {
    setHoverSlider41(false);
  };
  const onMouseEnterHandlerSlider42 = () => {
    setHoverSlider42(true);
  };
  const onMouseLeaveHandlerSlider42 = () => {
    setHoverSlider42(false);
  };
  const onMouseEnterHandlerSlider43 = () => {
    setHoverSlider43(true);
  };
  const onMouseLeaveHandlerSlider43 = () => {
    setHoverSlider43(false);
  };
  const onMouseEnterHandlerSlider44 = () => {
    setHoverSlider44(true);
  };
  const onMouseLeaveHandlerSlider44 = () => {
    setHoverSlider44(false);
  };
  const onMouseEnterHandlerSlider45 = () => {
    setHoverSlider45(true);
  };
  const onMouseLeaveHandlerSlider45 = () => {
    setHoverSlider45(false);
  };
  const onMouseEnterHandlerSlider46 = () => {
    setHoverSlider46(true);
  };
  const onMouseLeaveHandlerSlider46 = () => {
    setHoverSlider46(false);
  };
  const onMouseEnterHandlerSlider47 = () => {
    setHoverSlider47(true);
  };
  const onMouseLeaveHandlerSlider47 = () => {
    setHoverSlider47(false);
  };
  const onMouseEnterHandlerSlider48 = () => {
    setHoverSlider48(true);
  };
  const onMouseLeaveHandlerSlider48 = () => {
    setHoverSlider48(false);
  };
  const onMouseEnterHandlerSlider49 = () => {
    setHoverSlider49(true);
  };
  const onMouseLeaveHandlerSlider49 = () => {
    setHoverSlider49(false);
  };
  const onMouseEnterHandlerSlider410 = () => {
    setHoverSlider410(true);
  };
  const onMouseLeaveHandlerSlider410 = () => {
    setHoverSlider410(false);
  };

  const [hoverProcudt1, setHoverproduct1] = useState(false);
  const [hoverProcudt2, setHoverproduct2] = useState(false);
  const [hoverProcudt3, setHoverproduct3] = useState(false);
  const [hoverProcudt4, setHoverproduct4] = useState(false);

  const [hoverProcudt5, setHoverproduct5] = useState(false);
  const [hoverProcudt6, setHoverproduct6] = useState(false);
  const [hoverProcudt7, setHoverproduct7] = useState(false);
  const [hoverProcudt8, setHoverproduct8] = useState(false);

  const [hoverProcudt9, setHoverproduct9] = useState(false);
  const [hoverProcudt10, setHoverproduct10] = useState(false);
  const [hoverProcudt11, setHoverproduct11] = useState(false);
  const [hoverProcudt12, setHoverproduct12] = useState(false);

  const onMouseEnterHandlerProduct1 = () => {
    setHoverproduct1(true);
  };
  const onMouseLeaveHandlerProduct1 = () => {
    setHoverproduct1(false);
  };
  const onMouseEnterHandlerProduct2 = () => {
    setHoverproduct2(true);
  };
  const onMouseLeaveHandlerProduct2 = () => {
    setHoverproduct2(false);
  };
  const onMouseEnterHandlerProduct3 = () => {
    setHoverproduct3(true);
  };
  const onMouseLeaveHandlerProduct3 = () => {
    setHoverproduct3(false);
  };
  const onMouseEnterHandlerProduct4 = () => {
    setHoverproduct4(true);
  };
  const onMouseLeaveHandlerProduct4 = () => {
    setHoverproduct4(false);
  };

  const onMouseEnterHandlerProduct5 = () => {
    setHoverproduct5(true);
  };
  const onMouseLeaveHandlerProduct5 = () => {
    setHoverproduct5(false);
  };
  const onMouseEnterHandlerProduct6 = () => {
    setHoverproduct6(true);
  };
  const onMouseLeaveHandlerProduct6 = () => {
    setHoverproduct6(false);
  };
  const onMouseEnterHandlerProduct7 = () => {
    setHoverproduct7(true);
  };
  const onMouseLeaveHandlerProduct7 = () => {
    setHoverproduct7(false);
  };
  const onMouseEnterHandlerProduct8 = () => {
    setHoverproduct8(true);
  };
  const onMouseLeaveHandlerProduct8 = () => {
    setHoverproduct8(false);
  };

  const onMouseEnterHandlerProduct9 = () => {
    setHoverproduct9(true);
  };
  const onMouseLeaveHandlerProduct9 = () => {
    setHoverproduct9(false);
  };
  const onMouseEnterHandlerProduct10 = () => {
    setHoverproduct10(true);
  };
  const onMouseLeaveHandlerProduct10 = () => {
    setHoverproduct10(false);
  };
  const onMouseEnterHandlerProduct11 = () => {
    setHoverproduct11(true);
  };
  const onMouseLeaveHandlerProduct11 = () => {
    setHoverproduct11(false);
  };
  const onMouseEnterHandlerProduct12 = () => {
    setHoverproduct12(true);
  };
  const onMouseLeaveHandlerProduct12 = () => {
    setHoverproduct12(false);
  };

  return (
    <>
      <div>
        {" "}
        <div>
          <div>
            <div class="subpage-title-box">
              <h1 class="subpage-title font-vazir ">محصولات جدید</h1>
            </div>
            {/* swiper 1 */}
            <div className="mt-10">
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
                className=" lg:max-w-[100%] p-10  flex items-center justify-center"
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
                    // id="i8ryv"
                    data-gjs-type="bs-image"
                    draggable="true"
                    src={slider11}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative w-full h-[55vh]"
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
                    src={slider12}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative w-full h-[55vh]"

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
                    src={slider13}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative w-full h-[55vh]"

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
                    src={slider14}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    className="relative w-full h-[55vh]"

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
                    src={slider15}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                    className="relative w-full h-[55vh]"
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
                    src={slider16}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                    className="relative w-full h-[55vh]"
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
                    src={slider17}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                    className="relative w-full h-[55vh]"
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
                    src={slider18}
                    // src="./Best Sellers _ IKEA_files/mobilyalar.jpg"
                    data-src="https://cdn.ikea.com.tr/ozgur-icerik/cok-satanlar/mobilyalar.jpg"
                    alt="IKEA-mobilyalar"
                    data-mobil-src=""
                    // class="img-responsive gjs-hovered"
                    className="relative w-full h-[55vh]"
                  />
                  {/* <span className="absolute z-50 mt-80 rounded-full p-5 text-center font-bold font-vazir bg-white w-[50%]">
                    لورم ایپسوم متن
                  </span> */}
                </SwiperSlide>
              </Swiper>
            </div>
            {/* 5 khone 1 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>زمان لذت بردن از آفتاب است</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                      با فرا رسیدن فصل تابستان می توانید آماده سازی بالکن و باغ
                      خود را با محصولات جدید آغاز کنید. می‌توانید یک تخت
                      آفتاب‌گیر برای مکان‌هایی که آفتاب شدیدتر است در باغ یا میز
                      و صندلی‌های باغتان برای کباب کردن با دوستانتان پیدا کنید.
                      در شب، می توانید به نورپردازی جدید در فضای باز نگاه کنید
                      که بالکن و باغ شما را تزئینی تر و در عین حال روشن تر می
                      کند.
                    </span>
                  </span>
                </p>
                <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه محصولات باغ و بالکن
                </button>
              </div>

              <div class="row grid-images p-5">
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
                        top: "50%",
                        left: "40%",
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
                        style={{
                          boxSizing: "border-box",
                          left: "40%",
                          top: "20%",
                        }}
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                    </div>{" "}
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
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                    </div>
                    {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
                  </div>

                  <div class="image-parent">
                    <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                  </div>
                </div>

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
                      id="ig6v48"
                      data-spr="29533875"
                      class="pin view black"
                      style={{ top: "65%", left: "85%", display: "block" }}
                    >
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
                              src={image1}
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
                                ست میز و صندلی ، قهوه ای
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
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]">
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
                          </a>
                        </div>
                      </div>
                      {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* swiper 2 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>
                      با محصولات جدید فضای بیرونی خود را برای تابستان آماده کنید
                    </span>
                  </span>
                </h2>
              </div>

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
                className=" lg:max-w-[100%] p-10  flex items-center justify-center"
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider21}
                          onMouseLeave={onMouseLeaveHandlerSlider21}
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
                            src={slider21}
                            className={
                              hoverSlider21 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider21 && (
                              <img
                                // ref={ImgRef}
                                src={slider21Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider22}
                          onMouseLeave={onMouseLeaveHandlerSlider22}
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
                            src={slider22}
                            className={
                              hoverSlider22 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider22 && (
                              <img
                                // ref={ImgRef}
                                src={slider22Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider23}
                          onMouseLeave={onMouseLeaveHandlerSlider23}
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
                            src={slider23}
                            className={
                              hoverSlider23 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider23 && (
                              <img
                                // ref={ImgRef}
                                src={slider23Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider24}
                          onMouseLeave={onMouseLeaveHandlerSlider24}
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
                            src={slider24}
                            className={
                              hoverSlider24 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider24 && (
                              <img
                                // ref={ImgRef}
                                src={slider24Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider25}
                          onMouseLeave={onMouseLeaveHandlerSlider25}
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
                            src={slider25}
                            className={
                              hoverSlider25 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider25 && (
                              <img
                                // ref={ImgRef}
                                src={slider25Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider26}
                          onMouseLeave={onMouseLeaveHandlerSlider26}
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
                            src={slider26}
                            className={
                              hoverSlider26 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider26 && (
                              <img
                                // ref={ImgRef}
                                src={slider26Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider27}
                          onMouseLeave={onMouseLeaveHandlerSlider27}
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
                            src={slider27}
                            className={
                              hoverSlider27 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider27 && (
                              <img
                                // ref={ImgRef}
                                src={slider27Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider28}
                          onMouseLeave={onMouseLeaveHandlerSlider28}
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
                            src={slider28}
                            className={
                              hoverSlider28 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider28 && (
                              <img
                                // ref={ImgRef}
                                src={slider28Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider29}
                          onMouseLeave={onMouseLeaveHandlerSlider29}
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
                            src={slider29}
                            className={
                              hoverSlider29 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider29 && (
                              <img
                                // ref={ImgRef}
                                src={slider29Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider210}
                          onMouseLeave={onMouseLeaveHandlerSlider210}
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
                            src={slider210}
                            className={
                              hoverSlider210 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider210 && (
                              <img
                                // ref={ImgRef}
                                src={slider210Hover}
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
                </SwiperSlide>
              </Swiper>
            </div>
            {/* side */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>
                      باغ و بالکن خود را در تمام طول روز روشن نگه دارید
                    </span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                      فانوس BORBY دکوراسیون بالکن و باغ شما را بهبود می بخشد و
                      فضای فوق العاده ای را برای استراحت و لذت بردن از لحظه ای
                      که هوا تاریک می شود ایجاد می کند..
                    </span>
                  </span>
                </p>
              </div>

              <div class="image-parent">
                <a href="https://www.ikea.com.tr/urun/borrby-yesil-28-cm-fener-00563071">
                  <img
                    src={side1}
                    // src="./New Products _ IKEA Türkiye _ IKEA_files/borrby-yesil-fener-web.jpg"
                    id="i2hh"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/yeni/nisan/borrby-yesil-fener-web.jpg"
                    alt="IKEA-borrby yesil fener web"
                    class="img-responsive"
                  />
                </a>
                <span data-start=""></span>
                <div
                  id="iifke"
                  data-spr="00563071"
                  class="pin view black"
                  style={{ display: "block", top: "44%", left: "90%" }}
                >
                  <div id="i5h6p" class="pin-layer hide-mobile">
                    <div id="im1pd" class="product-bottom column">
                      <a
                        id="ir92w"
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                      </a>

                      <h3 id="iewjg">
                        <a
                          id="iav8p"
                          href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                          target="_self"
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
                <span data-end=""></span>
              </div>
            </div>
            {/* side 2 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>غروب را به داخل خانه بیاورید</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                      حریم خصوصی با دید؟ کاملا. پرده های جدید GLASÖRT تعادل
                      ظریفی از ظرافت محض و طراحی کاربردی دارند. همانطور که نور
                      از آن عبور می کند، می توانید بدون خروج از خانه، جادوی یک
                      خط ساحلی آرام را به تصویر بکشید
                    </span>
                  </span>
                </p>
                <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه پرده ها
                </button>
              </div>

              <div class="col-md-6">
                <div
                  class="image-parent
                  "
                >
                  {/* <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <div className="absolute z-50  flex flex-col px-20 py-40">
                      <span className="font-bold  font-vazir text-white text-[36px]">
                        حرکت نامحدود
                      </span>
                      <span className="font-vazir mt-5 text-2xl w-full text-white text-justify">
                        شما می توانید از این شیء تزئینی متصل شده از چوب جامد
                        برای کمک به طراحی های خود و ایجاد حرکت به اتاق خود
                        استفاده کنید. هر روز ژست آن را تغییر دهید و از تحرک آن
                        شگفت زده شوید!
                      </span>
                      <div className="w-full">
                        <button className="bg-white w-[50%]  text-black font-vazir rounded-full mt-10 lrt p-3 ">
                          دکوراسیون طبیعی GESTALTA را ببینید{" "}
                        </button>
                      </div>
                    </div>
                  </a> */}
                  <div
                    id="ig6v48"
                    data-spr="29533875"
                    class="pin view black"
                    style={{ top: "20%", left: "70%", display: "block" }}
                  >
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
                          {/* <img
                            id="izx0xx"
                            src={row6}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          /> */}
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
                            className=" flex flex-col font-bold text-black "
                          >
                            STORAVAN
                            <span
                              className="font-normal bover:underline-none mt-3"
                              // id="i2vfsw"
                            >
                              دکوراسیون ، طبیعی{" "}
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
                              className="text-white font-vazir "
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span
                                // id="if2npn"
                                data-classname=""
                                className="text-3xl font-vazir text-black font-bold"

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
                    {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                  </div>
                  <img
                    className="bg-[#5E7D6C] w-full relative"
                    src={side4}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    // alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                    // id="i1brf"
                    // data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    // class="img-responsive lazyloaded"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <img
                      src={side3}
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
                          <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                            جدید
                          </div>
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
                          // id="igf27j"
                          data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                          href="javascript"
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
                      style={{ boxSizing: "border-box", left: "40%" }}
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
                          {/* <img
                            id="iogu74"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="Custom Product Logo"
                            data-classname=""
                            class="product-isLogo IsNew"
                          /> */}
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
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
                        ></span>
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
                            <u id="i01l6hc" style={{ boxSizing: "border-box" }}>
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
                        <a
                          // id="igf27j"
                          data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                          href="javascript"
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
                </div>
              </div>
            </div>
            {/*  */}
            <div className="mt-16 p-3">
              <div
              // class="image-parent "
              >
                <a href="https://www.ikea.com.tr/urun/borrby-yesil-28-cm-fener-00563071">
                  <img
                    src={side5}
                    // src="./New Products _ IKEA Türkiye _ IKEA_files/borrby-yesil-fener-web.jpg"
                    // id="i2hh"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/yeni/nisan/borrby-yesil-fener-web.jpg"
                    alt="IKEA-borrby yesil fener web"
                    // class="img-responsive"
                    className="mt-10"
                  />
                </a>
              </div>
            </div>
            {/* 5 khone 2 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>نظم همیشه همراه شماست</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                      با محصولات جدید ما آشنا شوید تا به شما کمک کند کشوها،
                      کمدها یا کمدهای خود را مرتب نگه دارید. با تنظیم کننده های
                      محفظه، می توانید آرایش خود را دسته بندی کنید یا از گره
                      خوردن جواهرات خود جلوگیری کنید. می‌توانید سازمان‌دهندگان
                      محفظه را بررسی کنید تا فضای داخلی کمد لباس را مرتب نگه
                      دارید و فضای ذخیره‌سازی اضافی فراهم کنید. همه چیز طوری
                      طراحی شده است که خانه شما را منظم تر نگه دارد.{" "}
                    </span>
                  </span>
                </p>
              </div>
              <div class="row grid-images p-5">
                <div class="col-md-3">
                  <div class="image-parent">
                    <a href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263">
                      <img
                        src={image9}
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
                        top: "50%",
                        left: "40%",
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
                        style={{
                          boxSizing: "border-box",
                          left: "40%",
                          top: "20%",
                        }}
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                    </div>{" "}
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
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                        src={image10}
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
                        src={image7}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                        alt="IKEA-yilin en guzel mevsimi en"
                        id="imw4n"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                        class="img-responsive lazyloaded"
                      />
                    </a>
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                            {/* <img
                              id="ijvnzv"
                              src="https://www.ikea.com.tr/en/"
                              alt="IKEA - SEGERÖN, chair with armrests, white-beige"
                              data-classname="hide"
                              class="product-isLogo IsNew"
                            /> */}
                            <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                              جدید
                            </div>
                          </a>
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                    </div>
                    {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
                  </div>

                  <div class="image-parent">
                    <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                    </div>
                    <a href="https://www.ikea.com.tr/en/product/segeron-white-beige-chair-with-armrests-50510810">
                      <img
                        src={image8}
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
                        src={image6}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                        alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                        id="i1brf"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                        class="img-responsive lazyloaded"
                      />
                    </a>
                    <div
                      id="ig6v48"
                      data-spr="29533875"
                      class="pin view black"
                      style={{ top: "40%", left: "85%", display: "block" }}
                    >
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
                              src={image1}
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
                              className=" flex flex-col font-bold text-balck "
                            >
                              STORAVAN
                              <span
                                className="font-normal bover:underline-none mt-3"
                                // id="i2vfsw"
                              >
                                ست میز و صندلی ، قهوه ای
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
                              className="bg-[#C40C0C] w-[45%] relative h-20"
                              // style={{
                              // backgroundColor:"#C40C0C"
                              // }}
                            >
                              <div className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]">
                                {/* > */}
                                <span
                                  // id="if2npn"
                                  data-classname=""
                                  className="text-3xl font-vazir text-black font-bold"

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
                          </a>
                        </div>
                      </div>
                      {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* swiper 3 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>خانه خود را منظم کنید</span>
                  </span>
                </h2>
              </div>

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
                className=" lg:max-w-[100%] p-10  flex items-center justify-center"
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider31}
                          onMouseLeave={onMouseLeaveHandlerSlider31}
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
                            src={slider31}
                            className={
                              hoverSlider31 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider31 && (
                              <img
                                // ref={ImgRef}
                                src={slider31Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider32}
                          onMouseLeave={onMouseLeaveHandlerSlider32}
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
                            src={slider32}
                            className={
                              hoverSlider32 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider32 && (
                              <img
                                // ref={ImgRef}
                                src={slider32Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider33}
                          onMouseLeave={onMouseLeaveHandlerSlider33}
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
                            src={slider33}
                            className={
                              hoverSlider33 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider33 && (
                              <img
                                // ref={ImgRef}
                                src={slider33Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider34}
                          onMouseLeave={onMouseLeaveHandlerSlider34}
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
                            src={slider34}
                            className={
                              hoverSlider34 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider34 && (
                              <img
                                // ref={ImgRef}
                                src={slider34Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider35}
                          onMouseLeave={onMouseLeaveHandlerSlider35}
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
                            src={slider35}
                            className={
                              hoverSlider35 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider35 && (
                              <img
                                // ref={ImgRef}
                                src={slider35Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider36}
                          onMouseLeave={onMouseLeaveHandlerSlider36}
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
                            src={slider36}
                            className={
                              hoverSlider36 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider36 && (
                              <img
                                // ref={ImgRef}
                                src={slider36Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider37}
                          onMouseLeave={onMouseLeaveHandlerSlider37}
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
                            src={slider37}
                            className={
                              hoverSlider37 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider37 && (
                              <img
                                // ref={ImgRef}
                                src={slider37Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider38}
                          onMouseLeave={onMouseLeaveHandlerSlider38}
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
                            src={slider38}
                            className={hoverSlider38 ? "h-[140%]" : "relative"}
                            // className="relative"

                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {/* {hoverSlider38 && (
                              <img
                                // ref={ImgRef}
                                // src={slider38Hover}
                                className="h-[140%]"
                                // src="https://image-ikea.mncdn.com/urunler/500_500/PH136365.jpg"
                                alt="IKEA - BRIMNES wardrobe white"
                              />
                            )} */}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider39}
                          onMouseLeave={onMouseLeaveHandlerSlider39}
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
                            src={slider39}
                            className={
                              hoverSlider39 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider39 && (
                              <img
                                // ref={ImgRef}
                                src={slider39Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider310}
                          onMouseLeave={onMouseLeaveHandlerSlider310}
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
                            src={slider310}
                            className={
                              hoverSlider310 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider310 && (
                              <img
                                // ref={ImgRef}
                                src={slider310Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider311}
                          onMouseLeave={onMouseLeaveHandlerSlider311}
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
                            src={slider311}
                            className={
                              hoverSlider311 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider311 && (
                              <img
                                // ref={ImgRef}
                                src={slider311Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider312}
                          onMouseLeave={onMouseLeaveHandlerSlider312}
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
                            src={slider312}
                            className={hoverSlider312 ? "H-[140%]" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {/* {hoverSlider312 && (
                              <img
                                // ref={ImgRef}
                                // src={slider312Hover}
                                className="h-[140%]"
                                // src="https://image-ikea.mncdn.com/urunler/500_500/PH136365.jpg"
                                alt="IKEA - BRIMNES wardrobe white"
                              />
                            )} */}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider313}
                          onMouseLeave={onMouseLeaveHandlerSlider313}
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
                            src={slider313}
                            className={
                              hoverSlider313 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider313 && (
                              <img
                                // ref={ImgRef}
                                src={slider313Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider314}
                          onMouseLeave={onMouseLeaveHandlerSlider314}
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
                            src={slider314}
                            className={
                              hoverSlider314 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider314 && (
                              <img
                                // ref={ImgRef}
                                src={slider310Hover}
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
                </SwiperSlide>
              </Swiper>
            </div>
            {/* bgred */}
            <div className="mt-16">
              <div class="global-banner-container mt-10">
                <div class="global-banner">
                  <div>
                    <div class="item grey">
                      <div
                        id="iplr2f"
                        class="row"
                        style={{ backgroundColor: "#CC0008" }}
                      >
                        <div
                          id="iihk6s"
                          class="col-md-8 pl-0 float-right"
                          style={{ float: "left" }}
                        >
                          <div class="shoppable-image">
                            <div class="image-parent">
                              <img
                                src={bgredImage}
                                // src="./Accessories Models and Prices _ IKEA_files/surdurulebilir-malzeme-3.jpg"
                                id="ia4twl"
                                data-src="https://cdn.ikea.com.tr/ozgur-icerik/surdurulebilirlik/cy23/surdurulebilir-malzeme-3.jpg"
                                alt="IKEA-surdurulebilir malzeme 3"
                                class="img-responsive"
                              />

                              <div
                                id="ig6v48"
                                data-spr="29533875"
                                class="pin view black"
                                style={{
                                  top: "40%",
                                  left: "90%",
                                  display: "block",
                                }}
                              >
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
                                      {/* <img
                            id="izx0xx"
                            src={row6}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          /> */}
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
                                          دکوراسیون ، طبیعی{" "}
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
                                        className="bg-[#C40C0C] w-[45%] relative h-20"
                                        // style={{
                                        // backgroundColor:"#C40C0C"
                                        // }}
                                      >
                                        <div
                                          // className="text-white font-vazir "
                                          className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                                        >
                                          <span
                                            // id="if2npn"
                                            data-classname=""
                                            className="text-3xl font-vazir text-black font-bold"

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
                                {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="global-banner-text">
                            <h2 id="i4g9yy" style={{ color: "white" }}>
                              <span>
                                <span>پایین ترین قیمت</span>
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
                                  ما هر روز سخت کار می کنیم تا قیمت ها را تا حد
                                  امکان برای شما پایین نگه داریم و تا جایی که
                                  بتوانیم قیمت ها را کاهش می دهیم. با تولید در
                                  حجم بالا با طرح‌های هوشمندتر و بسته‌بندی مسطح،
                                  می‌توانیم به ارائه محصولات مقرون به صرفه و
                                  بدون افت کیفیت ادامه دهیم. همین حالا با قیمت
                                  های پایین جدید ما خرید کنید!
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
                              مشاهده همه
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* side 3 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>با مبل های تخت خواب شو آشنا شوید</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                      به خصوص اگر خانه کوچکی دارید، مبل های تخت خواب شو اغلب می
                      توانند مبلمان نجات دهنده شما باشند. با یک مبل تختخواب شو
                      می توانید اتاق نشیمن خود را نیز به اتاق خواب مهمانان خود
                      تبدیل کنید. فضای ذخیره سازی زیر این مبل های تختخواب شو
                      جدید می تواند یک راه حل عالی برای ذخیره سازی ست های لحاف،
                      بالش ها یا چیزهایی باشد که نمی خواهید در مرکز آنها دیده
                      شوند.که هوا تاریک می شود ایجاد می کند..
                    </span>
                  </span>
                </p>
              </div>
              <div class="col-md-6">

              <div class="image-parent">
                <a href="https://www.ikea.com.tr/urun/borrby-yesil-28-cm-fener-00563071">
                  <img
                    src={side8}
                    // src="./New Products _ IKEA Türkiye _ IKEA_files/borrby-yesil-fener-web.jpg"
                    id="i2hh"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/yeni/nisan/borrby-yesil-fener-web.jpg"
                    alt="IKEA-borrby yesil fener web"
                    class="img-responsive"
                  />
                </a>
                <span data-start=""></span>
                
                </div>
                </div>
                <div class="col-md-6">

              <div class="image-parent">
                <a href="https://www.ikea.com.tr/urun/borrby-yesil-28-cm-fener-00563071">
                  <img
                    src={side7}
                    // src="./New Products _ IKEA Türkiye _ IKEA_files/borrby-yesil-fener-web.jpg"
                    id="i2hh"
                    data-src="https://image-ikea.mncdn.com/ozgur-icerik/yeni/nisan/borrby-yesil-fener-web.jpg"
                    alt="IKEA-borrby yesil fener web"
                    class="img-responsive"
                  />
                </a>
                <span data-start=""></span>
                <div
                  id="iifke"
                  data-spr="00563071"
                  class="pin view black"
                  style={{ display: "block", top: "65%", left: "78%" }}
                >
                  <div id="i5h6p" class="pin-layer hide-mobile">
                    <div id="im1pd" class="product-bottom column">
                      <a
                        id="ir92w"
                        target="_self"
                        href="https://www.ikea.com.tr/en/new-products"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                      </a>

                      <h3 id="iewjg">
                        <a
                          id="iav8p"
                          href="https://www.ikea.com.tr/en/product/borrby-green-28-cm-lantern-00563071"
                          target="_self"
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
                <span data-end=""></span>
                </div>
                </div>
            </div>
            {/* swiper 4 */}
            <div
            style={{marginTop:"50px"}}
            >
                <h2>
                  <span>
                    <span>
                      محصولاتی که به شما در آماده سازی اتاق نشیمن کمک می کند
                    </span>
                  </span>
                </h2>
                <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه اتاق نشیمن
                </button>
              </div>
            <div className="mt-16 ">
             

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
                className=" lg:max-w-[100%]   flex items-center justify-center"
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider41}
                          onMouseLeave={onMouseLeaveHandlerSlider41}
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
                            src={slider41}
                            className={
                              hoverSlider41 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider41 && (
                              <img
                                // ref={ImgRef}
                                src={slider41Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider42}
                          onMouseLeave={onMouseLeaveHandlerSlider42}
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
                            src={slider42}
                            className={
                              hoverSlider42 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider42 && (
                              <img
                                // ref={ImgRef}
                                src={slider42Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider43}
                          onMouseLeave={onMouseLeaveHandlerSlider43}
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
                            src={slider43}
                            className={
                              hoverSlider43 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider43 && (
                              <img
                                // ref={ImgRef}
                                src={slider43Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider44}
                          onMouseLeave={onMouseLeaveHandlerSlider44}
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
                            src={slider44}
                            className={
                              hoverSlider44 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider44 && (
                              <img
                                // ref={ImgRef}
                                src={slider44Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider45}
                          onMouseLeave={onMouseLeaveHandlerSlider45}
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
                            src={slider45}
                            className={
                              hoverSlider45 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider45 && (
                              <img
                                // ref={ImgRef}
                                src={slider45Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider46}
                          onMouseLeave={onMouseLeaveHandlerSlider46}
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
                            src={slider46}
                            className={
                              hoverSlider46 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider46 && (
                              <img
                                // ref={ImgRef}
                                src={slider46Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider47}
                          onMouseLeave={onMouseLeaveHandlerSlider47}
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
                            src={slider47}
                            className={
                              hoverSlider47 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider47 && (
                              <img
                                // ref={ImgRef}
                                src={slider47Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider48}
                          onMouseLeave={onMouseLeaveHandlerSlider48}
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
                            src={slider48}
                            className={
                              hoverSlider48 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider48 && (
                              <img
                                // ref={ImgRef}
                                src={slider48Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider49}
                          onMouseLeave={onMouseLeaveHandlerSlider49}
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
                            src={slider49}
                            className={
                              hoverSlider49 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider49 && (
                              <img
                                // ref={ImgRef}
                                src={slider49Hover}
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
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerSlider410}
                          onMouseLeave={onMouseLeaveHandlerSlider410}
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
                            src={slider410}
                            className={
                              hoverSlider410 ? "display-none" : "relative"
                            }
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverSlider410 && (
                              <img
                                // ref={ImgRef}
                                src={slider410Hover}
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
                </SwiperSlide>
              </Swiper>
            </div>

            {/* 5 khone 3 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>فضاهای کاری انعطاف پذیر ایجاد کنید</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                    با سیستم MITTZON فضای کاری ایجاد کنید که مانند خانه دوم باشد. این طیف مبلمان سازگار با هر سبک کاری مطابقت دارد، رفاه شخصی را تقویت می کند و همکاری تیمی را افزایش می دهد. با دوام و همه کاره، هر فضای اداری را به یک مرکز پر جنب و جوش از بهره وری و نوآوری تبدیل می کند.
                    </span>
                  </span>
                </p>
                <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه محصولات فضای کاری
                </button>
              </div>
              <div class="row grid-images p-5">
                <div class="col-md-3">
                  <div class="image-parent">
                    <a href="https://www.ikea.com.tr/en/product/lerholmen-acacia-picnic-table-40539263">
                      <img
                        src={image14}
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
                        top: "50%",
                        left: "40%",
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
                        style={{
                          boxSizing: "border-box",
                          left: "40%",
                          top: "20%",
                        }}
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                    </div>{" "}
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
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
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
                                <u
                                  id="i2i03f"
                                  style={{ boxSizing: "border-box" }}
                                >
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
                        src={image10}
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
                        src={image15}
                        // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                        alt="IKEA-yilin en guzel mevsimi en"
                        id="imw4n"
                        data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/yilin-en-guzel-mevsimi-en.jpg"
                        class="img-responsive lazyloaded"
                      />
                    </a>
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                            {/* <img
                              id="ijvnzv"
                              src="https://www.ikea.com.tr/en/"
                              alt="IKEA - SEGERÖN, chair with armrests, white-beige"
                              data-classname="hide"
                              class="product-isLogo IsNew"
                            /> */}
                            <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                              جدید
                            </div>
                          </a>
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                    </div>
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
                    {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "} */}
                  </div>

                  <div class="image-parent">
                    <a href="https://www.ikea.com.tr/urun/segeron-beyaz-bej-kolcakli-sandalye-50510810"></a>
                    <div
                      id="isv63k"
                      data-spr="50510810"
                      class="shoppable-image-area"
                      style={{
                        boxSizing: "border-box",
                        top: "55%",
                        left: "40%",
                      }}
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
                        // id="ihad1g"
                        class="shoppable-image-tag shoppable-image-tag-bottom"
                        style={{ boxSizing: "border-box", left: "50%" }}
                      >
                        <div
                          // id="iji62j"
                          class="shoppable-image-tag-inner"
                          style={{ boxSizing: "border-box", left: "45%" }}
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
                              <u
                                id="ib5zxl"
                                style={{ boxSizing: "border-box" }}
                              >
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
                                  <u
                                    id="i2i03f"
                                    style={{ boxSizing: "border-box" }}
                                  >
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
                    </div>
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
                    <a href="https://www.ikea.com.tr/en/product/segeron-white-beige-chair-with-armrests-50510810">
                      <img
                        src={image13}
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
                        src={image11}
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
                      style={{ top: "40%", left: "85%", display: "block" }}
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
                              src={image1}
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
                                className="font-normal bover:underline-none mt-3 text-white"
                                // id="i2vfsw"
                              >
                                ست میز و صندلی ، قهوه ای
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
                                {/* > */}
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
                          </a>
                        </div>
                      </div>
                      {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
{/* side 4 */}
            <div className="mt-16">
              <div className="w-full p-5">
                <h2>
                  <span>
                    <span>ناگهان، زمین صندلی مورد علاقه شماست</span>
                  </span>
                </h2>
                <p>
                  <span>
                    <span>
                    تحول اتاق نشیمن در انتظار است. الگوی شیب فرش جدید HOTELLRUM که از آبی آرام به زرد پر جنب و جوش تغییر می کند، یک اثر هنری برای کف شماست. همانطور که نرم و شیک است، ممکن است بیشتر از مبل خود به سمت زمین کشیده شوید.
                    </span>
                  </span>
                </p>
                <button
                  href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                  // class="btn btn-outline-black"
                  className="border-2 border-black rounded-full p-3 hover:border-4"
                >
                  نمایش همه 
                  
                </button>
              </div>

              <div class="col-md-6">
                <div
                  class="image-parent
                  "
                >
                  {/* <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <div className="absolute z-50  flex flex-col px-20 py-40">
                      <span className="font-bold  font-vazir text-white text-[36px]">
                        حرکت نامحدود
                      </span>
                      <span className="font-vazir mt-5 text-2xl w-full text-white text-justify">
                        شما می توانید از این شیء تزئینی متصل شده از چوب جامد
                        برای کمک به طراحی های خود و ایجاد حرکت به اتاق خود
                        استفاده کنید. هر روز ژست آن را تغییر دهید و از تحرک آن
                        شگفت زده شوید!
                      </span>
                      <div className="w-full">
                        <button className="bg-white w-[50%]  text-black font-vazir rounded-full mt-10 lrt p-3 ">
                          دکوراسیون طبیعی GESTALTA را ببینید{" "}
                        </button>
                      </div>
                    </div>
                  </a> */}
                  <div
                    id="ig6v48"
                    data-spr="29533875"
                    class="pin view black"
                    style={{ top: "20%", left: "70%", display: "block" }}
                  >
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
                          {/* <img
                            id="izx0xx"
                            src={row6}
                            src="https://www.ikea.com.tr/en/"
                            data-classname="hide"
                            class="product-isLogo IsNew"
                          /> */}
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
                              دکوراسیون ، طبیعی{" "}
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
                              className="text-white font-vazir "
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
                    {/* <div id="i3ng8q" class="pin-dots show-mobile"></div> */}
                  </div>
                  <img
                    className="bg-[#5E7D6C] w-full relative"
                    src={side9}
                    // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    // alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                    // id="i1brf"
                    // data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                    // class="img-responsive lazyloaded"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="image-parent">
                  <a href="https://www.ikea.com.tr/en/product/nammaro-light-brown-garden-corner-sofa-set-29533875">
                    <img
                      src={side10}
                      // src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      alt="IKEA-nammaro acik kahverengi bahce kose kanepe seti"
                      id="i1brf"
                      data-src="https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy24-mayis/nammaro-acik-kahverengi-bahce-kose-kanepe-seti.jpg"
                      class="img-responsive lazyloaded"
                    />
                  </a>
                  
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
                      style={{ boxSizing: "border-box", left: "40%" }}
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
                          {/* <img
                            id="iogu74"
                            src="https://image-ikea.mncdn.com/islogos/en/yeni.svg"
                            alt="Custom Product Logo"
                            data-classname=""
                            class="product-isLogo IsNew"
                          /> */}
                        </a>
                        <div className="w-[30%] p-1 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
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
                        ></span>
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
                            <u id="i01l6hc" style={{ boxSizing: "border-box" }}>
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
                        <a
                          // id="igf27j"
                          data-onclick="shopping.addCartItem(&#39;50510810&#39;, false);"
                          href="javascript"
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
                </div>
              </div>
            </div>
            {/* pro */}
            <div className="mt-20 ">
              
            <Filter/>
</div>
            <div  className="pl-5 mt-10 mb-10"> 
            <div className="w-full   grid grid-cols-1">
              
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
                          onMouseEnter={onMouseEnterHandlerProduct1}
                          onMouseLeave={onMouseLeaveHandlerProduct1}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product1}
                            className={hoverProcudt1 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt1 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct1}
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
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct2}
                          onMouseLeave={onMouseLeaveHandlerProduct2}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product2}
                            className={hoverProcudt2 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt2 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct2}
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
               
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct3}
                          onMouseLeave={onMouseLeaveHandlerProduct3}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product3}
                            className={hoverProcudt3 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt3 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct3}
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
                              src={product3}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct31}
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
                              src={SubProduct32}
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
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct4}
                          onMouseLeave={onMouseLeaveHandlerProduct4}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                           <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product4}
                            className={hoverProcudt4 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt4 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct4}
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
                              src={product4}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct41}
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
                              src={SubProduct42}
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
              <hr />
              {/* row 2 */}
              <div className="mt-32 border-2 border-gray-800">
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct5}
                          onMouseLeave={onMouseLeaveHandlerProduct5}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product5}
                            className={hoverProcudt5 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt5 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct5}
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
                              src={product4}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct41}
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
                              src={SubProduct42}
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
              <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct6}
                          onMouseLeave={onMouseLeaveHandlerProduct6}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product6}
                            className={hoverProcudt6 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt6 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct6}
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
                              src={product4}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct41}
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
                              src={SubProduct42}
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
               
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct7}
                          onMouseLeave={onMouseLeaveHandlerProduct7}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product7}
                            className={hoverProcudt7 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt7 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct7}
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
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct8}
                          onMouseLeave={onMouseLeaveHandlerProduct8}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product8}
                            className={hoverProcudt8 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt8 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct8}
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
                              src={product8}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct81}
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
                              src={SubProduct82}
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
                <hr />
                {/* row 3 */}
                <div className="mt-32 border-2 border-gray-800">
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct9}
                          onMouseLeave={onMouseLeaveHandlerProduct9}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product9}
                            className={hoverProcudt9 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt9 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct9}
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
                              src={product9}
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
                            data-customlogourl="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            data-logourl=""
                            data-price="7,799"
                            data-bigimage="https://image-ikea.mncdn.com/urunler/500_500/PE734597.jpg"
                            data-sprcode="70261150"
                            data-url="/en/product/markus-vissle-dark-grey-office-chair-70261150"
                            data-bigimagehover="https://image-ikea.mncdn.com/urunler/500_500/PE836200.jpg"
                          >
                            <img
                              src={SubProduct91}
                              className="w-20 h-20"
                              // src="https://image-ikea.mncdn.com/urunler/190_190/PE734597.jpg"
                              data-title="MARKUS"
                              alt="office chair"
                            />
                          </a>

                          
                        </div>
                    </div>
                  </div>
                  </div>


                  <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct10}
                          onMouseLeave={onMouseLeaveHandlerProduct10}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product10}
                            className={hoverProcudt10 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt10 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct10}
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

                  
                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct11}
                          onMouseLeave={onMouseLeaveHandlerProduct11}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product11}
                            className={hoverProcudt11 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt11 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct11}
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

                <div class="col-lg-3 col-sm-4 col-xs-6">
                  <div class="product-item">
                    <div class="product-item-content">
                      <div class="product-item-img-box">
                        <a
                          href="https://www.ikea.com.tr/en/product/brimnes-white-117x190-cm-wardrobe-40407922"
                          class="product-item-img active product-link"
                          target="_blank"
                          onMouseEnter={onMouseEnterHandlerProduct12}
                          onMouseLeave={onMouseLeaveHandlerProduct12}
                        >
                          {/* <img
                            src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                            // class="custom-logo"
                            className="absolute z-50"
                            alt="IKEA - cok satan"
                            width="100"
                            height="100"
                          /> */}
                             <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div>
                          <img
                            // ref={ImgRef}
                            src={product12}
                            className={hoverProcudt12 ? "display-none" : "relative"}
                            // onMouseOut={ImgRef.current.src=image11}
                            // src="https://image-ikea.mncdn.com/urunler/500_500/PE329567.jpg"
                            alt="IKEA - BRIMNES wardrobe white"
                          />

                          <span class="img-hover">
                            {hoverProcudt12 && (
                              <img
                                // ref={ImgRef}
                                src={HoverProduct12}
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
            </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
