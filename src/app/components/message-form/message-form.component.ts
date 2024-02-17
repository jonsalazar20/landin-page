import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms'
import { DoctorsService } from 'src/app/services/doctors.service';
import { MesaageService } from 'src/app/services/mesaage.service';
import { Doctors } from '../../interfaces/doctors';

@Component({
  selector: 'app-message-form',
  templateUrl: `../message-form/message-form.component.html`,
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent {
  messageForm : FormGroup ;
  doctors : Doctors [] = []
  sendSucces: boolean = false;


  constructor (
    private formBuilder : FormBuilder,
    private doctorsService : DoctorsService,
    private mesaageService : MesaageService
  ) {
      this.messageForm = this.formBuilder.group ({
        nombre: ['', Validators.required],
        telefono: ['', Validators.required],
        fecha: ['', Validators.required],
        doctor: ['', Validators.required],
        mensaje: ['', Validators.required],
      })
    this.getDoctors()

    }

    getDoctors () {
      this.doctorsService.getDoctors().subscribe(
        (res)  => {
          this.doctors = res.list
        }
      )
    }

    sendMessage () {
      if(this.messageForm.valid){
        const {nombre, telefono,fecha,doctor,mensaje} = this.messageForm.value
        this.mesaageService.sendMessage(nombre, telefono,fecha,doctor,mensaje)
          .subscribe(
            res => {
              console.log('Mensaje Enviado', res);
              this.sendSucces = true
              this.messageForm.reset()

            }
          )
      }
      console.log(this.messageForm.value);

    }
 }
