import { enableScreens } from 'react-native-screens';
enableScreens();
import { LoginPage } from './screens/login';
import { AppRoutes } from './Routes';


export default function App() {
  return (
        <AppRoutes />
  );
}

