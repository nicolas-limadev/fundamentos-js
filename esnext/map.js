const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

tecnologias.get('react').framework

const chavesVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)

})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
console.log(chavesVariadas)