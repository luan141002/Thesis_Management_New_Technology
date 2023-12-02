const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The backbone of the thesis management system
const ThesisSchema = new Schema({
    title: { type: String, required: true },                                                    // Title of the thesis
    description: { type: String }, 
    major: {
        type: Schema.Types.ObjectId,
        ref: 'Major',
        required: true
    },   // Major of the thesis                                              // User-given description of the thesis
    authors: { 
        type: [Schema.Types.ObjectId], 
        ref: 'Student', 
        required: true 
    },  // Authors of the thesis
    advisers: { 
        type: Schema.Types.ObjectId, 
        ref: 'Faculty', 
        required: true,
        default: [] 
    },   // Advisers or supervisors of the thesis
    panelists: { 
        type: [Schema.Types.ObjectId], 
        ref: 'Faculty', 
        required: true, 
        default: [] 
    },  // Panelists assigned to the thesis
    remarks: { type: String },                                                        // Remarks for the thesis in general (could be replaced)
    // Status of the thesis
    status: {
        type: String,
        enum: [
            'new',
            'for_checking',
            'checked',
            'endorse',
            'redefense',
            'pass',
            'fail',
            'final'
        ],
        default: 'new'
    },
    faculty_approval: [
        {
            faculty: { type: Schema.Types.ObjectId, ref: 'Faculty', required: true },
            status: {
                type: String,
                enum: [
                    'approved',
                    'denied'
                ],
                default: 'approved'
            }
        }
    ],
    approved: { type: Boolean, required: true, default: true }
}, 
{
    timestamps: true
});

const Thesis = mongoose.model('Thesis', ThesisSchema);
module.exports = Thesis;
