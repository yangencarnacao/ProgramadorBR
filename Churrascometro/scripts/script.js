/*Regras
Carne: 400g/pessoa; +de 6 horas: 650g/pessoa
Cerveja: 1200ml/pessoa; +de 6 horas: 2000 ml/pessoa
Refrigerante/água: 1000ml/pessoa; +de 6 horas: 1500ml/pessoa
Crianças valem por 0.5 e não bebem cerveja
*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value


    let qtdeCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdeCerveja = cervejaPP(duracao) * adultos;
    let qtdeRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao)/2 * criancas);


    resultado.innerHTML = `<p>${qtdeCarne/1000}kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdeCerveja/355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${qtdeRefrigerante/1000}L de refrigerante/água</p>`;
    
}

function carnePP(duracao){
    let carne = 400;
        if(duracao >= 6){
            carne = 650;
        }
    return carne;
}

function cervejaPP(duracao){
    let cerveja = 1200;
        if(duracao >= 6){
            cerveja = 2000;
        }
    return cerveja;
}

function refrigerantePP(duracao){
    let refrigerante = 1000;
        if(duracao >= 6){
            refrigerante = 1500;
        }
    return refrigerante;
}