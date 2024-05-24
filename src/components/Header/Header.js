import React, { useState } from "react";
import logo from "../../Images/logo (2).svg";
import { IoMdMenu, IoIosSearch, IoIosClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import "../../css/magiclick.ikea.min.css";
import { GrFormNext } from "react-icons/gr";

import room1 from '../../Images/rooms/rooms-dis-mekan-01.jpg'
import room2 from '../../Images/rooms/oturma-odasi-2.jpg'
import room3 from '../../Images/rooms/bedroom.jpg'
import room4 from '../../Images/rooms/dinner-3.jpg'
import room5 from '../../Images/rooms/calisma-odasi-1.jpg'
import room6 from '../../Images/rooms/hallway.jpg'
import room7 from '../../Images/rooms/bathroom-3.jpg'
import room8 from '../../Images/rooms/oyuncu-odasi.jpg'
import room9 from '../../Images/rooms/kitchen.jpg'
import room10 from '../../Images/rooms/children.jpg'
import room11 from '../../Images/rooms/is-yeriniz-icin.jpg'





const Header = () => {
  const [openSidebar, setOpenSildebar] = useState(false);
  const [showRooms,setShowRooms] = useState(false);
  const [submenuProduct, setSubmenuProduct] = useState(false);
  const [submenuRooms, setSubmenuRooms] = useState(false);
  console.log(openSidebar);
  return (
    <>
      <div
        class="header-parent yasasin-cumhuriyet text-2xl   font-vazir"
        data-module="MainMenu"
      >
        <div class="container-fluid white position-relative fixed mt-10">
          <header class="hnf-header">
            {/* <div
              id="ctl00_ctrlHeader_ctrlNavTag"
              class="top-links hidden-xs hidden-sm"
            >
              <nav class="links">
                <a href="https://www.ikea.com.tr/en/stores">
                  فروشگاه های ایکیا
                </a>
                <a href="https://www.ikea.com.tr/en/services" className="mr-3">
                  خدمات
                </a>
                <a href="https://www.ikea.com.tr/en/familycard">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/ikeabusiness">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/ikea-swedish-restaurant">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/shop-online/order-tracking">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/customer-relations/contact-us">
                  تماس با ما
                </a>
                <a href="https://www.ikea.com.tr/en/customer-relations/survey">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/customer-relations/stock-availability">
                  لورم ایپسوم متن
                </a>
                <a href="https://www.ikea.com.tr/en/shop-online/order-change-refund">
                  لورم ایپسوم متن
                </a>
                <a id="language" href="https://www.ikea.com.tr/evde-guvenlik">
                </a>
              </nav>
            </div> */}

            <div class="header-page-container">
              <div className="hamburger-menu">
                <IoMdMenu
                  className="text-5xl"
                  onClick={() => setOpenSildebar(true)}
                />
                {/* <svg
                  focusable="false"
                  class="svg-icon hnf-svg-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                  onClick={() => console.log(openSidebar)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 8H4V6h16v2zm0 5H4v-2h16v2zm0 5H4v-2h16v2z"
                  ></path>
                </svg> */}
              </div>
              <div class="header-page-container-inner">
                <div class="header-page">
                  <div class="header-left">
                    <div class="header-logo">
                      <a
                        href="https://www.ikea.com.tr/en/"
                        class="hnf-link"
                        data-tracking-label="ikea-logo"
                      >
                        <img
                          src={logo}
                          alt="IKEA"
                          title="IKEA"
                          width="90"
                          height="36"
                        />
                      </a>
                    </div>
                  </div>

                  <div
                    id="ctl00_ctrlHeader_divSearchBox "
                    class="header-search"
                  >
                    <div class="search-wrapper">
                      <div class="search-field relative">
                        {/* <i class="icon-search-new"> */}

                        {/* <a
                          href="javascript:;"
                          class="icon-close-pure search-close"
                        ></a> */}

                        {/* <im/> */}
                        <input
                          type="search"
                          maxlength="100"
                          className="search-field__input relative"
                          placeholder="جستجو محصول"
                          autocapitalize="off"
                          autocomplete="off"
                          autocorrect="off"
                        />
                        <i>
                          {" "}
                          <IoIosSearch className="relative" />
                        </i>
                      </div>
                    </div>

                    <div class="search-result">
                      <div class="search-filters">
                        <div class="row">
                          <div class="col">
                            <div class="search-filters__item search-filters__series">
                              <h2>لورم ایپسوم</h2>
                              <ul>
                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/metod-series">
                                    <i class="icon-series"></i>لورم ایپسوم
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/enhet-series">
                                    <i class="icon-series"></i>لورم ایپسوم
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/soderhamn-series">
                                    <i class="icon-series"></i>لورم ایپسوم
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/angsjon-tolken-backsjon-series">
                                    <i class="icon-series"></i>
                                    لورم ایپسوم متن ساختگی با.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/yllevad-series">
                                    <i class="icon-series"></i>لورم ایپسوم متن.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/series/angsjon-tolken-kattevik-series">
                                    <i class="icon-series"></i>
                                    لورم ایپسوم متن ساختگی با.
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="col">
                            <div class="search-filters__item search-filters__related-categories">
                              <p>لورم ایپسوم متن.</p>
                              <ul>
                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/pax-all-pieces">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن ساختگی.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/besta-storage-combinations">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن ساختگی.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/metod-kitchen-cabinet-parts">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن ساختگی با تولید.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/besta-tv-stands">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن ساختگی با تولید.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/wooden-desks">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن.
                                  </a>
                                </li>

                                <li>
                                  <a href="https://www.ikea.com.tr/en/category/besta-tv-units">
                                    <i class="icon-s-category"></i>لورم ایپسوم
                                    متن.
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper">
                        <div class="row">
                          <div class="col-lg-3 col-sm-6 col-xs-12">
                            <div class="product-item">
                              <div class="product-item-content">
                                <div class="search-product-item">
                                  <div class="product-item-img-box">
                                    <a
                                      href="https://www.ikea.com.tr/en/product/markus-light-grey-office-chair-10521858"
                                      class="product-item-img active"
                                    >
                                      <img
                                        src="https://www.ikea.com.tr/en/safety-at-home"
                                        class="custom-logo"
                                      />
                                      <img src="https://image-ikea.mncdn.com/urunler/500_500/PE866425.jpg" />

                                      <span class="img-hover">
                                        <img src="https://image-ikea.mncdn.com/urunler/500_500/PE888993.jpg" />
                                      </span>
                                    </a>
                                  </div>
                                  <a href="https://www.ikea.com.tr/p10521858">
                                    <span class="title">MARKUS</span>
                                    <span class="desc">office chair</span>
                                    <div class="price-div">
                                      <span class="price">
                                        <span class="tl">
                                          <u>₺</u>
                                        </span>
                                        7,799
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="product-item-buttons">
                                  <span
                                    class="icon-basket-new basket-add mini-basket-btn"
                                    data-title="MARKUS office chair"
                                    onclick="shopping.addCartItem(&#39;10521858&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val());"
                                  ></span>

                                  <span
                                    class="favorite-btn "
                                    onclick="user.favorite.addItem(10521858)"
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

                          <div class="col-lg-3 col-sm-6 col-xs-12">
                            <div class="product-item">
                              <div class="product-item-content">
                                <div class="search-product-item">
                                  <div class="product-item-img-box">
                                    <a
                                      href="https://www.ikea.com.tr/en/product/kullen-white-140x72-cm-chest-of-6-drawers-90309245"
                                      class="product-item-img active"
                                    >
                                      <img
                                        src="https://www.ikea.com.tr/en/safety-at-home"
                                        class="custom-logo"
                                      />
                                      <img src="https://image-ikea.mncdn.com/urunler/500_500/PE706985.jpg" />

                                      <span class="img-hover">
                                        <img src="https://image-ikea.mncdn.com/urunler/500_500/PE758820.jpg" />
                                      </span>
                                    </a>
                                  </div>
                                  <a href="https://www.ikea.com.tr/p90309245">
                                    <span class="title">KULLEN</span>
                                    <span class="desc">
                                      chest of 6 drawers, 140x72 cm
                                    </span>
                                    <div class="price-div">
                                      <span class="price">
                                        <span class="tl">
                                          <u>₺</u>
                                        </span>
                                        3,999
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="product-item-buttons">
                                  <span
                                    class="icon-basket-new basket-add mini-basket-btn"
                                    data-title="KULLEN chest of 6 drawers, 140x72 cm"
                                    onclick="shopping.addCartItem(&#39;90309245&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val());"
                                  ></span>

                                  <span
                                    class="favorite-btn "
                                    onclick="user.favorite.addItem(90309245)"
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

                          <div class="col-lg-3 col-sm-6 col-xs-12">
                            <div class="product-item">
                              <div class="product-item-content">
                                <div class="search-product-item">
                                  <div class="product-item-img-box">
                                    <a
                                      href="https://www.ikea.com.tr/en/product/busunge-white-80x200-cm-extendable-bed-70305700"
                                      class="product-item-img active"
                                    >
                                      <img
                                        src="https://image-ikea.mncdn.com/islogos/en/surdurulebilir.svg"
                                        class="custom-logo"
                                      />
                                      <img src="https://image-ikea.mncdn.com/urunler/500_500/PE698559.jpg" />

                                      <span class="img-hover">
                                        <img src="https://image-ikea.mncdn.com/urunler/500_500/PE842253.jpg" />
                                      </span>
                                    </a>
                                  </div>
                                  <a href="https://www.ikea.com.tr/p70305700">
                                    <span class="title">BUSUNGE</span>
                                    <span class="desc">
                                      extendable bed, 80x200 cm
                                    </span>
                                    <div class="price-div">
                                      <span class="price">
                                        <span class="tl">
                                          <u>₺</u>
                                        </span>
                                        8,999
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="product-item-buttons">
                                  <span
                                    class="icon-basket-new basket-add mini-basket-btn"
                                    data-title="BUSUNGE extendable bed, 80x200 cm"
                                    onclick="shopping.addCartItem(&#39;70305700&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val());"
                                  ></span>

                                  <span
                                    class="favorite-btn "
                                    onclick="user.favorite.addItem(70305700)"
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

                          <div class="col-lg-3 col-sm-6 col-xs-12">
                            <div class="product-item">
                              <div class="product-item-content">
                                <div class="search-product-item">
                                  <div class="product-item-img-box">
                                    <a
                                      href="https://www.ikea.com.tr/en/product/hemnes-white-107x22x101-cm-shoe-cabinet-storage-60156121"
                                      class="product-item-img active"
                                    >
                                      <img
                                        src="https://image-ikea.mncdn.com/islogos/en/cok-satan.svg"
                                        class="custom-logo"
                                      />
                                      <img src="https://image-ikea.mncdn.com/urunler/500_500/PE727760.jpg" />

                                      <span class="img-hover">
                                        <img src="https://image-ikea.mncdn.com/urunler/500_500/PE877933.jpg" />
                                      </span>
                                    </a>
                                  </div>
                                  <a href="https://www.ikea.com.tr/p60156121">
                                    <span class="title">HEMNES</span>
                                    <span class="desc">
                                      shoe cabinet/storage, 107x22x101 cm
                                    </span>
                                    <div class="price-div">
                                      <span class="price">
                                        <span class="tl">
                                          <u>₺</u>
                                        </span>
                                        4,199
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="product-item-buttons">
                                  <span
                                    class="icon-basket-new basket-add mini-basket-btn"
                                    data-title="HEMNES shoe cabinet/storage, 107x22x101 cm"
                                    onclick="shopping.addCartItem(&#39;60156121&#39;, false, $(this).parent().prev().find(&#39;.quantityInput&#39;).val());"
                                  ></span>

                                  <span
                                    class="favorite-btn "
                                    onclick="user.favorite.addItem(60156121)"
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="header-icons">
                    <li class="header-icons-profile account-link dropdown display-none hide">
                      <a
                        id="account-menu"
                        data-target="#"
                        href="javascript:;"
                        data-openSidebar="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        class="icon-new-user"
                      >
                        <span class="user-text"></span>
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="account-menu">
                        <li>
                          <a href="https://www.ikea.com.tr/en/account">
                            حساب کاربری
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/update-user">
                            پروفایل
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/favorites">
                            لیست علاقه مندی های من
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/orders">
                            سفارش های من{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/coupons">
                            کوپن های من
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/addresses">
                            آدرس من
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/account/logout">
                            خروج
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="header-icons-shopping">
                      <a
                        // class="shopping-basket"
                        className="mt-3"
                        href="javascript:;"
                        data-url="/en/order-steps/shopping-cart"
                        aria-label="Sepet"
                      >
                        <svg
                          focusable="false"
                          class="svg-icon"
                          width="34"
                          height="34"
                          viewBox="0 0 24 24"
                          fill="black"
                          xmlns="https://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/favorites"
                        // href="https://www.ikea.com.tr/en/account/favorites"
                        // class="icon-new-fav"
                        aria-label="Favoriler"
                        className="flex items-center justify-center mt-3"
                      >
                        <MdOutlineFavoriteBorder className="text-5xl" />
                      </Link>
                    </li>

                    <li className="login flex items-center  ">
                      <Link
                        id="login"
                        to="/login"
                        // href="https://www.ikea.com.tr/en/account/login"
                        // class="icon-new-user"
                        className="inline-flex justify-center items-center font-vazir font-bold"
                      >
                        <GoPerson className="text-5xl" />
                        <span class="user-text  items-center inline-flex font-vazir">
                          ثبت نام یا ورود{" "}
                        </span>
                      </Link>
                    </li>
                    <div class="shopping-wrapper" id="shoppingWrapper"></div>
                  </ul>
                </div>

                <nav class="header-nav">
                  <ul>
                    {/* <li>
                      <a
                        href="https://www.ikea.com.tr/en/ideas"
                        id="ctl00_ctrlHeader_rptMenuBars_ctl04_anchorMenuBar"
                        style={{ color: "#242424" }}

                        // style="color:#242424;"
                      >
                        ایده ها
                      </a>
                    </li> */}
                    {/* 
                    <li>
                      <a
                        href="https://www.ikea.com.tr/en/new-products"
                        id="ctl00_ctrlHeader_rptMenuBars_ctl03_anchorMenuBar"
                        style={{ color: "#ff3f00" }}
                        // style="color:#ff3f00;"
                      >
                        چه خبر ؟
                      </a>
                    </li> */}

                    <li>
                      <a
                        href="https://www.ikea.com.tr/en/category/outdoor-products"
                        id="ctl00_ctrlHeader_rptMenuBars_ctl02_anchorMenuBar"
                        style={{ color: "#52ad46" }}
                      >
                        محصولات تابستانی
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.ikea.com.tr/en/rooms"
                        id="ctl00_ctrlHeader_rptMenuBars_ctl01_anchorMenuBar"
                      >
                        اتاق ها
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ikea.com.tr/"
                        id="ctl00_ctrlHeader_rptMenuBars_ctl00_anchorMenuBar"
                      >
                        محصولات
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div
        className={`${
          openSidebar ? "w-[30vw]" : "w-0"
        } duration-300 z-50 bg-white fixed top-0 h-screen flex flex-col`}
      >
        <div
          className={`${
            openSidebar
              ? "opacity-100 z-50 w-[25vw] absolute h-64 duration-300 flex items-center justify-center "
              : "opacity-0"
          }`}
        >
          <div className=" w-[5vw] h-full flex flex-col items-center justify-center">
            <IoIosClose
              className={`${
                openSidebar
                  ? "opacity-100 text-5xl cursor-pointer"
                  : "opacity-0"
              }`}
              onClick={() => setOpenSildebar(false)}
            />
          </div>
          <div
            className={`${
              openSidebar
                ? "w-full flex h-64  p-10 items-center justify-center opacity-100"
                : "opacity-0"
            } `}
          >
            <img src={logo} alt="logo" className="" />
          </div>
        </div>
        {openSidebar && (
          <>
            <div className="w-full  mt-64">
              <ul className=" mt-10 mb-5 duration-300 ">
                {!showRooms && <li
                  className="text-5xl hover:underline font-vazir  cursor-pointer hover:border-b-black flex items-center justify-between"
                  onClick={() => setSubmenuProduct(!submenuProduct)}
                >
                  <div className="w-[20%] flex items-center justify-center">
                    {!submenuProduct ? "" : <GrFormNext />}
                  </div>
                  <div className=" w-full ">
                    محصولات
                    {/* {submenuProduct ? "" : "محصولات"} */}
                  </div>
                </li>}
                {submenuProduct && (
                  <ul className="w-full duration-300 font-vazir font-bold px-20">
                    {/* <li>محصولات</li> */}
                    <li className=" mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      <Link
                        to="/products"
                        className="px-20 text-gray-700 mt-20 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                         همه محصولات
                      </Link>
                    </li>
                    <li className=" mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      <Link to="/products/allaccessories"
                      className="px-20 text-gray-700 mt-20 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                      خرید کلیه لوازم جانبی
                      </Link>
                    </li>
                    <li className=" mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                    <Link to="/products/newproducts"
                      className="px-20 text-gray-700 mt-20 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                      محصولات جديد
</Link>
                    </li>
                    <li className=" text-gray-700 mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      <Link
                        to="/products/bestsellers"
                        className="px-20 text-gray-700 mt-20 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                        پرفروش ترين ها{" "}
                      </Link>
                    </li>
                    <li className="mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      <Link
                        to="/products/everyday-essentials"
                        className="px-20 mt-20 text-gray-700 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                        ملزومات روزمره
                      </Link>
                    </li>
                    <li className=" mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                    <Link
                        to="/products/lowestprice"
                        className="px-20 mt-20 text-gray-700 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                        پایین ترین قیمت
                        </Link>
                    </li>
                    <li className=" mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                    <Link
                        to="/products/collections"
                        className="px-20 mt-20 text-gray-700 text-[18px] cursor-pointer hover:underline font-bold"
                      >
                        مجموعه ها
                        </Link>
                    </li>
                  </ul>
                )}
                <li  className={showRooms ?"text-5xl hover:underline font-vazir  cursor-pointer hover:border-b-black flex items-center justify-between":"text-5xl  hover:underline font-vazir cursor-pointer px-32 mt-20 "}
 onClick={() => setShowRooms(!showRooms)}>
                <div className="w-[20%] flex items-center justify-center"  onClick={()=>setShowRooms(false)}>
                    {!showRooms ? "" : <GrFormNext className="cursor-pointer"/>}
                  </div>
                  <div className=" w-full ">
                    اتاق ها
                    {/* {submenuProduct ? "" : "محصولات"} */}
                  </div>
                </li>
                {!showRooms && <>
                
                  <li className="text-3xl px-32 mt-20 font-vazir ">
                  کارت خانواده ایکیا
                </li>
                  <li className="text-3xl mt-20 font-vazir ">
                    <Link to="/ikeabusiness"  className="px-32 text-gray-700  text-3xl cursor-pointer hover:underline  ">
                  فروش تجاری ایکیا
                    </Link>
                </li>
                
                </>}
              </ul>
            </div>
          </>
        )}
        {/* <div
          className={`${
            openSidebar
              ? "opacity-100 flex  bg-red-500 w-full mt-64"
              : "opacity-0"
          }`}
        >
          hello
        </div> */}
        {showRooms && <>
        <div className="w-full p-10 grid grid-cols-2 gap-10 overflow-y-auto ">
          <div className="flex flex-col w-full">
            <img src={room1} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">باغ و بالکن</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room2} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق نشیمن</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room3} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق خواب </span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room4} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق غذاخوری</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room5} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق کار</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room6} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">راهرو</span>
            </div>
          <div className="flex flex-col w-full">
            <img src={room7} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">حمام</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room8} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق بازی</span>
            </div>
          <div className="flex flex-col w-full">
            <img src={room9} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">آشپزخانه</span>
          </div>
          <div className="flex flex-col w-full">
            <img src={room10} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">اتاق کودک</span>
            </div>
          <div className="flex flex-col w-full">
            <img src={room11} alt="" />
            <span className="font-vazir text-2xl mt-5 cursor-pointer px-3 hover:underline">ایکیا برای کسب و کار ها </span>
            </div>
            
       </div>
      
      
      
      
      
      
      
      </>}

      </div>
     
      




    </>
  );
};

export default Header;
