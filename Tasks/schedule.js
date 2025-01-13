'use strict';

const schedule = async (func, n, interval) => {
  if (n <= 0) return;
  for (let index = 0; index < n; index++) {
    await new Promise(resolve => {
      setTimeout(() => {
        func(index);
        resolve();
      }, interval * index)
    })
  }
};

module.exports = schedule;
