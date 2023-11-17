import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService{

    @Autowired
    private UsuarioRepository UsuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {
        return UsuarioRepository.save(usuario);
    }
    
}