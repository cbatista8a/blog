---
title: "El Patrón Adapter: Adaptando el Presente al Pasado"
excerpt: "Explora cómo el Patrón Adapter facilita la colaboración entre componentes antiguos y modernos en el desarrollo de software. Descubre cómo actúa como un puente, permitiendo que sistemas con interfaces incompatibles trabajen armoniosamente. ¡Adaptando el presente al pasado para una integración eficiente!"
publishDate: 'Nov 29 2023'
featureImage:
  src: '/posts/patron-adapter.jpg'
  alt:  Developers
  caption: 'https://refactorizando.com/wp-content/uploads/2022/10/patron-adapter.jpg'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/patron-adapter.jpg'
---

Cuando trabajamos con sistemas que evolucionan con el tiempo, a menudo nos encontramos con interfaces incompatibles entre componentes antiguos y nuevos. Aquí es donde entra en juego el patrón Adapter, actuando como un puente para que estos elementos dispares colaboren armoniosamente.

## Introducción

El patrón Adapter resuelve el problema de hacer que clases con interfaces incompatibles trabajen juntas. Sirve como un traductor que permite a objetos con interfaces diferentes interactuar sin problemas. Este patrón es particularmente útil cuando heredamos o integramos código antiguo con nuevas implementaciones.

## Desarrollo del Patrón

1. **Adapter (Adaptador):** Este componente se encarga de convertir la interfaz de la clase existente en una interfaz que el cliente espera. Puede ser de dos tipos: Adapter de Objetos, que envuelve un objeto existente, o Adapter de Clases, que hereda de la clase existente.

2. **Target (Objetivo):** Define la interfaz específica que el cliente utiliza, creando un estándar para las clases que se adaptarán.

3. **Adaptee (Adaptado):** Representa la clase existente que necesita ser integrada con el sistema actual. Su interfaz no es compatible con el sistema cliente.

## Escenario Común

Imagina tener un componente antiguo que utiliza métodos y estructuras que no cumplen con las expectativas del nuevo sistema. El Adapter actúa como un intérprete, permitiendo que el componente antiguo funcione sin problemas con el sistema moderno.

## Ejemplo Práctico

Supongamos que tenemos una clase que calcula el área de un rectángulo, pero ahora necesitamos adaptarla para poderla utilizar en un cliente que espera por parametro otra interfaz . El Adapter intervendría, traduciendo las solicitudes del nuevo sistema al formato entendido por la clase existente.

```php
// Clase existente con interfaz incompatible
class Rectangulo {
    public function calcularAreaRectangulo($largo, $ancho) {
        return $largo * $ancho;
    }
}

// Interfaz esperada por el sistema actual
interface Area {
    public function calcularArea();
}

// Adapter de Objetos que adapta la clase Rectangulo a la interfaz Area
class AdapterRectangulo implements Area {
    private $rectangulo;

    public function __construct(Rectangulo $rectangulo) {
        $this->rectangulo = $rectangulo;
    }

    public function calcularArea() {
        return $this->rectangulo->calcularAreaRectangulo(10, 5); // Ejemplo con valores arbitrarios
    }
}

// Cliente que utiliza la interfaz Area
class Cliente {
    public function imprimirArea(Area $area) {
        echo "Área calculada: " . $area->calcularArea() . "\n";
    }
}

// Uso del Adapter para calcular y mostrar el área del rectángulo en el sistema actual
$rectangulo = new Rectangulo();
$adapterRectangulo = new AdapterRectangulo($rectangulo);

$cliente = new Cliente();
$cliente->imprimirArea($adapterRectangulo);
```

### Conclusiones

El patrón Adapter es una herramienta valiosa para la integración de sistemas heredados y modernos. Al proporcionar una capa intermedia que traduce las interfaces, facilita la colaboración entre componentes heterogéneos. Al adoptar este patrón, logramos mantener la coherencia y la eficiencia en nuestros sistemas, independientemente de la disparidad en las interfaces.

**En resumen, el Adapter es el aliado perfecto para unir el pasado y el presente en el desarrollo de software.**
