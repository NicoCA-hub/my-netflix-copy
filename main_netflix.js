const slcTab1 = document.querySelector('#NoCom');
const slcTab2 = document.querySelector('#WathAny');
const slcTab3 = document.querySelector('#PickUPrice');

const tabCAcontent= document.querySelector('#tab1');
const tabWAcontent= document.querySelector('#tab2');
const tabPPcontent= document.querySelector('#tab3');

slcTab1.addEventListener('click', (e) => {
    tabCAcontent.style.display = "block";
    slcTab1.classList.add('border');
    tabWAcontent.style.display = "none";
    slcTab2.classList.remove('border');
    tabPPcontent.style.display = "none";
    slcTab3.classList.remove('border');
});

slcTab2.addEventListener('click', (e) => {
    tabCAcontent.style.display = "none";
    slcTab1.classList.remove('border');
    tabWAcontent.style.display = "block";
    slcTab2.classList.add('border');
    tabPPcontent.style.display = "none";
    slcTab3.classList.remove('border');
})

slcTab3.addEventListener('click', (e) => {
    tabCAcontent.style.display = "none";
    slcTab1.classList.remove('border');
    tabWAcontent.style.display = "none";
    slcTab2.classList.remove('border');
    tabPPcontent.style.display = "block";
    slcTab3.classList.add('border');
})

