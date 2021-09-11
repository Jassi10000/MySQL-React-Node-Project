module.exports = (sequelize , DataTypes) => {
    // creating a table in the database
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postOwner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Posts;
}