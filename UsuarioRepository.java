package br.com.example.Lefestin.repository;

import br.com.example.Lefestin.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Você pode adicionar métodos de consulta personalizados, se necessário
}
