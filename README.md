# 🧾 Sistema de Facturación
Aplicación web desarrollada como proyecto de práctica para reforzar
conceptos de HTML, CSS y JavaScript puro, sin uso de frameworks.

Un sistema básico de facturación que permite añadir productos, calcular
totales y gestionar una lista de items con funcionalidades CRUD.

## ✅ Características
- Añadir productos: Formulario con validación de datos
- Cálculo automático: Precio total por producto (cantidad × precio unitario)
- Total de factura: Suma automática de todos los productos
- Gestión de productos:
  - Botón "Detalles" para ver información completa
  - Botón "Eliminar" para remover productos
- Validación de entrada:
- Producto no puede estar vacío
  - Cantidad debe ser mayor que 0
  - Precio debe ser un número positivo

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3 (Flexbox, tablas estilizadas)
- JavaScript (ES6)

## 📋 Uso
1. Completa el formulario:
2. Nombre del producto
3. Cantidad (números enteros positivos)
4. Precio unitario (en euros)
5. Haz clic en "Añadir" para agregar el producto a la factura
6. En la tabla podrás:
7. Ver el precio total por producto
8. Hacer clic en "Detalles" para ver información completa
9. Hacer clic en "Eliminar" para quitar un producto
10. El Total factura se actualiza automáticamente
11. Los campos del formulario se limpian después de cada adición

## 📁 Estructura del proyecto
```text
facturas/
├── index.html      # Estructura principal y formulario
├── styles.css      # Estilos y diseño de tabla
├── script.js       # Lógica de facturación
└── README.md       # Documentación
```
## 🔧 Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/Rusby6/facturas.git
```
2. Accede al directorio del proyecto:

```bash
cd facturas
```
3. Abre el archivo index.html en tu navegador.


Pie de tabla destacado para el total de factura

