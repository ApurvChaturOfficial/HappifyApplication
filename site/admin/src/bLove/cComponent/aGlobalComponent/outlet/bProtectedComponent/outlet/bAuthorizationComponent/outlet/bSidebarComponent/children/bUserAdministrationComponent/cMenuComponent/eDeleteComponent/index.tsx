import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent";


type MenuDeleteComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    deleteAPITrigger: any,
    deleteAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      deleteAPIResponseHandler: any
    },
    data: any
  }
  params: any
}

const MenuDeleteComponent = (props: MenuDeleteComponentType) => {
  // Destructure Props
  const { ReduxCall, APICall, extras, params } = props;

  // JSX
  return (
    <React.Fragment>
      {/* MenuDeleteComponent */}
      <TypicalDeleteComponent 
        ReduxCall={ReduxCall}
        APICall={{
          retrieveAPIResponse: APICall.retrieveAPIResponse,
          deleteAPITrigger: APICall.deleteAPITrigger,
          deleteAPIResponse: APICall.deleteAPIResponse      
        }}
        extras={{
          apiResponseHandler: {
            deleteAPIResponseHandler: extras.apiResponseHandler.deleteAPIResponseHandler
          },
          data: extras.data
        }}    
        params={{id: params.id}}                   
      />
    </React.Fragment>      
  )
}  

export default MenuDeleteComponent;
