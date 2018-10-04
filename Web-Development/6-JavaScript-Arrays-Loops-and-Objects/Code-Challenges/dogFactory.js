// Write your code here:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            if (typeof newName === 'string') {
                this._name = newName;
            } else {
                console.log('The name should be a string.');
            }
        },
        get breed() {
            return this._name;
        },
        set breed(newBreed) {
            if (typeof newBreed === 'string') {
                this._breed = newBreed;
            } else {
                console.log('The breed should be a string.');
            }
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            if (typeof newWeight === 'number') {
                this._weight = newWeight;
            } else {
                console.log('The weight should be a number.');
            }
        },
        bark() {
            console.log('ruff! ruff!');
        },
        eatTooManyTreats() {
            this.weight++;
        }
    }
}

const dog = dogFactory('Joe', 'Pug', 27);

console.log(dog.name);
dog.name = 'Fido';
console.log(dog.name);
dog.name = 69;

console.log(dog.weight);
dog.eatTooManyTreats();
console.log(dog.weight);

dog.bark();