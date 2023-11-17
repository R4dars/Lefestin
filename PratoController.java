import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pratos")
public class PratoController {

    @Autowired
    private PratoService PratoService;

    @PostMapping("/adicionar")
    public ResponseEntity<?> adicionarPrato(@ResquestBody Prato prato) {
        Prato novoPrato = pratoService.adicionarPrato(prato);
        return new ResponseEntity<>(novoPrato, HttpStatus.CREATED)
    }
}