let n1 = parseInt(prompt("ingrese numero menor a 20: "));

if (n1 < 1||n1>20) alert("numero no cumple lo solicitado", location.reload());

const forCiclefunction = (numEntry, numOut) => {
  let i = numEntry;
  let y = numEntry;
  let n = 1;
  
  while (i >= numOut || i > 0 || n <= i) {
    console.log(n, "x", y, "=", n * y);
    n++;
    i--;
  }
  let resultado=1;
  for (let i = 1; i <= n1; i++) {
    resultado = resultado * i;
    console.log("Factorial de " + i + " es: " + resultado);
  }

}


forCiclefunction(n1, 20);
/*esta ok*/

/*const funcionf = (n) => {
  let r = 1;
  for (let z = n; z > 0; z--) {
    r *= z;
  }
};
funcionf(n1);
console.log(z);*/
