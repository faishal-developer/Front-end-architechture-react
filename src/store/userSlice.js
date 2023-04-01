import { createSlice } from '@reduxjs/toolkit';

const initialState = {value:[]};
export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setData: (state,action) => {
            return {
                value: action.payload
            };
        },
        UpdateData: (state,action) => {
            const newState = [...state.value];
            if(action.payload.create){
                delete action.payload.create;
                newState.push(action.payload);
            }else{
                const target = newState.findIndex((item) => item.id === action.payload.id);
                newState.splice(target, 1, action.payload);
            }          
            return {
                value:[...newState]
            };
        },
        DeleteUser:(state,action)=>{
            const newState = [...state.value];
            const target = newState.findIndex((item) => item.id === action.payload.id);
            newState.splice(target, 1);
            return {
                value: [...newState]
            };
        }
    },
    extraReducers: {},
});

export const { setData, UpdateData,DeleteUser } = userSlice.actions;

export default userSlice.reducer;
