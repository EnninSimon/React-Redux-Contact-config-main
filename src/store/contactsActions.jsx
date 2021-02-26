export const addContact = (user) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("user").add(user)
            .then(res => {
                console.log("user added");
            })
            .catch(err => {
                console.log("Erorr occured");
            })
    }
};

export const deleteContact = (user_id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("user").doc(user_id).delete().then(res => {
            console.log("user deleted sucessfully")
        }).catch(err => {
            console.log("Sorry there was an error")
        })
    }
}

export const editContact = (user_id, updated_info) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("user").doc(user_id).set(updated_info)
            .then(
                res => { console.log("user updated sucessfully") }
            )
            .catch(err => { console.log("Sorry an error occured") })
    }
}