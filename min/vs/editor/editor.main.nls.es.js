xdefine("vs/editor/editor.main.nls.es",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (ocurrió de nuevo)"],"vs/base/browser/ui/findinput/findInput":["entrada"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Coincidir mayúsculas y minúsculas","Solo palabras completas","Usar expresión regular"],"vs/base/browser/ui/inputbox/inputBox":["Error: {0}","Advertencia: {0}","Información: {0}"],"vs/base/common/keybindingLabels":["Ctrl","Mayús","Alt","Windows","Control","Mayús","Alt","Comando","Control","Mayús","Alt","Windows"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, selector","selector"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Selector rápido. Escriba para restringir los resultados.","Selector rápido"],"vs/base/parts/tree/browser/treeDefaults":["Contraer"],"vs/editor/browser/widget/diffEditorWidget":["Los archivos no se pueden comparar porque uno de ellos es demasiado grande."],"vs/editor/browser/widget/diffReview":["Cerrar","Diferencia {0} de {1}: original {2}, {3} líneas, modificado {4}, {5} líneas","vacío","original {0}, modificado {1}: {2}","+ modificado {0}: {1}","- original {0}: {1}","Ir a la siguiente diferencia","Ir a la diferencia anterior"],"vs/editor/common/config/commonEditorConfig":["Editor","Controla la familia de fuentes.","Controla el grosor de la fuente.","Controla el tamaño de fuente en píxeles.","Controla la altura de línea. Utilice 0 para calcular el valor de lineHeight a partir de fontSize.","Controla el espacio entre letras en pixels.",'Controla la presentación de los números de línea. Los valores posibles son "on", "off" y "relative". "relative" muestra el número de líneas desde la posición actual del cursor.',"Columnas en las que mostrar reglas verticales","Caracteres que se usarán como separadores de palabras al realizar operaciones o navegaciones relacionadas con palabras.","El número de espacios a los que equivale una tabulación. Este valor se invalida según el contenido del archivo cuando `editor.detectIndentation` está activado.",'Se esperaba "number". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".','Insertar espacios al presionar TAB. Este valor se invalida en función del contenido del archivo cuando "editor.detectIndentation" está activado.','Se esperaba "boolean". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".',"Al abrir un archivo, se detectarán `editor.tabSize` y `editor.insertSpaces` en función del contenido del archivo.","Controla si las selecciones tienen esquinas redondeadas","Controla si el editor se seguirá desplazando después de la última línea","Controla si se muestra el minimapa","Controla si el control deslizante del minimapa es ocultado automáticamente.","Presentar los caracteres reales en una línea (por oposición a bloques de color)","Limitar el ancho del minimapa para presentar como mucho un número de columnas determinado","Controla si se inicializa la cadena de búsqueda en Buscar widget en la selección del editor","Controla si el indicador Buscar en selección se activa cuando se seleccionan varios caracteres o líneas de texto en el editor","Las líneas no se ajustarán nunca.","Las líneas se ajustarán en el ancho de la ventanilla.",'Las líneas se ajustarán en "editor.wordWrapColumn".','Las líneas se ajustarán al valor que sea inferior: el tamaño de la ventanilla o el valor de "editor.wordWrapColumn".','Controla cómo se deben ajustar las líneas. Pueden ser:\n - "off" (deshabilitar ajuste),\n - "on" (ajuste de ventanilla),\n - "wordWrapColumn" (ajustar en "editor.wordWrapColumn") o\n - "bounded" (ajustar en la parte mínima de la ventanilla y "editor.wordWrapColumn").',"Controls the wrapping column of the editor when `editor.wordWrap` is 'wordWrapColumn' or 'bounded'.","Controla el sangrado de las líneas ajustadas. Puede ser uno los valores 'none', 'same' o 'indent'.","Se utilizará un multiplicador en los eventos de desplazamiento de la rueda del mouse `deltaX` y `deltaY`",'Se asigna a "Control" en Windows y Linux y a "Comando" en OSX.','Se asigna a "Alt" en Windows y Linux y a "Opción" en OSX.','El modificador que se usará para agregar varios cursores con el mouse. "ctrlCmd" se asigna a "Control" en Windows y Linux y a "Comando" en OSX. Los gestos del mouse Ir a la definición y Abrir vínculo se adaptarán de modo que no entren en conflicto con el modificador multicursor.',"Habilita sugerencias rápidas en las cadenas.","Habilita sugerencias rápidas en los comentarios.","Habilita sugerencias rápidas fuera de las cadenas y los comentarios.","Controla si las sugerencias deben mostrarse automáticamente mientras se escribe","Controla el retardo en ms tras el cual aparecerán sugerencias rápidas","Habilita el desplegable que muestra documentación de los parámetros e información de los tipos mientras escribe","Controla si el editor debe cerrar automáticamente los corchetes después de abrirlos","Controla si el editor debe dar formato automáticamente a la línea después de escribirla","Controla si el editor debe formatear automáticamente el contenido pegado. Debe haber disponible un formateador capaz de aplicar formato a un intervalo dentro de un documento.","Controla si el editor debería ajustar automáticamente la sangría cuando los usuarios escriben, pegan o mueven líneas. Las reglas de sangría del idioma deben estar disponibles.","Controla si las sugerencias deben aparecer de forma automática al escribir caracteres desencadenadores",'Controla si las sugerencias deben aceptarse en "Entrar" (además de "TAB"). Ayuda a evitar la ambigüedad entre insertar nuevas líneas o aceptar sugerencias. El valor "smart" significa que solo se acepta una sugerencia con Entrar cuando se realiza un cambio textual.','Controla si se deben aceptar sugerencias en los caracteres de confirmación. Por ejemplo, en Javascript, el punto y coma (";") puede ser un carácter de confirmación que acepta una sugerencia y escribe ese carácter.',"Mostrar sugerencias de fragmentos de código por encima de otras sugerencias.","Mostrar sugerencias de fragmentos de código por debajo de otras sugerencias.","Mostrar sugerencias de fragmentos de código con otras sugerencias.","No mostrar sugerencias de fragmentos de código.","Controla si se muestran los fragmentos de código con otras sugerencias y cómo se ordenan.","Controla si al copiar sin selección se copia la línea actual.","Habilita sugerencias basadas en palabras.","Tamaño de fuente para el widget de sugerencias","Alto de línea para el widget de sugerencias","Controla si el editor debería destacar coincidencias similares a la selección","Controla si el editor debe resaltar los símbolos semánticos.","Controla el número de decoraciones que pueden aparecer en la misma posición en la regla de visión general","Controla si debe dibujarse un borde alrededor de la regla de información general.",'Controlar el estilo de animación del cursor. Los valores posibles son "blink", "smooth", "phase", "expand" y "solid".',"Ampliar la fuente del editor cuando se use la rueda del mouse mientras se presiona Ctrl",'Controla el estilo del cursor. Los valores aceptados son "block", "block-outline", "line", "line-thin", "underline" y "underline-thin"',"Habilita las ligaduras tipográficas.","Controla si el cursor debe ocultarse en la regla de visión general.",'Controla cómo debe representar el editor los espacios en blanco. Las posibilidades son "none", "boundary" y "all". La opción "boundary" no representa los espacios individuales entre palabras.',"Controla si el editor debe representar caracteres de control","Controla si el editor debe representar guías de sangría.",'Controla cómo el editor debe presentar el resaltado de línea. Las posibilidades son "ninguno", "margen", "línea" y "todo".',"Controla si el editor muestra lentes de código","Controla si el editor tiene habilitado el plegado de código.","Controla cuándo los controles de plegado del margen son ocultados automáticamente.","Resaltar corchetes coincidentes cuando se seleccione uno de ellos.","Controla si el editor debe representar el margen de glifo vertical. El margen de glifo se usa, principalmente, para depuración.","La inserción y eliminación del espacio en blanco sigue a las tabulaciones.","Quitar espacio en blanco final autoinsertado","Mantiene abierto el editor interactivo incluso al hacer doble clic en su contenido o presionar Escape.","Controla si el editor debe permitir mover selecciones mediante arrastrar y colocar.","El editor usará API de plataforma para detectar cuándo está conectado un lector de pantalla.","El editor se optimizará de forma permanente para su uso con un editor de pantalla.","El editor nunca se optimizará para su uso con un lector de pantalla.","Controla si el editor se debe ejecutar en un modo optimizado para lectores de pantalla.","Controla si el editor debe detectar enlaces y hacerlos cliqueables","Controla si el editor de diferencias muestra las diferencias en paralelo o alineadas.","Controla si el editor de diferencias muestra los cambios de espacio inicial o espacio final como diferencias.","Controla si el editor de diff muestra indicadores +/- para cambios agregados/quitados","Controla si el portapapeles principal de Linux debe admitirse."],"vs/editor/common/config/editorOptions":["No se puede acceder al editor en este momento. Presione Alt+F1 para ver opciones.","Contenido del editor"],"vs/editor/common/controller/cursor":["Excepción inesperada al ejecutar el comando."],"vs/editor/common/model/textModelWithTokens":["Error en el modo al convertir la entrada en tokens."],"vs/editor/common/modes/modesRegistry":["Texto sin formato"],"vs/editor/common/services/bulkEdit":["Estos archivos han cambiado durante el proceso: {0}","No se realizaron ediciones","{0} ediciones de texto en {1} archivos","{0} ediciones de texto en un archivo"],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/common/view/editorColorRegistry":["Color de fondo del resaltado de línea en la posición del cursor.","Color de fondo del borde alrededor de la línea en la posición del cursor.","Color de fondo de los intervalos resaltados; por ejemplo, para Apertura Rápida y Buscar.","Color del cursor del editor.","Color de fondo del cursor de edición. Permite personalizar el color del carácter solapado por el bloque del cursor.","Color de los caracteres de espacio en blanco del editor.","Color de las guías de sangría del editor.","Color de números de línea del editor.","Color de las reglas del editor","Color principal de lentes de código en el editor","Color de fondo tras corchetes coincidentes","Color de bloques con corchetes coincidentes","Color del borde de la regla de visión general.","Color de fondo del margen del editor. Este espacio contiene los márgenes de glifos y los números de línea.","Color de primer plano de squigglies de error en el editor.","Color de borde de squigglies de error en el editor.","Color de primer plano de squigglies de advertencia en el editor.","Color de borde de squigglies de advertencia en el editor."],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Ir al corchete"],"vs/editor/contrib/caretOperations/common/caretOperations":["Mover símbolo de inserción a la izquierda","Mover símbolo de inserción a la derecha"],"vs/editor/contrib/caretOperations/common/transpose":["Transponer letras"],"vs/editor/contrib/clipboard/browser/clipboard":["Cortar","Copiar","Pegar","Copiar con resaltado de sintaxis"],"vs/editor/contrib/comment/common/comment":["Alternar comentario de línea","Agregar comentario de línea","Quitar comentario de línea","Alternar comentario de bloque"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Mostrar menú contextual del editor"],"vs/editor/contrib/find/browser/findWidget":["Buscar","Buscar","Coincidencia anterior","Coincidencia siguiente","Buscar en selección","Cerrar","Reemplazar","Reemplazar","Reemplazar","Reemplazar todo","Alternar modo de reemplazar","Solo se resaltan los primeros 999 resultados, pero todas las operaciones de búsqueda trabajan en todo el texto.","{0} de {1}","Sin resultados"],"vs/editor/contrib/find/common/findController":["Buscar","Buscar siguiente","Buscar anterior","Buscar selección siguiente","Buscar selección anterior","Reemplazar","Agregar selección hasta la siguiente coincidencia de búsqueda","Agregar selección hasta la anterior coincidencia de búsqueda","Mover última selección hasta la siguiente coincidencia de búsqueda","Mover última selección hasta la anterior coincidencia de búsqueda","Seleccionar todas las repeticiones de coincidencia de búsqueda","Cambiar todas las ocurrencias","Mostrar el siguiente término de búsqueda","Mostrar término de búsqueda anterior"],"vs/editor/contrib/folding/browser/folding":["Desplegar","Desplegar de forma recursiva","Plegar","Plegar de forma recursiva","Plegar todo","Desplegar todo","Nivel de plegamiento {0}"],"vs/editor/contrib/format/browser/formatActions":["1 edición de formato en la línea {0}","{0} ediciones de formato en la línea {1}","1 edición de formato entre las líneas {0} y {1}","{0} ediciones de formato entre las líneas {1} y {2}","Dar formato al documento","Dar formato a la selección"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands":['No se encontró ninguna definición para "{0}"',"No se encontró ninguna definición"," – {0} definiciones","Ir a definición","Abrir definición en el lateral","Ver la definición",'No se encontró ninguna implementación para "{0}"',"No se encontró ninguna implementación","{0} implementaciones","Ir a implementación","Inspeccionar implementación",'No se encontró ninguna definición de tipo para "{0}"',"No se encontró ninguna definición de tipo"," – {0} definiciones de tipo","Ir a la definición de tipo","Inspeccionar definición de tipo"],"vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse":["Haga clic para mostrar {0} definiciones."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","Ir al error o la advertencia siguiente","Ir al error o la advertencia anterior","Color de los errores del widget de navegación de marcadores del editor.","Color de las advertencias del widget de navegación de marcadores del editor.","Fondo del widget de navegación de marcadores del editor."],"vs/editor/contrib/hover/browser/hover":["Mostrar al mantener el puntero"],"vs/editor/contrib/hover/browser/modesContentHover":["Cargando..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Reemplazar con el valor anterior","Reemplazar con el valor siguiente"],"vs/editor/contrib/linesOperations/common/linesOperations":["Copiar línea arriba","Copiar línea abajo","Mover línea hacia arriba","Mover línea hacia abajo","Ordenar líneas en orden ascendente","Ordenar líneas en orden descendente","Recortar espacio final","Eliminar línea","Sangría de línea","Anular sangría de línea","Insertar línea arriba","Insertar línea debajo","Eliminar todo a la izquierda","Eliminar todo lo que está a la derecha","Unir líneas","Transponer caracteres alrededor del cursor","Transformar a mayúsculas","Transformar a minúsculas"],"vs/editor/contrib/links/browser/links":["Cmd + clic para abrir el vínculo","Ctrl + clic para abrir el vínculo","CMD + click para ejecutar el comando","Ctrl + click para ejecutar el comando","Alt + clic para seguir el vínculo","Alt + clic para ejecutar el comando","No se pudo abrir este vínculo porque no tiene un formato correcto: {0}","No se pudo abrir este vínculo porque falta el destino.","Abrir vínculo"],"vs/editor/contrib/multicursor/common/multicursor":["Agregar cursor arriba","Agregar cursor debajo","Añadir cursores a finales de línea"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Sugerencias para parámetros Trigger"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, sugerencia"],"vs/editor/contrib/quickFix/browser/quickFixCommands":["Mostrar correcciones ({0})","Mostrar correcciones","Corrección rápida"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} referencias","Buscar todas las referencias"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Cargando..."],"vs/editor/contrib/referenceSearch/browser/referencesModel":["símbolo en {0} linea {1} en la columna {2}","1 símbolo en {0}, ruta de acceso completa {1}","{0} símbolos en {1}, ruta de acceso completa {2}","No se encontraron resultados","Encontró 1 símbolo en {0}","Encontró {0} símbolos en {1}","Encontró {0} símbolos en {1} archivos"],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Error al resolver el archivo.","{0} referencias","{0} referencia","vista previa no disponible","Referencias","No hay resultados.","Referencias","Color de fondo del área de título de la vista de inspección.","Color del título de la vista de inpección.","Color de la información del título de la vista de inspección.","Color de los bordes y la flecha de la vista de inspección.","Color de fondo de la lista de resultados de vista de inspección.","Color de primer plano de los nodos de inspección en la lista de resultados.","Color de primer plano de los archivos de inspección en la lista de resultados.","Color de fondo de la entrada seleccionada en la lista de resultados de vista de inspección.","Color de primer plano de la entrada seleccionada en la lista de resultados de vista de inspección.","Color de fondo del editor de vista de inspección.","Color de fondo del margen en el editor de vista de inspección.","Buscar coincidencia con el color de resaltado de la lista de resultados de vista de inspección.","Buscar coincidencia del color de resultado del editor de vista de inspección."],"vs/editor/contrib/rename/browser/rename":["No hay ningún resultado.","Nombre cambiado correctamente de '{0}' a '{1}'. Resumen: {2}","No se pudo cambiar el nombre.","Cambiar el nombre del símbolo"],"vs/editor/contrib/rename/browser/renameInputField":["Cambie el nombre de la entrada. Escriba el nuevo nombre y presione Entrar para confirmar."],"vs/editor/contrib/smartSelect/common/smartSelect":["Expandir selección","Reducir selección"],"vs/editor/contrib/suggest/browser/suggestController":["Aceptando '{0}' Insertó el siguente texto : {1}","Sugerencias para Trigger"],"vs/editor/contrib/suggest/browser/suggestWidget":["Color de fondo del widget sugerido.","Color de borde del widget sugerido.","Color de primer plano del widget sugerido.","Color de fondo de la entrada seleccionada del widget sugerido.","Color del resaltado coincidido en el widget sugerido.","Leer más...{0}","{0}, sugerencia, con detalles","{0}, sugerencia","Leer menos...{0}","Cargando...","No hay sugerencias.","{0}, aceptada","{0}, sugerencia, con detalles","{0}, sugerencia"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Alternar tecla de tabulación para mover el punto de atención"],"vs/editor/contrib/wordHighlighter/common/wordHighlighter":["Color de fondo de un símbolo durante el acceso de lectura; por ejemplo, cuando se lee una variable.","Color de fondo de un símbolo durante el acceso de escritura; por ejemplo, cuando se escribe una variable."],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Cerrar"],"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["La configuración predeterminada se reemplaza","Establecer los valores de configuración que se reemplazarán para el lenguaje {0}.","Establecer los valores de configuración que se reemplazarán para un lenguaje.",'No se puede registrar "{0}". Coincide con el patrón de propiedad \'\\\\[.*\\\\]$\' para describir la configuración del editor específica del lenguaje. Utilice la contribución "configurationDefaults".','No se puede registrar "{0}". Esta propiedad ya está registrada.'],"vs/platform/keybinding/common/abstractKeybindingService":["Se presionó ({0}). Esperando la siguiente tecla...","La combinación de teclas ({0}, {1}) no es ningún comando."],"vs/platform/message/common/message":["Cerrar","Más tarde","Cancelar"],"vs/platform/theme/common/colorRegistry":["Formato de color no válido. Use #TGB, #RBGA, #RRGGBB o #RRGGBBAA","Colores usados en el área de trabajo.","Color de primer plano general. Este color solo se usa si un componente no lo invalida.","Color de primer plano general para los mensajes de erroe. Este color solo se usa si un componente no lo invalida.","Color de primer plano para el texto descriptivo que proporciona información adicional, por ejemplo para una etiqueta.","Color de borde de los elementos con foco. Este color solo se usa si un componente no lo invalida.","Un borde adicional alrededor de los elementos para separarlos unos de otros y así mejorar el contraste.","Un borde adicional alrededor de los elementos activos para separarlos unos de otros y así mejorar el contraste.","El color de fondo del texto seleccionado en el área de trabajo (por ejemplo, campos de entrada o áreas de texto). Esto no se aplica a las selecciones dentro del editor.","Color para los separadores de texto.","Color de primer plano para los vínculos en el texto.","Color de primer plano para los vínculos activos en el texto.","Color de primer plano para los segmentos de texto con formato previo.","Color de fondo para los bloques en texto.","Color de borde para los bloques en texto.","Color de fondo para los bloques de código en el texto.","Color de sombra de los widgets  dentro del editor, como buscar/reemplazar","Fondo de cuadro de entrada.","Primer plano de cuadro de entrada.","Borde de cuadro de entrada.","Color de borde de opciones activadas en campos de entrada.","Color de primer plano para el marcador de posición de texto","Color de fondo de validación de entrada para gravedad de información.","Color de borde de validación de entrada para gravedad de información.","Color de fondo de validación de entrada para advertencia de información.","Color de borde de validación de entrada para gravedad de advertencia.","Color de fondo de validación de entrada para gravedad de error.","Color de borde de valdación de entrada para gravedad de error.","Fondo de lista desplegable.","Primer plano de lista desplegable.","Borde de lista desplegable.","Color de fondo de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de fondo de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de fondo de la lista o el árbol del elemento seleccionado cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de primer plano de la lista o el árbol del elemento con el foco cuando la lista o el árbol están activos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de fondo de la lista o el árbol del elemento seleccionado cuando la lista o el árbol están inactivos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de primer plano de la lista o el árbol del elemento con el foco cuando la lista o el árbol esta inactiva. Una lista o un árbol tiene el foco del teclado cuando está activo, cuando esta inactiva no.","Color de fondo de la lista o el árbol del elemento seleccionado cuando la lista o el árbol están inactivos. Una lista o un árbol tienen el foco del teclado cuando están activos, cuando están inactivos no.","Color de primer plano de la lista o el árbol del elemento con el foco cuando la lista o el árbol esta inactiva. Una lista o un árbol tiene el foco del teclado cuando está activo, cuando esta inactiva no.","Fondo de la lista o el árbol al mantener el mouse sobre los elementos.","Color de primer plano de la lista o el árbol al pasar por encima de los elementos con el ratón.","Fondo de arrastrar y colocar la lista o el árbol al mover los elementos con el mouse.","Color de primer plano de la lista o el árbol de las coincidencias resaltadas al buscar dentro de la lista o el ábol.","Selector de color rápido para la agrupación de etiquetas.","Selector de color rápido para la agrupación de bordes.","Color de primer plano del botón.","Color de fondo del botón.","Color de fondo del botón al mantener el puntero.","Color de fondo de la insignia. Las insignias son pequeñas etiquetas de información, por ejemplo los resultados de un número de resultados.","Color de fondo de la insignia. Las insignias son pequeñas etiquetas de información, por ejemplo los resultados de un número de resultados.","Sombra de la barra de desplazamiento indica que la vista se ha despazado.","Color de fondo de control deslizante de barra de desplazamiento.","Color de fondo de barra de desplazamiento cursor cuando se pasar sobre el control.","Color de fondo de barra de desplazamiento cursor cuando está activo.","Color de fondo para la barra de progreso que se puede mostrar para las operaciones de larga duración.","Color de fondo del editor.","Color de primer plano predeterminado del editor.","Color de fondo del editor de widgets como buscar/reemplazar","Color de borde de los widgets del editor. El color solo se usa si el widget elige tener un borde y no invalida el color.","Color de la selección del editor.","Color del texto seleccionado para alto contraste.","Color de la selección en un editor inactivo.","Color de las regiones con el mismo contenido que la selección.","Color de la coincidencia de búsqueda actual.","Color de las demás coincidencias de búsqueda.","Color del intervalo que limita la búsqueda.","Resaltado debajo de la palabra para la que se muestra un recuadro al mantener el puntero.","Color de fondo al mantener el puntero en el editor.","Color del borde al mantener el puntero en el editor.","Color de los vínculos activos.","Color de fondo para el texto insertado.","Color de fondo para el texto quitado.","Color de contorno para el texto insertado.","Color de contorno para el texto quitado.","Fondo del encabezado actual en conflictos de combinación alineados.","Fondo del contenido actual en conflictos de combinación alineados.","Fondo del encabezado de entrada en conflictos de combinación alineados.","Fondo del contenido de entrada en conflcitos de combinación alineados.","Fondo del encabezado de ancestros comunes en conflictos de combinación alineados.","Fondo del contenido de ancestros comunes en conflictos de combinación alineados.","Color del borde en los encabezados y el divisor en conflictos de combinación alineados.","Primer plano de la regla de visión general actual para conflictos de combinación alineados.","Primer plano de regla de visión general de entrada para conflictos de combinación alineados.","Primer plano de la regla de visión general de ancestros comunes para conflictos de combinación alineados."]});