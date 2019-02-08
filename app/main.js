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
    text: 'Dopóki walczysz jesteś zwycięzcą.'
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
   if (window.scrollY > 100){
       if (header.style.position === "fixed")return;
       else{
       header.style.position = "fixed";
       header.style.opacity = "0.8";
    }
   } else {
       if (header.style.position === "relative") return;
       else {
        header.style.position = "relative";
        header.style.opacity = "1";
       }
   }
})



 // timeline
 {let active = 0;
 const TLli = [...document.querySelectorAll("#TLDates li")];
 const TLDates = document.querySelector("#TLDates");
 const datesLength = TLli.length;
 const TLDesc = [...document.querySelectorAll("#TLDesc article")];
 // TLDesc.eq(0).show();

 const fader = (element, index) => {
     let op = 1;  // initial opacity
     const timer = setInterval(()=> {
         if (op <= 0.1){
             clearInterval(timer);
             element.style.display = "";
         }
         element.style.opacity = op;
         element.style.filter = `alpha(opacity=${op * 100})`;
         op -= op * 0.1;
     }, 50);

     let opi = 0.1;
     const timerIn = setInterval(()=> {
         index.style.display = "block";
         if (opi >= 1){
             clearInterval(timerIn);
         }
         index.style.opacity = opi;
         opi += opi * 0.1;
     }, 50);
 }

 const fade = (index) =>{
     fader(TLDesc[active], TLDesc[index]);
     active = index;
     document.querySelector("#TLDesc article").classList.remove("first");
                 }

 TLli.forEach((item, index) =>{
 item.addEventListener("click", (e)=>{
     let move = index * 80;
     TLli.forEach((li)=>{
         li.classList.remove("active");
     })
     e.target.classList.add("active");
     TLDates.style.transform = `translateX(-${move}px)`;
     fade(index);
     })
     
     
 })
}