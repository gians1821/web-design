// Definimos la clase HolaMundo:
class HolaMundo extends HTMLElement {
    constructor() {
      // Se debe llamar super() siempre que se sobreescriba el constructor
      // debe ser antes de cualquier otro código
      super();
      // Código del componente web puede ser escrito después de esta línea
      this.innerHTML = "<h1>Hola Mundo</h1>";
      this.querySelector("h1").classList.add("p-10")
      console.log("Hola Mundo Cargado"); 
    };
  };
  // Agregamos el componente a los elementos personalizados o propios
  customElements.define('hola-mundo', HolaMundo);
