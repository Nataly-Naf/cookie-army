(() => {
  const refs = {
    openModalreviewBtn: document.querySelector('[data-modalreview-open]'),
    closeModalreviewBtn: document.querySelector('[data-modalreview-close]'),
    modalreview: document.querySelector('[data-modalreview]'),
  };

  refs.openModalreviewBtn.addEventListener('click', toggleModalreview);
  refs.closeModalreviewBtn.addEventListener('click', toggleModalreview);

  function toggleModalreview() {
    refs.modalreview.classList.toggle('review-modal-is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
