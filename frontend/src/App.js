import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

// create apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
