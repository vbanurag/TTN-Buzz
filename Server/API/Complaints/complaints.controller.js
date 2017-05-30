/**
 * Created by anurag on 17/5/17.
 */
const complaintService = require('./complaints.service.js');
const complaintValidate = require('./complaint.validate');

exports.postComplaint = (req,res,next) => {
    const complaintData = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        complaintBy:req.user._id,
        status: 'Pending'
    };
    if(complaintValidate.validateComplaint(complaintData)){
        complaintService.postComplaint(complaintData,res);
    }else{
        res.send({'msg': 'Invalid Data'});
    }

};
exports.getComplaints = (req,res,next) => {
    if(req.user.role == 'User'){
        complaintService.getComplaints(req.user,res);
    }else if(req.user.role == 'Admin'){
        complaintService.getAllComplaints(res);
    }
};
exports.updateStatus = (req,res,next) => {
    complaintService.updateStatus(req.body,req.user.email,res);
};