const initialState = {
    users: [
        {
            name: "Ennin Simon",
            email: "simon@gmail.com",
            address: "Asamankese",
            phone_number: "22525888",
            type: "Single",
            id: "34629"
        },
        {
            name: "Adwoa Sega",
            email: "adwoa@gmail.com",
            address: "Suhum",
            phone_number: "225531",
            type: "Married",
            id: "3469494"
        },
    ]
}


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            const newContact = {
                name: action.payload.name,
                email: action.payload.email,
                address: action.payload.address,
                phone_number: action.payload.phone_number,
                type: action.payload.type,
                id: action.payload.id,
            };
            return { ...state, users: [...state.users, newContact] };
        case "DELETE_USER":
            const filteredContacts = state.users.filter(user => user.id !== action.payload);
            return {...state, users: filteredContacts}
        case "EDIT_CONTACT":
            const editedContactsInfo = state.users.map(user =>{
                if (user.id === action.user_id) {
                    return {...user, ...action.updated_info}
                } else {
                    return user;
                }
            });
            return {...state, users: editedContactsInfo}
        default:
            return state;
    }  
}



export default contactsReducer;