---
title: "El Patrón Chain of Responsibility: Pasando la Antorcha"
excerpt: "Descubre cómo el patrón de diseño Chain of Responsibility puede mejorar la organización y flexibilidad de tu código. Aprende a delegar responsabilidades y a mantener un flujo claro de manejo de solicitudes en este artículo. ¡No te lo pierdas!"
publishDate: 'Dec 18 2023'
featureImage:
  src: '/posts/chain-of-responsibility.png'
  alt:  Developers
  caption: 'https://refactoring.guru/images/patterns/content/chain-of-responsibility/chain-of-responsibility-comic-1-es-2x.png'
isFeatured: false
draft: false
seo:
  image:
    src: '/posts/chain-of-responsibility.png'
---

¡Saludos a todos los entusiastas del desarrollo! Esta semana retomamos nuestro viaje a través de los patrones de diseño, hoy veremos especificamente el patrón "Chain of Responsibility" (Cadena de Responsabilidad). Este patrón, como su nombre sugiere, se centra en la transmisión de responsabilidades de manera encadenada. ¿Curioso? ¡Vamos a explorarlo!

## Introducción al Chain of Responsibility

El patrón _Chain of Responsibility_ es una estrategia ingeniosa que nos permite desacoplar remitentes de destinatarios. Imagina una cadena de manejo de solicitudes, donde cada eslabón decide si puede manejar la solicitud o si debe pasarla al siguiente eslabón de la cadena. Esta flexibilidad facilita la incorporación y el ajuste dinámico de comportamientos sin comprometer la simplicidad del código.

## Funcionamiento en Acción

Para comprender mejor el funcionamiento, imaginemos un sistema de atención al cliente donde cada agente tiene habilidades específicas. Si el primer agente no puede resolver la solicitud, la pasa al siguiente en la cadena. Este proceso continúa hasta que la solicitud se maneja o se llega al final de la cadena.

```php
<?php

abstract class Manejador
{
    protected $sucesor;

    public function __construct($sucesor = null)
    {
        $this->sucesor = $sucesor;
    }

    public function manejarSolicitud($solicitud)
    {
        if ($this->sucesor) {
            $this->sucesor->manejarSolicitud($solicitud);
        }
    }
}

class ManejadorConcretoA extends Manejador
{
    public function manejarSolicitud($solicitud)
    {
        if ($solicitud === "TipoA") {
            echo "ManejadorConcretoA maneja la solicitud TipoA.\n";
        } else {
            parent::manejarSolicitud($solicitud);
        }
    }
}

class ManejadorConcretoB extends Manejador
{
    public function manejarSolicitud($solicitud)
    {
        if ($solicitud === "TipoB") {
            echo "ManejadorConcretoB maneja la solicitud TipoB.\n";
        } else {
            parent::manejarSolicitud($solicitud);
        }
    }
}

// Uso del patrón
$manejadorA = new ManejadorConcretoA();
$manejadorB = new ManejadorConcretoB($manejadorA);

$manejadorB->manejarSolicitud("TipoA");
$manejadorB->manejarSolicitud("TipoB");

?>
```

### Conclusión

El Chain of Responsibility se revela como un aliado poderoso cuando la lógica de manejo de solicitudes se puede dividir en eslabones interconectados. Al adoptar este patrón, promovemos la flexibilidad y la extensibilidad en nuestro código.
