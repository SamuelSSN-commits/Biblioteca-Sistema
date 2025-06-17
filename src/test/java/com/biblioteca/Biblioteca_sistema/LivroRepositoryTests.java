package com.biblioteca.Biblioteca_sistema;

import com.biblioteca.Biblioteca_sistema.model.Livro;
import com.biblioteca.Biblioteca_sistema.repository.LivroRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest  // Esta anotação carrega o contexto completo do Spring Boot para os testes
@ActiveProfiles("test")  // Especifica que o perfil de testes será usado (lembre-se de ter o arquivo application-test.properties ou similar)
public class LivroRepositoryTests {

    @Autowired
    private LivroRepository livroRepository;

    @Test
    public void testSaveLivro() {
        Livro livro = new Livro();
        livro.setTitulo("Livro Teste");
        livro.setAutor("Autor Teste");
        livro.setIsbn("9781234567897");  // ISBN válido
        livro.setAnoPublicacao(2023);
        livro.setDisponivel(true);

        Livro salvo = livroRepository.save(livro);

        assertThat(salvo).isNotNull();
        assertThat(salvo.getId()).isGreaterThan(0);
        assertThat(salvo.getTitulo()).isEqualTo("Livro Teste");
    }
}
