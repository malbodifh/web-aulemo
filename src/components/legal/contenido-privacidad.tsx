import { identificacionNoren, legal } from "@/lib/legal";
import type { SeccionLegal } from "./documento-legal";
import { ContactoLegal, Domicilio } from "./contacto-legal";

export const seccionesPrivacidad: readonly SeccionLegal[] = [
  {
    id: "quienes-somos",
    titulo: "Quiénes somos y alcance",
    contenido: (
      <>
        <p>
          Aulemo es una plataforma web, instalable como aplicación, para
          colegios de Costa Rica. Permite llevar la asistencia por lección, las
          calificaciones con rúbricas, las boletas de conducta, las alertas de
          ausencia y la agenda y recordatorios del profesor, así como exportar
          las notas a Excel para el SEA del MEP. Es un producto de{" "}
          {identificacionNoren()}
          <Domicilio /> (en adelante, «Noren», «nosotros» o «Aulemo»).
        </p>
        <p>
          Esta política explica qué datos personales tratamos, para qué, con
          quién los compartimos, cuánto tiempo los conservamos y cómo puede
          ejercer sus derechos. Aplica a tres situaciones: el sitio web de
          Aulemo y su formulario de contacto, la plataforma que usan los
          centros educativos y las comunicaciones comerciales con instituciones.
        </p>
        <p>
          La tratamos conforme a la Ley de Protección de la Persona frente al
          tratamiento de sus datos personales (Ley 8968) y su Reglamento
          (Decreto Ejecutivo 37554-JP).
        </p>
      </>
    ),
  },
  {
    id: "roles",
    titulo: "Nuestro papel: responsable y encargado",
    contenido: (
      <>
        <p>Nuestro papel depende de la información de que se trate:</p>
        <ul>
          <li>
            <strong>Datos de la plataforma</strong> (cuentas del personal,
            estudiantes y encargados): el centro educativo es el responsable de
            la base de datos y decide para qué se usan. Noren actúa como
            encargado del tratamiento y los trata siguiendo las instrucciones de
            la institución y esta política.
          </li>
          <li>
            <strong>Formulario del sitio web y contactos comerciales propios:</strong>{" "}
            Noren es el responsable del tratamiento.
          </li>
        </ul>
        <p>
          Por eso, las solicitudes sobre datos de estudiantes se canalizan a
          través del centro educativo, con nuestra colaboración (véase la
          sección «Cómo ejercer sus derechos»).
        </p>
      </>
    ),
  },
  {
    id: "datos",
    titulo: "Datos que tratamos",
    contenido: (
      <>
        <p>
          Solo tratamos los datos necesarios para prestar el servicio. Estas son
          las categorías:
        </p>
        <div className="tabla-legal">
          <table>
            <thead>
              <tr>
                <th>Origen</th>
                <th>Datos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formulario de demo del sitio web</td>
                <td>
                  Nombre, cargo, centro educativo, correo, teléfono, cantidad de
                  estudiantes y de profesores, y mensaje.
                </td>
              </tr>
              <tr>
                <td>Cuentas del personal</td>
                <td>
                  Nombre, correo, rol, grupos y materias asignados, y
                  credenciales de acceso. Las contraseñas las almacena el
                  proveedor de autenticación de forma cifrada (hash); nunca en
                  texto plano.
                </td>
              </tr>
              <tr>
                <td>Estudiantes (menores de edad)</td>
                <td>
                  Nombre, sección o grupo, asistencia por lección, tardías y
                  justificaciones, calificaciones y evaluaciones, boletas de
                  conducta y alertas de ausencia.
                </td>
              </tr>
              <tr>
                <td>Encargados</td>
                <td>
                  Nombre, correo, relación con el estudiante y suscripciones a
                  notificaciones.
                </td>
              </tr>
              <tr>
                <td>Datos técnicos</td>
                <td>
                  Suscripción de notificaciones del dispositivo, cookies de
                  sesión y registros básicos que generan nuestros proveedores.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No solicitamos datos que no sean necesarios para las finalidades
          descritas en esta política.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    titulo: "Para qué usamos los datos",
    contenido: (
      <>
        <h3>Sitio web y contactos comerciales</h3>
        <ul>
          <li>Responder su solicitud de demo o de información.</li>
          <li>Dar seguimiento a la conversación con su institución.</li>
        </ul>
        <h3>Plataforma</h3>
        <ul>
          <li>
            Crear y administrar cuentas y permisos según el rol de cada persona.
          </li>
          <li>
            Registrar y consultar asistencia, calificaciones, evaluaciones y
            boletas de conducta, con los fines educativos que defina el centro
            educativo.
          </li>
          <li>Generar alertas de ausencia, recordatorios y notificaciones.</li>
          <li>Exportar las notas en Excel para el SEA.</li>
          <li>
            Brindar soporte, corregir errores, proteger la seguridad del
            servicio y cumplir obligaciones legales.
          </li>
        </ul>
        <p>
          No vendemos datos personales, no los usamos para publicidad ni para
          crear perfiles comerciales, y no los usamos para fines distintos de
          los aquí descritos.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    titulo: "Datos de menores de edad",
    contenido: (
      <>
        <p>
          Los datos de los estudiantes corresponden a personas menores de edad
          y reciben especial cuidado, en línea con el Código de la Niñez y la
          Adolescencia (Ley 7739). Por eso:
        </p>
        <ul>
          <li>
            Se tratan únicamente para los fines educativos que define el centro
            educativo.
          </li>
          <li>Nunca se venden ni se usan para publicidad.</li>
          <li>
            No se comparten, salvo con los proveedores indicados en esta
            política o cuando una ley o una autoridad competente lo exija.
          </li>
          <li>
            Cada encargado ve únicamente la información de los estudiantes a su
            cargo.
          </li>
        </ul>
        <p>
          Es el centro educativo quien decide qué información se registra y
          bajo qué autorizaciones.
        </p>
      </>
    ),
  },
  {
    id: "acceso",
    titulo: "Quién puede ver los datos",
    contenido: (
      <>
        <p>
          El acceso se controla por rol y con el criterio de mínimo privilegio:
          cada persona ve solo lo que corresponde a sus funciones.
        </p>
        <ul>
          <li>
            <strong>Profesor:</strong> los grupos y materias que tiene
            asignados.
          </li>
          <li>
            <strong>Profesor guía:</strong> la información del grupo que guía,
            según lo defina el centro educativo.
          </li>
          <li>
            <strong>Auxiliar:</strong> lo que el centro educativo le habilite.
          </li>
          <li>
            <strong>Coordinación y dirección:</strong> la información del
            centro educativo al que pertenecen.
          </li>
          <li>
            <strong>Encargado:</strong> solo la información de sus propios
            hijos o representados.
          </li>
        </ul>
        <p>
          El personal de Noren accede a los datos únicamente cuando es
          necesario para brindar soporte o mantener el servicio, y está sujeto a
          deber de confidencialidad.
        </p>
      </>
    ),
  },
  {
    id: "proveedores",
    titulo: "Proveedores y transferencia internacional",
    contenido: (
      <>
        <p>
          Para operar el servicio usamos proveedores que tratan datos por
          nuestra cuenta y solo para esa finalidad:
        </p>
        <ul>
          <li>
            <strong>Vercel:</strong> alojamiento del sitio web y de la
            aplicación.
          </li>
          <li>
            <strong>Supabase:</strong> base de datos y autenticación (ingreso
            con correo y contraseña, con la sesión en cookies).
          </li>
          <li>
            <strong>Brevo:</strong> envío por correo de las solicitudes que
            llegan por el formulario del sitio web.
          </li>
          <li>
            <strong>WhatsApp (Meta):</strong> únicamente cuando usted decide
            contactarnos por WhatsApp.
          </li>
          <li>
            <strong>Servicios de notificaciones push del navegador</strong>{" "}
            (Google, Apple, Mozilla): solo cuando usted activa las
            notificaciones.
          </li>
        </ul>
        <p>
          Estos proveedores pueden almacenar o procesar datos fuera de Costa
          Rica, lo que constituye una transferencia internacional de datos.
          {legal.regionDatos
            ? ` Los datos de la plataforma se alojan en la región ${legal.regionDatos}.`
            : ""}{" "}
          Al usar Aulemo, o al enviarnos sus datos, se entiende que conoce y
          acepta esta transferencia. Exigimos a nuestros proveedores medidas de
          protección adecuadas y no autorizamos el uso de los datos para fines
          propios de ellos.
        </p>
        <p>
          Fuera de estos proveedores, solo comunicamos datos cuando una ley o
          una autoridad competente lo exija.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    titulo: "Cookies y datos en su dispositivo",
    contenido: (
      <>
        <p>
          El sitio web de Aulemo no usa cookies ni herramientas de analítica,
          publicidad o seguimiento. Solo usamos lo estrictamente necesario para
          que el servicio funcione:
        </p>
        <ul>
          <li>
            <strong>Cookies de sesión</strong> de la plataforma, para mantener
            su sesión iniciada.
          </li>
          <li>
            <strong>Almacenamiento local</strong> (IndexedDB y localStorage) del
            modo sin conexión: guarda temporalmente en su dispositivo los
            registros hechos sin internet hasta que se sincronizan.
          </li>
          <li>
            <strong>Suscripción de notificaciones push</strong>, solo si usted
            las activa; puede desactivarlas en cualquier momento desde el
            navegador.
          </li>
        </ul>
        <p>
          Como estos datos quedan en su dispositivo, le recomendamos protegerlo
          con bloqueo de pantalla y cerrar sesión en equipos compartidos.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    titulo: "Seguridad",
    contenido: (
      <>
        <p>
          Aplicamos medidas técnicas y organizativas razonables, entre ellas:
        </p>
        <ul>
          <li>Cifrado de las comunicaciones mediante HTTPS.</li>
          <li>
            Control de acceso por rol y seguridad a nivel de fila en la base de
            datos.
          </li>
          <li>
            Contraseñas almacenadas de forma cifrada, nunca en texto plano.
          </li>
          <li>Acceso del personal bajo el principio de mínimo privilegio.</li>
        </ul>
        <p>
          Ningún sistema es 100 % seguro y no podemos garantizar una seguridad
          absoluta. Si ocurre un incidente de seguridad que afecte datos
          personales, lo notificaremos al centro educativo sin dilación
          indebida, para que pueda tomar las medidas que correspondan.
        </p>
      </>
    ),
  },
  {
    id: "conservacion",
    titulo: "Cuánto tiempo conservamos los datos",
    contenido: (
      <ul>
        <li>
          <strong>Datos de la plataforma:</strong> mientras esté vigente el
          servicio con el centro educativo. Al terminar, exportamos los datos de
          la institución a solicitud suya y los eliminamos en un plazo
          razonable, salvo lo que la ley exija conservar.
        </li>
        <li>
          <strong>Datos del formulario del sitio web:</strong> solo el tiempo
          necesario para dar seguimiento a su solicitud.
        </li>
      </ul>
    ),
  },
  {
    id: "derechos",
    titulo: "Sus derechos",
    contenido: (
      <>
        <p>De acuerdo con la Ley 8968 y su Reglamento, usted tiene derecho a:</p>
        <ul>
          <li>
            <strong>Acceso:</strong> saber qué datos suyos se tratan y cómo.
          </li>
          <li>
            <strong>Rectificación y actualización:</strong> corregir datos
            inexactos o desactualizados.
          </li>
          <li>
            <strong>Cancelación o supresión:</strong> solicitar que se eliminen
            sus datos, cuando proceda.
          </li>
          <li>
            <strong>Oposición:</strong> negarse al tratamiento en los casos que
            la normativa permite.
          </li>
        </ul>
        <p>
          Los encargados pueden ejercer estos derechos en nombre de los menores
          a su cargo.
        </p>
      </>
    ),
  },
  {
    id: "ejercer-derechos",
    titulo: "Cómo ejercer sus derechos",
    contenido: (
      <>
        <p>
          Para datos del sitio web o de contactos comerciales, escríbanos a
          través de <ContactoLegal /> indicando qué derecho desea ejercer y
          cómo identificarlo. Responderemos dentro de los plazos que establece
          la normativa.
        </p>
        <p>
          Para datos de estudiantes, encargados o personal de la plataforma,
          presente la solicitud ante su centro educativo, que es el responsable
          de la base de datos. Noren colaborará con la institución para
          atenderla. Si lo prefiere, también puede escribirnos a través de{" "}
          <ContactoLegal /> y la trasladaremos al centro educativo.
        </p>
        <p>
          Si considera que sus derechos no fueron atendidos, puede presentar
          una queja ante la Agencia de Protección de Datos de los Habitantes
          (PRODHAB).
        </p>
        {legal.inscripcionProdhab ? (
          <p>
            Nuestra base de datos está inscrita ante la PRODHAB con el número{" "}
            {legal.inscripcionProdhab}.
          </p>
        ) : null}
      </>
    ),
  },
  {
    id: "cambios",
    titulo: "Cambios a esta política",
    contenido: (
      <p>
        Podemos actualizar esta política para reflejar cambios en el servicio o
        en la normativa. Publicaremos la versión vigente en esta página con su
        fecha de actualización y, si el cambio es relevante, lo comunicaremos a
        los centros educativos y usuarios por un medio razonable.
      </p>
    ),
  },
  {
    id: "contacto",
    titulo: "Contacto",
    contenido: (
      <p>
        Para consultas sobre esta política o sobre sus datos personales,
        contáctenos a través de <ContactoLegal />.
      </p>
    ),
  },
];
