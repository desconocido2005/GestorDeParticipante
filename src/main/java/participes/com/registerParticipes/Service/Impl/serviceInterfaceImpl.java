package participes.com.registerParticipes.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import participes.com.registerParticipes.Model.modelParticipantes;
import participes.com.registerParticipes.Repository.repositoryParticipantes;
import participes.com.registerParticipes.Service.ServiceInterface;

import java.util.List;
import java.util.Optional;


@Service
public class serviceInterfaceImpl implements ServiceInterface {

    private final repositoryParticipantes repositoryParticipantes;

    @Autowired
    public serviceInterfaceImpl(repositoryParticipantes repositoryParticipantes){
        this.repositoryParticipantes = repositoryParticipantes;
    }

    @Override
    public List<modelParticipantes> findAll(){
        return repositoryParticipantes.findAll();
    }

    @Override
    public modelParticipantes save(modelParticipantes modelParticipantes) {
        return repositoryParticipantes.save(modelParticipantes);
    }

    @Override
    public modelParticipantes update(modelParticipantes modelParticipantes){
        Optional<modelParticipantes> existe =  repositoryParticipantes.findById(modelParticipantes.getId());
        if (existe.isPresent()) {
            return repositoryParticipantes.save(modelParticipantes);
        } else {
            throw new RuntimeException("Participante no encontrado con ID: " + modelParticipantes.getId());
        }
    }

    @Override
    public void deleteByID(Long id){
        repositoryParticipantes.deleteById(id);
    }

}
