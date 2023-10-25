import { API, Amplify, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
// https://glr8340iva.execute-api.us-east-2.amazonaws.com/dev/getdata


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