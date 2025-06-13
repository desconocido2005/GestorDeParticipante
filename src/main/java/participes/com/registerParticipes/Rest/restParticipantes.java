package participes.com.registerParticipes.Rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import participes.com.registerParticipes.Model.modelParticipantes;
import participes.com.registerParticipes.Service.ServiceInterface;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/participantes")

public class restParticipantes {

    private final ServiceInterface  serviceInterface;

    @Autowired
    public restParticipantes(ServiceInterface serviceInterface) {
        this.serviceInterface = serviceInterface;
    }


    @GetMapping
    public List<modelParticipantes> findAll(){
        return serviceInterface.findAll();
    }

    @PostMapping("/save")
    public modelParticipantes save(@RequestBody modelParticipantes modelParticipantes){
        return serviceInterface.save(modelParticipantes);
    }

    @PutMapping("/update")
    public modelParticipantes update(@RequestBody modelParticipantes modelParticipantes){
        return serviceInterface.update(modelParticipantes);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteByID(@PathVariable Long id){
        serviceInterface.deleteByID(id);
    }

}
