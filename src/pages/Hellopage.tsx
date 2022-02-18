import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Hellopage.css';

const HelloPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>hellopage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hellopage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hello in my first page" />
      </IonContent>
    </IonPage>
  );
};

export default HelloPage;
