!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);class n{constructor(e){this.state=e}static async extractClipName(e,t){const i=await t;return e.items.map(function(e,t){const n={};return n.title=e.snippet.title,n.description=e.snippet.description,n.image=e.snippet.thumbnails.medium,n.date=e.snippet.publishedAt,n.autor=e.snippet.channelTitle,n.views=i[t],n.id=e.id.videoId,n}.bind(this))}static async extractViewCount(e,t){const i=`https://www.googleapis.com/youtube/v3/videos?key=${t}&id=${e.items.map(e=>e.id.videoId).join(",")}&part=snippet,statistics`,n=await fetch(i);return(await n.json()).items.map(e=>e.statistics.viewCount)}async getClipNames(){const{apiKey:e,urlSearch:t,nextPageToken:i}=this.state;let s=`https://www.googleapis.com/youtube/v3/search?key=${e}&type=video&part=snippet&maxResults=15&q=${t}`;i&&(s+=`&pageToken=${i}`);const a=await fetch(s),r=await a.json();return{data:n.extractClipName(r,n.extractViewCount(r,e)),nextPageToken:r.nextPageToken}}}class s{constructor(e){this.searchEvent=e,this.name="header-search"}render(){const e=document.createElement("header"),t=document.createElement("form"),i=document.createElement("input"),n=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Search"),n.setAttribute("type","submit"),n.setAttribute("value","Search"),e.classList.add(this.name),i.classList.add(`${this.name}__search`),document.body.appendChild(e),e.appendChild(t),t.appendChild(n),t.appendChild(i),t.addEventListener("submit",this.searchEvent,!1)}}class a{constructor(e,t){this.name="slider",this.element=null,this.lock=t,this.move=e}render(){if(!document.querySelector(`.${this.name}`)){const e=document.createElement("section");e.classList.add(this.name),document.body.appendChild(e)}this.addPagination(),this.addSlide(),document.querySelector(`.${this.name}`).addEventListener("mousedown",this.lock,!1),document.querySelector(`.${this.name}`).addEventListener("touchstart",this.lock,!1),document.querySelector(`.${this.name}`).addEventListener("mouseup",this.move,!1),document.querySelector(`.${this.name}`).addEventListener("touchend",this.move,!1)}addSlide(){this.element=document.querySelector(`.${this.name}`);const e=document.createElement("div");e.classList.add(`${this.name}__slide`),this.element.appendChild(e)}addPagination(){const e=document.createElement("ul"),t=document.createElement("li"),i=document.createElement("li"),n=document.createElement("li"),s=document.createElement("li");e.classList.add("pagination"),t.classList.add("pagination__prev"),i.classList.add("pagination__curr"),n.classList.add("pagination__next-page"),s.classList.add("pagination__next"),t.innerHTML="<button><</button>",i.innerHTML="<button>1</button>",n.innerHTML="<button>2</button>",s.innerHTML="<button>></button>",e.addEventListener("click",this.move,!1),document.body.appendChild(e),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(s),window.addEventListener("resize",()=>{let e;window.outerWidth>1300?e=4:window.outerWidth<=1300&&window.outerWidth>768?e=3:window.outerWidth<=768&&window.outerWidth>425?e=2:window.outerWidth<=425&&(e=1);const t=[];for(;this.element.childElementCount;){for(;this.element.firstChild.childElementCount;)t.push(this.element.firstChild.removeChild(this.element.firstChild.firstChild));this.element.firstChild.remove()}this.addSlide(),t.forEach(t=>{this.element.lastChild.childElementCount>=e&&this.addSlide(),this.element.lastChild.appendChild(t)})})}}class r{constructor(e,t){this.data=e,this.parent=t,this.name="clip"}render(){const e=document.createElement("div");e.classList.add(this.name),e.innerHTML=`<a href='https://www.youtube.com/watch?v=${this.data.id}' class='${this.name}__title'>${this.data.title}</a>\n                      <img class='${this.name}__img' src='${this.data.image.url}' alt='${this.data.title}' width='${this.data.image.width}' height='${this.data.image.height}'>\n                      <span class='${this.name}__autor'>\n                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>\n                      ${this.data.autor}</span>\n                      <span class='${this.name}__date'>\n                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/></svg>\n                      ${this.data.date.slice(0,10)}</span>\n                      <span class='${this.name}__views'>\n                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/></svg>\n                      ${this.data.views}</span>\n                      <p class='${this.name}__description'>${this.data.description}</p>`,this.parent.lastElementChild.appendChild(e)}}class d{constructor(){this.parametrs={apiKey:"AIzaSyBwE3Jfbi80SiE0CePimqbdh21QRO3KYu0",urlSearch:null,nextPageToken:null},this.slider=null,this.currSlide=null,this.cursorPosition=null}start(){new s(d.search.bind(this)).render()}static async search(e){e.preventDefault(),this.parametrs.urlSearch&&(d.slider.element.remove(),document.querySelector(".pagination").remove());const t=document.querySelector(".header-search__search");this.parametrs.urlSearch=t.value;const i=new n(this.parametrs),s=await i.getClipNames();d.slider=new a(d.move,d.lock),d.slider.render(),d.currSlide=0,d.parametrs=this.parametrs,d.parametrs.nextPageToken=s.nextPageToken,d.renderClips(await s.data)}static renderClips(e){let t;window.outerWidth>1300?t=4:window.outerWidth<=1300&&window.outerWidth>768?t=3:window.outerWidth<=768&&window.outerWidth>425?t=2:window.outerWidth<=425&&(t=1),e.forEach(e=>{this.slider.element.lastElementChild.childElementCount===t&&this.slider.addSlide(),new r(e,this.slider.element).render()})}static unify(e){return e.changedTouches?e.changedTouches[0]:e}static lock(e){d.cursorPosition=d.unify(e).clientX}static async move(e){const t=document.querySelector(".pagination");if("click"===e.type){switch(e.target.parentNode.classList[0]){case"pagination__prev":case"pagination__curr":d.currSlide>0&&(d.currSlide-=1);break;case"pagination__next-page":case"pagination__next":d.currSlide+=1}if(t.childNodes[1].firstChild.innerHTML=d.currSlide+1,t.childNodes[2].firstChild.innerHTML=d.currSlide+2,d.currSlide>-1&&(d.slider.element.childNodes.forEach(e=>e.style.setProperty("transform",`translateX(-${d.currSlide}00%)`)),d.currSlide===d.slider.element.childElementCount-2)){const e=new n(d.parametrs),t=await e.getClipNames();d.parametrs.nextPageToken=t.nextPageToken,d.renderClips(await t.data)}}if(d.cursorPosition||0===d.cursorPosition){const i=d.unify(e).clientX-d.cursorPosition;if(i>0&&d.currSlide>0?d.currSlide-=1:i<0&&(d.currSlide+=1),t.childNodes[1].firstChild.innerHTML=d.currSlide+1,t.childNodes[2].firstChild.innerHTML=d.currSlide+2,d.currSlide>-1&&(d.slider.element.childNodes.forEach(e=>e.style.setProperty("transform",`translateX(-${d.currSlide}00%)`)),d.currSlide===d.slider.element.childElementCount-2)){const e=new n(d.parametrs),t=await e.getClipNames();d.parametrs.nextPageToken=t.nextPageToken,d.renderClips(await t.data)}d.cursorPosition=null}}}i(1);(new d).start()},function(e,t){}]);
//# sourceMappingURL=bundle.js.map