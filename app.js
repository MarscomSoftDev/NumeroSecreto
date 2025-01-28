let numeroAEscojer = parseInt(prompt("que rango de numeros quieres jugar?"));
let intentosAEscojet = parseInt(prompt("cuantos intentos quieres?"));
let numeroSecreto = Math.floor(Math.random() * (numeroAEscojer - 1)) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";

console.log(`tu rango a jugar es menor a ${numeroAEscojer} intentos`);
console.log(`tienes ${intentosAEscojet} intentos`);

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Indica un numero por favor entre 1 ${numeroAEscojer}`)
  );
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
    if (intentos > intentosAEscojet) {
      alert(`llegaste al numero maximo de intentos ${intentosAEscojet}`);
      break;
    }
  }
}
