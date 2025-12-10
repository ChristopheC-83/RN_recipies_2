import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
        <AppNavigation />
    </SafeAreaProvider>
  );
}
