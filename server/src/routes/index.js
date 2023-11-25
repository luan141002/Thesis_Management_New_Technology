const authRouter = require('./auth')
const userRouter = require('./user')
const thesisRouter = require('./thesis');
const majorRouter = require('./major');
function route (app) {
    app.use('/api/auths', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/theses', thesisRouter);
    app.use('/api/majors', majorRouter);

    app.use('/*',(req, res)=>{
       res.status(404).json('Endpoint not found !');
    });
}

module.exports = route;