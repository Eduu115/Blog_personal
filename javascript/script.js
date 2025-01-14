document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevenir el envío normal del formulario

    // Obtener los datos del formulario
    let email = document.getElementById('email-newsletter').value;

    // Crear el contenido que se guardará en el archivo
    let contenido = `Email: ${email}\n---\n`;

    // Crear un Blob con el contenido en formato texto
    let blob = new Blob([contenido], { type: "text/plain" });

    // Usar la API FileSaver.js para generar el archivo y permitir que el usuario lo descargue
    saveAs(blob, "datos_formulario.txt");
});
