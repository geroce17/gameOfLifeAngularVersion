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
    
    loopMode() { 
        setInterval(() => { this.play(); }, 10);
    }

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
                cont = this.scanCells(table, index, index2, this.num, right, down, left, up, dls, dli, drs, dri, cont);
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

    scanCells (table, r, c, size, right, down, left, up, dls, dli, drs, dri, cont) {
        if(size <= 2){
            if(r==0 && c==0)
            {
                right=table.rows[r].cells[c+1];
                down=table.rows[r+1].cells[c];
                dri=table.rows[r+1].cells[c+1];
            }
            else
            {
                if(r==0 && c==1)
                {
                    left=table.rows[r].cells[c-1];
                    down=table.rows[r+1].cells[c];
                    dli=table.rows[r+1].cells[c-1];
                }
                else
                {
                    if(r==1 && c==0)
                    {
                        up=table.rows[r-1].cells[c];
                        right=table.rows[r].cells[c+1];
                        drs=table.rows[r-1].cells[c+1];
                    }
                    else
                    {
                        if(r==1 && c==1)
                        {
                            up=table.rows[r-1].cells[c];
                            dls=table.rows[r-1].cells[c-1];
                            left=table.rows[r].cells[c-1];
                        }
                    }
                }
            }
        }
        else
        {
            if(r==0 && c==0)
            {
                right=table.rows[r].cells[c+1];
                down=table.rows[r+1].cells[c];
                dri=table.rows[r+1].cells[c+1];
            }
            else
            {
                if(r==0 && (c>0 && c<size-1))
                {
                    down=table.rows[r+1].cells[c];
                    right=table.rows[r].cells[c+1];
                    left=table.rows[r].cells[c-1];
                    dli=table.rows[r+1].cells[c-1];
                    dri=table.rows[r+1].cells[c+1];
                }
                else
                {
                    if(r==0 && c==size-1)
                    {
                        left=table.rows[r].cells[c-1];
                        down=table.rows[r+1].cells[c];
                        dli=table.rows[r+1].cells[c-1];
                    }
                    else
                    {
                        if((r>0 && r<size-1) && c==0)
                        {
                            right=table.rows[r].cells[c+1];
                            up=table.rows[r-1].cells[c];
                            down=table.rows[r+1].cells[c];
                            dri=table.rows[r+1].cells[c+1];
                            drs=table.rows[r-1].cells[c+1];
                        }
                        else
                        {
                            if(r==size-1 && c==0)
                            {
                                up=table.rows[r-1].cells[c];
                                right=table.rows[r].cells[c+1];
                                drs=table.rows[r-1].cells[c+1];
                            }
                            else
                            {
                                if(r==size-1 && (c>0 && c<size-1))
                                {
                                    up=table.rows[r-1].cells[c];
                                    right=table.rows[r].cells[c+1];
                                    left=table.rows[r].cells[c-1];
                                    dls=table.rows[r-1].cells[c-1];
                                    drs=table.rows[r-1].cells[c+1];
                                }
                                else
                                {
                                    if(r==size-1 && c==size-1)
                                    {
                                        up=table.rows[r-1].cells[c];
                                        dls=table.rows[r-1].cells[c-1];
                                        left=table.rows[r].cells[c-1];
                                    }
                                    else
                                    {
                                        if((r>0 && r<size-1) && c==size-1)
                                        {
                                            left=table.rows[r].cells[c-1];
                                            down=table.rows[r+1].cells[c];
                                            up=table.rows[r-1].cells[c];
                                            dli=table.rows[r+1].cells[c-1];
                                            dls=table.rows[r-1].cells[c-1];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if((r>0 && r<size-1) && (c>0 && c<size-1))
        {
            up=table.rows[r-1].cells[c];
            down=table.rows[r+1].cells[c];
            right=table.rows[r].cells[c+1];
            left=table.rows[r].cells[c-1];
            dls=table.rows[r-1].cells[c-1];
            dli=table.rows[r+1].cells[c-1];
            drs=table.rows[r-1].cells[c+1];
            dri=table.rows[r+1].cells[c+1];
        }
        
        if(up!=undefined && up.style.backgroundColor=="white")
            cont++;
        if(down!=undefined && down.style.backgroundColor=="white")
            cont++;
        if(left!=undefined && left.style.backgroundColor=="white")
            cont++;
        if(right!=undefined && right.style.backgroundColor=="white")
            cont++;
        if(dls!=undefined && dls.style.backgroundColor=="white")
            cont++;
        if(dli!=undefined && dli.style.backgroundColor=="white")
            cont++;
        if(drs!=undefined && drs.style.backgroundColor=="white")
            cont++;
        if(dri!=undefined && dri.style.backgroundColor=="white")
            cont++;
        return cont;
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
    }*/

