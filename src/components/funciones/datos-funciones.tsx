import type { ReactNode } from "react";
import { IlustracionAgenda } from "./ilustraciones/ilustracion-agenda";
import { IlustracionAlertas } from "./ilustraciones/ilustracion-alertas";
import { IlustracionAsistencia } from "./ilustraciones/ilustracion-asistencia";
import { IlustracionCalificaciones } from "./ilustraciones/ilustracion-calificaciones";
import { IlustracionEncargados } from "./ilustraciones/ilustracion-encargados";
import { IlustracionRoles } from "./ilustraciones/ilustracion-roles";
import { IlustracionSea } from "./ilustraciones/ilustracion-sea";
import { IlustracionSinConexion } from "./ilustraciones/ilustracion-sin-conexion";
import { Az, Pt } from "./titulo";

export type Funcion = {
  id: string;
  indice: string;
  titulo: ReactNode;
  texto: string;
  datos: ReactNode[];
  ilustracion: ReactNode;
  invertida?: boolean;
};

export const funciones: Funcion[] = [
  {
    id: "asistencia",
    indice: "Asistencia",
    titulo: (
      <>
        Asistencia por lección<Pt>,</Pt>{" "}
        <Az>
          en segundos<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "El profesor abre su grupo y marca a cada estudiante con un toque. La lista ya sigue el horario de timbres del colegio.",
    datos: [
      <>
        <b>Presente, tardía o ausente</b> por cada lección.
      </>,
      <>
        <b>Justificaciones</b> registradas por el profesor guía o el auxiliar.
      </>,
      <>
        <b>El encargado lo ve al momento</b> en su celular.
      </>,
    ],
    ilustracion: <IlustracionAsistencia />,
  },
  {
    id: "calificaciones",
    indice: "Calificaciones",
    titulo: (
      <>
        Calificaciones con{" "}
        <Az>
          sus rúbricas<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Cada materia usa los porcentajes de su colegio. El promedio se calcula solo a medida que el profesor registra cotidiano, pruebas y tareas.",
    datos: [
      <>
        <b>Componentes configurables</b>, con o sin pruebas.
      </>,
      <>
        <b>Promedio por periodo</b> siempre al día.
      </>,
      <>
        <b>Exenciones</b> y materias que solo llevan asistencia.
      </>,
    ],
    ilustracion: <IlustracionCalificaciones />,
    invertida: true,
  },
  {
    id: "alertas",
    indice: "Alertas de ausencia",
    titulo: (
      <>
        Alertas de ausencia{" "}
        <Az>
          a tiempo<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Cuando un estudiante acumula ausencias en una materia, Aulemo avisa sin que nadie tenga que revisar listas.",
    datos: [
      <>
        <b>Alerta amarilla</b> desde 6 lecciones y <b>roja</b> desde 12, según su
        reglamento.
      </>,
      <>
        <b>Avisa al encargado, al profesor guía y al auxiliar.</b>
      </>,
      <>
        <b>Las justificadas no cuentan</b> para la alerta.
      </>,
    ],
    ilustracion: <IlustracionAlertas />,
  },
  {
    id: "encargados",
    indice: "Encargados",
    titulo: (
      <>
        Los encargados<Pt>,</Pt>{" "}
        <Az>
          siempre informados<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Cada encargado ve en su celular la asistencia, las notas y las boletas de sus hijos, en cuanto el profesor las registra.",
    datos: [
      <>
        <b>Avisos al celular</b> de ausencias, notas y boletas.
      </>,
      <>
        <b>Solo la información de sus hijos</b>, nada más.
      </>,
      <>
        <b>Se instala como app</b> desde el navegador, sin tiendas.
      </>,
    ],
    ilustracion: <IlustracionEncargados />,
    invertida: true,
  },
  {
    id: "sin-conexion",
    indice: "Sin conexión",
    titulo: (
      <>
        Funciona{" "}
        <Az>
          sin internet<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Si el profesor se queda sin señal, todo lo que registra se guarda en su dispositivo y se envía solo cuando vuelve la conexión. Nada se pierde.",
    datos: [
      <>
        <b>Asistencia, notas, boletas y agenda</b> sin conexión.
      </>,
      <>
        <b>Envío automático</b> al recuperar la señal.
      </>,
      <>
        <b>Sin pasos extra</b> para el profesor.
      </>,
    ],
    ilustracion: <IlustracionSinConexion />,
  },
  {
    id: "sea",
    indice: "Notas para el SEA",
    titulo: (
      <>
        Notas listas{" "}
        <Az>
          para el SEA<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Cada profesor descarga un Excel por grupo con los porcentajes ya calculados, listo para trasladar al SEA sin trabajo extra.",
    datos: [
      <>
        <b>Un archivo por grupo</b> y por periodo.
      </>,
      <>
        <b>Porcentajes calculados</b> con las rúbricas del colegio.
      </>,
    ],
    ilustracion: <IlustracionSea />,
    invertida: true,
  },
  {
    id: "agenda",
    indice: "Agenda",
    titulo: (
      <>
        Agenda y{" "}
        <Az>
          recordatorios<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "El profesor programa pruebas, tareas y entregas, y Aulemo le recuerda lo pendiente con un aviso al celular.",
    datos: [
      <>
        <b>Evaluaciones y entregas</b> por grupo.
      </>,
      <>
        <b>Avisos al celular</b> el día que corresponde.
      </>,
    ],
    ilustracion: <IlustracionAgenda />,
  },
  {
    id: "roles",
    indice: "Roles",
    titulo: (
      <>
        Cada persona ve{" "}
        <Az>
          solo lo suyo<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Profesores, profesor guía, encargados, auxiliar y coordinación tienen su propia vista, con lo que necesitan y nada más.",
    datos: [
      <>
        <b>Interfaz simple</b> para cada rol.
      </>,
      <>
        <b>La información de cada estudiante es confidencial</b> y no se comparte
        con nadie.
      </>,
    ],
    ilustracion: <IlustracionRoles />,
    invertida: true,
  },
];
