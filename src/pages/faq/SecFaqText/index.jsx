import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, rgba(95, 151, 254, 0.2), rgba(140, 83, 254, 0.2));
  padding: 2rem;

    @media (max-width: 768px) {
      padding-top: 6.063rem;
  }

  @media (max-width: 481px) {
      padding-top: 5.125rem;
  }
`;

const Div = styled.div`
  max-width: 1080px;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: justify;

  h1 {
    font-size: 32px;
    margin: 2rem 0;
    text-align: left;

    @media (max-width: 1024px) {
      font-size: 26px;
      margin: 1.5rem 0;
      }
  
    @media (max-width: 768px) {
      font-size: 22px;
      margin: 1rem 0;
    }
  
    @media (max-width: 481px) {
      font-size: 17px;
      margin: 0.5rem 0;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;

    @media (max-width: 1024px) {
      font-size: 19px;
      }
  
    @media (max-width: 768px) {
      font-size: 17px;
    }
  
    @media (max-width: 481px) {
      font-size: 12px;
    }
  }

  .Title {
    text-align: center;
  }

`;


function FaqText() {
    return (
        <>
            <Section>
                <Div>
                    <h1 className="Title">FAQ - Preguntas frecuentes</h1>
                    <h1>
                        ¿Cómo funciona Internet de fibra óptica?
                    </h1>
                    <p>La Fibra Óptica es un medio de transmisión que permite el tráfico de datos a la velocidad de la luz. La señal en la Fibra se transmite a través de reflexiones de rayos láser a lo largo de todo el cable, alcanzando una capacidad de transmisión única, que puede ser hasta un millón de veces mayor que el cable metálico o coaxial, lo que convierte a la Fibra en una de las tecnologías de transmisión más modernas del mundo.</p>                 
                    <h1>¿Cuál es la diferencia entre la Fibra Óptica y otras tecnologías de internet?</h1>
                    <p>Con la Fibra Óptica se puede alcanzar una velocidad de transmisión de datos mucho mayor que con otras tecnologías, como el cable metálico o coaxial. Además, la Fibra ofrece una mayor estabilidad de señal, sin sufrir interferencias electromagnéticas o caídas de transmisión. Actualmente, no existen otros medios físicos de transmisión con la calidad y la capacidad de transmisión de la Fibra.</p>
                    <h1>¿Cuáles son las ventajas de utilizar internet XPTO?</h1>
                    <p>XPTO fue un pionero en ofrecer una conexión a Internet de Fibra Óptica de calidad en la región, conectándote con el mundo, con una verdadera conexión de fibra óptica de extremo a extremo, utilizando las principales redes de servidores CDN: Google (GGC), Facebook (FNA), Netflix (OCA), lo que garantiza seguridad y mayor velocidad.</p>
                    <h1>¿Cómo contrato y qué se necesita para contratar internet de XPTO?</h1>
                    <p>Para contratar los servicios de XPTO, simplemente elija uno de nuestros planes y haga clic en el botón "Comprobar cobertura" para completar nuestro formulario. Una vez confirmado su pedido, recibirá el contacto de nuestro equipo comercial. También puede contratar planes a través de nuestro centro de ventas: 1777</p>
                    <h1>¿Cuál es el valor de la instalación?</h1>
                    <p>El costo de la instalación puede variar según las promociones vigentes. Para conocer los valores exactos, póngase en contacto con nuestro Centro de Ventas al 1777.</p>
                    <h1>¿Puedo usar el servicio de internet de XPTO en varios dispositivos?</h1>
                    <p>¡Claro! Con el Internet de Fibra Óptica de XPTO, podrás usar varios dispositivos al mismo tiempo sin perder calidad de conexión. Además, XPTO proporciona wifi de forma gratuita (en comodato) para que tú y tu familia puedan acceder a dispositivos como smartphones, tablets y portátiles.</p>
                    <h1>¿Cuáles son las ventajas de las campañas de XPTO?</h1>
                    <p>
                        La XPTO te da acceso a campañas en paquetes durante todo el año. Estas campañas pueden basarse en diferentes ofertas, como precios más bajos, velocidades de Internet más rápidas, más datos móviles o incluso más ofertas de adhesión. En las adhesiones en línea, encontrará campañas exclusivas que le garantizan ofertas y beneficios aún mejores, como la oferta de equipos (teléfonos móviles, relojes inteligentes, cámaras deportivas, tabletas, etc.). Estas campañas exclusivas en línea ocurren durante todo el año sin previo aviso ni periodicidad preestablecida.
                        Ofertas de adhesión válidas para nuevos clientes al adherirse al débito directo y la factura electrónica, y al pagar la primera factura, y no acumulables entre sí. Hasta 30 días después de la instalación, se enviará un SMS con el vale para su oferta de equipo, que podrá canjear en una tienda física o en la tienda en línea de XPTO.
                        La oferta de Disney+ está limitada al stock existente.
                    </p>
                </Div>
            </Section>
        </>
    )
};


export default FaqText;