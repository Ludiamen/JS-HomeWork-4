function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('admin');

console.log(check('12345'));
console.log(check('root'));
console.log(check('admin'));
