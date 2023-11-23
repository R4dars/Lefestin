package br.com.example.Lefestin.service;

import br.com.example.Lefestin.model.Prato;
import br.com.example.Lefestin.repository.PratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PratoService {

    @Autowired
    private PratoRepository pratoRepository;

    public Prato adicionarPrato(Prato prato) {
        return pratoRepository.save(prato);
    }

    public Prato obterPrato(Long id) {
        Optional<Prato> prato = pratoRepository.findById(id);
        return prato.orElse(null);
    }

    public List<Prato> listarPratos() {
        return pratoRepository.findAll();
    }

    public Prato atualizarPrato(Long id, Prato novoPrato) {
        Optional<Prato> pratoExistente = pratoRepository.findById(id);

        if (pratoExistente.isPresent()) {
            Prato prato = pratoExistente.get();

            // Atualizar apenas campos necessários
            prato.setNome(novoPrato.getNome());
            prato.setCategoria(novoPrato.getCategoria());
            prato.setReceita(novoPrato.getReceita());
            prato.setImagemBase64(novoPrato.getImagemBase64());

            return pratoRepository.save(prato);
        } else {
            return null; // Prato não encontrado
        }
    }
}
