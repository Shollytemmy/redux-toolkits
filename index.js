// console.log('from Index')


const CAKE_ORDERED = 'CAKE_ORDERED'





const orderCake = () => {
    return {
    type: CAKE_ORDERED
}

}


 const initialState = {
    numOfCakes: 20
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, numOfCakes: state.numOfCakes - 1 }

  default:
    return state
  }
}
