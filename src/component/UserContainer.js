import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

const UserContainer = (props) => {
  const { fetchUser, users } = props;

  useEffect(() => {
    fetchUser();
  }, []);

  if (!users) return <div></div>;
  else {
    return (
      <div>
        <h1>users</h1>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div key={id}>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { users: state.users.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
