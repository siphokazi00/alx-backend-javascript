const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route for homepage
router.get('/', AppController.getHomepage);

// Route for students list
router.get('/students', StudentsController.getAllStudents);

// Route for students by major (CS or SWE)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
