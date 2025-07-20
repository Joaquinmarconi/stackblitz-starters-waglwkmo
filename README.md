# TP Final - Seminario Angular 2025

## Descripción del Proyecto

Esta es una aplicación web simple para gestionar una lista de tareas. Permite añadir nuevas tareas, ver la lista completa y eliminar las que ya se han completado. La aplicación se conecta a una API externa para guardar los datos.

## Conceptos de Angular Aplicados

*   **Estructura de Componentes:** El proyecto se organiza en varios componentes, incluyendo un componente principal para la lista de tareas que utiliza componentes hijos para cada ítem individual.
*   **Comunicación:** Se usa `@Input` para pasar datos del padre al hijo y `@Output` para que el hijo notifique eventos al padre.
*   **Ruteo:** Se configuraron dos rutas para navegar entre la sección de Tareas y la sección de "Acerca de".
*   **Servicios y HTTP:** Un servicio centraliza la lógica para comunicarse con una API externa mediante `HttpClient`, manejando las peticiones GET, POST y DELETE.
*   **Formularios Reactivos:** El formulario para añadir tareas se construyó con Reactive Forms, incluyendo validaciones para los campos.

---

## Datos del Alumno

*   **Nombre y Apellido:** Joaquín Marconi
*   **DNI:** 41.103.529
*   **Email:** Joaquinmarconi18@outlook.com
*   **Sede:** Tandil
