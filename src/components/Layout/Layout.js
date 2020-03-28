import React,{Fragment} from 'react';


const layout = props => {
     return (
          <Fragment>
          <div>Toolbar,sidebar,backdrop</div>
          <main> {props.children}</main>
          </Fragment>
     );

     }

export default layout;