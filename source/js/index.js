const popup = document.querySelector('.section-popup');
const buttonOpen = document.querySelector('.column__button');
const buttonClose = document.querySelector('.popup-close');

const emailInput = document.getElementById('name');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('open');
    emailInput.focus()
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open');
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    }
})













/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */


    const titles = {
    brown: "THE OOH NOO COLLECTION",
    pink: "HELLO, WORLD!!!",
    green: "DIRECT LINE DIGITAL",
    red: "DONE!!!!! DONE!!!!"
    }
    
    const colors = {
    brown: "#EEE4DB",
    pink: "rgba(255,0,240,0.7)",
    green: "rgba(15, 255, 115,0.7)",
    red: "rgba(192, 105, 255, 0.7)"
    }

    const numbers = {
    brown: "01",
    pink: "02",
    green: "03",
    red: "04"
    }

    const form = document.getElementById("control")
    const title = document.getElementById("title")
    const section = document.getElementById("banner")
    const num = document.getElementById("numberjs")
    
    
    form.addEventListener('change', changeBlock)
    
    function changeBlock(event) {
    
    let newValues = event.target.dataset.value
    title.textContent = `${titles[newValues]}`
    banner.style.background = `${colors[newValues]}`
    numberjs.textContent = `${numbers[newValues]}`
    
    }



/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */