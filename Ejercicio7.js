class Helper {
    constructor() {

    }
    show(elem) {
        $(elem).show();
    }
    hide(elem) {
        $(elem).hide();
    }
    showFirst(elem) {
        $(elem).first().show();
    }
    hideFirst(elem) {
        $(elem).first().hide();
    }

    modify(elem, newText) {
        $(elem).append(newText);
    }

    removeAll(elem) {
        $(elem).remove();
    }

    addNew(elem, text) {
        $(elem).before(text);
    }

    analizarElementos(elemWherePrint) {        
        $('*', document.body).each(function() {            
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"
            + etiquetaPadre + "> elemento: <" + $(this).get(0).tagName +"> valor : "));
        });
    }

    sumarFilasYColumnasTabla() {
        var nFilas = 0;
        var nColumnas = 0;

        $("table tr").each(function() {
            nFilas += 1;
        });

        $("table tr:first-of-type td").each(function() {
            nColumnas += 1;
        });

        
        $("table").after("Esta tabla tiene " + nFilas + " filas y " + nColumnas + " columnas.");
    }
}

var helper = new Helper();