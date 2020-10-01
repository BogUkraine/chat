const Sequelize = require('sequelize');

class Base extends Sequelize.Model {
    static init(sequelize) {
        console.log('\n\n', this.schema, this.options, '\n\n')
        super.init(this.schema, { ...this.options, sequelize });
    }
}

module.exports = Base;