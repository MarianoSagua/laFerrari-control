// Función para enviar el mensaje de acción al backend
async function sendAction(action) {
  try {
    const response = await fetch("http://localhost:3000/api/control", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: action }), // Acción a enviar
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa (código de estado diferente a 200)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Convertir la respuesta a JSON
    console.log("Respuesta del backend:", data);
  } catch (error) {
    console.error("Error:", error); // Manejo de errores
  }
}

// Escuchar los clics en los botones
document.getElementById("btnAvanzar").addEventListener("click", function () {
  console.log("Avanzar clickeado");
  const jsonString = '{"tipo":"accion","valor":"avanzar"}';
  sendAction(jsonString); // Enviar "avanzar" al backend
});

document.getElementById("btnRetroceder").addEventListener("click", function () {
  console.log("Retroceder clickeado");
  const jsonString = '{"tipo":"accion","valor":"retroceder"}';
  sendAction(jsonString); // Enviar "retroceder" al backend
});

document
  .getElementById("btnGirarDerecha")
  .addEventListener("click", function () {
    console.log("Girar derecha clickeado");
    const jsonString = '{"tipo":"accion","valor":"girarDerecha"}';
    sendAction(jsonString); // Enviar "girarDerecha" al backend
  });

document
  .getElementById("btnGirarIzquierda")
  .addEventListener("click", function () {
    console.log("Girar izquierda clickeado");
    const jsonString = '{"tipo":"accion","valor":"girarIzquierda"}';
    sendAction(jsonString); // Enviar "girarIzquierda" al backend
  });
