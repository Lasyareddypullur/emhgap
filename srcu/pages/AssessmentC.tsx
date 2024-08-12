import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonList } from '@ionic/react';
import { menuOutline, homeOutline, arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './AssessmentC.css'; // Import your CSS file

const AssessmentC: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonIcon icon={menuOutline} slot="start" />
          <IonTitle>mhGAP Intervention Guide</IonTitle>
          <IonIcon icon={homeOutline} slot="end" onClick={() => history.push('/')} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="subheader">
          <IonIcon icon={arrowBackOutline} onClick={() => history.push('/ChildAdolescentPage')} className="back-icon" />
          <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
          
        </div>
        <div className="content">
          <h1>Assessment</h1>
          <IonList>
            <IonItem button onClick={() => history.push('/common-presentations')}>
              <IonLabel>Common Presentations of Child & adolescent mental & behavioural disorders (CMH)</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/table1')}>
              <IonLabel>TABLE 1: Common Presentations by age group</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/step1')}>
              <IonLabel>STEP 1: Assess for developmental disorders</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/step2')}>
              <IonLabel>STEP 2: Assess for inattention or hyperactivity</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/step3')}>
              <IonLabel>STEP 3: Assess for conduct disorder</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/step4')}>
              <IonLabel>STEP 4: Assess for emotional disorders</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
            <IonItem button onClick={() => history.push('/step5')}>
              <IonLabel>STEP 5: Assess for concurrent MNS conditions</IonLabel>
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AssessmentC;
