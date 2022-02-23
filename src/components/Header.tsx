import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonImg, IonContent, IonList, IonItem, IonRouterLink, IonRouterOutlet, IonButton, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';
 import logo from '../assets/logo.png';
// import { MainPage } from './Main';
// import { Login } from './LoginePage';


export const Header: React.FC = () => {

 return( <>
    
    {/* <IonMenu contentId='first'>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>HOME</IonItem>
          <IonItem>À PROPOS</IonItem>
          <IonItem>CONTACT</IonItem>
        </IonList>
      </IonContent>
    </IonMenu> */}
   
    <div id="first">
        <IonHeader>
          <IonToolbar color='white'>
            <IonButton slot='primary' color='primary' href={"/login"} >Connexion</IonButton> 
            {/* <IonButtons slot='end'>
              <IonMenuButton></IonMenuButton>
            </IonButtons> */}
            <img src = {logo} alt = 'Platform Dev-junior' className = 'logo' />
          </IonToolbar>
        </IonHeader >
    </div>
  
  </>
);
};