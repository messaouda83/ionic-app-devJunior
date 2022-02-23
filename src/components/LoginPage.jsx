import React, {SyntheticEvent, useState} from 'react';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
  const response = await  fetch('http://localhost:8000/api/login', {
             method:"POST",
             headers: {
              'Content-type':'application/json'
               
            },
            // credentials: 'include',
           body:JSON.stringify({
             username,
             password
    
              })
      });
      const content = await response.json();
      console.log(content);

  }
  return (

    <form onSubmit={submit}>
      <input type='email' onChange={e => setUsername(e.target.value)}></input>
      <input type='password' onChange={e => setPassword(e.target.value)}></input>
      <button type='submit'>submit</button>
    </form>
  );
};
export default Register;
// import './Login.css';
// import {IonContent, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react';


// class Login extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         username: '',
//         password: '',
       
//       }
//     }
//     login(){
//           console.log(this.state)
//         fetch('http://localhost:8000/api/login', {
//           method:"POST",
//           headers: {
//             'Content-type':'application/json',
//             'Accept' : 'application/json',
           
//           },
//           body:JSON.stringify({
//             'username':this.state.username,
//             'password':this.state.password

//           })
//         })
//         .then( (response) => response.json())
//         .then((result) => {
//           console.warn("result", result);
//           localStorage.setItem('login', JSON.stringify({
//             // login:true,
//              token:result.token
//            // refresh_token:result.refresh_token
            
//           }));
//         } )
//         .catch(error => console.log(error));

//     }
//         render() {
//             return(
//                 <IonContent className='loginContainer'>
//                 <div className='padding'>
//                     <IonItem>
//                         <IonLabel>Email</IonLabel>
//                         <IonInput type='text' onChange={(event)=>{this.setState({username:event.target.value})}} ></IonInput>
//                     </IonItem>
//                     <IonItem>
//                         <IonLabel>Password</IonLabel>
//                         <IonInput type='password' onChange={(event)=>{this.setState({password:event.target.value})}} ></IonInput>
//                     </IonItem>
//                     <IonItem  lines='none'>
//                         <IonButton fill='clear' slot='end'>Mot de passe oublié ?</IonButton>
//                     </IonItem>
//                     <IonButton onClick={() => {this.login()}} shape='round' expand='block' >connexion</IonButton>
//                     <br></br>
//                     <IonButton fill='outline' shape='round' expand='block'>inscription</IonButton>
//                 </div>
//             </IonContent>
//             );

//         }
    
// }
// export default Login;
   
