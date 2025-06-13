import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticipanteListComponent } from "./feature/participantes/participante-list/participante-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticipanteListComponent, ParticipanteListComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'registroDeParticipantes';
}
