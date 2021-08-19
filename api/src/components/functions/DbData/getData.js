const AllRecords = async (Model, Include) => {
    const records = await Model.findAll({
        include: {
            model: Include,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return records
};

module.exports = AllRecords;