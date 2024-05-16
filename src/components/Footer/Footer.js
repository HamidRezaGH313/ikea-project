import React from "react";
import "../../css/magiclick.ikea.min.css";
import "../../css/magiclick.plugins.min.css";
const Footer = () => {
  return (
    <>
      <footer class="footer font-vazir">
        <div class="footer-box">
          <div class="container-fluid">
            <div
              class="personaclick-recommend personaclick-recommend-rendered"
              data-recommender-block="dynamic"
              data-recommender-code="e8d55c51bee309379c758d347de31b93"
              data-recommender-callback="my_callback"
              data-recommender-item=""
            ></div>
            <div class="row">
              <div class="col-md-3 col-xs-12">
                <div class="footer-left">
                  {/* <div class="footer-left-item">
                    <p class="title">
                      IKEA <br />
                      Family
                    </p>
                    <p>
                      Use your IKEA Family membership on all your purchases to
                      earn IKEA Family Points and take advantage of a wide range
                      of promotions.
                    </p>
                    <a href="https://www.ikea.com.tr/en/familycard/about">
                      Family Card Application
                    </a>
                  </div> */}
                  {/* <div class="footer-left-item">
                    <p class="title">
                      IKEA <br />
                      Business
                    </p>
                    <p>
                      Your business furniture purchases are more affordable with
                      IKEA Business Card.
                    </p>
                    <a href="https://www.ikea.com.tr/en/ikeabusiness">
                      Apply Now
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-md-9 col-xs-12">
                <div class="footer-navigation">
                  <ul
                    // class="row footer-navigation__ul grid grid-cols-3"
                    className="grid grid-cols-3 w-[80%]"
                  >
                    <li class=" col-xs-12 footer-navigation__li">
                      <p class="title">دیگر</p>
                      <ul class="footer-navigation__sub__ul">
                        {/* <li class="footer-navigation__sub__li">
                          <a
                            href="https://www.ikea.com.tr/en/stores"
                            class="footer-navigation__sub__a"
                          >
                            IKEA Stores
                          </a>
                        </li> */}
                        {/* <li class="footer-navigation__sub__li">
                          <a
                            class="storeRedirection footer-navigation__sub__a"
                            target="_blank"
                            href="https://www.ikea.com.tr/en/ikea-mobile"
                          >
                            IKEA Mobile
                          </a>
                        </li> */}
                        <li class="footer-navigation__sub__li">
                          <a
                            href="https://www.ikea.com.tr/en/shop-online"
                            class="footer-navigation__sub__a"
                          >
                            خرید آنلاین
                          </a>
                        </li>
                        {/* <li class="footer-navigation__sub__li">
                          <a
                            href="https://www.ikea.com.tr/en/planners"
                            class="footer-navigation__sub__a"
                          >
                            Planners
                          </a>
                        </li> */}
                        {/* <li class="footer-navigation__sub__li">
                          <a
                            href="https://www.ikea.com.tr/en/services"
                            class="footer-navigation__sub__a"
                          >
                            Services
                          </a>
                        </li> */}
                      </ul>
                    </li>
                    <li class=" col-xs-12 footer-navigation__li">
                      <p class="title">درباره ما</p>
                      <ul class="footer-navigation__sub__ul">
                        {/* <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/about-us/ikea-concept"
                            class="footer-navigation__sub__a"
                          >
                            IKEA Concept
                          </a>
                        </li> */}

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/shopping-at-ikea"
                            class="footer-navigation__sub__a"
                          >
                            خرید از ايكيا
                          </a>
                        </li>

                        {/* <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/social-responsibility-projects"
                            class="footer-navigation__sub__a"
                          >
                            Social Responsibility Projects
                          </a>
                        </li> */}

                        {/* <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/safety-at-home"
                            class="footer-navigation__sub__a"
                          >
                            Safety at Home
                          </a>
                        </li> */}

                        {/* <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/about-us/career"
                            class="footer-navigation__sub__a"
                          >
                            Career
                          </a>
                        </li> */}
                      </ul>
                    </li>

                    <li class=" col-xs-12 footer-navigation__li">
                      <p class="title">دسته بندی های پرطرفدار</p>
                      <ul class="footer-navigation__sub__ul">
                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/rooms/bedroom"
                            class="footer-navigation__sub__a"
                          >
                            اتاق خواب
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/rooms/living-room"
                            class="footer-navigation__sub__a"
                          >
                            اتاق نشیمن
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/rooms/dining"
                            class="footer-navigation__sub__a"
                          >
                            اتاق غذاخوری
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/category/working-spaces"
                            class="footer-navigation__sub__a"
                          >
                            فضاهای کاری
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/category/children-s-furniture"
                            class="footer-navigation__sub__a"
                          >
                            مبلمان کودک
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/category/home-decoration"
                            class="footer-navigation__sub__a"
                          >
                            دکوراسیون
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/category/cookware-and-tableware"
                            class="footer-navigation__sub__a"
                          >
                            ظروف آشپزی و سفره
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* 
                    <li class="col-md-3 col-xs-12 footer-navigation__li">
                      <p class="title">Customer Relations</p>
                      <ul class="footer-navigation__sub__ul">
                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/return-policy"
                            class="footer-navigation__sub__a"
                          >
                            Return Policy
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/shop-online/order-change-refund"
                            class="footer-navigation__sub__a"
                          >
                            Change/Refund Order
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/guarantee-conditions"
                            class="footer-navigation__sub__a"
                          >
                            Guarantee Conditions
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/stock-availability"
                            class="footer-navigation__sub__a"
                          >
                            Stock Availability
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/faq"
                            class="footer-navigation__sub__a"
                          >
                            FAQs
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/contact-us"
                            class="footer-navigation__sub__a"
                          >
                            Contact Us
                          </a>
                        </li>

                        <li class="footer-navigation__sub__li">
                          <a
                            rel="nofollow"
                            href="https://www.ikea.com.tr/en/customer-relations/survey"
                            class="footer-navigation__sub__a"
                          >
                            Customer Satisfaction Survey
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-social">
              <div class="footer-social-container">
                <div class="footer-social-item">
                  <a
                    href="https://www.facebook.com/IKEATurkiye"
                    target="_blank"
                    class="footer-social-link"
                    alt="Social Media Icon"
                  >
                    <span class="icon-facebook-new"></span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <a
                    href="https://twitter.com/IKEATurkiye"
                    target="_blank"
                    class="footer-social-link"
                  >
                    <span class="icon-twitter-new"></span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <a
                    href="https://www.instagram.com/ikeaturkiye/"
                    target="_blank"
                    class="footer-social-link"
                  >
                    <span class="icon-instagram-new"></span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <a
                    href="https://www.pinterest.com/ikeaturkiye/"
                    target="_blank"
                    class="footer-social-link"
                  >
                    <span class="icon-pinterest-new"></span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <a
                    href="https://www.youtube.com/user/IKEATurkiye"
                    target="_blank"
                    class="footer-social-link"
                  >
                    <span class="icon-youtube-new"></span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <a
                    href="https://www.linkedin.com/company/ikea"
                    target="_blank"
                    class="footer-social-link linkedin-icon"
                  >
                    <span class="icon-linkedin-new">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                  </a>
                </div>
                <div class="footer-social-item">
                  <div class="footer-social-link">
                    <img
                      src="./Safety at Home _ IKEA_files/secure-pay.png"
                      alt="IKEA Secure Pay"
                      width="124"
                      height="34"
                    />
                  </div>
                </div>
                <div class="footer-social-item">
                  <div class="footer-social-link">
                    <img
                      src="./Safety at Home _ IKEA_files/pci-dss.png"
                      alt="PCI DSS"
                      width="70"
                      height="34"
                    />
                  </div>
                </div>
                <div class="footer-social-item footer-social-qr">
                  <div id="ETBIS">
                    <div id="1607557371465147">
                      <a
                        href="https://etbis.eticaret.gov.tr/sitedogrulama/1607557371465147"
                        target="_blank"
                        class="footer-social-link"
                      >
                        <img
                          style={{ width: 28, height: 34 }}
                          src="./Safety at Home _ IKEA_files/footer-qr.png"
                          alt="ETBIS"
                          width="28"
                          height="34"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-desc">
              <div class="footer-desc-container footer-link">
                <div class="footer-desc-navigation">
                  <ul class="footer-desc-navigation-list">
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/energy-policy"
                      >
                        Energy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/information-security-framework-policy"
                      >
                        Information Security Policy
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/quality-policy"
                      >
                        Quality Policy
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/10311"
                        target="_blank"
                      >
                        Information Society Services
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/important-notice"
                      >
                        Important Notice
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/privacy-agreement"
                      >
                        Privacy Agreement
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/personal-data-protection"
                      >
                        Personal Data Protection
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://www.ikea.com.tr/en/cookie-policy"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="footer-desc-container">
                <div class="left-content">
                  <p class="footer-text">© Inter IKEA Systems B.V 1999-2024</p>

                  <p class="footer-text">
                    Site Creation &amp; Technology{" "}
                    <span>
                      by{" "}
                      <strong>
                        <a href="https://www.magiclick.com/">
                          MagiClick Digital Solutions
                        </a>
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
