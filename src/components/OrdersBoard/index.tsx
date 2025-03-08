import { Order } from '../../@types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 &&
        orders.map((order) => (
          <OrdersContainer key={order._id}>
            <button type="button">
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
