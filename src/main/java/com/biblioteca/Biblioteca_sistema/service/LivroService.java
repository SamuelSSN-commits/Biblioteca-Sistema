package com.biblioteca.Biblioteca_sistema.service;

import com.biblioteca.Biblioteca_sistema.model.Livro;
import com.biblioteca.Biblioteca_sistema.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<Livro> findAll() {
        return livroRepository.findAll();
    }

    public Optional<Livro> findById(Long id) {
        return livroRepository.findById(id);
    }

    public Livro save(Livro livro) {
        Optional<Livro> livroExistente = livroRepository.findByIsbn(livro.getIsbn());
        if (livroExistente.isPresent()) {
            throw new RuntimeException("ISBN já cadastrado.");
        }
        return livroRepository.save(livro);
    }

    public Livro update(Long id, Livro livroAtualizado) {
        return livroRepository.findById(id).map(livro -> {
            livro.setTitulo(livroAtualizado.getTitulo());
            livro.setAutor(livroAtualizado.getAutor());
            livro.setIsbn(livroAtualizado.getIsbn());
            livro.setAnoPublicacao(livroAtualizado.getAnoPublicacao());
            livro.setDisponivel(livroAtualizado.isDisponivel());
            return livroRepository.save(livro);
        }).orElseThrow(() -> new RuntimeException("Livro não encontrado com id " + id));
    }

    public void deleteById(Long id) {
        livroRepository.deleteById(id);
    }
}
