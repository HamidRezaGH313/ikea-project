import React, { useState } from "react";
import logo from "../../Images/logo (2).svg";
import { IoMdMenu, IoIosSearch, IoIosClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import "../../css/magiclick.ikea.min.css";
import { GrFormNext } from "react-icons/gr";

const Header = () => {
  const [openSidebar, setOpenSildebar] = useState(false);
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
                <li
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
                </li>
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
                    <li className="px-20 mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      محصولات جديد
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
                    <li className="px-20 mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      پایین ترین قیمت
                    </li>
                    <li className="px-20 mt-20 text-[18px] cursor-pointer hover:underline font-bold">
                      مجموعه ها
                    </li>
                  </ul>
                )}
                <li className="text-5xl hover:underline px-32 mt-20 font-vazir hover:border-b-2 cursor-pointer hover:border-b-black ">
                  اتاق ها
                </li>
                <li className="text-3xl px-32 mt-20 font-vazir ">
                  کارت خانواده ایکیا
                </li>
                <li className="text-3xl px-32 mt-20 font-vazir ">
                  فروش تجاری ایکیا
                </li>
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
      </div>
      {/* <ul class={openSidebar ? "menu-nav-main" : "opacity-0"}>
            <li class="product">
              <a href="javascript">Products</a>
              <div class="sub-menu">
                <span>Products</span>
                <ul>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/category/furniture">
                      Shop all products
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/category/accessories">
                      Shop all accessories
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/new-products">
                      New products
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/pages/best-sellers">
                      Best Sellers
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/category/everyday-essentials">
                      Everyday Essentials
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/ideas/sustainability-small-changes-big-impacts">
                      Sustainability
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/campaign/lowest-price">
                      Lowest Price
                    </a>
                  </li>
                  <li class="font-weight-bold">
                    <a href="https://www.ikea.com.tr/en/category/collections">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">Outdoor Products</a>
                    <div class="sub-menu">
                      <span>Outdoor Products</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/outdoor-products">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-furniture">
                            Outdoor Furniture
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/balcony-furniture">
                            Balcony Furniture
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-flooring">
                            Outdoor Flooring
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/gardening-accessories">
                            Gardening Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/grills-and-barbeques">
                            Grills and Barbeques
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/grill-and-barbeque-accessories">
                            Grill and Barbeque Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/parasols-and-gazebos">
                            Parasols and Gazebos
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-privacy-screens">
                            Outdoor Privacy Screens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-storage">
                            Outdoor Storage
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-lighting">
                            Outdoor Lighting
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-textile">
                            Outdoor Textile
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/summer-rugs">
                            Summer Rugs
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go">
                            Picnic and on-the-go
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/beach-products">
                            Beach Products
                          </a>
                        </li>
                        <li class="more">
                          <a href="https://www.ikea.com.tr/en/javascript;">
                            More
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Furniture</a>
                    <div class="sub-menu">
                      <span>Furniture</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/furniture">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/sofas">
                            Sofas
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/sofa-beds">
                            Sofa Beds
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/armchairs">
                            Armchairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/wardrobes">
                            Wardrobes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cabinets">
                            Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/day-beds">
                            Day Beds
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/mattresses">
                            Mattresses
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/beds">
                            Beds
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/nightstands">
                            Nightstands
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/chest-of-drawers">
                            Chest of Drawers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bedroom-furniture-sets">
                            Bedroom Furniture Sets
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/tables">
                            Tables
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/chairs">
                            Chairs
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/children-s-furniture">
                            Children's Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/nursery-furniture">
                            Nursery Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/bookcases">
                            Bookcases
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/open-shelving-units">
                            Open Shelving Units
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/hallway-wardrobes">
                            Hallway Wardrobes
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/tv-cabinet-systems">
                            TV Cabinet Systems
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-furniture">
                            Kitchen Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-furniture">
                            Bathroom Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/bistro-furnitures">
                            Bistro Furnitures
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-furniture">
                            Outdoor Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/coffee-and-side-tables">
                            Coffee and Side Tables
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/hallway-furniture">
                            Hallway Furniture
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/room-divider-solutions">
                            Room Divider Solutions
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/gamers-equipment">
                            Gamers Equipment
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/fabric-footstool-pouffes">
                            Fabric Footstool &amp; pouffes
                          </a>
                        </li>
                        <li class="more">
                          <a href="https://www.ikea.com.tr/en/javascript;">
                            More
                          </a>
                        </li>
                      </ul>
                      <div class="sub-menu__item">
                        <a
                          href="https://www.ikea.com.tr/en/planners"
                          class="sub-menu__item-link"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-mobilyalar-01.jpg"
                            alt="IKEA Planners"
                          />
                          <span class="sub-menu__item-title">Planners</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Storage &amp; Organisation</a>
                    <div class="sub-menu">
                      <span>Storage &amp; Organisation</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/storage-and-organisation">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/wardrobes">
                            Wardrobes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/nightstands">
                            Nightstands
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/chest-of-drawers">
                            Chest of Drawers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bookcases">
                            Bookcases
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/console-tables">
                            Console Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/wall-cabinets">
                            Wall Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/storage-systems">
                            Storage Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/open-storage-systems">
                            Open Storage Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/sideboards">
                            Sideboards
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/buffets">
                            Buffets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/tv-cabinet-systems">
                            TV Cabinet Systems
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-cabinets">
                            Bathroom Cabinets
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-organisers">
                            Kitchen Organisers
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/children-s-wardrobes">
                            Children's Wardrobes
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/children-s-chests-of-drawers">
                            Children's Chests Of Drawers
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/toy-storage">
                            Toy Storage
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/children-s-bookcases">
                            Children's Bookcases
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/pantry-cabinets">
                            Pantry Cabinets
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/baskets">
                            Baskets
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/boxes">
                            Boxes
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/filing-cabinets">
                            Filing Cabinets
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/drawer-units">
                            Drawer Units
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/bags">
                            Bags
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/hooks">
                            Hooks
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/clothes-rails-and-coat-stands">
                            Clothes Rails and Coat Stands
                          </a>
                        </li>
                        <li class="more">
                          <a href="https://www.ikea.com.tr/en/javascript;">
                            More
                          </a>
                        </li>
                      </ul>
                      <div class="sub-menu__item">
                        <a
                          href="https://www.ikea.com.tr/en/storage-across-the-home"
                          class="sub-menu__item-link"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-depolama-ve-organizasyon-1.jpg"
                            alt="IKEA Storage across the home"
                          />
                          <span class="sub-menu__item-title">
                            Storage across the home
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Baby &amp; children</a>
                    <div class="sub-menu">
                      <span>Baby &amp; children</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/baby-and-children">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/baby">
                            Baby
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/children">
                            Children
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/teen">
                            Teen
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/children-s-storage-solutions">
                            Children's Storage Solutions
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/toy-storage">
                            Toy Storage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Mattresses and Beds</a>
                    <div class="sub-menu">
                      <span>Mattresses and Beds</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/mattresses-and-beds">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/beds">
                            Beds
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/mattresses">
                            Mattresses
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/beds-with-storage">
                            Beds with storage
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/day-beds">
                            Day Beds
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bunk-beds">
                            Bunk Beds
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Dining Room Furnitures</a>
                    <div class="sub-menu">
                      <span>Dining Room Furnitures</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/dining-room-furnitures">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dining-tables">
                            Dining Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-tables">
                            Kitchen Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dining-room-chairs">
                            Dining Room Chairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-chairs">
                            Kitchen Chairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/table-chair-sets">
                            Table Chair Sets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-table-sets">
                            Kitchen Table Sets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bistro-furnitures">
                            Bistro Furnitures
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/console-tables">
                            Console Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/sideboards">
                            Sideboards
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/service-trolleys">
                            Service Trolleys
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/stools">
                            Stools
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Home Organisation</a>
                    <div class="sub-menu">
                      <span>Home Organisation</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/home-organisation">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/boxes">
                            Boxes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/baskets">
                            Baskets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/interior-organisers">
                            Interior Organisers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/clothes-rails-and-coat-stands">
                            Clothes Rails and Coat Stands
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/open-storage-systems">
                            Open Storage Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/waste-bins">
                            Waste Bins
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bags">
                            Bags
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/assembly-and-maintenance-products">
                            Assembly And Maintenance Products
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/boards">
                            Boards
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/handles">
                            Handles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/wall-shelves">
                            Wall Shelves
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Home Textile</a>
                    <div class="sub-menu">
                      <span>Home Textile</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/home-textile">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bedding">
                            Bedding
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-textile">
                            Bathroom Textile
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-textiles">
                            Kitchen Textiles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/pillow-and-cushion">
                            Pillow and Cushion
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/curtains">
                            Curtains
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/rugs">
                            Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/tablecloth">
                            Tablecloth
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/baby-textiles">
                            Baby Textiles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/children-s-textile">
                            Children's Textile
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/teen-room-textile">
                            Teen Room Textile
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-textile">
                            Outdoor Textile
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/fabrics">
                            Fabrics
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/slippers">
                            Slippers
                          </a>
                        </li>
                        <li class="more">
                          <a href="https://www.ikea.com.tr/en/javascript;">
                            More
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Cookware &amp; tableware</a>
                    <div class="sub-menu">
                      <span>Cookware &amp; tableware</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/cookware-and-tableware">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-organisers">
                            Kitchen Organisers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/serveware">
                            Serveware
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/tableware">
                            Tableware
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/preparation">
                            Preparation
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cookware">
                            Cookware
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dishwashing-accessories">
                            Dishwashing Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dinner-sets">
                            Dinner Sets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/glasses-and-jugs">
                            Glasses and Jugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-textiles">
                            Kitchen Textiles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/food-storage">
                            Food Storage
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cutlery">
                            Cutlery
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go">
                            Picnic and on-the-go
                          </a>
                        </li>
                        <li style={{ display: "none" }}>
                          <a href="https://www.ikea.com.tr/en/category/spoons">
                            Spoons
                          </a>
                        </li>
                        <li class="more">
                          <a href="https://www.ikea.com.tr/en/javascript;">
                            More
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Picnic and on-the-go</a>
                    <div class="sub-menu">
                      <span>Picnic and on-the-go</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go">
                            Picnic and on-the-go
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Home Office</a>
                    <div class="sub-menu">
                      <span>Home Office</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/home-office">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/desk-chairs">
                            Desk Chairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/desks">
                            Desks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/office-accessories">
                            Office Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/desk-lamps">
                            Desk Lamps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/drawer-units">
                            Drawer Units
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bookcases">
                            Bookcases
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/desks-with-bookcase">
                            Desks with Bookcase
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laptop-desks">
                            Laptop Desks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cables-chargers">
                            Cables &amp; chargers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/charging-cables">
                            Charging Cables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/gamers-equipment">
                            Gamers Equipment
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/filing-cabinets">
                            Filing Cabinets
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Home Decoration</a>
                    <div class="sub-menu">
                      <span>Home Decoration</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/home-decoration">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/mirrors">
                            Mirrors
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/flower-pots-and-planters">
                            Flower Pots And Planters
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/frames">
                            Frames
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/candles">
                            Candles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/artificial-plants">
                            Artificial Plants
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/candle-holders">
                            Candle Holders
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/clocks">
                            Clocks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/wall-decoration">
                            Wall Decoration
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/vases">
                            Vases
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/home-fragrance">
                            Home Fragrance
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/decorative-lightings">
                            Decorative Lightings
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/gardening-accessories">
                            Gardening Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/decorative-accessories">
                            Decorative Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cushions">
                            Cushions
                          </a>
                        </li>
                      </ul>
                      <div class="sub-menu__item">
                        <a
                          href="https://www.ikea.com.tr/ideas#tag-home-decoration"
                          class="sub-menu__item-link"
                        >
                          <img
                            src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-dekorasyon.jpg"
                            alt="IKEA Home Decaration Ideas"
                          />
                          <span class="sub-menu__item-title">
                            Home Decaration Ideas
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Lighting</a>
                    <div class="sub-menu">
                      <span>Lighting</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/lighting">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/lamps">
                            Lamps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/chandelier">
                            Chandelier
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/lampshades">
                            Lampshades
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/floor-lamps">
                            Floor Lamps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/table-lamps">
                            Table Lamps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/decorative-lightings">
                            Decorative Lightings
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/light-bulbs">
                            Light Bulbs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/smart-lighting">
                            Smart Lighting
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/outdoor-lights">
                            Outdoor Lights
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/children-s-room-lightings">
                            Children's Room Lightings
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/integrated-lighting">
                            Integrated Lighting
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/lighting-accessories">
                            Lighting Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Rugs</a>
                    <div class="sub-menu">
                      <span>Rugs</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/rugs">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/large-rugs">
                            Large Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/small-rugs">
                            Small Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/lounge-rugs">
                            Lounge Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/scandinavian-rugs">
                            Scandinavian Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/shaggy-rugs">
                            Shaggy Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/tumbled-rugs">
                            Tumbled Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/runners">
                            Runners
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/post-rugs">
                            Post Rugs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/patterned-rugs">
                            Patterned Rugs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Bathroom Products</a>
                    <div class="sub-menu">
                      <span>Bathroom Products</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/bathroom-products">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-furniture">
                            Bathroom Furniture
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-shelf-units">
                            Bathroom Shelf Units
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-trolley">
                            Bathroom Trolley
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-organiser">
                            Bathroom Organiser
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bath-taps">
                            Bath Taps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-taps">
                            Bathroom Taps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/shower-accessories">
                            Shower Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-mirrors">
                            Bathroom Mirrors
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-lightings">
                            Bathroom Lightings
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-stools-and-benches">
                            Bathroom Stools and Benches
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-accessories">
                            Bathroom Accessories
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bathroom-textile">
                            Bathroom Textile
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laundry-and-cleaning">
                            Laundry and Cleaning
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/spa-accessories">
                            Spa Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Kitchen Furniture</a>
                    <div class="sub-menu">
                      <span>Kitchen Furniture</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/kitchen-furniture">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/knoxhult-kitchens">
                            KNOXHULT Kitchens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/enhet-kitchens">
                            ENHET Kitchens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/metod-kitchens">
                            METOD Kitchens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/ready-made-kitchens">
                            Ready-made Kitchens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-cabinets">
                            Kitchen Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/pantry-cabinets">
                            Pantry Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-tables">
                            Kitchen Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-chairs">
                            Kitchen Chairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-table-sets">
                            Kitchen Table Sets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/service-trolleys">
                            Service Trolleys
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-wall-shelves">
                            Kitchen Wall Shelves
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-worktops">
                            Kitchen Worktops
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-islands">
                            Kitchen Islands
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/kitchen-sinks">
                            Kitchen Sinks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/sink-taps">
                            Sink Taps
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/bar-chairs">
                            Bar Chairs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/handles">
                            Handles
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/plate-shelf">
                            Plate Shelf
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Laundry &amp; cleaning</a>
                    <div class="sub-menu">
                      <span>Laundry &amp; cleaning</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/laundry-and-cleaning">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laundry-baskets">
                            Laundry Baskets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laundry-bags">
                            Laundry Bags
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/clothes-pins">
                            Clothes Pins
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laundry-dryers">
                            Laundry Dryers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/ironing-boards">
                            Ironing Boards
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cleaning-supplies-and-tools">
                            Cleaning Supplies and Tools
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/soap-dispensers-soap-dishes">
                            Soap dispensers &amp; soap dishes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cleaning-gloves">
                            Cleaning Gloves
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dish-brushes">
                            Dish Brushes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dish-cloths">
                            Dish Cloths
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dish-sponge">
                            Dish Sponge
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/feather-collectors">
                            Feather Collectors
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Hallway &amp; Storage</a>
                    <div class="sub-menu">
                      <span>Hallway &amp; Storage</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/hallway-and-storage-solutions">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/hallway-furniture">
                            Hallway Furniture
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/shoe-racks">
                            Shoe Racks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/open-storage-systems">
                            Open Storage Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/pantry-cabinets">
                            Pantry Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/coat-stands">
                            Coat Stands
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/boxes">
                            Boxes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/mirrors">
                            Mirrors
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/baskets">
                            Baskets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/interior-organisers">
                            Interior Organisers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/folding-screens">
                            Folding Screens
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/laundry-and-cleaning">
                            Laundry and Cleaning
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/waste-bins">
                            Waste Bins
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/assembly-and-maintenance-products">
                            Assembly And Maintenance Products
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="javascript:;">Pet Products</a>
                    <div class="sub-menu">
                      <span>Pet Products</span>
                      <ul>
                        <li class="all-text">
                          <span>
                            <a href="https://www.ikea.com.tr/en/category/pet-products">
                              Shop All
                            </a>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/animal-care-products">
                            Animal Care Products
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/dog-products">
                            Dog Products
                          </a>
                        </li>
                        <li>
                          <a href="https://www.ikea.com.tr/en/category/cat-products">
                            Cat Products
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="more">
                    <a href="https://www.ikea.com.tr/en/javascript;">More</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="room">
              <a href="javascript:;">Rooms</a>
              <div class="sub-menu">
                <span>Rooms</span>
                <div class="row menu-room-list">
                  <a
                    href="https://www.ikea.com.tr/en/rooms/balcony-garden"
                    id="ctl00_ctrlHeader_rptRooms_ctl00_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/rooms-dis-mekan-01.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl00_imgRoom"
                      alt="IKEA Balcony &amp; Garden"
                    />
                    <span>Balcony &amp; Garden</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/bedroom"
                    id="ctl00_ctrlHeader_rptRooms_ctl01_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/bedroom.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl01_imgRoom"
                      alt="IKEA Bedroom"
                    />
                    <span>Bedroom</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/living-room"
                    id="ctl00_ctrlHeader_rptRooms_ctl02_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/oturma-odasi-2.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl02_imgRoom"
                      alt="IKEA Living Room"
                    />
                    <span>Living Room</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/dining"
                    id="ctl00_ctrlHeader_rptRooms_ctl03_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/dinner-3.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl03_imgRoom"
                      alt="IKEA Dining"
                    />
                    <span>Dining</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/working-spaces"
                    id="ctl00_ctrlHeader_rptRooms_ctl04_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/calisma-odasi-1.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl04_imgRoom"
                      alt="IKEA Working Spaces"
                    />
                    <span>Working Spaces</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/kitchen"
                    id="ctl00_ctrlHeader_rptRooms_ctl05_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/kitchen.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl05_imgRoom"
                      alt="IKEA Kitchen"
                    />
                    <span>Kitchen</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/baby-and-children-s-room"
                    id="ctl00_ctrlHeader_rptRooms_ctl06_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/children.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl06_imgRoom"
                      alt="IKEA Baby and Children&#39;s Room"
                    />
                    <span>Baby and Children's Room</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/bathroom"
                    id="ctl00_ctrlHeader_rptRooms_ctl07_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/bathroom-3.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl07_imgRoom"
                      alt="IKEA Bathroom"
                    />
                    <span>Bathroom</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/hallway"
                    id="ctl00_ctrlHeader_rptRooms_ctl08_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/hallway.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl08_imgRoom"
                      alt="IKEA Hallway"
                    />
                    <span>Hallway</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/rooms/gaming-room"
                    id="ctl00_ctrlHeader_rptRooms_ctl09_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/oyuncu-odasi.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl09_imgRoom"
                      alt="IKEA Gaming Room"
                    />
                    <span>Gaming Room</span>
                  </a>

                  <a
                    href="https://www.ikea.com.tr/en/ikeabusiness"
                    id="ctl00_ctrlHeader_rptRooms_ctl10_anchorRoom"
                    class="col-md-6 col-sm-4 col-xs-6"
                  >
                    <img
                      src="https://image-ikea.mncdn.com/kategoriler/rooms/is-yeriniz-icin.jpg"
                      id="ctl00_ctrlHeader_rptRooms_ctl10_imgRoom"
                      alt="IKEA IKEA for Business"
                    />
                    <span>IKEA for Business</span>
                  </a>
                </div>
              </div>
            </li>
          </ul> */}

      {/* <ul class={openSidebar ? "menu-nav-aux" : "opacity-0"}>
            <li>
              <a
                href="https://www.ikea.com.tr/en/stores"
                id="ctl00_ctrlHeader_rptServices_ctl00_anchorService"
              >
                IKEA Stores
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/services"
                id="ctl00_ctrlHeader_rptServices_ctl01_anchorService"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/ideas"
                id="ctl00_ctrlHeader_rptServices_ctl02_anchorService"
              >
                Ideas
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/safety-at-home"
                id="ctl00_ctrlHeader_rptServices_ctl03_anchorService"
              >
                Safety at Home
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/shop-online/order-tracking"
                id="ctl00_ctrlHeader_rptServices_ctl04_anchorService"
              >
                Order Tracking
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/customer-relations/contact-us"
                id="ctl00_ctrlHeader_rptServices_ctl05_anchorService"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/customer-relations/survey"
                id="ctl00_ctrlHeader_rptServices_ctl06_anchorService"
              >
                Customer Satisfaction Form
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/social-responsibility-projects"
                id="ctl00_ctrlHeader_rptServices_ctl07_anchorService"
              >
                Social Responsibility
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/familycard"
                id="ctl00_ctrlHeader_rptServices_ctl08_anchorService"
              >
                IKEA Family Card
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/ikeabusiness"
                id="ctl00_ctrlHeader_rptServices_ctl09_anchorService"
              >
                IKEA Business Sales
              </a>
            </li>

            <li>
              <a
                href="https://www.ikea.com.tr/en/ikea-swedish-restaurant"
                id="ctl00_ctrlHeader_rptServices_ctl10_anchorService"
              >
                Swedish Restaurant
              </a>
            </li>
          </ul> */}

      {/* <div className="flex rtl">
       
        <div className="w-[10%]   text-center ">
          <div className="w-full  h-[20%] flex items-center justify-center">
            <IoMdMenu className="text-3xl cursor-pointer " />
          </div>
        </div>
     
        <div className="w-full  justify-start">
          <div className=" w-full h-[20%]">
            <div className="w-full border-b-2 ">hello</div>
          
            <div className="w-full py-7 flex items-center justify-between ">
              <div className="w-full flex ">
                <img src={logo} alt="logo" />
                <div className="w-[60%] rtl bg-[#f5f5f5] rounded-full flex items-center justify-center p-3 mr-5 hover:bg-[#e3e1e1]">
                  <IoIosSearch className="text-3xl flex items-center justify-center ml-2" />
                  <input
                    className="w-[100%] rounded-full flex items-center justify-center focus:outline-none text-xl bg-transparent"
                    placeholder="جستجو محصول"
                  />
                </div>
                <div className="w-[18%] h-[18%]    flex items-center cursor-pointer mr-3">
                  <GoPerson className=" w-[20%] p-2 h-[20%]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full " />
                  <div className="text-md font-bold w-[100%]  p-1 ">
                    ورودبه سیستم یا ثبت نام
                  </div>
                </div>
                <div className="w-[40px] h-[40px] ">
                  <MdOutlineFavoriteBorder className=" w-[40px] p-2 h-[40px]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full " />
                </div>
                <div className="w-[42px] h-[42px]">
                  <svg
                    focusable="false"
                    class="svg-icon"
                    // width="34"
                    // height="34"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="https://www.w3.org/2000/svg"
                    className=" w-[42px] p-2 h-[42px]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full mr-2 "
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
                    ></path>
                  </svg>
                </div>
              </div>

             
            </div>
          </div>
          <div className=" w-full ">
            <ul className="flex ">
              <li className=" cursor-pointer hover:border-b-2 hover:border-b-black font-bold">
                محصولات
              </li>
              <li className="mr-5 cursor-pointer hover:border-b-2 hover:border-b-black font-bold">
                اتاق ها
              </li>
              <li className="mr-5 cursor-pointer hover:border-b-2 hover:border-b-green-300 text-green-300 font-bold">
                محصولات تابستانی
              </li>
              <li className="mr-5 cursor-pointer hover:border-b-2 hover:border-b-red-500 text-red-500 font-bold">
                چه خبر ؟
              </li>
              <li className="mr-5 cursor-pointer hover:border-b-2 hover:border-b-black font-bold">
                ایده ها{" "}
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
        <div className="w-[2%]  h-screen text-center "></div>
      </div> */}
      {/* <div>hello</div>
      <div className="w-full  p-7 fixed flex items-center justify-center border-b-4 border-b-[20%]">
        <IoMdMenu className="text-3xl cursor-pointer ml-10" />
        <img src={logo} alt="logo" />
        <div className="w-[60%] rtl bg-[#f5f5f5] rounded-full flex items-center justify-center p-3 mr-5 hover:bg-[#e3e1e1]">
          <IoIosSearch className="text-3xl flex items-center justify-center ml-2" />
          <input
            className="w-[100%] rounded-full flex items-center justify-center focus:outline-none text-xl bg-transparent"
            placeholder="جستجو محصول"
          />
        </div>
       
        <div className="w-[15%] h-[15%]    flex items-center cursor-pointer mr-3">
          <GoPerson className=" w-[20%] p-2 h-[20%]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full " />
          <div className="text-md font-bold w-[100%]  p-1 ">
            ورودبه سیستم یا ثبت نام
          </div>
        </div>
        <div className="w-[40px] h-[40px] ">
          <MdOutlineFavoriteBorder className=" w-[40px] p-2 h-[40px]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full " />
        </div>
        <div className="w-[42px] h-[42px]">
          <svg
            focusable="false"
            class="svg-icon"
            // width="34"
            // height="34"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="https://www.w3.org/2000/svg"
            className=" w-[42px] p-2 h-[42px]  cursor-pointer  hover:bg-[#e9e7e7] hover:rounded-full mr-2 "
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"
            ></path>
          </svg>
        </div>
      </div> */}
    </>
  );
};

export default Header;
