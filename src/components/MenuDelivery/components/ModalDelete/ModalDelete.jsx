import ModalBase from "../../../ModalBase/ModalBase";

const ModalDelete = ({ openModal, onClose, renderBody }) => {
  return (
    <ModalBase
      openModal={openModal}
      renderBody={renderBody}
      onClose={onClose}
    />
  );
};

export default ModalDelete;
