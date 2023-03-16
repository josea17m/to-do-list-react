import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando</div>;
  }

  return (
    isAuthenticated && (
      <div>
        Profile
        <p>{user.name}</p>
        <p>El Email es: {user.email}</p>
      </div>
    )
  );
};

export default Profile;
