import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const saveState = state => {
    cookies.set('__STATE__', JSON.stringify(state), {path: "/"})
}

const loadState = () => {
    return cookies.get("__STATE__") || {} 
}

const store = createStore(
    reducer,
    loadState(),
    compose(
        applyMiddleware(thunk), 
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
    )
)

store.subscribe(() => {
    saveState(store.getState())
})

export default store;