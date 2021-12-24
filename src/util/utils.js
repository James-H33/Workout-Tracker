export const makeGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}

export const convertTimeFromDates = (time) => {
  return Math.round((new Date().valueOf() - time) / 1000);
}

export const formatTimeFromSeconds = (t) => {
  if (t >= 60) {
    const m = Math.floor(t / 60);
    let s = t % 60;

    s = s < 10 ? `0${s}` : s;

    return `${m}:${s}`;
  } else {
    if (t < 10) {
      return `0:0${t}`;
    }

    return `0:${t}`;
  }
}
