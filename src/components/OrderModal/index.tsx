import closeIcon from '../../assets/images/close-icon.svg';

import { Overlay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
  visible: boolean;
  handleOpenModal: (value: boolean) => void;
}

export function OrderModal({ visible, handleOpenModal }: OrderModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button onClick={() => handleOpenModal(false)}>
            <img src={closeIcon} alt="Icone para fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>🕝</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
