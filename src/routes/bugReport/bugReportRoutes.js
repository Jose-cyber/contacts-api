const express = require('express');
const ReportBug = require('../../controllers/bugReport/controllerBugReport')
const bug = new ReportBug
const bugReportRoutes = express.Router();

bugReportRoutes
    .route('/contacts-api/api/v1/bug/report')
    .post(bug.report, () => {
      // #swagger.tags = ['Bug Report']


    })

module.exports = bugReportRoutes;