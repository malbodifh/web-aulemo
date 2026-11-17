import { Az, Pt } from "@/components/funciones/titulo";
import { FilaFuncion } from "@/components/funciones/fila-funcion";
import { IlustracionEncargados } from "@/components/funciones/ilustraciones/ilustracion-encargados";

export function VentajasEncargados() {
  return (
    <FilaFuncion
      id="encargados"
      titulo={
        <>
          Lo que recibe{" "}
          <Az>
            cada encargado<Pt>.</Pt>
          </Az>
        </>
      }
      texto="Con el pago anual, cada encargado sigue el día a día de sus hijos desde el celular, sin esperar a la entrega de notas ni a una reunión."
      datos={[
        <>
          <b>Asistencia, notas y boletas al momento</b>, en cuanto el profesor
          las registra.
        </>,
        <>
          <b>Avisos al celular</b> de ausencias, tardías, notas y boletas.
        </>,
        <>
          <b>Alertas de ausencia a tiempo</b>, antes de que el problema crezca.
        </>,
        <>
          <b>Solo la información de sus hijos</b>, confidencial y sin compartir
          con nadie.
        </>,
        <>
          <b>Se instala como app</b> desde el navegador, sin tiendas.
        </>,
      ]}
      ilustracion={<IlustracionEncargados />}
      invertida
    />
  );
}
