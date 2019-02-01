const users = {
  "one@user.com": {
    "name": "USER ONE",
    "age": 20,
    "password": "passone",
    "city":"delhi"
  },
  "two@user.com": {
    "name": "USER TWO",
    "age": 30,
    "password": "passtwo",
     "city":"mumbai"
  },

}

module.exports = {
  getUser: async (email) => {
    return users[email]
  },
  createUser: async (email, password, name, age,city) => {
    if (users[email]) {
      return false
    }
    users[email] = {
      password,
      name,
      age,
      city
    }
    return users[email]
  }
}