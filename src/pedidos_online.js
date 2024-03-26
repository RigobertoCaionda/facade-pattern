class PedidosOnline {
    static fazerPedido(produto, quantidade, endereco) {
        console.log(`Pedido feito online: ${quantidade}x ${produto}`);
        console.log(`Endereço de entrega: ${endereco}`);
    }

    static verificarStatusPedido(numeroPedido) {
        console.log(`Verificando status do pedido online: ${numeroPedido}`);
        return 'Em trânsito';
    }

    static cancelarPedido(numeroPedido) {
        console.log(`Cancelando pedido online: ${numeroPedido}`);
        return 'Pedido cancelado';
    }
}
module.exports = PedidosOnline