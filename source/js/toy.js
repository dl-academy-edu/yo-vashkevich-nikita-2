/*       Const 0 500     */


const progress = document.querySelector('.cost__input-range');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #C29974 0%, #C29974 ${value}%, rgba(0, 0, 0, 0.5) ${value}%, rgba(0, 0, 0, 0.5) 100%)`
})