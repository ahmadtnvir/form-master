import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
// import ReuseableForm from "./Components/ReuseableForm/ReuseableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up : ", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Update Profile : ", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
