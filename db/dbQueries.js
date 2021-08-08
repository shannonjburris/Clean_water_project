const sequelize = require('./config/connection')

findAllCounties = () => {
    return this.connection.query(
        "SELECT algae.county;"
    )
}

findMicrocystin = () => {
    return this.connection.query(
        "SELECT algae.microcystin;"
    )
}

