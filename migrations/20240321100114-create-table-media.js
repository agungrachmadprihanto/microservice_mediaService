

module.exports = {
  async up (queryInterface, sequelize) {
    return queryInterface.createTable('media',{
      id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      image:{
        type: sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, sequelize) {
      return queryInterface.dropTable('media');
  }
};
