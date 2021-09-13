window.addEventListener('scroll', function(){
    let header = document.querySelector('#navmenu');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('bg-white',windowPosition);
    header.classList.toggle('scrolling-active',windowPosition);
    
});
// window.onload=inicio;
// function inicio(){
//     document.getElementById('buttonClick').onclick = cambiocolor;
// }
// function cambiocolor(){
//     var x = document.getElementById('buttonClick').style;
//     x.backgroundColor = 'white';
//     console.log('hola');
// }
document.getElementById('buttonClick').addEventListener('click', colornav);
function colornav(){
    console.log('hola2');
    let header = document.querySelector('#navmenu');
    header.classList.toggle('bg-white', window.scrollY === 0 );
    header.classList.toggle('scrolling-active', window.scrollY === 0 );
    document.getElementById('buttonClick').removeEventListener('click', colornav);
}

document.getElementById('buttonClick').removeEventListener('click', function(){
    console.log('hola3');
    let header = document.querySelector('#navmenu');
    header.classList.toggle('bg-white', window.scrollY === 0 );
    header.classList.toggle('scrolling-active', window.scrollY === 0 );
});

const btn = document.querySelector('')