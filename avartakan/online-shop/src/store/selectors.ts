import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'


const UsersSelector = (state: RootState) => state.user
export const selectUser = createSelector(UsersSelector ,(state) => state.user)
export const selectProfile = createSelector(UsersSelector, state =>state.users)
export const selectProfileData = createSelector(UsersSelector, state =>state.allData)
export const selectAllProducts = createSelector(UsersSelector, state => state.productData)