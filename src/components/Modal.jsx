const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">확인</h2>
        <p className="mb-6 text-sm text-gray-600">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            아니오
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-700 px-4 py-2 text-sm text-white hover:bg-red-800"
          >
            네
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
