import javax.persistence.Entidy;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.id

@Entidy
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTIDY)
    private Long id;
    private String Nome;
    private String email;
    private Steing senha;
}