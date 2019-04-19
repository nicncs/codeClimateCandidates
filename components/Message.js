import { withStateHandlers, withState, compose } from "recompose";

const Message = ({ title, message, onClose, closed, setClosed }) => {
  const cls = ["message-box", closed && "closed"];

  return (
    <div className={cls.join(" ")}>
      {title && <div className="title">{title}</div>}
      {message && <div className="message">{message}</div>}
      <div
        className="close-btn"
        onClick={e => {
          setClosed(true);
          onClose && onClose();
        }}>
        ✕
      </div>
    </div>
  );
};

export default compose(
  withStateHandlers(
    () => ({
      closed: false,
    }),
    {
      setClosed: () => closed => ({
        closed,
      }),
    },
  ),
)(Message);
