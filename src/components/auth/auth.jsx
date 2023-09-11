import React, { useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from './context';

export default function Auth(props) {
    const { loginStatus, can } = useContext(LoginContext);
    const conditionAout = useContext(LoginContext);

  const isLoggedIn = conditionAout.loginStatus;
  const canDo = conditionAout.user.capabilities ? can(props.action) : true;
  const okToRender = isLoggedIn && canDo;
  console.log(conditionAout.user.capabilities)
  // console.log(isLoggedIn)


  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
};


// import React from 'react';
// import {When} from 'react-if';

// import { LoginContext } from './context';

// class Login extends React.Component {

//   static contextType = LoginContext;

//   render() {
// console.log(this.props)
//     const isLoggedIn = this.context.loginStatus;
//     const canDo = this.props.capability ? this.context.can(this.props.action) : true;
//     const okToRender = isLoggedIn && canDo;

//     return (
//       <When condition={okToRender}>
//         {this.props.children}
//       </When>
//     );
//   }
// }

// export default Login;