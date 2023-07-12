const minTop = -10,
  maxTop = 140;
const minLeft = -20,
  maxLeft = 210;

const getPosition = () => {
  const top = parseInt(Math.random() * (maxTop - minTop) + minTop);
  const left = parseInt(Math.random() * (maxLeft - minLeft) + minLeft);
  return { top, left };
};

export default getPosition;
