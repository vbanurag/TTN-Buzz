/**
 * Created by anurag on 17/5/17.
 */
const Mongoose = require('mongoose');

const complaintSchema = new Mongoose.Schema({
    title:{
        type:String
    },
    description: {
        type: String
    },
    category: {
        type: String,
        enum: ['Hardware', 'Software','Infrastructure','Other']
    },
    complaintBy:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assignTo: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Resolved','Pending']
    }
},{ versionKey: false, timestamps: true});

complaintSchema.set({autoIndex: false});
complaintSchema.index({category: 1, sparse: true});

module.exports = Mongoose.model('Complaint', complaintSchema);