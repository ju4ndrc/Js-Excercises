let arr = ['cocacola', 'pizza']

function procesarPedido(pedidos) {
  let name = pedidos.shift()
  pedidos.unshift('bebida')
  pedidos.push(name)
  return pedidos
}

console.log(procesarPedido(arr))