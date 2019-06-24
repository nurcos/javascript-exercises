const ftoc = function(tempF) {

  return Math.round(( tempF - 32) * (5 / 9) * 10)  / 10;

}

const ctof = function(tempC) {

  return Math.round(( tempC * (9 / 5) + 32) * 10)  / 10 ;

}

module.exports = {
  ftoc,
  ctof
}
