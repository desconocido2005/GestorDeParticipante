package participes.com.registerParticipes.Service;

import participes.com.registerParticipes.Model.modelParticipantes;

import java.util.List;

public interface ServiceInterface {
    List<modelParticipantes> findAll();
    modelParticipantes save (modelParticipantes modelParticipantes);
    modelParticipantes update(modelParticipantes modelParticipantes);
    void  deleteByID(Long id);
}
