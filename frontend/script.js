const apiUrl = "http://localhost:8081/livros";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("livroForm");
  const listaLivros = document.getElementById("listaLivros");

  // Carrega livros ao iniciar
  carregarLivros();

  // Enviar formulário
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const livro = {
      titulo: document.getElementById("titulo").value,
      autor: document.getElementById("autor").value,
      anoPublicacao: document.getElementById("anoPublicacao").value,
      isbn: document.getElementById("isbn").value,
      disponivel: document.getElementById("disponivel").value === "true"
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(livro)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar o livro.");
      }

      form.reset();
      carregarLivros();
    } catch (error) {
      alert("Erro: " + error.message);
    }
  });

  // Função para carregar os livros
  async function carregarLivros() {
    listaLivros.innerHTML = "<p>Carregando...</p>";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Erro ao buscar livros");

      const livros = await response.json();

      if (livros.length === 0) {
        listaLivros.innerHTML = "<p>Nenhum livro cadastrado ainda.</p>";
        return;
      }

      const ul = document.createElement("ul");
      livros.forEach(livro => {
        const li = document.createElement("li");
        li.textContent = `${livro.titulo} - ${livro.autor} (${livro.anoPublicacao}) [ISBN: ${livro.isbn}] - ${livro.disponivel ? "Disponível" : "Indisponível"}`;
        ul.appendChild(li);
      });

      listaLivros.innerHTML = "";
      listaLivros.appendChild(ul);

    } catch (error) {
      listaLivros.innerHTML = "<p>Erro ao carregar os livros.</p>";
    }
  }
});
