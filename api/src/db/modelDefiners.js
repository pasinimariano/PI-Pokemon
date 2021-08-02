const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '../models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '../models', file)))
    })

const sequelize_instance = (DB_CONN) => {
    return modelDefiners.forEach(model => model(DB_CONN))
};

module.exports = sequelize_instance;