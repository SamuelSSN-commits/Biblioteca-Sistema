package com.biblioteca.Biblioteca_sistema.controller;

import com.biblioteca.Biblioteca_sistema.model.Livro;
import com.biblioteca.Biblioteca_sistema.service.LivroService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public List<Livro> listarLivros() {
        return livroService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> buscarPorId(@PathVariable Long id) {
        return livroService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Livro> adicionarLivro(@Valid @RequestBody Livro livro) {
        Livro salvo = livroService.save(livro);
        return ResponseEntity.ok(salvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable Long id, @Valid @RequestBody Livro livroAtualizado) {
        try {
            Livro atualizado = livroService.update(id, livroAtualizado);
            return ResponseEntity.ok(atualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable Long id) {
        livroService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
