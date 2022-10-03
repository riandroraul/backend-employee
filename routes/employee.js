const router = require("express").Router();

const {
  employees,
  getEmployeeById,
  addEmployee,
  editEmployee,
  deleteEmployee,
  searchEmployee,
} = require("../controller/employee");

router.get("/", employees);
router.get("/id/:id", getEmployeeById);
router.get("/search", searchEmployee);
router.post("/add", addEmployee);
router.put("/edit/:id", editEmployee);
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
