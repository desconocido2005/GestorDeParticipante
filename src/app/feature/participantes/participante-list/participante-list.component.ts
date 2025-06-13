import { PracticipanteService } from './../../../core/service/practicipante.service';
import { Participante } from './../../../core/interface/participante';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipanteFormComponent } from '../participante-form/participante-form.component';

@Component({
  selector: 'app-participante-list',
  standalone: true,
  imports: [CommonModule, ParticipanteFormComponent],
  templateUrl: './participante-list.component.html',
  styleUrl: './participante-list.component.scss'
})
export class ParticipanteListComponent implements OnInit {


  participantes: Participante[] = [];

  @ViewChild(ParticipanteFormComponent) formComponent!: ParticipanteFormComponent;

  constructor(private participanteService: PracticipanteService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.participanteService.findAll().subscribe({
      next: (data) => {
        this.participantes = data;
      },
      error: (err) => {
        console.error('Error al obtener participantes:', err);
      }
    });
  }

  editParticipante(participante: Participante): void {
    this.formComponent.setParticipanteForEdit(participante);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteParticipante(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este participante?')) {
      this.participanteService.delete(id).subscribe({
        next: () => {
          this.getAll();
        },
        error: (err) => {
          console.error('Error al eliminar participante:', err);
        }
      });
    }
  }
}
