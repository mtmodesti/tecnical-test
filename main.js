// function withdrawMoney(withdrawAmount){
//     let notesAvailable = {
//         2:19,
//         5:38,
//         10:73,
//         20:87,
//         50:38,
//         100:29,
//         200:42
//     }

//     let withdrawNotes = {
//         200:0,
//         100:0,
//         50:0,
//         20:0,
//         10:0,
//         5:0,
//         2:0,
//     }
    
//     const IsThing = withdrawAmount

//     const totalMoneyAvailable = Object.entries(notesAvailable).reduce((acc,el) => acc + (el[0] * el[1]), 0)
//     if (totalMoneyAvailable < withdrawAmount){
//         return console.error('Insufficient cash balance for withdrawal, look for a bank branch.')
//     }
//     //contando notas de 200
//     if (withdrawAmount > 200 && notesAvailable[200] * 200 >= withdrawAmount){
//         withdrawNotes[200] += Math.floor(withdrawAmount/200)
//         notesAvailable[200] -= 1
//         withdrawAmount -= withdrawNotes[200] * 200
//     }
//     //contando notas de 100
//     if (withdrawAmount > 100 && notesAvailable[100] * 100 >= withdrawAmount){
//         withdrawNotes[100] += Math.floor(withdrawAmount/100)
//         notesAvailable[100] -= 1
//         withdrawAmount -= withdrawNotes[100] * 100
//     }
//     //contando notas de 50
//     if (withdrawAmount > 50 && notesAvailable[50] * 50 >= withdrawAmount){
//         withdrawNotes[50] += Math.floor(withdrawAmount/50)
//         notesAvailable[50] -= 1
//         withdrawAmount -= withdrawNotes[50] * 50
//     }
//     //contando notas de 20
//     if (withdrawAmount > 20 && notesAvailable[20] * 20 >= withdrawAmount){
//         withdrawNotes[20] += Math.floor(withdrawAmount/20)
//         notesAvailable[20] -= 1
//         withdrawAmount -= withdrawNotes[20] * 20
//     }
//     //contando notas de 10
//     if (withdrawAmount > 10 && notesAvailable[10] * 10 >= withdrawAmount){
//         withdrawNotes[10] += Math.floor(withdrawAmount/10)
//         notesAvailable[10] -= 1
//         withdrawAmount -= withdrawNotes[10] * 10
//     }
//     //contando notas de 5
//     if (withdrawAmount > 5 && notesAvailable[5] * 5 >= withdrawAmount){
//         withdrawNotes[5] += Math.floor(withdrawAmount/5)
//         notesAvailable[5] -= 1
//         withdrawAmount -= withdrawNotes[5] * 5
//     }
//     //contando notas de 2
//     if (withdrawAmount > 2 && notesAvailable[2] * 2 >= withdrawAmount){
//         withdrawNotes[2] += Math.floor(withdrawAmount/2)
//         notesAvailable[2] -= 1
//         withdrawAmount -= withdrawNotes[2] * 2
//     }
//     //checando se tem troco

//     withdrawAmount == 1 ? 
//     console.log("We have no 1 real note or coin to use as change. Please choose another withdrawal amount") :
//     console.table(
//         {
//         'Notes': withdrawNotes,
//         }
//     )
// }


// withdrawMoney(349)

// /* 

// Teste técnico para a vaga de Fullstack
// 1 – Um caixa eletrônico possui notas na moeda Real(BRL) de 2, 5, 10, 20, 50, 100,
// 200. Cada nota está em certa quantidade no caixa eletrônico, e deve ser decrementada
// pelo número de notas que foram utilizadas no saque. O caixa eletrônico deve
// priorizar o menor número de notas possíveis para realizar o saque.
// *Utilize javascript, java ou portugol para a criação do algoritmo
// *Pode utilizar somente o console como interface para o teste
// *Criei um gist no github com o código e cole o link no arquivo de respostas
// Desafio: Colocar 3 opções de saque, que sejam as 3 com menor uso de notas
// */