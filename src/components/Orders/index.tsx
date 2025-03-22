import { useEffect, useState } from 'react';
import { Order } from '../../@types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, []);

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  return (
    <Container>
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'WAITING')}
        icon="🕝"
        title="Fila de espera"
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
        icon="🧑‍🍳"
        title="Em preparação"
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'DONE')}
        icon="✅"
        title="Entregues"
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
