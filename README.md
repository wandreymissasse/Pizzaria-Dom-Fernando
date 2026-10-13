# Pizzaria Dom Fernando — painel central local

Protótipo navegável de operação para três filiais, criado e ajustado com o usuário em 11–12/10/2026. Contém dados fictícios e persistência no navegador. Não está liberado para operação real.

## Abrir em outro computador

```powershell
git clone https://github.com/wandreymissasse/Pizzaria-Dom-Fernando.git
cd Pizzaria-Dom-Fernando
```

Abra **`Dom-Fernando-Painel-Local.html`** no Chrome ou Edge. É um arquivo único e não precisa de instalação de dependências. Alternativamente, abra `dist/index.html` ou execute `iniciar.cmd` com Node.js instalado e acesse `http://127.0.0.1:4173`. Ctrl+C encerra o servidor.

**Os dados salvos no navegador do outro computador não são transferidos pelo GitHub.** O novo computador começa com a demonstração. Também pode haver armazenamento separado para cada navegador/endereço. Não inserir dados reais.

## Continuar com Codex

Abra esta pasta como projeto e peça:

> Leia AGENTS.md e docs/CONTINUIDADE.md, depois confira docs/REGRAS.md, docs/HISTORICO.md e docs/VALIDACAO.md. Continue o painel central local a partir do estado atual, preservando as decisões documentadas e as limitações do protótipo.

## O que já existe

Visão geral, mesas/comandas, pedidos, produção/bar/balcão, produtos/cardápio, clientes, fornecedores, equipe, estoque, solicitações de compra, compras/entradas, caixa/financeiro e histórico. União/transferência de mesas, pizzas divididas, flags de sabores/bordas/adicionais, bebidas com gelo/limão, preços padrão e acréscimos especiais, taxa de garçom de 10%, pagamentos parciais, divisão por pessoa, estornos simulados, saldo negativo configurável, recebimentos parciais e sangria limitada ao dinheiro.

As regras detalhadas estão em [docs/REGRAS.md](docs/REGRAS.md). As limitações e próximas etapas estão em [docs/CONTINUIDADE.md](docs/CONTINUIDADE.md).

## Desenvolver e validar

```powershell
node --check dist/app.js
node --check dist/domain.js
node tests.cjs
node scripts/build-standalone.cjs
```

Node.js é necessário apenas para servidor, testes e geração do arquivo único. Não há `npm install`.

`dist/` é o código-fonte desta versão. O HTML único é gerado e deve ser atualizado após mudanças. Os testes verificam lógica em contexto isolado; não substituem teste visual. Consulte [docs/VALIDACAO.md](docs/VALIDACAO.md).

## Limites desta entrega

Sem back-end, PostgreSQL, login, MFA, autorização real, impressão 58 mm, emissão fiscal, XML real, conciliação bancária, iFood/Keeta ou sincronização entre computadores. Perfis e aprovação de gerência são simulados. Nada foi implantado como site público.

Logo original em `dist/assets/logo.jfif`. Interface em português com preto, vermelho e creme.
