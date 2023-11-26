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
            let isAdmin = false;                                    // 1
            const {email, type, password} = req.body;               // 2
            const existentUser = await User.findOne({ email });     // 3

            if (!existentUser) {                                        // 4
                const hashPassword = await bcrypt.hash(password, 10);   // 5
                if (type === 'administrator' || type === 'admin') {     // 6
                    isAdmin = true;                                     // 7
                    const admin = await Administrator.create({          // 8
                        ...req.body,
                        type: type,
                        password: hashPassword,
                        isAdmin
                    })
                    return res.status(201).json(admin)                  // 9
                }
                else if (type === 'faculty') {                          // 10
                    const isHeadDep = req.body.headDepartment;          // 11
                    if (isHeadDep === "true") {                         // 12
                        const facultyHead = await Faculty.create({      // 13
                            ...req.body,
                            type: type,
                            password: hashPassword,
                            isHeadDep: true
                        })
                        return res.status(201).json(facultyHead)        // 14
                    }
                    const faculty = await Faculty.create({              // 15
                        ...req.body,
                        type: type,
                        password: hashPassword,
                    })
                    return res.status(201).json(faculty)                // 16
                }
                else if (type === 'student') {                          // 17
                    const student = await Student.create({              // 18
                        ...req.body,
                        type: type,
                        password: hashPassword,
                    })
                    return res.status(201).json(student)                // 19
                }
                else {
                    return res.status(400).json(`Có lỗi trong quá trình tạo user`)  // 20
                }    
            }
            else {
                return res.status(400).json('Email đã tồn tại!')        // 21
            }
        } catch (err) {                                                 // 22              
            return res.status(400).json(`Có lỗi trong quá trình tạo user :  ${err}`)    // 23
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

    lock: async (req, res) => {
        try {
            const user = await User.findOne({_id: req.params.id});
            if (user) {
                user.isActived = false;
                const result = await User.updateOne({_id: user._id}, user);
                if (result) 
                    res.status(200).json('KHóa người dùng thành công.');
                else 
                    res.status(500).json('Có lỗi khi khóa người dùng.');
            }
            else 
                res.status(404).json('Không tìm thấy người dùng.');
        } catch (error) {
            return res.status(500).json(`Có lỗi trong quá trình khóa user :  ${err}`)
        }
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