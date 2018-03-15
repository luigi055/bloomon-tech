function addStreamStructure(data) {
  const values = data.split("\n");
  const rules = values.filter(rule => rule.length > 2);

  const flowers = values.filter(flower => flower.length === 2);

  console.log(
    `flowers length should be 999 ${flowers.length}`,
    `rules should be 6 ${rules.length}`
  );
}

module.exports = addStreamStructure;
