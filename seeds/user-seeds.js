const { User } = require('../models');

const userData = [{
    username: 'Justin',
    password: 'password1'
},
{
    username: 'Lydia',
    password: 'password2'
},
{
    username: 'Matt',
    password: 'password3'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;