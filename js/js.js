function encriptarPalabra() {
    let encriptada = "";

    var texto = document.getElementById("encriptar").value;

    var palabra = texto.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      switch (letra) {
        case "e":
          encriptada += "enter";
          break;
        case "i":
          encriptada += "imes";
          break;
        case "a":
          encriptada += "ai";
          break;
        case "o":
          encriptada += "ober";
          break;
        case "u":
          encriptada += "ufat";
          break;
        default:
          encriptada += letra;
      }
    }
    var miDiv = document.getElementById("block2");
    miDiv.innerHTML =encriptada;
  }
  
  function desencriptarPalabra() {

    var texto = document.getElementById("encriptar").value;

    var palabraEncriptada = texto.toLowerCase();
    let desencriptada = "";
    for (let i = 0; i < palabraEncriptada.length; i++) {
      let letra = palabraEncriptada.substring(i, i + 1);
      switch (letra) {
        case "e":
          if (palabraEncriptada.substring(i + 1, i + 5) === "nter") {
            desencriptada += "e";
            i += 4;
          } else {
            desencriptada += letra;
          }
          break;
        case "i":
          if (palabraEncriptada.substring(i + 1, i + 4) === "mes") {
            desencriptada += "i";
            i += 3;
          } else {
            desencriptada += letra;
          }
          break;
        case "a":
          if (palabraEncriptada.substring(i + 1, i + 2) === "i") {
            desencriptada += "a";
            i += 1;
          } else {
            desencriptada += letra;
          }
          break;
        case "o":
          if (palabraEncriptada.substring(i + 1, i + 4) === "ber") {
            desencriptada += "o";
            i += 3;
          } else {
            desencriptada += letra;
          }
          break;
        case "u":
          if (palabraEncriptada.substring(i + 1, i + 4) === "fat") {
            desencriptada += "u";
            i += 3;
          } else {
            desencriptada += letra;
          }
          break;
        default:
          desencriptada += letra;
      }
    }
    var miDiv = document.getElementById("block2");
    miDiv.innerHTML =desencriptada;
  }