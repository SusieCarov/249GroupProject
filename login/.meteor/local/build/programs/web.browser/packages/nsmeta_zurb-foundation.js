//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/vendor/fastclick.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.                                    // 2
 *                                                                                                                     // 3
 * @version 0.6.12                                                                                                     // 4
 * @codingstandard ftlabs-jsv2                                                                                         // 5
 * @copyright The Financial Times Limited [All Rights Reserved]                                                        // 6
 * @license MIT License (see LICENSE.txt)                                                                              // 7
 */                                                                                                                    // 8
function FastClick(a){"use strict";var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
                                                                                                                       // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/vendor/jquery.cookie.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * jQuery Cookie Plugin v1.4.0                                                                                         // 2
 * https://github.com/carhartl/jquery-cookie                                                                           // 3
 *                                                                                                                     // 4
 * Copyright 2013 Klaus Hartl                                                                                          // 5
 * Released under the MIT license                                                                                      // 6
 */                                                                                                                    // 7
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=decodeURIComponent(a.replace(g," "))}catch(b){return}try{return h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}});
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/vendor/jquery.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * jQuery JavaScript Library v2.1.0                                                                                    // 2
 * http://jquery.com/                                                                                                  // 3
 *                                                                                                                     // 4
 * Includes Sizzle.js                                                                                                  // 5
 * http://sizzlejs.com/                                                                                                // 6
 *                                                                                                                     // 7
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors                                                 // 8
 * Released under the MIT license                                                                                      // 9
 * http://jquery.org/license                                                                                           // 10
 *                                                                                                                     // 11
 * Date: 2014-01-23T21:10Z                                                                                             // 12
 */                                                                                                                    // 13
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=ab.type(a);return"function"===c||ab.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(ab.isFunction(b))return ab.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return ab.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return ab.filter(b,a,c);b=ab.filter(b,a)}return ab.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return ab.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){$.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),ab.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=ab.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?ab.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return $.activeElement}catch(a){}}function m(a,b){return ab.nodeName(a,"table")&&ab.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)ab.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=ab.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&ab.nodeName(a,b)?ab.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d=ab(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:ab.css(d[0],"display");return d.detach(),e}function u(a){var b=$,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||ab("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||ab.contains(a.ownerDocument,a)||(g=ab.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=ab.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=ab.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=ab.css(a,"border"+wb[f]+"Width",!0,e))):(g+=ab.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=ab.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===ab.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Z.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):f[g]||(e=xb(d),(c&&"none"!==c||!e)&&rb.set(d,"olddisplay",e?c:ab.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=ab.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&xb(a),o=rb.get(a,"fxshow");c.queue||(h=ab._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,ab.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=ab.css(a,"display"),"none"===j&&(j=u(a.nodeName)),"inline"===j&&"none"===ab.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!o||void 0===o[d])continue;n=!0}l[d]=o&&o[d]||ab.style(a,d)}if(!ab.isEmptyObject(l)){o?"hidden"in o&&(n=o.hidden):o=rb.access(a,"fxshow",{}),f&&(o.hidden=!n),n?ab(a).show():k.done(function(){ab(a).hide()}),k.done(function(){var b;rb.remove(a,"fxshow");for(b in l)ab.style(a,b,l[b])});for(d in l)g=F(n?o[d]:0,d,k),d in o||(o[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=ab.camelCase(c),e=b[d],f=a[c],ab.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=ab.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=ab.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ab.extend({},b),opts:ab.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ab.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return ab.map(k,F,j),ab.isFunction(j.opts.start)&&j.opts.start.call(a,j),ab.fx.timer(ab.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(ab.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,ab.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=ab.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&ab.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(ab.isArray(b))ab.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ab.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return ab.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y="".trim,Z={},$=a.document,_="2.1.0",ab=function(a,b){return new ab.fn.init(a,b)},bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};ab.fn=ab.prototype={jquery:_,constructor:ab,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=ab.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return ab.each(this,a,b)},map:function(a){return this.pushStack(ab.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},ab.extend=ab.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||ab.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(ab.isPlainObject(d)||(e=ab.isArray(d)))?(e?(e=!1,f=c&&ab.isArray(c)?c:[]):f=c&&ab.isPlainObject(c)?c:{},g[b]=ab.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},ab.extend({expando:"jQuery"+(_+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===ab.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==ab.type(a)||a.nodeType||ab.isWindow(a))return!1;try{if(a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=ab.trim(a),a&&(1===a.indexOf("use strict")?(b=$.createElement("script"),b.text=a,$.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":Y.call(a)},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ab.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),ab.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||ab.guid++,e):void 0},now:Date.now,support:Z}),ab.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=/*!
 * Sizzle CSS Selector Engine v1.10.16                                                                                 // 15
 * http://sizzlejs.com/                                                                                                // 16
 *                                                                                                                     // 17
 * Copyright 2013 jQuery Foundation, Inc. and other contributors                                                       // 18
 * Released under the MIT license                                                                                      // 19
 * http://jquery.org/license                                                                                           // 20
 *                                                                                                                     // 21
 * Date: 2014-01-13                                                                                                    // 22
 */                                                                                                                    // 23
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,o,p,q;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(x.qsa&&(!J||!J.test(a))){if(o=l=N,p=b,q=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=m(a),(l=b.getAttribute("id"))?o=l.replace(ub,"\\$&"):b.setAttribute("id",o),o="[id='"+o+"'] ",i=j.length;i--;)j[i]=o+n(j[i]);p=tb.test(a)&&k(b.parentNode)||b,q=j.join(",")}if(q)try{return _.apply(c,p.querySelectorAll(q)),c}catch(r){}finally{l||b.removeAttribute("id")}}}return v(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>y.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)y.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=y.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in y.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=d||u(b||"*",h.nodeType?[h]:h,[]),r=!a||!d&&b?p:q(p,m,a,h,i),s=c?f||(d?a:o||e)?[]:g:r;if(c&&c(r,s,h,i),e)for(j=q(s,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=s.length;k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)}for(k=s.length;k--;)(l=s[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):_.apply(g,s)})}function s(a){for(var b,c,d,e=a.length,f=y.relative[a[0].type],g=f||y.relative[" "],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=y.relative[a[h].type])k=[o(p(k),c)];else{if(c=y.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!y.relative[a[d].type];d++);return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&n(a))}k.push(c)}return p(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&y.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}function u(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&y.relative[f[1].type]){if(b=(y.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!y.relative[h=g.type]);)if((i=y.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&n(f),!a)return _.apply(c,d),c;break}}return B(a,j)(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")"+db+"*(?:([*^$|!~]?=)"+db+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+fb+")|)|)"+db+"*\\]",hb=":("+eb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+gb.replace(3,8)+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}x=b.support={},A=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!A(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),x.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),x.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),x.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),x.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),x.getById?(y.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},y.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete y.find.ID,y.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),y.find.TAG=x.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},y.find.CLASS=x.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(x.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(x.matchesSelector=rb.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){x.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!x.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!x.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||x.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=y.attrHandle[b.toLowerCase()],d=c&&X.call(y.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:x.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!x.detectDuplicates,D=!x.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},z=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=z(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=z(b);return c},y=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&mb.test(c)&&(b=m(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=y.pseudos[a]||y.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],y.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=B(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||z(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!y.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},y.pseudos.nth=y.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})y.pseudos[w]=h(w);for(w in{submit:!0,reset:!0})y.pseudos[w]=i(w);return l.prototype=y.filters=y.pseudos,y.setFilters=new l,B=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=m(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d))}return f},x.sortStable=N.split("").sort(U).join("")===N,x.detectDuplicates=!!E,F(),x.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),x.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ab.find=eb,ab.expr=eb.selectors,ab.expr[":"]=ab.expr.pseudos,ab.unique=eb.uniqueSort,ab.text=eb.getText,ab.isXMLDoc=eb.isXML,ab.contains=eb.contains;var fb=ab.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;ab.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ab.find.matchesSelector(d,a)?[d]:[]:ab.find.matches(a,ab.grep(b,function(a){return 1===a.nodeType}))},ab.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(ab(a).filter(function(){for(b=0;c>b;b++)if(ab.contains(e[b],this))return!0}));for(b=0;c>b;b++)ab.find(a,e[b],d);return d=this.pushStack(c>1?ab.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?ab(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=ab.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof ab?b[0]:b,ab.merge(this,ab.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:$,!0)),gb.test(c[1])&&ab.isPlainObject(b))for(c in b)ab.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=$.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=$,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):ab.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(ab):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),ab.makeArray(a,this))};kb.prototype=ab.fn,ib=ab($);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};ab.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&ab(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),ab.fn.extend({has:function(a){var b=ab(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(ab.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?ab(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&ab.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ab.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(ab(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ab.unique(ab.merge(this.get(),ab(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ab.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ab.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ab.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ab.dir(a,"nextSibling")},prevAll:function(a){return ab.dir(a,"previousSibling")},nextUntil:function(a,b,c){return ab.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ab.dir(a,"previousSibling",c)},siblings:function(a){return ab.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ab.sibling(a.firstChild)},contents:function(a){return a.contentDocument||ab.merge([],a.childNodes)}},function(a,b){ab.fn[a]=function(c,d){var e=ab.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ab.filter(d,e)),this.length>1&&(mb[a]||ab.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};ab.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):ab.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){ab.each(b,function(b,c){var d=ab.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&ab.each(arguments,function(a,b){for(var c;(c=ab.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?ab.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},ab.extend({Deferred:function(a){var b=[["resolve","done",ab.Callbacks("once memory"),"resolved"],["reject","fail",ab.Callbacks("once memory"),"rejected"],["notify","progress",ab.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ab.Deferred(function(c){ab.each(b,function(b,f){var g=ab.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&ab.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?ab.extend(a,d):d}},e={};return d.pipe=d.then,ab.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&ab.isFunction(a.promise)?g:0,i=1===h?a:ab.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&ab.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;ab.fn.ready=function(a){return ab.ready.promise().done(a),this},ab.extend({isReady:!1,readyWait:1,holdReady:function(a){a?ab.readyWait++:ab.ready(!0)},ready:function(a){(a===!0?--ab.readyWait:ab.isReady)||(ab.isReady=!0,a!==!0&&--ab.readyWait>0||(pb.resolveWith($,[ab]),ab.fn.trigger&&ab($).trigger("ready").off("ready")))}}),ab.ready.promise=function(b){return pb||(pb=ab.Deferred(),"complete"===$.readyState?setTimeout(ab.ready):($.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},ab.ready.promise();var qb=ab.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===ab.type(c)){e=!0;for(h in c)ab.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,ab.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(ab(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};ab.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=ab.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,ab.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(ab.isEmptyObject(f))ab.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,ab.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{ab.isArray(b)?d=b.concat(b.map(ab.camelCase)):(e=ab.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!ab.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;ab.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),ab.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)d=g[c].name,0===d.indexOf("data-")&&(d=ab.camelCase(d.slice(5)),i(f,d,e[d]));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=ab.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),ab.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||ab.isArray(c)?d=rb.access(a,b,ab.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=ab.queue(a,b),d=c.length,e=c.shift(),f=ab._queueHooks(a,b),g=function(){ab.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:ab.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),ab.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ab.queue(this[0],a):void 0===b?this:this.each(function(){var c=ab.queue(this,a,b);ab._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ab.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ab.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=ab.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===ab.css(a,"display")||!ab.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=$.createDocumentFragment(),b=a.appendChild($.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",Z.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Z.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Z.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;ab.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=ab.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof ab!==zb&&ab.event.triggered!==b.type?ab.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=ab.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=ab.event.special[n]||{},k=ab.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ab.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),ab.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ab.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ab.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)ab.event.remove(a,n+b[j],c,d,!0);ab.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||$],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||$,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+ab.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[ab.expando]?b:new ab.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:ab.makeArray(c,[b]),l=ab.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!ab.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
h===(d.ownerDocument||$)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&ab.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!ab.acceptData(d)||j&&ab.isFunction(d[n])&&!ab.isWindow(d)&&(h=d[j],h&&(d[j]=null),ab.event.triggered=n,d[n](),ab.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=ab.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=ab.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=ab.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((ab.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?ab(e,this).index(i)>=0:ab.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||$,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[ab.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ab.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=$),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&ab.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return ab.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=ab.extend(new ab.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ab.event.trigger(e,null,b):ab.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ab.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},ab.Event=function(a,b){return this instanceof ab.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?j:k):this.type=a,b&&ab.extend(this,b),this.timeStamp=a&&a.timeStamp||ab.now(),void(this[ab.expando]=!0)):new ab.Event(a,b)},ab.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=j,this.stopPropagation()}},ab.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){ab.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!ab.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Z.focusinBubbles||ab.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){ab.event.simulate(b,a.target,ab.event.fix(a),!0)};ab.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),ab.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return ab().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=ab.guid++)),this.each(function(){ab.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,ab(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){ab.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){ab.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?ab.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,ab.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=ab.contains(a.ownerDocument,a);if(!(Z.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ab.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===ab.type(e))ab.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;ab.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===ab.inArray(e,d))&&(i=ab.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f,g,h=ab.event.special,i=0;void 0!==(c=a[i]);i++){if(ab.acceptData(c)&&(f=c[rb.expando],f&&(b=rb.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?ab.event.remove(c,e):ab.removeEvent(c,e,b.handle);rb.cache[f]&&delete rb.cache[f]}delete sb.cache[c[sb.expando]]}}}),ab.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?ab.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?ab.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||ab.cleanData(r(c)),c.parentNode&&(b&&ab.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(ab.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return ab.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(ab.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,ab.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=ab.isFunction(m);if(p||j>1&&"string"==typeof m&&!Z.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=ab.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=ab.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=ab.clone(g,!0,!0),f&&ab.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,ab.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&ab.contains(h,g)&&(g.src?ab._evalUrl&&ab._evalUrl(g.src):ab.globalEval(g.textContent.replace(Lb,"")))}return this}}),ab.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ab.fn[a]=function(a){for(var c,d=[],e=ab(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),ab(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",f.appendChild(g);var b=a.getComputedStyle(h,null);c="1%"!==b.top,d="4px"===b.width,f.removeChild(g)}var c,d,e="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",f=$.documentElement,g=$.createElement("div"),h=$.createElement("div");h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",Z.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",g.appendChild(h),a.getComputedStyle&&ab.extend(Z,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=h.appendChild($.createElement("div"));return c.style.cssText=h.style.cssText=e,c.style.marginRight=c.style.width="0",h.style.width="1px",f.appendChild(g),b=!parseFloat(a.getComputedStyle(c,null).marginRight),f.removeChild(g),h.innerHTML="",b}})}(),ab.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:0,fontWeight:400},Xb=["Webkit","O","Moz","ms"];ab.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=ab.camelCase(b),i=a.style;return b=ab.cssProps[h]||(ab.cssProps[h]=x(i,h)),g=ab.cssHooks[b]||ab.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(ab.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||ab.cssNumber[h]||(c+="px"),Z.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=ab.camelCase(b);return b=ab.cssProps[h]||(ab.cssProps[h]=x(a.style,h)),g=ab.cssHooks[b]||ab.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||ab.isNumeric(f)?f||0:e):e}}),ab.each(["height","width"],function(a,b){ab.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Sb.test(ab.css(a,"display"))?ab.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===ab.css(a,"boxSizing",!1,e),e):0)}}}),ab.cssHooks.marginRight=w(Z.reliableMarginRight,function(a,b){return b?ab.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),ab.each({margin:"",padding:"",border:"Width"},function(a,b){ab.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(ab.cssHooks[a+b].set=y)}),ab.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(ab.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=ab.css(a,b[g],!1,d);return f}return void 0!==c?ab.style(a,b,c):ab.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?ab(this).show():ab(this).hide()})}}),ab.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ab.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?ab.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ab.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){ab.fx.step[a.prop]?ab.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ab.cssProps[a.prop]]||ab.cssHooks[a.prop])?ab.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ab.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ab.fx=C.prototype.init,ab.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(ab.cssNumber[a]?"":"px"),g=(ab.cssNumber[a]||"px"!==f&&+d)&&_b.exec(ab.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,ab.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};ab.Animation=ab.extend(I,{tweener:function(a,b){ab.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),ab.speed=function(a,b,c){var d=a&&"object"==typeof a?ab.extend({},a):{complete:c||!c&&b||ab.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ab.isFunction(b)&&b};return d.duration=ab.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ab.fx.speeds?ab.fx.speeds[d.duration]:ab.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){ab.isFunction(d.old)&&d.old.call(this),d.queue&&ab.dequeue(this,d.queue)},d},ab.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ab.isEmptyObject(a),f=ab.speed(b,c,d),g=function(){var b=I(this,ab.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ab.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&ab.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ab.timers,g=d?d.length:0;for(c.finish=!0,ab.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),ab.each(["toggle","show","hide"],function(a,b){var c=ab.fn[b];ab.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),ab.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ab.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ab.timers=[],ab.fx.tick=function(){var a,b=0,c=ab.timers;for(Yb=ab.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||ab.fx.stop(),Yb=void 0},ab.fx.timer=function(a){ab.timers.push(a),a()?ab.fx.start():ab.timers.pop()},ab.fx.interval=13,ab.fx.start=function(){Zb||(Zb=setInterval(ab.fx.tick,ab.fx.interval))},ab.fx.stop=function(){clearInterval(Zb),Zb=null},ab.fx.speeds={slow:600,fast:200,_default:400},ab.fn.delay=function(a,b){return a=ab.fx?ab.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=$.createElement("input"),b=$.createElement("select"),c=b.appendChild($.createElement("option"));a.type="checkbox",Z.checkOn=""!==a.value,Z.optSelected=c.selected,b.disabled=!0,Z.optDisabled=!c.disabled,a=$.createElement("input"),a.value="t",a.type="radio",Z.radioValue="t"===a.value}();var dc,ec,fc=ab.expr.attrHandle;ab.fn.extend({attr:function(a,b){return qb(this,ab.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ab.removeAttr(this,a)})}}),ab.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?ab.prop(a,b,c):(1===f&&ab.isXMLDoc(a)||(b=b.toLowerCase(),d=ab.attrHooks[b]||(ab.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=ab.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void ab.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=ab.propFix[c]||c,ab.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Z.radioValue&&"radio"===b&&ab.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?ab.removeAttr(a,c):a.setAttribute(c,c),c}},ab.each(ab.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||ab.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;ab.fn.extend({prop:function(a,b){return qb(this,ab.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[ab.propFix[a]||a]})}}),ab.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!ab.isXMLDoc(a),f&&(b=ab.propFix[b]||b,e=ab.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Z.optSelected||(ab.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),ab.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ab.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;ab.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(ab.isFunction(a))return this.each(function(b){ab(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=ab.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(ab.isFunction(a))return this.each(function(b){ab(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?ab.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(ab.isFunction(a)?function(c){ab(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=ab(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;ab.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ab.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ab(this).val()):a,null==e?e="":"number"==typeof e?e+="":ab.isArray(e)&&(e=ab.map(e,function(a){return null==a?"":a+""})),b=ab.valHooks[this.type]||ab.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=ab.valHooks[e.type]||ab.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),ab.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Z.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&ab.nodeName(c.parentNode,"optgroup"))){if(b=ab(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ab.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=ab.inArray(ab(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),ab.each(["radio","checkbox"],function(){ab.valHooks[this]={set:function(a,b){return ab.isArray(b)?a.checked=ab.inArray(ab(a).val(),b)>=0:void 0}},Z.checkOn||(ab.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),ab.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){ab.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ab.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=ab.now(),kc=/\?/;ab.parseJSON=function(a){return JSON.parse(a+"")},ab.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&ab.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=$.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],ab.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ab.parseJSON,"text xml":ab.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,ab.ajaxSettings),b):L(ab.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(ab.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(ab.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--ab.active||ab.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=ab.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?ab(m):ab.event,o=ab.Deferred(),p=ab.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=ab.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=ab.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===ab.active++&&ab.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(ab.lastModified[e]&&v.setRequestHeader("If-Modified-Since",ab.lastModified[e]),ab.etag[e]&&v.setRequestHeader("If-None-Match",ab.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return ab.get(a,b,c,"json")},getScript:function(a,b){return ab.get(a,void 0,b,"script")}}),ab.each(["get","post"],function(a,b){ab[b]=function(a,c,d,e){return ab.isFunction(c)&&(e=e||d,d=c,c=void 0),ab.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),ab.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ab.fn[b]=function(a){return this.on(b,a)}}),ab._evalUrl=function(a){return ab.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ab.fn.extend({wrapAll:function(a){var b;return ab.isFunction(a)?this.each(function(b){ab(this).wrapAll(a.call(this,b))}):(this[0]&&(b=ab(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(ab.isFunction(a)?function(b){ab(this).wrapInner(a.call(this,b))}:function(){var b=ab(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ab.isFunction(a);return this.each(function(c){ab(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ab.nodeName(this,"body")||ab(this).replaceWith(this.childNodes)}).end()}}),ab.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},ab.expr.filters.visible=function(a){return!ab.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;ab.param=function(a,b){var c,d=[],e=function(a,b){b=ab.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};if(void 0===b&&(b=ab.ajaxSettings&&ab.ajaxSettings.traditional),ab.isArray(a)||a.jquery&&!ab.isPlainObject(a))ab.each(a,function(){e(this.name,this.value)});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},ab.fn.extend({serialize:function(){return ab.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=ab.prop(this,"elements");return a?ab.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!ab(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=ab(this).val();return null==c?null:ab.isArray(c)?ab.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),ab.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=ab.ajaxSettings.xhr();a.ActiveXObject&&ab(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Z.cors=!!Gc&&"withCredentials"in Gc,Z.ajax=Gc=!!Gc,ab.ajaxTransport(function(a){var b;return Z.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),ab.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ab.globalEval(a),a}}}),ab.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),ab.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=ab("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),$.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;ab.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||ab.expando+"_"+jc++;return this[a]=!0,a}}),ab.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=ab.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ab.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&ab.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),ab.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||$;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=ab.buildFragment([a],b,e),e&&e.length&&ab(e).remove(),ab.merge([],d.childNodes))};var Jc=ab.fn.load;ab.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),ab.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&ab.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?ab("<div>").append(ab.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},ab.expr.filters.animated=function(a){return ab.grep(ab.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;ab.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ab.css(a,"position"),l=ab(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=ab.css(a,"top"),i=ab.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ab.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ab.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){ab.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,ab.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===ab.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ab.nodeName(a[0],"html")||(d=a.offset()),d.top+=ab.css(a[0],"borderTopWidth",!0),d.left+=ab.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-ab.css(c,"marginTop",!0),left:b.left-d.left-ab.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!ab.nodeName(a,"html")&&"static"===ab.css(a,"position");)a=a.offsetParent;return a||Kc})}}),ab.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;ab.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),ab.each(["top","left"],function(a,b){ab.cssHooks[b]=w(Z.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?ab(a).position()[b]+"px":c):void 0})}),ab.each({Height:"height",Width:"width"},function(a,b){ab.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){ab.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return ab.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?ab.css(b,c,g):ab.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),ab.fn.size=function(){return this.length},ab.fn.andSelf=ab.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ab});var Lc=a.jQuery,Mc=a.$;return ab.noConflict=function(b){return a.$===ab&&(a.$=Mc),b&&a.jQuery===ab&&(a.jQuery=Lc),ab},typeof b===zb&&(a.jQuery=a.$=ab),ab});
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/vendor/modernizr.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Modernizr v2.7.2                                                                                                    // 2
 * www.modernizr.com                                                                                                   // 3
 *                                                                                                                     // 4
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton                                                                   // 5
 * Available under the BSD and MIT licenses: www.modernizr.com/license/                                                // 6
 */                                                                                                                    // 7
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.7.2",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/vendor/placeholder.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! http://mths.be/placeholder v2.0.7 by @mathias */                                                                   // 1
!function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,d){var e=this,f=c(e);if(e.value==f.attr("placeholder")&&f.hasClass("placeholder"))if(f.data("placeholder-password")){if(f=f.hide().next().show().attr("id",f.removeAttr("id").data("placeholder-id")),a===!0)return f[0].value=d;f.focus()}else e.value="",f.removeClass("placeholder"),e==b.activeElement&&e.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}var g,h,i="placeholder"in b.createElement("input"),j="placeholder"in b.createElement("textarea"),k=c.fn,l=c.valHooks;i&&j?(h=k.placeholder=function(){return this},h.input=h.textarea=!0):(h=k.placeholder=function(){var a=this;return a.filter((i?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},h.input=i,h.textarea=j,g={get:function(a){var b=c(a);return b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,d){var g=c(a);return g.data("placeholder-enabled")?(""==d?(a.value=d,a!=b.activeElement&&f.call(a)):g.hasClass("placeholder")?e.call(a,!0,d)||(a.value=d):a.value=d,g):a.value=d}},i||(l.input=g),j||(l.textarea=g),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Foundation Responsive Library                                                                                       // 2
 * http://foundation.zurb.com                                                                                          // 3
 * Copyright 2014, ZURB                                                                                                // 4
 * Free to use under the MIT license.                                                                                  // 5
 * http://www.opensource.org/licenses/mit-license.php                                                                  // 6
*/                                                                                                                     // 7
                                                                                                                       // 8
(function ($, window, document, undefined) {                                                                           // 9
  'use strict';                                                                                                        // 10
                                                                                                                       // 11
  var header_helpers = function (class_array) {                                                                        // 12
    var i = class_array.length;                                                                                        // 13
    var head = $('head');                                                                                              // 14
                                                                                                                       // 15
    while (i--) {                                                                                                      // 16
      if($('head').has('.' + class_array[i]).length === 0) {                                                           // 17
        $('head').append('<meta class="' + class_array[i] + '" />');                                                   // 18
      }                                                                                                                // 19
    }                                                                                                                  // 20
  };                                                                                                                   // 21
                                                                                                                       // 22
  header_helpers([                                                                                                     // 23
    'foundation-mq-small',                                                                                             // 24
    'foundation-mq-medium',                                                                                            // 25
    'foundation-mq-large',                                                                                             // 26
    'foundation-mq-xlarge',                                                                                            // 27
    'foundation-mq-xxlarge',                                                                                           // 28
    'foundation-data-attribute-namespace']);                                                                           // 29
                                                                                                                       // 30
  // Enable FastClick if present                                                                                       // 31
                                                                                                                       // 32
  $(function() {                                                                                                       // 33
    if (typeof FastClick !== 'undefined') {                                                                            // 34
      // Don't attach to body if undefined                                                                             // 35
      if (typeof document.body !== 'undefined') {                                                                      // 36
        FastClick.attach(document.body);                                                                               // 37
      }                                                                                                                // 38
    }                                                                                                                  // 39
  });                                                                                                                  // 40
                                                                                                                       // 41
  // private Fast Selector wrapper,                                                                                    // 42
  // returns jQuery object. Only use where                                                                             // 43
  // getElementById is not available.                                                                                  // 44
  var S = function (selector, context) {                                                                               // 45
    if (typeof selector === 'string') {                                                                                // 46
      if (context) {                                                                                                   // 47
        var cont;                                                                                                      // 48
        if (context.jquery) {                                                                                          // 49
          cont = context[0];                                                                                           // 50
          if (!cont) return context;                                                                                   // 51
        } else {                                                                                                       // 52
          cont = context;                                                                                              // 53
        }                                                                                                              // 54
        return $(cont.querySelectorAll(selector));                                                                     // 55
      }                                                                                                                // 56
                                                                                                                       // 57
      return $(document.querySelectorAll(selector));                                                                   // 58
    }                                                                                                                  // 59
                                                                                                                       // 60
    return $(selector, context);                                                                                       // 61
  };                                                                                                                   // 62
                                                                                                                       // 63
  // Namespace functions.                                                                                              // 64
                                                                                                                       // 65
  var attr_name = function (init) {                                                                                    // 66
    var arr = [];                                                                                                      // 67
    if (!init) arr.push('data');                                                                                       // 68
    if (this.namespace.length > 0) arr.push(this.namespace);                                                           // 69
    arr.push(this.name);                                                                                               // 70
                                                                                                                       // 71
    return arr.join('-');                                                                                              // 72
  };                                                                                                                   // 73
                                                                                                                       // 74
  var add_namespace = function (str) {                                                                                 // 75
    var parts = str.split('-'),                                                                                        // 76
        i = parts.length,                                                                                              // 77
        arr = [];                                                                                                      // 78
                                                                                                                       // 79
    while (i--) {                                                                                                      // 80
      if (i !== 0) {                                                                                                   // 81
        arr.push(parts[i]);                                                                                            // 82
      } else {                                                                                                         // 83
        if (this.namespace.length > 0) {                                                                               // 84
          arr.push(this.namespace, parts[i]);                                                                          // 85
        } else {                                                                                                       // 86
          arr.push(parts[i]);                                                                                          // 87
        }                                                                                                              // 88
      }                                                                                                                // 89
    }                                                                                                                  // 90
                                                                                                                       // 91
    return arr.reverse().join('-');                                                                                    // 92
  };                                                                                                                   // 93
                                                                                                                       // 94
  // Event binding and data-options updating.                                                                          // 95
                                                                                                                       // 96
  var bindings = function (method, options) {                                                                          // 97
    var self = this,                                                                                                   // 98
        should_bind_events = !S(this).data(this.attr_name(true));                                                      // 99
                                                                                                                       // 100
    if (typeof method === 'string') {                                                                                  // 101
      return this[method].call(this, options);                                                                         // 102
    }                                                                                                                  // 103
                                                                                                                       // 104
    if (S(this.scope).is('[' + this.attr_name() +']')) {                                                               // 105
      S(this.scope).data(this.attr_name(true) + '-init', $.extend({}, this.settings, (options || method), this.data_options(S(this.scope))));
                                                                                                                       // 107
      if (should_bind_events) {                                                                                        // 108
        this.events(this.scope);                                                                                       // 109
      }                                                                                                                // 110
                                                                                                                       // 111
    } else {                                                                                                           // 112
      S('[' + this.attr_name() +']', this.scope).each(function () {                                                    // 113
        var should_bind_events = !S(this).data(self.attr_name(true) + '-init');                                        // 114
        S(this).data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options(S(this))));
                                                                                                                       // 116
        if (should_bind_events) {                                                                                      // 117
          self.events(this);                                                                                           // 118
        }                                                                                                              // 119
      });                                                                                                              // 120
    }                                                                                                                  // 121
  };                                                                                                                   // 122
                                                                                                                       // 123
  var single_image_loaded = function (image, callback) {                                                               // 124
    function loaded () {                                                                                               // 125
      callback(image[0]);                                                                                              // 126
    }                                                                                                                  // 127
                                                                                                                       // 128
    function bindLoad () {                                                                                             // 129
      this.one('load', loaded);                                                                                        // 130
                                                                                                                       // 131
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {                                                              // 132
        var src = this.attr( 'src' ),                                                                                  // 133
            param = src.match( /\?/ ) ? '&' : '?';                                                                     // 134
                                                                                                                       // 135
        param += 'random=' + (new Date()).getTime();                                                                   // 136
        this.attr('src', src + param);                                                                                 // 137
      }                                                                                                                // 138
    }                                                                                                                  // 139
                                                                                                                       // 140
    if (!image.attr('src')) {                                                                                          // 141
      loaded();                                                                                                        // 142
      return;                                                                                                          // 143
    }                                                                                                                  // 144
                                                                                                                       // 145
    if (image[0].complete || image[0].readyState === 4) {                                                              // 146
      loaded();                                                                                                        // 147
    } else {                                                                                                           // 148
      bindLoad.call(image);                                                                                            // 149
    }                                                                                                                  // 150
  };                                                                                                                   // 151
                                                                                                                       // 152
  /*                                                                                                                   // 153
    https://github.com/paulirish/matchMedia.js                                                                         // 154
  */                                                                                                                   // 155
                                                                                                                       // 156
  window.matchMedia = window.matchMedia || (function( doc, undefined ) {                                               // 157
                                                                                                                       // 158
    "use strict";                                                                                                      // 159
                                                                                                                       // 160
    var bool,                                                                                                          // 161
        docElem = doc.documentElement,                                                                                 // 162
        refNode = docElem.firstElementChild || docElem.firstChild,                                                     // 163
        // fakeBody required for <FF4 when executed in <head>                                                          // 164
        fakeBody = doc.createElement( "body" ),                                                                        // 165
        div = doc.createElement( "div" );                                                                              // 166
                                                                                                                       // 167
    div.id = "mq-test-1";                                                                                              // 168
    div.style.cssText = "position:absolute;top:-100em";                                                                // 169
    fakeBody.style.background = "none";                                                                                // 170
    fakeBody.appendChild(div);                                                                                         // 171
                                                                                                                       // 172
    return function (q) {                                                                                              // 173
                                                                                                                       // 174
      div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";                          // 175
                                                                                                                       // 176
      docElem.insertBefore( fakeBody, refNode );                                                                       // 177
      bool = div.offsetWidth === 42;                                                                                   // 178
      docElem.removeChild( fakeBody );                                                                                 // 179
                                                                                                                       // 180
      return {                                                                                                         // 181
        matches: bool,                                                                                                 // 182
        media: q                                                                                                       // 183
      };                                                                                                               // 184
                                                                                                                       // 185
    };                                                                                                                 // 186
                                                                                                                       // 187
  }( document ));                                                                                                      // 188
                                                                                                                       // 189
  /*                                                                                                                   // 190
   * jquery.requestAnimationFrame                                                                                      // 191
   * https://github.com/gnarf37/jquery-requestAnimationFrame                                                           // 192
   * Requires jQuery 1.8+                                                                                              // 193
   *                                                                                                                   // 194
   * Copyright (c) 2012 Corey Frang                                                                                    // 195
   * Licensed under the MIT license.                                                                                   // 196
   */                                                                                                                  // 197
                                                                                                                       // 198
  (function($) {                                                                                                       // 199
                                                                                                                       // 200
  // requestAnimationFrame polyfill adapted from Erik Möller                                                           // 201
  // fixes from Paul Irish and Tino Zijdel                                                                             // 202
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                              // 203
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                          // 204
                                                                                                                       // 205
  var animating,                                                                                                       // 206
      lastTime = 0,                                                                                                    // 207
      vendors = ['webkit', 'moz'],                                                                                     // 208
      requestAnimationFrame = window.requestAnimationFrame,                                                            // 209
      cancelAnimationFrame = window.cancelAnimationFrame,                                                              // 210
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;                                                            // 211
                                                                                                                       // 212
  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {                                            // 213
    requestAnimationFrame = window[ vendors[lastTime] + "RequestAnimationFrame" ];                                     // 214
    cancelAnimationFrame = cancelAnimationFrame ||                                                                     // 215
      window[ vendors[lastTime] + "CancelAnimationFrame" ] ||                                                          // 216
      window[ vendors[lastTime] + "CancelRequestAnimationFrame" ];                                                     // 217
  }                                                                                                                    // 218
                                                                                                                       // 219
  function raf() {                                                                                                     // 220
    if (animating) {                                                                                                   // 221
      requestAnimationFrame(raf);                                                                                      // 222
                                                                                                                       // 223
      if (jqueryFxAvailable) {                                                                                         // 224
        jQuery.fx.tick();                                                                                              // 225
      }                                                                                                                // 226
    }                                                                                                                  // 227
  }                                                                                                                    // 228
                                                                                                                       // 229
  if (requestAnimationFrame) {                                                                                         // 230
    // use rAF                                                                                                         // 231
    window.requestAnimationFrame = requestAnimationFrame;                                                              // 232
    window.cancelAnimationFrame = cancelAnimationFrame;                                                                // 233
                                                                                                                       // 234
    if (jqueryFxAvailable) {                                                                                           // 235
      jQuery.fx.timer = function (timer) {                                                                             // 236
        if (timer() && jQuery.timers.push(timer) && !animating) {                                                      // 237
          animating = true;                                                                                            // 238
          raf();                                                                                                       // 239
        }                                                                                                              // 240
      };                                                                                                               // 241
                                                                                                                       // 242
      jQuery.fx.stop = function () {                                                                                   // 243
        animating = false;                                                                                             // 244
      };                                                                                                               // 245
    }                                                                                                                  // 246
  } else {                                                                                                             // 247
    // polyfill                                                                                                        // 248
    window.requestAnimationFrame = function (callback, element) {                                                      // 249
      var currTime = new Date().getTime(),                                                                             // 250
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),                                                          // 251
        id = window.setTimeout(function () {                                                                           // 252
          callback(currTime + timeToCall);                                                                             // 253
        }, timeToCall);                                                                                                // 254
      lastTime = currTime + timeToCall;                                                                                // 255
      return id;                                                                                                       // 256
    };                                                                                                                 // 257
                                                                                                                       // 258
    window.cancelAnimationFrame = function (id) {                                                                      // 259
      clearTimeout(id);                                                                                                // 260
    };                                                                                                                 // 261
                                                                                                                       // 262
  }                                                                                                                    // 263
                                                                                                                       // 264
  }( jQuery ));                                                                                                        // 265
                                                                                                                       // 266
                                                                                                                       // 267
  function removeQuotes (string) {                                                                                     // 268
    if (typeof string === 'string' || string instanceof String) {                                                      // 269
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');                                                    // 270
    }                                                                                                                  // 271
                                                                                                                       // 272
    return string;                                                                                                     // 273
  }                                                                                                                    // 274
                                                                                                                       // 275
  window.Foundation = {                                                                                                // 276
    name : 'Foundation',                                                                                               // 277
                                                                                                                       // 278
    version : '5.2.1',                                                                                                 // 279
                                                                                                                       // 280
    media_queries : {                                                                                                  // 281
      small : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),             // 282
      medium : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),           // 283
      large : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),             // 284
      xlarge: S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),            // 285
      xxlarge: S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')           // 286
    },                                                                                                                 // 287
                                                                                                                       // 288
    stylesheet : $('<style></style>').appendTo('head')[0].sheet,                                                       // 289
                                                                                                                       // 290
    global: {                                                                                                          // 291
      namespace: ''                                                                                                    // 292
    },                                                                                                                 // 293
                                                                                                                       // 294
    init : function (scope, libraries, method, options, response) {                                                    // 295
      var library_arr,                                                                                                 // 296
          args = [scope, method, options, response],                                                                   // 297
          responses = [];                                                                                              // 298
                                                                                                                       // 299
      // check RTL                                                                                                     // 300
      this.rtl = /rtl/i.test(S('html').attr('dir'));                                                                   // 301
                                                                                                                       // 302
      // set foundation global scope                                                                                   // 303
      this.scope = scope || this.scope;                                                                                // 304
                                                                                                                       // 305
      this.set_namespace();                                                                                            // 306
                                                                                                                       // 307
      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {                                  // 308
        if (this.libs.hasOwnProperty(libraries)) {                                                                     // 309
          responses.push(this.init_lib(libraries, args));                                                              // 310
        }                                                                                                              // 311
      } else {                                                                                                         // 312
        for (var lib in this.libs) {                                                                                   // 313
          responses.push(this.init_lib(lib, libraries));                                                               // 314
        }                                                                                                              // 315
      }                                                                                                                // 316
                                                                                                                       // 317
      return scope;                                                                                                    // 318
    },                                                                                                                 // 319
                                                                                                                       // 320
    init_lib : function (lib, args) {                                                                                  // 321
      if (this.libs.hasOwnProperty(lib)) {                                                                             // 322
        this.patch(this.libs[lib]);                                                                                    // 323
                                                                                                                       // 324
        if (args && args.hasOwnProperty(lib)) {                                                                        // 325
            if (typeof this.libs[lib].settings !== 'undefined') {                                                      // 326
                $.extend(true, this.libs[lib].settings, args[lib]);                                                    // 327
            }                                                                                                          // 328
            else if (typeof this.libs[lib].defaults !== 'undefined') {                                                 // 329
                $.extend(true, this.libs[lib].defaults, args[lib]);                                                    // 330
            }                                                                                                          // 331
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);                                   // 332
        }                                                                                                              // 333
                                                                                                                       // 334
        args = args instanceof Array ? args : Array(args);    // PATCH: added this line                                // 335
        return this.libs[lib].init.apply(this.libs[lib], args);                                                        // 336
      }                                                                                                                // 337
                                                                                                                       // 338
      return function () {};                                                                                           // 339
    },                                                                                                                 // 340
                                                                                                                       // 341
    patch : function (lib) {                                                                                           // 342
      lib.scope = this.scope;                                                                                          // 343
      lib.namespace = this.global.namespace;                                                                           // 344
      lib.rtl = this.rtl;                                                                                              // 345
      lib['data_options'] = this.utils.data_options;                                                                   // 346
      lib['attr_name'] = attr_name;                                                                                    // 347
      lib['add_namespace'] = add_namespace;                                                                            // 348
      lib['bindings'] = bindings;                                                                                      // 349
      lib['S'] = this.utils.S;                                                                                         // 350
    },                                                                                                                 // 351
                                                                                                                       // 352
    inherit : function (scope, methods) {                                                                              // 353
      var methods_arr = methods.split(' '),                                                                            // 354
          i = methods_arr.length;                                                                                      // 355
                                                                                                                       // 356
      while (i--) {                                                                                                    // 357
        if (this.utils.hasOwnProperty(methods_arr[i])) {                                                               // 358
          scope[methods_arr[i]] = this.utils[methods_arr[i]];                                                          // 359
        }                                                                                                              // 360
      }                                                                                                                // 361
    },                                                                                                                 // 362
                                                                                                                       // 363
    set_namespace: function () {                                                                                       // 364
                                                                                                                       // 365
      // Don't bother reading the namespace out of the meta tag                                                        // 366
      // if the namespace has been set globally in javascript                                                          // 367
      //                                                                                                               // 368
      // Example: something like Foundation.global.namespace = 'my-namespace';                                         // 369
      //                                                                                                               // 370
      // Otherwise, if the namespace hasn't been set globally,                                                         // 371
      // read it out of the meta tag                                                                                   // 372
      //                                                                                                               // 373
      var namespace = this.global.namespace || $('.foundation-data-attribute-namespace').css('font-family');           // 374
                                                                                                                       // 375
      if (/false/i.test(namespace)) return;                                                                            // 376
                                                                                                                       // 377
      this.global.namespace = namespace;                                                                               // 378
    },                                                                                                                 // 379
                                                                                                                       // 380
    libs : {},                                                                                                         // 381
                                                                                                                       // 382
    // methods that can be inherited in libraries                                                                      // 383
    utils : {                                                                                                          // 384
                                                                                                                       // 385
      // Description:                                                                                                  // 386
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById                                 // 387
      //    is not available.                                                                                          // 388
      //                                                                                                               // 389
      // Arguments:                                                                                                    // 390
      //    Selector (String): CSS selector describing the element(s) to be                                            // 391
      //    returned as a jQuery object.                                                                               // 392
      //                                                                                                               // 393
      //    Scope (String): CSS selector describing the area to be searched. Default                                   // 394
      //    is document.                                                                                               // 395
      //                                                                                                               // 396
      // Returns:                                                                                                      // 397
      //    Element (jQuery Object): jQuery object containing elements matching the                                    // 398
      //    selector within the scope.                                                                                 // 399
      S : S,                                                                                                           // 400
                                                                                                                       // 401
      // Description:                                                                                                  // 402
      //    Executes a function a max of once every n milliseconds                                                     // 403
      //                                                                                                               // 404
      // Arguments:                                                                                                    // 405
      //    Func (Function): Function to be throttled.                                                                 // 406
      //                                                                                                               // 407
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 408
      //                                                                                                               // 409
      // Returns:                                                                                                      // 410
      //    Lazy_function (Function): Function with throttling applied.                                                // 411
      throttle : function (func, delay) {                                                                              // 412
        var timer = null;                                                                                              // 413
                                                                                                                       // 414
        return function () {                                                                                           // 415
          var context = this, args = arguments;                                                                        // 416
                                                                                                                       // 417
          clearTimeout(timer);                                                                                         // 418
          timer = setTimeout(function () {                                                                             // 419
            func.apply(context, args);                                                                                 // 420
          }, delay);                                                                                                   // 421
        };                                                                                                             // 422
      },                                                                                                               // 423
                                                                                                                       // 424
      // Description:                                                                                                  // 425
      //    Executes a function when it stops being invoked for n seconds                                              // 426
      //    Modified version of _.debounce() http://underscorejs.org                                                   // 427
      //                                                                                                               // 428
      // Arguments:                                                                                                    // 429
      //    Func (Function): Function to be debounced.                                                                 // 430
      //                                                                                                               // 431
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 432
      //                                                                                                               // 433
      //    Immediate (Bool): Whether the function should be called at the beginning                                   // 434
      //    of the delay instead of the end. Default is false.                                                         // 435
      //                                                                                                               // 436
      // Returns:                                                                                                      // 437
      //    Lazy_function (Function): Function with debouncing applied.                                                // 438
      debounce : function (func, delay, immediate) {                                                                   // 439
        var timeout, result;                                                                                           // 440
        return function () {                                                                                           // 441
          var context = this, args = arguments;                                                                        // 442
          var later = function () {                                                                                    // 443
            timeout = null;                                                                                            // 444
            if (!immediate) result = func.apply(context, args);                                                        // 445
          };                                                                                                           // 446
          var callNow = immediate && !timeout;                                                                         // 447
          clearTimeout(timeout);                                                                                       // 448
          timeout = setTimeout(later, delay);                                                                          // 449
          if (callNow) result = func.apply(context, args);                                                             // 450
          return result;                                                                                               // 451
        };                                                                                                             // 452
      },                                                                                                               // 453
                                                                                                                       // 454
      // Description:                                                                                                  // 455
      //    Parses data-options attribute                                                                              // 456
      //                                                                                                               // 457
      // Arguments:                                                                                                    // 458
      //    El (jQuery Object): Element to be parsed.                                                                  // 459
      //                                                                                                               // 460
      // Returns:                                                                                                      // 461
      //    Options (Javascript Object): Contents of the element's data-options                                        // 462
      //    attribute.                                                                                                 // 463
      data_options : function (el) {                                                                                   // 464
        var opts = {}, ii, p, opts_arr,                                                                                // 465
            data_options = function (el) {                                                                             // 466
              var namespace = Foundation.global.namespace;                                                             // 467
                                                                                                                       // 468
              if (namespace.length > 0) {                                                                              // 469
                return el.data(namespace + '-options');                                                                // 470
              }                                                                                                        // 471
                                                                                                                       // 472
              return el.data('options');                                                                               // 473
            };                                                                                                         // 474
                                                                                                                       // 475
        var cached_options = data_options(el);                                                                         // 476
                                                                                                                       // 477
        if (typeof cached_options === 'object') {                                                                      // 478
          return cached_options;                                                                                       // 479
        }                                                                                                              // 480
                                                                                                                       // 481
        opts_arr = (cached_options || ':').split(';'),                                                                 // 482
        ii = opts_arr.length;                                                                                          // 483
                                                                                                                       // 484
        function isNumber (o) {                                                                                        // 485
          return ! isNaN (o-0) && o !== null && o !== "" && o !== false && o !== true;                                 // 486
        }                                                                                                              // 487
                                                                                                                       // 488
        function trim (str) {                                                                                          // 489
          if (typeof str === 'string') return $.trim(str);                                                             // 490
          return str;                                                                                                  // 491
        }                                                                                                              // 492
                                                                                                                       // 493
        while (ii--) {                                                                                                 // 494
          p = opts_arr[ii].split(':');                                                                                 // 495
                                                                                                                       // 496
          if (/true/i.test(p[1])) p[1] = true;                                                                         // 497
          if (/false/i.test(p[1])) p[1] = false;                                                                       // 498
          if (isNumber(p[1])) {                                                                                        // 499
            if (p[1].indexOf('.') === -1) {                                                                            // 500
              p[1] = parseInt(p[1], 10);                                                                               // 501
            } else {                                                                                                   // 502
              p[1] = parseFloat(p[1], 10);                                                                             // 503
            }                                                                                                          // 504
          }                                                                                                            // 505
                                                                                                                       // 506
          if (p.length === 2 && p[0].length > 0) {                                                                     // 507
            opts[trim(p[0])] = trim(p[1]);                                                                             // 508
          }                                                                                                            // 509
        }                                                                                                              // 510
                                                                                                                       // 511
        return opts;                                                                                                   // 512
      },                                                                                                               // 513
                                                                                                                       // 514
      // Description:                                                                                                  // 515
      //    Adds JS-recognizable media queries                                                                         // 516
      //                                                                                                               // 517
      // Arguments:                                                                                                    // 518
      //    Media (String): Key string for the media query to be stored as in                                          // 519
      //    Foundation.media_queries                                                                                   // 520
      //                                                                                                               // 521
      //    Class (String): Class name for the generated <meta> tag                                                    // 522
      register_media : function (media, media_class) {                                                                 // 523
        if(Foundation.media_queries[media] === undefined) {                                                            // 524
          $('head').append('<meta class="' + media_class + '">');                                                      // 525
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));                     // 526
        }                                                                                                              // 527
      },                                                                                                               // 528
                                                                                                                       // 529
      // Description:                                                                                                  // 530
      //    Add custom CSS within a JS-defined media query                                                             // 531
      //                                                                                                               // 532
      // Arguments:                                                                                                    // 533
      //    Rule (String): CSS rule to be appended to the document.                                                    // 534
      //                                                                                                               // 535
      //    Media (String): Optional media query string for the CSS rule to be                                         // 536
      //    nested under.                                                                                              // 537
      add_custom_rule : function (rule, media) {                                                                       // 538
        if (media === undefined) {                                                                                     // 539
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);                               // 540
        } else {                                                                                                       // 541
          var query = Foundation.media_queries[media];                                                                 // 542
                                                                                                                       // 543
          if (query !== undefined) {                                                                                   // 544
            Foundation.stylesheet.insertRule('@media ' +                                                               // 545
              Foundation.media_queries[media] + '{ ' + rule + ' }');                                                   // 546
          }                                                                                                            // 547
        }                                                                                                              // 548
      },                                                                                                               // 549
                                                                                                                       // 550
      // Description:                                                                                                  // 551
      //    Performs a callback function when an image is fully loaded                                                 // 552
      //                                                                                                               // 553
      // Arguments:                                                                                                    // 554
      //    Image (jQuery Object): Image(s) to check if loaded.                                                        // 555
      //                                                                                                               // 556
      //    Callback (Function): Fundation to execute when image is fully loaded.                                      // 557
      image_loaded : function (images, callback) {                                                                     // 558
        var self = this,                                                                                               // 559
            unloaded = images.length;                                                                                  // 560
                                                                                                                       // 561
        if (unloaded === 0) {                                                                                          // 562
          callback(images);                                                                                            // 563
        }                                                                                                              // 564
                                                                                                                       // 565
        images.each(function () {                                                                                      // 566
          single_image_loaded(self.S(this), function () {                                                              // 567
            unloaded -= 1;                                                                                             // 568
            if (unloaded === 0) {                                                                                      // 569
              callback(images);                                                                                        // 570
            }                                                                                                          // 571
          });                                                                                                          // 572
        });                                                                                                            // 573
      },                                                                                                               // 574
                                                                                                                       // 575
      // Description:                                                                                                  // 576
      //    Returns a random, alphanumeric string                                                                      // 577
      //                                                                                                               // 578
      // Arguments:                                                                                                    // 579
      //    Length (Integer): Length of string to be generated. Defaults to random                                     // 580
      //    integer.                                                                                                   // 581
      //                                                                                                               // 582
      // Returns:                                                                                                      // 583
      //    Rand (String): Pseudo-random, alphanumeric string.                                                         // 584
      random_str : function () {                                                                                       // 585
        if (!this.fidx) this.fidx = 0;                                                                                 // 586
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');                         // 587
                                                                                                                       // 588
        return this.prefix + (this.fidx++).toString(36);                                                               // 589
      }                                                                                                                // 590
    }                                                                                                                  // 591
  };                                                                                                                   // 592
                                                                                                                       // 593
  $.fn.foundation = function () {                                                                                      // 594
    var args = Array.prototype.slice.call(arguments, 0);                                                               // 595
                                                                                                                       // 596
    return this.each(function () {                                                                                     // 597
      Foundation.init.apply(Foundation, [this].concat(args));                                                          // 598
      return this;                                                                                                     // 599
    });                                                                                                                // 600
  };                                                                                                                   // 601
                                                                                                                       // 602
}(jQuery, this, this.document));                                                                                       // 603
                                                                                                                       // 604
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.abide.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.abide = {                                                                                            // 4
    name : 'abide',                                                                                                    // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      live_validate : true,                                                                                            // 10
      focus_on_invalid : true,                                                                                         // 11
      error_labels: true, // labels with a for="inputId" will recieve an `error` class                                 // 12
      timeout : 1000,                                                                                                  // 13
      patterns : {                                                                                                     // 14
        alpha: /^[a-zA-Z]+$/,                                                                                          // 15
        alpha_numeric : /^[a-zA-Z0-9]+$/,                                                                              // 16
        integer: /^\d+$/,                                                                                              // 17
        number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,                                                             // 18
                                                                                                                       // 19
        // amex, visa, diners                                                                                          // 20
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,                                                                                        // 22
                                                                                                                       // 23
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                                                                                       // 26
        url: /(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
        // abc.de                                                                                                      // 28
        domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,                                    // 29
                                                                                                                       // 30
        datetime: /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/,
        // YYYY-MM-DD                                                                                                  // 32
        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
        // HH:MM:SS                                                                                                    // 34
        time : /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/,                                                               // 35
        dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,                                                                    // 36
        // MM/DD/YYYY                                                                                                  // 37
        month_day_year : /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,                           // 38
                                                                                                                       // 39
        // #FFF or #FFFFFF                                                                                             // 40
        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/                                                                   // 41
      },                                                                                                               // 42
      validators : {                                                                                                   // 43
        equalTo: function(el, required, parent) {                                                                      // 44
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,              // 45
              to    = el.value,                                                                                        // 46
              valid = (from === to);                                                                                   // 47
                                                                                                                       // 48
          return valid;                                                                                                // 49
        }                                                                                                              // 50
      }                                                                                                                // 51
    },                                                                                                                 // 52
                                                                                                                       // 53
    timer : null,                                                                                                      // 54
                                                                                                                       // 55
    init : function (scope, method, options) {                                                                         // 56
      this.bindings(method, options);                                                                                  // 57
    },                                                                                                                 // 58
                                                                                                                       // 59
    events : function (scope) {                                                                                        // 60
      var self = this,                                                                                                 // 61
          form = self.S(scope).attr('novalidate', 'novalidate'),                                                       // 62
          settings = form.data(this.attr_name(true) + '-init');                                                        // 63
                                                                                                                       // 64
      this.invalid_attr = this.add_namespace('data-invalid');                                                          // 65
                                                                                                                       // 66
      form                                                                                                             // 67
        .off('.abide')                                                                                                 // 68
        .on('submit.fndtn.abide validate.fndtn.abide', function (e) {                                                  // 69
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));                                             // 70
          return self.validate(self.S(this).find('input, textarea, select').get(), e, is_ajax);                        // 71
        })                                                                                                             // 72
        .on('reset', function() {                                                                                      // 73
          return self.reset($(this));                                                                                  // 74
        })                                                                                                             // 75
        .find('input, textarea, select')                                                                               // 76
          .off('.abide')                                                                                               // 77
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {                                                    // 78
            self.validate([this], e);                                                                                  // 79
          })                                                                                                           // 80
          .on('keydown.fndtn.abide', function (e) {                                                                    // 81
            var settings = $(this).closest('form').data(self.attr_name(true) + '-init');                               // 82
            if (settings.live_validate === true) {                                                                     // 83
              clearTimeout(self.timer);                                                                                // 84
              self.timer = setTimeout(function () {                                                                    // 85
                self.validate([this], e);                                                                              // 86
              }.bind(this), settings.timeout);                                                                         // 87
            }                                                                                                          // 88
          });                                                                                                          // 89
    },                                                                                                                 // 90
                                                                                                                       // 91
    reset : function (form) {                                                                                          // 92
      form.removeAttr(this.invalid_attr);                                                                              // 93
      $(this.invalid_attr, form).removeAttr(this.invalid_attr);                                                        // 94
      $('.error', form).not('small').removeClass('error');                                                             // 95
    },                                                                                                                 // 96
                                                                                                                       // 97
    validate : function (els, e, is_ajax) {                                                                            // 98
      var validations = this.parse_patterns(els),                                                                      // 99
          validation_count = validations.length,                                                                       // 100
          form = this.S(els[0]).closest('form'),                                                                       // 101
          submit_event = /submit/.test(e.type);                                                                        // 102
                                                                                                                       // 103
      // Has to count up to make sure the focus gets applied to the top error                                          // 104
      for (var i=0; i < validation_count; i++) {                                                                       // 105
        if (!validations[i] && (submit_event || is_ajax)) {                                                            // 106
          if (this.settings.focus_on_invalid) els[i].focus();                                                          // 107
          form.trigger('invalid');                                                                                     // 108
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');                                                  // 109
          return false;                                                                                                // 110
        }                                                                                                              // 111
      }                                                                                                                // 112
                                                                                                                       // 113
      if (submit_event || is_ajax) {                                                                                   // 114
        form.trigger('valid');                                                                                         // 115
      }                                                                                                                // 116
                                                                                                                       // 117
      form.removeAttr(this.invalid_attr);                                                                              // 118
                                                                                                                       // 119
      if (is_ajax) return false;                                                                                       // 120
                                                                                                                       // 121
      return true;                                                                                                     // 122
    },                                                                                                                 // 123
                                                                                                                       // 124
    parse_patterns : function (els) {                                                                                  // 125
      var i = els.length,                                                                                              // 126
          el_patterns = [];                                                                                            // 127
                                                                                                                       // 128
      while (i--) {                                                                                                    // 129
        el_patterns.push(this.pattern(els[i]));                                                                        // 130
      }                                                                                                                // 131
                                                                                                                       // 132
      return this.check_validation_and_apply_styles(el_patterns);                                                      // 133
    },                                                                                                                 // 134
                                                                                                                       // 135
    pattern : function (el) {                                                                                          // 136
      var type = el.getAttribute('type'),                                                                              // 137
          required = typeof el.getAttribute('required') === 'string';                                                  // 138
                                                                                                                       // 139
      var pattern = el.getAttribute('pattern') || '';                                                                  // 140
                                                                                                                       // 141
      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {                                      // 142
        return [el, this.settings.patterns[pattern], required];                                                        // 143
      } else if (pattern.length > 0) {                                                                                 // 144
        return [el, new RegExp(pattern), required];                                                                    // 145
      }                                                                                                                // 146
                                                                                                                       // 147
      if (this.settings.patterns.hasOwnProperty(type)) {                                                               // 148
        return [el, this.settings.patterns[type], required];                                                           // 149
      }                                                                                                                // 150
                                                                                                                       // 151
      pattern = /.*/;                                                                                                  // 152
                                                                                                                       // 153
      return [el, pattern, required];                                                                                  // 154
    },                                                                                                                 // 155
                                                                                                                       // 156
    check_validation_and_apply_styles : function (el_patterns) {                                                       // 157
      var i = el_patterns.length,                                                                                      // 158
          validations = [];                                                                                            // 159
                                                                                                                       // 160
      while (i--) {                                                                                                    // 161
        var el = el_patterns[i][0],                                                                                    // 162
            required = el_patterns[i][2],                                                                              // 163
            value = el.value,                                                                                          // 164
            direct_parent = this.S(el).parent(),                                                                       // 165
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),                                   // 166
            is_radio = el.type === "radio",                                                                            // 167
            is_checkbox = el.type === "checkbox",                                                                      // 168
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),                                              // 169
            valid_length = (required) ? (el.value.length > 0) : true;                                                  // 170
                                                                                                                       // 171
        var parent, valid;                                                                                             // 172
                                                                                                                       // 173
        // support old way to do equalTo validations                                                                   // 174
        if(el.getAttribute(this.add_namespace('data-equalto'))) { validator = "equalTo" }                              // 175
                                                                                                                       // 176
        if (!direct_parent.is('label')) {                                                                              // 177
          parent = direct_parent;                                                                                      // 178
        } else {                                                                                                       // 179
          parent = direct_parent.parent();                                                                             // 180
        }                                                                                                              // 181
                                                                                                                       // 182
        if (is_radio && required) {                                                                                    // 183
          validations.push(this.valid_radio(el, required));                                                            // 184
        } else if (is_checkbox && required) {                                                                          // 185
          validations.push(this.valid_checkbox(el, required));                                                         // 186
        } else if (validator) {                                                                                        // 187
          valid = this.settings.validators[validator].apply(this, [el, required, parent])                              // 188
          validations.push(valid);                                                                                     // 189
                                                                                                                       // 190
          if (valid) {                                                                                                 // 191
            this.S(el).removeAttr(this.invalid_attr);                                                                  // 192
            parent.removeClass('error');                                                                               // 193
          } else {                                                                                                     // 194
            this.S(el).attr(this.invalid_attr, '');                                                                    // 195
            parent.addClass('error');                                                                                  // 196
          }                                                                                                            // 197
        } else {                                                                                                       // 198
                                                                                                                       // 199
          if (el_patterns[i][1].test(value) && valid_length ||                                                         // 200
            !required && el.value.length < 1 || $(el).attr('disabled')) {                                              // 201
            this.S(el).removeAttr(this.invalid_attr);                                                                  // 202
            parent.removeClass('error');                                                                               // 203
            if (label.length > 0 && this.settings.error_labels) label.removeClass('error');                            // 204
                                                                                                                       // 205
            validations.push(true);                                                                                    // 206
            $(el).triggerHandler('valid');                                                                             // 207
          } else {                                                                                                     // 208
            this.S(el).attr(this.invalid_attr, '');                                                                    // 209
            parent.addClass('error');                                                                                  // 210
            if (label.length > 0 && this.settings.error_labels) label.addClass('error');                               // 211
                                                                                                                       // 212
            validations.push(false);                                                                                   // 213
            $(el).triggerHandler('invalid');                                                                           // 214
          }                                                                                                            // 215
        }                                                                                                              // 216
      }                                                                                                                // 217
                                                                                                                       // 218
      return validations;                                                                                              // 219
    },                                                                                                                 // 220
                                                                                                                       // 221
    valid_checkbox : function(el, required) {                                                                          // 222
      var el = this.S(el),                                                                                             // 223
          valid = (el.is(':checked') || !required);                                                                    // 224
                                                                                                                       // 225
      if (valid) {                                                                                                     // 226
        el.removeAttr(this.invalid_attr).parent().removeClass('error');                                                // 227
      } else {                                                                                                         // 228
        el.attr(this.invalid_attr, '').parent().addClass('error');                                                     // 229
      }                                                                                                                // 230
                                                                                                                       // 231
      return valid;                                                                                                    // 232
    },                                                                                                                 // 233
                                                                                                                       // 234
    valid_radio : function (el, required) {                                                                            // 235
      var name = el.getAttribute('name'),                                                                              // 236
          group = document.getElementsByName(name),                                                                    // 237
          count = group.length,                                                                                        // 238
          valid = false;                                                                                               // 239
                                                                                                                       // 240
      // Has to count up to make sure the focus gets applied to the top error                                          // 241
      for (var i=0; i < count; i++) {                                                                                  // 242
        if (group[i].checked) valid = true;                                                                            // 243
      }                                                                                                                // 244
                                                                                                                       // 245
      // Has to count up to make sure the focus gets applied to the top error                                          // 246
      for (var i=0; i < count; i++) {                                                                                  // 247
        if (valid) {                                                                                                   // 248
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass('error');                                // 249
        } else {                                                                                                       // 250
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass('error');                                     // 251
        }                                                                                                              // 252
      }                                                                                                                // 253
                                                                                                                       // 254
      return valid;                                                                                                    // 255
    }                                                                                                                  // 256
  };                                                                                                                   // 257
}(jQuery, this, this.document));                                                                                       // 258
                                                                                                                       // 259
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.accordion.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.accordion = {                                                                                        // 4
    name : 'accordion',                                                                                                // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      active_class: 'active',                                                                                          // 10
      toggleable: true                                                                                                 // 11
    },                                                                                                                 // 12
                                                                                                                       // 13
    init : function (scope, method, options) {                                                                         // 14
      this.bindings(method, options);                                                                                  // 15
    },                                                                                                                 // 16
                                                                                                                       // 17
    events : function () {                                                                                             // 18
      var self = this;                                                                                                 // 19
      var S = this.S;                                                                                                  // 20
      S(this.scope)                                                                                                    // 21
      .off('.fndtn.accordion')                                                                                         // 22
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] dd > a', function (e) {                                 // 23
        var accordion = S(this).closest('[' + self.attr_name() + ']'),                                                 // 24
            target = S('#' + this.href.split('#')[1]),                                                                 // 25
            siblings = S('dd > .content', accordion),                                                                  // 26
            aunts = $('> dd', accordion),                                                                              // 27
            settings = accordion.data(self.attr_name(true) + '-init'),                                                 // 28
            active_content = S('dd > .content.' + settings.active_class, accordion),                                   // 29
            active_parent = S('dd.' + settings.active_class, accordion);                                               // 30
        e.preventDefault();                                                                                            // 31
                                                                                                                       // 32
        if (! S(this).closest('dl').is(accordion)) { return; }                                                         // 33
                                                                                                                       // 34
        if (active_content[0] == target[0] && settings.toggleable) {                                                   // 35
          active_parent.toggleClass(settings.active_class, false);                                                     // 36
          return target.toggleClass(settings.active_class, false);                                                     // 37
        }                                                                                                              // 38
                                                                                                                       // 39
        siblings.removeClass(settings.active_class);                                                                   // 40
        aunts.removeClass(settings.active_class);                                                                      // 41
        target.addClass(settings.active_class).parent().addClass(settings.active_class);                               // 42
      });                                                                                                              // 43
    },                                                                                                                 // 44
                                                                                                                       // 45
    off : function () {},                                                                                              // 46
                                                                                                                       // 47
    reflow : function () {}                                                                                            // 48
  };                                                                                                                   // 49
}(jQuery, this, this.document));                                                                                       // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.alert.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.alert = {                                                                                            // 4
    name : 'alert',                                                                                                    // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      animation: 'fadeOut',                                                                                            // 10
      speed: 300, // fade out speed                                                                                    // 11
      callback: function (){}                                                                                          // 12
    },                                                                                                                 // 13
                                                                                                                       // 14
    init : function (scope, method, options) {                                                                         // 15
      this.bindings(method, options);                                                                                  // 16
    },                                                                                                                 // 17
                                                                                                                       // 18
    events : function () {                                                                                             // 19
      var self = this,                                                                                                 // 20
          S = this.S;                                                                                                  // 21
                                                                                                                       // 22
      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] a.close', function (e) {         // 23
          var alertBox = S(this).closest('[' + self.attr_name() + ']'),                                                // 24
              settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;                               // 25
                                                                                                                       // 26
        e.preventDefault();                                                                                            // 27
        alertBox[settings.animation](settings.speed, function () {                                                     // 28
          S(this).trigger('close').remove();                                                                           // 29
          settings.callback();                                                                                         // 30
        });                                                                                                            // 31
      });                                                                                                              // 32
    },                                                                                                                 // 33
                                                                                                                       // 34
    reflow : function () {}                                                                                            // 35
  };                                                                                                                   // 36
}(jQuery, this, this.document));                                                                                       // 37
                                                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.clearing.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.clearing = {                                                                                         // 4
    name : 'clearing',                                                                                                 // 5
                                                                                                                       // 6
    version: '5.2.1',                                                                                                  // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      templates : {                                                                                                    // 10
        viewing : '<a href="#" class="clearing-close">&times;</a>' +                                                   // 11
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +                 // 13
          '<a href="#" class="clearing-main-next"><span></span></a></div>'                                             // 14
      },                                                                                                               // 15
                                                                                                                       // 16
      // comma delimited list of selectors that, on click, will close clearing,                                        // 17
      // add 'div.clearing-blackout, div.visible-img' to close on background click                                     // 18
      close_selectors : '.clearing-close',                                                                             // 19
                                                                                                                       // 20
      touch_label : '&larr;&nbsp;Swipe to Advance&nbsp;&rarr;',                                                        // 21
                                                                                                                       // 22
      // event initializers and locks                                                                                  // 23
      init : false,                                                                                                    // 24
      locked : false                                                                                                   // 25
    },                                                                                                                 // 26
                                                                                                                       // 27
    init : function (scope, method, options) {                                                                         // 28
      var self = this;                                                                                                 // 29
      Foundation.inherit(this, 'throttle image_loaded');                                                               // 30
                                                                                                                       // 31
      this.bindings(method, options);                                                                                  // 32
                                                                                                                       // 33
      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {                                                       // 34
        this.assemble(self.S('li', this.scope));                                                                       // 35
      } else {                                                                                                         // 36
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                            // 37
          self.assemble(self.S('li', this));                                                                           // 38
        });                                                                                                            // 39
      }                                                                                                                // 40
    },                                                                                                                 // 41
                                                                                                                       // 42
    events : function (scope) {                                                                                        // 43
      var self = this,                                                                                                 // 44
      S = self.S;                                                                                                      // 45
                                                                                                                       // 46
      if ($('.scroll-container').length > 0) {                                                                         // 47
        this.scope = $('.scroll-container');                                                                           // 48
      }                                                                                                                // 49
                                                                                                                       // 50
      S(this.scope)                                                                                                    // 51
        .off('.clearing')                                                                                              // 52
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li',                                                 // 53
          function (e, current, target) {                                                                              // 54
            var current = current || S(this),                                                                          // 55
                target = target || current,                                                                            // 56
                next = current.next('li'),                                                                             // 57
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),         // 58
                image = S(e.target);                                                                                   // 59
                                                                                                                       // 60
            e.preventDefault();                                                                                        // 61
                                                                                                                       // 62
            if (!settings) {                                                                                           // 63
              self.init();                                                                                             // 64
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 65
            }                                                                                                          // 66
                                                                                                                       // 67
            // if clearing is open and the current image is                                                            // 68
            // clicked, go to the next image in sequence                                                               // 69
            if (target.hasClass('visible') &&                                                                          // 70
              current[0] === target[0] &&                                                                              // 71
              next.length > 0 && self.is_open(current)) {                                                              // 72
              target = next;                                                                                           // 73
              image = S('img', target);                                                                                // 74
            }                                                                                                          // 75
                                                                                                                       // 76
            // set current and target to the clicked li if not otherwise defined.                                      // 77
            self.open(image, current, target);                                                                         // 78
            self.update_paddles(target);                                                                               // 79
          })                                                                                                           // 80
                                                                                                                       // 81
        .on('click.fndtn.clearing', '.clearing-main-next',                                                             // 82
          function (e) { self.nav(e, 'next') })                                                                        // 83
        .on('click.fndtn.clearing', '.clearing-main-prev',                                                             // 84
          function (e) { self.nav(e, 'prev') })                                                                        // 85
        .on('click.fndtn.clearing', this.settings.close_selectors,                                                     // 86
          function (e) { Foundation.libs.clearing.close(e, this) });                                                   // 87
                                                                                                                       // 88
      $(document).on('keydown.fndtn.clearing',                                                                         // 89
          function (e) { self.keydown(e) });                                                                           // 90
                                                                                                                       // 91
      S(window).off('.clearing').on('resize.fndtn.clearing',                                                           // 92
        function () { self.resize() });                                                                                // 93
                                                                                                                       // 94
      this.swipe_events(scope);                                                                                        // 95
    },                                                                                                                 // 96
                                                                                                                       // 97
    swipe_events : function (scope) {                                                                                  // 98
      var self = this,                                                                                                 // 99
      S = self.S;                                                                                                      // 100
                                                                                                                       // 101
      S(this.scope)                                                                                                    // 102
        .on('touchstart.fndtn.clearing', '.visible-img', function(e) {                                                 // 103
          if (!e.touches) { e = e.originalEvent; }                                                                     // 104
          var data = {                                                                                                 // 105
                start_page_x: e.touches[0].pageX,                                                                      // 106
                start_page_y: e.touches[0].pageY,                                                                      // 107
                start_time: (new Date()).getTime(),                                                                    // 108
                delta_x: 0,                                                                                            // 109
                is_scrolling: undefined                                                                                // 110
              };                                                                                                       // 111
                                                                                                                       // 112
          S(this).data('swipe-transition', data);                                                                      // 113
          e.stopPropagation();                                                                                         // 114
        })                                                                                                             // 115
        .on('touchmove.fndtn.clearing', '.visible-img', function(e) {                                                  // 116
          if (!e.touches) { e = e.originalEvent; }                                                                     // 117
          // Ignore pinch/zoom events                                                                                  // 118
          if(e.touches.length > 1 || e.scale && e.scale !== 1) return;                                                 // 119
                                                                                                                       // 120
          var data = S(this).data('swipe-transition');                                                                 // 121
                                                                                                                       // 122
          if (typeof data === 'undefined') {                                                                           // 123
            data = {};                                                                                                 // 124
          }                                                                                                            // 125
                                                                                                                       // 126
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 127
                                                                                                                       // 128
          if ( typeof data.is_scrolling === 'undefined') {                                                             // 129
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 131
                                                                                                                       // 132
          if (!data.is_scrolling && !data.active) {                                                                    // 133
            e.preventDefault();                                                                                        // 134
            var direction = (data.delta_x < 0) ? 'next' : 'prev';                                                      // 135
            data.active = true;                                                                                        // 136
            self.nav(e, direction);                                                                                    // 137
          }                                                                                                            // 138
        })                                                                                                             // 139
        .on('touchend.fndtn.clearing', '.visible-img', function(e) {                                                   // 140
          S(this).data('swipe-transition', {});                                                                        // 141
          e.stopPropagation();                                                                                         // 142
        });                                                                                                            // 143
    },                                                                                                                 // 144
                                                                                                                       // 145
    assemble : function ($li) {                                                                                        // 146
      var $el = $li.parent();                                                                                          // 147
                                                                                                                       // 148
      if ($el.parent().hasClass('carousel')) return;                                                                   // 149
      $el.after('<div id="foundationClearingHolder"></div>');                                                          // 150
                                                                                                                       // 151
      var holder = this.S('#foundationClearingHolder'),                                                                // 152
          settings = $el.data(this.attr_name(true) + '-init'),                                                         // 153
          grid = $el.detach(),                                                                                         // 154
          data = {                                                                                                     // 155
            grid: '<div class="carousel">' + grid[0].outerHTML + '</div>',                                             // 156
            viewing: settings.templates.viewing                                                                        // 157
          },                                                                                                           // 158
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +                                           // 159
            data.grid + '</div></div>',                                                                                // 160
          touch_label = this.settings.touch_label;                                                                     // 161
                                                                                                                       // 162
      if (Modernizr.touch) {                                                                                           // 163
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();                                    // 164
      }                                                                                                                // 165
                                                                                                                       // 166
      holder.after(wrapper).remove();                                                                                  // 167
    },                                                                                                                 // 168
                                                                                                                       // 169
    open : function ($image, current, target) {                                                                        // 170
      var self = this,                                                                                                 // 171
          body = $(document.body),                                                                                     // 172
          root = target.closest('.clearing-assembled'),                                                                // 173
          container = $('div', root).first(),                                                                          // 174
          visible_image = $('.visible-img', container),                                                                // 175
          image = $('img', visible_image).not($image),                                                                 // 176
          label = $('.clearing-touch-label', '.clearing-blackout'),                                                    // 177
          error = false;                                                                                               // 178
                                                                                                                       // 179
      image.error(function () {                                                                                        // 180
        error = true;                                                                                                  // 181
      });                                                                                                              // 182
                                                                                                                       // 183
      function startLoad() {                                                                                           // 184
        setTimeout(function () {                                                                                       // 185
          this.image_loaded(image, function () {                                                                       // 186
            if (image.outerWidth() === 1 && !error) {                                                                  // 187
              startLoad.call(this);                                                                                    // 188
            } else {                                                                                                   // 189
              cb.call(this, image);                                                                                    // 190
            }                                                                                                          // 191
          }.bind(this));                                                                                               // 192
        }.bind(this), 50);                                                                                             // 193
      }                                                                                                                // 194
                                                                                                                       // 195
      function cb (image) {                                                                                            // 196
        var $image = $(image);                                                                                         // 197
        image.css('visibility', 'visible');                                                                            // 198
        // toggle the gallery                                                                                          // 199
        body.css('overflow', 'hidden');                                                                                // 200
        root.addClass('clearing-blackout');                                                                            // 201
        container.addClass('clearing-container');                                                                      // 202
        visible_image.show();                                                                                          // 203
        this.fix_height(target)                                                                                        // 204
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))                                  // 205
          .center_and_label(image, label)                                                                              // 206
          .shift(current, target, function () {                                                                        // 207
            target.siblings().removeClass('visible');                                                                  // 208
            target.addClass('visible');                                                                                // 209
          });                                                                                                          // 210
      }                                                                                                                // 211
                                                                                                                       // 212
      if (!this.locked()) {                                                                                            // 213
        // set the image to the selected thumbnail                                                                     // 214
        image                                                                                                          // 215
          .attr('src', this.load($image))                                                                              // 216
          .css('visibility', 'hidden');                                                                                // 217
                                                                                                                       // 218
        startLoad.call(this);                                                                                          // 219
                                                                                                                       // 220
      }                                                                                                                // 221
    },                                                                                                                 // 222
                                                                                                                       // 223
    close : function (e, el) {                                                                                         // 224
      e.preventDefault();                                                                                              // 225
                                                                                                                       // 226
      var root = (function (target) {                                                                                  // 227
            if (/blackout/.test(target.selector)) {                                                                    // 228
              return target;                                                                                           // 229
            } else {                                                                                                   // 230
              return target.closest('.clearing-blackout');                                                             // 231
            }                                                                                                          // 232
          }($(el))),                                                                                                   // 233
          body = $(document.body), container, visible_image;                                                           // 234
                                                                                                                       // 235
      if (el === e.target && root) {                                                                                   // 236
        body.css('overflow', '');                                                                                      // 237
        container = $('div', root).first();                                                                            // 238
        visible_image = $('.visible-img', container);                                                                  // 239
        this.settings.prev_index = 0;                                                                                  // 240
        $('ul[' + this.attr_name() + ']', root)                                                                        // 241
          .attr('style', '').closest('.clearing-blackout')                                                             // 242
          .removeClass('clearing-blackout');                                                                           // 243
        container.removeClass('clearing-container');                                                                   // 244
        visible_image.hide();                                                                                          // 245
      }                                                                                                                // 246
                                                                                                                       // 247
      return false;                                                                                                    // 248
    },                                                                                                                 // 249
                                                                                                                       // 250
    is_open : function (current) {                                                                                     // 251
      return current.parent().prop('style').length > 0;                                                                // 252
    },                                                                                                                 // 253
                                                                                                                       // 254
    keydown : function (e) {                                                                                           // 255
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),                                             // 256
          NEXT_KEY = this.rtl ? 37 : 39,                                                                               // 257
          PREV_KEY = this.rtl ? 39 : 37,                                                                               // 258
          ESC_KEY = 27;                                                                                                // 259
                                                                                                                       // 260
      if (e.which === NEXT_KEY) this.go(clearing, 'next');                                                             // 261
      if (e.which === PREV_KEY) this.go(clearing, 'prev');                                                             // 262
      if (e.which === ESC_KEY) this.S('a.clearing-close').trigger('click');                                            // 263
    },                                                                                                                 // 264
                                                                                                                       // 265
    nav : function (e, direction) {                                                                                    // 266
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');                                          // 267
                                                                                                                       // 268
      e.preventDefault();                                                                                              // 269
      this.go(clearing, direction);                                                                                    // 270
    },                                                                                                                 // 271
                                                                                                                       // 272
    resize : function () {                                                                                             // 273
      var image = $('img', '.clearing-blackout .visible-img'),                                                         // 274
          label = $('.clearing-touch-label', '.clearing-blackout');                                                    // 275
                                                                                                                       // 276
      if (image.length) {                                                                                              // 277
        this.center_and_label(image, label);                                                                           // 278
      }                                                                                                                // 279
    },                                                                                                                 // 280
                                                                                                                       // 281
    // visual adjustments                                                                                              // 282
    fix_height : function (target) {                                                                                   // 283
      var lis = target.parent().children(),                                                                            // 284
          self = this;                                                                                                 // 285
                                                                                                                       // 286
      lis.each(function () {                                                                                           // 287
          var li = self.S(this),                                                                                       // 288
              image = li.find('img');                                                                                  // 289
                                                                                                                       // 290
          if (li.height() > image.outerHeight()) {                                                                     // 291
            li.addClass('fix-height');                                                                                 // 292
          }                                                                                                            // 293
        })                                                                                                             // 294
        .closest('ul')                                                                                                 // 295
        .width(lis.length * 100 + '%');                                                                                // 296
                                                                                                                       // 297
      return this;                                                                                                     // 298
    },                                                                                                                 // 299
                                                                                                                       // 300
    update_paddles : function (target) {                                                                               // 301
      var visible_image = target                                                                                       // 302
        .closest('.carousel')                                                                                          // 303
        .siblings('.visible-img');                                                                                     // 304
                                                                                                                       // 305
      if (target.next().length > 0) {                                                                                  // 306
        this.S('.clearing-main-next', visible_image)                                                                   // 307
          .removeClass('disabled');                                                                                    // 308
      } else {                                                                                                         // 309
        this.S('.clearing-main-next', visible_image)                                                                   // 310
          .addClass('disabled');                                                                                       // 311
      }                                                                                                                // 312
                                                                                                                       // 313
      if (target.prev().length > 0) {                                                                                  // 314
        this.S('.clearing-main-prev', visible_image)                                                                   // 315
          .removeClass('disabled');                                                                                    // 316
      } else {                                                                                                         // 317
        this.S('.clearing-main-prev', visible_image)                                                                   // 318
          .addClass('disabled');                                                                                       // 319
      }                                                                                                                // 320
    },                                                                                                                 // 321
                                                                                                                       // 322
    center_and_label : function (target, label) {                                                                      // 323
      if (!this.rtl) {                                                                                                 // 324
        target.css({                                                                                                   // 325
          marginLeft : -(target.outerWidth() / 2),                                                                     // 326
          marginTop : -(target.outerHeight() / 2)                                                                      // 327
        });                                                                                                            // 328
                                                                                                                       // 329
        if (label.length > 0) {                                                                                        // 330
          label.css({                                                                                                  // 331
            marginLeft : -(label.outerWidth() / 2),                                                                    // 332
            marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10                                             // 333
          });                                                                                                          // 334
        }                                                                                                              // 335
      } else {                                                                                                         // 336
        target.css({                                                                                                   // 337
          marginRight : -(target.outerWidth() / 2),                                                                    // 338
          marginTop : -(target.outerHeight() / 2),                                                                     // 339
          left: 'auto',                                                                                                // 340
          right: '50%'                                                                                                 // 341
        });                                                                                                            // 342
                                                                                                                       // 343
        if (label.length > 0) {                                                                                        // 344
          label.css({                                                                                                  // 345
            marginRight : -(label.outerWidth() / 2),                                                                   // 346
            marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,                                            // 347
            left: 'auto',                                                                                              // 348
            right: '50%'                                                                                               // 349
          });                                                                                                          // 350
        }                                                                                                              // 351
      }                                                                                                                // 352
      return this;                                                                                                     // 353
    },                                                                                                                 // 354
                                                                                                                       // 355
    // image loading and preloading                                                                                    // 356
                                                                                                                       // 357
    load : function ($image) {                                                                                         // 358
      if ($image[0].nodeName === "A") {                                                                                // 359
        var href = $image.attr('href');                                                                                // 360
      } else {                                                                                                         // 361
        var href = $image.parent().attr('href');                                                                       // 362
      }                                                                                                                // 363
                                                                                                                       // 364
      this.preload($image);                                                                                            // 365
                                                                                                                       // 366
      if (href) return href;                                                                                           // 367
      return $image.attr('src');                                                                                       // 368
    },                                                                                                                 // 369
                                                                                                                       // 370
    preload : function ($image) {                                                                                      // 371
      this                                                                                                             // 372
        .img($image.closest('li').next())                                                                              // 373
        .img($image.closest('li').prev());                                                                             // 374
    },                                                                                                                 // 375
                                                                                                                       // 376
    img : function (img) {                                                                                             // 377
      if (img.length) {                                                                                                // 378
        var new_img = new Image(),                                                                                     // 379
            new_a = this.S('a', img);                                                                                  // 380
                                                                                                                       // 381
        if (new_a.length) {                                                                                            // 382
          new_img.src = new_a.attr('href');                                                                            // 383
        } else {                                                                                                       // 384
          new_img.src = this.S('img', img).attr('src');                                                                // 385
        }                                                                                                              // 386
      }                                                                                                                // 387
      return this;                                                                                                     // 388
    },                                                                                                                 // 389
                                                                                                                       // 390
    // image caption                                                                                                   // 391
                                                                                                                       // 392
    caption : function (container, $image) {                                                                           // 393
      var caption = $image.attr('data-caption');                                                                       // 394
                                                                                                                       // 395
      if (caption) {                                                                                                   // 396
        container                                                                                                      // 397
          .html(caption)                                                                                               // 398
          .show();                                                                                                     // 399
      } else {                                                                                                         // 400
        container                                                                                                      // 401
          .text('')                                                                                                    // 402
          .hide();                                                                                                     // 403
      }                                                                                                                // 404
      return this;                                                                                                     // 405
    },                                                                                                                 // 406
                                                                                                                       // 407
    // directional methods                                                                                             // 408
                                                                                                                       // 409
    go : function ($ul, direction) {                                                                                   // 410
      var current = this.S('.visible', $ul),                                                                           // 411
          target = current[direction]();                                                                               // 412
                                                                                                                       // 413
      if (target.length) {                                                                                             // 414
        this.S('img', target)                                                                                          // 415
          .trigger('click', [current, target]);                                                                        // 416
      }                                                                                                                // 417
    },                                                                                                                 // 418
                                                                                                                       // 419
    shift : function (current, target, callback) {                                                                     // 420
      var clearing = target.parent(),                                                                                  // 421
          old_index = this.settings.prev_index || target.index(),                                                      // 422
          direction = this.direction(clearing, current, target),                                                       // 423
          dir = this.rtl ? 'right' : 'left',                                                                           // 424
          left = parseInt(clearing.css('left'), 10),                                                                   // 425
          width = target.outerWidth(),                                                                                 // 426
          skip_shift;                                                                                                  // 427
                                                                                                                       // 428
      var dir_obj = {};                                                                                                // 429
                                                                                                                       // 430
      // we use jQuery animate instead of CSS transitions because we                                                   // 431
      // need a callback to unlock the next animation                                                                  // 432
      // needs support for RTL **                                                                                      // 433
      if (target.index() !== old_index && !/skip/.test(direction)){                                                    // 434
        if (/left/.test(direction)) {                                                                                  // 435
          this.lock();                                                                                                 // 436
          dir_obj[dir] = left + width;                                                                                 // 437
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 438
        } else if (/right/.test(direction)) {                                                                          // 439
          this.lock();                                                                                                 // 440
          dir_obj[dir] = left - width;                                                                                 // 441
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 442
        }                                                                                                              // 443
      } else if (/skip/.test(direction)) {                                                                             // 444
        // the target image is not adjacent to the current image, so                                                   // 445
        // do we scroll right or not                                                                                   // 446
        skip_shift = target.index() - this.settings.up_count;                                                          // 447
        this.lock();                                                                                                   // 448
                                                                                                                       // 449
        if (skip_shift > 0) {                                                                                          // 450
          dir_obj[dir] = -(skip_shift * width);                                                                        // 451
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 452
        } else {                                                                                                       // 453
          dir_obj[dir] = 0;                                                                                            // 454
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 455
        }                                                                                                              // 456
      }                                                                                                                // 457
                                                                                                                       // 458
      callback();                                                                                                      // 459
    },                                                                                                                 // 460
                                                                                                                       // 461
    direction : function ($el, current, target) {                                                                      // 462
      var lis = this.S('li', $el),                                                                                     // 463
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),                                                        // 464
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,                            // 465
          target_index = lis.index(target),                                                                            // 466
          response;                                                                                                    // 467
                                                                                                                       // 468
      this.settings.up_count = up_count;                                                                               // 469
                                                                                                                       // 470
      if (this.adjacent(this.settings.prev_index, target_index)) {                                                     // 471
        if ((target_index > up_count)                                                                                  // 472
          && target_index > this.settings.prev_index) {                                                                // 473
          response = 'right';                                                                                          // 474
        } else if ((target_index > up_count - 1)                                                                       // 475
          && target_index <= this.settings.prev_index) {                                                               // 476
          response = 'left';                                                                                           // 477
        } else {                                                                                                       // 478
          response = false;                                                                                            // 479
        }                                                                                                              // 480
      } else {                                                                                                         // 481
        response = 'skip';                                                                                             // 482
      }                                                                                                                // 483
                                                                                                                       // 484
      this.settings.prev_index = target_index;                                                                         // 485
                                                                                                                       // 486
      return response;                                                                                                 // 487
    },                                                                                                                 // 488
                                                                                                                       // 489
    adjacent : function (current_index, target_index) {                                                                // 490
      for (var i = target_index + 1; i >= target_index - 1; i--) {                                                     // 491
        if (i === current_index) return true;                                                                          // 492
      }                                                                                                                // 493
      return false;                                                                                                    // 494
    },                                                                                                                 // 495
                                                                                                                       // 496
    // lock management                                                                                                 // 497
                                                                                                                       // 498
    lock : function () {                                                                                               // 499
      this.settings.locked = true;                                                                                     // 500
    },                                                                                                                 // 501
                                                                                                                       // 502
    unlock : function () {                                                                                             // 503
      this.settings.locked = false;                                                                                    // 504
    },                                                                                                                 // 505
                                                                                                                       // 506
    locked : function () {                                                                                             // 507
      return this.settings.locked;                                                                                     // 508
    },                                                                                                                 // 509
                                                                                                                       // 510
    off : function () {                                                                                                // 511
      this.S(this.scope).off('.fndtn.clearing');                                                                       // 512
      this.S(window).off('.fndtn.clearing');                                                                           // 513
    },                                                                                                                 // 514
                                                                                                                       // 515
    reflow : function () {                                                                                             // 516
      this.init();                                                                                                     // 517
    }                                                                                                                  // 518
  };                                                                                                                   // 519
                                                                                                                       // 520
}(jQuery, this, this.document));                                                                                       // 521
                                                                                                                       // 522
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.dropdown.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.dropdown = {                                                                                         // 4
    name : 'dropdown',                                                                                                 // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      active_class: 'open',                                                                                            // 10
      align: 'bottom',                                                                                                 // 11
      is_hover: false,                                                                                                 // 12
      opened: function(){},                                                                                            // 13
      closed: function(){}                                                                                             // 14
    },                                                                                                                 // 15
                                                                                                                       // 16
    init : function (scope, method, options) {                                                                         // 17
      Foundation.inherit(this, 'throttle');                                                                            // 18
                                                                                                                       // 19
      this.bindings(method, options);                                                                                  // 20
    },                                                                                                                 // 21
                                                                                                                       // 22
    events : function (scope) {                                                                                        // 23
      var self = this,                                                                                                 // 24
          S = self.S;                                                                                                  // 25
                                                                                                                       // 26
      S(this.scope)                                                                                                    // 27
        .off('.dropdown')                                                                                              // 28
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {                                       // 29
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;                                // 30
          e.preventDefault();                                                                                          // 31
          if (!settings.is_hover || Modernizr.touch) self.toggle(S(this));                                             // 32
        })                                                                                                             // 33
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);                                                                                         // 35
          clearTimeout(self.timeout);                                                                                  // 36
                                                                                                                       // 37
          if ($this.data(self.data_attr())) {                                                                          // 38
            var dropdown = S('#' + $this.data(self.data_attr())),                                                      // 39
                target = $this;                                                                                        // 40
          } else {                                                                                                     // 41
            var dropdown = $this;                                                                                      // 42
                target = S("[" + self.attr_name() + "='" + dropdown.attr('id') + "']");                                // 43
          }                                                                                                            // 44
                                                                                                                       // 45
          var settings = target.data(self.attr_name(true) + '-init') || self.settings;                                 // 46
                                                                                                                       // 47
          if(S(e.target).data(self.data_attr()) && settings.is_hover) {                                                // 48
            self.closeall.call(self);                                                                                  // 49
          }                                                                                                            // 50
                                                                                                                       // 51
          if (settings.is_hover) self.open.apply(self, [dropdown, target]);                                            // 52
        })                                                                                                             // 53
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);                                                                                         // 55
          self.timeout = setTimeout(function () {                                                                      // 56
            if ($this.data(self.data_attr())) {                                                                        // 57
              var settings = $this.data(self.data_attr(true) + '-init') || self.settings;                              // 58
              if (settings.is_hover) self.close.call(self, S('#' + $this.data(self.data_attr())));                     // 59
            } else {                                                                                                   // 60
              var target = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),                               // 61
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;                             // 62
              if (settings.is_hover) self.close.call(self, $this);                                                     // 63
            }                                                                                                          // 64
          }.bind(this), 150);                                                                                          // 65
        })                                                                                                             // 66
        .on('click.fndtn.dropdown', function (e) {                                                                     // 67
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');                                      // 68
                                                                                                                       // 69
          if (S(e.target).data(self.data_attr()) || S(e.target).parent().data(self.data_attr())) {                     // 70
            return;                                                                                                    // 71
          }                                                                                                            // 72
          if (!(S(e.target).data('revealId')) &&                                                                       // 73
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||                             // 74
              $.contains(parent.first()[0], e.target)))) {                                                             // 75
            e.stopPropagation();                                                                                       // 76
            return;                                                                                                    // 77
          }                                                                                                            // 78
                                                                                                                       // 79
          self.close.call(self, S('[' + self.attr_name() + '-content]'));                                              // 80
        })                                                                                                             // 81
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 82
            self.settings.opened.call(this);                                                                           // 83
        })                                                                                                             // 84
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 85
            self.settings.closed.call(this);                                                                           // 86
        });                                                                                                            // 87
                                                                                                                       // 88
      S(window)                                                                                                        // 89
        .off('.dropdown')                                                                                              // 90
        .on('resize.fndtn.dropdown', self.throttle(function () {                                                       // 91
          self.resize.call(self);                                                                                      // 92
        }, 50));                                                                                                       // 93
                                                                                                                       // 94
      this.resize();                                                                                                   // 95
    },                                                                                                                 // 96
                                                                                                                       // 97
    close: function (dropdown) {                                                                                       // 98
      var self = this;                                                                                                 // 99
      dropdown.each(function () {                                                                                      // 100
        if (self.S(this).hasClass(self.settings.active_class)) {                                                       // 101
          self.S(this)                                                                                                 // 102
            .css(Foundation.rtl ? 'right':'left', '-99999px')                                                          // 103
            .removeClass(self.settings.active_class);                                                                  // 104
                                                                                                                       // 105
          self.S(this).trigger('closed', [dropdown]);                                                                  // 106
        }                                                                                                              // 107
      });                                                                                                              // 108
    },                                                                                                                 // 109
                                                                                                                       // 110
    closeall: function() {                                                                                             // 111
      var self = this;                                                                                                 // 112
      $.each(self.S('[' + this.attr_name() + '-content]'), function() {                                                // 113
        self.close.call(self, self.S(this))                                                                            // 114
      });                                                                                                              // 115
    },                                                                                                                 // 116
                                                                                                                       // 117
    open: function (dropdown, target) {                                                                                // 118
        this                                                                                                           // 119
          .css(dropdown                                                                                                // 120
            .addClass(this.settings.active_class), target);                                                            // 121
        dropdown.trigger('opened', [dropdown, target]);                                                                // 122
    },                                                                                                                 // 123
                                                                                                                       // 124
    data_attr: function () {                                                                                           // 125
      if (this.namespace.length > 0) {                                                                                 // 126
        return this.namespace + '-' + this.name;                                                                       // 127
      }                                                                                                                // 128
                                                                                                                       // 129
      return this.name;                                                                                                // 130
    },                                                                                                                 // 131
                                                                                                                       // 132
    toggle : function (target) {                                                                                       // 133
      var dropdown = this.S('#' + target.data(this.data_attr()));                                                      // 134
      if (dropdown.length === 0) {                                                                                     // 135
        // No dropdown found, not continuing                                                                           // 136
        return;                                                                                                        // 137
      }                                                                                                                // 138
                                                                                                                       // 139
      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));                               // 140
                                                                                                                       // 141
      if (dropdown.hasClass(this.settings.active_class)) {                                                             // 142
        this.close.call(this, dropdown);                                                                               // 143
      } else {                                                                                                         // 144
        this.close.call(this, this.S('[' + this.attr_name() + '-content]'))                                            // 145
        this.open.call(this, dropdown, target);                                                                        // 146
      }                                                                                                                // 147
    },                                                                                                                 // 148
                                                                                                                       // 149
    resize : function () {                                                                                             // 150
      var dropdown = this.S('[' + this.attr_name() + '-content].open'),                                                // 151
          target = this.S("[" + this.attr_name() + "='" + dropdown.attr('id') + "']");                                 // 152
                                                                                                                       // 153
      if (dropdown.length && target.length) {                                                                          // 154
        this.css(dropdown, target);                                                                                    // 155
      }                                                                                                                // 156
    },                                                                                                                 // 157
                                                                                                                       // 158
    css : function (dropdown, target) {                                                                                // 159
      this.clear_idx();                                                                                                // 160
                                                                                                                       // 161
      if (this.small()) {                                                                                              // 162
        var p = this.dirs.bottom.call(dropdown, target);                                                               // 163
                                                                                                                       // 164
        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({                                  // 165
          position : 'absolute',                                                                                       // 166
          width: '95%',                                                                                                // 167
          'max-width': 'none',                                                                                         // 168
          top: p.top                                                                                                   // 169
        });                                                                                                            // 170
                                                                                                                       // 171
        dropdown.css(Foundation.rtl ? 'right':'left', '2.5%');                                                         // 172
      } else {                                                                                                         // 173
        var settings = target.data(this.attr_name(true) + '-init') || this.settings;                                   // 174
                                                                                                                       // 175
        this.style(dropdown, target, settings);                                                                        // 176
      }                                                                                                                // 177
                                                                                                                       // 178
      return dropdown;                                                                                                 // 179
    },                                                                                                                 // 180
                                                                                                                       // 181
    style : function (dropdown, target, settings) {                                                                    // 182
      var css = $.extend({position: 'absolute'},                                                                       // 183
        this.dirs[settings.align].call(dropdown, target, settings));                                                   // 184
                                                                                                                       // 185
      dropdown.attr('style', '').css(css);                                                                             // 186
    },                                                                                                                 // 187
                                                                                                                       // 188
    // return CSS property object                                                                                      // 189
    // `this` is the dropdown                                                                                          // 190
    dirs : {                                                                                                           // 191
      // Calculate target offset                                                                                       // 192
      _base : function (t) {                                                                                           // 193
        var o_p = this.offsetParent(),                                                                                 // 194
            o = o_p.offset(),                                                                                          // 195
            p = t.offset();                                                                                            // 196
                                                                                                                       // 197
        p.top -= o.top;                                                                                                // 198
        p.left -= o.left;                                                                                              // 199
                                                                                                                       // 200
        return p;                                                                                                      // 201
      },                                                                                                               // 202
      top: function (t, s) {                                                                                           // 203
        var self = Foundation.libs.dropdown,                                                                           // 204
            p = self.dirs._base.call(this, t),                                                                         // 205
            pip_offset_base = (t.outerWidth() / 2) - 8;                                                                // 206
                                                                                                                       // 207
        this.addClass('drop-top');                                                                                     // 208
                                                                                                                       // 209
        if (t.outerWidth() < this.outerWidth() || self.small()) {                                                      // 210
          self.adjust_pip(pip_offset_base, p);                                                                         // 211
        }                                                                                                              // 212
                                                                                                                       // 213
        if (Foundation.rtl) {                                                                                          // 214
          return {left: p.left - this.outerWidth() + t.outerWidth(),                                                   // 215
            top: p.top - this.outerHeight()};                                                                          // 216
        }                                                                                                              // 217
                                                                                                                       // 218
        return {left: p.left, top: p.top - this.outerHeight()};                                                        // 219
      },                                                                                                               // 220
      bottom: function (t, s) {                                                                                        // 221
        var self = Foundation.libs.dropdown,                                                                           // 222
            p = self.dirs._base.call(this, t),                                                                         // 223
            pip_offset_base = (t.outerWidth() / 2) - 8;                                                                // 224
                                                                                                                       // 225
        if (t.outerWidth() < this.outerWidth() || self.small()) {                                                      // 226
          self.adjust_pip(pip_offset_base, p);                                                                         // 227
        }                                                                                                              // 228
                                                                                                                       // 229
        if (self.rtl) {                                                                                                // 230
          return {left: p.left - this.outerWidth() + t.outerWidth(), top: p.top + t.outerHeight()};                    // 231
        }                                                                                                              // 232
                                                                                                                       // 233
        return {left: p.left, top: p.top + t.outerHeight()};                                                           // 234
      },                                                                                                               // 235
      left: function (t, s) {                                                                                          // 236
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 237
                                                                                                                       // 238
        this.addClass('drop-left');                                                                                    // 239
                                                                                                                       // 240
        return {left: p.left - this.outerWidth(), top: p.top};                                                         // 241
      },                                                                                                               // 242
      right: function (t, s) {                                                                                         // 243
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 244
                                                                                                                       // 245
        this.addClass('drop-right');                                                                                   // 246
                                                                                                                       // 247
        return {left: p.left + t.outerWidth(), top: p.top};                                                            // 248
      }                                                                                                                // 249
    },                                                                                                                 // 250
                                                                                                                       // 251
    // Insert rule to style psuedo elements                                                                            // 252
    adjust_pip : function (pip_offset_base, p) {                                                                       // 253
      var sheet = Foundation.stylesheet;                                                                               // 254
                                                                                                                       // 255
      if (this.small()) {                                                                                              // 256
        pip_offset_base += p.left - 8;                                                                                 // 257
      }                                                                                                                // 258
                                                                                                                       // 259
      this.rule_idx = sheet.cssRules.length;                                                                           // 260
                                                                                                                       // 261
      var sel_before = '.f-dropdown.open:before',                                                                      // 262
          sel_after  = '.f-dropdown.open:after',                                                                       // 263
          css_before = 'left: ' + pip_offset_base + 'px;',                                                             // 264
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                       // 265
                                                                                                                       // 266
      if (sheet.insertRule) {                                                                                          // 267
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);                                 // 268
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);                               // 269
      } else {                                                                                                         // 270
        sheet.addRule(sel_before, css_before, this.rule_idx);                                                          // 271
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);                                                        // 272
      }                                                                                                                // 273
    },                                                                                                                 // 274
                                                                                                                       // 275
    // Remove old dropdown rule index                                                                                  // 276
    clear_idx : function () {                                                                                          // 277
      var sheet = Foundation.stylesheet;                                                                               // 278
                                                                                                                       // 279
      if (this.rule_idx) {                                                                                             // 280
        sheet.deleteRule(this.rule_idx);                                                                               // 281
        sheet.deleteRule(this.rule_idx);                                                                               // 282
        delete this.rule_idx;                                                                                          // 283
      }                                                                                                                // 284
    },                                                                                                                 // 285
                                                                                                                       // 286
    small : function () {                                                                                              // 287
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 288
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 289
    },                                                                                                                 // 290
                                                                                                                       // 291
    off: function () {                                                                                                 // 292
      this.S(this.scope).off('.fndtn.dropdown');                                                                       // 293
      this.S('html, body').off('.fndtn.dropdown');                                                                     // 294
      this.S(window).off('.fndtn.dropdown');                                                                           // 295
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');                                                        // 296
    },                                                                                                                 // 297
                                                                                                                       // 298
    reflow : function () {}                                                                                            // 299
  };                                                                                                                   // 300
}(jQuery, this, this.document));                                                                                       // 301
                                                                                                                       // 302
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.equalizer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.equalizer = {                                                                                        // 4
    name : 'equalizer',                                                                                                // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      use_tallest: true,                                                                                               // 10
      before_height_change: $.noop,                                                                                    // 11
      after_height_change: $.noop                                                                                      // 12
    },                                                                                                                 // 13
                                                                                                                       // 14
    init : function (scope, method, options) {                                                                         // 15
      this.bindings(method, options);                                                                                  // 16
      this.reflow();                                                                                                   // 17
    },                                                                                                                 // 18
                                                                                                                       // 19
    events : function () {                                                                                             // 20
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function(e){                                       // 21
        this.reflow();                                                                                                 // 22
      }.bind(this));                                                                                                   // 23
    },                                                                                                                 // 24
                                                                                                                       // 25
    equalize: function(equalizer) {                                                                                    // 26
      var isStacked = false,                                                                                           // 27
          vals = equalizer.find('[' + this.attr_name() + '-watch]'),                                                   // 28
          firstTopOffset = vals.first().offset().top,                                                                  // 29
          settings = equalizer.data(this.attr_name(true)+'-init');                                                     // 30
                                                                                                                       // 31
      if (vals.length === 0) return;                                                                                   // 32
      settings.before_height_change();                                                                                 // 33
      equalizer.trigger('before-height-change');                                                                       // 34
      vals.height('inherit');                                                                                          // 35
      vals.each(function(){                                                                                            // 36
        var el = $(this);                                                                                              // 37
        if (el.offset().top !== firstTopOffset) {                                                                      // 38
          isStacked = true;                                                                                            // 39
        }                                                                                                              // 40
      });                                                                                                              // 41
      if (isStacked) return;                                                                                           // 42
                                                                                                                       // 43
      var heights = vals.map(function(){ return $(this).outerHeight() }).get();                                        // 44
      if (settings.use_tallest) {                                                                                      // 45
        var max = Math.max.apply(null, heights);                                                                       // 46
        vals.css('height', max);                                                                                       // 47
      } else {                                                                                                         // 48
        var min = Math.min.apply(null, heights);                                                                       // 49
        vals.css('height', min);                                                                                       // 50
      }                                                                                                                // 51
      settings.after_height_change();                                                                                  // 52
      equalizer.trigger('after-height-change');                                                                        // 53
    },                                                                                                                 // 54
                                                                                                                       // 55
    reflow : function () {                                                                                             // 56
      var self = this;                                                                                                 // 57
                                                                                                                       // 58
      this.S('[' + this.attr_name() + ']', this.scope).each(function(){                                                // 59
        self.equalize($(this));                                                                                        // 60
      });                                                                                                              // 61
    }                                                                                                                  // 62
  };                                                                                                                   // 63
}(jQuery, this, this.document));                                                                                       // 64
                                                                                                                       // 65
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.interchange.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.interchange = {                                                                                      // 4
    name : 'interchange',                                                                                              // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    cache : {},                                                                                                        // 9
                                                                                                                       // 10
    images_loaded : false,                                                                                             // 11
    nodes_loaded : false,                                                                                              // 12
                                                                                                                       // 13
    settings : {                                                                                                       // 14
      load_attr : 'interchange',                                                                                       // 15
                                                                                                                       // 16
      named_queries : {                                                                                                // 17
        'default' : 'only screen',                                                                                     // 18
        small : Foundation.media_queries.small,                                                                        // 19
        medium : Foundation.media_queries.medium,                                                                      // 20
        large : Foundation.media_queries.large,                                                                        // 21
        xlarge : Foundation.media_queries.xlarge,                                                                      // 22
        xxlarge: Foundation.media_queries.xxlarge,                                                                     // 23
        landscape : 'only screen and (orientation: landscape)',                                                        // 24
        portrait : 'only screen and (orientation: portrait)',                                                          // 25
        retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +                                              // 26
          'only screen and (min--moz-device-pixel-ratio: 2),' +                                                        // 27
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +                                                        // 28
          'only screen and (min-device-pixel-ratio: 2),' +                                                             // 29
          'only screen and (min-resolution: 192dpi),' +                                                                // 30
          'only screen and (min-resolution: 2dppx)'                                                                    // 31
      },                                                                                                               // 32
                                                                                                                       // 33
      directives : {                                                                                                   // 34
        replace: function (el, path, trigger) {                                                                        // 35
          // The trigger argument, if called within the directive, fires                                               // 36
          // an event named after the directive on the element, passing                                                // 37
          // any parameters along to the event that you pass to trigger.                                               // 38
          //                                                                                                           // 39
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)                                                    // 40
          //                                                                                                           // 41
          // This allows you to bind a callback like so:                                                               // 42
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {                                          // 43
          //   console.log($(this).html(), a, b, c);                                                                   // 44
          // });                                                                                                       // 45
                                                                                                                       // 46
          if (/IMG/.test(el[0].nodeName)) {                                                                            // 47
            var orig_path = el[0].src;                                                                                 // 48
                                                                                                                       // 49
            if (new RegExp(path, 'i').test(orig_path)) return;                                                         // 50
                                                                                                                       // 51
            el[0].src = path;                                                                                          // 52
                                                                                                                       // 53
            return trigger(el[0].src);                                                                                 // 54
          }                                                                                                            // 55
          var last_path = el.data(this.data_attr + '-last-path');                                                      // 56
                                                                                                                       // 57
          if (last_path == path) return;                                                                               // 58
                                                                                                                       // 59
                                                                                                                       // 60
          var regex = "/^.(\.jpg|\.jpeg|\.png|\.gif|\.tiff|\.bmp)\??|#?./";                                            // 61
                                                                                                                       // 62
          if (new RegExp(regex,'i').test(path)){                                                                       // 63
                                                                                                                       // 64
              $(el).css('background-image', 'url('+path+')');                                                          // 65
              el.data('interchange-last-path', path);                                                                  // 66
              return trigger(path);                                                                                    // 67
          }                                                                                                            // 68
                                                                                                                       // 69
          return $.get(path, function (response) {                                                                     // 70
            el.html(response);                                                                                         // 71
            el.data(this.data_attr + '-last-path', path);                                                              // 72
            trigger();                                                                                                 // 73
          });                                                                                                          // 74
                                                                                                                       // 75
        }                                                                                                              // 76
      }                                                                                                                // 77
    },                                                                                                                 // 78
                                                                                                                       // 79
    init : function (scope, method, options) {                                                                         // 80
      Foundation.inherit(this, 'throttle random_str');                                                                 // 81
                                                                                                                       // 82
      this.data_attr = this.set_data_attr();                                                                           // 83
      $.extend(true, this.settings, method, options);                                                                  // 84
      this.bindings(method, options);                                                                                  // 85
      this.load('images');                                                                                             // 86
      this.load('nodes');                                                                                              // 87
    },                                                                                                                 // 88
                                                                                                                       // 89
    get_media_hash : function() {                                                                                      // 90
        var mediaHash='';                                                                                              // 91
        for (var queryName in this.settings.named_queries ) {                                                          // 92
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();                        // 93
        }                                                                                                              // 94
        return mediaHash;                                                                                              // 95
    },                                                                                                                 // 96
                                                                                                                       // 97
    events : function () {                                                                                             // 98
      var self = this, prevMediaHash;                                                                                  // 99
                                                                                                                       // 100
      $(window)                                                                                                        // 101
        .off('.interchange')                                                                                           // 102
        .on('resize.fndtn.interchange', self.throttle(function () {                                                    // 103
            var currMediaHash = self.get_media_hash();                                                                 // 104
            if (currMediaHash !== prevMediaHash) {                                                                     // 105
                self.resize();                                                                                         // 106
            }                                                                                                          // 107
            prevMediaHash = currMediaHash;                                                                             // 108
        }, 50));                                                                                                       // 109
                                                                                                                       // 110
      return this;                                                                                                     // 111
    },                                                                                                                 // 112
                                                                                                                       // 113
    resize : function () {                                                                                             // 114
      var cache = this.cache;                                                                                          // 115
                                                                                                                       // 116
      if(!this.images_loaded || !this.nodes_loaded) {                                                                  // 117
        setTimeout($.proxy(this.resize, this), 50);                                                                    // 118
        return;                                                                                                        // 119
      }                                                                                                                // 120
                                                                                                                       // 121
      for (var uuid in cache) {                                                                                        // 122
        if (cache.hasOwnProperty(uuid)) {                                                                              // 123
          var passed = this.results(uuid, cache[uuid]);                                                                // 124
                                                                                                                       // 125
          if (passed) {                                                                                                // 126
            this.settings.directives[passed                                                                            // 127
              .scenario[1]].call(this, passed.el, passed.scenario[0], function () {                                    // 128
                if (arguments[0] instanceof Array) {                                                                   // 129
                  var args = arguments[0];                                                                             // 130
                } else {                                                                                               // 131
                  var args = Array.prototype.slice.call(arguments, 0);                                                 // 132
                }                                                                                                      // 133
                                                                                                                       // 134
                passed.el.trigger(passed.scenario[1], args);                                                           // 135
              });                                                                                                      // 136
          }                                                                                                            // 137
        }                                                                                                              // 138
      }                                                                                                                // 139
                                                                                                                       // 140
    },                                                                                                                 // 141
                                                                                                                       // 142
    results : function (uuid, scenarios) {                                                                             // 143
      var count = scenarios.length;                                                                                    // 144
                                                                                                                       // 145
      if (count > 0) {                                                                                                 // 146
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');                                   // 147
                                                                                                                       // 148
        while (count--) {                                                                                              // 149
          var mq, rule = scenarios[count][2];                                                                          // 150
          if (this.settings.named_queries.hasOwnProperty(rule)) {                                                      // 151
            mq = matchMedia(this.settings.named_queries[rule]);                                                        // 152
          } else {                                                                                                     // 153
            mq = matchMedia(rule);                                                                                     // 154
          }                                                                                                            // 155
          if (mq.matches) {                                                                                            // 156
            return {el: el, scenario: scenarios[count]};                                                               // 157
          }                                                                                                            // 158
        }                                                                                                              // 159
      }                                                                                                                // 160
                                                                                                                       // 161
      return false;                                                                                                    // 162
    },                                                                                                                 // 163
                                                                                                                       // 164
    load : function (type, force_update) {                                                                             // 165
      if (typeof this['cached_' + type] === 'undefined' || force_update) {                                             // 166
        this['update_' + type]();                                                                                      // 167
      }                                                                                                                // 168
                                                                                                                       // 169
      return this['cached_' + type];                                                                                   // 170
    },                                                                                                                 // 171
                                                                                                                       // 172
    update_images : function () {                                                                                      // 173
      var images = this.S('img[' + this.data_attr + ']'),                                                              // 174
          count = images.length,                                                                                       // 175
          i = count,                                                                                                   // 176
          loaded_count = 0,                                                                                            // 177
          data_attr = this.data_attr;                                                                                  // 178
                                                                                                                       // 179
      this.cache = {};                                                                                                 // 180
      this.cached_images = [];                                                                                         // 181
      this.images_loaded = (count === 0);                                                                              // 182
                                                                                                                       // 183
      while (i--) {                                                                                                    // 184
        loaded_count++;                                                                                                // 185
        if (images[i]) {                                                                                               // 186
          var str = images[i].getAttribute(data_attr) || '';                                                           // 187
                                                                                                                       // 188
          if (str.length > 0) {                                                                                        // 189
            this.cached_images.push(images[i]);                                                                        // 190
          }                                                                                                            // 191
        }                                                                                                              // 192
                                                                                                                       // 193
        if (loaded_count === count) {                                                                                  // 194
          this.images_loaded = true;                                                                                   // 195
          this.enhance('images');                                                                                      // 196
        }                                                                                                              // 197
      }                                                                                                                // 198
                                                                                                                       // 199
      return this;                                                                                                     // 200
    },                                                                                                                 // 201
                                                                                                                       // 202
    update_nodes : function () {                                                                                       // 203
      var nodes = this.S('[' + this.data_attr + ']').not('img'),                                                       // 204
          count = nodes.length,                                                                                        // 205
          i = count,                                                                                                   // 206
          loaded_count = 0,                                                                                            // 207
          data_attr = this.data_attr;                                                                                  // 208
                                                                                                                       // 209
      this.cached_nodes = [];                                                                                          // 210
      this.nodes_loaded = (count === 0);                                                                               // 211
                                                                                                                       // 212
                                                                                                                       // 213
      while (i--) {                                                                                                    // 214
        loaded_count++;                                                                                                // 215
        var str = nodes[i].getAttribute(data_attr) || '';                                                              // 216
                                                                                                                       // 217
        if (str.length > 0) {                                                                                          // 218
          this.cached_nodes.push(nodes[i]);                                                                            // 219
        }                                                                                                              // 220
                                                                                                                       // 221
        if(loaded_count === count) {                                                                                   // 222
          this.nodes_loaded = true;                                                                                    // 223
          this.enhance('nodes');                                                                                       // 224
        }                                                                                                              // 225
      }                                                                                                                // 226
                                                                                                                       // 227
      return this;                                                                                                     // 228
    },                                                                                                                 // 229
                                                                                                                       // 230
    enhance : function (type) {                                                                                        // 231
      var i = this['cached_' + type].length;                                                                           // 232
                                                                                                                       // 233
      while (i--) {                                                                                                    // 234
        this.object($(this['cached_' + type][i]));                                                                     // 235
      }                                                                                                                // 236
                                                                                                                       // 237
      return $(window).trigger('resize');                                                                              // 238
    },                                                                                                                 // 239
                                                                                                                       // 240
    parse_params : function (path, directive, mq) {                                                                    // 241
      return [this.trim(path), this.convert_directive(directive), this.trim(mq)];                                      // 242
    },                                                                                                                 // 243
                                                                                                                       // 244
    convert_directive : function (directive) {                                                                         // 245
                                                                                                                       // 246
      var trimmed = this.trim(directive);                                                                              // 247
                                                                                                                       // 248
      if (trimmed.length > 0) {                                                                                        // 249
        return trimmed;                                                                                                // 250
      }                                                                                                                // 251
                                                                                                                       // 252
      return 'replace';                                                                                                // 253
    },                                                                                                                 // 254
                                                                                                                       // 255
    object : function(el) {                                                                                            // 256
      var raw_arr = this.parse_data_attr(el),                                                                          // 257
          scenarios = [],                                                                                              // 258
          i = raw_arr.length;                                                                                          // 259
                                                                                                                       // 260
      if (i > 0) {                                                                                                     // 261
        while (i--) {                                                                                                  // 262
          var split = raw_arr[i].split(/\((.*?)(\))$/);                                                                // 263
                                                                                                                       // 264
          if (split.length > 1) {                                                                                      // 265
            var cached_split = split[0].split(','),                                                                    // 266
                params = this.parse_params(cached_split[0],                                                            // 267
                  cached_split[1], split[1]);                                                                          // 268
                                                                                                                       // 269
            scenarios.push(params);                                                                                    // 270
          }                                                                                                            // 271
        }                                                                                                              // 272
      }                                                                                                                // 273
                                                                                                                       // 274
      return this.store(el, scenarios);                                                                                // 275
    },                                                                                                                 // 276
                                                                                                                       // 277
    store : function (el, scenarios) {                                                                                 // 278
      var uuid = this.random_str(),                                                                                    // 279
          current_uuid = el.data(this.add_namespace('uuid', true));                                                    // 280
                                                                                                                       // 281
      if (this.cache[current_uuid]) return this.cache[current_uuid];                                                   // 282
                                                                                                                       // 283
      el.attr(this.add_namespace('data-uuid'), uuid);                                                                  // 284
                                                                                                                       // 285
      return this.cache[uuid] = scenarios;                                                                             // 286
    },                                                                                                                 // 287
                                                                                                                       // 288
    trim : function(str) {                                                                                             // 289
                                                                                                                       // 290
      if (typeof str === 'string') {                                                                                   // 291
        return $.trim(str);                                                                                            // 292
      }                                                                                                                // 293
                                                                                                                       // 294
      return str;                                                                                                      // 295
    },                                                                                                                 // 296
                                                                                                                       // 297
    set_data_attr: function (init) {                                                                                   // 298
      if (init) {                                                                                                      // 299
        if (this.namespace.length > 0) {                                                                               // 300
          return this.namespace + '-' + this.settings.load_attr;                                                       // 301
        }                                                                                                              // 302
                                                                                                                       // 303
        return this.settings.load_attr;                                                                                // 304
      }                                                                                                                // 305
                                                                                                                       // 306
      if (this.namespace.length > 0) {                                                                                 // 307
        return 'data-' + this.namespace + '-' + this.settings.load_attr;                                               // 308
      }                                                                                                                // 309
                                                                                                                       // 310
      return 'data-' + this.settings.load_attr;                                                                        // 311
    },                                                                                                                 // 312
                                                                                                                       // 313
    parse_data_attr : function (el) {                                                                                  // 314
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),                                                          // 315
          i = raw.length,                                                                                              // 316
          output = [];                                                                                                 // 317
                                                                                                                       // 318
      while (i--) {                                                                                                    // 319
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {                                                                // 320
          output.push(raw[i]);                                                                                         // 321
        }                                                                                                              // 322
      }                                                                                                                // 323
                                                                                                                       // 324
      return output;                                                                                                   // 325
    },                                                                                                                 // 326
                                                                                                                       // 327
    reflow : function () {                                                                                             // 328
      this.load('images', true);                                                                                       // 329
      this.load('nodes', true);                                                                                        // 330
    }                                                                                                                  // 331
                                                                                                                       // 332
  };                                                                                                                   // 333
                                                                                                                       // 334
}(jQuery, this, this.document));                                                                                       // 335
                                                                                                                       // 336
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.joyride.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  var Modernizr = Modernizr || false;                                                                                  // 4
                                                                                                                       // 5
  Foundation.libs.joyride = {                                                                                          // 6
    name : 'joyride',                                                                                                  // 7
                                                                                                                       // 8
    version : '5.2.1',                                                                                                 // 9
                                                                                                                       // 10
    defaults : {                                                                                                       // 11
      expose                   : false,     // turn on or off the expose feature                                       // 12
      modal                    : true,      // Whether to cover page with modal during the tour                        // 13
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent                                 // 14
      nub_position             : 'auto',    // override on a per tooltip bases                                         // 15
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation           // 16
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.                   // 17
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds                // 18
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer // 19
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)         // 20
      next_button              : true,      // true or false to control whether a next button is used                  // 21
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip                                             // 22
      pause_after              : [],        // array of indexes where to pause the tour after                          // 23
      exposed                  : [],        // array of expose elements                                                // 24
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used                       // 26
      cookie_name              : 'joyride', // Name the cookie you'll use                                              // 27
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'         // 28
      cookie_expires           : 365,       // set when you would like the cookie to expire.                           // 29
      tip_container            : 'body',    // Where will the tip be attached                                          // 30
      tip_location_patterns    : {                                                                                     // 31
        top: ['bottom'],                                                                                               // 32
        bottom: [], // bottom should not need to be repositioned                                                       // 33
        left: ['right', 'top', 'bottom'],                                                                              // 34
        right: ['left', 'top', 'bottom']                                                                               // 35
      },                                                                                                               // 36
      post_ride_callback     : function (){},    // A method to call once the tour closes (canceled or complete)       // 37
      post_step_callback     : function (){},    // A method to call after each step                                   // 38
      pre_step_callback      : function (){},    // A method to call before each step                                  // 39
      pre_ride_callback      : function (){},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function (){},    // A method to call after an element has been exposed                 // 41
      template : { // HTML segments for tip layout                                                                     // 42
        link    : '<a href="#close" class="joyride-close-tip">&times;</a>',                                            // 43
        timer   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',     // 44
        tip     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',                            // 45
        wrapper : '<div class="joyride-content-wrapper"></div>',                                                       // 46
        button  : '<a href="#" class="small button joyride-next-tip"></a>',                                            // 47
        modal   : '<div class="joyride-modal-bg"></div>',                                                              // 48
        expose  : '<div class="joyride-expose-wrapper"></div>',                                                        // 49
        expose_cover: '<div class="joyride-expose-cover"></div>'                                                       // 50
      },                                                                                                               // 51
      expose_add_class : '' // One or more space-separated class names to be added to exposed element                  // 52
    },                                                                                                                 // 53
                                                                                                                       // 54
    init : function (scope, method, options) {                                                                         // 55
      Foundation.inherit(this, 'throttle random_str');                                                                 // 56
                                                                                                                       // 57
      this.settings = this.settings || $.extend({}, this.defaults, (options || method));                               // 58
                                                                                                                       // 59
      this.bindings(method, options)                                                                                   // 60
    },                                                                                                                 // 61
                                                                                                                       // 62
    events : function () {                                                                                             // 63
      var self = this;                                                                                                 // 64
                                                                                                                       // 65
      $(this.scope)                                                                                                    // 66
        .off('.joyride')                                                                                               // 67
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {                              // 68
          e.preventDefault();                                                                                          // 69
                                                                                                                       // 70
          if (this.settings.$li.next().length < 1) {                                                                   // 71
            this.end();                                                                                                // 72
          } else if (this.settings.timer > 0) {                                                                        // 73
            clearTimeout(this.settings.automate);                                                                      // 74
            this.hide();                                                                                               // 75
            this.show();                                                                                               // 76
            this.startTimer();                                                                                         // 77
          } else {                                                                                                     // 78
            this.hide();                                                                                               // 79
            this.show();                                                                                               // 80
          }                                                                                                            // 81
                                                                                                                       // 82
        }.bind(this))                                                                                                  // 83
                                                                                                                       // 84
        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {                                                // 85
          e.preventDefault();                                                                                          // 86
          this.end();                                                                                                  // 87
        }.bind(this));                                                                                                 // 88
                                                                                                                       // 89
      $(window)                                                                                                        // 90
        .off('.joyride')                                                                                               // 91
        .on('resize.fndtn.joyride', self.throttle(function () {                                                        // 92
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip) {                                 // 93
            if (self.settings.exposed.length > 0) {                                                                    // 94
              var $els = $(self.settings.exposed);                                                                     // 95
                                                                                                                       // 96
              $els.each(function () {                                                                                  // 97
                var $this = $(this);                                                                                   // 98
                self.un_expose($this);                                                                                 // 99
                self.expose($this);                                                                                    // 100
              });                                                                                                      // 101
            }                                                                                                          // 102
                                                                                                                       // 103
            if (self.is_phone()) {                                                                                     // 104
              self.pos_phone();                                                                                        // 105
            } else {                                                                                                   // 106
              self.pos_default(false, true);                                                                           // 107
            }                                                                                                          // 108
          }                                                                                                            // 109
        }, 100));                                                                                                      // 110
    },                                                                                                                 // 111
                                                                                                                       // 112
    start : function () {                                                                                              // 113
      var self = this,                                                                                                 // 114
          $this = $('[' + this.attr_name() + ']', this.scope),                                                         // 115
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],        // 116
          int_settings_count = integer_settings.length;                                                                // 117
                                                                                                                       // 118
      if (!$this.length > 0) return;                                                                                   // 119
                                                                                                                       // 120
      if (!this.settings.init) this.events();                                                                          // 121
                                                                                                                       // 122
      this.settings = $this.data(this.attr_name(true) + '-init');                                                      // 123
                                                                                                                       // 124
      // non configureable settings                                                                                    // 125
      this.settings.$content_el = $this;                                                                               // 126
      this.settings.$body = $(this.settings.tip_container);                                                            // 127
      this.settings.body_offset = $(this.settings.tip_container).position();                                           // 128
      this.settings.$tip_content = this.settings.$content_el.find('> li');                                             // 129
      this.settings.paused = false;                                                                                    // 130
      this.settings.attempts = 0;                                                                                      // 131
                                                                                                                       // 132
      // can we create cookies?                                                                                        // 133
      if (typeof $.cookie !== 'function') {                                                                            // 134
        this.settings.cookie_monster = false;                                                                          // 135
      }                                                                                                                // 136
                                                                                                                       // 137
      // generate the tips and insert into dom.                                                                        // 138
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {     // 139
        this.settings.$tip_content.each(function (index) {                                                             // 140
          var $this = $(this);                                                                                         // 141
          this.settings = $.extend({}, self.defaults, self.data_options($this))                                        // 142
                                                                                                                       // 143
          // Make sure that settings parsed from data_options are integers where necessary                             // 144
          var i = int_settings_count;                                                                                  // 145
          while (i--) {                                                                                                // 146
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);                     // 147
          }                                                                                                            // 148
          self.create({$li : $this, index : index});                                                                   // 149
        });                                                                                                            // 150
                                                                                                                       // 151
        // show first tip                                                                                              // 152
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {                                          // 153
          this.show('init');                                                                                           // 154
          this.startTimer();                                                                                           // 155
        } else {                                                                                                       // 156
          this.show('init');                                                                                           // 157
        }                                                                                                              // 158
                                                                                                                       // 159
      }                                                                                                                // 160
    },                                                                                                                 // 161
                                                                                                                       // 162
    resume : function () {                                                                                             // 163
      this.set_li();                                                                                                   // 164
      this.show();                                                                                                     // 165
    },                                                                                                                 // 166
                                                                                                                       // 167
    tip_template : function (opts) {                                                                                   // 168
      var $blank, content;                                                                                             // 169
                                                                                                                       // 170
      opts.tip_class = opts.tip_class || '';                                                                           // 171
                                                                                                                       // 172
      $blank = $(this.settings.template.tip).addClass(opts.tip_class);                                                 // 173
      content = $.trim($(opts.li).html()) +                                                                            // 174
        this.button_text(opts.button_text) +                                                                           // 175
        this.settings.template.link +                                                                                  // 176
        this.timer_instance(opts.index);                                                                               // 177
                                                                                                                       // 178
      $blank.append($(this.settings.template.wrapper));                                                                // 179
      $blank.first().attr(this.add_namespace('data-index'), opts.index);                                               // 180
      $('.joyride-content-wrapper', $blank).append(content);                                                           // 181
                                                                                                                       // 182
      return $blank[0];                                                                                                // 183
    },                                                                                                                 // 184
                                                                                                                       // 185
    timer_instance : function (index) {                                                                                // 186
      var txt;                                                                                                         // 187
                                                                                                                       // 188
      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';                                                                                                      // 190
      } else {                                                                                                         // 191
        txt = $(this.settings.template.timer)[0].outerHTML;                                                            // 192
      }                                                                                                                // 193
      return txt;                                                                                                      // 194
    },                                                                                                                 // 195
                                                                                                                       // 196
    button_text : function (txt) {                                                                                     // 197
      if (this.settings.next_button) {                                                                                 // 198
        txt = $.trim(txt) || 'Next';                                                                                   // 199
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;                                               // 200
      } else {                                                                                                         // 201
        txt = '';                                                                                                      // 202
      }                                                                                                                // 203
      return txt;                                                                                                      // 204
    },                                                                                                                 // 205
                                                                                                                       // 206
    create : function (opts) {                                                                                         // 207
      var buttonText = opts.$li.attr(this.add_namespace('data-button'))                                                // 208
        || opts.$li.attr(this.add_namespace('data-text')),                                                             // 209
        tipClass = opts.$li.attr('class'),                                                                             // 210
        $tip_content = $(this.tip_template({                                                                           // 211
          tip_class : tipClass,                                                                                        // 212
          index : opts.index,                                                                                          // 213
          button_text : buttonText,                                                                                    // 214
          li : opts.$li                                                                                                // 215
        }));                                                                                                           // 216
                                                                                                                       // 217
      $(this.settings.tip_container).append($tip_content);                                                             // 218
    },                                                                                                                 // 219
                                                                                                                       // 220
    show : function (init) {                                                                                           // 221
      var $timer = null;                                                                                               // 222
                                                                                                                       // 223
      // are we paused?                                                                                                // 224
      if (this.settings.$li === undefined                                                                              // 225
        || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {                                 // 226
                                                                                                                       // 227
        // don't go to the next li if the tour was paused                                                              // 228
        if (this.settings.paused) {                                                                                    // 229
          this.settings.paused = false;                                                                                // 230
        } else {                                                                                                       // 231
          this.set_li(init);                                                                                           // 232
        }                                                                                                              // 233
                                                                                                                       // 234
        this.settings.attempts = 0;                                                                                    // 235
                                                                                                                       // 236
        if (this.settings.$li.length && this.settings.$target.length > 0) {                                            // 237
          if (init) { //run when we first start                                                                        // 238
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);                       // 239
            if (this.settings.modal) {                                                                                 // 240
              this.show_modal();                                                                                       // 241
            }                                                                                                          // 242
          }                                                                                                            // 243
                                                                                                                       // 244
          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);                         // 245
                                                                                                                       // 246
          if (this.settings.modal && this.settings.expose) {                                                           // 247
            this.expose();                                                                                             // 248
          }                                                                                                            // 249
                                                                                                                       // 250
          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));              // 251
                                                                                                                       // 252
          this.settings.timer = parseInt(this.settings.timer, 10);                                                     // 253
                                                                                                                       // 254
          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];
                                                                                                                       // 256
          // scroll if not modal                                                                                       // 257
          if (!/body/i.test(this.settings.$target.selector)) {                                                         // 258
            this.scroll_to();                                                                                          // 259
          }                                                                                                            // 260
                                                                                                                       // 261
          if (this.is_phone()) {                                                                                       // 262
            this.pos_phone(true);                                                                                      // 263
          } else {                                                                                                     // 264
            this.pos_default(true);                                                                                    // 265
          }                                                                                                            // 266
                                                                                                                       // 267
          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');                                           // 268
                                                                                                                       // 269
          if (/pop/i.test(this.settings.tip_animation)) {                                                              // 270
                                                                                                                       // 271
            $timer.width(0);                                                                                           // 272
                                                                                                                       // 273
            if (this.settings.timer > 0) {                                                                             // 274
                                                                                                                       // 275
              this.settings.$next_tip.show();                                                                          // 276
                                                                                                                       // 277
              setTimeout(function () {                                                                                 // 278
                $timer.animate({                                                                                       // 279
                  width: $timer.parent().width()                                                                       // 280
                }, this.settings.timer, 'linear');                                                                     // 281
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 282
                                                                                                                       // 283
            } else {                                                                                                   // 284
              this.settings.$next_tip.show();                                                                          // 285
                                                                                                                       // 286
            }                                                                                                          // 287
                                                                                                                       // 288
                                                                                                                       // 289
          } else if (/fade/i.test(this.settings.tip_animation)) {                                                      // 290
                                                                                                                       // 291
            $timer.width(0);                                                                                           // 292
                                                                                                                       // 293
            if (this.settings.timer > 0) {                                                                             // 294
                                                                                                                       // 295
              this.settings.$next_tip                                                                                  // 296
                .fadeIn(this.settings.tip_animation_fade_speed)                                                        // 297
                .show();                                                                                               // 298
                                                                                                                       // 299
              setTimeout(function () {                                                                                 // 300
                $timer.animate({                                                                                       // 301
                  width: $timer.parent().width()                                                                       // 302
                }, this.settings.timer, 'linear');                                                                     // 303
              }.bind(this), this.settings.tip_animation_fadeSpeed);                                                    // 304
                                                                                                                       // 305
            } else {                                                                                                   // 306
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);                                  // 307
            }                                                                                                          // 308
          }                                                                                                            // 309
                                                                                                                       // 310
          this.settings.$current_tip = this.settings.$next_tip;                                                        // 311
                                                                                                                       // 312
        // skip non-existant targets                                                                                   // 313
        } else if (this.settings.$li && this.settings.$target.length < 1) {                                            // 314
                                                                                                                       // 315
          this.show();                                                                                                 // 316
                                                                                                                       // 317
        } else {                                                                                                       // 318
                                                                                                                       // 319
          this.end();                                                                                                  // 320
                                                                                                                       // 321
        }                                                                                                              // 322
      } else {                                                                                                         // 323
                                                                                                                       // 324
        this.settings.paused = true;                                                                                   // 325
                                                                                                                       // 326
      }                                                                                                                // 327
                                                                                                                       // 328
    },                                                                                                                 // 329
                                                                                                                       // 330
    is_phone : function () {                                                                                           // 331
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 332
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 333
    },                                                                                                                 // 334
                                                                                                                       // 335
    hide : function () {                                                                                               // 336
      if (this.settings.modal && this.settings.expose) {                                                               // 337
        this.un_expose();                                                                                              // 338
      }                                                                                                                // 339
                                                                                                                       // 340
      if (!this.settings.modal) {                                                                                      // 341
        $('.joyride-modal-bg').hide();                                                                                 // 342
      }                                                                                                                // 343
                                                                                                                       // 344
      // Prevent scroll bouncing...wait to remove from layout                                                          // 345
      this.settings.$current_tip.css('visibility', 'hidden');                                                          // 346
      setTimeout($.proxy(function() {                                                                                  // 347
        this.hide();                                                                                                   // 348
        this.css('visibility', 'visible');                                                                             // 349
      }, this.settings.$current_tip), 0);                                                                              // 350
      this.settings.post_step_callback(this.settings.$li.index(),                                                      // 351
        this.settings.$current_tip);                                                                                   // 352
    },                                                                                                                 // 353
                                                                                                                       // 354
    set_li : function (init) {                                                                                         // 355
      if (init) {                                                                                                      // 356
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);                                 // 357
        this.set_next_tip();                                                                                           // 358
        this.settings.$current_tip = this.settings.$next_tip;                                                          // 359
      } else {                                                                                                         // 360
        this.settings.$li = this.settings.$li.next();                                                                  // 361
        this.set_next_tip();                                                                                           // 362
      }                                                                                                                // 363
                                                                                                                       // 364
      this.set_target();                                                                                               // 365
    },                                                                                                                 // 366
                                                                                                                       // 367
    set_next_tip : function () {                                                                                       // 368
      this.settings.$next_tip = $(".joyride-tip-guide").eq(this.settings.$li.index());                                 // 369
      this.settings.$next_tip.data('closed', '');                                                                      // 370
    },                                                                                                                 // 371
                                                                                                                       // 372
    set_target : function () {                                                                                         // 373
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),                                               // 374
          id = this.settings.$li.attr(this.add_namespace('data-id')),                                                  // 375
          $sel = function () {                                                                                         // 376
            if (id) {                                                                                                  // 377
              return $(document.getElementById(id));                                                                   // 378
            } else if (cl) {                                                                                           // 379
              return $('.' + cl).first();                                                                              // 380
            } else {                                                                                                   // 381
              return $('body');                                                                                        // 382
            }                                                                                                          // 383
          };                                                                                                           // 384
                                                                                                                       // 385
      this.settings.$target = $sel();                                                                                  // 386
    },                                                                                                                 // 387
                                                                                                                       // 388
    scroll_to : function () {                                                                                          // 389
      var window_half, tipOffset;                                                                                      // 390
                                                                                                                       // 391
      window_half = $(window).height() / 2;                                                                            // 392
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()); // 393
                                                                                                                       // 394
      if (tipOffset != 0) {                                                                                            // 395
        $('html, body').animate({                                                                                      // 396
          scrollTop: tipOffset                                                                                         // 397
        }, this.settings.scroll_speed, 'swing');                                                                       // 398
      }                                                                                                                // 399
    },                                                                                                                 // 400
                                                                                                                       // 401
    paused : function () {                                                                                             // 402
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);                           // 403
    },                                                                                                                 // 404
                                                                                                                       // 405
    restart : function () {                                                                                            // 406
      this.hide();                                                                                                     // 407
      this.settings.$li = undefined;                                                                                   // 408
      this.show('init');                                                                                               // 409
    },                                                                                                                 // 410
                                                                                                                       // 411
    pos_default : function (init, resizing) {                                                                          // 412
      var half_fold = Math.ceil($(window).height() / 2),                                                               // 413
          tip_position = this.settings.$next_tip.offset(),                                                             // 414
          $nub = this.settings.$next_tip.find('.joyride-nub'),                                                         // 415
          nub_width = Math.ceil($nub.outerWidth() / 2),                                                                // 416
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 417
          toggle = init || false;                                                                                      // 418
                                                                                                                       // 419
      // tip must not be "display: none" to calculate position                                                         // 420
      if (toggle) {                                                                                                    // 421
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 422
        this.settings.$next_tip.show();                                                                                // 423
      }                                                                                                                // 424
                                                                                                                       // 425
      if (typeof resizing === 'undefined') {                                                                           // 426
        resizing = false;                                                                                              // 427
      }                                                                                                                // 428
                                                                                                                       // 429
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 430
          if (this.bottom()) {                                                                                         // 431
            if (this.rtl) {                                                                                            // 432
              this.settings.$next_tip.css({                                                                            // 433
                top: (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight()),          // 434
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {                                                                                                   // 436
              this.settings.$next_tip.css({                                                                            // 437
                top: (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight()),          // 438
                left: this.settings.$target.offset().left});                                                           // 439
            }                                                                                                          // 440
                                                                                                                       // 441
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');                                   // 442
                                                                                                                       // 443
          } else if (this.top()) {                                                                                     // 444
            if (this.rtl) {                                                                                            // 445
              this.settings.$next_tip.css({                                                                            // 446
                top: (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height),        // 447
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {                                                                                                   // 449
              this.settings.$next_tip.css({                                                                            // 450
                top: (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height),        // 451
                left: this.settings.$target.offset().left});                                                           // 452
            }                                                                                                          // 453
                                                                                                                       // 454
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');                                // 455
                                                                                                                       // 456
          } else if (this.right()) {                                                                                   // 457
                                                                                                                       // 458
            this.settings.$next_tip.css({                                                                              // 459
              top: this.settings.$target.offset().top,                                                                 // 460
              left: (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width)});          // 461
                                                                                                                       // 462
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');                                  // 463
                                                                                                                       // 464
          } else if (this.left()) {                                                                                    // 465
                                                                                                                       // 466
            this.settings.$next_tip.css({                                                                              // 467
              top: this.settings.$target.offset().top,                                                                 // 468
              left: (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width)});        // 469
                                                                                                                       // 470
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');                                 // 471
                                                                                                                       // 472
          }                                                                                                            // 473
                                                                                                                       // 474
          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {
                                                                                                                       // 476
            $nub.removeClass('bottom')                                                                                 // 477
              .removeClass('top')                                                                                      // 478
              .removeClass('right')                                                                                    // 479
              .removeClass('left');                                                                                    // 480
                                                                                                                       // 481
            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];
                                                                                                                       // 483
            this.settings.attempts++;                                                                                  // 484
                                                                                                                       // 485
            this.pos_default();                                                                                        // 486
                                                                                                                       // 487
          }                                                                                                            // 488
                                                                                                                       // 489
      } else if (this.settings.$li.length) {                                                                           // 490
                                                                                                                       // 491
        this.pos_modal($nub);                                                                                          // 492
                                                                                                                       // 493
      }                                                                                                                // 494
                                                                                                                       // 495
      if (toggle) {                                                                                                    // 496
        this.settings.$next_tip.hide();                                                                                // 497
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 498
      }                                                                                                                // 499
                                                                                                                       // 500
    },                                                                                                                 // 501
                                                                                                                       // 502
    pos_phone : function (init) {                                                                                      // 503
      var tip_height = this.settings.$next_tip.outerHeight(),                                                          // 504
          tip_offset = this.settings.$next_tip.offset(),                                                               // 505
          target_height = this.settings.$target.outerHeight(),                                                         // 506
          $nub = $('.joyride-nub', this.settings.$next_tip),                                                           // 507
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 508
          toggle = init || false;                                                                                      // 509
                                                                                                                       // 510
      $nub.removeClass('bottom')                                                                                       // 511
        .removeClass('top')                                                                                            // 512
        .removeClass('right')                                                                                          // 513
        .removeClass('left');                                                                                          // 514
                                                                                                                       // 515
      if (toggle) {                                                                                                    // 516
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 517
        this.settings.$next_tip.show();                                                                                // 518
      }                                                                                                                // 519
                                                                                                                       // 520
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 521
                                                                                                                       // 522
        if (this.top()) {                                                                                              // 523
                                                                                                                       // 524
            this.settings.$next_tip.offset({top: this.settings.$target.offset().top - tip_height - nub_height});       // 525
            $nub.addClass('bottom');                                                                                   // 526
                                                                                                                       // 527
        } else {                                                                                                       // 528
                                                                                                                       // 529
          this.settings.$next_tip.offset({top: this.settings.$target.offset().top + target_height + nub_height});      // 530
          $nub.addClass('top');                                                                                        // 531
                                                                                                                       // 532
        }                                                                                                              // 533
                                                                                                                       // 534
      } else if (this.settings.$li.length) {                                                                           // 535
        this.pos_modal($nub);                                                                                          // 536
      }                                                                                                                // 537
                                                                                                                       // 538
      if (toggle) {                                                                                                    // 539
        this.settings.$next_tip.hide();                                                                                // 540
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 541
      }                                                                                                                // 542
    },                                                                                                                 // 543
                                                                                                                       // 544
    pos_modal : function ($nub) {                                                                                      // 545
      this.center();                                                                                                   // 546
      $nub.hide();                                                                                                     // 547
                                                                                                                       // 548
      this.show_modal();                                                                                               // 549
    },                                                                                                                 // 550
                                                                                                                       // 551
    show_modal : function () {                                                                                         // 552
      if (!this.settings.$next_tip.data('closed')) {                                                                   // 553
        var joyridemodalbg =  $('.joyride-modal-bg');                                                                  // 554
        if (joyridemodalbg.length < 1) {                                                                               // 555
          $('body').append(this.settings.template.modal).show();                                                       // 556
        }                                                                                                              // 557
                                                                                                                       // 558
        if (/pop/i.test(this.settings.tip_animation)) {                                                                // 559
            joyridemodalbg.show();                                                                                     // 560
        } else {                                                                                                       // 561
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);                                             // 562
        }                                                                                                              // 563
      }                                                                                                                // 564
    },                                                                                                                 // 565
                                                                                                                       // 566
    expose : function () {                                                                                             // 567
      var expose,                                                                                                      // 568
          exposeCover,                                                                                                 // 569
          el,                                                                                                          // 570
          origCSS,                                                                                                     // 571
          origClasses,                                                                                                 // 572
          randId = 'expose-' + this.random_str(6);                                                                     // 573
                                                                                                                       // 574
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 575
        el = arguments[0];                                                                                             // 576
      } else if(this.settings.$target && !/body/i.test(this.settings.$target.selector)){                               // 577
        el = this.settings.$target;                                                                                    // 578
      }  else {                                                                                                        // 579
        return false;                                                                                                  // 580
      }                                                                                                                // 581
                                                                                                                       // 582
      if(el.length < 1){                                                                                               // 583
        if(window.console){                                                                                            // 584
          console.error('element not valid', el);                                                                      // 585
        }                                                                                                              // 586
        return false;                                                                                                  // 587
      }                                                                                                                // 588
                                                                                                                       // 589
      expose = $(this.settings.template.expose);                                                                       // 590
      this.settings.$body.append(expose);                                                                              // 591
      expose.css({                                                                                                     // 592
        top: el.offset().top,                                                                                          // 593
        left: el.offset().left,                                                                                        // 594
        width: el.outerWidth(true),                                                                                    // 595
        height: el.outerHeight(true)                                                                                   // 596
      });                                                                                                              // 597
                                                                                                                       // 598
      exposeCover = $(this.settings.template.expose_cover);                                                            // 599
                                                                                                                       // 600
      origCSS = {                                                                                                      // 601
        zIndex: el.css('z-index'),                                                                                     // 602
        position: el.css('position')                                                                                   // 603
      };                                                                                                               // 604
                                                                                                                       // 605
      origClasses = el.attr('class') == null ? '' : el.attr('class');                                                  // 606
                                                                                                                       // 607
      el.css('z-index',parseInt(expose.css('z-index'))+1);                                                             // 608
                                                                                                                       // 609
      if (origCSS.position == 'static') {                                                                              // 610
        el.css('position','relative');                                                                                 // 611
      }                                                                                                                // 612
                                                                                                                       // 613
      el.data('expose-css',origCSS);                                                                                   // 614
      el.data('orig-class', origClasses);                                                                              // 615
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);                                            // 616
                                                                                                                       // 617
      exposeCover.css({                                                                                                // 618
        top: el.offset().top,                                                                                          // 619
        left: el.offset().left,                                                                                        // 620
        width: el.outerWidth(true),                                                                                    // 621
        height: el.outerHeight(true)                                                                                   // 622
      });                                                                                                              // 623
                                                                                                                       // 624
      if (this.settings.modal) this.show_modal();                                                                      // 625
                                                                                                                       // 626
      this.settings.$body.append(exposeCover);                                                                         // 627
      expose.addClass(randId);                                                                                         // 628
      exposeCover.addClass(randId);                                                                                    // 629
      el.data('expose', randId);                                                                                       // 630
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);                      // 631
      this.add_exposed(el);                                                                                            // 632
    },                                                                                                                 // 633
                                                                                                                       // 634
    un_expose : function () {                                                                                          // 635
      var exposeId,                                                                                                    // 636
          el,                                                                                                          // 637
          expose ,                                                                                                     // 638
          origCSS,                                                                                                     // 639
          origClasses,                                                                                                 // 640
          clearAll = false;                                                                                            // 641
                                                                                                                       // 642
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 643
        el = arguments[0];                                                                                             // 644
      } else if(this.settings.$target && !/body/i.test(this.settings.$target.selector)){                               // 645
        el = this.settings.$target;                                                                                    // 646
      }  else {                                                                                                        // 647
        return false;                                                                                                  // 648
      }                                                                                                                // 649
                                                                                                                       // 650
      if(el.length < 1){                                                                                               // 651
        if (window.console) {                                                                                          // 652
          console.error('element not valid', el);                                                                      // 653
        }                                                                                                              // 654
        return false;                                                                                                  // 655
      }                                                                                                                // 656
                                                                                                                       // 657
      exposeId = el.data('expose');                                                                                    // 658
      expose = $('.' + exposeId);                                                                                      // 659
                                                                                                                       // 660
      if (arguments.length > 1) {                                                                                      // 661
        clearAll = arguments[1];                                                                                       // 662
      }                                                                                                                // 663
                                                                                                                       // 664
      if (clearAll === true) {                                                                                         // 665
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();                                                   // 666
      } else {                                                                                                         // 667
        expose.remove();                                                                                               // 668
      }                                                                                                                // 669
                                                                                                                       // 670
      origCSS = el.data('expose-css');                                                                                 // 671
                                                                                                                       // 672
      if (origCSS.zIndex == 'auto') {                                                                                  // 673
        el.css('z-index', '');                                                                                         // 674
      } else {                                                                                                         // 675
        el.css('z-index', origCSS.zIndex);                                                                             // 676
      }                                                                                                                // 677
                                                                                                                       // 678
      if (origCSS.position != el.css('position')) {                                                                    // 679
        if(origCSS.position == 'static') {// this is default, no need to set it.                                       // 680
          el.css('position', '');                                                                                      // 681
        } else {                                                                                                       // 682
          el.css('position', origCSS.position);                                                                        // 683
        }                                                                                                              // 684
      }                                                                                                                // 685
                                                                                                                       // 686
      origClasses = el.data('orig-class');                                                                             // 687
      el.attr('class', origClasses);                                                                                   // 688
      el.removeData('orig-classes');                                                                                   // 689
                                                                                                                       // 690
      el.removeData('expose');                                                                                         // 691
      el.removeData('expose-z-index');                                                                                 // 692
      this.remove_exposed(el);                                                                                         // 693
    },                                                                                                                 // 694
                                                                                                                       // 695
    add_exposed: function(el){                                                                                         // 696
      this.settings.exposed = this.settings.exposed || [];                                                             // 697
      if (el instanceof $ || typeof el === 'object') {                                                                 // 698
        this.settings.exposed.push(el[0]);                                                                             // 699
      } else if (typeof el == 'string') {                                                                              // 700
        this.settings.exposed.push(el);                                                                                // 701
      }                                                                                                                // 702
    },                                                                                                                 // 703
                                                                                                                       // 704
    remove_exposed: function(el){                                                                                      // 705
      var search, i;                                                                                                   // 706
      if (el instanceof $) {                                                                                           // 707
        search = el[0]                                                                                                 // 708
      } else if (typeof el == 'string'){                                                                               // 709
        search = el;                                                                                                   // 710
      }                                                                                                                // 711
                                                                                                                       // 712
      this.settings.exposed = this.settings.exposed || [];                                                             // 713
      i = this.settings.exposed.length;                                                                                // 714
                                                                                                                       // 715
      while (i--) {                                                                                                    // 716
        if (this.settings.exposed[i] == search) {                                                                      // 717
          this.settings.exposed.splice(i, 1);                                                                          // 718
          return;                                                                                                      // 719
        }                                                                                                              // 720
      }                                                                                                                // 721
    },                                                                                                                 // 722
                                                                                                                       // 723
    center : function () {                                                                                             // 724
      var $w = $(window);                                                                                              // 725
                                                                                                                       // 726
      this.settings.$next_tip.css({                                                                                    // 727
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),                          // 728
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())                           // 729
      });                                                                                                              // 730
                                                                                                                       // 731
      return true;                                                                                                     // 732
    },                                                                                                                 // 733
                                                                                                                       // 734
    bottom : function () {                                                                                             // 735
      return /bottom/i.test(this.settings.tip_settings.tip_location);                                                  // 736
    },                                                                                                                 // 737
                                                                                                                       // 738
    top : function () {                                                                                                // 739
      return /top/i.test(this.settings.tip_settings.tip_location);                                                     // 740
    },                                                                                                                 // 741
                                                                                                                       // 742
    right : function () {                                                                                              // 743
      return /right/i.test(this.settings.tip_settings.tip_location);                                                   // 744
    },                                                                                                                 // 745
                                                                                                                       // 746
    left : function () {                                                                                               // 747
      return /left/i.test(this.settings.tip_settings.tip_location);                                                    // 748
    },                                                                                                                 // 749
                                                                                                                       // 750
    corners : function (el) {                                                                                          // 751
      var w = $(window),                                                                                               // 752
          window_half = w.height() / 2,                                                                                // 753
          //using this to calculate since scroll may not have finished yet.                                            // 754
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),                                                                          // 756
          offsetBottom =  w.height() + tipOffset,                                                                      // 757
          bottom = w.height() + w.scrollTop(),                                                                         // 758
          top = w.scrollTop();                                                                                         // 759
                                                                                                                       // 760
      if (tipOffset < top) {                                                                                           // 761
        if (tipOffset < 0) {                                                                                           // 762
          top = 0;                                                                                                     // 763
        } else {                                                                                                       // 764
          top = tipOffset;                                                                                             // 765
        }                                                                                                              // 766
      }                                                                                                                // 767
                                                                                                                       // 768
      if (offsetBottom > bottom) {                                                                                     // 769
        bottom = offsetBottom;                                                                                         // 770
      }                                                                                                                // 771
                                                                                                                       // 772
      return [                                                                                                         // 773
        el.offset().top < top,                                                                                         // 774
        right < el.offset().left + el.outerWidth(),                                                                    // 775
        bottom < el.offset().top + el.outerHeight(),                                                                   // 776
        w.scrollLeft() > el.offset().left                                                                              // 777
      ];                                                                                                               // 778
    },                                                                                                                 // 779
                                                                                                                       // 780
    visible : function (hidden_corners) {                                                                              // 781
      var i = hidden_corners.length;                                                                                   // 782
                                                                                                                       // 783
      while (i--) {                                                                                                    // 784
        if (hidden_corners[i]) return false;                                                                           // 785
      }                                                                                                                // 786
                                                                                                                       // 787
      return true;                                                                                                     // 788
    },                                                                                                                 // 789
                                                                                                                       // 790
    nub_position : function (nub, pos, def) {                                                                          // 791
      if (pos === 'auto') {                                                                                            // 792
        nub.addClass(def);                                                                                             // 793
      } else {                                                                                                         // 794
        nub.addClass(pos);                                                                                             // 795
      }                                                                                                                // 796
    },                                                                                                                 // 797
                                                                                                                       // 798
    startTimer : function () {                                                                                         // 799
      if (this.settings.$li.length) {                                                                                  // 800
        this.settings.automate = setTimeout(function () {                                                              // 801
          this.hide();                                                                                                 // 802
          this.show();                                                                                                 // 803
          this.startTimer();                                                                                           // 804
        }.bind(this), this.settings.timer);                                                                            // 805
      } else {                                                                                                         // 806
        clearTimeout(this.settings.automate);                                                                          // 807
      }                                                                                                                // 808
    },                                                                                                                 // 809
                                                                                                                       // 810
    end : function () {                                                                                                // 811
      if (this.settings.cookie_monster) {                                                                              // 812
        $.cookie(this.settings.cookie_name, 'ridden', { expires: this.settings.cookie_expires, domain: this.settings.cookie_domain });
      }                                                                                                                // 814
                                                                                                                       // 815
      if (this.settings.timer > 0) {                                                                                   // 816
        clearTimeout(this.settings.automate);                                                                          // 817
      }                                                                                                                // 818
                                                                                                                       // 819
      if (this.settings.modal && this.settings.expose) {                                                               // 820
        this.un_expose();                                                                                              // 821
      }                                                                                                                // 822
                                                                                                                       // 823
      this.settings.$next_tip.data('closed', true);                                                                    // 824
                                                                                                                       // 825
      $('.joyride-modal-bg').hide();                                                                                   // 826
      this.settings.$current_tip.hide();                                                                               // 827
      this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);                         // 828
      this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);                         // 829
      $('.joyride-tip-guide').remove();                                                                                // 830
    },                                                                                                                 // 831
                                                                                                                       // 832
    off : function () {                                                                                                // 833
      $(this.scope).off('.joyride');                                                                                   // 834
      $(window).off('.joyride');                                                                                       // 835
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');                                   // 836
      $('.joyride-tip-guide, .joyride-modal-bg').remove();                                                             // 837
      clearTimeout(this.settings.automate);                                                                            // 838
      this.settings = {};                                                                                              // 839
    },                                                                                                                 // 840
                                                                                                                       // 841
    reflow : function () {}                                                                                            // 842
  };                                                                                                                   // 843
}(jQuery, this, this.document));                                                                                       // 844
                                                                                                                       // 845
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.magellan.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs['magellan-expedition'] = {                                                                           // 4
    name : 'magellan-expedition',                                                                                      // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      active_class: 'active',                                                                                          // 10
      threshold: 0, // pixels from the top of the expedition for it to become fixes                                    // 11
      destination_threshold: 20, // pixels from the top of destination for it to be considered active                  // 12
      throttle_delay: 30 // calculation throttling to increase framerate                                               // 13
    },                                                                                                                 // 14
                                                                                                                       // 15
    init : function (scope, method, options) {                                                                         // 16
      Foundation.inherit(this, 'throttle');                                                                            // 17
      this.bindings(method, options);                                                                                  // 18
    },                                                                                                                 // 19
                                                                                                                       // 20
    events : function () {                                                                                             // 21
      var self = this,                                                                                                 // 22
          S = self.S,                                                                                                  // 23
          settings = self.settings;                                                                                    // 24
                                                                                                                       // 25
      // initialize expedition offset                                                                                  // 26
      self.set_expedition_position();                                                                                  // 27
                                                                                                                       // 28
      S(self.scope)                                                                                                    // 29
        .off('.magellan')                                                                                              // 30
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href^="#"]', function (e) {
            e.preventDefault();                                                                                        // 32
            var expedition = $(this).closest('[' + self.attr_name() + ']'),                                            // 33
                settings = expedition.data('magellan-expedition-init');                                                // 34
                                                                                                                       // 35
            var hash = this.hash.split('#').join(''),                                                                  // 36
                target = $('a[name='+hash+']');                                                                        // 37
            if (target.length === 0) target = $('#'+hash);                                                             // 38
                                                                                                                       // 39
            // Account for expedition height if fixed position                                                         // 40
            var scroll_top = target.offset().top;                                                                      // 41
            if (expedition.css('position') === 'fixed') {                                                              // 42
              scroll_top = scroll_top - expedition.outerHeight();                                                      // 43
            }                                                                                                          // 44
                                                                                                                       // 45
            $('html, body').stop().animate({                                                                           // 46
                'scrollTop': scroll_top                                                                                // 47
            }, 700, 'swing', function () {                                                                             // 48
                window.location.hash = '#'+hash;                                                                       // 49
            });                                                                                                        // 50
        })                                                                                                             // 51
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay))       // 52
        $(window).on('resize.fndtn.magellan', self.throttle(this.set_expedition_position.bind(this), settings.throttle_delay));
    },                                                                                                                 // 54
                                                                                                                       // 55
    check_for_arrivals : function() {                                                                                  // 56
      var self = this;                                                                                                 // 57
      self.update_arrivals();                                                                                          // 58
      self.update_expedition_positions();                                                                              // 59
    },                                                                                                                 // 60
                                                                                                                       // 61
    set_expedition_position : function() {                                                                             // 62
      var self = this;                                                                                                 // 63
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function(idx, el) {                                       // 64
        var expedition = $(this),                                                                                      // 65
            styles = expedition.attr('styles'), // save styles                                                         // 66
            top_offset;                                                                                                // 67
                                                                                                                       // 68
        expedition.attr('style', '');                                                                                  // 69
        top_offset = expedition.offset().top;                                                                          // 70
                                                                                                                       // 71
        expedition.data(self.data_attr('magellan-top-offset'), top_offset);                                            // 72
        expedition.attr('style', styles);                                                                              // 73
      });                                                                                                              // 74
    },                                                                                                                 // 75
                                                                                                                       // 76
    update_expedition_positions : function() {                                                                         // 77
      var self = this,                                                                                                 // 78
          window_top_offset = $(window).scrollTop();                                                                   // 79
                                                                                                                       // 80
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function() {                                              // 81
        var expedition = $(this),                                                                                      // 82
            top_offset = expedition.data('magellan-top-offset');                                                       // 83
                                                                                                                       // 84
        if (window_top_offset >= top_offset) {                                                                         // 85
          // Placeholder allows height calculations to be consistent even when                                         // 86
          // appearing to switch between fixed/non-fixed placement                                                     // 87
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');         // 88
          if (placeholder.length === 0) {                                                                              // 89
            placeholder = expedition.clone();                                                                          // 90
            placeholder.removeAttr(self.attr_name());                                                                  // 91
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'),'');                                 // 92
            expedition.before(placeholder);                                                                            // 93
          }                                                                                                            // 94
          expedition.css({position:'fixed', top: 0});                                                                  // 95
        } else {                                                                                                       // 96
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();                  // 97
          expedition.attr('style','');                                                                                 // 98
        }                                                                                                              // 99
      });                                                                                                              // 100
    },                                                                                                                 // 101
                                                                                                                       // 102
    update_arrivals : function() {                                                                                     // 103
      var self = this,                                                                                                 // 104
          window_top_offset = $(window).scrollTop();                                                                   // 105
                                                                                                                       // 106
      $('[' + this.attr_name() + ']', self.scope).each(function() {                                                    // 107
        var expedition = $(this),                                                                                      // 108
            settings = settings = expedition.data(self.attr_name(true) + '-init'),                                     // 109
            offsets = self.offsets(expedition, window_top_offset),                                                     // 110
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),                       // 111
            active_item = false;                                                                                       // 112
        offsets.each(function(idx, item) {                                                                             // 113
          if (item.viewport_offset >= item.top_offset) {                                                               // 114
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');                   // 115
            arrivals.not(item.arrival).removeClass(settings.active_class);                                             // 116
            item.arrival.addClass(settings.active_class);                                                              // 117
            active_item = true;                                                                                        // 118
            return true;                                                                                               // 119
          }                                                                                                            // 120
        });                                                                                                            // 121
                                                                                                                       // 122
        if (!active_item) arrivals.removeClass(settings.active_class);                                                 // 123
      });                                                                                                              // 124
    },                                                                                                                 // 125
                                                                                                                       // 126
    offsets : function(expedition, window_offset) {                                                                    // 127
      var self = this,                                                                                                 // 128
          settings = expedition.data(self.attr_name(true) + '-init'),                                                  // 129
          viewport_offset = (window_offset + settings.destination_threshold);                                          // 130
                                                                                                                       // 131
      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function(idx, el) {          // 132
        var name = $(this).data(self.data_attr('magellan-arrival')),                                                   // 133
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');                        // 134
        if (dest.length > 0) {                                                                                         // 135
          var top_offset = dest.offset().top;                                                                          // 136
          return {                                                                                                     // 137
            destination : dest,                                                                                        // 138
            arrival : $(this),                                                                                         // 139
            top_offset : top_offset,                                                                                   // 140
            viewport_offset : viewport_offset                                                                          // 141
          }                                                                                                            // 142
        }                                                                                                              // 143
      }).sort(function(a, b) {                                                                                         // 144
        if (a.top_offset < b.top_offset) return -1;                                                                    // 145
        if (a.top_offset > b.top_offset) return 1;                                                                     // 146
        return 0;                                                                                                      // 147
      });                                                                                                              // 148
    },                                                                                                                 // 149
                                                                                                                       // 150
    data_attr: function (str) {                                                                                        // 151
      if (this.namespace.length > 0) {                                                                                 // 152
        return this.namespace + '-' + str;                                                                             // 153
      }                                                                                                                // 154
                                                                                                                       // 155
      return str;                                                                                                      // 156
    },                                                                                                                 // 157
                                                                                                                       // 158
    off : function () {                                                                                                // 159
      this.S(this.scope).off('.magellan');                                                                             // 160
      this.S(window).off('.magellan');                                                                                 // 161
    },                                                                                                                 // 162
                                                                                                                       // 163
    reflow : function () {                                                                                             // 164
      var self = this;                                                                                                 // 165
      // remove placeholder expeditions used for height calculation purposes                                           // 166
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();                        // 167
    }                                                                                                                  // 168
  };                                                                                                                   // 169
}(jQuery, this, this.document));                                                                                       // 170
                                                                                                                       // 171
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.offcanvas.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.offcanvas = {                                                                                        // 4
    name : 'offcanvas',                                                                                                // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {},                                                                                                     // 9
                                                                                                                       // 10
    init : function (scope, method, options) {                                                                         // 11
      this.events();                                                                                                   // 12
    },                                                                                                                 // 13
                                                                                                                       // 14
    events : function () {                                                                                             // 15
      var S = this.S;                                                                                                  // 16
                                                                                                                       // 17
      S(this.scope).off('.offcanvas')                                                                                  // 18
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {                                         // 19
          e.preventDefault();                                                                                          // 20
          S(this).closest('.off-canvas-wrap').toggleClass('move-right');                                               // 21
        })                                                                                                             // 22
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 23
          e.preventDefault();                                                                                          // 24
          S(".off-canvas-wrap").removeClass("move-right");                                                             // 25
        })                                                                                                             // 26
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {                                         // 27
          e.preventDefault();                                                                                          // 28
          var href = $(this).attr('href');                                                                             // 29
          S('.off-canvas-wrap').on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {                   // 30
              window.location = href                                                                                   // 31
              S('.off-canvas-wrap').off('transitionend webkitTransitionEnd oTransitionEnd');                           // 32
          });                                                                                                          // 33
          S(".off-canvas-wrap").removeClass("move-right");                                                             // 34
        })                                                                                                             // 35
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {                                        // 36
          e.preventDefault();                                                                                          // 37
          S(this).closest(".off-canvas-wrap").toggleClass("move-left");                                                // 38
        })                                                                                                             // 39
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 40
          e.preventDefault();                                                                                          // 41
          S(".off-canvas-wrap").removeClass("move-left");                                                              // 42
        })                                                                                                             // 43
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {                                        // 44
          e.preventDefault();                                                                                          // 45
          var href = $(this).attr('href');                                                                             // 46
          S('.off-canvas-wrap').on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {                   // 47
              window.location = href                                                                                   // 48
              S('.off-canvas-wrap').off('transitionend webkitTransitionEnd oTransitionEnd');                           // 49
          });                                                                                                          // 50
          S(".off-canvas-wrap").removeClass("move-left");                                                              // 51
        });                                                                                                            // 52
    },                                                                                                                 // 53
                                                                                                                       // 54
    reflow : function () {}                                                                                            // 55
  };                                                                                                                   // 56
}(jQuery, this, this.document));                                                                                       // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.orbit.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  var noop = function() {};                                                                                            // 4
                                                                                                                       // 5
  var Orbit = function(el, settings) {                                                                                 // 6
    // Don't reinitialize plugin                                                                                       // 7
    if (el.hasClass(settings.slides_container_class)) {                                                                // 8
      return this;                                                                                                     // 9
    }                                                                                                                  // 10
                                                                                                                       // 11
    var self = this,                                                                                                   // 12
        container,                                                                                                     // 13
        slides_container = el,                                                                                         // 14
        number_container,                                                                                              // 15
        bullets_container,                                                                                             // 16
        timer_container,                                                                                               // 17
        idx = 0,                                                                                                       // 18
        animate,                                                                                                       // 19
        adjust_height_after = false;                                                                                   // 20
                                                                                                                       // 21
    self.cache = {};                                                                                                   // 22
                                                                                                                       // 23
    self.slides = function() {                                                                                         // 24
      return slides_container.children(settings.slide_selector);                                                       // 25
    };                                                                                                                 // 26
                                                                                                                       // 27
    self.slides().first().addClass(settings.active_slide_class);                                                       // 28
                                                                                                                       // 29
    self.update_slide_number = function(index) {                                                                       // 30
      if (settings.slide_number) {                                                                                     // 31
        number_container.find('span:first').text(parseInt(index)+1);                                                   // 32
        number_container.find('span:last').text(self.slides().length);                                                 // 33
      }                                                                                                                // 34
      if (settings.bullets) {                                                                                          // 35
        bullets_container.children().removeClass(settings.bullets_active_class);                                       // 36
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);                            // 37
      }                                                                                                                // 38
    };                                                                                                                 // 39
                                                                                                                       // 40
    self.update_active_link = function(index) {                                                                        // 41
      var link = $('[data-orbit-link="'+self.slides().eq(index).attr('data-orbit-slide')+'"]');                        // 42
      link.siblings().removeClass(settings.bullets_active_class);                                                      // 43
      link.addClass(settings.bullets_active_class);                                                                    // 44
    };                                                                                                                 // 45
                                                                                                                       // 46
    self.build_markup = function() {                                                                                   // 47
      slides_container.wrap('<div class="'+settings.container_class+'"></div>');                                       // 48
      container = slides_container.parent();                                                                           // 49
      slides_container.addClass(settings.slides_container_class);                                                      // 50
                                                                                                                       // 51
      if (settings.navigation_arrows) {                                                                                // 52
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));                            // 53
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));                            // 54
      }                                                                                                                // 55
                                                                                                                       // 56
      if (settings.timer) {                                                                                            // 57
        timer_container = $('<div>').addClass(settings.timer_container_class);                                         // 58
        timer_container.append('<span>');                                                                              // 59
        timer_container.append($('<div>').addClass(settings.timer_progress_class));                                    // 60
        timer_container.addClass(settings.timer_paused_class);                                                         // 61
        container.append(timer_container);                                                                             // 62
      }                                                                                                                // 63
                                                                                                                       // 64
      if (settings.slide_number) {                                                                                     // 65
        number_container = $('<div>').addClass(settings.slide_number_class);                                           // 66
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');                     // 67
        container.append(number_container);                                                                            // 68
      }                                                                                                                // 69
                                                                                                                       // 70
      if (settings.bullets) {                                                                                          // 71
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);                                      // 72
        container.append(bullets_container);                                                                           // 73
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');                                         // 74
        self.slides().each(function(idx, el) {                                                                         // 75
          var bullet = $('<li>').attr('data-orbit-slide', idx);                                                        // 76
          bullets_container.append(bullet);                                                                            // 77
        });                                                                                                            // 78
      }                                                                                                                // 79
                                                                                                                       // 80
      if (settings.stack_on_small) {                                                                                   // 81
        container.addClass(settings.stack_on_small_class);                                                             // 82
      }                                                                                                                // 83
    };                                                                                                                 // 84
                                                                                                                       // 85
    self._prepare_direction = function(next_idx, current_direction) {                                                  // 86
      var dir = 'next';                                                                                                // 87
      if (next_idx <= idx) { dir = 'prev'; }                                                                           // 88
                                                                                                                       // 89
      if (settings.animation === 'slide') {                                                                            // 90
        setTimeout(function(){                                                                                         // 91
          slides_container.removeClass("swipe-prev swipe-next");                                                       // 92
          if (dir === 'next') {slides_container.addClass("swipe-next");}                                               // 93
          else if (dir === 'prev') {slides_container.addClass("swipe-prev");}                                          // 94
        },0);                                                                                                          // 95
      }                                                                                                                // 96
                                                                                                                       // 97
      var slides = self.slides();                                                                                      // 98
      if (next_idx >= slides.length) {                                                                                 // 99
        if (!settings.circular) return false;                                                                          // 100
        next_idx = 0;                                                                                                  // 101
      } else if (next_idx < 0) {                                                                                       // 102
        if (!settings.circular) return false;                                                                          // 103
        next_idx = slides.length - 1;                                                                                  // 104
      }                                                                                                                // 105
      var current = $(slides.get(idx))                                                                                 // 106
        , next = $(slides.get(next_idx));                                                                              // 107
                                                                                                                       // 108
                                                                                                                       // 109
      return [dir, current, next, next_idx];                                                                           // 110
    };                                                                                                                 // 111
                                                                                                                       // 112
    self._goto = function(next_idx, start_timer) {                                                                     // 113
      if (next_idx === null) {return false;}                                                                           // 114
      if (self.cache.animating) {return false;}                                                                        // 115
      if (next_idx === idx) {return false;}                                                                            // 116
      if (typeof self.cache.timer === 'object') {self.cache.timer.restart();}                                          // 117
                                                                                                                       // 118
      var slides = self.slides();                                                                                      // 119
      self.cache.animating = true;                                                                                     // 120
      var res = self._prepare_direction(next_idx)                                                                      // 121
        , dir = res[0]                                                                                                 // 122
        , current = res[1]                                                                                             // 123
        , next = res[2]                                                                                                // 124
        , next_idx = res[3];                                                                                           // 125
                                                                                                                       // 126
      slides_container.trigger('before-slide-change.fndtn.orbit');                                                     // 127
      settings.before_slide_change();                                                                                  // 128
      idx = next_idx;                                                                                                  // 129
                                                                                                                       // 130
      current.css("transitionDuration", settings.animation_speed+"ms");                                                // 131
      next.css("transitionDuration", settings.animation_speed+"ms");                                                   // 132
                                                                                                                       // 133
      var callback = function() {                                                                                      // 134
        var unlock = function() {                                                                                      // 135
          if (start_timer === true) {self.cache.timer.restart();}                                                      // 136
          self.update_slide_number(idx);                                                                               // 137
          next.addClass(settings.active_slide_class);                                                                  // 138
          self.update_active_link(next_idx);                                                                           // 139
          slides_container.trigger('after-slide-change.fndtn.orbit',[{slide_number: idx, total_slides: slides.length}]);
          settings.after_slide_change(idx, slides.length);                                                             // 141
          setTimeout(function(){                                                                                       // 142
            self.cache.animating = false;                                                                              // 143
          }, 100);                                                                                                     // 144
                                                                                                                       // 145
        };                                                                                                             // 146
        if (slides_container.height() != next.height() && settings.variable_height) {                                  // 147
          slides_container.animate({'height': next.height()}, 250, 'linear', unlock);                                  // 148
        } else {                                                                                                       // 149
          unlock();                                                                                                    // 150
        }                                                                                                              // 151
      };                                                                                                               // 152
                                                                                                                       // 153
      if (slides.length === 1) {callback(); return false;}                                                             // 154
                                                                                                                       // 155
      var start_animation = function() {                                                                               // 156
        if (dir === 'next') {animate.next(current, next, callback);}                                                   // 157
        if (dir === 'prev') {animate.prev(current, next, callback);}                                                   // 158
      };                                                                                                               // 159
                                                                                                                       // 160
      if (next.height() > slides_container.height() && settings.variable_height) {                                     // 161
        slides_container.animate({'height': next.height()}, 250, 'linear', start_animation);                           // 162
      } else {                                                                                                         // 163
        start_animation();                                                                                             // 164
      }                                                                                                                // 165
    };                                                                                                                 // 166
                                                                                                                       // 167
    self.next = function(e) {                                                                                          // 168
      e.stopImmediatePropagation();                                                                                    // 169
      e.preventDefault();                                                                                              // 170
      self._prepare_direction(idx + 1);                                                                                // 171
      setTimeout(function(){                                                                                           // 172
        self._goto(idx + 1);                                                                                           // 173
    }, 100);                                                                                                           // 174
    };                                                                                                                 // 175
                                                                                                                       // 176
    self.prev = function(e) {                                                                                          // 177
      e.stopImmediatePropagation();                                                                                    // 178
      e.preventDefault();                                                                                              // 179
      self._prepare_direction(idx - 1);                                                                                // 180
      setTimeout(function(){                                                                                           // 181
        self._goto(idx - 1)                                                                                            // 182
      }, 100);                                                                                                         // 183
    };                                                                                                                 // 184
                                                                                                                       // 185
    self.link_custom = function(e) {                                                                                   // 186
      e.preventDefault();                                                                                              // 187
      var link = $(this).attr('data-orbit-link');                                                                      // 188
      if ((typeof link === 'string') && (link = $.trim(link)) != "") {                                                 // 189
        var slide = container.find('[data-orbit-slide='+link+']');                                                     // 190
        if (slide.index() != -1) {                                                                                     // 191
          setTimeout(function(){                                                                                       // 192
            self._goto(slide.index());                                                                                 // 193
          },100);                                                                                                      // 194
        }                                                                                                              // 195
      }                                                                                                                // 196
    };                                                                                                                 // 197
                                                                                                                       // 198
    self.link_bullet = function(e) {                                                                                   // 199
      var index = $(this).attr('data-orbit-slide');                                                                    // 200
      if ((typeof index === 'string') && (index = $.trim(index)) != "") {                                              // 201
        if(isNaN(parseInt(index)))                                                                                     // 202
        {                                                                                                              // 203
          var slide = container.find('[data-orbit-slide='+index+']');                                                  // 204
          if (slide.index() != -1) {                                                                                   // 205
            setTimeout(function(){                                                                                     // 206
              self._goto(slide.index() + 1);                                                                           // 207
            },100);                                                                                                    // 208
          }                                                                                                            // 209
        }                                                                                                              // 210
        else                                                                                                           // 211
        {                                                                                                              // 212
          setTimeout(function(){                                                                                       // 213
            self._goto(parseInt(index));                                                                               // 214
          },100);                                                                                                      // 215
        }                                                                                                              // 216
      }                                                                                                                // 217
                                                                                                                       // 218
    }                                                                                                                  // 219
                                                                                                                       // 220
    self.timer_callback = function() {                                                                                 // 221
      self._goto(idx + 1, true);                                                                                       // 222
    }                                                                                                                  // 223
                                                                                                                       // 224
    self.compute_dimensions = function() {                                                                             // 225
      var current = $(self.slides().get(idx));                                                                         // 226
      var h = current.height();                                                                                        // 227
      if (!settings.variable_height) {                                                                                 // 228
        self.slides().each(function(){                                                                                 // 229
          if ($(this).height() > h) { h = $(this).height(); }                                                          // 230
        });                                                                                                            // 231
      }                                                                                                                // 232
      slides_container.height(h);                                                                                      // 233
    };                                                                                                                 // 234
                                                                                                                       // 235
    self.create_timer = function() {                                                                                   // 236
      var t = new Timer(                                                                                               // 237
        container.find('.'+settings.timer_container_class),                                                            // 238
        settings,                                                                                                      // 239
        self.timer_callback                                                                                            // 240
      );                                                                                                               // 241
      return t;                                                                                                        // 242
    };                                                                                                                 // 243
                                                                                                                       // 244
    self.stop_timer = function() {                                                                                     // 245
      if (typeof self.cache.timer === 'object') self.cache.timer.stop();                                               // 246
    };                                                                                                                 // 247
                                                                                                                       // 248
    self.toggle_timer = function() {                                                                                   // 249
      var t = container.find('.'+settings.timer_container_class);                                                      // 250
      if (t.hasClass(settings.timer_paused_class)) {                                                                   // 251
        if (typeof self.cache.timer === 'undefined') {self.cache.timer = self.create_timer();}                         // 252
        self.cache.timer.start();                                                                                      // 253
      }                                                                                                                // 254
      else {                                                                                                           // 255
        if (typeof self.cache.timer === 'object') {self.cache.timer.stop();}                                           // 256
      }                                                                                                                // 257
    };                                                                                                                 // 258
                                                                                                                       // 259
    self.init = function() {                                                                                           // 260
      self.build_markup();                                                                                             // 261
      if (settings.timer) {                                                                                            // 262
        self.cache.timer = self.create_timer();                                                                        // 263
        Foundation.utils.image_loaded(this.slides().children('img'), self.cache.timer.start);                          // 264
      }                                                                                                                // 265
      // animate = new FadeAnimation(settings, slides_container);                                                      // 266
      // if (settings.animation === 'slide')                                                                           // 267
      //   animate = new SlideAnimation(settings, slides_container);                                                   // 268
      if(settings.animation === 'fade') {slides_container.addClass('fade');}                                           // 269
      animate = new CSSAnimation(settings, slides_container);                                                          // 270
      container.on('click', '.'+settings.next_class, self.next);                                                       // 271
      container.on('click', '.'+settings.prev_class, self.prev);                                                       // 272
                                                                                                                       // 273
      container.on('click', '[data-orbit-slide]', self.link_bullet);                                                   // 274
      container.on('click', self.toggle_timer);                                                                        // 275
      if (settings.swipe) {                                                                                            // 276
        slides_container.on('touchstart.fndtn.orbit',function(e) {                                                     // 277
          if (self.cache.animating) {return;}                                                                          // 278
          if (!e.touches) {e = e.originalEvent;}                                                                       // 279
                                                                                                                       // 280
          self.cache.start_page_x = e.touches[0].pageX;                                                                // 281
          self.cache.start_page_y = e.touches[0].pageY;                                                                // 282
          self.cache.start_time = (new Date()).getTime();                                                              // 283
          self.cache.delta_x = 0;                                                                                      // 284
          self.cache.is_scrolling = null;                                                                              // 285
          self.cache.direction = null;                                                                                 // 286
                                                                                                                       // 287
          self.stop_timer(); // does not appear to prevent callback from occurring                                     // 288
        })                                                                                                             // 289
        .on('touchmove.fndtn.orbit',function(e) {                                                                      // 290
          if (Math.abs(self.cache.delta_x) > 5) {                                                                      // 291
            e.preventDefault();                                                                                        // 292
            e.stopPropagation();                                                                                       // 293
          }                                                                                                            // 294
                                                                                                                       // 295
          if (self.cache.animating) {return;}                                                                          // 296
          requestAnimationFrame(function(){                                                                            // 297
            if (!e.touches) { e = e.originalEvent; }                                                                   // 298
                                                                                                                       // 299
            // Ignore pinch/zoom events                                                                                // 300
            if(e.touches.length > 1 || e.scale && e.scale !== 1) return;                                               // 301
                                                                                                                       // 302
            self.cache.delta_x = e.touches[0].pageX - self.cache.start_page_x;                                         // 303
                                                                                                                       // 304
            if (self.cache.is_scrolling === null) {                                                                    // 305
              self.cache.is_scrolling = !!( self.cache.is_scrolling || Math.abs(self.cache.delta_x) < Math.abs(e.touches[0].pageY - self.cache.start_page_y) );
            }                                                                                                          // 307
                                                                                                                       // 308
            if (self.cache.is_scrolling) {                                                                             // 309
              return;                                                                                                  // 310
            }                                                                                                          // 311
                                                                                                                       // 312
            var direction = (self.cache.delta_x < 0) ? (idx+1) : (idx-1);                                              // 313
            if (self.cache.direction !== direction) {                                                                  // 314
              var res = self._prepare_direction(direction);                                                            // 315
              self.cache.direction = direction;                                                                        // 316
              self.cache.dir = res[0];                                                                                 // 317
              self.cache.current = res[1];                                                                             // 318
              self.cache.next = res[2];                                                                                // 319
            }                                                                                                          // 320
                                                                                                                       // 321
            if (settings.animation === 'slide') {                                                                      // 322
              var offset, next_offset;                                                                                 // 323
                                                                                                                       // 324
              offset = (self.cache.delta_x / container.width()) * 100;                                                 // 325
              if (offset >= 0) {next_offset = -(100 - offset);}                                                        // 326
              else {next_offset = 100 + offset;}                                                                       // 327
                                                                                                                       // 328
              self.cache.current.css("transform","translate3d("+offset+"%,0,0)");                                      // 329
              self.cache.next.css("transform","translate3d("+next_offset+"%,0,0)");                                    // 330
            }                                                                                                          // 331
          });                                                                                                          // 332
        })                                                                                                             // 333
        .on('touchend.fndtn.orbit', function(e) {                                                                      // 334
          if (self.cache.animating) {return;}                                                                          // 335
          e.preventDefault();                                                                                          // 336
          e.stopPropagation();                                                                                         // 337
          setTimeout(function(){                                                                                       // 338
            self._goto(self.cache.direction);                                                                          // 339
          }, 50);                                                                                                      // 340
        });                                                                                                            // 341
      }                                                                                                                // 342
      container.on('mouseenter.fndtn.orbit', function(e) {                                                             // 343
        if (settings.timer && settings.pause_on_hover) {                                                               // 344
          self.stop_timer();                                                                                           // 345
        }                                                                                                              // 346
      })                                                                                                               // 347
      .on('mouseleave.fndtn.orbit', function(e) {                                                                      // 348
        if (settings.timer && settings.resume_on_mouseout) {                                                           // 349
          self.cache.timer.start();                                                                                    // 350
        }                                                                                                              // 351
      });                                                                                                              // 352
                                                                                                                       // 353
      $(document).on('click', '[data-orbit-link]', self.link_custom);                                                  // 354
      $(window).on('resize', self.compute_dimensions);                                                                 // 355
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);                           // 356
      Foundation.utils.image_loaded(this.slides().children('img'), function() {                                        // 357
        container.prev('.preloader').css('display', 'none');                                                           // 358
        self.update_slide_number(0);                                                                                   // 359
        self.update_active_link(0);                                                                                    // 360
        slides_container.trigger('ready.fndtn.orbit');                                                                 // 361
      });                                                                                                              // 362
    };                                                                                                                 // 363
                                                                                                                       // 364
    self.init();                                                                                                       // 365
  };                                                                                                                   // 366
                                                                                                                       // 367
  var Timer = function(el, settings, callback) {                                                                       // 368
    var self = this,                                                                                                   // 369
        duration = settings.timer_speed,                                                                               // 370
        progress = el.find('.'+settings.timer_progress_class),                                                         // 371
        start,                                                                                                         // 372
        timeout,                                                                                                       // 373
        left = -1;                                                                                                     // 374
                                                                                                                       // 375
    this.update_progress = function(w) {                                                                               // 376
      var new_progress = progress.clone();                                                                             // 377
      new_progress.attr('style', '');                                                                                  // 378
      new_progress.css('width', w+'%');                                                                                // 379
      progress.replaceWith(new_progress);                                                                              // 380
      progress = new_progress;                                                                                         // 381
    };                                                                                                                 // 382
                                                                                                                       // 383
    this.restart = function() {                                                                                        // 384
      clearTimeout(timeout);                                                                                           // 385
      el.addClass(settings.timer_paused_class);                                                                        // 386
      left = -1;                                                                                                       // 387
      self.update_progress(0);                                                                                         // 388
      self.start();                                                                                                    // 389
    };                                                                                                                 // 390
                                                                                                                       // 391
    this.start = function() {                                                                                          // 392
      if (!el.hasClass(settings.timer_paused_class)) {return true;}                                                    // 393
      left = (left === -1) ? duration : left;                                                                          // 394
      el.removeClass(settings.timer_paused_class);                                                                     // 395
      start = new Date().getTime();                                                                                    // 396
      progress.animate({'width': '100%'}, left, 'linear');                                                             // 397
      timeout = setTimeout(function() {                                                                                // 398
        self.restart();                                                                                                // 399
        callback();                                                                                                    // 400
      }, left);                                                                                                        // 401
      el.trigger('timer-started.fndtn.orbit')                                                                          // 402
    };                                                                                                                 // 403
                                                                                                                       // 404
    this.stop = function() {                                                                                           // 405
      if (el.hasClass(settings.timer_paused_class)) {return true;}                                                     // 406
      clearTimeout(timeout);                                                                                           // 407
      el.addClass(settings.timer_paused_class);                                                                        // 408
      var end = new Date().getTime();                                                                                  // 409
      left = left - (end - start);                                                                                     // 410
      var w = 100 - ((left / duration) * 100);                                                                         // 411
      self.update_progress(w);                                                                                         // 412
      el.trigger('timer-stopped.fndtn.orbit');                                                                         // 413
    };                                                                                                                 // 414
  };                                                                                                                   // 415
                                                                                                                       // 416
  var CSSAnimation = function(settings, container) {                                                                   // 417
    var animation_end = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";             // 418
                                                                                                                       // 419
    this.next = function(current, next, callback) {                                                                    // 420
      next.on(animation_end, function(e){                                                                              // 421
        next.unbind(animation_end);                                                                                    // 422
        current.removeClass("active animate-out");                                                                     // 423
        next.removeClass("animate-in");                                                                                // 424
        callback();                                                                                                    // 425
      });                                                                                                              // 426
      container.children().css({                                                                                       // 427
        "transform":"",                                                                                                // 428
        "transitionDuration":""                                                                                        // 429
      });                                                                                                              // 430
      current.addClass("animate-out");                                                                                 // 431
      next.addClass("animate-in");                                                                                     // 432
    };                                                                                                                 // 433
                                                                                                                       // 434
    this.prev = function(current, prev, callback) {                                                                    // 435
      prev.on(animation_end, function(e){                                                                              // 436
        prev.unbind(animation_end);                                                                                    // 437
        current.removeClass("active animate-out");                                                                     // 438
        prev.removeClass("animate-in");                                                                                // 439
        callback();                                                                                                    // 440
      });                                                                                                              // 441
      current.css({"transform":"", "transitionDuration":""}).addClass("animate-out");                                  // 442
      prev.css({"transform":"", "transitionDuration":""}).addClass("animate-in");                                      // 443
    };                                                                                                                 // 444
  };                                                                                                                   // 445
                                                                                                                       // 446
                                                                                                                       // 447
  Foundation.libs = Foundation.libs || {};                                                                             // 448
                                                                                                                       // 449
  Foundation.libs.orbit = {                                                                                            // 450
    name: 'orbit',                                                                                                     // 451
                                                                                                                       // 452
    version: '5.2.1',                                                                                                  // 453
                                                                                                                       // 454
    settings: {                                                                                                        // 455
      animation: 'slide',                                                                                              // 456
      timer_speed: 10000,                                                                                              // 457
      pause_on_hover: true,                                                                                            // 458
      resume_on_mouseout: false,                                                                                       // 459
      animation_speed: 500,                                                                                            // 460
      stack_on_small: false,                                                                                           // 461
      navigation_arrows: true,                                                                                         // 462
      slide_number: true,                                                                                              // 463
      slide_number_text: 'of',                                                                                         // 464
      container_class: 'orbit-container',                                                                              // 465
      stack_on_small_class: 'orbit-stack-on-small',                                                                    // 466
      next_class: 'orbit-next',                                                                                        // 467
      prev_class: 'orbit-prev',                                                                                        // 468
      timer_container_class: 'orbit-timer',                                                                            // 469
      timer_paused_class: 'paused',                                                                                    // 470
      timer_progress_class: 'orbit-progress',                                                                          // 471
      slides_container_class: 'orbit-slides-container',                                                                // 472
      slide_selector: '*',                                                                                             // 473
      bullets_container_class: 'orbit-bullets',                                                                        // 474
      bullets_active_class: 'active',                                                                                  // 475
      slide_number_class: 'orbit-slide-number',                                                                        // 476
      caption_class: 'orbit-caption',                                                                                  // 477
      active_slide_class: 'active',                                                                                    // 478
      orbit_transition_class: 'orbit-transitioning',                                                                   // 479
      bullets: true,                                                                                                   // 480
      circular: true,                                                                                                  // 481
      timer: true,                                                                                                     // 482
      variable_height: false,                                                                                          // 483
      swipe: true,                                                                                                     // 484
      before_slide_change: noop,                                                                                       // 485
      after_slide_change: noop                                                                                         // 486
    },                                                                                                                 // 487
                                                                                                                       // 488
    init : function (scope, method, options) {                                                                         // 489
      var self = this;                                                                                                 // 490
      this.bindings(method, options);                                                                                  // 491
    },                                                                                                                 // 492
                                                                                                                       // 493
    events : function (instance) {                                                                                     // 494
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));                           // 495
      this.S(instance).data(self.name + '-instance', orbit_instance);                                                  // 496
    },                                                                                                                 // 497
                                                                                                                       // 498
    reflow : function () {                                                                                             // 499
      var self = this;                                                                                                 // 500
                                                                                                                       // 501
      if (self.S(self.scope).is('[data-orbit]')) {                                                                     // 502
        var $el = self.S(self.scope);                                                                                  // 503
        var instance = $el.data(self.name + '-instance');                                                              // 504
        instance.compute_dimensions();                                                                                 // 505
      } else {                                                                                                         // 506
        self.S('[data-orbit]', self.scope).each(function(idx, el) {                                                    // 507
          var $el = self.S(el);                                                                                        // 508
          var opts = self.data_options($el);                                                                           // 509
          var instance = $el.data(self.name + '-instance');                                                            // 510
          instance.compute_dimensions();                                                                               // 511
        });                                                                                                            // 512
      }                                                                                                                // 513
    }                                                                                                                  // 514
  };                                                                                                                   // 515
                                                                                                                       // 516
                                                                                                                       // 517
}(jQuery, this, this.document));                                                                                       // 518
                                                                                                                       // 519
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.reveal.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.reveal = {                                                                                           // 4
    name : 'reveal',                                                                                                   // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    locked : false,                                                                                                    // 9
                                                                                                                       // 10
    settings : {                                                                                                       // 11
      animation: 'fadeAndPop',                                                                                         // 12
      animation_speed: 250,                                                                                            // 13
      close_on_background_click: true,                                                                                 // 14
      close_on_esc: true,                                                                                              // 15
      dismiss_modal_class: 'close-reveal-modal',                                                                       // 16
      bg_class: 'reveal-modal-bg',                                                                                     // 17
      open: function(){},                                                                                              // 18
      opened: function(){},                                                                                            // 19
      close: function(){},                                                                                             // 20
      closed: function(){},                                                                                            // 21
      bg : $('.reveal-modal-bg'),                                                                                      // 22
      css : {                                                                                                          // 23
        open : {                                                                                                       // 24
          'opacity': 0,                                                                                                // 25
          'visibility': 'visible',                                                                                     // 26
          'display' : 'block'                                                                                          // 27
        },                                                                                                             // 28
        close : {                                                                                                      // 29
          'opacity': 1,                                                                                                // 30
          'visibility': 'hidden',                                                                                      // 31
          'display': 'none'                                                                                            // 32
        }                                                                                                              // 33
      }                                                                                                                // 34
    },                                                                                                                 // 35
                                                                                                                       // 36
    init : function (scope, method, options) {                                                                         // 37
      $.extend(true, this.settings, method, options);                                                                  // 38
      this.bindings(method, options);                                                                                  // 39
    },                                                                                                                 // 40
                                                                                                                       // 41
    events : function (scope) {                                                                                        // 42
      var self = this,                                                                                                 // 43
          S = self.S;                                                                                                  // 44
                                                                                                                       // 45
      S(this.scope)                                                                                                    // 46
        .off('.reveal')                                                                                                // 47
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']', function (e) {                     // 48
          e.preventDefault();                                                                                          // 49
                                                                                                                       // 50
          if (!self.locked) {                                                                                          // 51
            var element = S(this),                                                                                     // 52
                ajax = element.data(self.data_attr('reveal-ajax'));                                                    // 53
                                                                                                                       // 54
            self.locked = true;                                                                                        // 55
                                                                                                                       // 56
            if (typeof ajax === 'undefined') {                                                                         // 57
              self.open.call(self, element);                                                                           // 58
            } else {                                                                                                   // 59
              var url = ajax === true ? element.attr('href') : ajax;                                                   // 60
                                                                                                                       // 61
              self.open.call(self, element, {url: url});                                                               // 62
            }                                                                                                          // 63
          }                                                                                                            // 64
        });                                                                                                            // 65
                                                                                                                       // 66
      S(document)                                                                                                      // 67
        .on('touchend.fndtn.reveal click.fndtn.reveal', this.close_targets(), function (e) {                           // 68
                                                                                                                       // 69
          e.preventDefault();                                                                                          // 70
                                                                                                                       // 71
          if (!self.locked) {                                                                                          // 72
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init'),                  // 73
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];                                         // 74
                                                                                                                       // 75
            if (bg_clicked) {                                                                                          // 76
              if (settings.close_on_background_click) {                                                                // 77
                e.stopPropagation();                                                                                   // 78
              } else {                                                                                                 // 79
                return;                                                                                                // 80
              }                                                                                                        // 81
            }                                                                                                          // 82
                                                                                                                       // 83
            self.locked = true;                                                                                        // 84
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open') : S(this).closest('[' + self.attr_name() + ']'));
          }                                                                                                            // 86
        });                                                                                                            // 87
                                                                                                                       // 88
      if(S('[' + self.attr_name() + ']', this.scope).length > 0) {                                                     // 89
        S(this.scope)                                                                                                  // 90
          // .off('.reveal')                                                                                           // 91
          .on('open.fndtn.reveal', this.settings.open)                                                                 // 92
          .on('opened.fndtn.reveal', this.settings.opened)                                                             // 93
          .on('opened.fndtn.reveal', this.open_video)                                                                  // 94
          .on('close.fndtn.reveal', this.settings.close)                                                               // 95
          .on('closed.fndtn.reveal', this.settings.closed)                                                             // 96
          .on('closed.fndtn.reveal', this.close_video);                                                                // 97
      } else {                                                                                                         // 98
        S(this.scope)                                                                                                  // 99
          // .off('.reveal')                                                                                           // 100
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)                                   // 101
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)                               // 102
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)                                    // 103
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)                                 // 104
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)                               // 105
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);                                  // 106
      }                                                                                                                // 107
                                                                                                                       // 108
      return true;                                                                                                     // 109
    },                                                                                                                 // 110
                                                                                                                       // 111
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 112
    key_up_on : function (scope) {                                                                                     // 113
      var self = this;                                                                                                 // 114
                                                                                                                       // 115
      // PATCH #1: fixing multiple keyup event trigger from single key press                                           // 116
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {                           // 117
        var open_modal = self.S('[' + self.attr_name() + '].open'),                                                    // 118
            settings = open_modal.data(self.attr_name(true) + '-init');                                                // 119
        // PATCH #2: making sure that the close event can be called only while unlocked,                               // 120
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.      // 121
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);                                                                           // 123
        }                                                                                                              // 124
      });                                                                                                              // 125
                                                                                                                       // 126
      return true;                                                                                                     // 127
    },                                                                                                                 // 128
                                                                                                                       // 129
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 130
    key_up_off : function (scope) {                                                                                    // 131
      this.S('body').off('keyup.fndtn.reveal');                                                                        // 132
      return true;                                                                                                     // 133
    },                                                                                                                 // 134
                                                                                                                       // 135
    open : function (target, ajax_settings) {                                                                          // 136
      var self = this;                                                                                                 // 137
      if (target) {                                                                                                    // 138
        if (typeof target.selector !== 'undefined') {                                                                  // 139
          var modal = self.S('#' + target.data(self.data_attr('reveal-id')));                                          // 140
        } else {                                                                                                       // 141
          var modal = self.S(this.scope);                                                                              // 142
                                                                                                                       // 143
          ajax_settings = target;                                                                                      // 144
        }                                                                                                              // 145
      } else {                                                                                                         // 146
        var modal = self.S(this.scope);                                                                                // 147
      }                                                                                                                // 148
                                                                                                                       // 149
      var settings = modal.data(self.attr_name(true) + '-init');                                                       // 150
                                                                                                                       // 151
      if (!modal.hasClass('open')) {                                                                                   // 152
        var open_modal = self.S('[' + self.attr_name() + '].open');                                                    // 153
                                                                                                                       // 154
        if (typeof modal.data('css-top') === 'undefined') {                                                            // 155
          modal.data('css-top', parseInt(modal.css('top'), 10))                                                        // 156
            .data('offset', this.cache_offset(modal));                                                                 // 157
        }                                                                                                              // 158
                                                                                                                       // 159
        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open             // 160
        modal.trigger('open');                                                                                         // 161
                                                                                                                       // 162
        if (open_modal.length < 1) {                                                                                   // 163
          this.toggle_bg(modal);                                                                                       // 164
        }                                                                                                              // 165
                                                                                                                       // 166
        if (typeof ajax_settings === 'string') {                                                                       // 167
          ajax_settings = {                                                                                            // 168
            url: ajax_settings                                                                                         // 169
          };                                                                                                           // 170
        }                                                                                                              // 171
                                                                                                                       // 172
        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {                                              // 173
          if (open_modal.length > 0) {                                                                                 // 174
            this.hide(open_modal, settings.css.close);                                                                 // 175
          }                                                                                                            // 176
                                                                                                                       // 177
          this.show(modal, settings.css.open);                                                                         // 178
        } else {                                                                                                       // 179
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;               // 180
                                                                                                                       // 181
          $.extend(ajax_settings, {                                                                                    // 182
            success: function (data, textStatus, jqXHR) {                                                              // 183
              if ( $.isFunction(old_success) ) {                                                                       // 184
                old_success(data, textStatus, jqXHR);                                                                  // 185
              }                                                                                                        // 186
                                                                                                                       // 187
              modal.html(data);                                                                                        // 188
              self.S(modal).foundation('section', 'reflow');                                                           // 189
                                                                                                                       // 190
              if (open_modal.length > 0) {                                                                             // 191
                self.hide(open_modal, settings.css.close);                                                             // 192
              }                                                                                                        // 193
              self.show(modal, settings.css.open);                                                                     // 194
            }                                                                                                          // 195
          });                                                                                                          // 196
                                                                                                                       // 197
          $.ajax(ajax_settings);                                                                                       // 198
        }                                                                                                              // 199
      }                                                                                                                // 200
    },                                                                                                                 // 201
                                                                                                                       // 202
    close : function (modal) {                                                                                         // 203
      var modal = modal && modal.length ? modal : this.S(this.scope),                                                  // 204
          open_modals = this.S('[' + this.attr_name() + '].open'),                                                     // 205
          settings = modal.data(this.attr_name(true) + '-init');                                                       // 206
                                                                                                                       // 207
      if (open_modals.length > 0) {                                                                                    // 208
        this.locked = true;                                                                                            // 209
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open             // 210
        modal.trigger('close');                                                                                        // 211
        this.toggle_bg(modal);                                                                                         // 212
        this.hide(open_modals, settings.css.close, settings);                                                          // 213
      }                                                                                                                // 214
    },                                                                                                                 // 215
                                                                                                                       // 216
    close_targets : function () {                                                                                      // 217
      var base = '.' + this.settings.dismiss_modal_class;                                                              // 218
                                                                                                                       // 219
      if (this.settings.close_on_background_click) {                                                                   // 220
        return base + ', .' + this.settings.bg_class;                                                                  // 221
      }                                                                                                                // 222
                                                                                                                       // 223
      return base;                                                                                                     // 224
    },                                                                                                                 // 225
                                                                                                                       // 226
    toggle_bg : function (modal) {                                                                                     // 227
      var settings = modal.data(this.attr_name(true));                                                                 // 228
                                                                                                                       // 229
      if (this.S('.' + this.settings.bg_class).length === 0) {                                                         // 230
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})                                             // 231
          .appendTo('body').hide();                                                                                    // 232
      }                                                                                                                // 233
                                                                                                                       // 234
      if (this.settings.bg.filter(':visible').length > 0) {                                                            // 235
        this.hide(this.settings.bg);                                                                                   // 236
      } else {                                                                                                         // 237
        this.show(this.settings.bg);                                                                                   // 238
      }                                                                                                                // 239
    },                                                                                                                 // 240
                                                                                                                       // 241
    show : function (el, css) {                                                                                        // 242
      // is modal                                                                                                      // 243
      if (css) {                                                                                                       // 244
        var settings = el.data(this.attr_name(true) + '-init');                                                        // 245
        if (el.parent('body').length === 0) {                                                                          // 246
          var placeholder = el.wrap('<div style="display: none;" />').parent(),                                        // 247
              rootElement = this.settings.rootElement || 'body';                                                       // 248
                                                                                                                       // 249
          el.on('closed.fndtn.reveal.wrapped', function() {                                                            // 250
            el.detach().appendTo(placeholder);                                                                         // 251
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');                                                         // 252
          });                                                                                                          // 253
                                                                                                                       // 254
          el.detach().appendTo(rootElement);                                                                           // 255
        }                                                                                                              // 256
                                                                                                                       // 257
        var animData = getAnimationData(settings.animation);                                                           // 258
        if (!animData.animate) {                                                                                       // 259
          this.locked = false;                                                                                         // 260
        }                                                                                                              // 261
        if (animData.pop) {                                                                                            // 262
          css.top = $(window).scrollTop() - el.data('offset') + 'px';                                                  // 263
          var end_css = {                                                                                              // 264
            top: $(window).scrollTop() + el.data('css-top') + 'px',                                                    // 265
            opacity: 1                                                                                                 // 266
          };                                                                                                           // 267
                                                                                                                       // 268
          return setTimeout(function () {                                                                              // 269
            return el                                                                                                  // 270
              .css(css)                                                                                                // 271
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 272
                this.locked = false;                                                                                   // 273
                el.trigger('opened');                                                                                  // 274
              }.bind(this))                                                                                            // 275
              .addClass('open');                                                                                       // 276
          }.bind(this), settings.animation_speed / 2);                                                                 // 277
        }                                                                                                              // 278
                                                                                                                       // 279
        if (animData.fade) {                                                                                           // 280
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';                                                 // 281
          var end_css = {opacity: 1};                                                                                  // 282
                                                                                                                       // 283
          return setTimeout(function () {                                                                              // 284
            return el                                                                                                  // 285
              .css(css)                                                                                                // 286
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 287
                this.locked = false;                                                                                   // 288
                el.trigger('opened');                                                                                  // 289
              }.bind(this))                                                                                            // 290
              .addClass('open');                                                                                       // 291
          }.bind(this), settings.animation_speed / 2);                                                                 // 292
        }                                                                                                              // 293
                                                                                                                       // 294
        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened');                                // 295
      }                                                                                                                // 296
                                                                                                                       // 297
      var settings = this.settings;                                                                                    // 298
                                                                                                                       // 299
      // should we animate the background?                                                                             // 300
      if (getAnimationData(settings.animation).fade) {                                                                 // 301
        return el.fadeIn(settings.animation_speed / 2);                                                                // 302
      }                                                                                                                // 303
                                                                                                                       // 304
      this.locked = false;                                                                                             // 305
                                                                                                                       // 306
      return el.show();                                                                                                // 307
    },                                                                                                                 // 308
                                                                                                                       // 309
    hide : function (el, css) {                                                                                        // 310
      // is modal                                                                                                      // 311
      if (css) {                                                                                                       // 312
        var settings = el.data(this.attr_name(true) + '-init');                                                        // 313
        var animData = getAnimationData(settings.animation);                                                           // 314
        if (!animData.animate) {                                                                                       // 315
          this.locked = false;                                                                                         // 316
        }                                                                                                              // 317
        if (animData.pop) {                                                                                            // 318
          var end_css = {                                                                                              // 319
            top: - $(window).scrollTop() - el.data('offset') + 'px',                                                   // 320
            opacity: 0                                                                                                 // 321
          };                                                                                                           // 322
                                                                                                                       // 323
          return setTimeout(function () {                                                                              // 324
            return el                                                                                                  // 325
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 326
                this.locked = false;                                                                                   // 327
                el.css(css).trigger('closed');                                                                         // 328
              }.bind(this))                                                                                            // 329
              .removeClass('open');                                                                                    // 330
          }.bind(this), settings.animation_speed / 2);                                                                 // 331
        }                                                                                                              // 332
                                                                                                                       // 333
        if (animData.fade) {                                                                                           // 334
          var end_css = {opacity: 0};                                                                                  // 335
                                                                                                                       // 336
          return setTimeout(function () {                                                                              // 337
            return el                                                                                                  // 338
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 339
                this.locked = false;                                                                                   // 340
                el.css(css).trigger('closed');                                                                         // 341
              }.bind(this))                                                                                            // 342
              .removeClass('open');                                                                                    // 343
          }.bind(this), settings.animation_speed / 2);                                                                 // 344
        }                                                                                                              // 345
                                                                                                                       // 346
        return el.hide().css(css).removeClass('open').trigger('closed');                                               // 347
      }                                                                                                                // 348
                                                                                                                       // 349
      var settings = this.settings;                                                                                    // 350
                                                                                                                       // 351
      // should we animate the background?                                                                             // 352
      if (getAnimationData(settings.animation).fade) {                                                                 // 353
        return el.fadeOut(settings.animation_speed / 2);                                                               // 354
      }                                                                                                                // 355
                                                                                                                       // 356
      return el.hide();                                                                                                // 357
    },                                                                                                                 // 358
                                                                                                                       // 359
    close_video : function (e) {                                                                                       // 360
      var video = $('.flex-video', e.target),                                                                          // 361
          iframe = $('iframe', video);                                                                                 // 362
                                                                                                                       // 363
      if (iframe.length > 0) {                                                                                         // 364
        iframe.attr('data-src', iframe[0].src);                                                                        // 365
        iframe.attr('src', 'about:blank');                                                                             // 366
        video.hide();                                                                                                  // 367
      }                                                                                                                // 368
    },                                                                                                                 // 369
                                                                                                                       // 370
    open_video : function (e) {                                                                                        // 371
      var video = $('.flex-video', e.target),                                                                          // 372
          iframe = video.find('iframe');                                                                               // 373
                                                                                                                       // 374
      if (iframe.length > 0) {                                                                                         // 375
        var data_src = iframe.attr('data-src');                                                                        // 376
        if (typeof data_src === 'string') {                                                                            // 377
          iframe[0].src = iframe.attr('data-src');                                                                     // 378
        } else {                                                                                                       // 379
          var src = iframe[0].src;                                                                                     // 380
          iframe[0].src = undefined;                                                                                   // 381
          iframe[0].src = src;                                                                                         // 382
        }                                                                                                              // 383
        video.show();                                                                                                  // 384
      }                                                                                                                // 385
    },                                                                                                                 // 386
                                                                                                                       // 387
    data_attr: function (str) {                                                                                        // 388
      if (this.namespace.length > 0) {                                                                                 // 389
        return this.namespace + '-' + str;                                                                             // 390
      }                                                                                                                // 391
                                                                                                                       // 392
      return str;                                                                                                      // 393
    },                                                                                                                 // 394
                                                                                                                       // 395
    cache_offset : function (modal) {                                                                                  // 396
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);                                             // 397
                                                                                                                       // 398
      modal.hide();                                                                                                    // 399
                                                                                                                       // 400
      return offset;                                                                                                   // 401
    },                                                                                                                 // 402
                                                                                                                       // 403
    off : function () {                                                                                                // 404
      $(this.scope).off('.fndtn.reveal');                                                                              // 405
    },                                                                                                                 // 406
                                                                                                                       // 407
    reflow : function () {}                                                                                            // 408
  };                                                                                                                   // 409
                                                                                                                       // 410
  /*                                                                                                                   // 411
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}                                        // 412
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}                                        // 413
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}                                       // 414
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}                                       // 415
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}                                       // 416
   */                                                                                                                  // 417
  function getAnimationData(str) {                                                                                     // 418
    var fade = /fade/i.test(str);                                                                                      // 419
    var pop = /pop/i.test(str);                                                                                        // 420
    return {                                                                                                           // 421
      animate: fade || pop,                                                                                            // 422
      pop: pop,                                                                                                        // 423
      fade: fade                                                                                                       // 424
    };                                                                                                                 // 425
  }                                                                                                                    // 426
}(jQuery, this, this.document));                                                                                       // 427
                                                                                                                       // 428
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.slider.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.slider = {                                                                                           // 4
    name : 'slider',                                                                                                   // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings: {                                                                                                        // 9
      start: 0,                                                                                                        // 10
      end: 100,                                                                                                        // 11
      step: 1,                                                                                                         // 12
      initial: null,                                                                                                   // 13
      display_selector: '',                                                                                            // 14
      on_change: function(){}                                                                                          // 15
    },                                                                                                                 // 16
                                                                                                                       // 17
    cache : {},                                                                                                        // 18
                                                                                                                       // 19
    init : function (scope, method, options) {                                                                         // 20
      Foundation.inherit(this,'throttle');                                                                             // 21
      this.bindings(method, options);                                                                                  // 22
      this.reflow();                                                                                                   // 23
    },                                                                                                                 // 24
                                                                                                                       // 25
    events : function() {                                                                                              // 26
      var self = this;                                                                                                 // 27
                                                                                                                       // 28
      $(this.scope)                                                                                                    // 29
        .off('.slider')                                                                                                // 30
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider', '[' + self.attr_name() + '] .range-slider-handle', function(e) {
          if (!self.cache.active) {                                                                                    // 32
            self.set_active_slider($(e.target));                                                                       // 33
          }                                                                                                            // 34
        })                                                                                                             // 35
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function(e) {                    // 36
          if (!!self.cache.active) {                                                                                   // 37
            e.preventDefault();                                                                                        // 38
            self.calculate_position(self.cache.active, e.pageX || e.originalEvent.touches[0].clientX || e.currentPoint.x);
          }                                                                                                            // 40
        })                                                                                                             // 41
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function(e) {                         // 42
          self.remove_active_slider();                                                                                 // 43
        })                                                                                                             // 44
        .on('change.fndtn.slider', function(e) {                                                                       // 45
          self.settings.on_change;                                                                                     // 46
        });                                                                                                            // 47
                                                                                                                       // 48
      self.S(window)                                                                                                   // 49
        .on('resize.fndtn.slider', self.throttle(function(e) {                                                         // 50
          self.reflow();                                                                                               // 51
        }, 300));                                                                                                      // 52
    },                                                                                                                 // 53
                                                                                                                       // 54
    set_active_slider : function($handle) {                                                                            // 55
      this.cache.active = $handle;                                                                                     // 56
    },                                                                                                                 // 57
                                                                                                                       // 58
    remove_active_slider : function() {                                                                                // 59
      this.cache.active = null;                                                                                        // 60
    },                                                                                                                 // 61
                                                                                                                       // 62
    calculate_position : function($handle, cursor_x) {                                                                 // 63
      var self = this,                                                                                                 // 64
          settings = $.extend({}, self.settings, self.data_options($handle.parent())),                                 // 65
          handle_w = $.data($handle[0], 'handle_w'),                                                                   // 66
          handle_o = $.data($handle[0], 'handle_o'),                                                                   // 67
          bar_w = $.data($handle[0], 'bar_w'),                                                                         // 68
          bar_o = $.data($handle[0], 'bar_o');                                                                         // 69
                                                                                                                       // 70
      requestAnimationFrame(function(){                                                                                // 71
        var pct = self.limit_to((((cursor_x)-bar_o)/bar_w),0,1),                                                       // 72
            norm = self.normalized_value(pct, settings.start, settings.end, settings.step);                            // 73
                                                                                                                       // 74
        self.set_ui($handle, norm);                                                                                    // 75
      });                                                                                                              // 76
    },                                                                                                                 // 77
                                                                                                                       // 78
    set_ui : function($handle, value) {                                                                                // 79
      var settings = $.extend({}, this.settings, this.data_options($handle.parent())),                                 // 80
          handle_w = $.data($handle[0], 'handle_w'),                                                                   // 81
          bar_w = $.data($handle[0], 'bar_w'),                                                                         // 82
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),                                  // 83
          handle_offset = norm_pct*(bar_w-handle_w)-1,                                                                 // 84
          progress_bar_width = norm_pct*100;                                                                           // 85
                                                                                                                       // 86
      this.set_translate($handle, handle_offset);                                                                      // 87
      $handle.siblings('.range-slider-active-segment').css('width', progress_bar_width+'%');                           // 88
                                                                                                                       // 89
      $handle.parent().attr(this.attr_name(), value);                                                                  // 90
      $handle.parent().trigger('change');                                                                              // 91
                                                                                                                       // 92
      $handle.parent().children('input[type=hidden]').val(value);                                                      // 93
                                                                                                                       // 94
      if (settings.input_id != '') {                                                                                   // 95
        $(settings.display_selector).each(function(){                                                                  // 96
          if (this.hasOwnProperty('value')) {                                                                          // 97
            $(this).val(value);                                                                                        // 98
          } else {                                                                                                     // 99
            $(this).text(value);                                                                                       // 100
          }                                                                                                            // 101
        });                                                                                                            // 102
      }                                                                                                                // 103
                                                                                                                       // 104
    },                                                                                                                 // 105
                                                                                                                       // 106
    normalized_percentage : function(val, start, end) {                                                                // 107
      return val/(end - start);                                                                                        // 108
    },                                                                                                                 // 109
                                                                                                                       // 110
    normalized_value : function(val, start, end, step) {                                                               // 111
      var range = end - start,                                                                                         // 112
          step = step,                                                                                                 // 113
          point = val*range,                                                                                           // 114
          mod = (point-(point%step)) / step,                                                                           // 115
          rem = point % step,                                                                                          // 116
          round = ( rem >= step*0.5 ? step : 0);                                                                       // 117
      return (mod*step + round);                                                                                       // 118
    },                                                                                                                 // 119
                                                                                                                       // 120
    set_translate : function(ele, offset, vertical) {                                                                  // 121
      if (vertical) {                                                                                                  // 122
        $(ele)                                                                                                         // 123
          .css('-webkit-transform', 'translateY('+offset+'px)')                                                        // 124
          .css('-moz-transform', 'translateY('+offset+'px)')                                                           // 125
          .css('-ms-transform', 'translateY('+offset+'px)')                                                            // 126
          .css('-o-transform', 'translateY('+offset+'px)')                                                             // 127
          .css('transform', 'translateY('+offset+'px)');                                                               // 128
      } else {                                                                                                         // 129
        $(ele)                                                                                                         // 130
          .css('-webkit-transform', 'translateX('+offset+'px)')                                                        // 131
          .css('-moz-transform', 'translateX('+offset+'px)')                                                           // 132
          .css('-ms-transform', 'translateX('+offset+'px)')                                                            // 133
          .css('-o-transform', 'translateX('+offset+'px)')                                                             // 134
          .css('transform', 'translateX('+offset+'px)');                                                               // 135
      }                                                                                                                // 136
    },                                                                                                                 // 137
                                                                                                                       // 138
    limit_to : function(val, min, max) {                                                                               // 139
      return Math.min(Math.max(val, min), max);                                                                        // 140
    },                                                                                                                 // 141
                                                                                                                       // 142
    initialize_settings : function(handle) {                                                                           // 143
      $.data(handle, 'bar', $(handle).parent());                                                                       // 144
      $.data(handle, 'bar_o', $(handle).parent().offset().left);                                                       // 145
      $.data(handle, 'bar_w', $(handle).parent().outerWidth());                                                        // 146
      $.data(handle, 'handle_o', $(handle).offset().left);                                                             // 147
      $.data(handle, 'handle_w', $(handle).outerWidth());                                                              // 148
      $.data(handle, 'settings', $.extend({}, this.settings, this.data_options($(handle).parent())));                  // 149
    },                                                                                                                 // 150
                                                                                                                       // 151
    set_initial_position : function($ele) {                                                                            // 152
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),                                     // 153
          initial = (!!settings.initial ? settings.initial : Math.floor((settings.end-settings.start)*0.5/settings.step)*settings.step),
          $handle = $ele.children('.range-slider-handle');                                                             // 155
      this.set_ui($handle, initial);                                                                                   // 156
    },                                                                                                                 // 157
                                                                                                                       // 158
    set_value : function(value) {                                                                                      // 159
      var self = this;                                                                                                 // 160
      $('[' + self.attr_name() + ']', this.scope).each(function(){                                                     // 161
        $(this).attr(self.attr_name(), value);                                                                         // 162
      });                                                                                                              // 163
      if (!!$(this.scope).attr(self.attr_name())) {                                                                    // 164
        $(this.scope).attr(self.attr_name(), value);                                                                   // 165
      }                                                                                                                // 166
      self.reflow();                                                                                                   // 167
    },                                                                                                                 // 168
                                                                                                                       // 169
    reflow : function() {                                                                                              // 170
      var self = this;                                                                                                 // 171
      self.S('[' + this.attr_name() + ']').each(function() {                                                           // 172
        var handle = $(this).children('.range-slider-handle')[0],                                                      // 173
            val = $(this).attr(self.attr_name());                                                                      // 174
        self.initialize_settings(handle);                                                                              // 175
                                                                                                                       // 176
        if (val) {                                                                                                     // 177
          self.set_ui($(handle), parseInt(val));                                                                       // 178
        } else {                                                                                                       // 179
          self.set_initial_position($(this));                                                                          // 180
        }                                                                                                              // 181
      });                                                                                                              // 182
    }                                                                                                                  // 183
                                                                                                                       // 184
  };                                                                                                                   // 185
                                                                                                                       // 186
}(jQuery, this, this.document));                                                                                       // 187
                                                                                                                       // 188
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.tab.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*jslint unparam: true, browser: true, indent: 2 */                                                                    // 1
;(function ($, window, document, undefined) {                                                                          // 2
  'use strict';                                                                                                        // 3
                                                                                                                       // 4
  Foundation.libs.tab = {                                                                                              // 5
    name : 'tab',                                                                                                      // 6
                                                                                                                       // 7
    version : '5.2.1',                                                                                                 // 8
                                                                                                                       // 9
    settings : {                                                                                                       // 10
      active_class: 'active',                                                                                          // 11
      callback : function () {},                                                                                       // 12
      deep_linking: false,                                                                                             // 13
      scroll_to_content: true                                                                                          // 14
    },                                                                                                                 // 15
                                                                                                                       // 16
    default_tab_hashes: [],                                                                                            // 17
                                                                                                                       // 18
    init : function (scope, method, options) {                                                                         // 19
      var self = this,                                                                                                 // 20
          S = this.S;                                                                                                  // 21
                                                                                                                       // 22
      this.bindings(method, options);                                                                                  // 23
      this.handle_location_hash_change();                                                                              // 24
                                                                                                                       // 25
      // Store the default active tabs which will be referenced when the                                               // 26
      // location hash is absent, as in the case of navigating the tabs and                                            // 27
      // returning to the first viewing via the browser Back button.                                                   // 28
      S('[' + this.attr_name() + '] > dd.active > a', this.scope).each(function () {                                   // 29
        self.default_tab_hashes.push(this.hash);                                                                       // 30
      });                                                                                                              // 31
    },                                                                                                                 // 32
                                                                                                                       // 33
    events : function () {                                                                                             // 34
      var self = this,                                                                                                 // 35
          S = this.S;                                                                                                  // 36
                                                                                                                       // 37
      // Click event: tab title                                                                                        // 38
      S(this.scope).off('.tab').on('click.fndtn.tab', '[' + this.attr_name() + '] > dd > a', function (e) {            // 39
        e.preventDefault();                                                                                            // 40
        e.stopPropagation();                                                                                           // 41
        self.toggle_active_tab(S(this).parent());                                                                      // 42
      });                                                                                                              // 43
                                                                                                                       // 44
      // Location hash change event                                                                                    // 45
      S(window).on('hashchange.fndtn.tab', function (e) {                                                              // 46
        e.preventDefault();                                                                                            // 47
        self.handle_location_hash_change();                                                                            // 48
      });                                                                                                              // 49
    },                                                                                                                 // 50
                                                                                                                       // 51
    handle_location_hash_change : function () {                                                                        // 52
      var self = this,                                                                                                 // 53
          S = this.S;                                                                                                  // 54
                                                                                                                       // 55
      S('[' + this.attr_name() + ']', this.scope).each(function () {                                                   // 56
        var settings = S(this).data(self.attr_name(true) + '-init');                                                   // 57
        if (settings.deep_linking) {                                                                                   // 58
          // Match the location hash to a label                                                                        // 59
          var hash = self.scope.location.hash;                                                                         // 60
          if (hash != '') {                                                                                            // 61
            // Check whether the location hash references a tab content div or                                         // 62
            // another element on the page (inside or outside the tab content div)                                     // 63
            var hash_element = S(hash);                                                                                // 64
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tab-content')) {                   // 65
              // Tab content div                                                                                       // 66
              self.toggle_active_tab($('[' + self.attr_name() + '] > dd > a[href=' + hash + ']').parent());            // 67
            } else {                                                                                                   // 68
              // Not the tab content div. If inside the tab content, find the                                          // 69
              // containing tab and toggle it as active.                                                               // 70
              var hash_tab_container_id = hash_element.closest('.content').attr('id');                                 // 71
              if (hash_tab_container_id != undefined) {                                                                // 72
                self.toggle_active_tab($('[' + self.attr_name() + '] > dd > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }                                                                                                        // 74
            }                                                                                                          // 75
          } else {                                                                                                     // 76
            // Reference the default tab hashes which were initialized in the init function                            // 77
            for (var ind in self.default_tab_hashes) {                                                                 // 78
              self.toggle_active_tab($('[' + self.attr_name() + '] > dd > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }                                                                                                          // 80
          }                                                                                                            // 81
        }                                                                                                              // 82
       });                                                                                                             // 83
     },                                                                                                                // 84
                                                                                                                       // 85
    toggle_active_tab: function (tab, location_hash) {                                                                 // 86
      var S = this.S,                                                                                                  // 87
          tabs = tab.closest('[' + this.attr_name() + ']'),                                                            // 88
          anchor = tab.children('a').first(),                                                                          // 89
          target_hash = '#' + anchor.attr('href').split('#')[1],                                                       // 90
          target = S(target_hash),                                                                                     // 91
          siblings = tab.siblings(),                                                                                   // 92
          settings = tabs.data(this.attr_name(true) + '-init');                                                        // 93
                                                                                                                       // 94
      // allow usage of data-tab-content attribute instead of href                                                     // 95
      if (S(this).data(this.data_attr('tab-content'))) {                                                               // 96
        target_hash = '#' + S(this).data(this.data_attr('tab-content')).split('#')[1];                                 // 97
        target = S(target_hash);                                                                                       // 98
      }                                                                                                                // 99
                                                                                                                       // 100
      if (settings.deep_linking) {                                                                                     // 101
        // Get the scroll Y position prior to moving to the hash ID                                                    // 102
        var cur_ypos = $('body,html').scrollTop();                                                                     // 103
                                                                                                                       // 104
        // Update the location hash to preserve browser history                                                        // 105
        // Note that the hash does not need to correspond to the                                                       // 106
        // tab content ID anchor; it can be an ID inside or outside of the tab                                         // 107
        // content div.                                                                                                // 108
        if (location_hash != undefined) {                                                                              // 109
          window.location.hash = location_hash;                                                                        // 110
        } else {                                                                                                       // 111
          window.location.hash = target_hash;                                                                          // 112
        }                                                                                                              // 113
                                                                                                                       // 114
        if (settings.scroll_to_content) {                                                                              // 115
          // If the user is requesting the content of a tab, then scroll to the                                        // 116
          // top of the title area; otherwise, scroll to the element within                                            // 117
          // the content area as defined by the hash value.                                                            // 118
          if (location_hash == undefined || location_hash == target_hash) {                                            // 119
            tab.parent()[0].scrollIntoView();                                                                          // 120
          } else {                                                                                                     // 121
            S(target_hash)[0].scrollIntoView();                                                                        // 122
          }                                                                                                            // 123
        } else {                                                                                                       // 124
          // Adjust the scrollbar to the Y position prior to setting the hash                                          // 125
          // Only do this for the tab content anchor, otherwise there will be                                          // 126
          // conflicts with in-tab anchor links nested in the tab-content div                                          // 127
          if (location_hash == undefined || location_hash == target_hash) {                                            // 128
            $('body,html').scrollTop(cur_ypos);                                                                        // 129
          }                                                                                                            // 130
        }                                                                                                              // 131
      }                                                                                                                // 132
                                                                                                                       // 133
      // WARNING: The activation and deactivation of the tab content must                                              // 134
      // occur after the deep linking in order to properly refresh the browser                                         // 135
      // window (notably in Chrome).                                                                                   // 136
      tab.addClass(settings.active_class).triggerHandler('opened');                                                    // 137
      siblings.removeClass(settings.active_class);                                                                     // 138
      target.siblings().removeClass(settings.active_class).end().addClass(settings.active_class);                      // 139
      settings.callback(tab);                                                                                          // 140
      target.triggerHandler('toggled', [tab]);                                                                         // 141
      tabs.triggerHandler('toggled', [target]);                                                                        // 142
    },                                                                                                                 // 143
                                                                                                                       // 144
    data_attr: function (str) {                                                                                        // 145
      if (this.namespace.length > 0) {                                                                                 // 146
        return this.namespace + '-' + str;                                                                             // 147
      }                                                                                                                // 148
                                                                                                                       // 149
      return str;                                                                                                      // 150
    },                                                                                                                 // 151
                                                                                                                       // 152
    off : function () {},                                                                                              // 153
                                                                                                                       // 154
    reflow : function () {}                                                                                            // 155
  };                                                                                                                   // 156
}(jQuery, this, this.document));                                                                                       // 157
                                                                                                                       // 158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.tooltip.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.tooltip = {                                                                                          // 4
    name : 'tooltip',                                                                                                  // 5
                                                                                                                       // 6
    version : '5.2.1',                                                                                                 // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      additional_inheritable_classes : [],                                                                             // 10
      tooltip_class : '.tooltip',                                                                                      // 11
      append_to: 'body',                                                                                               // 12
      touch_close_text: 'Tap To Close',                                                                                // 13
      disable_for_touch: false,                                                                                        // 14
      hover_delay: 200,                                                                                                // 15
      tip_template : function (selector, content) {                                                                    // 16
        return '<span data-selector="' + selector + '" class="'                                                        // 17
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)                                                // 18
          + '">' + content + '<span class="nub"></span></span>';                                                       // 19
      }                                                                                                                // 20
    },                                                                                                                 // 21
                                                                                                                       // 22
    cache : {},                                                                                                        // 23
                                                                                                                       // 24
    init : function (scope, method, options) {                                                                         // 25
      Foundation.inherit(this, 'random_str');                                                                          // 26
      this.bindings(method, options);                                                                                  // 27
    },                                                                                                                 // 28
                                                                                                                       // 29
    events : function (instance) {                                                                                     // 30
      var self = this,                                                                                                 // 31
          S = self.S;                                                                                                  // 32
                                                                                                                       // 33
      self.create(this.S(instance));                                                                                   // 34
                                                                                                                       // 35
      $(this.scope)                                                                                                    // 36
        .off('.tooltip')                                                                                               // 37
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',  // 38
          '[' + this.attr_name() + ']:not(a)', function (e) {                                                          // 39
          var $this = S(this),                                                                                         // 40
              settings = $.extend({}, self.settings, self.data_options($this)),                                        // 41
              is_touch = false;                                                                                        // 42
                                                                                                                       // 43
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;                                                 // 44
                                                                                                                       // 45
          if ($this.hasClass('open')) {                                                                                // 46
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) e.preventDefault();                       // 47
            self.hide($this);                                                                                          // 48
          } else {                                                                                                     // 49
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {           // 50
              return;                                                                                                  // 51
            } else if(!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {    // 52
              e.preventDefault();                                                                                      // 53
              S(settings.tooltip_class + '.open').hide();                                                              // 54
              is_touch = true;                                                                                         // 55
            }                                                                                                          // 56
                                                                                                                       // 57
            if (/enter|over/i.test(e.type)) {                                                                          // 58
              this.timer = setTimeout(function () {                                                                    // 59
                var tip = self.showTip($this);                                                                         // 60
              }.bind(this), self.settings.hover_delay);                                                                // 61
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {                                             // 62
              clearTimeout(this.timer);                                                                                // 63
              self.hide($this);                                                                                        // 64
            } else {                                                                                                   // 65
              self.showTip($this);                                                                                     // 66
            }                                                                                                          // 67
          }                                                                                                            // 68
        })                                                                                                             // 69
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;                                                 // 71
                                                                                                                       // 72
          if($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {                           // 73
            return;                                                                                                    // 74
          }                                                                                                            // 75
          else if($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {    // 76
            self.convert_to_touch($(this));                                                                            // 77
          } else {                                                                                                     // 78
            self.hide($(this));                                                                                        // 79
          }                                                                                                            // 80
        })                                                                                                             // 81
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {                      // 82
          self.hide(S(this));                                                                                          // 83
        });                                                                                                            // 84
    },                                                                                                                 // 85
                                                                                                                       // 86
    ie_touch : function (e) {                                                                                          // 87
      // How do I distinguish between IE11 and Windows Phone 8?????                                                    // 88
      return false;                                                                                                    // 89
    },                                                                                                                 // 90
                                                                                                                       // 91
    showTip : function ($target) {                                                                                     // 92
      var $tip = this.getTip($target);                                                                                 // 93
                                                                                                                       // 94
        return this.show($target);                                                                                     // 95
    },                                                                                                                 // 96
                                                                                                                       // 97
    getTip : function ($target) {                                                                                      // 98
      var selector = this.selector($target),                                                                           // 99
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 100
          tip = null;                                                                                                  // 101
                                                                                                                       // 102
      if (selector) {                                                                                                  // 103
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);                               // 104
      }                                                                                                                // 105
                                                                                                                       // 106
      return (typeof tip === 'object') ? tip : false;                                                                  // 107
    },                                                                                                                 // 108
                                                                                                                       // 109
    selector : function ($target) {                                                                                    // 110
      var id = $target.attr('id'),                                                                                     // 111
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');                              // 112
                                                                                                                       // 113
      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {                                           // 114
        dataSelector = this.random_str(6);                                                                             // 115
        $target.attr('data-selector', dataSelector);                                                                   // 116
      }                                                                                                                // 117
                                                                                                                       // 118
      return (id && id.length > 0) ? id : dataSelector;                                                                // 119
    },                                                                                                                 // 120
                                                                                                                       // 121
    create : function ($target) {                                                                                      // 122
      var self = this,                                                                                                 // 123
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 124
          tip_template = this.settings.tip_template;                                                                   // 125
                                                                                                                       // 126
      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {                 // 127
        tip_template = window[settings.tip_template];                                                                  // 128
      }                                                                                                                // 129
                                                                                                                       // 130
      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),         // 131
          classes = this.inheritable_classes($target);                                                                 // 132
                                                                                                                       // 133
      $tip.addClass(classes).appendTo(settings.append_to);                                                             // 134
                                                                                                                       // 135
      if (Modernizr.touch) {                                                                                           // 136
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');                                // 137
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function(e) {                                  // 138
          self.hide($target);                                                                                          // 139
        });                                                                                                            // 140
      }                                                                                                                // 141
                                                                                                                       // 142
      $target.removeAttr('title').attr('title','');                                                                    // 143
    },                                                                                                                 // 144
                                                                                                                       // 145
    reposition : function (target, tip, classes) {                                                                     // 146
      var width, nub, nubHeight, nubWidth, column, objPos;                                                             // 147
                                                                                                                       // 148
      tip.css('visibility', 'hidden').show();                                                                          // 149
                                                                                                                       // 150
      width = target.data('width');                                                                                    // 151
      nub = tip.children('.nub');                                                                                      // 152
      nubHeight = nub.outerHeight();                                                                                   // 153
      nubWidth = nub.outerHeight();                                                                                    // 154
                                                                                                                       // 155
      if (this.small()) {                                                                                              // 156
        tip.css({'width' : '100%' });                                                                                  // 157
      } else {                                                                                                         // 158
        tip.css({'width' : (width) ? width : 'auto'});                                                                 // 159
      }                                                                                                                // 160
                                                                                                                       // 161
      objPos = function (obj, top, right, bottom, left, width) {                                                       // 162
        return obj.css({                                                                                               // 163
          'top' : (top) ? top : 'auto',                                                                                // 164
          'bottom' : (bottom) ? bottom : 'auto',                                                                       // 165
          'left' : (left) ? left : 'auto',                                                                             // 166
          'right' : (right) ? right : 'auto',                                                                          // 167
        }).end();                                                                                                      // 168
      };                                                                                                               // 169
                                                                                                                       // 170
      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);            // 171
                                                                                                                       // 172
      if (this.small()) {                                                                                              // 173
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());   // 174
        tip.addClass('tip-override');                                                                                  // 175
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);                                                 // 176
      } else {                                                                                                         // 177
        var left = target.offset().left;                                                                               // 178
        if (Foundation.rtl) {                                                                                          // 179
          nub.addClass('rtl');                                                                                         // 180
          left = target.offset().left + target.outerWidth() - tip.outerWidth();                                        // 181
        }                                                                                                              // 182
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);                          // 183
        tip.removeClass('tip-override');                                                                               // 184
        if (classes && classes.indexOf('tip-top') > -1) {                                                              // 185
          if (Foundation.rtl) nub.addClass('rtl');                                                                     // 186
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)                                 // 187
            .removeClass('tip-override');                                                                              // 188
        } else if (classes && classes.indexOf('tip-left') > -1) {                                                      // 189
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');                                                                              // 191
          nub.removeClass('rtl');                                                                                      // 192
        } else if (classes && classes.indexOf('tip-right') > -1) {                                                     // 193
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');                                                                              // 195
          nub.removeClass('rtl');                                                                                      // 196
        }                                                                                                              // 197
      }                                                                                                                // 198
                                                                                                                       // 199
      tip.css('visibility', 'visible').hide();                                                                         // 200
    },                                                                                                                 // 201
                                                                                                                       // 202
    small : function () {                                                                                              // 203
      return matchMedia(Foundation.media_queries.small).matches;                                                       // 204
    },                                                                                                                 // 205
                                                                                                                       // 206
    inheritable_classes : function ($target) {                                                                         // 207
      var settings = $.extend({}, this.settings, this.data_options($target)),                                          // 208
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),                                                                             // 210
          filtered = classes ? $.map(classes.split(' '), function (el, i) {                                            // 211
            if ($.inArray(el, inheritables) !== -1) {                                                                  // 212
              return el;                                                                                               // 213
            }                                                                                                          // 214
          }).join(' ') : '';                                                                                           // 215
                                                                                                                       // 216
      return $.trim(filtered);                                                                                         // 217
    },                                                                                                                 // 218
                                                                                                                       // 219
    convert_to_touch : function($target) {                                                                             // 220
      var self = this,                                                                                                 // 221
          $tip = self.getTip($target),                                                                                 // 222
          settings = $.extend({}, self.settings, self.data_options($target));                                          // 223
                                                                                                                       // 224
      if ($tip.find('.tap-to-close').length === 0) {                                                                   // 225
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');                                // 226
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function(e) {
          self.hide($target);                                                                                          // 228
        });                                                                                                            // 229
      }                                                                                                                // 230
                                                                                                                       // 231
      $target.data('tooltip-open-event-type', 'touch');                                                                // 232
    },                                                                                                                 // 233
                                                                                                                       // 234
    show : function ($target) {                                                                                        // 235
      var $tip = this.getTip($target);                                                                                 // 236
                                                                                                                       // 237
      if ($target.data('tooltip-open-event-type') == 'touch') {                                                        // 238
        this.convert_to_touch($target);                                                                                // 239
      }                                                                                                                // 240
                                                                                                                       // 241
      this.reposition($target, $tip, $target.attr('class'));                                                           // 242
      $target.addClass('open');                                                                                        // 243
      $tip.fadeIn(150);                                                                                                // 244
    },                                                                                                                 // 245
                                                                                                                       // 246
    hide : function ($target) {                                                                                        // 247
      var $tip = this.getTip($target);                                                                                 // 248
                                                                                                                       // 249
      $tip.fadeOut(150, function() {                                                                                   // 250
        $tip.find('.tap-to-close').remove();                                                                           // 251
        $tip.off('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');       // 252
        $target.removeClass('open');                                                                                   // 253
      });                                                                                                              // 254
    },                                                                                                                 // 255
                                                                                                                       // 256
    off : function () {                                                                                                // 257
      var self = this;                                                                                                 // 258
      this.S(this.scope).off('.fndtn.tooltip');                                                                        // 259
      this.S(this.settings.tooltip_class).each(function (i) {                                                          // 260
        $('[' + self.attr_name() + ']').get(i).attr('title', $(this).text());                                          // 261
      }).remove();                                                                                                     // 262
    },                                                                                                                 // 263
                                                                                                                       // 264
    reflow : function () {}                                                                                            // 265
  };                                                                                                                   // 266
}(jQuery, this, this.document));                                                                                       // 267
                                                                                                                       // 268
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/foundation.topbar.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function ($, window, document, undefined) {                                                                          // 1
  'use strict';                                                                                                        // 2
                                                                                                                       // 3
  Foundation.libs.topbar = {                                                                                           // 4
    name : 'topbar',                                                                                                   // 5
                                                                                                                       // 6
    version: '5.2.1',                                                                                                  // 7
                                                                                                                       // 8
    settings : {                                                                                                       // 9
      index : 0,                                                                                                       // 10
      sticky_class : 'sticky',                                                                                         // 11
      custom_back_text: true,                                                                                          // 12
      back_text: 'Back',                                                                                               // 13
      is_hover: true,                                                                                                  // 14
      mobile_show_parent_link: false,                                                                                  // 15
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked                                          // 16
      sticky_on : 'all'                                                                                                // 17
    },                                                                                                                 // 18
                                                                                                                       // 19
    init : function (section, method, options) {                                                                       // 20
      Foundation.inherit(this, 'add_custom_rule register_media throttle');                                             // 21
      var self = this;                                                                                                 // 22
                                                                                                                       // 23
      self.register_media('topbar', 'foundation-mq-topbar');                                                           // 24
                                                                                                                       // 25
      this.bindings(method, options);                                                                                  // 26
                                                                                                                       // 27
      self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 28
        var topbar = $(this),                                                                                          // 29
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 30
            section = self.S('section', this),                                                                         // 31
            titlebar = topbar.children().filter('ul').first();                                                         // 32
        topbar.data('index', 0);                                                                                       // 33
        var topbarContainer = topbar.parent();                                                                         // 34
        if(topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {                  // 35
          self.settings.sticky_class = settings.sticky_class;                                                          // 36
          self.settings.sticky_topbar = topbar;                                                                        // 37
          topbar.data('height', topbarContainer.outerHeight());                                                        // 38
          topbar.data('stickyoffset', topbarContainer.offset().top);                                                   // 39
        } else {                                                                                                       // 40
          topbar.data('height', topbar.outerHeight());                                                                 // 41
        }                                                                                                              // 42
                                                                                                                       // 43
        if (!settings.assembled) self.assemble(topbar);                                                                // 44
                                                                                                                       // 45
        if (settings.is_hover) {                                                                                       // 46
          self.S('.has-dropdown', topbar).addClass('not-click');                                                       // 47
        } else {                                                                                                       // 48
          self.S('.has-dropdown', topbar).removeClass('not-click');                                                    // 49
        }                                                                                                              // 50
                                                                                                                       // 51
        // Pad body when sticky (scrolled) or fixed.                                                                   // 52
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');                      // 53
                                                                                                                       // 54
        if (topbarContainer.hasClass('fixed')) {                                                                       // 55
          self.S('body').addClass('f-topbar-fixed');                                                                   // 56
        }                                                                                                              // 57
      });                                                                                                              // 58
                                                                                                                       // 59
    },                                                                                                                 // 60
                                                                                                                       // 61
    is_sticky: function (topbar, topbarContainer, settings) {                                                          // 62
      var sticky = topbarContainer.hasClass(settings.sticky_class);                                                    // 63
                                                                                                                       // 64
      if (sticky && settings.sticky_on === 'all') {                                                                    // 65
        return true;                                                                                                   // 66
      } else if (sticky && this.small() && settings.sticky_on === 'small') {                                           // 67
        return true;                                                                                                   // 68
      } else if (sticky && this.medium() && settings.sticky_on === 'medium') {                                         // 69
        return true;                                                                                                   // 70
      } else if (sticky && this.large() && settings.sticky_on === 'large') {                                           // 71
        return true;                                                                                                   // 72
      }                                                                                                                // 73
                                                                                                                       // 74
      return false;                                                                                                    // 75
    },                                                                                                                 // 76
                                                                                                                       // 77
    toggle: function (toggleEl) {                                                                                      // 78
      var self = this;                                                                                                 // 79
                                                                                                                       // 80
      if (toggleEl) {                                                                                                  // 81
        var topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');                                           // 82
      } else {                                                                                                         // 83
        var topbar = self.S('[' + this.attr_name() + ']');                                                             // 84
      }                                                                                                                // 85
                                                                                                                       // 86
      var settings = topbar.data(this.attr_name(true) + '-init');                                                      // 87
                                                                                                                       // 88
      var section = self.S('section, .section', topbar);                                                               // 89
                                                                                                                       // 90
      if (self.breakpoint()) {                                                                                         // 91
        if (!self.rtl) {                                                                                               // 92
          section.css({left: '0%'});                                                                                   // 93
          $('>.name', section).css({left: '100%'});                                                                    // 94
        } else {                                                                                                       // 95
          section.css({right: '0%'});                                                                                  // 96
          $('>.name', section).css({right: '100%'});                                                                   // 97
        }                                                                                                              // 98
                                                                                                                       // 99
        self.S('li.moved', section).removeClass('moved');                                                              // 100
        topbar.data('index', 0);                                                                                       // 101
                                                                                                                       // 102
        topbar                                                                                                         // 103
          .toggleClass('expanded')                                                                                     // 104
          .css('height', '');                                                                                          // 105
      }                                                                                                                // 106
                                                                                                                       // 107
      if (settings.scrolltop) {                                                                                        // 108
        if (!topbar.hasClass('expanded')) {                                                                            // 109
          if (topbar.hasClass('fixed')) {                                                                              // 110
            topbar.parent().addClass('fixed');                                                                         // 111
            topbar.removeClass('fixed');                                                                               // 112
            self.S('body').addClass('f-topbar-fixed');                                                                 // 113
          }                                                                                                            // 114
        } else if (topbar.parent().hasClass('fixed')) {                                                                // 115
          if (settings.scrolltop) {                                                                                    // 116
            topbar.parent().removeClass('fixed');                                                                      // 117
            topbar.addClass('fixed');                                                                                  // 118
            self.S('body').removeClass('f-topbar-fixed');                                                              // 119
                                                                                                                       // 120
            window.scrollTo(0,0);                                                                                      // 121
          } else {                                                                                                     // 122
              topbar.parent().removeClass('expanded');                                                                 // 123
          }                                                                                                            // 124
        }                                                                                                              // 125
      } else {                                                                                                         // 126
        if(self.is_sticky(topbar, topbar.parent(), settings)) {                                                        // 127
          topbar.parent().addClass('fixed');                                                                           // 128
        }                                                                                                              // 129
                                                                                                                       // 130
        if(topbar.parent().hasClass('fixed')) {                                                                        // 131
          if (!topbar.hasClass('expanded')) {                                                                          // 132
            topbar.removeClass('fixed');                                                                               // 133
            topbar.parent().removeClass('expanded');                                                                   // 134
            self.update_sticky_positioning();                                                                          // 135
          } else {                                                                                                     // 136
            topbar.addClass('fixed');                                                                                  // 137
            topbar.parent().addClass('expanded');                                                                      // 138
            self.S('body').addClass('f-topbar-fixed');                                                                 // 139
          }                                                                                                            // 140
        }                                                                                                              // 141
      }                                                                                                                // 142
    },                                                                                                                 // 143
                                                                                                                       // 144
    timer : null,                                                                                                      // 145
                                                                                                                       // 146
    events : function (bar) {                                                                                          // 147
      var self = this,                                                                                                 // 148
          S = this.S;                                                                                                  // 149
                                                                                                                       // 150
      S(this.scope)                                                                                                    // 151
        .off('.topbar')                                                                                                // 152
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {                          // 153
          e.preventDefault();                                                                                          // 154
          self.toggle(this);                                                                                           // 155
        })                                                                                                             // 156
        .on('click.fndtn.topbar','.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]',function (e) {
            var li = $(this).closest('li');                                                                            // 158
            if(self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown'))                              // 159
            {                                                                                                          // 160
            self.toggle();                                                                                             // 161
            }                                                                                                          // 162
        })                                                                                                             // 163
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {                         // 164
          var li = S(this),                                                                                            // 165
              target = S(e.target),                                                                                    // 166
              topbar = li.closest('[' + self.attr_name() + ']'),                                                       // 167
              settings = topbar.data(self.attr_name(true) + '-init');                                                  // 168
                                                                                                                       // 169
          if(target.data('revealId')) {                                                                                // 170
            self.toggle();                                                                                             // 171
            return;                                                                                                    // 172
          }                                                                                                            // 173
                                                                                                                       // 174
          if (self.breakpoint()) return;                                                                               // 175
          if (settings.is_hover && !Modernizr.touch) return;                                                           // 176
                                                                                                                       // 177
          e.stopImmediatePropagation();                                                                                // 178
                                                                                                                       // 179
          if (li.hasClass('hover')) {                                                                                  // 180
            li                                                                                                         // 181
              .removeClass('hover')                                                                                    // 182
              .find('li')                                                                                              // 183
              .removeClass('hover');                                                                                   // 184
                                                                                                                       // 185
            li.parents('li.hover')                                                                                     // 186
              .removeClass('hover');                                                                                   // 187
          } else {                                                                                                     // 188
            li.addClass('hover');                                                                                      // 189
                                                                                                                       // 190
            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {                              // 191
              e.preventDefault();                                                                                      // 192
            }                                                                                                          // 193
          }                                                                                                            // 194
        })                                                                                                             // 195
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {                         // 196
          if (self.breakpoint()) {                                                                                     // 197
                                                                                                                       // 198
            e.preventDefault();                                                                                        // 199
                                                                                                                       // 200
            var $this = S(this),                                                                                       // 201
                topbar = $this.closest('[' + self.attr_name() + ']'),                                                  // 202
                section = topbar.find('section, .section'),                                                            // 203
                dropdownHeight = $this.next('.dropdown').outerHeight(),                                                // 204
                $selectedLi = $this.closest('li');                                                                     // 205
                                                                                                                       // 206
            topbar.data('index', topbar.data('index') + 1);                                                            // 207
            $selectedLi.addClass('moved');                                                                             // 208
                                                                                                                       // 209
            if (!self.rtl) {                                                                                           // 210
              section.css({left: -(100 * topbar.data('index')) + '%'});                                                // 211
              section.find('>.name').css({left: 100 * topbar.data('index') + '%'});                                    // 212
            } else {                                                                                                   // 213
              section.css({right: -(100 * topbar.data('index')) + '%'});                                               // 214
              section.find('>.name').css({right: 100 * topbar.data('index') + '%'});                                   // 215
            }                                                                                                          // 216
                                                                                                                       // 217
            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));                      // 218
          }                                                                                                            // 219
        });                                                                                                            // 220
                                                                                                                       // 221
      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {                                   // 222
        self.resize.call(self);                                                                                        // 223
      }, 50)).trigger('resize');                                                                                       // 224
                                                                                                                       // 225
      S('body').off('.topbar').on('click.fndtn.topbar touchstart.fndtn.topbar', function (e) {                         // 226
        var parent = S(e.target).closest('li').closest('li.hover');                                                    // 227
                                                                                                                       // 228
        if (parent.length > 0) {                                                                                       // 229
          return;                                                                                                      // 230
        }                                                                                                              // 231
                                                                                                                       // 232
        S('[' + self.attr_name() + '] li').removeClass('hover');                                                       // 233
      });                                                                                                              // 234
                                                                                                                       // 235
      // Go up a level on Click                                                                                        // 236
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {          // 237
        e.preventDefault();                                                                                            // 238
                                                                                                                       // 239
        var $this = S(this),                                                                                           // 240
            topbar = $this.closest('[' + self.attr_name() + ']'),                                                      // 241
            section = topbar.find('section, .section'),                                                                // 242
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 243
            $movedLi = $this.closest('li.moved'),                                                                      // 244
            $previousLevelUl = $movedLi.parent();                                                                      // 245
                                                                                                                       // 246
        topbar.data('index', topbar.data('index') - 1);                                                                // 247
                                                                                                                       // 248
        if (!self.rtl) {                                                                                               // 249
          section.css({left: -(100 * topbar.data('index')) + '%'});                                                    // 250
          section.find('>.name').css({left: 100 * topbar.data('index') + '%'});                                        // 251
        } else {                                                                                                       // 252
          section.css({right: -(100 * topbar.data('index')) + '%'});                                                   // 253
          section.find('>.name').css({right: 100 * topbar.data('index') + '%'});                                       // 254
        }                                                                                                              // 255
                                                                                                                       // 256
        if (topbar.data('index') === 0) {                                                                              // 257
          topbar.css('height', '');                                                                                    // 258
        } else {                                                                                                       // 259
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));                            // 260
        }                                                                                                              // 261
                                                                                                                       // 262
        setTimeout(function () {                                                                                       // 263
          $movedLi.removeClass('moved');                                                                               // 264
        }, 300);                                                                                                       // 265
      });                                                                                                              // 266
    },                                                                                                                 // 267
                                                                                                                       // 268
    resize : function () {                                                                                             // 269
      var self = this;                                                                                                 // 270
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 271
        var topbar = self.S(this),                                                                                     // 272
            settings = topbar.data(self.attr_name(true) + '-init');                                                    // 273
                                                                                                                       // 274
        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);                                         // 275
        var stickyOffset;                                                                                              // 276
                                                                                                                       // 277
        if (!self.breakpoint()) {                                                                                      // 278
          var doToggle = topbar.hasClass('expanded');                                                                  // 279
          topbar                                                                                                       // 280
            .css('height', '')                                                                                         // 281
            .removeClass('expanded')                                                                                   // 282
            .find('li')                                                                                                // 283
            .removeClass('hover');                                                                                     // 284
                                                                                                                       // 285
            if(doToggle) {                                                                                             // 286
              self.toggle(topbar);                                                                                     // 287
            }                                                                                                          // 288
        }                                                                                                              // 289
                                                                                                                       // 290
        if(self.is_sticky(topbar, stickyContainer, settings)) {                                                        // 291
          if(stickyContainer.hasClass('fixed')) {                                                                      // 292
            // Remove the fixed to allow for correct calculation of the offset.                                        // 293
            stickyContainer.removeClass('fixed');                                                                      // 294
                                                                                                                       // 295
            stickyOffset = stickyContainer.offset().top;                                                               // 296
            if(self.S(document.body).hasClass('f-topbar-fixed')) {                                                     // 297
              stickyOffset -= topbar.data('height');                                                                   // 298
            }                                                                                                          // 299
                                                                                                                       // 300
            topbar.data('stickyoffset', stickyOffset);                                                                 // 301
            stickyContainer.addClass('fixed');                                                                         // 302
          } else {                                                                                                     // 303
            stickyOffset = stickyContainer.offset().top;                                                               // 304
            topbar.data('stickyoffset', stickyOffset);                                                                 // 305
          }                                                                                                            // 306
        }                                                                                                              // 307
                                                                                                                       // 308
      });                                                                                                              // 309
    },                                                                                                                 // 310
                                                                                                                       // 311
    breakpoint : function () {                                                                                         // 312
      return !matchMedia(Foundation.media_queries['topbar']).matches;                                                  // 313
    },                                                                                                                 // 314
                                                                                                                       // 315
    small : function () {                                                                                              // 316
      return matchMedia(Foundation.media_queries['small']).matches;                                                    // 317
    },                                                                                                                 // 318
                                                                                                                       // 319
    medium : function () {                                                                                             // 320
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 321
    },                                                                                                                 // 322
                                                                                                                       // 323
    large : function () {                                                                                              // 324
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 325
    },                                                                                                                 // 326
                                                                                                                       // 327
    assemble : function (topbar) {                                                                                     // 328
      var self = this,                                                                                                 // 329
          settings = topbar.data(this.attr_name(true) + '-init'),                                                      // 330
          section = self.S('section', topbar),                                                                         // 331
          titlebar = $(this).children().filter('ul').first();                                                          // 332
                                                                                                                       // 333
      // Pull element out of the DOM for manipulation                                                                  // 334
      section.detach();                                                                                                // 335
                                                                                                                       // 336
      self.S('.has-dropdown>a', section).each(function () {                                                            // 337
        var $link = self.S(this),                                                                                      // 338
            $dropdown = $link.siblings('.dropdown'),                                                                   // 339
            url = $link.attr('href');                                                                                  // 340
                                                                                                                       // 341
        if (!$dropdown.find('.title.back').length) {                                                                   // 342
          if (settings.mobile_show_parent_link && url && url.length > 1) {                                             // 343
            var $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + url + '">' + $link.text() +'</a></li>');
          } else {                                                                                                     // 345
            var $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');   // 346
          }                                                                                                            // 347
                                                                                                                       // 348
          // Copy link to subnav                                                                                       // 349
          if (settings.custom_back_text == true) {                                                                     // 350
            $('h5>a', $titleLi).html(settings.back_text);                                                              // 351
          } else {                                                                                                     // 352
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());                                                       // 353
          }                                                                                                            // 354
          $dropdown.prepend($titleLi);                                                                                 // 355
        }                                                                                                              // 356
      });                                                                                                              // 357
                                                                                                                       // 358
      // Put element back in the DOM                                                                                   // 359
      section.appendTo(topbar);                                                                                        // 360
                                                                                                                       // 361
      // check for sticky                                                                                              // 362
      this.sticky();                                                                                                   // 363
                                                                                                                       // 364
      this.assembled(topbar);                                                                                          // 365
    },                                                                                                                 // 366
                                                                                                                       // 367
    assembled : function (topbar) {                                                                                    // 368
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled: true}));           // 369
    },                                                                                                                 // 370
                                                                                                                       // 371
    height : function (ul) {                                                                                           // 372
      var total = 0,                                                                                                   // 373
          self = this;                                                                                                 // 374
                                                                                                                       // 375
      $('> li', ul).each(function () { total += self.S(this).outerHeight(true); });                                    // 376
                                                                                                                       // 377
      return total;                                                                                                    // 378
    },                                                                                                                 // 379
                                                                                                                       // 380
    sticky : function () {                                                                                             // 381
      var $window = this.S(window),                                                                                    // 382
          self = this;                                                                                                 // 383
                                                                                                                       // 384
      this.S(window).on('scroll', function() {                                                                         // 385
        self.update_sticky_positioning();                                                                              // 386
      });                                                                                                              // 387
    },                                                                                                                 // 388
                                                                                                                       // 389
    update_sticky_positioning: function() {                                                                            // 390
      var klass = '.' + this.settings.sticky_class,                                                                    // 391
          $window = this.S(window),                                                                                    // 392
          self = this;                                                                                                 // 393
                                                                                                                       // 394
      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset');                                               // 396
        if (!self.S(klass).hasClass('expanded')) {                                                                     // 397
          if ($window.scrollTop() > (distance)) {                                                                      // 398
            if (!self.S(klass).hasClass('fixed')) {                                                                    // 399
              self.S(klass).addClass('fixed');                                                                         // 400
              self.S('body').addClass('f-topbar-fixed');                                                               // 401
            }                                                                                                          // 402
          } else if ($window.scrollTop() <= distance) {                                                                // 403
            if (self.S(klass).hasClass('fixed')) {                                                                     // 404
              self.S(klass).removeClass('fixed');                                                                      // 405
              self.S('body').removeClass('f-topbar-fixed');                                                            // 406
            }                                                                                                          // 407
          }                                                                                                            // 408
        }                                                                                                              // 409
      }                                                                                                                // 410
    },                                                                                                                 // 411
                                                                                                                       // 412
    off : function () {                                                                                                // 413
      this.S(this.scope).off('.fndtn.topbar');                                                                         // 414
      this.S(window).off('.fndtn.topbar');                                                                             // 415
    },                                                                                                                 // 416
                                                                                                                       // 417
    reflow : function () {}                                                                                            // 418
  };                                                                                                                   // 419
}(jQuery, this, this.document));                                                                                       // 420
                                                                                                                       // 421
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nsmeta:zurb-foundation/js/init-foundation.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
  if (typeof(Router) !== 'undefined' && Router.onAfterAction) {                                                        // 2
    Router.onAfterAction(function () {                                                                                 // 3
      Deps.afterFlush(function () {                                                                                    // 4
        Foundation.init(document);                                                                                     // 5
      });                                                                                                              // 6
    });                                                                                                                // 7
  } else {                                                                                                             // 8
    UI.body.rendered = function () {                                                                                   // 9
      Foundation.init(document);                                                                                       // 10
    };                                                                                                                 // 11
  }                                                                                                                    // 12
});                                                                                                                    // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['nsmeta:zurb-foundation'] = {};

})();
