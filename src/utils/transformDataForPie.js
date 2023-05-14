export default function transformDataForPie(details) {
  const data = {};

  for (let i = 0; i <= details.length; i++) {
    if (details[i] in data) {
      data[details[i]] += 1;
    } else {
      data[details[i]] = 1;
    }
  }

  for (let key in data) {
    data[key] = ((data[key] / details.length) * 100).toFixed(2);
  }

  return [Object.keys(data), Object.values(data)];
}
