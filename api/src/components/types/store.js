const controller = require('./controller');

const {
    getTypesDB,
    createDB
} = controller;

const responseTypes = async () => {
    const recordsDB = await getTypesDB();

    if (recordsDB.length === 0) {
        const createRecords = await createDB();
        return createRecords
    } else {
        const response = await recordsDB.map(obj => obj.dataValues.name)
        return response
    }
};

module.exports = {
    responseTypes
};