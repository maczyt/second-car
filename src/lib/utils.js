export const weekFormat = (w) => {
  var week1 = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      week2 = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  return week2[week1.indexOf(w)];
};

export const hourDis = (d1, d2) => {
  return (d1 - d2) / (1000 * 60 * 60 * 24)
};
