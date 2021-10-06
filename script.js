nome = prompt("Qual é o nome do produto?")
valor = parseInt(prompt("Qual é o valor do produto?"))
desc1 = (valor - (valor * 0.05))
desc2 = (valor - (valor * 0.1))
desc3 = (valor - (valor * 0.15))

alert("O nome digitado foi: " + nome)

if(valor < 100){
    alert("O valor final do produto é R$" + valor)
}
if(valor >= 100 && valor <= 200){
    alert("O valor final do produto é R$" + desc1)
}
if(valor >= 201 && valor <= 250){
    alert("O valor final do produto é R$" + desc2)
}
if(valor >= 251){
    alert("O valor final do produto é R$" + desc3)
}
