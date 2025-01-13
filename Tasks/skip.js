// Refactor following solution
// Return an remove without listed values

Skip = (T, ...Remove) => {
  return T,filter(item => !Remove.includes(item))
};

module.exports = Skip;
