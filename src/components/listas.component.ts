import { Component, Input} from '@angular/core';
import { DeseosService } from '../providers/deseos.service';
import { Lista } from '../models/lista.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html',
})
export class ListasComponent    {
    @Input() terminada: boolean = false;
    constructor( public deseosService: DeseosService, private navCtrl: NavController,
     private alerCtrl: AlertController) { }
    listaSeleccionada(lista: Lista) {
        this.navCtrl.push(AgregarPage, { 
            titulo: lista.titulo,
            lista: lista
        });
    }
    borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
    }
    editarLista(lista: Lista,item: ItemSliding){
        item.close();
        const alerta = this.alerCtrl.create({
            title: 'Editar Nombre',
            message: 'Editar el nombre de la  lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons:[{
                text: 'Cancelar'},{
               text: 'Guardar',
                handler: (data) => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    console.log(data);
                    lista.titulo = data.titulo;
                    this.deseosService.guardarStorage();
                }
            }]
        });
        alerta.present();  
    }
}
