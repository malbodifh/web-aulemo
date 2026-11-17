import type { ReactNode } from "react";
import { IlustracionAlertas } from "@/components/funciones/ilustraciones/ilustracion-alertas";
import { IlustracionCalificaciones } from "@/components/funciones/ilustraciones/ilustracion-calificaciones";
import { IlustracionRoles } from "@/components/funciones/ilustraciones/ilustracion-roles";
import { Az, Pt } from "@/components/funciones/titulo";
import { IlustracionHorario } from "./ilustracion-horario";
import { IlustracionMaterias } from "./ilustracion-materias";

export type AreaPersonalizable = {
  id: string;
  titulo: ReactNode;
  texto: string;
  datos: ReactNode[];
  ilustracion: ReactNode;
  invertida?: boolean;
};

export const areas: AreaPersonalizable[] = [
  {
    id: "horario",
    titulo: (
      <>
        Su horario de timbres<Pt>,</Pt>{" "}
        <Az>
          tal como suena<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Configuramos las lecciones, los bloques, los recreos y el almuerzo de su colegio. El profesor ve su día como ya lo conoce.",
    datos: [
      <>
        <b>Lecciones y bloques</b> con las horas de su institución.
      </>,
      <>
        <b>Recreos y almuerzo</b> fuera de la lista de asistencia.
      </>,
      <>
        <b>Asistencia por lección</b>, no solo por día.
      </>,
    ],
    ilustracion: <IlustracionHorario />,
  },
  {
    id: "rubricas",
    titulo: (
      <>
        Rúbricas con los porcentajes de{" "}
        <Az>
          su colegio<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Cada componente de la nota tiene el peso que define su reglamento de evaluación, y el promedio se calcula con esos porcentajes.",
    datos: [
      <>
        <b>Porcentajes por componente</b>, por ejemplo 35, 45, 10 y 10.
      </>,
      <>
        <b>Con o sin pruebas</b>, según la materia.
      </>,
    ],
    ilustracion: <IlustracionCalificaciones />,
    invertida: true,
  },
  {
    id: "materias",
    titulo: (
      <>
        Cada materia<Pt>,</Pt>{" "}
        <Az>
          su forma de evaluar<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Las materias académicas, técnicas y formativas no se evalúan igual, y Aulemo tampoco las trata igual.",
    datos: [
      <>
        <b>Académicas, técnicas y formativas</b>, cada una con su evaluación.
      </>,
      <>
        <b>Exenciones</b> para los estudiantes que lo requieran.
      </>,
    ],
    ilustracion: <IlustracionMaterias />,
  },
  {
    id: "alertas",
    titulo: (
      <>
        Alertas de ausencia con{" "}
        <Az>
          su reglamento<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Usted define cuándo se activa cada alerta y a quién se avisa, según lo que establece su institución.",
    datos: [
      <>
        <b>Umbrales por reglamento</b>, por ejemplo amarilla desde 6 lecciones y
        roja desde 12.
      </>,
      <>
        <b>Avisa a quien corresponde</b>: encargado, profesor guía y auxiliar.
      </>,
    ],
    ilustracion: <IlustracionAlertas />,
    invertida: true,
  },
  {
    id: "roles",
    titulo: (
      <>
        Cada rol ve{" "}
        <Az>
          lo que le corresponde<Pt>.</Pt>
        </Az>
      </>
    ),
    texto:
      "Profesor, profesor guía, encargado, auxiliar y coordinación tienen una interfaz simple, con solo lo que necesitan para su trabajo.",
    datos: [
      <>
        <b>Permisos por función</b>, sin pantallas de sobra.
      </>,
      <>
        <b>Información confidencial</b>: cada persona accede solo a lo suyo.
      </>,
    ],
    ilustracion: <IlustracionRoles />,
  },
];
