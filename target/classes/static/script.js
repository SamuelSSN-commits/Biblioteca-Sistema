function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  if (id === 'lista') {
    listarLivros();
  }
}

function cadastrarLivro() {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const isbn = document.getElementById('isbn').value;

  if (!titulo || !autor || !isbn) {
    alert('Preencha todos os campos!');
    return;
  }

  fetch('/livros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, autor, isbn })
  }).then(() => {
    alert('Livro cadastrado com sucesso!');
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('isbn').value = '';
    mostrarSecao('lista');
  }).catch(err => {
    alert('Erro ao cadastrar livro.');
    console.error(err);
  });
}

function listarLivros() {
  fetch('/livros')
    .then(res => res.json())
    .then(livros => {
      window.todosLivros = livros;
      mostrarLivros(livros);
    });
}

function mostrarLivros(livros) {
  const livrosDiv = document.getElementById('livros');
  livrosDiv.innerHTML = '';
  livros.forEach(livro => {
    livrosDiv.innerHTML += `<p><strong>${livro.titulo}</strong> — ${livro.autor} (${livro.isbn})</p>`;
  });
}

function filtrarLivros() {
  const termo = document.getElementById('pesquisa').value.toLowerCase();
  const filtrados = window.todosLivros.filter(livro => livro.titulo.toLowerCase().includes(termo));
  mostrarLivros(filtrados);
}
