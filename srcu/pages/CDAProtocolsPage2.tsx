import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButtons, IonButton } from '@ionic/react';
import { menuOutline, homeOutline, arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './CDAProtocolsPage2.css'; // Import your CSS file

const CDAProtocolsPage2: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonButton onClick={handleBack}>
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>mhGAP Intervention Guide</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={homeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color="success">
          <IonTitle>CHILD/ADOLESCENTS | MANAGEMENT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="content">
          <h2>PROTOCOL 2 (Problems with Behaviour)</h2>
          <IonList>
            <IonItem button onClick={() => navigateTo('/CDAProtocol1Page1')}>
              <IonLabel>Provide guidance on child/adolescent well-being. (2.1)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" color="success" />
            </IonItem>
            <IonItem button onClick={() => navigateTo('CDAProtocol1Page3')}>
              <IonLabel>Provide guidance on developmental disorders. (2.3)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" color="success" />
            </IonItem>
            <IonItem>
              <IonLabel>Assess for and manage stressors, reduce stress and strengthen social supports.</IonLabel>
            </IonItem>
            <IonItem button onClick={() => navigateTo('CDAProtocol1Page7')}>
              <IonLabel>Liaise with teachers and other school staff. (2.7)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" color="success" />
            </IonItem>
            <IonItem>
              <IonLabel>Link with other available resources in the community such as Community-Based Rehabilitation.</IonLabel>
            </IonItem>
            <IonItem button onClick={() => navigateTo('follow-up')}>
              <IonLabel>Offer follow-up.</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" color="success" />
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CDAProtocolsPage2;