import React,{useState} from 'react'
import { FaAngleDown } from "react-icons/fa";
import image1 from '../../Images/collections/cat-aftonsprav-koleksiyonu.webp';
import image2 from '../../Images/collections/cat-broggan-koleksiyonu.webp';
import image3 from '../../Images/collections/cat-dajlien.webp';
import image4 from '../../Images/collections/cat-daksjus.webp';
import image5 from '../../Images/collections/cat-gokvalla-2.webp';
import image6 from '../../Images/collections/cat-mavinn-2.webp';
import image7 from '../../Images/collections/cat-nytillverkad-1.webp';
import image8 from '../../Images/collections/cat-omsesidig-1.webp';
import image9 from '../../Images/collections/cat-tabberas-koleksiyonu-01.webp';
import image10 from '../../Images/collections/cat-tesemmas.webp';
import image11 from '../../Images/collections/cat-varmblixt.webp';

import product1 from "../../Images/collections/PE926999.jpg";
import HoverProduct1 from "../../Images/collections/PH195671.jpg";

import product2 from "../../Images/collections/PE896474.webp";
import HoverProduct2 from "../../Images/collections/PH194862.webp";
import SubProduct2 from "../../Images/collections/PE896475.webp";

import product3 from "../../Images/collections/PE903824.webp";
import HoverProduct3 from "../../Images/collections/PH194870.webp";
import SubProduct3 from "../../Images/collections/PE903837.webp";

import product4 from "../../Images/collections/PE897053.webp";
import HoverProduct4 from "../../Images/collections/PE909588.webp";
// import SubProduct4 from "../../Images/collections/";

import product5 from "../../Images/collections/PE905716.webp";
import HoverProduct5 from "../../Images/collections/PH193722.webp";
import SubProduct51 from "../../Images/collections/PE895700.webp";
// import SubProduct52 from "../../Images/collections/";

import product6 from "../../Images/collections/PE876195.webp";
import HoverProduct6 from "../../Images/collections/PE876196.webp";

import product7 from "../../Images/collections/PE903837 (1).webp";
import HoverProduct7 from "../../Images/collections/PH194869.webp";
import SubProduct71 from "../../Images/collections/PE903824 (1).webp";
// import SubProduct72 from "../../Images/collections/";

import product8 from "../../Images/collections/PE876118.webp";
import HoverProduct8 from "../../Images/collections/PE876119.webp";

import product9 from "../../Images/collections/PE897294.webp";
import HoverProduct9 from "../../Images/collections/PE901307.webp";

import product10 from "../../Images/collections/PE896997.webp";
import HoverProduct10 from "../../Images/collections/PE896998.webp";
import SubProduct101 from "../../Images/collections/PE896847.webp";
// import SubProduct102 from "../../Images/collections/";

import product11 from "../../Images/collections/PE907824.webp";
import HoverProduct11 from "../../Images/collections/PH193751.webp";
// import SubProduct11 from "../../Images/collections/";

import product12 from "../../Images/collections/PE897293.webp";
import HoverProduct12 from "../../Images/collections/PE900633.webp";

import Filter from "../Filter";







