import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './ModulesPage.css'; // Import your CSS file

const ModulesPage: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack(); // Use history.goBack() to navigate back
  };

  const navigateToHome = () => {
    history.push('/index'); // Use history.push('/home') to navigate to home page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
        <IonButton onClick={() => history.push('/index2')}>←</IonButton>
          <IonTitle className="ion-text-center">mhGAP Intervention Guide</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonCard className="module" routerLink="/ShVerChildAdolescentPage">
            CHILD & ADOLESCENT MENTAL & BEHAVIOURAL DISORDERS
          </IonCard>
          <IonCard className="module" routerLink="/ShVerSubstanceUsePage">
            DISORDERS DUE TO SUBSTANCE USE
          </IonCard>
          {/* Add more IonCard components for other modules */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ModulesPage;
