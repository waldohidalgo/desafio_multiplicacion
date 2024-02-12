const solicitarData = () => {
  let numero_ingresado = null;
  while (true) {
    const data_ingresada = +prompt("Ingresa un número entero entre 1 y 20");
    if (
      data_ingresada < 1 ||
      data_ingresada > 20 ||
      !Number.isInteger(data_ingresada)
    ) {
      alert("Número fuera del rango");
    } else {
      numero_ingresado = data_ingresada;
      break;
    }
  }
  return numero_ingresado;
};

const resultadosOperaciones = (numero_ingresado) => {
  let multiplicacionString = "";
  let factorialString = "";
  for (let i = 1; i <= numero_ingresado; i++) {
    multiplicacionString += `${i} x ${numero_ingresado} = ${
      i * numero_ingresado
    } \n`;

    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }

    factorialString += `Factorial de ${i} es: ${factorial} \n`;
  }
  console.log(multiplicacionString);
  console.log(factorialString);
};

resultadosOperaciones(solicitarData());
