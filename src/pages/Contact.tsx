import React from 'react';
import { IonButton, IonContent, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import '../components/Contact.css';

export const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='bg-contact'>
          <form method='post' className='form-contact'>
                 
                  <IonToolbar className='ion-toolbar'>
                    <IonTitle className='ion-title'><h1>Contactez-nous</h1></IonTitle>
                    <IonTitle className='ion-title' size='small' color='black'><strong>Email:</strong>projet@onlineformapro.com</IonTitle>
                    <IonTitle className='ion-title' size='small' color='black'><strong>Téléphone:</strong> 03 84 76 90 83</IonTitle>
                    <IonTitle className='ion-title' size='small' color='black'><strong>Adresse:</strong> 55 rue de pfastatt 68200 mulhouse</IonTitle>
                  </IonToolbar>
                  <IonInput className='ion-input' placeholder='nom' type='text'></IonInput>
                  <IonInput className='ion-input' placeholder='prenom.nom@exemple.com' type='email'></IonInput>
                  <IonTextarea className='ion-text-area' rows={6} cols={20} placeholder='message...' ></IonTextarea>
                  <IonButton color='success' type="submit" expand='block'>Envoyer</IonButton> 
          </form>
      </IonContent>
    </IonPage>
  );
};


