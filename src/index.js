const { name, version } = require('../package.json')
const allRules = require('./rules')

module.exports = {
    meta: {
        name,
        version,
    },
    rules: allRules
}