import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../pages/HomePage.css';

export const Apropos: React.FC = () => {
  return (
    <IonPage>
    
      <IonContent className='ion-content'>
      <ExploreContainer name="Cette plateforme permet aux utilisateurs de chercher un stage ou un emploi" />
      </IonContent>
    </IonPage>
  );
};


