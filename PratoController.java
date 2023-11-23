package br.com.example.Lefestin.controller;

import br.com.example.Lefestin.model.Prato;
import br.com.example.Lefestin.service.PratoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pratos")
public class PratoController {

    @Autowired
    private PratoService pratoService;

    @PostMapping("/adicionar")
    public ResponseEntity<Prato> adicionarPrato(@RequestBody Prato prato) {
        Prato novoPrato = pratoService.adicionarPrato(prato);
        return new ResponseEntity<>(novoPrato, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prato> obterPrato(@PathVariable Long id) {
        Prato prato = pratoService.obterPrato(id);
        if (prato != null) {
            return new ResponseEntity<>(prato, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<Prato>> listarPratos() {
        List<Prato> pratos = pratoService.listarPratos();
        return new ResponseEntity<>(pratos, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prato> atualizarPrato(@PathVariable Long id, @RequestBody Prato prato) {
        Prato pratoAtualizado = pratoService.atualizarPrato(id, prato);
        if (pratoAtualizado != null) {
            return new ResponseEntity<>(pratoAtualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
