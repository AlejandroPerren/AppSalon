import { useEffect } from 'react';

export const NavUtil = () => {
  useEffect(() => {
    // Obtener todas las opciones principales con desplegables
    const opcionesConDesplegable = document.querySelectorAll(".opcion-con-desplegable");

    // Agregar evento de clic a cada opción principal
    opcionesConDesplegable.forEach((opcion) => {
      const handleClick = () => {
        // Obtener el desplegable asociado a la opción
        const desplegable = opcion.querySelector(".desplegable");
        
        // Verificar si existe el desplegable antes de intentar modificarlo
        if (desplegable) {
          desplegable.classList.toggle("hidden");
        }
      };

      opcion.addEventListener("click", handleClick);

      // Limpieza para evitar fugas de memoria
      return () => {
        opcion.removeEventListener("click", handleClick);
      };
    });
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

  return null; // Este componente no devuelve JSX, solo maneja lógica
};
