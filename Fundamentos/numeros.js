const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) /**Descobrir se o número é um inteiro */
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * 1 + avaliacao2 * 2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Limita as casas decimais
console.log(media.toString(2))// Converte em binário
console.log(typeof media)