import { API, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ signOut, user }) {
  const getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const jwtToken = user.signInUserSession.idToken.jwtToken
    console.log(user, jwtToken)

    const data = await API.post("Clone from DemoApi", "/hello", {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      },
      body: {
        email: user.attributes.email,
        sub: user.attributes.sub
      }
    });

    console.log(data)
  }
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={getUserData}>getUserData</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);