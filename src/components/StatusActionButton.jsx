function StatusActionButton({
  labelOn,
  labelOff,
  isActive,
  onToggle,
  onClick,
  danger,
  opensModal,
  modalKey,
  setActiveModal,
}) {
  const handleClick = () => {
    if (opensModal && setActiveModal) {
      setActiveModal(modalKey);
    }

    if (onToggle) {
      onToggle();
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        status-button
        ${isActive ? "active" : ""}
        ${danger ? "danger" : ""}
      `}
    >
      {isActive && labelOn ? labelOn : labelOff}
    </button>
  );
}

export default StatusActionButton;

