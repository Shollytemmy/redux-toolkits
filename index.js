const redux = require('redux')
const createStore = redux.createStore


const CAKE_ORDERED = 'CAKE_ORDERED'





const orderCake = () => {
    return {
    type: CAKE_ORDERED
}

}


 const initialState = {
    numOfCakes: 20
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case  CAKE_ORDERED:
    return { ...state, numOfCakes: state.numOfCakes - 1 }

  default:
    return state
  }
}


const store = createStore(reducer)

console.log('InitialState',store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state',store.getState()))


store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
unsubscribe()