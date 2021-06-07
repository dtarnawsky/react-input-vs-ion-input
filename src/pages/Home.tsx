import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MyInput from '../components/my-input';
import MyIonInput from '../components/my-ion-input';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Try typing "12b" in each input below</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        This input component works:
        <div className="bordered">
          <MyInput />
        </div>
        <br />
        This ion-input component does not:
        <div className="bordered">
          <MyIonInput />
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
