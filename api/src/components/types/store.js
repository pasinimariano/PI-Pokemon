const controller = require('./controller');

const {
    getTypesDB,
    getANDcreate
} = controller;

const responseTypes = async () => {
    const recordsDB = await getTypesDB();

    if (recordsDB.length === 0) {
        const createRecords = await getANDcreate();

        return createRecords
    } else {
        const response = await recordsDB.map(obj => obj.name)

        return response
    }
};

module.exports = {
    responseTypes
};