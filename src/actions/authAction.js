
export const signUp = (user) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((userCreds) => {
                console.log("User signup sucessfully", userCreds)
            })
            .catch(err => {
                console.log("Sorry an error occured", err)
            })
    }
}


export const loginUser = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCreds) => {
                console.log("User signed in sucessfully", userCreds)
            })
            .catch(err => {
                console.log("Sorry an error occured", err)
            })
    }
}


export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.logout()
    }
}