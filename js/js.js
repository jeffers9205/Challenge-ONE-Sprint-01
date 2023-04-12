function encryptWord() {
  let encrypted = "";

  var text = document.getElementById("encriptar").value;

  var word = text.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    switch (letter) {
      case "e":
        encrypted += "enter";
        break;
      case "i":
        encrypted += "imes";
        break;
      case "a":
        encrypted += "ai";
        break;
      case "o":
        encrypted += "ober";
        break;
      case "u":
        encrypted += "ufat";
        break;
      default:
        encrypted += letter;
    }
  }
  var myDiv = document.getElementById("block2");
  myDiv.innerHTML = encrypted;
  miFuncion();
}

function decryptWord() {
  var text = document.getElementById("encriptar").value;

  var encryptedWord = text.toLowerCase();
  let decrypted = "";
  for (let i = 0; i < encryptedWord.length; i++) {
    let letter = encryptedWord.substring(i, i + 1);
    switch (letter) {
      case "e":
        if (encryptedWord.substring(i + 1, i + 5) === "nter") {
          decrypted += "e";
          i += 4;
        } else {
          decrypted += letter;
        }
        break;
      case "i":
        if (encryptedWord.substring(i + 1, i + 4) === "mes") {
          decrypted += "i";
          i += 3;
        } else {
          decrypted += letter;
        }
        break;
      case "a":
        if (encryptedWord.substring(i + 1, i + 2) === "i") {
          decrypted += "a";
          i += 1;
        } else {
          decrypted += letter;
        }
        break;
      case "o":
        if (encryptedWord.substring(i + 1, i + 4) === "ber") {
          decrypted += "o";
          i += 3;
        } else {
          decrypted += letter;
        }
        break;
      case "u":
        if (encryptedWord.substring(i + 1, i + 4) === "fat") {
          decrypted += "u";
          i += 3;
        } else {
          decrypted += letter;
        }
        break;
      default:
        decrypted += letter;
    }
  }
  var myDiv = document.getElementById("block2");
  myDiv.innerHTML = decrypted;
}

function copyResult() {

  var result = document.getElementById("block2");
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(result);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  
  alert("The result has been copied to the clipboard.");
  }




  function miFuncion() {
    const titulo = document.getElementById("block2");
    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");
    const imagen = document.getElementById("imagen");
    
    if (titulo.innerText === "") {
        imagen.style.display = "block";
        texto1.innerHTML = "Ningún mensaje fue encontrado";
        texto2.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
    }
    else {
        imagen.style.display = "none";
        texto1.innerHTML = "";
        texto2.innerHTML = "";
        titulo.style.display = "block";
        document.getElementById("block2").style.fontSize = "50px";
    }
  }
  
  
  