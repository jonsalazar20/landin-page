import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: `./news-letter-component.html`,
  styleUrls: ['./news-letter.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsLetterComponent {
  newsletterForm!: FormGroup;
  sendSucces: boolean = false;

  constructor (private newsletterService : NewsletterService, private fb : FormBuilder) {
    this.newsletterForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], // Agregar validación de email
    });

    this.newsletterForm.valueChanges.subscribe(()=> {
    })
  }

  sendNewsLetter() : void {
    if (this.newsletterForm.invalid) {
      console.error('Por favor, complete los campos correctamente');
      return;
    }
    const nombre = this.newsletterForm.get('nombre')?.value;
    const correo = this.newsletterForm.get('correo')?.value;

    this.newsletterService.sendNewsLetter(nombre,correo)
      .subscribe(
        res => {
          console.log('NewsLetter Enviado' , res);
          this.sendSucces = true
          this.newsletterForm.reset();

        }
      )
  }


  }
