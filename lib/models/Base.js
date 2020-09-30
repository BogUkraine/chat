const { Model } = require('sequelize');

class Base extends Model {
    contructor() {

    }

    somefunc() {
        console.log('kek')
    }
}

module.exports = Base;