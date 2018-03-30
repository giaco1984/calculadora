//creacion de modulo
function calculadora(){

// variables operaciones
var tecla=0;
var operando1=0;
var operando2=0;
var operacion=0;
var memoria=0;
var memoriarep=0;
var resultado=0;
var igual=0;

//evaluacion de numeros para mostrar en pantalla

function evalua(){
if (resultado>9999999) {document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>999999) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>99999) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>9999) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>999) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>99) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado>9) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<=9 && resultado>=0) {resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-9999999) {document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-999999) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-99999) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-9999) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-999) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-99) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
if (resultado<-9) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
else {
  if (resultado>=-9 && resultado<=0) {resultado=resultado*10-tecla;document.getElementById("display").innerHTML =resultado;}
  else {
  resultado=resultado*10+tecla;document.getElementById("display").innerHTML =resultado;
  }}}}}}}}}}}}}}}}}

// resetea la calculadora y inicializa en cero
document.getElementById("on").addEventListener("click",function(){
document.getElementById("on").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("on").style.transform="scale(1)";
},300);
document.getElementById("display").innerHTML =0;
resultado=0;
});

//cambia de signo el numero mostrado
document.getElementById("sign").addEventListener("click",function(){
document.getElementById("sign").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("sign").style.transform="scale(1)";
},300);
resultado=resultado*-1;
document.getElementById("display").innerHTML =resultado;
});

//muestra los numeros en pantalla y cambia de tamano el boton
document.getElementById("0").addEventListener("click",function(){
document.getElementById("0").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("0").style.transform="scale(1)";
},300);
if (resultado==0) {
document.getElementById("display").innerHTML =0;
} else {
  tecla=0;
  evalua();
  }
});

document.getElementById("1").addEventListener("click",function(){
document.getElementById("1").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("1").style.transform="scale(1)";
},300);
tecla=1;
  evalua();
});

document.getElementById("2").addEventListener("click",function(){
document.getElementById("2").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("2").style.transform="scale(1)";
},300);
tecla=2;
evalua();
});

document.getElementById("3").addEventListener("click",function(){
document.getElementById("3").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("3").style.transform="scale(1)";
},300);
tecla=3;
evalua();
});

document.getElementById("4").addEventListener("click",function(){
document.getElementById("4").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("4").style.transform="scale(1)";
},300);
tecla=4;
evalua();
});

document.getElementById("5").addEventListener("click",function(){
document.getElementById("5").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("5").style.transform="scale(1)";
},300);
tecla=5;
evalua();
});

document.getElementById("6").addEventListener("click",function(){
document.getElementById("6").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("6").style.transform="scale(1)";
},300);
tecla=6;
evalua();
});

document.getElementById("7").addEventListener("click",function(){
document.getElementById("7").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("7").style.transform="scale(1)";
},300);
tecla=7;
evalua();
});

document.getElementById("8").addEventListener("click",function(){
document.getElementById("8").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("8").style.transform="scale(1)";
},300);
tecla=8;
evalua();
});

document.getElementById("9").addEventListener("click",function(){
document.getElementById("9").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("9").style.transform="scale(1)";
},300);
tecla=9;
evalua();
});


//agrega coma decimal
document.getElementById("punto").addEventListener("click",function(){
document.getElementById("punto").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("punto").style.transform="scale(1)";
},300);

document.getElementById("display").innerHTML =resultado.toFixed(1);
});


//Operaciones de la caculadora

//operacion de suma
document.getElementById("mas").addEventListener("click",function(){
document.getElementById("mas").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("mas").style.transform="scale(1)";
},300);
if (resultado==0) {
  operando1=memoria;
  resultado=0;
  igual=1;
  memoria=0;
} else {
  if (operando1==0) {
  operando1=resultado;
  resultado=0;
  igual=1;
  document.getElementById("display").innerHTML ="";
  } else {
    operando1=operando1+resultado;
    resultado=0;
    igual=1;
    document.getElementById("display").innerHTML ="";
  }
}
});

