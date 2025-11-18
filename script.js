let texto = document.querySelector("#texto");
texto.textContent = "Janice";

let nome = prompt("Qual o seu nome?");
if(nome == null){
    texto.textContent = "Seja bem-vindo(a)!";
}}
else{
    texto.textContent = nome;
}



