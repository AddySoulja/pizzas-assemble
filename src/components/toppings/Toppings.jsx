import getPosition from "../../utils/getPosition";
import "./styles.css";

const Toppings = ({ count, topping }) => {
  return Array(count)
    .fill()
    .map(() => {
      const { top, left } = getPosition();
      return (
        <div
          key={`${top}${left}`}
          className="topping"
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
