# Skill Alexa con ChatGPT

Este repositorio contiene um ejemplo de como usar ChatGPT para crear una Skill para Alexa con TypeScrypt.

## Como funciona

El código permite crear una skill para Alexa en pocos pasos y es completamente funcional. Se usan funciones lambda personalizadas.  
El código establece una conexión con la API ChatGPT de OpenAI para enviar las preguntas formuladas por Alexa al modelo correspondiente. Una vez procesadas, las respuestas son enviadas de vuelta a Alexa y presentadas al usuario como respuesta a su consulta.

## Pasos previos
Es necesario crear una función Lambda y una skill básica siguiendo los pasos que se indican a continuación. No importa el contenido ya que se va a sobreescribir con nuestra skill y nuestro código lambda <br> 
[Crear una función Lambda](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)<br>
[Crear una skill Básica](https://developer.amazon.com/en-US/docs/alexa/devconsole/create-a-skill-and-choose-the-interaction-model.html)<br>
[Instalar y configurar ASK Cli](https://developer.amazon.com/en-US/docs/alexa/smapi/quick-start-alexa-skills-kit-command-line-interface.html)<br>

Una vez creada la función Lambda y creada la skill, vamos a necesitar modificar los ficheros de configuración:
 - en skill.json cambiar la uri de custom api endpoint por la uri de la función Lambda creada en el paso anterior
 - renombrar ask-states.dist.json en ask-states.json y cambiar los valores de la función lambda y de skillId
 - renombrar skill.dist.json en skill.json y cambiar el valor del endpoint para que apunte al lambda que acabamos de crear. 
## Como ejecutarlo
Este ejemplo se desarrolló utilizando la CLI de Amazon ASK. Para ejecutarlo, deberás instalar ASK CLI y configurar tu cuenta de desarrollador de Amazon.
Una vez configurada, simplemente ejecute el siguiente comando en la terminal:

```bash
yarn deploy 
```


### Consideraciones finales

Este es sólo un ejemplo básico de cómo utilizar ChatGPT con Alexa. Puedes ampliar esta implementación para crear habilidades más complejas y personalizadas. ¡Que lo disfrutes!
