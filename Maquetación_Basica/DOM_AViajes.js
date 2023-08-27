
let arrayInfo = [];
let infoObj;

function formulario()
{
    let nombrePerson = document.getElementById("imputName1").value;
    let origen_ = document.getElementById("imputName2").value;
    let destino_ = document.getElementById("imputName3").value;
    let numeroDePerson = document.getElementById("imputName4").value;
    let fecha_ = document.getElementById("imputName5").value;
    
    let info = {
        nombre: nombrePerson,
        origen: origen_,
        destino: destino_,
        cantidad: numeroDePerson,
        fecha: fecha_,
    }
    arrayInfo.push(info);
}

arrayInfo = arrayInfo;
 

function filtrar()
{
    let informacionFiltrada = document.getElementById("print");
    let arrFiltrado = arrayInfo.filter(
        function(value)
        {
           return value.destino.toUpperCase() == "CANARIAS" || value.destino.toUpperCase() == "MALLORCA" || value.destino.toUpperCase() == "GALICIA"
        }
    )
   arrFiltrado.forEach(item => {
    for(let cont in item)
    {
        informacionFiltrada.innerHTML += `<div class="divDeInner"><p class="deInner">${cont}: ${item[cont]}</p></div>`
    }
   })
}


/**Maqueta la Landing Page de una agencia de viaje, con una cabecera, una descripción de la
empresa, algunas tarjetas con los lugares más visitados o con ofertas y un formulario de
contacto con los campos (nombre, origen, destino, número de personas y fecha) y dos botones,
uno de ellos para solicitar información y el otra para hacer un filtrado. 

2. Sube la maquetación de la agencia a tu repositorio Git.

3. Escribir una función en JavaScript que recoja la información de los campos de texto en formato
JSON cada vez que se pulse el botón "solicitar información". Esta información se debe guardar en
un array.

4. Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos
muestre por consola la información de las solicitudes recibidas que tengan como destino
Canarias, Mallorca y Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
mayuscula o minuscula).

5. Modifica la función anterior para que ahora muestre esos datos en una en la landing page
maquetada anteriormente.

6. Sube ahora tu versión final de la agencia de viajes, con los cambios realizados en la parte de
maquetación y con el archivo .js*/

/**export class Imdb
{
    public peliculas:Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero: string)
    {
      let nuevaJSON = JSON.stringify(this.peliculas, null, 2);

      fs.writeFileSync(nombreFichero, nuevaJSON);
    };

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
          
        let archivoJSON = fs.readFileSync(nombreFichero, 'utf-8');
        
        let objNuevoJSON = JSON.parse(archivoJSON);

        let intaObjNuevoJSON = new Imdb(objNuevoJSON);
        console.log('Instancia creada:', intaObjNuevoJSON);
        return intaObjNuevoJSON;
    };
};
 */