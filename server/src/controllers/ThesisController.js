const Thesis = require('../models/Thesis');

const ThesisController = {
    
    getAll: (req, res) => {
        Thesis.find({})
        .then ((thesis)=> res.status(200).json(thesis))
        .catch(() => res.status(404).json('Không tìm thấy danh sách luận văn.'));
    },

    getById: (req, res) => {
        Thesis.findOne({_id: req.params.id})
        .then((thesis) => {
           res.status(200).json(thesis);
        })
        .catch(()=>{
            res.status(404).json('Không tìm thấy luận văn.');
        })
    },

    create: async (req, res) =>  {
        try {         
            const thesis = await Thesis.create({
                ...req.body
            })
            res.status(201).json(thesis);
        } catch (err) {
            return res.status(400).json(`Có lỗi trong quá trình tạo thesis :  ${err}`)
        }
    },

    update: async (req, res) => {
        try {
            const thesis = await Thesis.findOne({_id: req.params.id});
            if (thesis) {
                const thesisUpdated = {
                    ...req.body
                }
                await Thesis.updateOne({_id: thesis._id}, thesisUpdated)
                return res.status(200).json("Cập nhật thesis thành công")
            }
            else {
                return res.status(404).json('Không tìm thấy thesis!')
            }
        } catch (err) {
            return res.status(400).json(`Có lỗi trong quá trình cập nhật thesis :  ${err}`)
        }
    },

    delete: async (req, res) => {
        try {
            const result = await Thesis.deleteOne({_id: req.params.id});
            if (result.deletedCount===0) {
                res.status(404).json('Không tìm thấy luận văn.');
            }
            else {
                res.status(204).json('Xóa vĩnh viễn luận văn thành công.');
            }
        } catch (error) {
            res.status(500).json('Có lỗi khi xóa luận văn');
        }
    }, 

    register: async (req, res) => {
        
    }
}

module.exports = ThesisController;