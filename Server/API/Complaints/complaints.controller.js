/**
 * Created by anurag on 17/5/17.
 */
const complaintService = require('./complaints.service.js');
exports.postComplaint = (req,res,next) => {
    console.log('in complaint..........',req.body);
    const complaintData = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        complaintBy:req.user._id,
        status: 'Pending'
    };
    complaintService.postComplaint(complaintData,res);
};

exports.getComplaints = (req,res,next) => {
    if(req.user.role == 'User'){
        complaintService.getComplaints(req.user,res);
    }else if(req.user.role == 'Admin'){
        complaintService.getAllComplaints(res);
    }
};
exports.updateStatus = (req,res,next) => {
    console.log('in controller-----------',req.body);
    complaintService.updateStatus(req.body,req.user.email,res);
};