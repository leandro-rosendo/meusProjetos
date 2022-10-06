//Algoritmo que calcula a media aritmetica entre duas notas
//O aluno é selecionado pela posicao do vetor



alunos = ["Enzo", "Valentina", "Joana", "Marcio"]

notas = [ [5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [5.5, 8.5] ]


alunoSelecionado = 2 //posicao do aluno no vetor

situacao = ""

nomeDoAluno = alunos [alunoSelecionado]
notasDoAluno = notas [alunoSelecionado]

nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]

media = ((nota1 + nota2)/2).toFixed(2)// Calcula a media das notas e retorna com duas casas decimais

// Verifica criterios de aprovacao
if (media >= 7.00){
  situacao = "Aprovado!!"
}else
  if (media >= 4.00 && media <= 6.99){
    situacao = "Em recuperação!!"
  }else
    if (media < 3.99){
      situacao = "Reprovado!!"
    }

// Retorna a situacao do aluno apos verificar sua situacao
switch (situacao){
  case "Aprovado!!":
    console.log("Aprovado!!")
    console.log("")
    console.log(nomeDoAluno)
    console.log("A primeira nota foi:", nota1)
    console.log("Asegunda nota foi:", nota2)
    console.log(nomeDoAluno, "Teve Média", media)
  break;
  case "Em recuperação!!":
    console.log("Em recuperação!!")
    console.log("")
    console.log(nomeDoAluno)
    console.log("A primeira nota foi:", nota1)
    console.log("Asegunda nota foi:", nota2)
    console.log(nomeDoAluno, "Teve Média", media)
  break;
  case "Reprovado!!":
    console.log("Reprovado!!")
    console.log("")
    console.log(nomeDoAluno)
    console.log("A primeira nota foi:", nota1)
    console.log("Asegunda nota foi:", nota2)
    console.log(nomeDoAluno, "Teve Média", media)
  break;
}

// Imprime resultado 
console.log(alunos.length, "alunos fizeram a prova.")

