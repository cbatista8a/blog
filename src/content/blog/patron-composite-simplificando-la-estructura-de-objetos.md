---
title: "Patrón Composite: Simplificando la Estructura de Objetos"
excerpt: 'Descubre el poder del Patrón Composite en el desarrollo de software. Simplifica la manipulación de objetos individuales y compuestos, construyendo estructuras de árbol eficientes.'
publishDate: 'Dec 1 2023'
featureImage:
  src: '/posts/composite-pattern.jpg'
  alt:  Patron Composite
  caption: 'https://gustavopeiretti.com/wp-content/uploads/2019/04/composite-patter-tree-java.jpg'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/composite-pattern.jpg'
---

El **Patrón Composite** es una solución ingeniosa para tratar estructuras de objetos de manera uniforme. Exploraremos cómo este patrón permite componer objetos en estructuras de árbol para representar jerarquías de manera eficiente y cómo facilita el trabajo con objetos individuales y compuestos de manera transparente.

## Introducción

En el mundo del desarrollo de software, a menudo enfrentamos la necesidad de manejar colecciones de objetos, ya sea para representar elementos individuales o agruparlos en estructuras más complejas. El Patrón Composite ofrece una solución elegante para tratar ambos casos de manera uniforme.

## Funcionamiento del Patrón Composite

El Patrón Composite se basa en dos clases principales: **Componente** y **Compuesto**. Los Componentes pueden ser tanto objetos individuales como Compuestos, que a su vez pueden contener más Componentes.

## Ejemplo Práctico en PHP

Vamos a sumergirnos en un ejemplo práctico en PHP que ilustra cómo implementar el Patrón Composite.

```php
// Implementación de las clases Componente y Compuesto

interface Componente {
    public function operacion(): string;
}

class ObjetoHoja implements Componente {
    private $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function operacion(): string {
        return "ObjetoHoja: " . $this->nombre;
    }
}

class ObjetoCompuesto implements Componente {
    private $componentes = [];

    public function agregar(Componente $componente) {
        $this->componentes[] = $componente;
    }

    public function operacion(): string {
        $resultado = "ObjetoCompuesto:";
        foreach ($this->componentes as $componente) {
            $resultado .= "\n" . $componente->operacion();
        }
        return $resultado;
    }
}

// Uso del Patrón Composite

$hoja1 = new ObjetoHoja("Hoja 1");
$hoja2 = new ObjetoHoja("Hoja 2");

$compuesto1 = new ObjetoCompuesto();
$compuesto1->agregar($hoja1);
$compuesto1->agregar($hoja2);

$hoja3 = new ObjetoHoja("Hoja 3");

$compuesto2 = new ObjetoCompuesto();
$compuesto2->agregar($hoja3);
$compuesto2->agregar($compuesto1);

echo $compuesto2->operacion();
```

Este patrón podria tambien utilizarse por ejemplo en la gestion de inventarios o en un E-commerce para
manejar distintos tipos de productos(digitales, fisicos, con variantes, etc..), incluyendo los famosos Bundles(paquetes de productos), de esta forma seria mucho mas facil preguntar por el precio para obtener el total de un orden.

### Conclusiones

El Patrón Composite proporciona una herramienta poderosa para trabajar con estructuras de objetos complejas y simplifica la gestión de elementos individuales y compuestos de manera coherente. En nuestro próximo artículo, exploraremos más patrones de diseño para enriquecer tus habilidades en el desarrollo de software.
