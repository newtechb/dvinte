import { Sequelize, Model } from 'sequelize'

class Armor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        type: Sequelize.INTEGER,
        bonus: Sequelize.INTEGER,
        dexterity: Sequelize.INTEGER,
        penalty: Sequelize.INTEGER,
        magic: Sequelize.STRING,
        displacement: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        special: Sequelize.STRING,
        price: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    return this
  }
}

export default Armor
