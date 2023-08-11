import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const getState = () => {
    let initialState = {
        user: {
            currentLeagueIndex: 0
        }
    }
    const storedState = localStorage.getItem("soccerverse_webapp");

    return storedState ? JSON.parse(storedState) : initialState;
}

const appState = getState();

export let getAppState = getState();

console.log(appState);

const userSlice = createSlice({
    name: "user",
    initialState: appState.user,
    reducers: {
        setCurrentLeagueIndex(state, { payload }){
            state.currentLeagueIndex = payload.currentLeagueIndex;

            appState.user = current(state);
            localStorage.setItem("soccerverse_webapp", JSON.stringify(appState));
        },
        unsetCurrentLeagueIndex(state){
            state.currentLeagueIndex = 0;

            appState.user = current(state);
            localStorage.setItem("soccerverse_webapp", JSON.stringify(appState));
        }
    }

});

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

const mapStateToProps = (state) => ({
    redux: {user: state.user}
})

export const reduxWrapper = connect(mapStateToProps);

export default store;