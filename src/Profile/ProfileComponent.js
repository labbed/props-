import React from 'react'

function ProfileComponent({ fullname, bio, profession, handleAlert}) {
  return (
    <div>
    <h1 onClick={() => handleAlert(fullname)}>{fullname}</h1>{bio}
    {" "}{profession}

    </div>
  )
}

export default ProfileComponent
