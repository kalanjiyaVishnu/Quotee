import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Nav } from "./components/Nav";
import { client } from "./features/apollo";
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="md:container w-screen h-screen max-w-5xl mx-auto py-1 px-4">
        {/* register/login */}
        <Nav />
        {/* homePage */}
      </div>
    </ApolloProvider>
  );
};
export default App;
