const libs = {};

libs.gaPattern = /^(\d{2})\/(\d{1})\/(\d{3})$/g;
// ranges: main = 0..31, middle = 0..7, sub = 0..255
// source https://support.knx.org/hc/en-us/articles/115003188109-Group-Addresses
const subLength = 256;
const mainLength = 8 * subLength;

libs.ga2id = (ga) => {
  if (!typeof ga === "string" || ga === "0/0/0") return -1;
  const matched = ga.match(gaPattern);
  if (!matched) return -1;
  for (let i = 1; i < 4; i++) matched[i] = parseInt(matched[i]);
  let [_, m, s, g] = matched;
  return m * mainLength + s * subLength + g;
};

libs.id2ga = (id) => {
  if (typeof id !== "number") return -1;
  else if (id === 0) return -1;
  const m = parseInt(id / mainLength);
  id %= mainLength;
  const s = parseInt(id / subLength);
  const g = id % subLength;
  return `${m}/${s}/${g}`;
};

module.exports = libs;
