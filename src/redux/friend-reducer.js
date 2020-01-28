const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialsState = {
    users:[
        {id:1, fullName: "Dima Makarenko", photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WHjhDA7lpURcMrWeNLZPGvlr69K22ClT78HcpehT0NBAmVmilA&s', followed: false, status: 'I am a boss', location:{city:'Kiev', country: 'Ukraine'}},
        {id:2, fullName: "Misha Zarva", photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WHjhDA7lpURcMrWeNLZPGvlr69K22ClT78HcpehT0NBAmVmilA&s', followed: true, status: 'I am a dev', location:{city:'Sumy', country: 'Ukraine'}},
        {id:3, fullName: "Tania Lavrinenko", photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WHjhDA7lpURcMrWeNLZPGvlr69K22ClT78HcpehT0NBAmVmilA&s', followed: false, status: 'I am a street racer', location:{city:'Harkov', country: 'Ukraine'}},
        {id:4, fullName: "Сергей Соловей", photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WHjhDA7lpURcMrWeNLZPGvlr69K22ClT78HcpehT0NBAmVmilA&s', followed: true, status: 'Я !красавчик', location:{city:'Подол', country: 'Украина'}},

    ]
};

export const followAC  = (userId) => ({type: FOLLOW, userId });
export const unfollowAC  = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export const friendsReducer = (state = initialsState, action) => {
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return{
                ...state,
                users: [state.users, ...action.users]
            };
        default:
            return state
    }
}