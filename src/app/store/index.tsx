import { combineReducers, Reducer, createStore, applyMiddleware, compose, Store} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import ReduxThunk from 'redux-thunk';
import { reducers } from './../reducers';

declare var window: {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any};

//Persistence configuration
const rootPersistConfig: {
  key: string;
  storage: any;
} = {
  key: 'root',
  storage
};

const rootReducer: Reducer<{}> = combineReducers({
  ...reducers,
});

const reducer: Reducer<{}> = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<any> = createStore(persistReducer(rootPersistConfig, rootReducer), composeEnhancers(
  applyMiddleware(ReduxThunk)
));

export const persistor: any = persistStore(store);
