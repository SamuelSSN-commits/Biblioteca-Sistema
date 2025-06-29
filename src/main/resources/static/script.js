const apiBaseUrl = "http://localhost:8081/livros";

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
    anoPublicacao: parseInt(document.getElementById("anoPublicacao").value),
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

    const textoErro = await resposta.text();

    if (resposta.ok) {
      alert("Livro cadastrado com sucesso!");
      document.querySelector("form").reset();
    } else {
      console.error("Erro na resposta do backend:", textoErro);
      if (textoErro.includes("ISBN")) {
        alert("Erro: ISBN já cadastrado ou inválido.");
      } else if (textoErro.includes("título") || textoErro.includes("titulo")) {
        alert("Erro: Título inválido.");
      } else {
        alert("Erro ao cadastrar livro.\n" + textoErro);
      }
    }
  } catch (erro) {
    console.error("Erro ao conectar com o backend:", erro);
    alert("Erro ao conectar com o backend.");
  }
}

async function listarLivros() {
  mostrarSecao("lista");
  const lista = document.getElementById("listaLivros");
  lista.innerHTML = "";

  try {
    const resposta = await fetch(apiBaseUrl);
    const livros = await resposta.json();

    if (livros.length === 0) {
      lista.innerHTML = "<li>Nenhum livro cadastrado.</li>";
      return;
    }

    livros.forEach(livro => {
      const li = document.createElement("li");
      li.innerHTML = `
        📘 <strong>${livro.titulo}</strong> - ${livro.autor} (${livro.anoPublicacao}) - ISBN: ${livro.isbn}
        <button onclick="deletarLivro(${livro.id})" class="btn-deletar">🗑 Deletar</button>
      `;
      lista.appendChild(li);
    });

  } catch (erro) {
    console.error("Erro ao buscar livros:", erro);
    alert("Erro ao buscar livros.");
  }
}

async function deletarLivro(id) {
  const confirmar = confirm("Tem certeza que deseja deletar este livro?");
  if (!confirmar) return;

  try {
    const resposta = await fetch(`${apiBaseUrl}/${id}`, {
      method: "DELETE"
    });

    if (resposta.ok) {
      alert("Livro deletado com sucesso!");
      listarLivros();
    } else {
      const textoErro = await resposta.text();
      console.error("Erro ao deletar:", textoErro);
      alert("Erro ao deletar o livro.");
    }
  } catch (erro) {
    console.error("Erro ao conectar com o backend:", erro);
    alert("Erro ao conectar com o backend.");
  }
}
