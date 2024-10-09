import { useEffect } from 'react';

export const NavUtil = () => {
  useEffect(() => {
    
    const opcionesConDesplegable = document.querySelectorAll(".opcion-con-desplegable");

   
    opcionesConDesplegable.forEach((opcion) => {
      const handleClick = () => {
        const desplegable = opcion.querySelector(".desplegable");
     
        if (desplegable) {
          desplegable.classList.toggle("hidden");
        }
      };

      opcion.addEventListener("click", handleClick);

      return () => {
        opcion.removeEventListener("click", handleClick);
      };
    });
  }, []); 

  return null; 
};
