export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after finished developing
    token:"BQBdKOXTvIeAYXi13NzgFuemJxFj5lbNh0jKyjOjN9eGw-jZ27g4nJ3Puv3IHAro_WyMBE-GbTATXsrMMu73hxNTHnnNyWYD7nXSrSrXgC1JTtJadBnO6mRhT9S6-VZwCM7WggfEfIj1ALc6Gft1cE2EyieAbucSp50i3l3j5bw1ZsEJ"
};

const reducer=(state , action) =>{
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }  
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }  
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        default:
            return state;
    }
}
export default reducer;