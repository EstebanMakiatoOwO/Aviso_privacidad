export default function PrivacyNotice() {
    return (
      <div className="p-40 mr-20 ml-20 bg-white shadow-2xl rounded-lg">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Aviso de Privacidad</h2>
        <div className="text-justify text-gray-700">
          <p className="mb-4"><strong>¿Quiénes somos?</strong></p>
          <p className="mb-6"><strong>NoctisDev S.A. de C.V.</strong>, con domicilio en <strong>11A. Calle Ote. Sur, Santa Cruz, 29073 Tuxtla Gutiérrez, Chis.</strong> es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
          
          <p className="mb-4"><strong>¿Para qué fines utilizaremos sus datos personales?</strong></p>
          <p className="mb-6">Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades necesarias para el servicio que solicita:</p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Proporcionar recomendaciones personalizadas</strong> de rutas de transporte público en tiempo real.</li>
            <li><strong>Visualizar rutas y unidades de transporte en tiempo real</strong>, optimizando la experiencia de transporte.</li>
            <li><strong>Notificar incidencias y modificaciones</strong> en las rutas que podrían afectar su viaje.</li>
            <li><strong>Asistir a conductores</strong> con sugerencias de rutas, tiempos estimados de llegada y mejoras operativas.</li>
          </ul>
          <p className="mb-6">De manera adicional, utilizaremos su información para las siguientes finalidades que no son necesarias para el servicio solicitado, pero nos permiten ofrecerle una mejor atención:</p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Realizar análisis de comportamiento de pasajeros</strong> para optimizar las rutas y mejorar la experiencia de usuario.</li>
            <li><strong>Enviar información sobre nuevas funcionalidades y promociones</strong> relacionadas con el transporte público en Tuxtla Gutiérrez.</li>
            <li><strong>Elaborar estadísticas e informes agregados</strong>, con datos anonimizados, para apoyar el desarrollo y la mejora continua del sistema de transporte.</li>
          </ul>
          <p className="mb-6">En caso de que no desee que sus datos personales sean tratados para estas finalidades adicionales, puede comunicarnos su decisión a través de nuestro correo de contacto (<strong>noctisddev@gmail.com</strong>) o en la sección de configuración de privacidad dentro de la aplicación.</p>
          <p className="mb-6">La negativa para el uso de sus datos personales para estas finalidades no será un motivo para negarle los servicios y productos que solicita con nosotros.</p>
          
          <p className="mb-4"><strong>¿Dónde puedo consultar el aviso de privacidad integral?</strong></p>
          <p>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, incluyendo los terceros con quienes compartimos su información y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en <a href="http://www.qridemx.com/privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">www.qridemx.com/privacidad</a>.</p>
        </div>
      </div>
    );
  }