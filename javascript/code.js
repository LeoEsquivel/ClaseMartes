function calcular(){
    let peso = document.getElementById('peso').value;
    let alt = document.getElementById('alt').value;

    if(alt < 1 || peso < 1){
        document.getElementById('resultado').innerHTML = 'Ingrese datos validos para el calculo adecuado';
    }else{
        let imc = peso/(alt * alt);
        document.getElementById('resultado').innerHTML = 'Su indice de masa corporal es de: '+ imc.toFixed(2);
        cambiarIMG(imc);
    }

    console.log(imc);
}

function cambiarIMG(imc){
    var imagen = document.getElementById('foto');
    if(imc < 18.5){
        //bajo peso
        imagen.src = "Resources/pesobajo.png"
    }else if(imc > 18.5 && imc < 24.9){
        //peso normal
        imagen.src = "Resources/pesoideal.png"
    }else if(imc > 25 && imc < 29.9){
        //sobrepeso
        imagen.src = "Resources/sobrepeso.png"
    }else if(imc > 30 && imc < 34.9){
        //obesidad
        imagen.src = "Resources/obesidad.png"
    }else if(imc > 35){
        //obesidad morbida
        imagen.src = "Resources/obesidadmorbida2.png"
    }
}