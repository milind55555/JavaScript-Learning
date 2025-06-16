function User(email,password){
    this._email=email
    this._password=password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value.toUpperCase();
        }
    }); 
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value.toUpperCase();
        }
    }); 
}

const user = new User("Mi","ass");
console.log(user.email); // Output: MI
