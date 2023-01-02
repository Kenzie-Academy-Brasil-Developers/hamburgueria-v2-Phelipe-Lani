import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Providers/User/userContext";
import { RoutMain } from "./Routes";
import { ItensProvider } from "./Providers/Itens";

function App() {
  return (
    <div className="App">
      <ItensProvider>
        <UserProvider>
          <RoutMain />
        </UserProvider>
      </ItensProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
