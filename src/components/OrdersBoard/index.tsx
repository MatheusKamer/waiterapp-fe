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

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Board>
      <OrderModal visible={isOpen} handleOpenModal={handleOpenModal} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.map((order) => (
        <OrdersContainer key={order._id}>
          <button type="button" onClick={handleOpenModal}>
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
