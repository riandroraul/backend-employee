const { conn } = require("../database");
const queryPromise = require("../helper/query");

const employees = async (req, res) => {
  try {
    const result = await queryPromise("SELECT * FROM users");
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    if (!req.params.id) {
      const err = new Error("id not found", res.status(404));
      err.status = 404;
      throw err;
    }
    const result = await queryPromise(
      `SELECT * FROM users WHERE ID = ${req.params.id}`
    );
    res
      .status(200)
      .json({ status: 200, message: "success", result: result[0] });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, message: error.message });
  }
};

class NoUrut {
  static count = 0;
}

const addEmployee = async (req, res) => {
  try {
    let ttl = req.body.Birthdate;
    let gen = ttl.split("-")[0] + ttl.split("-")[1];
    console.log(gen);
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let id = gen.slice(2) + month.toString() + year.toString().split("20")[1];
    let numberId = parseInt(id + NoUrut.count);
    NoUrut.count++;
    const maxId = await queryPromise(
      `SELECT ID FROM users WHERE ID = (SELECT MAX(ID) FROM users)`
    );
    console.log(maxId);
    const result = await queryPromise(
      `INSERT INTO users (ID, Name, Email, Mobile, Birthdate, Address) VALUES ( '${numberId.toString()}', '${
        req.body.Name
      }', '${req.body.Email}', '${req.body.Mobile}', '${
        req.body.Birthdate
      }', '${req.body.Address}')`
    );
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, message: error.message });
  }
};

const editEmployee = async (req, res) => {
  try {
    const result = await queryPromise(
      `UPDATE users SET Name = '${req.body.Name}', Email = '${req.body.Email}', Mobile = '${req.body.Mobile}', Birthdate = '${req.body.Birthdate}', Address = '${req.body.Address}' WHERE ID = '${req.params.id}'`
    );
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const result = await queryPromise(
      `DELETE FROM users WHERE ID = '${req.params.id}'`
    );
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, message: error.message });
  }
};

const searchEmployee = async (req, res) => {
  try {
    // search by id, name, email
    const result = await queryPromise(
      `SELECT * FROM users WHERE ID LIKE '%${req.query.id}%' OR Name LIKE '%${req.query.name}%' OR Email LIKE '%${req.query.email}%'`
    );
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, message: error.message });
  }
};

module.exports = {
  employees,
  getEmployeeById,
  addEmployee,
  editEmployee,
  deleteEmployee,
  searchEmployee,
};
