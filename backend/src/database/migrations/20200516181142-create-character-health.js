module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('characters', 'health', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('characters', 'health')
  },
}
