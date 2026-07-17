let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let link = document.querySelector('.cabecalho__menu')

let icon = document.querySelector('.icon');
let vamos = document.querySelector('.vamos')




trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('ligado');
    body.classList.toggle('ligado')
    link.classList.toggle('ligado')
})



function menuShow() {
 
     let menuMobile = document.querySelector('.mobile-menu');

     if (menuMobile.classList.contains('open')) {
         menuMobile.classList.remove('open');
         document.querySelector('.icon').src = "menu_white_36dp.svg";
         document.querySelector('.vamos').src = "cardapio-pequeno.png"

         document.querySelector('.icon').style.transform = "scale(1)";
         document.querySelector('.vamos').style.transform = "scale(1)";
     } else {
         menuMobile.classList.add('open');
         document.querySelector('.icon').src = "close_white_36dp.svg";
         document.querySelector('.vamos').src = "x-imagem.png";

         document.querySelector('.vamos').style.transform = "scale(0.6)";
     }
}
