import {useReducer, useState} from 'react'
import {DesktopContext} from './context'
import { applicationMenuReducer } from './reducers'

export default function DesktopState(props) {
  const [applicationMenu, setApplicationMenu]= useReducer(applicationMenuReducer, false)
  
  return (
    <DesktopContext.Provider value={{applicationMenu, setApplicationMenu }}>
    {props.children}
    </DesktopContext.Provider>
  )
}
