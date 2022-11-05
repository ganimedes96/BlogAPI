module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      "Category",
      {
        id: { allowNull: false, type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: DataTypes.STRING,
      },
      {
        tableName: "categories",
        timestamps: false,
        underscored: true,
      }
    );
    return Category;
  };
  