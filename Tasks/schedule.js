'use strict';

const schedule = async (func, n, interval) => {
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
