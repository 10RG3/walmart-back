const indexRouter = require('./routes/index.router')
const captchaRouter = require('./routes/captcha.router')

const initializeEndpoints = (app) => {
    app.use('/', indexRouter)
    app.use('/captcha', captchaRouter)
}

module.exports = initializeEndpoints