import React from "react"

import HomeComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aHomeComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";
import globalSlice from "@/bLove/bRedux/aGlobalSlice";


const HomePage = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* HomePage */}
      <HomeComponent 
        ReduxCall={ReduxCall} 
      />
    </React.Fragment>
  )
}

export default HomePage;
