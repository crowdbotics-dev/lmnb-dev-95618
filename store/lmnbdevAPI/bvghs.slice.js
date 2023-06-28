import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bvgh_list = createAsyncThunk(
  "bvghs/api_v1_bvgh_list",
  async payload => {
    const response = await apiService.api_v1_bvgh_list(payload)
    return response.data
  }
)
export const api_v1_bvgh_create = createAsyncThunk(
  "bvghs/api_v1_bvgh_create",
  async payload => {
    const response = await apiService.api_v1_bvgh_create(payload)
    return response.data
  }
)
export const api_v1_bvgh_retrieve = createAsyncThunk(
  "bvghs/api_v1_bvgh_retrieve",
  async payload => {
    const response = await apiService.api_v1_bvgh_retrieve(payload)
    return response.data
  }
)
export const api_v1_bvgh_update = createAsyncThunk(
  "bvghs/api_v1_bvgh_update",
  async payload => {
    const response = await apiService.api_v1_bvgh_update(payload)
    return response.data
  }
)
export const api_v1_bvgh_partial_update = createAsyncThunk(
  "bvghs/api_v1_bvgh_partial_update",
  async payload => {
    const response = await apiService.api_v1_bvgh_partial_update(payload)
    return response.data
  }
)
export const api_v1_bvgh_destroy = createAsyncThunk(
  "bvghs/api_v1_bvgh_destroy",
  async payload => {
    const response = await apiService.api_v1_bvgh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bvghsSlice = createSlice({
  name: "bvghs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bvgh_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bvgh_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bvgh_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bvgh_list,
  api_v1_bvgh_create,
  api_v1_bvgh_retrieve,
  api_v1_bvgh_update,
  api_v1_bvgh_partial_update,
  api_v1_bvgh_destroy,
  slice: bvghsSlice
}
