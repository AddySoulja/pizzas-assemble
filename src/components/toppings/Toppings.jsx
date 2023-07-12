import getPosition from "../../utils/getPosition";
import "./styles.css";

const Toppings = ({ count, topping }) => {
  return Array(count)
    .fill()
    .map(() => {
      const { top, left } = getPosition();
      return (
        <div
          className="topping"
          style={{
            backgroundImage: `url(${topping.src})`,
            top: `${top}px`,
            left: `${left}px`,
          }}
        />
      );
    });
};
export default Toppings;
