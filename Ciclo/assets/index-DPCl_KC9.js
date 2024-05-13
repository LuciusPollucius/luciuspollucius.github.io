(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();let l={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return l.Android()||l.BlackBerry()||l.iOS()||l.Opera()||l.Windows()}};function f(n){setTimeout(()=>{window.FLS&&console.log(n)},0)}function v(n,t=" "){return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,`$1${t}`)}function g(n){return n.filter(function(t,e,s){return s.indexOf(t)===e})}class m{constructor(t,e){let s={noEventSelector:"[data-no-event]",classInit:"fp-init",wrapperAnimatedClass:"fp-switching",selectorSection:"[data-fp-section]",activeClass:"active-section",previousClass:"previous-section",nextClass:"next-section",idActiveSection:0,mode:t.dataset.fpEffect?t.dataset.fpEffect:"slider",bullets:!!t.hasAttribute("data-fp-bullets"),bulletsClass:"fp-bullets",bulletClass:"fp-bullet",bulletActiveClass:"fp-bullet-active",onInit:function(){},onSwitching:function(){},onDestroy:function(){}};this.options=Object.assign(s,e),this.wrapper=t,this.sections=this.wrapper.querySelectorAll(this.options.selectorSection),this.activeSection=!1,this.activeSectionId=!1,this.previousSection=!1,this.previousSectionId=!1,this.nextSection=!1,this.nextSectionId=!1,this.bulletsWrapper=!1,this.stopEvent=!1,this.sections.length&&this.init()}init(){this.options.idActiveSection>this.sections.length-1||(this.setId(),this.activeSectionId=this.options.idActiveSection,this.setEffectsClasses(),this.setClasses(),this.setStyle(),this.options.bullets&&(this.setBullets(),this.setActiveBullet(this.activeSectionId)),this.events(),setTimeout(()=>{document.documentElement.classList.add(this.options.classInit),this.options.onInit(this),document.dispatchEvent(new CustomEvent("fpinit",{detail:{fp:this}}))},0))}destroy(){this.removeEvents(),this.removeClasses(),document.documentElement.classList.remove(this.options.classInit),this.wrapper.classList.remove(this.options.wrapperAnimatedClass),this.removeEffectsClasses(),this.removeZIndex(),this.removeStyle(),this.removeId(),this.options.onDestroy(this),document.dispatchEvent(new CustomEvent("fpdestroy",{detail:{fp:this}}))}setId(){for(let t=0;t<this.sections.length;t++)this.sections[t].setAttribute("data-fp-id",t)}removeId(){for(let t=0;t<this.sections.length;t++)this.sections[t].removeAttribute("data-fp-id")}setClasses(){this.previousSectionId=this.activeSectionId-1>=0?this.activeSectionId-1:!1,this.nextSectionId=this.activeSectionId+1<this.sections.length?this.activeSectionId+1:!1,this.activeSection=this.sections[this.activeSectionId],this.activeSection.classList.add(this.options.activeClass);for(let t=0;t<this.sections.length;t++)document.documentElement.classList.remove(`fp-section-${t}`);document.documentElement.classList.add(`fp-section-${this.activeSectionId}`),this.previousSectionId!==!1?(this.previousSection=this.sections[this.previousSectionId],this.previousSection.classList.add(this.options.previousClass)):this.previousSection=!1,this.nextSectionId!==!1?(this.nextSection=this.sections[this.nextSectionId],this.nextSection.classList.add(this.options.nextClass)):this.nextSection=!1}removeEffectsClasses(){switch(this.options.mode){case"slider":this.wrapper.classList.remove("slider-mode");break;case"cards":this.wrapper.classList.remove("cards-mode"),this.setZIndex();break;case"fade":this.wrapper.classList.remove("fade-mode"),this.setZIndex();break}}setEffectsClasses(){switch(this.options.mode){case"slider":this.wrapper.classList.add("slider-mode");break;case"cards":this.wrapper.classList.add("cards-mode"),this.setZIndex();break;case"fade":this.wrapper.classList.add("fade-mode"),this.setZIndex();break}}setStyle(){switch(this.options.mode){case"slider":this.styleSlider();break;case"cards":this.styleCards();break;case"fade":this.styleFade();break}}styleSlider(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];t===this.activeSectionId?e.style.transform="translate3D(0,0,0)":t<this.activeSectionId?e.style.transform="translate3D(0,-100%,0)":t>this.activeSectionId&&(e.style.transform="translate3D(0,100%,0)")}}styleCards(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];t>=this.activeSectionId?e.style.transform="translate3D(0,0,0)":t<this.activeSectionId&&(e.style.transform="translate3D(0,-100%,0)")}}styleFade(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];t===this.activeSectionId?(e.style.opacity="1",e.style.pointerEvents="all"):(e.style.opacity="0",e.style.pointerEvents="none")}}removeStyle(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];e.style.opacity="",e.style.visibility="",e.style.transform=""}}checkScroll(t,e){if(this.goScroll=!1,!this.stopEvent&&e&&(this.goScroll=!0,this.haveScroll(e))){this.goScroll=!1;const s=Math.round(e.scrollHeight-e.scrollTop);(Math.abs(s-e.scrollHeight)<2&&t<=0||Math.abs(s-e.clientHeight)<2&&t>=0)&&(this.goScroll=!0)}}haveScroll(t){return t.scrollHeight!==window.innerHeight}removeClasses(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];e.classList.remove(this.options.activeClass),e.classList.remove(this.options.previousClass),e.classList.remove(this.options.nextClass)}}events(){this.events={wheel:this.wheel.bind(this),touchdown:this.touchDown.bind(this),touchup:this.touchUp.bind(this),touchmove:this.touchMove.bind(this),touchcancel:this.touchUp.bind(this),transitionEnd:this.transitionend.bind(this),click:this.clickBullets.bind(this)},l.iOS()&&document.addEventListener("touchmove",t=>{t.preventDefault()}),this.setEvents()}setEvents(){this.wrapper.addEventListener("wheel",this.events.wheel),this.wrapper.addEventListener("touchstart",this.events.touchdown),this.options.bullets&&this.bulletsWrapper&&this.bulletsWrapper.addEventListener("click",this.events.click)}removeEvents(){this.wrapper.removeEventListener("wheel",this.events.wheel),this.wrapper.removeEventListener("touchdown",this.events.touchdown),this.wrapper.removeEventListener("touchup",this.events.touchup),this.wrapper.removeEventListener("touchcancel",this.events.touchup),this.wrapper.removeEventListener("touchmove",this.events.touchmove),this.bulletsWrapper&&this.bulletsWrapper.removeEventListener("click",this.events.click)}clickBullets(t){const e=t.target.closest(`.${this.options.bulletClass}`);if(e){const i=Array.from(this.bulletsWrapper.children).indexOf(e);this.switchingSection(i)}}setActiveBullet(t){if(!this.bulletsWrapper)return;const e=this.bulletsWrapper.children;for(let s=0;s<e.length;s++){const i=e[s];t===s?i.classList.add(this.options.bulletActiveClass):i.classList.remove(this.options.bulletActiveClass)}}touchDown(t){this._yP=t.changedTouches[0].pageY,this._eventElement=t.target.closest(`.${this.options.activeClass}`),this._eventElement&&(this._eventElement.addEventListener("touchend",this.events.touchup),this._eventElement.addEventListener("touchcancel",this.events.touchup),this._eventElement.addEventListener("touchmove",this.events.touchmove),this.clickOrTouch=!0,l.iOS()&&(this._eventElement.scrollHeight!==this._eventElement.clientHeight&&(this._eventElement.scrollTop===0&&(this._eventElement.scrollTop=1),this._eventElement.scrollTop===this._eventElement.scrollHeight-this._eventElement.clientHeight&&(this._eventElement.scrollTop=this._eventElement.scrollHeight-this._eventElement.clientHeight-1)),this.allowUp=this._eventElement.scrollTop>0,this.allowDown=this._eventElement.scrollTop<this._eventElement.scrollHeight-this._eventElement.clientHeight,this.lastY=t.changedTouches[0].pageY))}touchMove(t){const e=t.target.closest(`.${this.options.activeClass}`);if(l.iOS()){let i=t.changedTouches[0].pageY>this.lastY,o=!i;this.lastY=t.changedTouches[0].pageY,e&&(i&&this.allowUp||o&&this.allowDown?t.stopPropagation():t.cancelable&&t.preventDefault())}if(!this.clickOrTouch||t.target.closest(this.options.noEventSelector))return;let s=this._yP-t.changedTouches[0].pageY;this.checkScroll(s,e),this.goScroll&&Math.abs(s)>20&&this.choiceOfDirection(s)}touchUp(t){return this._eventElement.removeEventListener("touchend",this.events.touchup),this._eventElement.removeEventListener("touchcancel",this.events.touchup),this._eventElement.removeEventListener("touchmove",this.events.touchmove),this.clickOrTouch=!1}transitionend(t){this.stopEvent=!1,document.documentElement.classList.remove(this.options.wrapperAnimatedClass),this.wrapper.classList.remove(this.options.wrapperAnimatedClass)}wheel(t){if(t.target.closest(this.options.noEventSelector))return;const e=t.deltaY,s=t.target.closest(`.${this.options.activeClass}`);this.checkScroll(e,s),this.goScroll&&this.choiceOfDirection(e)}choiceOfDirection(t){t>0&&this.nextSection!==!1?this.activeSectionId=this.activeSectionId+1<this.sections.length?++this.activeSectionId:this.activeSectionId:t<0&&this.previousSection!==!1&&(this.activeSectionId=this.activeSectionId-1>=0?--this.activeSectionId:this.activeSectionId),this.switchingSection(this.activeSectionId,t)}switchingSection(t=this.activeSectionId,e){if(e||(t<this.activeSectionId?e=-100:t>this.activeSectionId&&(e=100)),this.activeSectionId=t,this.stopEvent=!0,(this.previousSectionId===!1&&e<0||this.nextSectionId===!1&&e>0)&&(this.stopEvent=!1),this.stopEvent){document.documentElement.classList.add(this.options.wrapperAnimatedClass),this.wrapper.classList.add(this.options.wrapperAnimatedClass),this.removeClasses(),this.setClasses(),this.setStyle(),this.options.bullets&&this.setActiveBullet(this.activeSectionId);let s;e<0?(s=this.activeSection.dataset.fpDirectionUp?parseInt(this.activeSection.dataset.fpDirectionUp):500,document.documentElement.classList.add("fp-up"),document.documentElement.classList.remove("fp-down")):(s=this.activeSection.dataset.fpDirectionDown?parseInt(this.activeSection.dataset.fpDirectionDown):500,document.documentElement.classList.remove("fp-up"),document.documentElement.classList.add("fp-down")),setTimeout(()=>{this.events.transitionEnd()},s),this.options.onSwitching(this),document.dispatchEvent(new CustomEvent("fpswitching",{detail:{fp:this}}))}}setBullets(){if(this.bulletsWrapper=document.querySelector(`.${this.options.bulletsClass}`),!this.bulletsWrapper){const t=document.createElement("div");t.classList.add(this.options.bulletsClass),this.wrapper.append(t),this.bulletsWrapper=t}if(this.bulletsWrapper)for(let t=0;t<this.sections.length;t++){const e=document.createElement("span");e.classList.add(this.options.bulletClass),this.bulletsWrapper.append(e)}}setZIndex(){let t=this.sections.length;for(let e=0;e<this.sections.length;e++){const s=this.sections[e];s.style.zIndex=t,--t}}removeZIndex(){for(let t=0;t<this.sections.length;t++){const e=this.sections[t];e.style.zIndex=""}}}document.querySelector("[data-fp]")&&new m(document.querySelector("[data-fp]"),"");class S{constructor(t){let e={logging:!0};this.config=Object.assign(e,t),this.observer,document.documentElement.classList.contains("watcher")||this.scrollWatcherRun()}scrollWatcherUpdate(){this.scrollWatcherRun()}scrollWatcherRun(){document.documentElement.classList.add("watcher"),this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"))}scrollWatcherConstructor(t){t.length?(this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${t.length})...`),g(Array.from(t).map(function(s){return`${s.dataset.watchRoot?s.dataset.watchRoot:null}|${s.dataset.watchMargin?s.dataset.watchMargin:"0px"}|${s.dataset.watchThreshold?s.dataset.watchThreshold:0}`})).forEach(s=>{let i=s.split("|"),o={root:i[0],margin:i[1],threshold:i[2]},r=Array.from(t).filter(function(c){let a=c.dataset.watchRoot?c.dataset.watchRoot:null,h=c.dataset.watchMargin?c.dataset.watchMargin:"0px",d=c.dataset.watchThreshold?c.dataset.watchThreshold:0;if(String(a)===o.root&&String(h)===o.margin&&String(d)===o.threshold)return c}),u=this.getScrollWatcherConfig(o);this.scrollWatcherInit(r,u)})):this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz")}getScrollWatcherConfig(t){let e={};if(document.querySelector(t.root)?e.root=document.querySelector(t.root):t.root!=="null"&&this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${t.root} немає на сторінці`),e.rootMargin=t.margin,t.margin.indexOf("px")<0&&t.margin.indexOf("%")<0){this.scrollWatcherLogging("йой, налаштування data-watch-margin потрібно задавати в PX або %");return}if(t.threshold==="prx"){t.threshold=[];for(let s=0;s<=1;s+=.005)t.threshold.push(s)}else t.threshold=t.threshold.split(",");return e.threshold=t.threshold,e}scrollWatcherCreate(t){this.observer=new IntersectionObserver((e,s)=>{e.forEach(i=>{this.scrollWatcherCallback(i,s)})},t)}scrollWatcherInit(t,e){this.scrollWatcherCreate(e),t.forEach(s=>this.observer.observe(s))}scrollWatcherIntersecting(t,e){t.isIntersecting?(e.classList.contains("_watcher-view")||e.classList.add("_watcher-view"),this.scrollWatcherLogging(`Я бачу ${e.classList}, додав клас _watcher-view`)):(e.classList.contains("_watcher-view")&&e.classList.remove("_watcher-view"),this.scrollWatcherLogging(`Я не бачу ${e.classList}, прибрав клас _watcher-view`))}scrollWatcherOff(t,e){e.unobserve(t),this.scrollWatcherLogging(`Я перестав стежити за ${t.classList}`)}scrollWatcherLogging(t){this.config.logging&&f(`[Спостерігач]: ${t}`)}scrollWatcherCallback(t,e){const s=t.target;this.scrollWatcherIntersecting(t,s),s.hasAttribute("data-watch-once")&&t.isIntersecting&&this.scrollWatcherOff(s,e),document.dispatchEvent(new CustomEvent("watcherCallback",{detail:{entry:t}}))}}new S({});function w(){document.querySelectorAll("[data-digits-counter]").length&&document.querySelectorAll("[data-digits-counter]").forEach(s=>{s.dataset.digitsCounter=s.innerHTML,s.innerHTML="0"});function n(s){let i=s||document.querySelectorAll("[data-digits-counter]");i.length&&i.forEach(o=>{t(o)})}function t(s){let i=null;const o=parseFloat(s.dataset.digitsCounterSpeed)?parseFloat(s.dataset.digitsCounterSpeed):1e3,r=parseFloat(s.dataset.digitsCounter),u=s.dataset.digitsCounterFormat?s.dataset.digitsCounterFormat:" ",c=0,a=h=>{i||(i=h);const d=Math.min((h-i)/o,1),p=Math.floor(d*(c+r));s.innerHTML=typeof s.dataset.digitsCounterFormat<"u"?v(p,u):p,d<1&&window.requestAnimationFrame(a)};window.requestAnimationFrame(a)}function e(s){const o=s.detail.entry.target;o.querySelectorAll("[data-digits-counter]").length&&n(o.querySelectorAll("[data-digits-counter]"))}document.addEventListener("watcherCallback",e)}setTimeout(()=>{},0);w();window.onload=function(){setTimeout(function(){const n=document.querySelector("body");n&&(n.style.display="")},200)};