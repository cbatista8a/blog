---
title: "El Patrón Flyweight: Aligera la Carga de tus Objetos"
excerpt: 'Este artículo explora el fascinante Patrón Flyweight, una estrategia para aligerar la carga de objetos en situaciones donde la cantidad es enorme. Descubre cómo optimizar el uso de recursos y mejorar el rendimiento en tus aplicaciones.'
publishDate: 'Dec 6 2023'
featureImage:
  src: '/posts/flyweight.jpeg'
  alt:  Patron Flyweight
  caption: 'https://dotnettutorials.net/wp-content/uploads/2019/12/word-image-10.png'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/flyweight.jpeg'
---

¡Hola, desarrolladores! Continuamos explorando los fascinantes patrones de diseño, y hoy veremos el intrigante **Patrón Flyweight**. Este patrón ofrece una forma inteligente de manejar objetos en situaciones donde la cantidad es enorme, aligerando la carga de nuestra aplicación.

## Introducción

Cuando trabajamos con aplicaciones que requieren gestionar una gran cantidad de objetos similares, el Patrón Flyweight se presenta como una solución eficiente. Su principal objetivo es minimizar el uso de memoria o recursos al compartir instancias de objetos similares en lugar de crear nuevas cada vez.

## Funcionamiento del Patrón Flyweight

La idea detrás del Patrón Flyweight es dividir los objetos en dos partes: la intrínseca y la extrínseca. La información intrínseca se almacena en el objeto y no cambia con el tiempo, mientras que la información extrínseca se pasa como parámetro y puede cambiar.

## Ejemplo Práctico con Juguetes

Vamos a visualizar esto con un ejemplo simple pero efectivo. Imaginemos que estamos creando un programa que simula un conjunto masivo de juguetes en un parque de diversiones.

```php
// Implementación del Patrón Flyweight

class TipoJuguete {
    private $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function mostrarJuguete($color) {
        echo "Juguete: {$this->nombre}, Color: $color\n";
    }
}

class FabricaJuguetes {
    private $juguetes = [];

    public function obtenerJuguete($nombre) {
        if (!isset($this->juguetes[$nombre])) {
            $this->juguetes[$nombre] = new TipoJuguete($nombre);
        }

        return $this->juguetes[$nombre];
    }
}

// Uso del Patrón Flyweight

$fabrica = new FabricaJuguetes();

$juguete1 = $fabrica->obtenerJuguete("Carro");
$juguete1->mostrarJuguete("Rojo");

$juguete2 = $fabrica->obtenerJuguete("Carro");
$juguete2->mostrarJuguete("Azul");
```

En este ejemplo, creamos una fábrica de juguetes que nos proporciona instancias del tipo de juguete deseado. Al mostrar los juguetes, notamos que la información intrínseca, como el nombre del juguete, se comparte entre instancias similares, aligerando la carga de recursos.

### Conclusión

El Patrón Flyweight es una herramienta brillante cuando lidiamos con una gran cantidad de objetos similares. Al compartir la información intrínseca, logramos optimizar el uso de recursos y mejorar el rendimiento de nuestras aplicaciones.
