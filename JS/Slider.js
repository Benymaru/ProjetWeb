var slide = new Array("Images/Houses/House0.jpg", "Images/Houses/House1.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    console.log(numero);

}
setTimeout("ChangeSlide(1)", 1000);