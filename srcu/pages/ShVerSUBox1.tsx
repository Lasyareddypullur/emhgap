import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import styles from './ShVerSUBox1.module.css';

const ShVerSUBox1: React.FC = () => {
  const history = useHistory();
  const [substances, setSubstances] = useState([
    { name: 'Alcohol', checked: false },
    { name: 'Benzodiazepines', checked: false },
    { name: 'Opioids', checked: false },
    { name: 'Tobacco', checked: false },
    { name: 'Cocaine, Methamphetamines & Amphetamine-type stimulants', checked: false },
    { name: 'Khat', checked: false },
    { name: 'Cannabis', checked: false },
    { name: 'Tramadol', checked: false },
    { name: 'Volatile solvents', checked: false },
    { name: 'Hallucinogens', checked: false },
    { name: 'MDMA', checked: false },
  ]);

  const handleCheckboxChange = (index: number) => {
    const newSubstances = [...substances];
    newSubstances[index].checked = !newSubstances[index].checked;
    setSubstances(newSubstances);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>mhGAP Intervention Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className={styles.subheader}>
          <IonIcon icon={arrowBack} className={styles.backIcon} onClick={() => history.push('/ShVerSUAssesment')} />
          <span>SUBSTANCE USE | ASSESSMENT</span>
        </div>
        <div className={styles.substanceUseContainer}>
          <h3 className={styles.subtitle}>BOX 1: PSYCHOACTIVE SUBSTANCES</h3>
          <p className={styles.description}>ACUTE BEHAVIOURAL EFFECTS, WITHDRAWAL FEATURES, AND EFFECTS OF PROLONGED USE</p>
          <IonList>
            {substances.map((substance, index) => (
              <IonItem key={index} lines="full" className={styles.substanceItem}>
                <IonLabel>{substance.name}</IonLabel>
                <IonCheckbox
                  slot="end"
                  checked={substance.checked}
                  onIonChange={() => handleCheckboxChange(index)}
                />
              </IonItem>
            ))}
          </IonList>
          <IonButton expand="block" className={styles.proceedButton}>PROCEED</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShVerSUBox1;

