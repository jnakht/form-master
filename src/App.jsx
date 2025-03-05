
import './App.css'
import FormReference from './Components/formReference/formReference'
import Hookform from './Components/Hookform/Hookform'
import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  
  const handleSignUpSubmit = data => {
        console.log(data);
  }
  const handleUpdateProfile = data => {
      console.log(data)
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <FormReference></FormReference> */}
      {/* <Hookform></Hookform> */}
      <ReUsableForm 
        formTitle='Sign Up'
        handleSubmit={handleSignUpSubmit}
      >
        <div>
            <h2>Sign Up</h2>
            <p>Please Sign Up right now!</p>
     </div>
      </ReUsableForm>
      <ReUsableForm 
         submitBtnText={'Update'}
         formTitle='Update Profile'
         handleSubmit={handleUpdateProfile}
       >
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile Updated</p>
          </div>
       </ReUsableForm>
    </>
  )
}

export default App
