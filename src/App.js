import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './pages/privacy';
import Delete from './pages/Users/delete';
import Home from './pages';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/users/delete' element={<Delete />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;