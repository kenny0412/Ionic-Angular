import { Component} from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendiente',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {
    constructor( public deseosService: DeseosService, private navCtrl: NavController, private alertCtrl: AlertController) { }
   
    agregarLista() {
     const alerta = this.alertCtrl.create({
         title: 'Nueva lista',
         message: 'Nombre de la nueva lista que desea',
         inputs: [{
             name: 'titulo',
             placeholder: 'Nombre de la lista'
         }],
         buttons:[{
             text: 'Cancelar'},{
            text: 'Agregar',
             handler: (data) => {
                 if (data.titulo.length === 0) {
                     return;
                 }
                 console.log(data);
                 this.navCtrl.push(AgregarPage,{titulo: data.titulo});

             }
         }]
     });
     alerta.present();
    }

}
