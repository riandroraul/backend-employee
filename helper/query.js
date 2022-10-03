const { pool } = require("../database");

const queryPromise = (query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve(results);
    });
  });
};

module.exports = queryPromise;
