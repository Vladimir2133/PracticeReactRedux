
const initialState = {
    items:[
            {item:'Profile' , id:1},
            {item:'Messages' , id:2},
            {item:'News' , id:3},
            {item:'Music' , id:4},
            {item:'Settings' , id:5},
            {item:'Friends' , id:6},
        ],
    popularFriends:[
            {friend:'Viktor' , id: 1},
            {friend: 'Gosha', id: 2},
            {friend: 'Stepan', id: 3},
            {friend:'Vania' , id: 4},
        ]
};

export const siteBarReducer = (state = initialState, action) => {
    return state
}