//Operacion de resta
document.getElementById("menos").addEventListener("click",function(){
document.getElementById("menos").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("menos").style.transform="scale(1)";
},300);
if (resultado==0) {
  operando1=memoria;
  resultado=0;
  igual=2;
  memoria=0;
} else {
  if (operando1==0) {
  operando1=resultado;
  resultado=0;
  igual=2;
  document.getElementById("display").innerHTML ="";
  } else {
    operando1=operando1-resultado; //almacena la suma del primer numero + el nuevo numero ingresado
    resultado=0;
    igual=2;
    document.getElementById("display").innerHTML ="";
  }
}
});

// operacion multiplicacion
document.getElementById("por").addEventListener("click",function(){
document.getElementById("por").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("por").style.transform="scale(1)";
},300);
if (resultado==0) {
  operando1=memoria;
  resultado=0;
  igual=3;
  memoria=0;
} else {
  if (operando1==0) {
  operando1=resultado;
  resultado=0;
  igual=3;
  document.getElementById("display").innerHTML ="";
  } else {
    operando1=operando1*resultado; //almacena la suma del primer numero + el nuevo numero ingresado
    resultado=0;
    igual=3;
    document.getElementById("display").innerHTML ="";
  }
}
});

//operacion division
document.getElementById("dividido").addEventListener("click",function(){
document.getElementById("dividido").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("dividido").style.transform="scale(1)";
},300);
if (resultado==0) {
  operando1=memoria;
  resultado=0;
  igual=4;
  memoria=0;
} else {
  if (operando1==0) {
  operando1=resultado;
  resultado=0;
  igual=4;
  document.getElementById("display").innerHTML ="";
  } else {
    operando1=operando1/resultado; //almacena la suma del primer numero + el nuevo numero ingresado
    resultado=0;
    igual=4;
    document.getElementById("display").innerHTML ="";
  }
}
});

//operacion raiz cuadrada
document.getElementById("raiz").addEventListener("click",function(){
document.getElementById("raiz").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("raiz").style.transform="scale(1)";
},300);
if (resultado==0) {
  operando1=memoria;
  resultado=0;
  igual=5;
  memoria=0;
} else {
  operando1=resultado;
  resultado=0;
  igual=5;
  document.getElementById("display").innerHTML ="";
}
});

// Da resultados de operaciones matematicas
document.getElementById("igual").addEventListener("click",function(){
document.getElementById("igual").style.transform="scale(0.9)";
setTimeout(function(){
document.getElementById("igual").style.transform="scale(1)";
},300);

switch (igual) {
  case 1:
  operacion=operando1+resultado;
  memoria=operacion;
  memoriarep=resultado;
  igual=6;
    break;
    case 2:
    operacion=operando1-resultado;
    memoria=operacion;
      memoriarep=resultado;
    igual=7;
    break;
    case 3:
    operacion=operando1*resultado;
    memoria=operacion;
      memoriarep=resultado;
    igual=8;
    break;
    case 4:
    operacion=operando1/resultado;
    memoria=operacion;
      memoriarep=resultado;
    igual=9;
    break;
    case 5:
    operacion=Math.sqrt(operando1);
    memoria=operacion;
    igual=10;
    break;
    case 6:
    operacion=memoria+memoriarep;
    memoria=operacion;
    igual=6;
    break;
    case 7:
    operacion=memoria-memoriarep;
    memoria=operacion;
    igual=7;
    break;
    case 8:
    operacion=memoria*memoriarep;
    memoria=operacion;
    igual=8;
    break;
    case 9:
    operacion=memoria/memoriarep;
    memoria=operacion;
    igual=9;
    break;
    case 10:
    operacion=Math.sqrt(memoria);
    memoria=operacion;
    igual=10;
    break;
  default:
}
var digitos = operacion.toString();
document.getElementById("display").innerHTML =digitos.substr(0,8);
operando1=0; //inicializa las variables
operacion=0;
resultado=0;
});
}
