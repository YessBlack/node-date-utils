# 🚧 AÚN NO ESTÁ PUBLICADO EN NPM – EN PROGRESO 🚧

---

Este paquete está en desarrollo y aún no ha sido publicado en NPM.

# DateUtils

DateUtils es una librería para manejar fechas, incluyendo funciones para convertir zonas horarias, formatear fechas y parsear fechas desde diferentes formatos.

## Instalación

### Con npm:
```bash
npm install dateutils
```

### Con yarn:
```bash
yarn add dateutils
```

## Uso

### Ejemplo básico:

```js
// Importa la librería
const DateUtils = require('dateutils');

// Crea una instancia de DateUtils con la zona horaria deseada
const dateUtils = DateUtils.create("UTC");

// Convierte una fecha a un formato específico
const formattedDate = dateUtils.format(new Date(), "YYYY-MM-DD");

console.log(formattedDate); // Ejemplo de salida: 2024-03-31
```

## Funcionalidades

### Métodos

#### `DateUtils.create(timezone)`

Crea una instancia de `DateUtils` configurada para la zona horaria especificada.

**Parámetros:**
- `timezone`: La zona horaria que se desea utilizar (ej. `"UTC"`, `"America/Bogota"`, etc.).

**Retorna:**
- Una instancia de `DateUtils` configurada para la zona horaria especificada.

#### `toTimezone(date, timezone)`

Convierte una fecha a una zona horaria específica.

**Parámetros:**
- `date`: La fecha a convertir (puede ser una instancia de `Date`).
- `timezone`: La zona horaria a la que se debe convertir la fecha (ej. `"America/Bogota"`, `"Asia/Tokyo"`).

**Retorna:**
- La fecha convertida como una cadena con el formato de la zona horaria especificada.

#### `format(date, format)`

Formatea una fecha en el formato especificado.

**Parámetros:**
- `date`: La fecha a formatear (puede ser una instancia de `Date`).
- `format`: El formato al que se debe convertir la fecha (ej. `"YYYY-MM-DD"`, `"MM/DD/YYYY"`, etc.).

**Retorna:**
- La fecha formateada como una cadena.

### Ejemplo de uso:

```js
const dateUtils = DateUtils.create("UTC");
const date = new Date("2024-03-31T12:00:00Z");

const formattedDate = dateUtils.format(date, "YYYY-MM-DD");

console.log(formattedDate); // 2024-03-31
```

## Instalación y Configuración de Dependencias

Si tu proyecto tiene dependencias adicionales, explícalas aquí.

## Pruebas

Para ejecutar las pruebas:

```bash
npm test
```

## Contribuciones

1. Haz un fork de este repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y asegúrate de que las pruebas pasen.
4. Haz un commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
5. Empuja tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
6. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
