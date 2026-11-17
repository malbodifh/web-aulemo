import type { Metadata } from "next";
import { PortadaPreguntas } from "@/components/preguntas/portada-preguntas";
import { ListaPreguntas } from "@/components/secciones/lista-preguntas";
import { Menu } from "@/components/secciones/menu";
import { Pie } from "@/components/secciones/pie";
import { Boton } from "@/components/ui/boton";
import { Revelador } from "@/components/ui/revelar";
import { TemaPagina } from "@/components/ui/tema-pagina";
import { revelar } from "@/lib/revelar";
import { preguntasFrecuentes, whatsapp } from "@/lib/sitio";

const descripcionPagina =
  "Respuestas a las dudas más comunes sobre Aulemo: quién paga, funcionamiento sin internet, requisitos, notas para el SEA, soporte y privacidad de los datos.";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: descripcionPagina,
  alternates: { canonical: "/preguntas" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "Aulemo",
    title: "Preguntas frecuentes · Aulemo",
    description: descripcionPagina,
    url: "/preguntas",
  },
};

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntasFrecuentes.map((item) => ({
    "@type": "Question",
    name: item.pregunta,
    acceptedAnswer: { "@type": "Answer", text: item.respuesta },
  })),
};

export default function Preguntas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datosEstructurados).replace(/</g, "\\u003c"),
        }}
      />
      <TemaPagina />
      <Menu />
      <main>
        <PortadaPreguntas />
        <section className="pb-[120px] movil:pb-20">
          <div className="contenedor mx-auto max-w-[860px]">
            <ListaPreguntas />
            <div
              {...revelar()}
              className="mt-14 flex flex-col items-center text-center"
            >
              <p className="text-[length:clamp(20px,2vw,26px)] leading-[1.2] font-semibold tracking-[-.02em]">
                ¿Tiene otra duda?
              </p>
              <p className="mt-3 max-w-[460px] text-[length:clamp(16px,1.4vw,19px)] leading-[1.6] text-tinta-suave">
                Contáctenos y le respondemos directamente.
              </p>
              <div className="mt-7">
                <Boton href={whatsapp.enlace}>Contáctenos</Boton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Pie />
      <Revelador />
    </>
  );
}
