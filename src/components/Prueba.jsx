import { useEffect, useState } from 'react';
import image1 from '../assets/image1.jpg';

export const Prueba = ({ value, setValue }) => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    let parsetNumber = Number(number);

    if (parsetNumber !== 0) {
      setMessage('Resultado incorrecto');
      return;
    }
    setMessage('');
    setValue(parsetNumber);
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }, [message]);

  return (
    <section className="container md:w-3/5  xl:w-1/3  bg-neutral-200 rounded p-5">
      <div className="flex items-center gap-x-5">
        <img
          src={image1}
          alt="imagen1"
          className="w-12 h-12 object-cover rounded-full"
        />
        <h2 className="text-xl font-semibold">Julián</h2>
      </div>
      <div className="mt-5">
        <p className="text-sm">
          Bueno mi amor si quieres ver lo que tengo para ti debes de resolver
          una simple operacion matemática:
          <br />
          <span className="text-lg font-bold">(7 x 6 + 42) - 84</span>
          <br />
          Escribe la respuesta para seguir:
        </p>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="flex gap-x-2">
          <input
            type="number"
            name="result"
            id="result"
            className="bg-white px-4 py-2 rounded-md focus:outline-none"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#CE3FBB] px-4 py-2 text-neutral-100 rounded-md hover:bg-[#6d2e65] transition-colors duration-300"
          >
            Enviar
          </button>
        </div>
        <div>
          <p className="text-sm text-red-600">{message}</p>
        </div>
      </div>
    </section>
  );
};
