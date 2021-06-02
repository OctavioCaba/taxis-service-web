export const Notification = ({ type, message }) => {
  if (message === null) return null;

  return (
    <div className={type}>
      <p>{message}</p>
    </div>
  );
}
