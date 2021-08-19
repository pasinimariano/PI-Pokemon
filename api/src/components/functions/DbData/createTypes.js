const createTypes = (array, Model) => {
    array.forEach(type => {
        Model.create({
            name: type
        })
    });
    
    return 'Success'
};

module.exports = createTypes;