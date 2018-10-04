class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    };
    get title() {
        return this._title;
    };
    get isCheckedOut() {
        return this._isCheckedOut;
    };
    set isCheckedOut(newValue) {
        this._isCheckedOut = newValue;
    };
    get ratings() {
        return this._ratings;
    };
    toggleCheckoutStatus() {
        if (this.isCheckedOut === true) {
            this.isCheckedOut = false;
        } else {
            this.isCheckedOut = true;
        }
    };
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let ratingsLength = this.ratings.length;
        return ratingsSum / ratingsLength
    };
    addRating(newRating) {
        this.ratings.push(newRating);
    }
};

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    };
    get author() {
        return this._author;
    };
    get pages() {
        return this._pages;
    };
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    };
    get director() {
        return this._director;
    };
    get runTime() {
        return this._runTime;
    };
};

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);

console.log(historyOfEverything.ratings);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

console.log(speed.isCheckedOut);
speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut);

console.log(speed.ratings);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings);
console.log(speed.getAverageRating());