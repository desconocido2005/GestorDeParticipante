package participes.com.registerParticipes.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "participantes")
@AllArgsConstructor
@NoArgsConstructor
public class modelParticipantes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "nombre")
    private String nombre;

    @Column(name = "correo")
    private String correo;

    @Column(name = "equipo")
    private Integer equipo;

    @Column(name = "especialidad")
    private String especialidad;

    @Column(name = "nivel")
    private String nivel;

}

