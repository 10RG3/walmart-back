const CaptchaModel = require('../models/captcha.model');

class CaptchaController {

    static async get(req, res, next) {
        try {
            let i = parseInt(Math.random() * 5);
            let data = await CaptchaModel.stapmsByDoor(req.params.door);
            console.log(req.params.door);
            console.log(data[i]);

            let response = {
                data: {
                    id: data[i]._id,
                    lock: data[i].lock
                }
            };

            res.json(response);
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }

    static async validate(req, res, next) {
        try {
            console.log(req.body.data);
            let valid = false;
            let data = await CaptchaModel.get(req.body.data.id);

            if (req.body.data.input === data.key) {
                valid = true;
            }

            let response = {
                data: {
                    captcha: valid
                }
            };

            res.json(response);
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }
}

module.exports = CaptchaController