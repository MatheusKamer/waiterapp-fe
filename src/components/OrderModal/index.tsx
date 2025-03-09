import { Order } from '../../@types/Order';
import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';

import { Overlay, ModalBody, OrderDetails, Actions } from './styles';

interface OrderModalProps {
  visible: boolean;
  selectedOrder: Order | null;
  onClose: () => void;
}

export function OrderModal({
  visible,
  selectedOrder,
  onClose,
}: OrderModalProps) {
  if (!visible || !selectedOrder) {
    return null;
  }

  const total = selectedOrder.products.reduce(
    (total, { product, quantity }) => {
      return total + product.price * quantity;
    },
    0
  );

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {selectedOrder.table}</strong>
          <button onClick={onClose}>
            <img src={closeIcon} alt="Icone para fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {selectedOrder.status === 'WAITING'
                ? '🕝'
                : selectedOrder.status === 'IN_PRODUCTION'
                ? '🧑‍🍳'
                : '✅'}
            </span>
            <strong>
              {selectedOrder.status === 'WAITING'
                ? 'Fila de espera'
                : selectedOrder.status === 'IN_PRODUCTION'
                ? 'Em preparação'
                : 'Entregue'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {selectedOrder.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={56}
                  height={48}
                />
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button className="primary" type="button">
            <span>🧑‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>

          <button className="secondary" type="button">
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
