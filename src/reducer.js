export const initialState = {
    user: [],
    playlists: [],
    playing: false,
    item: null,
    token: null,
    current_track : [],
    liked_songs: [],
    playlist_songs: null,
    current_track_artist: null,
    current_track_image: null,
    search_flag: false,
    category_id: null,
};

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_CURRTRACK':
            return{
                ...state,
                current_track: action.current_track
            }
        case 'SET_SAVEDTRACKS':
            return{
                ...state,
                liked_songs:action.liked_songs
            }
        case 'SET_PLAYLISTSONGS':
            return{
                ...state,
                playlist_songs:action.playlist_songs
            }
        case 'SET_CURRENT_TRACK_ARTIST':
            return{
                ...state,
                current_track_artist:action.current_track_artist
            }
        case 'SET_CURRENT_TRACK_IMAGE':
            return{
                ...state,
                current_track_image:action.current_track_image
            }
        case 'SET_SEARCH_FLAG':
            return{
                ...state,
                search_flag: action.search_flag
            }
        case 'SET_CATEGORY_ID':
            return{
                ...state,
                category_id: action.category_id
            }
        default:
            return state;
    }
}

export default reducer;