const apiBaseUrl = "http://localhost:8081/livros"; // ou o link completo do seu backend na Render

function mostrarSecao(secao) {
  document.getElementById("cadastro").style.display = secao === "cadastro" ? "block" : "none";
  document.getElementById("lista").style.display = secao === "lista" ? "block" : "none";
}

function voltarInicio() {
  window.location.href = "index.html";
}

async function cadastrarLivro(event) {
  event.preventDefault();

  const livro = {
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    isbn: document.getElementById("isbn").value,
    anoPublicacao: document.getElementById("ano").value,
    disponivel: document.getElementById("disponivel").checked
  };

  try {
    const resposta = await fetch(apiBaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(livro)
    });

    if (resposta.ok) {
      alert("Livro cadastrado com sucesso!");
      document.querySelector("form").reset();
    } else {
      alert("Erro ao cadastrar livro.");
    }
  } catch (erro) {
    alert("Erro ao conectar com o backend.");
    console.error(erro);
  }
}

async function listarLivros() {
  mostrarSecao("lista");
  const lista = document.getElementById("listaLivros");
  lista.innerHTML = "";

  try {
    const resposta = await fetch(apiBaseUrl);
    const livros = await resposta.json();

    livros.forEach(livro => {
      const li = document.createElement("li");
      li.textContent = `📘 ${livro.titulo} - ${livro.autor} (${livro.anoPublicacao}) - ISBN: ${livro.isbn}`;
      lista.appendChild(li);
    });

  } catch (erro) {
    alert("Erro ao buscar livros.");
    console.error(erro);
  }
}
