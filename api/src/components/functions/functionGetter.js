const ApiData = require('./ApiData/getData');
const ApiById = require('./ApiData/getDataByID');
const ApiByName = require('./ApiData/getDataByName');
const DbData = require('./DbData/getData');
const DbByKey = require('./DbData/getDataByKey');

module.exports = {
    ApiData,
    ApiById,
    ApiByName,
    DbData,
    DbByKey
}