import { Component } from '@angular/core';

@Component({
    selector: 'app-my-component',
    templateUrl: '../HTML/my-component.html',
    styleUrls: ['../CSS/my-component.css']
})

export class MyComponent {
    Arr1: number [] = new Array();
    num = null;

    getSize() {
        this.num = parseFloat((<HTMLInputElement>document.getElementById('size')).value);
        for (let index = 0; index < this.num; index++) {
            this.Arr1.push(index);
        }
    }

    clean() {
        this.Arr1 = [];
    }

    changeColor(celda: HTMLTableCellElement) {
    if (celda.style.backgroundColor === 'black') {
        celda.style.backgroundColor = 'white';
    }

    else
            celda.style.backgroundColor = 'black';
    }


    // Descartados

    /*
    getSize() {
        this.Arr1 = new Array();
        this.Arr1.length = 0;
        this.num = parseFloat((<HTMLInputElement>document.getElementById('size')).value);
        for (let index = 0; index < this.num; index++) {
            this.Arr1.push(index);
        }
    }
     */

     /*
     generarTabla(size: number) {
        document.getElementById('tableroSection').innerHTML = '';
        // document.getElementById('tableroSection').className = 'table-responsive';
        const body = document.getElementsByTagName('section')[0];
        const tabla = document.createElement('table');
        for (let i = 0; i < size; i++) {
            // matriz[i]=new Array(3);
            const hilera = document.createElement('tr');
            for (let j = 0; j < size; j++) {
                const celda = document.createElement('td');
                celda.addEventListener('click', (e: Event) => this.changeColor(celda));
                celda.style.backgroundColor = 'black';
                celda.style.padding = '10px';
                // matriz[i][j]=celda;
                hilera.appendChild(celda);
            }
            tabla.appendChild(hilera); // agrega la hilera al final de la tabla (al final del elemento tblbody)
        }
        body.appendChild(tabla);
        tabla.setAttribute('border', '.1');
    }
     */
}
