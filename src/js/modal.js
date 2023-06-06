(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openSecModalBtn: document.querySelector('[data-modal-open-sec]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openSecModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-subscribe-modal-open]'),
    closeSubscrModalBtn: document.querySelector('[data-subscribe-modal-close]'),
    modal: document.querySelector('[data-subscribe-modal]'),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeSubscrModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();