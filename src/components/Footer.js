import React, { Component } from "react";
import { NavLink } from "fluxible-router";

if (process.env.BROWSER) {
  require("../style/Footer.scss");
}

export default class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div className="Footer-disclaimer">
          数据来自 <a href="https://500px.com">500px</a>&nbsp;&nbsp;
          <strong>guitu500</strong> 演示应用使用 <a href="https://facebook.github.io/react/">React</a> 
          with <a href="http://www.fluxible.io">Fluxible</a>. 
        </div>
        <div>
          
         <NavLink className="Footer-link" routeName="bad">路由坏了</NavLink> 或者 &nbsp;&nbsp;
         <NavLink className="Footer-link" routeName="photo" navParams={ {id: 100000000000} }>未找到图片</NavLink>.
        </div>
      </div>
    );
  }

}
