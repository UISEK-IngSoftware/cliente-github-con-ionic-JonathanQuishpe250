import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <img
            alt="Jonathan Quishpe Defaz"
            src="https://www.google.com/imgres?q=avatar%20para%20perfil&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Filustraci%25C3%25B3n-de-avatar-estudiante-icono-perfil-usuario-juvenil-retrato-simple-un-dibujos-animados-vectorial-276205531.jpg&imgrefurl=https%3A%2F%2Fes.dreamstime.com%2Filustraci%25C3%25B3n-de-avatar-estudiante-icono-perfil-usuario-juvenil-retrato-simple-un-dibujos-animados-vectorial-image276205531&docid=kSll5CjMeQukCM&tbnid=kiKSmKmHakvCdM&vet=12ahUKEwjLlNKsurSRAxUsRTABHRVUAxEQM3oECBgQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjLlNKsurSRAxUsRTABHRVUAxEQM3oECBgQAAhttps://ionicframework.com/docs/img/demos/card-media.png"
          />

          <IonCardHeader>
            <IonCardTitle>Jonathan QUISHPE Defaz</IonCardTitle>
            <IonCardSubtitle>Jhon</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Soy un desarrollador de software con experiencia en aplicaciones web y móviles. Me apasiona crear soluciones innovadoras y eficientes que mejoren la vida de las personas. En mi tiempo libre, disfruto explorando nuevas tecnologías y contribuyendo a proyectos de código abierto.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
