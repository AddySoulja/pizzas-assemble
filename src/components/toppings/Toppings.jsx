import getPosition from "../../utils/getPosition";
import "./styles.css";

const Toppings = ({ topping }) => {
  return Array(6)
    .fill()
    .map(() => {
      const { top, left } = getPosition();
      return (
        <div
          key={`${top}+${left}`}
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
