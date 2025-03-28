const graficoVendasMensais = document.getElementById('graficoDeVendas')

function gerarNumeros(quantidade, min, max)
{
    var numeros = []
    var range = [10,50,100,500,1000,5000,10000,50000,100000,500000,1000000,5000000,10000000,50000000,100000000]
    
    if(min === '' || min == null) min = -100000000
    if(max === '' || max == null) max = 100000000
    if(min > max) [min,max] = [max,min]

    for(let i=0;i<quantidade;i++)
    {   
        let tentativas = 0

        do{
            var randPosition = Math.floor(Date.now() * Math.random()) % 15
            var numero = ((Date.now() * (Math.random() - 0.5)) % range[randPosition])

            tentativas++
            if(tentativas > 10000) 
                break
        }while((numero < min) || (numero > max))
            
        numeros[i] = numero
    }

    return numeros
}

const myChart = new Chart(graficoVendasMensais, {
    type: "bar",
    data: {
        labels: ["Jan", "Fev", "Mar"],
        datasets: [{
            label: "Vendas",
            data: [30, 50, 70],
            backgroundColor: "blue"
        }]
    }
});