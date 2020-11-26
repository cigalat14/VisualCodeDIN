const N =20;
let s = "*";
let espacios = "";
console.log("Diagonal inversa con N=20");
console.log();

for (let i = 0; i<N; i++){
    espacios =" "+ espacios;
}
for (let j = 0; j<N; j++){
    console.log(espacios + s);
    espacios = espacios.replace(' ', '');
}
