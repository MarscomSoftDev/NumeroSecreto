let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt("Indica un numero por favor entre 1 y 10"));
  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    console.log(
      `acertaste, el numero es : ${numeroUsuario} lo hiciste en : ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      console.log("el numero secreto es menor");
    } else {
      console.log("el numero secreto es mayor ");
    }
    intentos++;
    // palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`llegaste al numero maximo de intentos ${maximosIntentos}`);
      break;
    }
  }
}
