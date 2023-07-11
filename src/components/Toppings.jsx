import getPosition from "../utils/getPosition";

const Toppings = ({ count, topping }) => {
  return Array(count)
    .fill()
    .map(() => {
      const { top, left } = getPosition();
      return (
        <div
          key={`${top}${left}`}
          className="item"
          style={{
            backgroundImage: `url(${topping})`,
            top: `${top}px`,
            left: `${left}px`,
          }}
        />
      );
    });
};
export default Toppings;
