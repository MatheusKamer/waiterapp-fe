import { useState } from 'react';
import { Order } from '../../@types/Order';
import { Board, OrdersContainer } from './styles';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
}: OrdersBoardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder(selectedOrder: Order) {
    setIsLoading(true);

    await api.put(`/orders/${selectedOrder._id}`, {
      status: 'CANCELED',
    });

    toast.success('Pedido cancelado com sucesso!');
    onCancelOrder(selectedOrder._id);
    setIsLoading(false);
    handleCloseModal();
  }

  return (
    <Board>
      <OrderModal
        visible={isOpen}
        onClose={handleCloseModal}
        selectedOrder={selectedOrder}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
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
