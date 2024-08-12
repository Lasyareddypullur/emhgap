import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import axios from 'axios';

const AssessorSignup: React.FC = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    mobileNumber: '',
    qualification: '',
    occupation: '',
    email: '',
    password: ''
  });

  const handleChange = (e: CustomEvent) => {
    const { name, value } = e.detail;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/assessor', form);
      history.push('/assessee-details');
    } catch (error) {
      console.error('Error during signup', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput name="name" value={form.name} onIonInput={handleChange} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Age</IonLabel>
          <IonInput name="age" value={form.age} onIonInput={handleChange} type="number" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Gender</IonLabel>
          <IonInput name="gender" value={form.gender} onIonInput={handleChange} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Mobile Number</IonLabel>
          <IonInput name="mobileNumber" value={form.mobileNumber} onIonInput={handleChange} type="tel" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Qualification</IonLabel>
          <IonInput name="qualification" value={form.qualification} onIonInput={handleChange} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Occupation</IonLabel>
          <IonInput name="occupation" value={form.occupation} onIonInput={handleChange} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" value={form.email} onIonInput={handleChange} type="email" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput name="password" value={form.password} onIonInput={handleChange} type="password" required />
        </IonItem>
        <IonButton expand="full" onClick={handleSignup}>Signup</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AssessorSignup;
