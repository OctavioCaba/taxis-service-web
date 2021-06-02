export const TaxiItemList = ({ handleItemClick, hour, availability, state, className }) => {
  return (
      <li id={hour} className={className} onClick={handleItemClick}>
        <p>{hour}</p>
        <p>{availability}</p>
        <p>{state}</p>
      </li>
  );
}
