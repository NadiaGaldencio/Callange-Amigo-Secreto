let amigos = [];
let sorteios = {}; 

function embaralhar(array) { 
    let indiceAtual = array.length, indiceAleatorio, valorTemporario;
    while (indiceAtual !== 0) {
         indiceAleatorio = Math.floor(Math.random() * indiceAtual); 
         indiceAtual--; 
         valorTemporario = array[indiceAtual];
          array[indiceAtual] = array[indiceAleatorio]; 
          array[indiceAleatorio] = valorTemporario;
         }
          return array;
         }

function gerarSorteioValido() { 
    let sorteados;
    let valido = false;
    
    if (amigos.length < 3) { 
        throw new Error("É preciso ter pelo menos 3 amigos para sortear!");
     }

while (!valido) {
     sorteados = embaralhar([...amigos]);
     valido = true;

     for (let i = 0; i < amigos.length; i++) {

         if (amigos[i] === sorteados[i]) {
            valido = false; 
            break;
 } } }
        return sorteados;
}        

function adicionarAmigo (){
    const input = document.getElementById("amigo");
    let nome = input.value;
    
    if(nome === ""|| !isNaN(nome)) {
        alert ("Por favor, digite um nome válido");
        return;
    };

    if (amigos.includes(nome)) { 
        alert("Esse nome já foi adicionado!"); 
        input.value = ''; 
        return;
     };
              
    amigos.push(nome);
    input.value = '';
    atualizarListaAmigos();
    console.log(amigos);
}

function atualizarListaAmigos (){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
        amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
});
}
function sortearAmigo() { 
    
    if (amigos.length < 3) {
        alert("Adicione ao menos 3 amigos para realizar o sorteio!");
         return;
    } 
    if(amigos.length === 0) { 
        alert("É preciso adicionar amigos antes de sortear!"); 
        return; 
    }

    const amigosEmbaralhados = gerarSorteioValido();

sorteios = {};

for (let i = 0; i < amigos.length; i++) {
    sorteios[amigos[i]] = amigosEmbaralhados[i]; 
}
 console.log("Sorteios:", sorteios);

const resultadoElement = document.getElementById("resultado"); 
resultadoElement.innerHTML = "Sorteio realizado com sucesso! Agora, cada um pode consultar seu amigo secreto.";

document.getElementById("listaAmigos").innerHTML = ''; 
amigos = [];
 }

function consultarAmigo() {
    console.log('obotão foi acionado')
    const inputConsulta = document.getElementById("consulta"); 
    const nome = inputConsulta.value.trim();
    const resultadoConsulta = document.getElementById("consultaResultado");

if (nome === "") { 
    alert("Digite um nome para consulta."); 
    return;
 } 

if (sorteios[nome]) { 
    resultadoConsulta.textContent =`Seu amigo secreto é: ${sorteios[nome]}`; 
} else {
     resultadoConsulta.textContent = "Nome não encontrado nos sorteios!";
     }

}