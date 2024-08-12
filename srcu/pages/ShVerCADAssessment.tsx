import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronBack, home, ellipsisHorizontal, chevronForward } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import styles from './ShVerCADAssessment.module.css';

const ShVerCADAssessment: React.FC = () => {
  const history = useHistory();
  const assessmentItems = [
    'Common Presentations of Child & adolescent mental & behavioural disorders (CMH)',
    'TABLE 1: Common Presentations by age group',
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.toolbar}>
          <IonTitle className={styles.title}>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={styles.content}>
        <div className={styles.subHeader}>
          <IonIcon icon={chevronBack} onClick={() => history.goBack()} className={styles.backIcon} />
          <span>CHILD/ADOLESCENTS | QUICK OVERVIEW</span>
          <div className={styles.icons}>
            <IonIcon icon={home} onClick={() => history.push('/home')} />
            <IonIcon icon={ellipsisHorizontal} />
          </div>
        </div>
        <h2 className={styles.assessmentTitle}>Assessment</h2>
        <IonList lines="full">
          {assessmentItems.map((item, index) => (
            <IonItem key={index} className={styles.item}>
              <IonLabel>{item}</IonLabel>
              <IonIcon icon={chevronForward} slot="end" />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShVerCADAssessment;
