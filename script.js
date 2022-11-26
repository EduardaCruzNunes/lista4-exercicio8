let n = 0;
var valores = [];
var repeticao = "";

n = prompt('Digite um valor:');

const imprimirValores = () => {

    for (let i = 1; i <= n; i++) {
        for (let cont = 1; cont <= i; cont++) {
            repeticao = i;
            valores.push(repeticao);
            repeticao = "";

        }
        console.log(valores.join(' '));
        valores = [];
    }
    return valores;
}
imprimirValores();