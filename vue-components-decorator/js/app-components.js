const LibraryItemListComponent = app.component('LibraryItemList', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new LibraryItem(new Book('1984',  237)),
                new LibraryItem(new Movie('Ready Player 1', 122)),
                new LibraryItem(new Movie('Avengers: End Game', 189)),
                new Movie('Avengers: End Game', 189),
            ]
        }
    },

    // values/bindings passed to this component
    props: {},

    // functions that you want to use in your view that are triggered manually
    methods: {},



    // the view
    template: `
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            <div class="col" v-for="item in library">
                <library-item-card :item="item" />
            </div>
        </div>`,
});

app.component('LibraryItemCard', {
    props: {
        item: {type: Object}
    },
    methods: {
        itemCardComponent(item){
            //return item.constructor.name + 'Card'; // will fail with webpack
            return item.constructor.type + 'Details';
        }
    },
    template: `
    <div class="card h-100">
        <div class="card-body">
          <component :is="itemCardComponent(item)" :item="item" />
        </div>
        <div class="card-footer d-flex justify-content-end">
            <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
            <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
        </div>
    </div>
    `
});

app.component('BookDetails', {
    props: {
        item: {type: Book}
    },
    template: `
    <div class="book">
      <h3 class="card-title">{{item.title}}</h3>
      <p class="card-text">Pages: {{item.pages}}</p>
    </div>
    `
})

app.component('MovieDetails', {
    props: {
        item: {type: Movie}
    },
    template: `
    <div class="movie">
      <h3 class="card-title">{{item.title}}</h3>
      <p class="card-text">Runtime: {{item.runtime}}</p>
    </div>
    `
})