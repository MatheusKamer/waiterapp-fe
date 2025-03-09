import { Order } from '../../@types/Order';
import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';

import { Overlay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
  visible: boolean;
  selectedOrder: Order | null;
  handleCloseModal: (value: boolean) => void;
}

export function OrderModal({
  visible,
  selectedOrder,
  handleCloseModal,
}: OrderModalProps) {
  if (!visible || !selectedOrder) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {selectedOrder.table}</strong>
          <button onClick={() => handleCloseModal(false)}>
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
            <strong>R$ 120,00</strong>
          </div>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
