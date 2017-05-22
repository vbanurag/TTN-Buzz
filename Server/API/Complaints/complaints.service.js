/**
 * Created by anurag on 17/5/17.
 */
const Complaint = require('./complaints.model');

exports.postComplaint = (complaintData,res) => {
    Complaint.create(complaintData,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            console.log('data published ',data);
            res.send(data);
        }
    })
}

exports.getComplaints = (user,res) => {
    Complaint.find({complaintBy: user._id})
        .sort({createdAt: -1})
        .populate('complaintBy')
        .exec((err,complaints) => {
            if(err){
                res.send(err);
            }else{
                res.send(complaints);
            }
        });
}
exports.updateStatus = (complaint, res) => {
    Complaint.update({_id:complaint._id},{$set:{status: complaint.status}},(err,data)=> {
        if(err){
            res.send(err);
        }else{
            getComplaint(complaint._id,res);
        }
    })
}

const getComplaint = (id,res) => {
    Complaint.find({_id: id})
        .populate('complaintBy')
        .exec((err,complaint) => {
            if(err){
                res.send(err);
            }else{
                res.send(complaint);
            }
        });
}