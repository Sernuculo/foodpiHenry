const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 100,
        },
      },
      /* hace Referencia al paso a paso de la comida */
      stepbyStep: {
        /* type: DataTypes.STRING, */
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createIndb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
