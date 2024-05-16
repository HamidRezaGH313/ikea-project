import React from "react";
import image1 from "../../Images/cat-dis-mekan-urunleri.webp";
import image2 from "../../Images/cat-mobilyalar.webp";
import image3 from "../../Images/cat-depolama-ve-organizasyon.webp";
import image4 from "../../Images/cat-bebek-ve-cocuk.jpg";
import image5 from "../../Images/cat-yataklar-ve-karyolalar.jpg";
import image6 from "../../Images/cat-yemek-odasi-mobilyalari-01.jpg";
import image7 from "../../Images/cat-ev-duzenleme.jpg";
import image8 from "../../Images/cat-ev-tekstil.jpg";
import image9 from "../../Images/cat-zuccaciye.jpg";
import image10 from "../../Images/images (2).jpg";
import image11 from "../../Images/cat-ev-ofis.jpg";
import image12 from "../../Images/decoration-de001.jpg";
import image13 from "../../Images/cat-aydinlatma.jpg";
import image14 from "../../Images/rugs-10653.jpg";
import image15 from "../../Images/bathroom-wall-cabinets-20808.jpg";
import image16 from "../../Images/cat-mutfak-mobilyalari.jpg";
import image17 from "../../Images/cat-camasir-ve-temizlik-urunleri.jpg";
import image18 from "../../Images/cat-antre-hol-koridor.jpg";
import image19 from "../../Images/cat-evcil-hayvan-urunleri-02.jpg";
import { Outlet, useLocation } from "react-router-dom";
const Products = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <div class="subpage-content subpage-content-pt font-vazir">
        <div class="container-fluid">
          { location.pathname === "/products/everyday-essentials" ||
          location.pathname === "/products/bestsellers"|| location.pathname==='/products/allaccessories' ? (
            <>
              <Outlet />
            </>
          ) : (
            <>
              <h1 class="product-title">محصولات</h1>
              <div class="product-list">
                <div class="row">
                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/outdoor-products"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_imgCategory"
                          class="img-fluid"
                          src={image1}
                          alt=""
                          // src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-dis-mekan-urunleri.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>محصولات فضای باز</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/outdoor-products"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-furniture"
                          >
                            مبلمان فضای باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/balcony-furniture"
                          >
                            مبلمان بالکن
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-flooring"
                          >
                            کفپوش فضای باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/gardening-accessories"
                          >
                            لوازم باغبانی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/grills-and-barbeques"
                          >
                            منقل و باربیکیو
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/grill-and-barbeque-accessories"
                          >
                            لوازم جانبی گریل و باربیکیو
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/parasols-and-gazebos"
                          >
                            چتر و گازبوس
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-privacy-screens"
                          >
                            صفحه نمایش در فضای باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-storage"
                          >
                            ذخیره سازی در فضای باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-lighting"
                          >
                            روشنایی بیرون ساختمان
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-textile"
                          >
                            منسوجات فضای باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/summer-rugs"
                          >
                            فرش تابستانی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go"
                          >
                            پیک نیک
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl00_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/beach-products"
                          >
                            محصولات ساحلی
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/furniture"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image2}
                          // src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-mobilyalar.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>مبلمان</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/furniture"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/sofas"
                          >
                            مبل
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/sofa-beds"
                          >
                            مبل تختخواب شو
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/armchairs"
                          >
                            صندلی های راحتی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/wardrobes"
                          >
                            کمد لباس
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cabinets"
                          >
                            کابینت
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/day-beds"
                          >
                            تخت های روز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/mattresses"
                          >
                            تشک
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/beds"
                          >
                            تخت
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/nightstands"
                          >
                            پاتختي
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/chest-of-drawers"
                          >
                            صندوق دار
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bedroom-furniture-sets"
                          >
                            ست مبلمان اتاق خواب
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tables"
                          >
                            ميزها{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/chairs"
                          >
                            صندلی ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-furniture"
                          >
                            مبلمان کودک
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl14_anchorChild"
                            href="https://www.ikea.com.tr/en/category/nursery-furniture"
                          >
                            مبلمان کودکستان
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl15_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bookcases"
                          >
                            قفسه های کتاب
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl16_anchorChild"
                            href="https://www.ikea.com.tr/en/category/open-shelving-units"
                          >
                            واحدهای قفسه بندی باز
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl18_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tv-cabinet-systems"
                          >
                            ميز هاي تلويزيون
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl19_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-furniture"
                          >
                            میز و صندلی آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl20_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-furniture"
                          >
                            لوازم حمام
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl22_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-furniture"
                          >
                            مبلمان فضای باز{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl26_anchorChild"
                            href="https://www.ikea.com.tr/en/category/gamers-equipment"
                          >
                            تجهیزات گیمرها
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl17_anchorChild"
                            href="https://www.ikea.com.tr/en/category/hallway-wardrobes"
                          >
                            کمد لباس راهرو
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl21_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bistro-furnitures"
                          >
                            Bistro Furnitures
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl23_anchorChild"
                            href="https://www.ikea.com.tr/en/category/coffee-and-side-tables"
                          >
                            Coffee and Side Tables
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl24_anchorChild"
                            href="https://www.ikea.com.tr/en/category/hallway-furniture"
                          >
                            Hallway Furniture
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl25_anchorChild"
                            href="https://www.ikea.com.tr/en/category/room-divider-solutions"
                          >
                            Room Divider Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl01_rptChildren_ctl27_anchorChild"
                            href="https://www.ikea.com.tr/en/category/fabric-footstool-pouffes"
                          >
                            Fabric Footstool &amp; pouffes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/storage-and-organisation"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image3}
                          // src="https://image-ikea.mncdn.com/kategoriler/menu-suggestion/cat-depolama-ve-organizasyon.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>نگهداری و سازماندهی</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/storage-and-organisation"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/wardrobes"
                          >
                            کمد لباس
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/nightstands"
                          >
                            پاتختي
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bookcases"
                          >
                            قفسه های کتاب
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/console-tables"
                          >
                            میزهای کنسول
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/wall-cabinets"
                          >
                            کمد دیواری
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/sideboards"
                          >
                            طبقه های بوفه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/buffets"
                          >
                            بوفه ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tv-cabinet-systems"
                          >
                            ميز تلويزيون
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-cabinets"
                          >
                            کابینت حمام
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-organisers"
                          >
                            نظم دهنده آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-wardrobes"
                          >
                            کمد لباس بچه گانه{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl15_anchorChild"
                            href="https://www.ikea.com.tr/en/category/toy-storage"
                          >
                            باكس اسباب بازی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl16_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-bookcases"
                          >
                            قفسه کتاب کودکان{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl18_anchorChild"
                            href="https://www.ikea.com.tr/en/category/baskets"
                          >
                            سبدها{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl19_anchorChild"
                            href="https://www.ikea.com.tr/en/category/boxes"
                          >
                            جعبه ها{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl21_anchorChild"
                            href="https://www.ikea.com.tr/en/category/drawer-units"
                          >
                            كشو ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl22_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bags"
                          >
                            کیسه ها{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl24_anchorChild"
                            href="https://www.ikea.com.tr/en/category/clothes-rails-and-coat-stands"
                          >
                            رگال لباس
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/chest-of-drawers"
                          >
                            Chest of Drawers
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/storage-systems"
                          >
                            Storage Systems
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/open-storage-systems"
                          >
                            Open Storage Systems
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl14_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-chests-of-drawers"
                          >
                            Children's Chests Of Drawers
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl17_anchorChild"
                            href="https://www.ikea.com.tr/en/category/pantry-cabinets"
                          >
                            Pantry Cabinets
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl23_anchorChild"
                            href="https://www.ikea.com.tr/en/category/hooks"
                          >
                            Hooks
                          </a>
                          <li>
                            <a
                              id="ctl00_ContentPlaceHolder1_rptCategories_ctl02_rptChildren_ctl20_anchorChild"
                              href="https://www.ikea.com.tr/en/category/filing-cabinets"
                            >
                              Filing Cabinets
                            </a>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/baby-and-children"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_imgCategory"
                          class="img-fluid"
                          src={image4}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-bebek-ve-cocuk.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>نوزاد و بچه</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/baby-and-children"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/baby"
                          >
                            نوزاد
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children"
                          >
                            كودك
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/teen"
                          >
                            نوجوان
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/toy-storage"
                          >
                            باكس اسباب بازی
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl03_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-storage-solutions"
                          >
                            Children's Storage Solutions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/mattresses-and-beds"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_imgCategory"
                          class="img-fluid"
                          src={image5}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-yataklar-ve-karyolalar.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>تشک و تخت</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/mattresses-and-beds"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/beds"
                          >
                            تخت ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/mattresses"
                          >
                            تشك ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/beds-with-storage"
                          >
                            تخت باكس دار
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bunk-beds"
                          >
                            تخت هاي دوطبقه{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl04_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/day-beds"
                          >
                            Day Beds
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/dining-room-furnitures"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image6}
                          // src="./All Products _ IKEA_files/cat-yemek-odasi-mobilyalari-01.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>مبلمان اتاق ناهار خوری</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/dining-room-furnitures"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dining-tables"
                          >
                            میز نهارخوری
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-tables"
                          >
                            میزهای آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dining-room-chairs"
                          >
                            صندلی ناهار خوری
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-chairs"
                          >
                            صندلی های آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/table-chair-sets"
                          >
                            ست های میز صندلی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-table-sets"
                          >
                            ست میز آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bistro-furnitures"
                          >
                            مبلمان رستوران
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/console-tables"
                          >
                            میزهای کنسول
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/sideboards"
                          >
                            تخته های بوفه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/service-trolleys"
                          >
                            چرخ دستی های پذيرايي
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl05_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/stools"
                          >
                            Stools
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/home-organisation"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image7}
                          // src="./All Products _ IKEA_files/cat-ev-duzenleme.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>Home Organisation</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/home-organisation"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/boxes"
                          >
                            جعبه ها{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/baskets"
                          >
                            سبد ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/interior-organisers"
                          >
                            نظم دهنده های داخلی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/clothes-rails-and-coat-stands"
                          >
                            رگال لباس
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/open-storage-systems"
                          >
                            Open Storage Systems
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/waste-bins"
                          >
                            سطل زباله
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bags"
                          >
                            كيسه ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/assembly-and-maintenance-products"
                          >
                            محصولات مونتاژ و تعمیر و نگهداری
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/boards"
                          >
                            تابلو ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/handles"
                          >
                            دستگيره ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl06_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/wall-shelves"
                          >
                            قفسه دیواری
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/home-textile"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image8}
                          // src="./All Products _ IKEA_files/cat-ev-tekstil.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>منسوجات خانگی</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/home-textile"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bedding"
                          >
                            ملافه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-textile"
                          >
                            منسوجات حمام
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-textiles"
                          >
                            منسوجات آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/pillow-and-cushion"
                          >
                            بالش و کوسن
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/curtains"
                          >
                            پرده ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/rugs"
                          >
                            فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tablecloth"
                          >
                            سفره رومیزی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/baby-textiles"
                          >
                            منسوجات کودک{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-textile"
                          >
                            منسوجات كودك
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/teen-room-textile"
                          >
                            منسوجات نوجوان
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-textile"
                          >
                            منسوجات فضای باز{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/fabrics"
                          >
                            پارچه ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl07_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/slippers"
                          >
                            دمپایی
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/cookware-and-tableware"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image9}
                          // src="./All Products _ IKEA_files/cat-zuccaciye.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>ظروف آشپزی و سفره</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/cookware-and-tableware"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-organisers"
                          >
                            نظم دهنده آشپزخانه
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/serveware"
                          >
                            سرویس ظروف
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tableware"
                          >
                            ظروف سفره
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/preparation"
                          >
                            آماده سازی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cookware"
                          >
                            وسایل آشپزی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dishwashing-accessories"
                          >
                            لوازم جانبی ظرفشویی{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dinner-sets"
                          >
                            Dinner Sets
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/glasses-and-jugs"
                          >
                            Glasses and Jugs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-textiles"
                          >
                            Kitchen Textiles
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/food-storage"
                          >
                            Food Storage
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cutlery"
                          >
                            Cutlery
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go"
                          >
                            پيك نيك
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl08_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/spoons"
                          >
                            Spoons
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl09_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl09_imgCategory"
                          class="img-fluid"
                          src={image10}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-piknik-urunleri-1.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>پيك نيك</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl09_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl09_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/picnic-and-on-the-go"
                          >
                            پيك نيك
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/home-office"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_imgCategory"
                          class="img-fluid"
                          src={image11}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-ev-ofis.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>دفتر خانگي</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/home-office"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/desk-chairs"
                          >
                            Desk Chairs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/desks"
                          >
                            Desks
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/office-accessories"
                          >
                            Office Accessories
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/desk-lamps"
                          >
                            Desk Lamps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/drawer-units"
                          >
                            كشو ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bookcases"
                          >
                            قفسه های کتاب
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/desks-with-bookcase"
                          >
                            Desks with Bookcase
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laptop-desks"
                          >
                            Laptop Desks
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cables-chargers"
                          >
                            Cables &amp; chargers
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/charging-cables"
                          >
                            Charging Cables
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/gamers-equipment"
                          >
                            تجهیزات گیمرها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl10_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/filing-cabinets"
                          >
                            Filing Cabinets
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/home-decoration"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_imgCategory"
                          class="img-fluid"
                          src={image12}
                          alt=""
                          // src="./All Products _ IKEA_files/decoration-de001.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>دکوراسیون منزل</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/home-decoration"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/mirrors"
                          >
                            Mirrors
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/flower-pots-and-planters"
                          >
                            Flower Pots And Planters
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/frames"
                          >
                            Frames
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/candles"
                          >
                            Candles
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/artificial-plants"
                          >
                            Artificial Plants
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/candle-holders"
                          >
                            Candle Holders
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/clocks"
                          >
                            Clocks
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/wall-decoration"
                          >
                            Wall Decoration
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/vases"
                          >
                            Vases
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/home-fragrance"
                          >
                            Home Fragrance
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/decorative-lightings"
                          >
                            Decorative نورپردازیs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/gardening-accessories"
                          >
                            Gardening Accessories
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/decorative-accessories"
                          >
                            Decorative Accessories
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl11_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cushions"
                          >
                            Cushions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/lighting"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_imgCategory"
                          class="img-fluid"
                          src={image13}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-aydinlatma.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>نورپردازی</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/lighting"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/lamps"
                          >
                            Lamps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/chandelier"
                          >
                            Chandelier
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/lampshades"
                          >
                            Lampshades
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/floor-lamps"
                          >
                            Floor Lamps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/table-lamps"
                          >
                            Table Lamps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/decorative-lightings"
                          >
                            Decorative نورپردازیs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/light-bulbs"
                          >
                            Light Bulbs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/smart-lighting"
                          >
                            Smart نورپردازی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/outdoor-lights"
                          >
                            Outdoor Lights
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/children-s-room-lightings"
                          >
                            Children's Room نورپردازیs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/integrated-lighting"
                          >
                            Integrated نورپردازی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl12_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/lighting-accessories"
                          >
                            نورپردازی Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/rugs"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_imgCategory"
                          class="img-fluid"
                          src={image14}
                          alt=""
                          // src="./All Products _ IKEA_files/rugs-10653.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>فرش</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/rugs"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/large-rugs"
                          >
                            Large فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/small-rugs"
                          >
                            Small فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/lounge-rugs"
                          >
                            Lounge فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/scandinavian-rugs"
                          >
                            Scandinavian فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/shaggy-rugs"
                          >
                            Shaggy فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/tumbled-rugs"
                          >
                            Tumbled فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/runners"
                          >
                            Runners
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/post-rugs"
                          >
                            Post فرش
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl13_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/patterned-rugs"
                          >
                            Patterned فرش
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/bathroom-products"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_imgCategory"
                          class="img-fluid"
                          src={image15}
                          alt=""
                          // src="./All Products _ IKEA_files/bathroom-wall-cabinets-20808.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>محصولات حمام</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/bathroom-products"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-furniture"
                          >
                            Bathroom Furniture
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-shelf-units"
                          >
                            Bathroom Shelf Units
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-trolley"
                          >
                            Bathroom Trolley
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-organiser"
                          >
                            Bathroom Organiser
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bath-taps"
                          >
                            Bath Taps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-taps"
                          >
                            Bathroom Taps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/shower-accessories"
                          >
                            Shower Accessories
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-mirrors"
                          >
                            Bathroom Mirrors
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-lightings"
                          >
                            Bathroom نورپردازیs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-stools-and-benches"
                          >
                            Bathroom Stools and Benches
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-accessories"
                          >
                            Bathroom Accessories
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bathroom-textile"
                          >
                            منسوجات حمام
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laundry-and-cleaning"
                          >
                            لباسشویی و نظافت
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl14_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/spa-accessories"
                          >
                            Spa Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/kitchen-furniture"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_imgCategory"
                          class="img-fluid"
                          src={image16}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-mutfak-mobilyalari.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>میز و صندلی آشپزخانه</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/kitchen-furniture"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/knoxhult-kitchens"
                          >
                            KNOXHULT Kitchens
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/enhet-kitchens"
                          >
                            ENHET Kitchens
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/metod-kitchens"
                          >
                            METOD Kitchens
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/ready-made-kitchens"
                          >
                            Ready-made Kitchens
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-cabinets"
                          >
                            Kitchen Cabinets
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/pantry-cabinets"
                          >
                            Pantry Cabinets
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-tables"
                          >
                            Kitchen Tables
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-chairs"
                          >
                            Kitchen Chairs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-table-sets"
                          >
                            Kitchen Table Sets
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/service-trolleys"
                          >
                            Service Trolleys
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-wall-shelves"
                          >
                            Kitchen قفسه دیواریs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-worktops"
                          >
                            Kitchen Worktops
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-islands"
                          >
                            Kitchen Islands
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl13_anchorChild"
                            href="https://www.ikea.com.tr/en/category/kitchen-sinks"
                          >
                            Kitchen Sinks
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl14_anchorChild"
                            href="https://www.ikea.com.tr/en/category/sink-taps"
                          >
                            Sink Taps
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl15_anchorChild"
                            href="https://www.ikea.com.tr/en/category/bar-chairs"
                          >
                            Bar Chairs
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl16_anchorChild"
                            href="https://www.ikea.com.tr/en/category/handles"
                          >
                            دستگيره ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl15_rptChildren_ctl17_anchorChild"
                            href="https://www.ikea.com.tr/en/category/plate-shelf"
                          >
                            Plate Shelf
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/laundry-and-cleaning"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_imgCategory"
                          class="img-fluid"
                          src={image17}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-camasir-ve-temizlik-urunleri.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>لباسشویی و نظافت</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/laundry-and-cleaning"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laundry-baskets"
                          >
                            Laundry سبد ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laundry-bags"
                          >
                            Laundry كيسه ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/clothes-pins"
                          >
                            Clothes Pins
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laundry-dryers"
                          >
                            Laundry Dryers
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/ironing-boards"
                          >
                            Ironing تابلو ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cleaning-supplies-and-tools"
                          >
                            Cleaning Supplies and Tools
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/soap-dispensers-soap-dishes"
                          >
                            Soap dispensers &amp; soap dishes
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cleaning-gloves"
                          >
                            Cleaning Gloves
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dish-brushes"
                          >
                            Dish Brushes
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dish-cloths"
                          >
                            Dish Cloths
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dish-sponge"
                          >
                            Dish Sponge
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl16_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/feather-collectors"
                          >
                            Feather Collectors
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/hallway-and-storage-solutions"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_imgCategory"
                          class="img-fluid"
                          src={image18}
                          alt=""
                          // src="./All Products _ IKEA_files/cat-antre-hol-koridor.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>راهرو و انباری</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/hallway-and-storage-solutions"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/hallway-furniture"
                          >
                            Hallway Furniture
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/shoe-racks"
                          >
                            Shoe Racks
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/open-storage-systems"
                          >
                            Open Storage Systems
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl03_anchorChild"
                            href="https://www.ikea.com.tr/en/category/pantry-cabinets"
                          >
                            Pantry Cabinets
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl04_anchorChild"
                            href="https://www.ikea.com.tr/en/category/coat-stands"
                          >
                            Coat Stands
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl05_anchorChild"
                            href="https://www.ikea.com.tr/en/category/boxes"
                          >
                            Boxes
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl06_anchorChild"
                            href="https://www.ikea.com.tr/en/category/mirrors"
                          >
                            Mirrors
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl07_anchorChild"
                            href="https://www.ikea.com.tr/en/category/baskets"
                          >
                            سبد ها
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl08_anchorChild"
                            href="https://www.ikea.com.tr/en/category/interior-organisers"
                          >
                            نظم دهنده های داخلی
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl09_anchorChild"
                            href="https://www.ikea.com.tr/en/category/folding-screens"
                          >
                            Folding Screens
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl10_anchorChild"
                            href="https://www.ikea.com.tr/en/category/laundry-and-cleaning"
                          >
                            لباسشویی و نظافت
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl11_anchorChild"
                            href="https://www.ikea.com.tr/en/category/waste-bins"
                          >
                            سطل زباله
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl17_rptChildren_ctl12_anchorChild"
                            href="https://www.ikea.com.tr/en/category/assembly-and-maintenance-products"
                          >
                            محصولات مونتاژ و تعمیر و نگهداری
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12">
                    <div class="product-list-item">
                      <a
                        id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_anchorCategory"
                        href="https://www.ikea.com.tr/en/category/pet-products"
                      >
                        <img
                          id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_imgCategory"
                          class="img-fluid"
                          alt=""
                          src={image19}
                          // src="./All Products _ IKEA_files/cat-evcil-hayvan-urunleri-02.jpg"
                          style={{ borderWidth: "0px;" }}
                        />
                      </a>
                      <h4>محصولات حیوان خانگی</h4>
                      <ul>
                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_anchorShopAll"
                            href="https://www.ikea.com.tr/en/category/pet-products"
                          >
                            همه محصولات
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_rptChildren_ctl00_anchorChild"
                            href="https://www.ikea.com.tr/en/category/animal-care-products"
                          >
                            Animal Care Products
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_rptChildren_ctl01_anchorChild"
                            href="https://www.ikea.com.tr/en/category/dog-products"
                          >
                            Dog Products
                          </a>
                        </li>

                        <li>
                          <a
                            id="ctl00_ContentPlaceHolder1_rptCategories_ctl18_rptChildren_ctl02_anchorChild"
                            href="https://www.ikea.com.tr/en/category/cat-products"
                          >
                            Cat Products
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
