import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './nurseCheckPage.css'; // Custom CSS for styling

const NurseCheckPage: React.FC = () => {
  const history = useHistory();

  const handlePHWNurse = () => {
    history.push('/assessorDetails'); // Replace with the actual route for PHW nurse
  };

  const handleNotPHWNurse = () => {
    history.push('/assesseeDetails'); // Replace with the actual route for non-PHW nurse
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PHW Nurse Check</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol size="12" sizeMd="6" className="ion-text-center">
              <div className="question-container">
                <h2>Are you a PHW nurse?</h2>
                <IonButton expand="block" onClick={handlePHWNurse} className="ion-margin-top">Yes</IonButton>
                <IonButton expand="block" onClick={handleNotPHWNurse} className="ion-margin-top" color="secondary">No</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NurseCheckPage;
