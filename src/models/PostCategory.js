module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      "PostCategory",
      {
        postId: {
          type: DataTypes.INTEGER,
        },
        categoryId: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: "posts_categories",
        timestamps: false,
        underscored: true,
      }
    );
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: "blog_posts",
        through: PostCategory,
        foreignKey: "categoryId",
        otherKey: "postId",
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: "categories",
        through: PostCategory,
        foreignKey: "postId",
        otherKey: "categoryId",
      });
    };
    return PostCategory;
  };
  