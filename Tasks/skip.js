const Skip = (T, ...Remove) => {
  return T.filter(item => !Remove.includes(item))
};

module.exports = Skip;
