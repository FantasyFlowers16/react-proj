import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import  ActionsCreators from '../store/action-creator/'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionsCreators, dispatch)
}

