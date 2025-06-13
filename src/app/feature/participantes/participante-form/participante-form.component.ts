import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PracticipanteService } from '../../../core/service/practicipante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Participante } from '../../../core/interface/participante';

@Component({
  selector: 'app-participante-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './participante-form.component.html',
  styleUrl: './participante-form.component.scss'
})
export class ParticipanteFormComponent implements OnInit{


  ngOnInit(): void {}

  @Input() participante: Participante = {
    nombre: '',
    correo: '',
    equipo: 0,
    especialidad: '',
    nivel: ''
  };

  @Output() saved = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  isEditing: boolean = false;

  constructor(private practicipanteService: PracticipanteService) {}

  saveParticipante(): void {
    if (!this.participante.nombre || !this.participante.correo) {
      alert('Nombre y correo son obligatorios');
      return;
    }

    if (this.isEditing && this.participante.id) {
      this.practicipanteService.update(this.participante).subscribe({
        next: () => {
          alert('Participante actualizado correctamente');
          this.updated.emit();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al actualizar participante:', err);
          alert('Error al actualizar participante');
        }
      });
    } else {
      this.practicipanteService.save(this.participante).subscribe({
        next: () => {
          alert('Participante guardado exitosamente');
          this.saved.emit();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al guardar participante:', err);
          alert('Error al guardar participante');
        }
      });
    }
  }

  resetForm(): void {
    this.participante = {
      nombre: '',
      correo: '',
      equipo: 0,
      especialidad: '',
      nivel: ''
    };
    this.isEditing = false;
  }

  setParticipanteForEdit(p: Participante): void {
    this.participante = { ...p };
    this.isEditing = true;
  }
}
