import firebaseApp from './firebase.init';
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(firebaseApp)
function App() {
  const [user, setUser] = useState({})

  const handleGoogleSign = () => {
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleGithubSign = ()=>{
    const providerGithub = new GithubAuthProvider()
    signInWithPopup(auth, providerGithub)
    .then(result=>{
      const user = result.user;
      setUser(user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOut}>Sign Out</button>
          : <>
          <button onClick={handleGoogleSign}>Google SignIn</button>
          <button onClick={handleGithubSign}>Github</button>
          </>
      }

      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
