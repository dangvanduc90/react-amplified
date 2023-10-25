import { API, Amplify, Auth } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
// https://glr8340iva.execute-api.us-east-2.amazonaws.com/dev/getdata


  const getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user)

    const data = await API.get("api-sls", "/getdata")
      .then((response) => {
        // Add your code here
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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