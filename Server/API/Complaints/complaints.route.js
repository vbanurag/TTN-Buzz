/**
 * Created by anurag on 17/5/17.
 */
const checkLoginMiddleware = require('./../../MIddlewares/logged.check');
const complaintController = require('./complaints.controller');

module.exports =(app) => {
    app.post('/api/complaint',
        checkLoginMiddleware.isLoggedIn,
        complaintController.postComplaint
    );
    app.get('/api/complaint',
        checkLoginMiddleware.isLoggedIn,
        complaintController.getComplaints
    );
    app.put('/api/complaint',
        checkLoginMiddleware.isLoggedIn,
        complaintController.updateStatus
    );
};