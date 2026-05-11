const express = require('express');
const app = express();
const PORT = 3000;

const estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    const existe = estoque.find(p => p.id === id);
    if (existe) {
        return res.status(400).json({ mensagem: `Produto com id ${id} já existe no estoque.` });
    }

    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.json({ mensagem: `Produto "${nome}" adicionado com sucesso.`, estoque });
});

app.get('/listar', (req, res) => {
    res.json({ estoque });
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const index = estoque.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: `Produto com id ${id} não encontrado.` });
    }

    const removido = estoque.splice(index, 1)[0];
    res.json({ mensagem: `Produto "${removido.nome}" removido com sucesso.`, estoque });
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: `Produto com id ${id} não encontrado.` });
    }

    produto.qtd = parseInt(qtd);
    res.json({ mensagem: `Quantidade do produto "${produto.nome}" atualizada para ${qtd}.`, estoque });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
