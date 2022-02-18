import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  // IonIcon,
  // IonLabel,
   IonRouterOutlet,
   IonPage,
  // IonTabBar,
  // IonTabButton,
  // IonTabs,
  setupIonicReact,
  IonContent
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
import {MenuMobile} from './components/Menu';
import {FooterMobile} from './components/Footer';
import {Login} from './components/LoginPage';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <MenuMobile/>
      <IonContent>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/login" component={Login} exact={true} />
              </IonRouterOutlet>
          </IonReactRouter>
      </IonContent>
      <FooterMobile/> 
  </IonPage>
  </IonApp>
);

export default App;
