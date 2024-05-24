import React,{useState} from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";


const Filter = () => {
  const [Color, setColor] = useState(false);
  const [Function, setFunction] = useState(false);
  const [Category, setCategory] = useState(false);
  const [Price, setPrice] = useState(false);
  const [Size, setSize] = useState(false);
  const [Frimness, setFrimness] = useState(false);
  const [Sort, setSort] = useState(false);
  return (
    <>
     <div className="mt-20 pl-5">
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
</div>
    
    </>
  )
}

export default Filter
