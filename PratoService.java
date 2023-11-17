import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PratoService {

    @Autowired
    private PratoRepository pratoRepository;

    public Prato adicionarPrato(Prato prato) {
        return pratoRepository.save(prato)
    }
}