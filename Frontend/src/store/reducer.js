import axios from "axios";
import { createSlice, creatAsyncThunk } from "@reduxjs/toolkit";
import authReducer from "./../features/auth/authSlice";
import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  username: "",
  phoneNumber: "",
  about: "",
  skills: "",

  id: "",
  taskName: "",
  precedence: "",
  dateOfFinalization: "",
  comment: "",
  markAsDone: false,

  status: false,
  numberOfTasks: 0,
  Tasks: [],
  show: true,
};

export const customReducer = createReducer(initialState, {
  updateDataName: (state, action) => {
    state.taskName = action.val;
  },
  updateDataDate: (state, action) => {
    state.dateOfFinalization = action.val;
  },
  updateDataComment: (state, action) => {
    state.comment = action.val;
  },
  updatePrecedence: (state, action) => {
    state.precedence = action.val;
  },
  show: (state) => {
    state.show = true;
  },
  updateData: (state, action) => {
    state.taskName = action.tsk;
    state.dateOfFinalization = action.dof;
    state.id = action.id;
    state.comment = action.cmt;
    state.markAsDone = action.msd;
  },
  dataForShow: (state, action) => {
    state.taskName = action.tsk;
    state.dateOfFinalization = action.dof;
    state.id = action.id;
    state.comment = action.cmt;
    state.markAsDone = action.msd;
  },
  // update: (state, action) => {
  //   (state.taskName = action.Name),
  //     (state.dateOfFinalization = action.Date),
  //     (state.comment = action.Comment);
  // },
});
