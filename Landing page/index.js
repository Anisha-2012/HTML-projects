function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function changeButtonColor(color){
    const btn = document.querySelector('.btn');
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');
    btn.style.background = color;
    btn1.style.background = color;
    btn2.style.background = color;
    btn3.style.background = color;
}