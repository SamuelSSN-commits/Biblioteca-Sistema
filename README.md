# 📚 Biblioteca Virtual

Sistema Web completo para gerenciamento de uma biblioteca digital.
Desenvolvido com uma interface escura, moderna, interativa e animada,
oferecendo ao estudante ou bibliotecário um ambiente ideal para cadastro,
consulta e exclusão de livros.

> ⚠️ **ATENÇÃO:** Este projeto utiliza um banco de dados gratuito hospedado na plataforma **Render**, cujo prazo de expiração está previsto para o **dia 14 de julho de 2025**. Após essa data, o sistema não irá mais persistir dados online sem uma nova configuração de banco.

---

## 🌟 Funcionalidades

- Tela inicial com animação (GIF) de biblioteca
- Cadastro de livros com validação completa:
  - ISBN único
  - Título, Autor e Ano obrigatórios
  - Limites de caracteres e validação de formato
- Visualização de livros cadastrados
- Exclusão de livros com um clique
- Interface com modo escuro, blur e cursor customizado

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3 com blur, dark mode e animações
- JavaScript puro

### Backend
- Java 17
- Spring Boot 3.1.0
- Spring Data JPA + Hibernate Validator
- PostgreSQL na nuvem (Render)

---

## 🌐 Estrutura de Pastas

```
Biblioteca-Sistema
├── src
│   ├── main
│   │   ├── java/com/biblioteca/Biblioteca_sistema
│   │   │   ├── model
│   │   │   ├── repository
│   │   │   ├── service
│   │   │   └── controller
│   │   └── resources
│   │       ├── static (HTML, CSS, JS)
│   │       └── application.properties
└── pom.xml
```

---

## 🔗 Regras de Validação

- ISBN com **13 dígitos** (ex: `9781234567897`)
- É **inválido** cadastrar o mesmo ISBN mais de uma vez
- Título: até **150 caracteres**
- Autor: até **100 caracteres**
- Ano de publicação entre **1450** e **2100**
- Todos os campos obrigatórios

---

## 🚀 Como Executar

### 1. Backend (Java + Spring)
```bash
mvn spring-boot:run
```

### 2. Frontend
Os arquivos `index.html`, `biblioteca.html`, `style.css` e `script.js` devem estar na pasta:
```
src/main/resources/static
```

### 3. Acesso local
Abra no navegador: [http://localhost:8081](http://localhost:8081)

---

## 🏠 Deploy (Render + Gitpod)

- Banco de dados online: **Render PostgreSQL**
- Backend: acessível por links `https://8081-<usuário>.gitpod.io/livros`
- Frontend: dentro de `static` no Spring Boot

> ⚠️ **Lembrete:** O banco Render é gratuito e expira **em 14/07/2025**.

---

## 👤 Autor

**Samuel Nunes**  
Projeto desenvolvido como parte de estudos e práticas em desenvolvimento web fullstack com foco em soluções educacionais.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo, modificá-lo e contribuir!
