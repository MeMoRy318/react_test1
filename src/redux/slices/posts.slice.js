import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    isLoading:false,
    error:null
};

const getPost = createAsyncThunk(
    'postsSlice/getPosts',
    async (_,{rejectWithValue})=>{
      try {
          const posts = await fetch("https://jsonplaceholder.typicode.com/psts")
              .then(response =>{
                  if (!response.ok){
                      throw Error ("bad recvest !!!")
                  }
                  return response.json()
              })
          return posts
      }
      catch (e) {

          return rejectWithValue(e.message)

      }
    }
);

const postsSlice = createSlice({
    name:"postsSlice",
    initialState,
    extraReducers:{
        [getPost.fulfilled]: (state,action) =>{
            state.isLoading = false
            state.posts = action.payload
        },
        [getPost.pending]:(state,action)=>{
            state.isLoading = true
        },
        [getPost.rejected]:(state,action)=>{
            state.error = action.payload
        }

    }
});

const {reducer:postsReduser} = postsSlice;

const actionReduser = {
    getPost,
}

export {postsReduser,actionReduser}