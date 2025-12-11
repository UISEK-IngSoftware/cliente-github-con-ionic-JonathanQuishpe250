import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import RepoItem from "../components/Repoitem";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <RepoItem
            name="android-repo"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png"
          />

          <RepoItem
            name="ios-repo"
            imageUrl="https://pluspng.com/img-png/logo-apple-ios-png-apple-ios-image-4085-apple-ios-logo-png-256.png"
          />

          <RepoItem
            name="ionic-repo"
            imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-ionic-logo-icon-svg-download-png-2945013.png"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
