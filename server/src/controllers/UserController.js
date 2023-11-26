const bcrypt = require('bcrypt')
const {User, Student, Faculty, Administrator} = require('../models/User');

const UserController = {
    
    getAll: (req, res) => {
        User.find({})
        .then ((users)=> res.status(200).json(users))
        .catch(() => res.status(404).json('Không tìm thấy danh sách người dùng.'));
    },

    getAllFaculty: (req, res) => {
        User.find({type: 'faculty'})
        .then ((users)=> res.status(200).json(users))
        .catch(() => res.status(404).json('Không tìm thấy danh sách người dùng.'));
    },

    getAllStudent: (req, res) => {
        User.find({type: 'student'})
        .then ((users)=> res.status(200).json(users))
        .catch(() => res.status(404).json('Không tìm thấy danh sách người dùng.'));
    },

    getFacultyById: (req, res) => {
        User.find({type: 'faculty'})
        .then ((users)=> res.status(200).json(users))
        .catch(() => res.status(404).json('Không tìm thấy danh sách người dùng.'));
    },

    getById: (req, res) => {
        User.findOne({_id: req.params.id})
        .then((user) => {
           res.status(200).json(user);
        })
        .catch(()=>{
            res.status(404).json('Không tìm thấy người dùng.');
        })
    },

    create: async (req, res) =>  {
        try {
            let isAdmin = false;
            const {email, type, password} = req.body;
            const existentUser = await User.findOne({ email });
            if (!existentUser) {
                const hashPassword = await bcrypt.hash(password, 10);

                if (type.toLowerCase() === 'administrator' || type.toLowerCase() === 'admin') {
                    isAdmin = true;
                    const admin = await Administrator.create({
                        ...req.body,
                        type: type.toLowerCase(),
                        password: hashPassword,
                        isAdmin
                    })
                    return res.status(201).json(admin)
                }
                else if (type.toLowerCase() === 'faculty') {
                    const isHeadDep = req.body.headDepartment;
                    if (isHeadDep === "true") {
                        const facultyHead = await Faculty.create({
                            ...req.body,
                            type: type.toLowerCase(),
                            password: hashPassword,
                            isHeadDep: true
                        })
                        return res.status(201).json(facultyHead)
                    }
                    const faculty = await Faculty.create({
                        ...req.body,
                        type: type.toLowerCase(),
                        password: hashPassword,
                    })
                    return res.status(201).json(faculty)
                }
                else if (type.toLowerCase() === 'student') {
                    const student = await Student.create({
                        ...req.body,
                        type: type.toLowerCase(),
                        password: hashPassword,
                    })
                    return res.status(201).json(student)
                }
                else {
                    return res.status(400).json(`Có lỗi trong quá trình tạo user :  ${err}`)
                }    
            }
            else {
                return res.status(400).json({
                    message:'Email đã tồn tại!',
                })
            }
        } catch (err) {
            return res.status(400).json(`Có lỗi trong quá trình tạo user :  ${err}`)
        }
    },

    update: async (req, res) => {
        try {
            const user = await User.findOne({_id: req.params.id});
            if (user) {
                const hashPassword = await bcrypt.hash(req.body.password, 10)
                const userUpdated = {
                    ...req.body,
                    password: hashPassword,
                }
                await User.updateOne({_id: user._id}, userUpdated)
                return res.status(200).json("Cập nhật user thành công")
            }
            else {
                return res.status(404).json('Không tìm thấy user!')
            }
        } catch (err) {
            return res.status(400).json(`Có lỗi trong quá trình cập nhật user :  ${err}`)
        }
    },

    lock: (req, res) => {
        User.findOne({_id: req.params.id})
        .then((user)=> {
            user.isActived = false;
            User.updateOne({_id: user._id}, user)
            .then(()=>{
                res.status(204).json('Xóa người dùng thành công.');
            })
            .catch((err)=> {
                res.status(500).json('Có lỗi khi xóa người dùng.');
            });
        })
        .catch(()=> {
            res.status(404).json('Không tìm thấy người dùng.');
        })
    },

    delete: async (req, res) => {
        try {
            const result = await User.deleteOne({_id: req.params.id});
            if (result.deletedCount===0) {
                res.status(404).json('Không tìm thấy người dùng.');
            }
            else {
                res.status(204).json('Xóa vĩnh viễn người dùng thành công.');
            }
        } catch (error) {
            res.status(500).json('Có lỗi khi xóa người dùng');
        }
    }
}

module.exports = UserController;