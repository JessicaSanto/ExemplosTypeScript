// Instalação TypeScript -> npm i -g typescript
// Instalação de pacote para rodar no terminal -> npm i -g ts-node
// Para rodar no terminal-> npx ts-node arquivo.ts
// Instalação de Prompt-Sync ->npm i prompt-sync
// Rodar prompt-sync -> npm i --save-dev @types/prompt-sync


// INFERENCIA
let x = true;

//ANNOTATION
let y: number = 2;

//EXEMPLO 1
let z:number = 15;
z = 20
console.log(z)

// TIPOS DE DADOS
let nome: string = "Thiago";

let idade: number = 2;

const isAdmin: boolean = true;

// OBJETO

const user: {nome: string, idade: number} = {
    nome: "Thiago",
    idade: 25,
};

// TIPO ANY 

let a: any = 5;
a = "jessica"
a = true

// UNION TYPE

let id: string | number = "10"
id = 10

// TYPE ALIAS
type Anderson = number | string

const Usuario: Anderson = 10

// FUNÇÃO

function soma(a: number,b: number) {
    return a +b;
}
console.log(soma(12,12));

