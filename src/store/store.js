import { createStore } from 'vuex'
const store = createStore({
    state: {
        count: 20,
        email: '',
        password: '',
        products: [
            { name: 'Banana Skin', price: 20 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 }
        ],
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    mutations: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        updateEmail: (state, payload) => {
            state.email = payload;
        },
        updatePassword: (state, payload) => {
            state.password = payload
        },
        reducePrice: (state) => {
            state.products.forEach(product => {
                product.price -= 3
            });
        },
    },
    actions: {
        increment: (context) => {
            context.commit('increment');
        },
        decrement: (context) => {
            context.commit('decrement');
        }
    }
});

export default store;