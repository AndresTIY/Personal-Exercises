var lbw;

function maleLBW(weight, waist) {
  lbw = Math.ceil(1.082 * weight - 4.15 * waist + 94.24);
  return lbw;
}

function femaleLBW(weight, waist, hip, forearm, wrist) {
  lbw = Math.ceil(
    0.732 * weight -
      0.157 * waist -
      0.249 * hip +
      0.434 * forearm +
      wrist / 3.14 +
      8.987
  );
  return lbw;
}

function percentageConv(weight, lbw) {
  var result = (weight - lbw) / weight;
  return Number((result * 100).toFixed(2));
}
