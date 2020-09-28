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
      start: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      end: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      link: {
        type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
      }
    });
    return Post;
  };
  