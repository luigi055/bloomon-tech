// Compare with available flowers in stock
function enoughFlowers(flowerWithQuantity, boquetSize, stockFlowers) {
  return flowerWithQuantity.every(flower => {
    const quantity = flower.substring(0, flower.length - 1);
    const size = boquetSize;
    const letter = flower.substring(flower.length - 1, flower.length);

    // Formatted version of a single flower with the size
    const stockFlowerFormatter = `${letter}${size}`;

    // if there are the same or more amount of flowers return true
    return (
      stockFlowers.filter(single => single === stockFlowerFormatter).length >=
      quantity
    );
  });
}

module.exports = {
  enoughFlowers
};
