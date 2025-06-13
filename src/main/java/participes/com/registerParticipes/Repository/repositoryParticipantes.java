package participes.com.registerParticipes.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import participes.com.registerParticipes.Model.modelParticipantes;

public interface repositoryParticipantes extends JpaRepository<modelParticipantes, Long> {
}
