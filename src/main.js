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
        let suma = 0;
        let i = 1;
        while (i <= 20) {
            if (i % 2 === 0){
                suma += i;
            }
        }
        return suma;
    }
    
}


let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(12,24));