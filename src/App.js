import React from 'react';
import Header from './components/HeaderComponent/Header'
import Sidebar from "./components/SidebarComponent/Sidebar";
import Content from "./components/ContentComponent/Content";

function App() {
  return (
      <div className="all">
        <Header />
        <div className="content">
          <Sidebar />
          <Content/>
        </div>
      </div>
  );
}

export default App;
