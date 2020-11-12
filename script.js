const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.modal-img');
const imgTxt = document.querySelector('.caption');

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        // Dynamic change text and image
        const originalSrc = preview.getAttribute('data-orignal');
        original.src = `./images/large/${originalSrc}`
        const altText = preview.alt;
        imgTxt.textContent = altText;
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.add('open');
    }
});