import React, {SyntheticEvent, useState} from 'react';
import {IonContent, IonItem, IonLabel, IonInput, IonButton, InputChangeEventDetail} from '@ionic/react';
// import './Login.css';
const Login= () => {
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
             'username':username,
             'password':password
    
              })
      });
      const content = await response.json();
      console.log(content);

  }
  return (

    <form onSubmit={submit}>
      
          
                  <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput   placeholder='Adresse email' type='email' onIonChange={e => setUsername(e.detail.value!)} ></IonInput>
                  </IonItem>
                    <IonItem>
                      <IonLabel>Password</IonLabel>
                      <IonInput placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem  lines='none'>
                      <IonButton fill='clear' slot='end'>Mot de passe oublié ?</IonButton>
                    </IonItem>
                    <IonButton shape='round' expand='block'color='primary' type='submit'>connexion</IonButton>
                    <IonButton fill='outline' shape='round' expand='block'>inscription</IonButton>
                
              {/* <input type='email' onChange={e => setUsername(e.target.value)}></input> 
            <input type='password' onChange={e => setPassword(e.target.value)}></input> 
            <button type='submit'>submit</button> */}
       
    </form>
  
            
  );
};
export default Login;



// import React from 'react';
// import {IonContent, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react';
// import './Login.css';
// export const Login: React.FC =() => (

//     <IonContent className='loginContainer'>
//         <div className='padding'>
//             <IonItem>
//                 <IonLabel>Email</IonLabel>
//                 <IonInput placeholder='Adresse email' type='email'></IonInput>
//             </IonItem>
//             <IonItem>
//                 <IonLabel>Password</IonLabel>
//                 <IonInput placeholder='Password' type='password'></IonInput>
//             </IonItem>
//             <IonItem  lines='none'>
//                 <IonButton fill='clear' slot='end'>Mot de passe oublié ?</IonButton>
//             </IonItem>
//             <IonButton shape='round' expand='block'>connexion</IonButton>
//             <br></br>
//             <IonButton fill='outline' shape='round' expand='block'>inscription</IonButton>
//         </div>
//     </IonContent>
// );