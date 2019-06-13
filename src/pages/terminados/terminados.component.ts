import { Component} from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'terminados-page',
    templateUrl: 'terminados.component.html',
})
export class TerminadosPage{

    constructor( public deseosService: DeseosService) { }

}
