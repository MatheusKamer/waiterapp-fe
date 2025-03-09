import { useState } from 'react';
import { Order } from '../../@types/Order';
import { Board, OrdersContainer } from './styles';
import { OrderModal } from '../OrderModal';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isOpen}
        handleCloseModal={handleCloseModal}
        selectedOrder={selectedOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.map((order) => (
        <OrdersContainer key={order._id}>
          <button type="button" onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table}</strong>
            <span>
              {order.products.length}{' '}
              {order.products.length === 1 ? 'item' : 'itens'}
            </span>
          </button>
        </OrdersContainer>
      ))}
    </Board>
  );
}
