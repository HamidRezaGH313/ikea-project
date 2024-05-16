import React from "react";

const Login = () => {
  return (
    <>
      <div
        className="w-[15%] mr-52"
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
                  ورود{" "}
                </span>
              </a>
              <meta itemprop="position" content="1" />
            </li>

            {/* <li
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
            </li> */}
          </ul>
        </div>
      </div>
      <div
        class="container font-vazir"
        // className="rtl w-full"
        data-module="LoginPage"
      >
        <div class="page-content">
          <div class="login-page">
            <div class="row">
              <div class="col-md-6 login-border hidden-xs hidden-sm">
                <div class="col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2">
                  <h2 class="hidden-xs hidden-sm">حساب کاربری ندارید؟ </h2>
                  <p class="hidden-xs hidden-sm text-justify">
                    برای تکمیل خرید مبلمان و لوازم منزل با طراحی زیبا، کاربردی و
                    باکیفیت، یک حساب ايكيا ایجاد کنید تا به راحتی و به سرعت خرید
                    خود را تکمیل کنید. به عنوان یک عضو، می توانید سفارشات و کوپن
                    های خود را پیگیری کنید، لیست های مورد علاقه خود را ایجاد
                    کنید، آنها را ذخیره کنید، آنها را از طریق ایمیل ارسال کنید و
                    از کمپین های ايكيا مطلع شوید.
                  </p>
                  <a
                    href="https://www.ikea.com.tr/en/account/register"
                    class="btn btn-primary btn-block sign-btn"
                  >
                    ثبت نام{" "}
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2 login-form">
                  <div class="hej">
                    <h1>Hej!</h1>
                    <p>به معني سلام در زبان سوئدي.</p>
                  </div>
                  <h2>ورود</h2>

                  <div class="form-group">
                    <label for="txtEmail">نام كاربري / آدرس ايميل</label>
                    <input
                      type="text"
                      name="txtEmail"
                      class="form-control required email"
                      id="txtEmail"
                      tabindex="1"
                      autocomplete="email"
                      placeholder="نام كاربري / آدرس ايميل"
                    />
                  </div>
                  <div class="form-group xs-mb-0">
                    <label for="txtPassword">
                      رمز عبور{" "}
                      <a
                        href="https://www.ikea.com.tr/en/account/remind-password"
                        class="btn btn-link pull-right"
                      >
                        فراموش كردن رمز عبور
                      </a>
                    </label>
                    <input
                      type="password"
                      name="txtPassword"
                      class="form-control required"
                      id="txtPassword"
                      tabindex="2"
                      placeholder="رمز عبور"
                    />
                  </div>
                  <div class="form-group checkbox-inline">
                    <div class="checkbox">
                      <input
                        name="remember-me"
                        checked=""
                        id="cbRememberMe"
                        type="checkbox"
                        value="remember-me"
                        tabindex="-1"
                      />
                      <label for="cbRememberMe" tabindex="0">
                        مرابه خاطر بسپار
                      </label>
                    </div>
                  </div>
                  <div class="form-group" id="reCaptcha1">
                    <div
                      class="g-recaptcha"
                      data-theme="light"
                      data-sitekey="6LfZclIUAAAAAKhpFJn0vb0XdmU-Ol78k-L_fTMR"
                      id="ctl00_ContentPlaceHolder1_ctrlLogin_ctrlGoogleReCaptcha"
                    >
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-42f07vhb15p3"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="./Login _ IKEA_files/anchor.html"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          class="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none ",
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="login-form-btns">
                    <input
                      type="button"
                      name="test"
                      value="ورود"
                      tabindex="3"
                      id="btnLogin"
                      class="btn btn-primary btn-block submit-btn"
                    />
                    <a
                      href="https://www.ikea.com.tr/en/account/register"
                      class="btn btn-primary btn-block sign-btn hidden-md hidden-lg"
                    >
                      ثبت نام
                    </a>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div id="viewActivation" class="hide">
            <div data-module="Activation">
              <div class="page-header">
                <p class="page-title text-center">حساب شما فعال نشد </p>

                <div id="activationHeaderMessage" class="text-center">
                  <p class="mt10 text-justify" id="activationHeaderMessageText">
                    ما یک بار دیگر پیام ایمیل فعال سازی را ارسال کردیم تا به شما
                    امکان فعال سازی حساب خود را بدهیم. در صورتی که پیام ایمیل
                    فعال سازی را دریافت نکردید، لطفا کد امنیتی زیر را وارد کرده
                    و با کلیک بر روی دکمه "ارسال مجدد ایمیل فعال سازی" یک پیام
                    ایمیل فعال سازی دیگر درخواست کنید.
                  </p>
                </div>
              </div>
              <div class="col-sm-8 col-sm-offset-2">
                <div class="form-group" id="recaptcha-activation">
                  <div
                    class="g-recaptcha"
                    data-theme="light"
                    data-sitekey="6LfZclIUAAAAAKhpFJn0vb0XdmU-Ol78k-L_fTMR"
                    id="ctl00_ContentPlaceHolder1_ctrlLogin_ctrlActivationRequired_ctrlGoogleReCaptchaActivation"
                  >
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-jdttbem6s5iz"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="./Login _ IKEA_files/anchor(1).html"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response-1"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "none;",
                        }}
                      ></textarea>
                    </div>
                    <iframe
                      style={{ display: "none" }}
                      src="./Login _ IKEA_files/saved_resource(2).html"
                    ></iframe>
                  </div>
                </div>

                <div class="page-header-lead">
                  <p class="activation-response"></p>
                </div>
                <div class="form-group">
                  <a id="btnResendActivation" class="btn btn-black btn-block">
                    Re-send the activation e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
