const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get courses() {
        return {
            appetizer: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = menu.getRandomDishFromCourse('appetizers');
        const main = menu.getRandomDishFromCourse('mains');
        const dessert = menu.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Tuna Salad', 4.25);
menu.addDishToCourse('appetizers', 'Vegan Salad', 4.25);

menu.addDishToCourse('mains', 'Steak', 16.25);
menu.addDishToCourse('mains', 'Spaghetti', 14.0);
menu.addDishToCourse('mains', 'Chicken', 12.50);

menu.addDishToCourse('desserts', 'Satcher', 7.25);
menu.addDishToCourse('desserts', 'Brownee', 7.25);
menu.addDishToCourse('desserts', 'Cheese Cake', 7.25);


let meal1 = menu.generateRandomMeal();
let meal2 = menu.generateRandomMeal();
let meal3 = menu.generateRandomMeal();

console.log(meal1);
console.log(meal2);
console.log(meal3);