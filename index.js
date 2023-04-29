class Store {
    constructor(initialState, reducer) {
        this.state = initialState;
        this.reducer = reducer;
    }

    dispatch(action, payload) {
        this.state = this.reducer(this.state, action, payload);
    }
};

const cartInitialState = {
    items: [],
    promotions: [],
    cost: 0
};

const reducer = (state, action, payload) => {
    switch (action) {
        case 'SET_ITEMS':
            state.items = payload;
            break;
        default:
            break;
    }

    return state;
};

const cartStore = new Store(cartInitialState, reducer);

cartStore.dispatch('SET_ITEMS', ['1', '2', '3']);
