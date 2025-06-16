const user={
    _email:'hahah',
    _password:'1234',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value.toUpperCase();
    },
}

const tea=Object.create(user);
console.log(tea.email); // Output: HAHHAH
