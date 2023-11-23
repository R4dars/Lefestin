package br.com.example.Lefestin.repository;

import br.com.example.Lefestin.model.Prato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PratoRepository extends JpaRepository<Prato, Long> {
    // Você pode adicionar métodos de consulta personalizados, se necessário
}
