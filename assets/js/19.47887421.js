(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(t,n,r){"use strict";var e=r(2),i=r(14),c=r(179),o="".endsWith;e(e.P+e.F*r(180)("endsWith"),"String",{endsWith:function(t){var n=c(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),s=void 0===r?e:Math.min(i(r),e),h=String(t);return o?o.call(n,h,s):n.slice(s-h.length,s)===h}})},179:function(t,n,r){var e=r(74),i=r(15);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},180:function(t,n,r){var e=r(1)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},349:function(t,n,r){"use strict";r.r(n);r(178);var e={name:"redirect",props:["to"],created:function(){var t=this.to;t.endsWith(".html")||(t+=".html"),this.$router.push(t)}},i=r(0),c=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"6e69b248",null);n.default=c.exports}}]);