(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,r){"use strict";var n=r(78),o=r(1);e.a=function(t,e){var r=t.app.router,c=t.$config;n.a.init(c.posthogPublicKey,{api_host:c.posthogHost,capture_pageview:!1,loaded:function(){return n.a.identify("unique_id")}}),e("posthog",n.a),r.afterEach((function(t){o.a.nextTick((function(){n.a.capture("$pageview",{$current_url:t.fullPath})}))}))}},188:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(81).default)("63d778a4",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";var n={name:"DefaultLayout"},o=(r(265),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"pl-6 pr-6",attrs:{type:"is-dark"},scopedSlots:t._u([{key:"start",fn:function(){return[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("b-image",{attrs:{src:"https://github.com/edg956.png",alt:"EU",rounded:""}})],1)]},proxy:!0},{key:"end",fn:function(){return[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v("Home")]),t._v(" "),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/curriculum"}}},[t._v("Experience")])]},proxy:!0}])}),t._v(" "),e("Nuxt"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("a",{attrs:{href:"https://www.flaticon.com/free-icons/letter-d",title:"letter d icons"}},[t._v("Letter d icons created by Kian Bonanno - Flaticon")]),t._v(" "),e("p",[t._v("Site created with "),e("a",{attrs:{href:"https://buefy.org/"}},[t._v("Buefy")]),t._v(" and "),e("a",{attrs:{href:"https://nuxtjs.org/"}},[t._v("Nuxt.js")])])])])}],!1,null,null,null);e.a=component.exports},196:function(t,e,r){r(197),t.exports=r(198)},265:function(t,e,r){"use strict";r(188)},266:function(t,e,r){var n=r(80)((function(i){return i[1]}));n.push([t.i,".profile-pic{border-radius:50%;height:5vh}",""]),n.locals={},t.exports=n}},[[196,8,1,9]]]);