(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(t,e,n){"use strict";var r=n(2),o=n(4),c=n(32),d=n(24),l=n(31),f=n(194),v=n(13),h=n(3),m=n(193),D=n(132),w=n(268),C=n(269),k=n(80),y=n(270),_=[],P=o(_.sort),A=o(_.push),E=h((function(){_.sort(void 0)})),S=h((function(){_.sort(null)})),j=D("sort"),T=!h((function(){if(k)return k<70;if(!(w&&w>3)){if(C)return!0;if(y)return y<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)_.push({k:t+n,v:e})}for(_.sort((function(a,b){return b.v-a.v})),n=0;n<_.length;n++)t=_[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:E||!S||!j||!T},{sort:function(t){void 0!==t&&c(t);var e=d(this);if(T)return void 0===t?P(e):P(e,t);var n,r,o=[],h=l(e);for(r=0;r<h;r++)r in e&&A(o,e[r]);for(m(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:v(e)>v(n)?1:-1}}(t)),n=l(o),r=0;r<n;)e[r]=o[r++];for(;r<h;)f(e,r++);return e}})},268:function(t,e,n){var r=n(60).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},269:function(t,e,n){var r=n(60);t.exports=/MSIE|Trident/.test(r)},270:function(t,e,n){var r=n(60).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},271:function(t,e,n){"use strict";var r=n(2),o=n(272),c=n(24),d=n(31),l=n(45),f=n(109);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=d(e),r=f(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:l(t)),r}})},272:function(t,e,n){"use strict";var r=n(62),o=n(31),c=n(133),d=n(46),l=function(t,e,source,n,f,v,h,m){for(var element,D,w=f,C=0,k=!!h&&d(h,m);C<n;)C in source&&(element=k?k(source[C],C,e):source[C],v>0&&r(element)?(D=o(element),w=l(t,e,element,D,w,v-1)-1):(c(w+1),t[w]=element),w++),C++;return w};t.exports=l},273:function(t,e,n){n(131)("flat")},279:function(t,e,n){"use strict";n.r(e);n(110),n(33),n(63),n(267),n(271),n(273),n(47),n(17),n(34),n(61),n(37);var r={name:"CurriculumPage",head:function(){return{title:"Experience"}},data:function(){return{jobs:[{title:"Backend Developer",company:"TravelgateX",startDate:"2020-03",endDate:"2020-07",description:"Used .NET and C# on a REST API and Python to test the APIs migration from REST to GraphQL",tags:["C#",".NET","Python"]},{title:"Full Stack Developer",company:"Possible Incorporated",startDate:"2020-07",endDate:"2021-12",description:"Used Python to build backends with Django and ETL pipelines with celery, spark and airflow for data visualization web apps with Vue.js at the front. Learned IaC with terraform to manage AWS infrastructure, set up CI/CD pipelines with Teamcity and Bitbucket and monitorization with Graylog, Grafana/Prometheus/Loki, and managed our internal Docker Swarm infrastructure",tags:["Python","Django","Docker","Docker Swarm","CI/CD","DevOps","AWS"]},{title:"Software Developer",company:"Lana Fintech Internacional",startDate:"2022-01",endDate:"2022-05",description:"Used Django REST framework to develop an API for the onboarding process of a digital wallet, including KYC, AML and identity verification. Managed applications deployed in GKE with ArgoCD and Helm. Read and applied minor patches in Go codebases as required in our microservice architecture",tags:["Python","Django","Kubernetes","GCP","Go"]},{title:"Software Engineer",company:"Ontruck",startDate:"2022-05",endDate:"Now",description:"Develop features for a marketplace that matches businesses wanting to send pallets and truck drivers, optimising truck loads and focusing on spot orders.",tags:["Python","Django","Kubernetes","GCP"]}]}},computed:{experience:function(){return this.jobs.sort((function(a,b){return a.startDate<b.startDate?1:-1}))},weightedTags:function(){var t=this.jobs.map((function(t){return t.tags})).flat(),e={};return t.forEach((function(t){e[t]||(e[t]=0),e[t]+=1})),Object.keys(e).sort((function(a,b){return e[b]-e[a]})).slice(0,5)}}},o=n(44),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"section"},[e("h1",{staticClass:"title"},[t._v("My work experience")]),t._v(" "),e("div",{staticClass:"content"},t._l(t.weightedTags,(function(n){return e("b-tag",{key:n,staticClass:"mr-1",attrs:{rounded:""}},[t._v(t._s(n))])})),1)]),t._v(" "),t._l(t.experience,(function(n){return e("section",{staticClass:"section"},[e("h1",{staticClass:"title"},[t._v(t._s("".concat(n.title," at ").concat(n.company)))]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v(t._s("".concat(n.startDate," - ").concat(n.endDate)))]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v(t._s(n.description))]),t._v(" "),t._l(n.tags,(function(n){return e("b-tag",{key:n,staticClass:"mr-1",attrs:{rounded:""}},[t._v(t._s(n))])}))],2)])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);