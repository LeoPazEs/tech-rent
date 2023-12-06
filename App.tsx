import { NavegacaoPrincipal } from './src/navigations';
import { RootSiblingParent } from 'react-native-root-siblings';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/config/firebase-config';

export default function App() {

  initializeApp(firebaseConfig);

  return (
    <RootSiblingParent>
      <NavegacaoPrincipal/>
    </RootSiblingParent>
  );
}
