let seuVotoPara = document.querySelector('.parteLadoUm span');
let cargo = document.querySelector('.parteLadoDois span');
let descricao = document.querySelector('.parteLadoQuatro');
let descricaoDois = document.querySelector('.parteLadoCinco');
let aviso = document.querySelector('.parteDois');
let lateral = document.querySelector('.ladoDois');
let numeros = document.querySelector('.parteLadoTres');

let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = '';

    for(let i=0; i < etapa.numeros; i++){
        if(i===0){
            numeroHtml += '<div class="numero pisca"></div>'
        } 
        else {
        numeroHtml += '<div class="numero"></div>';
        }

    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ' ';
    descricaoDois.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }
        else {
            return false;

        }
    })
    if(candidato.length >0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML =  `Nome: ${candidato.nome}<br/> vice: ${candidato.vice} <br/> Partido: ${candidato.partido} `;

        let fotosHtml = '';

        for(let i in candidato.fotos){
            fotosHtml += `<div class="imagemUm"><img src="Imagens/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;
    }
    else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="avisoGrande pisca"> VOTO NULO </div>';

    }
}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero != null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling!=null){

            elNumero.nextElementSibling.classList.add('pisca');

        }
        else {
            atualizaInterface();
        }
    }
}
function Branco(){
    descricao.innerHTML = '<div class="avisoGrande pisca"> VOTO EM BRANCO </div>';

}
function Corrige(){
    comecarEtapa();
}
function Confirma(){
        seuVotoPara.style.display = 'none';
        cargo.innerHTML = '';
        descricao.innerHTML = '<div class="avisoGrandeDois pisca"> FIM </div>';
        descricaoDois.innerHTML = '';
        aviso.style.display = 'none';
        lateral.innerHTML = '';
        numeros.innerHTML = '';
}
comecarEtapa();