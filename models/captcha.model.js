const Mongoose = require('mongoose');
const captchaSchema = require('../schemas/captcha.schema');

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const dbName = process.env.MONGODB_DBNAME;
const port = process.env.MONGODB_PORT;
let url = '';

class CaptchaModel {

    static async stapmsByDoor(door) {
        let captchaModel = undefined;

        try {
            if (process.env.MONGODB_ENVIRONMENT === 'local') {
                url = `mongodb://localhost:${port}/${dbName}`;
            } else {
                url = `mongodb+srv://${user}:${pass}@development-kv9ot.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;
            }

            Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            captchaModel = Mongoose.model("Captcha", captchaSchema);
            let response = await captchaModel.find({ door: `${door}` });

            return response;
        } catch (e) {
            console.error(e);
        } finally {
            await Mongoose.connection.close();
        }
    }

    static async get(id) {
        let captchaModel = undefined;

        try {
            if (process.env.MONGODB_ENVIRONMENT === 'local') {
                url = `mongodb://localhost:${port}/${dbName}`;
            } else {
                url = `mongodb+srv://${user}:${pass}@development-kv9ot.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;
            }

            Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            captchaModel = Mongoose.model("Captcha", captchaSchema);
            let response = await captchaModel.findOne({ _id: `${id}` }, 'key');
            console.log(response);

            return response;
        } catch (e) {
            console.error(e);
        } finally {
            await Mongoose.connection.close();
        }
    }
}

module.exports = CaptchaModel;