const display = document.querySelector ('#display');
const btn = document.querySelectorAll ('.btn');
const historyContainer = document.querySelector('#history');

btn.forEach (button => {
    button.addEventListener("click", () => {
        const buttons = button.textContent;

        if (button.id === "clearHistory") {
            // Limpiar el History
            historyContainer.textContent = "";
            return;
        }

        // === tres iguales Significa que es =    y entre las "" se coloca el id
        if (button.id === "c") {
            // Limpiar el display
            display.textContent = "0";
            return;
        }

        // slice toma dos numeros, el primero la posicion en la que queremos arrancar y el segundo desde donde empieza a borrar.
        if (button.id === "btnDelete") {
            // Borrar un dígito
            // Para que no quede sin numero al terminar de borrar todos los digitos y se reemplace por 0 apenas borra el ultimo digito.
            // || siginifica o
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice (0, -1);
            }
            return;
        }

        // eval lo que hace es evaluar un conjunto de strings que tenga operaciones matematicas
        if (button.id === "equal") {
            try {
            // Reemplazar 'x' por '*' antes de evaluar la expresión               
                // replace sustituye una letra. 
                const replace = display.textContent.replace(/x/g, '*'); // Reemplazar todas las instancias de 'x' con '*'
                const operation = display.textContent;
                display.textContent = eval(replace); // Evaluar la expresión modificada

                // Agregar al historial
                const historyEntry = `${operation} = ${display.textContent}` ;
                const historyItem = document.createElement('div');
                historyItem.textContent = historyEntry;
                historyContainer.appendChild(historyItem);

                // Restablecer display a "0" después de agregar al historial               
                display.textContent = "0"

            } catch (error) {
                display.textContent = "Error!";
                
            }
            return;
        }

        // Reemplazar '0' o 'Error!' con el número presionado
        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = buttons;
        } else {
        // Agregar números al final y concatenar los numeros.
            display.textContent += buttons;
        }

    })
})
