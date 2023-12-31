import { useState } from 'react';
import { Prueba } from './components/Prueba';
import { Carta } from './components/Carta';

function App() {
  const [value, setValue] = useState();
  return (
    <main className="min-h-screen flex justify-center items-center">
      {value === 0 ? <Carta /> : <Prueba value={value} setValue={setValue} />}
    </main>
  );
}

export default App;
