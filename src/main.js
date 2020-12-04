export default class App {

    sumarParesFor(){
        let suma = 0;
        for (let i = 1; i <= 20 ; i++) {
            if (i % 2 === 0){
                suma = suma + i;
            }
        }
        return suma;
    }

    contarImparesFor(numero1, numero2){
        let contador = 0;
        for (let i = numero1; i <= numero2; i++) {
            if (i % 2 !== 0 ){
                contador = contador + 1;
            }
        }
        return contador;
    }

    sumarParesWhile(){
        let i = 1;
        let suma = 0;
        while (i <= 20) {
            if(i % 2 === 0){
                suma += i;
            }
            i += 1;
        }
        return suma;
    }

    contarImparesWhile(inicio, fin){
        let i = inicio;
        let contador = 0;
        while (i <= fin) {
            if (i % 2 !== 0){
                contador += 1;
            }
            i += 1;
        }
        return contador;
    }
}


let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(12,24));

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(12,24));