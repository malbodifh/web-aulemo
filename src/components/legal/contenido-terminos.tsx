import Link from "next/link";
import { identificacionNoren, jurisdiccion, legal } from "@/lib/legal";
import type { SeccionLegal } from "./documento-legal";
import { ContactoLegal, Domicilio } from "./contacto-legal";

export const seccionesTerminos: readonly SeccionLegal[] = [
  {
    id: "definiciones",
    titulo: "Definiciones",
    contenido: (
      <ul>
        <li>
          <strong>Noren:</strong> {identificacionNoren()}
          <Domicilio />, titular de Aulemo.
        </li>
        <li>
          <strong>Aulemo o el Servicio:</strong> la plataforma web, instalable
          como aplicación (PWA), y el sitio web de Noren, con todas sus
          funciones, actualizaciones y soporte.
        </li>
        <li>
          <strong>Institución:</strong> el colegio o centro educativo que
          contrata o adopta Aulemo.
        </li>
        <li>
          <strong>Usuarios:</strong> las personas que usan el Servicio:
          profesores, profesores guía, auxiliares, coordinación y dirección
          (personal) y encargados.
        </li>
        <li>
          <strong>Encargado:</strong> padre, madre o persona encargada legal de
          un estudiante.
        </li>
        <li>
          <strong>Propuesta o acuerdo:</strong> el documento firmado entre Noren
          y la Institución que fija las condiciones particulares.
        </li>
        <li>
          <strong>Política de privacidad:</strong> la disponible en{" "}
          <Link href="/privacidad">/privacidad</Link>.
        </li>
      </ul>
    ),
  },
  {
    id: "aceptacion",
    titulo: "Aceptación",
    contenido: (
      <>
        <p>
          Al crear una cuenta, ingresar a Aulemo, pagar el servicio o usar el
          sitio web, usted declara que leyó y acepta estos Términos y
          condiciones y la Política de privacidad. Si actúa en nombre de una
          Institución, declara tener facultades para obligarla. Si no está de
          acuerdo, no debe usar el Servicio.
        </p>
        <p>
          Los menores de edad no contratan el Servicio; lo hacen por medio de
          sus encargados y de la Institución.
        </p>
      </>
    ),
  },
  {
    id: "servicio",
    titulo: "Descripción del servicio",
    contenido: (
      <>
        <p>Aulemo es una plataforma para colegios de Costa Rica que ofrece:</p>
        <ul>
          <li>Asistencia por lección, con tardías y justificaciones.</li>
          <li>Calificaciones y evaluaciones con rúbricas.</li>
          <li>Boletas de conducta.</li>
          <li>Alertas de ausencia.</li>
          <li>Agenda y recordatorios del profesor.</li>
          <li>
            Exportación a Excel de las notas, para su traslado al SEA del MEP.
          </li>
          <li>
            Modo sin conexión, con sincronización automática al volver el
            internet.
          </li>
          <li>
            Perfiles por rol: profesor, profesor guía, encargado, auxiliar,
            coordinación y dirección.
          </li>
        </ul>
        <p>
          El servicio incluye soporte los 365 días del año, de 7 a. m. a 5 p.
          m. (vacaciones, feriados y fines de semana incluidos), corrección de
          errores, adaptación al flujo de trabajo de cada profesor,
          capacitación a cada funcionario según sus funciones y actualizaciones.
        </p>
        <p>
          Aulemo es una herramienta de apoyo. La Institución y sus profesores
          siguen siendo responsables de la exactitud de lo que registran y del
          cumplimiento de la normativa educativa aplicable.
        </p>
      </>
    ),
  },
  {
    id: "partes",
    titulo: "Partes y usuarios",
    contenido: (
      <>
        <h3>Institución</h3>
        <p>
          Adopta Aulemo para su centro educativo, define quiénes del personal
          tienen cuenta y qué rol tiene cada uno. No paga por el servicio.
        </p>
        <h3>Personal</h3>
        <p>
          Usa Aulemo según el rol que la Institución le asigna y dentro de las
          funciones que le corresponden.
        </p>
        <h3>Encargados</h3>
        <p>
          Consultan la información de sus hijos o representados, reciben
          notificaciones y realizan el pago anual por cada estudiante.
        </p>
      </>
    ),
  },
  {
    id: "cuentas",
    titulo: "Cuentas y credenciales",
    contenido: (
      <ul>
        <li>
          Cada cuenta es personal e intransferible y se accede con correo y
          contraseña.
        </li>
        <li>
          Usted debe dar información veraz y mantenerla actualizada, y guardar
          sus credenciales de forma confidencial.
        </li>
        <li>
          Usted es responsable de la actividad realizada con su cuenta. Si
          sospecha un uso no autorizado, avísenos de inmediato a través de{" "}
          <ContactoLegal tipo="legal" />.
        </li>
        <li>
          Debe cerrar sesión en equipos compartidos y proteger los dispositivos
          donde use el modo sin conexión.
        </li>
      </ul>
    ),
  },
  {
    id: "obligaciones-institucion",
    titulo: "Obligaciones de la Institución",
    contenido: (
      <>
        <p>La Institución se obliga a:</p>
        <ul>
          <li>
            Registrar únicamente datos lícitos, exactos y necesarios para sus
            fines educativos.
          </li>
          <li>
            Contar con las autorizaciones y bases legales que exija la
            normativa para tratar los datos de estudiantes y encargados, y
            informarles sobre el uso de Aulemo.
          </li>
          <li>
            Asignar los roles y permisos del personal de forma adecuada, y dar
            de baja las cuentas de quienes dejen de laborar en ella.
          </li>
          <li>
            Atender, como responsable de la base de datos, las solicitudes de
            derechos de las personas titulares, con la colaboración de Noren.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "uso-aceptable",
    titulo: "Uso aceptable y prohibiciones",
    contenido: (
      <>
        <p>Está prohibido:</p>
        <ul>
          <li>Usar Aulemo para fines ilícitos o ajenos al ámbito educativo.</li>
          <li>
            Acceder a información de personas o grupos que no le correspondan o
            intentar eludir los controles de acceso.
          </li>
          <li>
            Registrar información falsa, ofensiva o que vulnere derechos de
            terceros.
          </li>
          <li>
            Copiar, descompilar, revender, sublicenciar o explotar el Servicio
            fuera de lo permitido.
          </li>
          <li>
            Interferir con el funcionamiento o la seguridad del Servicio, o
            cargar código malicioso.
          </li>
          <li>
            Extraer datos de forma masiva o automatizada sin autorización.
          </li>
          <li>Compartir su cuenta con otras personas.</li>
        </ul>
      </>
    ),
  },
  {
    id: "pago",
    titulo: "Pago y condiciones económicas",
    contenido: (
      <>
        <div className="tabla-legal">
          <table>
            <tbody>
              <tr>
                <th>Precio</th>
                <td>₡15 000 por estudiante</td>
              </tr>
              <tr>
                <th>Periodicidad</th>
                <td>Pago anual único</td>
              </tr>
              <tr>
                <th>Impuestos</th>
                <td>IVA incluido</td>
              </tr>
              <tr>
                <th>Quién paga</th>
                <td>
                  Cada encargado, por cada estudiante a su cargo. La
                  Institución no paga.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          La forma de pago, las fechas, la facturación, las devoluciones y el
          prorrateo se rigen por la propuesta o acuerdo firmado con cada
          Institución y por las instrucciones de pago que se comuniquen a los
          encargados.
        </p>
        <p>
          Lo anterior se entiende sin perjuicio de los derechos que la Ley de
          Promoción de la Competencia y Defensa Efectiva del Consumidor (Ley
          7472) reconoce a los consumidores, que se respetarán en todo caso.
        </p>
        <p>
          Noren puede modificar los precios para períodos futuros, con aviso
          previo, sin afectar el período ya pagado.
        </p>
      </>
    ),
  },
  {
    id: "soporte",
    titulo: "Soporte y niveles de servicio",
    contenido: (
      <>
        <ul>
          <li>
            <strong>Horario de soporte:</strong> los 365 días del año, de 7 a.
            m. a 5 p. m.
          </li>
          <li>
            <strong>Corrección de errores:</strong> plazo objetivo de 30 minutos
            a 48 horas, según la complejidad. Es una meta de atención, no una
            garantía.
          </li>
          <li>
            <strong>Mantenimiento:</strong> podemos realizar tareas de
            mantenimiento y actualización, procurando hacerlas en horarios de
            menor uso y avisando cuando sea razonable.
          </li>
          <li>
            <strong>Disponibilidad:</strong> no garantizamos un servicio
            ininterrumpido ni libre de errores. Pueden ocurrir interrupciones
            por fallas de internet, de proveedores o por causas ajenas a Noren.
          </li>
        </ul>
        <h3>Modo sin conexión</h3>
        <p>
          El modo sin conexión guarda los registros en el dispositivo hasta que
          se sincronizan. Su funcionamiento depende del dispositivo y del
          navegador: si se borran los datos del navegador, se desinstala la
          aplicación o se pierde el equipo antes de sincronizar, esos registros
          pueden perderse. Recomendamos sincronizar con frecuencia.
        </p>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    titulo: "Propiedad intelectual",
    contenido: (
      <>
        <p>
          Aulemo, su software, diseño, textos, marca y logotipos pertenecen a
          Noren y están protegidos por la Ley de Derechos de Autor y Derechos
          Conexos (Ley 6683) y demás normativa aplicable. Se otorga a los
          usuarios una licencia limitada, no exclusiva, intransferible y
          revocable para usar el Servicio conforme a estos términos.
        </p>
        <p>
          La Institución y los usuarios conservan la propiedad de los datos y
          contenidos que registran en Aulemo. Nos autorizan a tratarlos solo
          para prestar el Servicio.
        </p>
      </>
    ),
  },
  {
    id: "proteccion-datos",
    titulo: "Protección de datos personales",
    contenido: (
      <p>
        El tratamiento de datos personales se rige por nuestra{" "}
        <Link href="/privacidad">Política de privacidad</Link>, que forma parte
        de estos términos. Para los datos de la plataforma, la Institución es la
        responsable de la base de datos y Noren actúa como encargado del
        tratamiento, conforme a la Ley 8968 y su Reglamento.
      </p>
    ),
  },
  {
    id: "confidencialidad",
    titulo: "Confidencialidad",
    contenido: (
      <p>
        Cada parte debe mantener en reserva la información confidencial a la
        que acceda por razón del Servicio y usarla solo para los fines de
        este. No aplica a la información que sea pública, que ya se conociera
        legítimamente o que deba revelarse por mandato de ley o de autoridad
        competente. Esta obligación se mantiene después de terminada la
        relación.
      </p>
    ),
  },
  {
    id: "suspension-terminacion",
    titulo: "Suspensión y terminación",
    contenido: (
      <>
        <p>
          Noren puede suspender o cancelar una cuenta o el acceso de una
          Institución si hay incumplimiento de estos términos, uso que ponga en
          riesgo la seguridad o a terceros, o requerimiento de autoridad
          competente. Cuando sea razonable, avisaremos antes y daremos
          oportunidad de corregir.
        </p>
        <p>
          La Institución puede dejar de usar el Servicio en cualquier momento,
          sin perjuicio de lo pactado en la propuesta o acuerdo. Cualquier
          devolución se rige por la sección de pago.
        </p>
      </>
    ),
  },
  {
    id: "efectos-terminacion",
    titulo: "Efectos de la terminación",
    contenido: (
      <>
        <p>Al terminar la relación con la Institución:</p>
        <ul>
          <li>
            Cesa el acceso de los usuarios de esa Institución al Servicio.
          </li>
          <li>
            A solicitud de la Institución, exportamos sus datos en un formato de
            uso común.
          </li>
          <li>
            Eliminamos los datos de la Institución en un plazo razonable,
            salvo lo que la ley exija conservar.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "responsabilidad",
    titulo: "Limitación de responsabilidad",
    contenido: (
      <>
        <p>
          En la medida que lo permita la legislación costarricense, Noren no
          responde por daños indirectos, lucro cesante ni pérdida de datos
          derivados de causas ajenas a su control razonable, del uso indebido
          del Servicio, de datos incorrectos registrados por los usuarios, de
          fallas de internet, de dispositivos o de terceros proveedores, ni de
          decisiones académicas o administrativas tomadas con base en la
          información registrada.
        </p>
        <p>
          Cuando haya responsabilidad de Noren, se limitará, en lo que la ley
          permita, al monto efectivamente pagado por el Servicio durante los
          doce meses anteriores al hecho. Nada de esto limita responsabilidades
          que no puedan excluirse por ley, ni los derechos irrenunciables de los
          consumidores.
        </p>
      </>
    ),
  },
  {
    id: "fuerza-mayor",
    titulo: "Fuerza mayor",
    contenido: (
      <p>
        Ninguna parte responde por incumplimientos causados por hechos fuera de
        su control razonable, como desastres naturales, cortes de energía o de
        telecomunicaciones, fallas generalizadas de proveedores de
        infraestructura, ataques informáticos pese a medidas razonables,
        pandemias o actos de autoridad. La parte afectada debe avisar a la otra
        y retomar el cumplimiento tan pronto sea posible.
      </p>
    ),
  },
  {
    id: "cambios",
    titulo: "Cambios a estos términos",
    contenido: (
      <p>
        Podemos modificar estos términos. Publicaremos la versión vigente en
        esta página con su fecha de actualización y, si el cambio es relevante,
        avisaremos a las Instituciones y usuarios por un medio razonable. Si
        sigue usando el Servicio después de la entrada en vigencia de los
        cambios, se entiende que los acepta. Si no está de acuerdo, puede dejar
        de usarlo.
      </p>
    ),
  },
  {
    id: "notificaciones",
    titulo: "Notificaciones y contacto",
    contenido: (
      <p>
        Las comunicaciones de Noren se harán por el correo registrado en la
        cuenta, dentro de la plataforma o por los medios indicados en la
        propuesta o acuerdo. Para comunicarse con nosotros, use{" "}
        <ContactoLegal tipo="legal" />.
        {legal.domicilio
          ? ` Domicilio de Noren para notificaciones: ${legal.domicilio}.`
          : ""}
      </p>
    ),
  },
  {
    id: "ley-aplicable",
    titulo: "Ley aplicable y jurisdicción",
    contenido: (
      <p>
        Estos términos se rigen por las leyes de la República de Costa Rica.
        Las controversias se someterán a {jurisdiccion()}, sin perjuicio de los
        fueros que la ley reconozca a los consumidores.
      </p>
    ),
  },
  {
    id: "disposiciones-generales",
    titulo: "Disposiciones generales",
    contenido: (
      <>
        <h3>Independencia de las cláusulas</h3>
        <p>
          Si alguna cláusula se declara nula o inaplicable, las demás
          conservan su validez.
        </p>
        <h3>Acuerdo completo</h3>
        <p>
          Estos términos y la Política de privacidad constituyen el acuerdo
          completo sobre el uso de Aulemo. Para las condiciones propias de cada
          Institución, prevalece lo establecido en la propuesta o acuerdo
          firmado con ella.
        </p>
        <h3>No renuncia</h3>
        <p>
          Que Noren no ejerza un derecho en un momento dado no implica
          renunciar a él.
        </p>
      </>
    ),
  },
];
