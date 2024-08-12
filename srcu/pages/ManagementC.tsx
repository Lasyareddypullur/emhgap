import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonList } from '@ionic/react';
import { menuOutline, homeOutline, arrowForwardOutline, eyeOutline, arrowBackOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './ManagementC.css'; // Import your CSS file

const ManagementPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonIcon icon={menuOutline} slot="start" />
          <IonTitle>mhGAP Intervention Guide</IonTitle>
          <IonIcon icon={homeOutline} slot="end" onClick={() => history.push('/')} />
          <IonIcon icon={ellipsisHorizontalOutline} slot="end" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="subheader">
          <IonIcon icon={arrowBackOutline} onClick={() => history.push('/ChildAdolescentPage')} className="back-icon" />
          <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
          <IonIcon icon={eyeOutline} className="eye-icon" />
        </div>
        <div className="content">
          <h1>Management</h1>
          <IonList>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage1')}>
              <IonLabel>Management Protocol 1 (Developmental Delay/Disorder)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage2')}>
              <IonLabel>Management Protocol 2 (Problems with Behaviour)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage3')}>
              <IonLabel>Management Protocol 3 (Attention Deficit Hyperactivity Disorder (ADHD))</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage4')}>
              <IonLabel>Management Protocol 4 (Conduct Disorder)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage5')}>
              <IonLabel>Management Protocol 5 (Problems with Emotions)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/CDAProtocolsPage6')}>
              <IonLabel>Management Protocol 6 (Emotional disorders or Depression)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/psychosocial')}>
              <IonLabel>Psychosocial Interventions</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ManagementPage;
