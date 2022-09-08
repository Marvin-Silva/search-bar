import React, { StrictMode } from 'react';
import SearchBar from './customer/searchBar';

class App extends React.Component<any,any>{
render() {
  return <>
            <StrictMode>
               <SearchBar/> 
            </StrictMode>  
         </>
}
}


export default App;
