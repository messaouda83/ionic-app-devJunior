import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterLink, IonRouterOutlet, IonButton, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';
// import { MainPage } from './Main';
// import { Login } from './LoginePage';


export const MenuMobile: React.FC = () => {

 return( <>
    
    <IonMenu contentId='first'>
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
    </IonMenu>
   
    <div id="first">
        <IonHeader>
          <IonToolbar color='dark'>
            <IonButton slot='primary' color='primary' href={"/login"} >Connexion</IonButton> 
            <IonButtons slot='end'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle> Dev.Junior </IonTitle>
          </IonToolbar>
        </IonHeader >
        {/* <IonContent className='ion-padding'>
            <IonMenuToggle>
                <IonButton color='success' expand="block">Open Menu</IonButton>
            </IonMenuToggle>
        </IonContent> */}
      </div>
  
  </>
);
};