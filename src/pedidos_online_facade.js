const PedidosOnline = require("./pedidos_online");

// O Objetivo de uma facade neste caso é facilitar e simplificar o uso dos métodos da classe pedidos_online
class FacadePedidosOnline {
     static fazerPedido(produto, quantidade, endereco) {
        PedidosOnline.fazerPedido(produto, quantidade, endereco);
    }

     static verificarStatusPedido(numeroPedido) {
        return PedidosOnline.verificarStatusPedido(numeroPedido);
    }

     static cancelarPedido(numeroPedido) {
        return PedidosOnline.cancelarPedido(numeroPedido);
    }
}
module.exports = FacadePedidosOnline