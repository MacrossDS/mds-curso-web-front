import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk), 
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
    )
)

export default store;