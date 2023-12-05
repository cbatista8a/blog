---
title: "El Patrón Facade: Escondiendo la complejidad de tu codigo"
excerpt: "Este artículo explora el impactante Patrón Facade, una herramienta que simplifica la interfaz de subsistemas complejos. Descubre cómo hacer tu código más claro y fácil de usar (Incluye ejemplo en PHP)."
publishDate: 'Dec 5 2023'
featureImage:
  src: '/posts/facade.png'
  alt:  Patron Facade
  caption: 'https://refactoring.guru/images/patterns/diagrams/facade/live-example-es-2x.png'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/facade.png'
---

¡Bienvenido de nuevo a nuestra serie sobre patrones de diseño! En esta entrega, vamos a explorar el **Patrón Facade**, una herramienta que simplifica la interfaz de un conjunto de subsistemas complejos, ofreciendo una experiencia más amigable y fácil de usar.

## Introducción

Cuando trabajamos con sistemas complejos, a veces nos enfrentamos a una interfaz complicada y dispersa. El Patrón Facade entra en escena para resolver este problema, proporcionando una interfaz única y simplificada que oculta la complejidad de los subsistemas internos.

## Funcionamiento del Patrón Facade

El Patrón Facade actúa como una capa intermedia entre el cliente y los subsistemas, ofreciendo una interfaz más clara y específica. Esto no solo simplifica el acceso a las funcionalidades internas, sino que también reduce la dependencia del cliente de los detalles de implementación.

## Ejemplo Práctico en PHP

Vamos a ver un ejemplo práctico utilizando PHP. Imaginemos que tenemos un sistema de gestión de pedidos en una tienda en línea con subsistemas para manejar inventario, pagos y envíos.

```php
// Implementación del Patrón Facade

class SistemaPedidosFacade {
    private $inventario;
    private $pagos;
    private $envios;

    public function __construct() {
        $this->inventario = new Inventario();
        $this->pagos = new Pagos();
        $this->envios = new Envios();
    }

    public function realizarPedido($producto, $cantidad, $cliente) {
        if ($this->inventario->verificarDisponibilidad($producto, $cantidad)) {
            $this->pagos->procesarPago($cliente, $cantidad);
            $this->envios->enviarProducto($producto, $cantidad, $cliente);
            return true;
        } else {
            return false;
        }
    }
}

class Inventario {
    public function verificarDisponibilidad($producto, $cantidad) {
        // Lógica para verificar la disponibilidad en el inventario
        return true;
    }
}

class Pagos {
    public function procesarPago($cliente, $monto) {
        // Lógica para procesar el pago
    }
}

class Envios {
    public function enviarProducto($producto, $cantidad, $cliente) {
        // Lógica para enviar el producto
    }
}

// Uso del Patrón Facade

$facade = new SistemaPedidosFacade();
$resultado = $facade->realizarPedido("Producto A", 2, "Cliente X");

if ($resultado) {
    echo "Pedido realizado con éxito.";
} else {
    echo "No se pudo completar el pedido. Producto no disponible.";
}
```

En este ejemplo, el Patrón Facade simplifica el proceso de realizar un pedido, ocultando la complejidad de los subsistemas involucrados.

### Conclusión

El Patrón Facade es una herramienta valiosa para simplificar interfaces y reducir la complejidad en sistemas grandes. Al ofrecer una capa más clara y específica, facilita el uso de subsistemas complejos sin que los clientes tengan que lidiar con detalles internos.
