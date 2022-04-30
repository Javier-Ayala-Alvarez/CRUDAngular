import { Injectable } from '@angular/core';
import { ContactClass } from '../class/contact-class';//importamos la interfas donde esta alojado nuestro modelo


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactArray: ContactClass[]=[  ];//Creamos nuestro array

  constructor() { }

  getContact(){//Estraer todo el array
    return this.contactArray;
  }
  getOneContact(_id:number){//Estraer solo un registro el array
    return this.contactArray.find(x => x.id === _id);//Selecciona y elimina
  }
  onSubmit(contacts : ContactClass) { //Agrega y Modifica
    const index = this.contactArray.findIndex(x => x.id === contacts.id);//Buscamos el id del registro
    if(index === -1){//si no lo encuentra devuelve -1;
      this.contactArray.push(contacts);//Agregamos un nuevo registro  
    }else{
      this.onUpdate(contacts);//llamamos la funcion modificar
    } 
  }
  onDelete(_id:number) {
    if (confirm('you want to delete?')) {//Confirmacion si desea eliminar
      this.contactArray.splice(_id,1);//Elimina el id
    }

  }
  onUpdate(contact: ContactClass) {//funcion para modificar
    const index = this.contactArray.findIndex(x => x.id === contact.id);//Buscamos el id del registro
    this.contactArray[index] = contact;//Modifica el array
  
  }
}
