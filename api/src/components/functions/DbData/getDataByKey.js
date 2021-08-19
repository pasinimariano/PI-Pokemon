const RecordsByKey = async (Model, Include, key, value) => {
    try {
        const records = await Model.findAll({
            where: {
                [key]: value
            },
            include: {
                model: Include,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });

        return records
    } catch (error) {
        return { Error: 404 }
    }
};

module.exports = RecordsByKey;