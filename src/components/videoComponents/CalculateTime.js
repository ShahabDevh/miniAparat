const CalculateTime = ({ time }) => {
  const hour =
    time >= 3600
      ? Math.floor(time / 3600) < 10
        ? "0" + Math.floor(time / 3600) + ":"
        : Math.floor(time / 3600) + ":"
      : "";

  const minute =
    time >= 60
      ? Math.floor((time % 3600) / 60) < 10
        ? "0" + Math.floor((time % 3600) / 60)
        : Math.floor((time % 3600) / 60)
      : Math.floor((time % 3600) / 60);

  const second = time % 60 < 10 ? "0" + (time % 60) : time % 60;

  return `${hour}${minute}:${second}`;
};

export default CalculateTime;
