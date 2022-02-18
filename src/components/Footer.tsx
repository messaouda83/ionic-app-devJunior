import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';
import './styleFooter.css';
export const FooterMobile: React.FC = () => (
    <>
        <IonFooter>
            <IonToolbar className='footerContainer' color='white'>
                <IonTitle className='footerTitle'>
                    © 2021 DEV-JUNIOR . All rights reserved
                </IonTitle>
            </IonToolbar>
        </IonFooter>
    </>
);