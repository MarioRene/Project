// App.jsx (Componente Principal)
import React from 'react';
import Header from './Header';
import Services from './Services';
import Gallery from './Gallery';
import Quality from './Quality';
import Footer from './Footer';
import { styles } from './styles';

const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Services />
      <Gallery />
      <Quality />
      <Footer />
    </div>
  );
};

export default App;