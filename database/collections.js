module.exports = (db) => {
    var collections = {};
    collections.Humans = () => {
        return db.collection('Humans');
    };
    collections.Mutants = () => {
        return db.collection('Mutants');
    }
    return collections;
}