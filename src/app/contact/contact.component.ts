import { Component, OnInit,Input } from '@angular/core';
import { ContactClass } from '../class/contact-class';
import { ContactService } from '../services/contact.service';//Importamos el servicio

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Myid = 1;
  @Input() idUpdate:string;
  myContact :any;
  newContact = {//Agregamos este objeto
    id: this.Myid,
    name:'',
    surname:'',
    phone:'',
    email:'',
    male:false,
    comment:''
  }
  constructor(private contact: ContactService) {//inicializar en el contructor el services
    this.idUpdate ='';
   }

  ngOnInit(): void {    
  }
  addContact(){
    this.contact.onSubmit(this.newContact);//enviamos la data al servicio
    this.Myid++;//Aumentamos el id
    this.newContact = {//Basiamos el objeto
      id: this.Myid ,
      name:' ',
      surname:' ',
      phone:' ',
      email:' ',
      male:false,
      comment:''
    }
  }
  getId($event:any){
    this.myContact= this.contact.getOneContact($event);
    this.newContact = this.myContact;
    console.log(this.newContact);
  }

  

}
