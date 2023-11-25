const authRouter = require('./auth')
const userRouter = require('./user')
const thesisRouter = require('./thesis');
const majorRouter = require('./major');
function route (app) {
    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);
    app.use('/api/thesis', thesisRouter);
    app.use('/api/major', majorRouter);

    app.use('/*',(req, res)=>{
       res.status(404).json('Endpoint not found !');
    });
}

module.exports = route;