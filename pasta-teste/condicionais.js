// Algoritmo que calcula o IMC dado o peso e a altura



peso = 81.00
altura = 1.79

imc =( peso/(altura*altura)).toFixed(2)//Limita a duas casas decimais

msm1 = ""


if (imc < 18.5){

msm1 = "Magreza"
}
else

if (imc >=18.5 && imc <= 24.99){

msm1 = "Normal"
}
else

if (imc >=25.00 && imc <= 29.99){

msm1 = "Sobrepeso"

}
else

if (imc >=30.00 && imc <= 39.99){

msm1 = "Obesidade"

}
else

if (imc >=40.00){

msm1 = "Obesidade grave"
}

switch (msm1) {

case "Magreza":
    console.log ("Seu IMC é: ", imc)
		console.log ("Você está com peso baixo!")
	break;

case "Normal":
    console.log ("Seu IMC é: ", imc)
		console.log ("Você está com peso normal!")
	break;


case "Sobrepeso":
    console.log ("Seu IMC é: ", imc)
		console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
	break;

case "Obesidade":
    console.log ("Seu IMC é: ", imc)
		console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
	break;


case "Obesidade grave":
    console.log ("Seu IMC é: ", imc)
		console.log ("É importante procurar um médico para avaliar sua saúde")
	break;
}

