---
title: "El Patrón Decorator: Añadiendo Estilo a tus Objetos"
excerpt: "Este artículo explora el fascinante mundo del Patrón Decorator, una herramienta versátil para extender las funcionalidades de objetos sin modificar la clase original. ¡Descubre cómo añadir estilo a tus objetos de manera dinámica!"
publishDate: 'Dec 4 2023'
featureImage:
  src: '/posts/decorator.jpg'
  alt:  'Patron Decorator'
  caption: 'https://i.ytimg.com/vi/tTourzKDv0I/maxresdefault.jpg'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/decorator.jpg'
---

¡Bienvenido de nuevo a nuestra serie sobre patrones de diseño! En esta ocasión, nos sumergiremos en el fascinante mundo del **Patrón Decorator**. Este patrón proporciona una manera flexible y dinámica de extender las funcionalidades de nuestros objetos sin necesidad de modificar su estructura base.

## Introducción

Cuando nos enfrentamos a la necesidad de agregar nuevas responsabilidades o comportamientos a nuestros objetos, el Patrón Decorator es una herramienta valiosa. En lugar de modificar directamente la clase base, podemos envolver nuestros objetos con decoradores que añaden funcionalidades de forma dinámica.

## Funcionamiento del Patrón Decorator

El Patrón Decorator se basa en una estructura en capas, donde cada capa o decorador envuelve al siguiente. Cada decorador cumple con una interfaz común, lo que permite apilar varios decoradores y componer funcionalidades de manera flexible.

## Ejemplo Práctico en PHP

Vamos a ver un ejemplo práctico utilizando PHP. Imaginemos que tenemos una clase `Café` y queremos añadir opciones de decoración, como leche o azúcar, sin modificar directamente la clase base.

```php
// Implementación del Patrón Decorator

interface Bebida {
    public function coste(): float;
    public function descripcion(): string;
}

class Cafe implements Bebida {
    public function coste(): float {
        return 2.5;
    }

    public function descripcion(): string {
        return "Café";
    }
}

abstract class Decorador implements Bebida {
    protected $bebida;

    public function __construct(Bebida $bebida) {
        $this->bebida = $bebida;
    }

    public function coste(): float {
        return $this->bebida->coste();
    }

    public function descripcion(): string {
        return $this->bebida->descripcion();
    }
}

class LecheDecorator extends Decorador {
    public function coste(): float {
        return parent::coste() + 1.0;
    }

    public function descripcion(): string {
        return parent::descripcion() . ", Leche";
    }
}

class AzucarDecorator extends Decorador {
    public function coste(): float {
        return parent::coste() + 0.5;
    }

    public function descripcion(): string {
        return parent::descripcion() . ", Azúcar";
    }
}

// Uso del Patrón Decorator

$cafeBasico = new Cafe();
$cafeConLeche = new LecheDecorator($cafeBasico);
$cafeConLecheYAzucar = new AzucarDecorator($cafeConLeche);

echo "Coste: " . $cafeConLecheYAzucar->coste() . "\n";
echo "Descripción: " . $cafeConLecheYAzucar->descripcion();
```

En este ejemplo, el Patrón Decorator nos permite añadir opciones de decoración a nuestra bebida base (Café) de forma dinámica y extensible.

### Conclusión

El Patrón Decorator es una herramienta poderosa para extender las funcionalidades de nuestros objetos de manera flexible. Nos permite componer y apilar comportamientos de forma dinámica, manteniendo la coherencia en el código.

¡Sigue extendiendo tus objetos y construyendo software más versátil con el Patrón Decorator! ☕🎨.
