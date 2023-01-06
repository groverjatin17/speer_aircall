export const getDate = (date) => {
  var options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  let formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", options);
};

export const calculateTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  if (minutes) {
    return `— ${minutes} mins ${seconds} secs`;
  } else {
    return `— ${seconds} secs`;
  }
};
