const {Sequelize, DataTypes} = require('sequelize');
const mysql = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: 8889,
    dialect: 'mysql',
    poll: {min: 0, max: 5}
});
/*const mysql = new Sequelize({
    database: 'api_node',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'
});*/

console.log(process.env.DB_NAME);

const Contact = mysql.define('Contact', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fname: {
        type: DataTypes.STRING
    },
    lname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING(155)
    },
    phone: {
        type: DataTypes.STRING(55)
    }
},{
    indexes:[
        {fields:['user_id']}
    ]
});

Contact.sync();

module.exports = Contact;
