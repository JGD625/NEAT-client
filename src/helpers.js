export const findLiquor = (liquors=[], liquorId) =>
  liquors.find(liquor => liquor.id === liquorId)