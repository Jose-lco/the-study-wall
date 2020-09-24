module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      date: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    return Post;
  };
  