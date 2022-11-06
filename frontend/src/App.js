import "./App.css";
import Landing from "./components/landing/Landing";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const queryClient = new QueryClient();
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Landing></Landing>
            </QueryClientProvider>
        </div>
    );
}

export default App;
