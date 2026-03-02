# rais-soluciones

## Descripción

Proyecto web desarrollado con Next.js, React, TypeScript y Tailwind CSS.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (viene incluido con Node.js) o **yarn**

Para verificar que tienes Node.js instalado, ejecuta en tu terminal:

```bash
node --version
npm --version
```

## Instalación

1. **Clona el repositorio** (si aún no lo has hecho):

```bash
git clone <url-del-repositorio>
cd rais-soluciones
```

2. **Instala las dependencias**:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

## Ejecutar el Proyecto en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)

Abre tu navegador y visita esa URL para ver la aplicación. El servidor se recargará automáticamente cuando hagas cambios en el código.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción (requiere ejecutar `npm run build` primero)
- `npm run lint` - Ejecuta el linter para verificar errores de código

## Construir para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Luego, para ejecutar la versión de producción:

```bash
npm start
```

## Actualización en VPS (después de un merge)

Para desplegar los cambios en el servidor una vez que se haya hecho merge a la rama principal:

1. **Conectar al VPS por SSH**:

```bash
ssh root@srv1333724
```

2. **Ir al directorio del proyecto**:

```bash
cd ~/rais
```

3. **Descargar los últimos cambios**:

```bash
git pull
```

4. **Instalar dependencias** (por si cambió `package.json`):

```bash
npm install
```

5. **Construir la aplicación para producción**:

```bash
npm run build
```

6. **Reiniciar la aplicación con PM2** (el proceso se llama `rais`):

```bash
pm2 restart rais
```

7. **(Opcional)** Verificar que el proceso esté en ejecución:

```bash
pm2 status rais
pm2 logs rais
```

## Estructura del Proyecto

```
rais-soluciones/
├── app/              # Páginas y layouts de Next.js
├── components/       # Componentes React reutilizables
├── constants/        # Constantes y configuraciones
├── docs/             # Documentación (p. ej. sistema de color)
├── public/           # Archivos estáticos
├── utils/            # Utilidades y funciones auxiliares
└── package.json      # Dependencias y scripts del proyecto
```

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones

## Paleta de colores

Paleta terrosa y luminosa del design system RAIS Labs. Refuerza el concepto de **raíz, origen y crecimiento**; fondos claros, acentos orgánicos y calma visual.

### Base (fondos y texto)

| Nombre | Hex | Tailwind |
|--------|-----|----------|
| Sage Light | `#EEF2EC` | `rais-black` (fondo principal) |
| Warm Beige | `#F3EFE7` | `rais-charcoal` (fondo secundario) |
| Deep Soil | `#1F2A22` | `rais-offwhite` (texto principal) |
| — | `#FDFCFA` | `rais-on-accent` (texto en CTAs / fondos de color) |

### Marca y acentos

| Nombre | Hex | Tailwind |
|--------|-----|----------|
| Clay Orange | `#B85E3C` | `rais-terracotta` |
| Forest Green | `#3E5F4B` | `rais-oxide-red` |
| Soft Sand | `#D8C9A8` | `rais-soft-gold` |

### Estados de UI

| Nombre | Hex | Tailwind |
|--------|-----|----------|
| Success Moss | `#4F7A5A` | `rais-success` |
| Warning Ochre | `#C8A24D` | `rais-warning` |
| Error Earth Red | `#9E3A2F` | `rais-error` |
| Info River Slate | `#5A7D7C` | `rais-info` |

> **Nota:** Los tokens `rais-black` / `rais-charcoal` / `rais-offwhite` mapean a la paleta terrosa (fondos claros, texto oscuro). Ver [`docs/COLOR_SYSTEM.md`](docs/COLOR_SYSTEM.md) para reglas de uso.

## Solución de Problemas

Si encuentras problemas al instalar las dependencias:

1. Elimina la carpeta `node_modules` y el archivo `package-lock.json`:
```bash
rm -rf node_modules package-lock.json
```

2. Vuelve a instalar:
```bash
npm install
```

Si el puerto 3000 está en uso, Next.js intentará usar el siguiente puerto disponible automáticamente.