const Collections = () => {

  const [hoverProcudt1,setHoverproduct1] = useState(false);
  const [hoverProcudt2,setHoverproduct2] = useState(false);
  const [hoverProcudt3,setHoverproduct3] = useState(false);
  const [hoverProcudt4, setHoverproduct4] = useState(false);
  
  const [hoverProcudt5,setHoverproduct5] = useState(false);
  const [hoverProcudt6,setHoverproduct6] = useState(false);
  const [hoverProcudt7,setHoverproduct7] = useState(false);
  const [hoverProcudt8, setHoverproduct8] = useState(false);
  
  const [hoverProcudt9,setHoverproduct9] = useState(false);
  const [hoverProcudt10,setHoverproduct10] = useState(false);
  const [hoverProcudt11,setHoverproduct11] = useState(false);
  const [hoverProcudt12,setHoverproduct12] = useState(false);

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
      <div class="subpage-title-box">
              <h1 class="subpage-title font-vazir ">مجموعه ها </h1>

              <a href="javascript" className="mr-7">
                مشاهده همه{" "}
                <i class=" mr-10">
                  <FaAngleDown />
                </i>
              </a>
        </div>
        <div class="category-box category-column-six">
        <div class="category-item-box">

        <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/frames"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl00_lnkChildCat"
                  >
                    <img
                      src={image1}
                      // src="./Accessories Models and Prices _ IKEA_files/wall-decor-10757.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl00_imgChildCat"
                      alt="IKEA Frames"
                    />
                    <span>AFTONSPARV Collection
</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/mirrors"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl01_lnkChildCat"
                  >
                    <img
                      src={image2}
                      // src="./Accessories Models and Prices _ IKEA_files/cat-aynalar.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl01_imgChildCat"
                      alt="IKEA Mirrors"
                    />
                    <span>BRÖGGAN Collection

</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/cushion-covers"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl02_lnkChildCat"
                  >
                    <img
                      src={image3}
                      // src="./Accessories Models and Prices _ IKEA_files/cat-kirlent-kiliflari.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl02_imgChildCat"
                      alt="IKEA Cushion Covers"
                    />
                    <span>DAJLIEN Collection

 </span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/bathroom-accessories"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl03_lnkChildCat"
                  >
                    <img
                      src={image4}
                      // src="./Accessories Models and Prices _ IKEA_files/bathroom-accessories-sets-48927.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl03_imgChildCat"
                      alt="IKEA Bathroom Accessories"
                    />
                    <span>DAKSJUS Collection

 </span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/candles"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl04_lnkChildCat"
                  >
                    <img
                      src={image5}
                      // src="./Accessories Models and Prices _ IKEA_files/unscented-candles-10782.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl04_imgChildCat"
                      alt="IKEA Candles"
                    />
                    <span>GOKVALLA Collection

 ها</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/artificial-plants"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl05_lnkChildCat"
                  >
                    <img
                      src={image6}
                      // src="./Accessories Models and Prices _ IKEA_files/artificial-plants-flowers-20492.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl05_imgChildCat"
                      alt="IKEA Artificial Plants"
                    />
                    <span>MAVINN Collection

</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/flower-pots-and-planters"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl06_lnkChildCat"
                  >
                    <img
                      src={image7}
                      // src="./Accessories Models and Prices _ IKEA_files/plant-stands-movers-20494.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl06_imgChildCat"
                      alt="IKEA Flower Pots And Planters"
                    />
                    <span>NYTILLVERKAD Collection


  </span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/decorative-accessories"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl07_lnkChildCat"
                  >
                    <img
                      src={image8}
                      // src="./Accessories Models and Prices _ IKEA_files/decorative-accessories-24924.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl07_imgChildCat"
                      alt="IKEA Decorative Accessories"
                    />
                    <span>ÖMSESIDIG Collection



</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/candle-holders"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl08_lnkChildCat"
                  >
                    <img
                      src={image9}
                      // src="./Accessories Models and Prices _ IKEA_files/candle-holders-candles-10760.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl08_imgChildCat"
                      alt="IKEA Candle Holders"
                    />
                    <span>TABBERAS Collection

 </span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/vases"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl09_lnkChildCat"
                  >
                    <img
                      src={image10}
                      // src="./Accessories Models and Prices _ IKEA_files/vases-bowls-10769.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl09_imgChildCat"
                      alt="IKEA Vases"
                    />
                    <span>TESAMMANS Collection

</span>
                  </a>
                </div>

                <div class="category-item">
                  <a
                    href="https://www.ikea.com.tr/en/category/tableware-and-cooking-utensils"
                    id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl10_lnkChildCat"
                  >
                    <img
                      src={image11}
                      // src="./Accessories Models and Prices _ IKEA_files/yilbasi-sofra-ve-pisirme-aksesuarlari.jpg"
                      id="ctl00_ContentPlaceHolder1_rptChildCategory_ctl10_imgChildCat"
                      alt="IKEA Tableware and Cooking Utensils"
                    />
                    <span>VARMBLIXT Collection</span>
                  </a>
          </div>
          </div>
        </div>
        <div
              className="w-[50%] p-5"
              // class="shoppable-info-container"
            >
              
              <p>
                <span>
                  <span  className='text-justify'>
                  به این صفحه به عنوان یک کشوی جوراب فکر کنید که شامل تمام مجموعه های IKEA در حال حاضر در دسترس شماست. از آنجایی که همه مجموعه ها اینجا هستند، می توانید مفاهیم مورد نظر خود را پیدا کنید، مانند یک مجموعه پارچه جدید یا یک مجموعه مبلمان با طرح های مشابه. اگر چیزی که به دنبالش هستید اینجا نیست، ممکن است در سرزمین جوراب های گمشده باشد.                  </span>
                </span>
              </p>
              
        </div>
        <Filter />
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                              src={product2}
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
                              src={SubProduct2}
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                              src={SubProduct3}
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
                           {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                              src={product5}
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
                              src={SubProduct51}
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                              src={product7}
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
                              src={SubProduct71}
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                             {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */}
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
                             {/* {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */} 
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
                          <div
                                                      // className="bg-[#C40C0C] w-[45%] relative h-20"

                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                               <span
                              class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
</div>
                           
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
                              src={product10}
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
                              src={SubProduct101}
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
                             {/* {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */} 
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
</div>
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
                             {/* {/* <div className="w-[30%] p-3 text-white flex items-center justify-center text-3xl fontbold bg-orange-600 font-vazir">
                          جدید
                        </div> */} 
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
                          <div
                            // className="bg-[#C40C0C] w-[45%] relative h-20"
                          >
                              <span class="cross-price"></span>
                            <div
                              // className="bg-[#FFC100] z-50 flex items-center justify-center absolute w-full mr-3 mb-5 h-[87%]"
                            >
                              <span class="price text-2xl font-bold text-gray-700">
                                <span class="tl ">₺</span>
                                6,599
                              </span>
                              </div>
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
    </>
  )
}

export default Collections
