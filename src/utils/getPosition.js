const minTop = 20,
  maxTop = 100;
const minLeft = 20,
  maxLeft = 180;

const getPosition = () => {
  const top = parseInt(Math.random() * (maxTop - minTop) + minTop);
  const left = parseInt(Math.random() * (maxLeft - minLeft) + minLeft);
  return { top, left };
};

export default getPosition;
