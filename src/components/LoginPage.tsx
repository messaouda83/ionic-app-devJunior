import React from 'react';
import {IonContent, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react';
import './Login.css';
export const Login: React.FC =() => (

    <IonContent className='loginContainer'>
        <div className='padding'>
            <IonItem>
                <IonLabel>Email</IonLabel>
                <IonInput placeholder='Adresse email' type='email'></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Password</IonLabel>
                <IonInput placeholder='Password' type='password'></IonInput>
            </IonItem>
            <IonItem  lines='none'>
                <IonButton fill='clear' slot='end'>Mot de passe oublié ?</IonButton>
            </IonItem>
            <IonButton  fill='outline' shape='round' expand='block'>connexion</IonButton>
            <br></br>
            <IonButton shape='round' expand='block'>inscription</IonButton>
        </div>
    </IonContent>
);