const LibraryItemListComponent = app.component('LibraryItemList', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new Book('1984',  237),
                new Movie('Ready Player 1', 122),
                new Movie('Avengers: End Game', 189),
            ]
        }
    },

    // values/bindings passed to this component
    props: {},

    // functions that you want to use in your view that are triggered manually
    methods: {},

    methods: {
        itemCardComponent(item){
            //return item.constructor.name + 'Card'; // will fail with webpack
            return item.constructor.type + 'Card';
        }
    },

    // the view
    template: `
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            <div class="col" v-for="item in library">
                <component :is="itemCardComponent(item)" :item="item" />
            </div>
        </div>`,
});

const LibraryItemCardComponent = {
    props: {
        item: {type: LibraryItem}
    },
    template: `
    <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">{{item.title}}</h3>
          <p v-if="item.pages" class="card-text">Pages: {{item.pages}}</p>
          <p v-if="item.constructor.type === 'Book'" class="card-text">Pages2: {{item.pages}}</p>
          <p v-if="item.runtime" class="card-text">Runtime: {{item.runtime}}</p>
          <p v-if="item.constructor.type === 'Movie'" class="card-text">Runtime2: {{item.runtime}}</p>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
            <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
        </div>
    </div>
    `
};
app.component('LibraryItemCard', LibraryItemCardComponent);

app.component('BookCard', {
    extends: LibraryItemCardComponent,
    template: `
    <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">{{item.title}}</h3>
          <p class="card-text">Pages: {{item.pages}}</p>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
            <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
        </div>
    </div>
    `
})

app.component('MovieCard', {
    extends: LibraryItemCardComponent,
    template: `
    <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">{{item.title}}</h3>
          <p class="card-text">Runtime: {{item.runtime}}</p>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
            <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
        </div>
    </div>
    `
})