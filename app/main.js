const slideList = [{
    img: "img/slide1.jpg",
    text: 'Jest w Polsce taka siła...'
   },
   {
    img: "img/slide2.jpeg",
    text: 'Siła bez honoru jest niczym.'
   },
   {
    img: "img/slide3.jpg",
    text: 'Trzeci tekst'
   }];
   
   const image = document.querySelector('img.slide');
   const h1 = document.querySelector('p.slider__text');
   // Interfejs
   const time = 3000;
   let active = 0;
   
   // Implementacje
   
   const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
   }
   let interval = setInterval(changeSlide, time);
   
   const keyChangeSlide = (e) =>{
   
    switch (e.keyCode){
        case 39:
            active++;
            if (active === slideList.length) {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            clearInterval(interval);
            interval = setInterval(changeSlide, time);
            break;
        case 37:
            if (active === 0){
             active = slideList.length;
            }
            active--;
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            clearInterval(interval);
            interval = setInterval(changeSlide, time);
            break;
    }
   }
   
   // utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
   window.addEventListener('keydown', keyChangeSlide)


   const header = document.querySelector(".main-header");

   window.addEventListener("scroll", ()=>{
   if (window.scrollY > 150){
       if (header.style.position === "fixed")return;
       else{
       header.style.position = "fixed";
       console.log("fixed");
    }
   } else {
       if (header.style.position === "relative") return;
       else {
        header.style.position = "relative";
        console.log("relative");
       }
   }
})