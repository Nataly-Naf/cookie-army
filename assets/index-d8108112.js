(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();(()=>{const t={openModalreviewBtn:document.querySelector("[data-modalreview-open]"),closeModalreviewBtn:document.querySelector("[data-modalreview-close]"),modalreview:document.querySelector("[data-modalreview]")};t.openModalreviewBtn.addEventListener("click",o),t.closeModalreviewBtn.addEventListener("click",o);function o(){t.modalreview.classList.toggle("review-modal-is-hidden"),document.body.classList.toggle("no-scroll")}})();$(document).ready(function(){$(".chocolate-is-loved-slider").slick({arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:1,speed:1100,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,responsive:[{breakpoint:320,settings:{slidesToShow:1}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:1200,settings:{slidesToShow:3}}]})});(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2.6},1200:{slidesPerView:4}},spaceBetween:18,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0});(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),openSecModalBtn:document.querySelector("[data-modal-open-sec]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.openSecModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-subscribe-modal-open]"),openSecModalBtn:document.querySelector("[data-subscribe-modal-open-sec]"),closeSubscrModalBtn:document.querySelector("[data-subscribe-modal-close]"),modal:document.querySelector("[data-subscribe-modal]")};t.openModalBtn.addEventListener("click",o),t.openSecModalBtn.addEventListener("click",o),t.closeSubscrModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();
