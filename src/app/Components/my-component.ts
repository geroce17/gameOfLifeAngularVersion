import { Component } from '@angular/core';
import { arrayObj } from './arrayObj';

@Component({
    selector: 'app-my-component',
    templateUrl: '../HTML/my-component.html',
    styleUrls: ['../CSS/my-component.css']
})

export class MyComponent {
    arr;
    num = null;

    changeColor(celda: HTMLTableCellElement) {
        if (celda.style.backgroundColor === 'black') {
            celda.style.backgroundColor = 'white';
        }

        else
            celda.style.backgroundColor = 'black';
    }

    generateTable() {
        this.arr = [];
        this.num = parseFloat((<HTMLInputElement>document.getElementById('size')).value);
        for (let index = 0; index < this.num; index++) {
            this.arr.push(index);
        }
    }

    play() {
        let el, up, down, right, left, dls, dli, drs, dri, val, antEl, antVal, cont;
        let table = <HTMLTableElement>document.getElementById('MyTable');
        let asignRes = [], asignKill = [];
        for (let index = 0; index < this.num; index++) {
            for (let index2 = 0; index2 < this.num; index2++) {
                el = table.rows[index].cells[index2];
                val = false;
                cont = 0;
                dls = dli = drs = dri = undefined;
                up = down = left = right = undefined;
                cont = escanearCuadros(index, index2, this.num, down, left, up, dls, dli, drs, dri, cont);
                if(cont == 3)
                {
                    val = true;
                    asignRes.push(el);
                }
                if(cont<2 || cont>3){
                    asignKill.push(el);
                }
            }
        }
        this.reviveCells(asignRes);
        this.removeCells(asignKill);
    }
    reviveCells(asignRes) {
        for(let i = asignRes.length - 1; i >= 0; i--)
        asignRes[i].style.backgroundColor = 'white';
    }

    removeCells(asignKill) {
        for(let i = asignKill.length - 1; i >= 0; i--)
        asignKill[i].style.backgroundColor = 'black';
    }
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
