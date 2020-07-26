import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';
import $ from 'jquery';

const FQS = [
  "วุ้นเส้นหมูกรอบคั่วพริกเกลือ",
  "ขนมผิง🌟",
  "หมี่กรอบผัดซีอิ๊ว",
  "ไก่ทอดเกาหลีซอสส้ม",
  "ขนมโตเกียวไส้กรอกพันเบคอน",
  "ไข่ขยี้กุ้งพริกน้ำปลาโลว์โซเดียม 🥚🦐",
  "เนื้อเค็มต้มกะทิ",
  "แกงจืดตำลึงเต้าหู้หมูสับ 🐷",
  "คีช อาหารเช้า",
  "เมอแรงค์อัลมอน",
  "มะม่วงหาวมะนาวโห่แช่อิ่ม",
  "ข้าวราดไข่ข้นกุ้ง 🥚🦐",
  "ไข่ดาวกรอบนอกฉ่ำใน",
  "ต้มแซ่บเนื้อตุ๋น",
  "ขนมปังปิ้งเนยทาแยมกระเจี๊ยบพุทราจีน",
  "ปีกกลางไก่ทอด",
  "ขนมปังปิ้งเนยนมVsขนมปังปิ้งช๊อคโก้กล้วยหอม",
  "ขนมต้ม",
  "ขนมต้มขาว",
  "ขนมต้มอบควันเทียน",
  "บะหมี่เย็น โซเมนแตงกวา",
]

const to_4_dec = (x) => {
  return Math.round(x*10000)/10000;
}

const searchMenus = () => {
  var keyword = $("#search-input").val();

  fetch("assets/test.json").then(res => res.json()).then((json) => {
    var result = $("#result");
    console.log(json)
    var _min_prices = [];
    var _avg_prices = [];
    var _max_prices = [];
    for(var d in json["date"]){
      _min_prices[d] = 1e10;
      _avg_prices[d] = 0;
      _max_prices[d] = 0;
    }
    var avg_deno = 0;
    for(var m in json["menu_prices"]){
      if(json["menu_prices"][m] != 0){
        for(var d in json["date"]){
          if(_min_prices[d] > json["menu_prices"][m][d]){
            _min_prices[d] = json["menu_prices"][m][d];
            console.log(m)
          }
          if(_max_prices[d] < json["menu_prices"][m][d]){
            _max_prices[d] = json["menu_prices"][m][d];

            // console.log(json["menu_prices"][m])
            // console.log(json["menu_prices"][m][d])
          }
          _avg_prices[d] += json["menu_prices"][m][d];
        }
        avg_deno++;
      }
    }
    // console.log(json["show_str"])

    if(avg_deno > 0){
      for(var d in json["date"]){
        _avg_prices[d] = _avg_prices[d]/avg_deno;
      }
    }

    let table_comp = $("<table class='table'>")
    table_comp.append("<thead><tr><th><abbr title='ณ'>ณ</abbr></th><th><abbr title='ราคาต่ำสุด'>ราคาต่ำสุด</abbr></th><th><abbr title='ราคาเฉลี่ย'>ราคาเฉลี่ย</abbr></th><th><abbr title='ราคาสูงสุด'>ราคาสูงสุด</abbr></th></tr></thead>")
    let tbody = $("<tbody>")
    tbody.append(`<tr><td>วันนี้</td><td>${to_4_dec(_min_prices[0])}</td><td>${to_4_dec(_avg_prices[0])}</td><td>${to_4_dec(_max_prices[0])}</td></tr>`)
    tbody.append(`<tr><td>สัปดาห์หน้า</td><td>${to_4_dec(_min_prices[7])} </td><td>${to_4_dec(_avg_prices[7])}</td><td>${to_4_dec(_max_prices[7])}</td></tr>`)
    tbody.append(`<tr><td>เดือนหน้า</td><td>${to_4_dec(_min_prices[30])}</td><td>${to_4_dec(_avg_prices[30])}</td><td>${to_4_dec(_max_prices[30])}</td></tr>`)
    table_comp.append(tbody)

    result.append(table_comp)
    result.append("<br />")

    result.append(`<div><strong>เมนูทั้งหมด</strong></div>`)
    let show_menu = $("<div align='left' style='max-height: 50vh; overflow: scroll; margin-top: 50px'>")
    for(var m in json["show_str"]){
      let sh = $(`<div>`);
      sh.append($(`<div>${m}</div>`))
      let bd = $(`<div>`)
      for(var ig in json["show_str"][m]){
        bd.append(`<div>---${json["show_str"][m][ig]}</div>`)
      }
      sh.append(bd)
      sh.append("<br />")
      show_menu.append(sh)
    }
    result.append(show_menu)
  })
}

function FQSCard(comps) {
  return (
    <div>
      {comps.fqs}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="/assets/icon.png" width="40" height="100" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" style={{"color": "#0af"}}>
              Engredient
            </a>
              
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" style={{"background": "#0af"}}>
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="main" className="columns">
        <div className="column">
          <div style={{"margin": "50px"}}>
            <strong>Search</strong>
          </div>
          <div className="column">
            <input className="input" id="search-input" type="text" placeholder="Menu Name" style={{"width": "50%", "margin-top": "0px"}} />
          </div>
          <div className="column">
            <button className="button is-primary" onClick={searchMenus} style={{"width": "50%", "background": "#0af"}}>Search</button>
          </div>
          <div className="column" style={{"margin": "50px"}}>
            <strong>Frequently Search</strong>
            <div className="column" style={{"overflow-y": "scroll", "max-height": "40vh", "margin-top": "20px"}}>
              { FQS.map((d) => (
                <FQSCard fqs={d} />
              )) }
            </div>
          </div>
        </div>
        <div className="column">
          <div>
            <strong>Results</strong>
            <div id="result">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
