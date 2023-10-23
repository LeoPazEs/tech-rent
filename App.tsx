import { NavegacaoPrincipal } from './src/navigations';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
      <NavegacaoPrincipal/>
    </RootSiblingParent>
  );
}
