import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import contactsReducer from '../reducers/contactsReducer';
import thunk from 'redux-thunk';
import {getFirebase, reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {getFirestore, reduxFirestore, firestoreReducer} from 'redux-firestore';
import firebase from '../Firebase/Firebase';


const reducers = combineReducers ({
    usersState: contactsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})
    

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase) 
    )
);