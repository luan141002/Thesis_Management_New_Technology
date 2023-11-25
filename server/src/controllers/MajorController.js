const Major = require('../models/Major');

const MajorController = {
    getAll: (req, res) => {
        Major.find({})
        .then ((majors)=> res.status(200).json(majors))
        .catch(() => res.status(404).json('Không tìm thấy danh sách khoa.'));
    },

    getById: (req, res) => {
        Major.findOne({_id: req.params.id})
        .then((major) => {
            res.status(200).json(major);
        })
        .catch(()=>{
            res.status(404).json('Không tìm thấy khoa.');
        })  
    },

    create: (req, res) => {
        try {
            const major = Major.create({
                ...req.body
            });
            res.status(201).json(major);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MajorController