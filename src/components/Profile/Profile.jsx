import React from "react";
import {connect} from "react-redux";

const Profile = ({login}) => {
    return (
        <div>
            <h1>Login: {login}</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
  return{
      login:state.login
  }
}
export default connect(mapStateToProps, {})(Profile);