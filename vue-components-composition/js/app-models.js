// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

// Prototypes/Classes use TitleCase for naming
function LibraryItem(media){
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold'}

    // store the book/movie/etc inside the library item
    this.media = media;

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


function Book(title, pages){
    this.title = title ?? 'Default Title';
    this.pages = pages ?? 0;
}
Book.type = "Book";

class Movie {
    static type = 'Movie';
    title = '';
    runtime = 0;

    constructor(title, runtime) {
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
    }
}
//Movie.type = 'Movie';

let book = new LibraryItem(new Book('Book Title', 123));
let movie = new LibraryItem(new Movie('Movie Title', 99));
// pretend = new Product(new Book(...));
//let something = new LibraryItem({name: 'Tyler', age: 12});
console.log(book, movie);
