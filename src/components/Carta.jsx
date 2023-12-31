import image2 from '../assets/image2.jpg';

export const Carta = () => {
  return (
    <div className="container w-full md:w-10/12 xl:w-1/2  bg-neutral-200 p-10 rounded-md ">
      <div className="grid gap-x-5 md:grid-cols-2 ">
        <div>
          <h1 className="font-bold text-xl mb-2">
            Con todo el amor para mi futura esposa
          </h1>
          <p className="text-md font-light">
            Hoy me siento increíblemente afortunado por culminar otro año a tu
            lado. Mi gratitud hacia ti es inmensa, agradezco sinceramente tu
            presencia constante y amorosa, así como todas las lecciones que me
            has brindado. A veces, en la rutina diaria, damos por sentadas estas
            cosas, pero quiero que sepas que cada pequeño detalle que compartes
            conmigo es apreciado y valorado. Eres más que alguien especial; te
            has convertido en alguien indispensable en mi vida. Aprecio tu
            paciencia, comprensión y, sobre todo, tu inquebrantable apoyo. Este
            año que se va ha sido un torbellino de emociones, con momentos
            buenos y difíciles. Sin embargo, confío en que el año nuevo nos
            brindará la oportunidad de dejar atrás lo negativo y construir un
            futuro juntos. Sueño con una vida a tu lado, visualizo la
            posibilidad de tener nuestro propio hogar y compartir un futuro
            lleno de momentos felices. Quiero que sepas lo profundamente que te
            amo y lo agradecido que estoy por convertir mi vida en algo
            maravilloso, repleto de aspiraciones y esperanzas. Mil gracias por
            ser mi apoyo incondicional y por hacer de cada día algo especial.
            Estoy emocionado por lo que nos depara el futuro y ansío seguir
            construyendo juntos nuestra historia de amor. Te amo con todo mi
            corazón.
          </p>
        </div>
        <div className="w-full">
          <img src={image2} alt="" className="object-cover rounded-lg " />
        </div>
      </div>
    </div>
  );
};
