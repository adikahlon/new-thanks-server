const users = [];
function getUsers() {
    return users;
}

function getRandomId() {
    return Math.random().toString().slice(2, 8);
}

function isUsernameExists(username) {
    const user = getUsers().some(user => {
        return username === user.username;
    });

    function hashPassword(password) {
        return password;
    }

}


function createUser(user = {}) {
    if (!user.username) {
        throw new Error('username is required');
    }
    if (isUsernameExists(user.username)) {
        throw new Error(`User ${user.username} already exists`);
    }
    const newUser = {

        id: getRandomId(),
        username: user.username,
        password: hashPassword(user.password),
        birthDate: user.birthDate,
        created: new Date()
    };

    getUsers().push(newUser);
    return newUser;
}

function getUserByUsernameAndPassword(username, password) {
    return getUsers().find(user => {
        return username === user.username && password === user.password;
    })
}

function getUserById(userId) {
    return getUsers().find(user => user.id === userId);
}

module.exports = {
    createUser,
    getUserByUsernameAndPassword,
    getUserById

}