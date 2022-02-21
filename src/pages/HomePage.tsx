import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../pages/HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <IonPage>
    
      <IonContent className='bg-home'>
      <ExploreContainer name="Trouvez un travail qui vous correspond" />
      </IonContent>
    </IonPage>
  );
};