import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { ContactService } from '../services/contact.service';//importamos el servicio
import { ContactClass } from '../class/contact-class';//importamos la interfaz que es el modelo

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Output() idUpdate = new EventEmitter;//Decorador para enviar el id
  contactArray: ContactClass[] = [];//Inicializamos el array 

  constructor(private contact: ContactService ) { }//inicializar en el contructor el services
  
  deleteContact(_id:number){//eliminamos el registro
    this.contact.onDelete(_id);
  }
  getPosition(_id:number){//Mandamos el id del registro para cargar en el formulario
    this.idUpdate.emit(_id);//enviamos por pedio del decorador
    
  }
  ngOnInit(): void {
    this.contactArray = this.contact.getContact();//llenamos el array

  }

}
