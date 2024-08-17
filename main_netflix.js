const slcTab1 = document.querySelector('#NoCom');
const slcTab2 = document.querySelector('#WathAny');
const slcTab3 = document.querySelector('#PickUPrice');

const tabCAcontent= document.querySelector('#tab1');
const tabWAcontent= document.querySelector('#tab2');
const tabPPcontent= document.querySelector('#tab3');

slcTab1.addEventListener('click', (e) => {
    tabCAcontent.style.display = "block";
    tabWAcontent.style.display = "none";
    tabPPcontent.style.display = "none";
});

slcTab2.addEventListener('click', (e) => {
    tabCAcontent.style.display = "none";
    tabWAcontent.style.display = "block";
    tabPPcontent.style.display = "none";
})

slcTab3.addEventListener('click', (e) => {
    tabCAcontent.style.display = "none";
    tabWAcontent.style.display = "none";
    tabPPcontent.style.display = "block";
})

