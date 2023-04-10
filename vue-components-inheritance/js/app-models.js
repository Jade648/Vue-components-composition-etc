// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

// Prototypes/Classes use TitleCase for naming
function LibraryItem(title){
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold'}

    this.title = title ?? 'Default Title';
    //console.log(title, arguments, STATUSES, this.title);

     // set the default status
    this.status = STATUSES.CHECKED_IN;

    // methods
    this.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    this.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }
}


// Book extends LibraryItem
function Book(title, pages){
    LibraryItem.call(this, title);
    //Product.call(this, title);

    // add any additional properties
    this.pages = pages ?? 0;
}
// set the parent/prototype
Book.prototype = Object.create(LibraryItem.prototype);
Book.prototype.constructor = Book;
Book.type = "Book";

class Movie extends LibraryItem {
    static type = 'Movie';
    runtime = 0;

    constructor(title, runtime) {
        super(title); // similar to LibraryItem.call()

        this.runtime = runtime ?? 0;
    }
}
//Movie.type = 'Movie';

let book = new Book('Book Title', 123);
let movie = new Movie('Movie Title', 99);
let me = {name: 'Tyler'};
LibraryItem.call(me, 'title');

console.log(book, movie);

LibraryItem.prototype.cost = 10;