const FacadePedidosOnline = require("./pedidos_online_facade");

FacadePedidosOnline.fazerPedido("Camiseta", 2, "Rua A, 123");
const status = FacadePedidosOnline.verificarStatusPedido("12345");
console.log("Status do pedido:", status);
const respostaCancelamento = FacadePedidosOnline.cancelarPedido("54321");
console.log("Resposta do cancelamento:", respostaCancelamento);