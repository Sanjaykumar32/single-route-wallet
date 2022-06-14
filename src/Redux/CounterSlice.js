import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    data: (state, action) => {
     state.value.push(action.payload);
    },
    editValue : (state , action) =>{
      const {name , amount ,  editId } = action?.payload
      console.log(name, amount , editId);
     state.value.filter((el)=>{
      if(el.id ==  editId)
        return(  el.name = name,
               el.amount = amount,
             el.id = editId
        )
     })
        
      
    },
    deleteRow : (state , action) =>{
       state.value  =  state.value.filter((e)=> e.id !== action.payload.id)
    }
  }
})

export const { data  , editValue , deleteRow} = counterSlice.actions

export default counterSlice.reducer