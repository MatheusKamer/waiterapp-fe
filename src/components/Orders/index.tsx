import { Order } from '../../@types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '1',
    table: '5',
    status: 'WAITING',
    products: [
      {
        _id: '1',
        quantity: 2,
        product: {
          name: 'Pizza Margherita',
          imagePath: '/images/pizza-margherita.jpg',
          price: 12.99,
        },
      },
      {
        _id: '2',
        quantity: 1,
        product: {
          name: 'Coca Cola',
          imagePath: '/images/coca-cola.jpg',
          price: 1.99,
        },
      },
    ],
  },
  {
    _id: '2',
    table: '3',
    status: 'IN_PRODUCTION',
    products: [
      {
        _id: '3',
        quantity: 1,
        product: {
          name: 'Spaghetti Carbonara',
          imagePath: '/images/spaghetti-carbonara.jpg',
          price: 14.99,
        },
      },
    ],
  },
  {
    _id: '3',
    table: '8',
    status: 'IN_PRODUCTION',
    products: [
      {
        _id: '4',
        quantity: 3,
        product: {
          name: 'Tiramisu',
          imagePath: '/images/tiramisu.jpg',
          price: 6.99,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'WAITING')}
        icon="🕝"
        title="Fila de espera"
      />
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
        icon="🧑‍🍳"
        title="Em preparação"
      />
      <OrdersBoard
        orders={orders.filter((order) => order.status === 'DONE')}
        icon="✅"
        title="Entregues"
      />
    </Container>
  );
}
