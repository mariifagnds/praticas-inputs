// Criação e inspeção inicial da lista
let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista inicial:", listaDeAfazeres);
console.log("Primeiro item:", listaDeAfazeres[0]);
console.log("Total de afazeres:", listaDeAfazeres.length);

// Adicionando novos afazeres
listaDeAfazeres.push("Fazer exercícios");   // adiciona no final
listaDeAfazeres.unshift("Agendar médico"); // adiciona no início
console.log("Após adicionar novos afazeres:", listaDeAfazeres);

// Removendo afazeres concluídos
let afazerRemovidoFinal = listaDeAfazeres.pop(); // remove o último
console.log("Afazer removido do final:", afazerRemovidoFinal);

let afazerRemovidoInicio = listaDeAfazeres.shift(); // remove o primeiro
console.log("Afazer removido do início:", afazerRemovidoInicio);

console.log("Após remoções:", listaDeAfazeres);

// Organizando e invertendo a lista
let listaOrganizada = [...listaDeAfazeres]; // cópia da lista original

listaOrganizada.sort(); // ordena em ordem alfabética
console.log("Lista organizada (ordem alfabética):", listaOrganizada);

listaOrganizada.reverse(); // inverte a ordem
console.log("Lista invertida:", listaOrganizada);

// Confirma que a lista original não foi alterada
console.log("Lista original permanece igual:", listaDeAfazeres);
