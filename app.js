let numeroSecreto = 6;
let numeroUsuario = 0;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt("Indica un numero por favor entre 1 y 10"));
  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    console.log(`acertaste, el numero es : ${numeroUsuario}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      console.log("el numero secreto es menor");
    } else {
      console.log("el numero secreto es mayor ");
    }
  }
}
