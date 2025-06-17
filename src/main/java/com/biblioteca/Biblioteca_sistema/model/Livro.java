package com.biblioteca.Biblioteca_sistema.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;

@Entity
@Table(name = "livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título não pode estar vazio.")
    @Size(max = 150, message = "O título deve ter no máximo 150 caracteres.")
    @Column(nullable = false, length = 150)
    private String titulo;

    @NotBlank(message = "O autor não pode estar vazio.")
    @Size(max = 100, message = "O nome do autor deve ter no máximo 100 caracteres.")
    @Column(nullable = false, length = 100)
    private String autor;

    @NotBlank(message = "O ISBN não pode estar vazio.")
    @Pattern(regexp = "^(97(8|9))?\\d{9}(\\d|X)$", message = "Formato de ISBN inválido.")
    @Column(nullable = false, unique = true, length = 13)
    private String isbn;

    @Min(value = 1450, message = "Ano de publicação inválido.")
    @Max(value = 2100, message = "Ano de publicação inválido.")
    @Column(nullable = false)
    private int anoPublicacao;

    @Column(nullable = false)
    private boolean disponivel;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public int getAnoPublicacao() {
        return anoPublicacao;
    }

    public void setAnoPublicacao(int anoPublicacao) {
        this.anoPublicacao = anoPublicacao;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    // toString() para debug
    @Override
    public String toString() {
        return "Livro{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", isbn='" + isbn + '\'' +
                ", anoPublicacao=" + anoPublicacao +
                ", disponivel=" + disponivel +
                '}';
    }
}
