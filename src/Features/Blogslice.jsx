import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    blog:[],
}


const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{
        submit:(state,action)=>{
            const title=action.payload.title;
            const blog=action.payload.blog;
            state.blog.push({title:title, blog:blog, id:Date.now()})
        }
    }
})

export default blogSlice.reducer;
export const {submit}=blogSlice.actions;