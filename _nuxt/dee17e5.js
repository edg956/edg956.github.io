(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(t,e,r){"use strict";var n=r(6),o=r(3),c=r(55),l=r(21),d=r(26),f=r(12),h=r(4),v=r(172),m=r(129),w=r(228),D=r(229),C=r(66),y=r(230),_=[],k=o(_.sort),A=o(_.push),E=h((function(){_.sort(void 0)})),P=h((function(){_.sort(null)})),T=m("sort"),S=!h((function(){if(C)return C<70;if(!(w&&w>3)){if(D)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)_.push({k:t+r,v:e})}for(_.sort((function(a,b){return b.v-a.v})),r=0;r<_.length;r++)t=_[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:E||!P||!T||!S},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(S)return void 0===t?k(e):k(e,t);var r,n,o=[],h=d(e);for(n=0;n<h;n++)n in e&&A(o,e[n]);for(v(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t)),r=o.length,n=0;n<r;)e[n]=o[n++];for(;n<h;)delete e[n++];return e}})},228:function(t,e,r){var n=r(53).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},229:function(t,e,r){var n=r(53);t.exports=/MSIE|Trident/.test(n)},230:function(t,e,r){var n=r(53).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},231:function(t,e,r){"use strict";var n=r(6),o=r(232),c=r(21),l=r(26),d=r(42),f=r(100);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),n=f(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:d(t)),n}})},232:function(t,e,r){"use strict";var n=r(0),o=r(67),c=r(26),l=r(43),d=n.TypeError,f=function(t,e,source,r,n,h,v,m){for(var element,w,D=n,C=0,y=!!v&&l(v,m);C<r;){if(C in source){if(element=y?y(source[C],C,e):source[C],h>0&&o(element))w=c(element),D=f(t,e,element,w,D,h-1)-1;else{if(D>=9007199254740991)throw d("Exceed the acceptable array length");t[D]=element}D++}C++}return D};t.exports=f},233:function(t,e,r){r(128)("flat")},236:function(t,e,r){"use strict";r.r(e);r(227),r(231),r(233),r(45),r(16),r(33),r(54),r(44);var n={name:"CurriculumPage",data:function(){return{jobs:[{title:"Backend Developer",company:"TravelgateX",startDate:"2020-03",endDate:"2020-07",description:"Used .NET and C# on a REST API and Python to test the APIs migration from REST to GraphQL",tags:["C#",".NET","Python"]},{title:"Full Stack Developer",company:"Possible Incorporated",startDate:"2020-07",endDate:"2021-12",description:"Used Python to build backends with Django and ETL pipelines with celery, spark and airflow for data visualization web apps with Vue.js at the front. Learned IaC with terraform to manage AWS infrastructure, set up CI/CD pipelines with Teamcity and Bitbucket and monitorization with Graylog, Grafana/Prometheus/Loki, and managed our internal Docker Swarm infrastructure",tags:["Python","Django","Docker","Docker Swarm","CI/CD","DevOps","AWS"]},{title:"Software Developer",company:"Lana Fintech Internacional",startDate:"2022-01",endDate:"Now",description:"Used Django REST framework to develop an API for the onboarding process of a digital wallet, including KYC, AML and identity verification. Managed applications deployed in GKE with ArgoCD and Helm. Read and applied minor patches in Go codebases as required in our microservice architecture",tags:["Python","Django","Kubernetes","GCP","Go"]}]}},computed:{experience:function(){return this.jobs.sort((function(a,b){return a.startDate<b.startDate?1:-1}))},weightedTags:function(){var t=this.jobs.map((function(t){return t.tags})).flat(),e={};return t.forEach((function(t){e[t]||(e[t]=0),e[t]+=1})),Object.keys(e).sort((function(a,b){return e[b]-e[a]})).slice(0,5)}}},o=r(41),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",{staticClass:"section"},[r("h1",{staticClass:"title"},[t._v("My work experience")]),t._v(" "),r("div",{staticClass:"content"},t._l(t.weightedTags,(function(e){return r("b-tag",{key:e,staticClass:"mr-1",attrs:{rounded:""}},[t._v(t._s(e))])})),1)]),t._v(" "),t._l(t.experience,(function(e){return r("section",{staticClass:"section"},[r("h1",{staticClass:"title"},[t._v(t._s(e.title+" at "+e.company))]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v(t._s(e.startDate+" - "+e.endDate))]),t._v(" "),r("div",{staticClass:"content"},[r("p",[t._v(t._s(e.description))]),t._v(" "),t._l(e.tags,(function(e){return r("b-tag",{key:e,staticClass:"mr-1",attrs:{rounded:""}},[t._v(t._s(e))])}))],2)])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);