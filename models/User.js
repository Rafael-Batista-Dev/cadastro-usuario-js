class User {
  constructor(name, email, admin, birth, country, password, photo, gender) {
    this._id;
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._email = email;
    this._country = country;
    this._admin = admin;
    this._photo = photo;
    this._password = password;
    this._register = new Date();
  }

  get id() {
    return this._id;
  }

  get register() {
    return this._register;
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get email() {
    return this._email;
  }

  get country() {
    return this._country;
  }

  get admin() {
    return this._admin;
  }

  get photo() {
    return this._photo;
  }

  get password() {
    return this._password;
  }

  set photo(value) {
    this._photo = value;
  }

  loadFromJSON(json) {
    for (let name in json) {
      switch (name) {
        case "_register":
          this[name] = new Date(json[name]);
          break;
        default:
          this[name] = json[name];
      }
    }
  }

  static getUsersStorage() {
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
  }

  getNewID() {
    if (!window.id) window.id = 0;
    id++;
    return id;
  }

  save() {
    let users = User.getUsersStorage();
    if (this.id > 0) {
      users.map(u => {
        if (u._id === this.id) {
          u = this;
        }
        return u;
      });
    } else {
      this._id = this.getNewID();
      users.push(this);
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
}
