# Orientações para continuar este projeto

## Leia primeiro

1. `README.md`: execução e mapa do repositório.
2. `docs/CONTINUIDADE.md`: estado real, limitações e próximas entregas.
3. `docs/REGRAS.md`: decisões consolidadas do usuário.
4. `docs/HISTORICO.md`: evolução do protótipo e pedidos de alteração.
5. `docs/VALIDACAO.md`: testes e roteiro manual.

Os requisitos originais estão em `docs/REQUISITOS-ORIGINAIS.md`. Decisões posteriores em REGRAS prevalecem sobre o documento inicial. Instruções diretas do usuário prevalecem sobre estes arquivos.

## Escopo autorizado e fase atual

Painel central local, navegável, com dados fictícios para três filiais. Validar as opções do dia a dia antes de impressoras, TVs, celulares, integrações e infraestrutura real. Não apresentar esta versão como pronta para operação comercial. Não publicar um site ou iniciar integrações reais sem pedido do usuário. Alterações solicitadas devem ser feitas no código, não apenas descritas.

## Estrutura e rotina de edição

- HTML/CSS/JavaScript sem framework ou dependências externas. `dist/` contém o código-fonte e é versionado, apesar do nome.
- `dist/app.js`: telas, formulários, dados demonstrativos, ações e armazenamento no navegador.
- `dist/domain.js`: preços, taxa de garçom, divisão de valores, validação de saldo.
- `dist/style.css`: estilos; usa regras específicas compactas por tela.
- `dist/assets/logo.jfif`: logo original fornecida. Preservar preto/vermelho/creme.
- `server.cjs`: servidor estático opcional, não um back-end real.
- `scripts/build-standalone.cjs`: gera o HTML único da raiz, que o usuário abre localmente.

Edite os arquivos em `dist/`, não o HTML único gerado. Depois rode `node scripts/build-standalone.cjs`. Não deixe a cópia que o usuário abre desatualizada. Não é necessário usar os scripts de substituição temporários da conversa anterior; eles não pertencem ao repositório.

Execute `node --check dist/app.js`, `node --check dist/domain.js` e `node tests.cjs` para alterações de lógica. Os testes usam VM e DOM simplificado: não equivalem a testes visuais nem navegador real. Para ajustes de layout, faça inspeção visual quando os recursos do ambiente permitirem; não afirme ter feito QA visual sem fazê-lo.

## Regras técnicas essenciais

- Valores monetários em centavos inteiros. Não alterar preços históricos dos itens já registrados.
- Preço da pizza = base única por tamanho + maior acréscimo especial escolhido + bordas + adicionais. Não somar acréscimos dos sabores ou multiplicá-los pelo número de partes.
- Mesa tem taxa automática de garçom de 10% sobre itens ativos, antes do desconto. Nenhuma taxa de garçom em delivery/retirada.
- Bebidas baixam uma única vez na confirmação pelo garçom; QR pendente não baixa. Ingredientes não baixam na venda de pizza.
- Insumos têm baixa manual por embalagem inteira. Apresentações separadas. Saldo negativo depende da flag do produto.
- Solicitação de compra não aumenta estoque. Somente recebimento confirmado aumenta. Não duplicar solicitações automáticas abertas.
- Sangria usa apenas saldo físico em dinheiro do turno, incluindo fundo/suprimentos e descontando retiradas/estornos; Pix/cartão não aumentam esse saldo.
- Botões dentro de formulários usam `type="button"`; evitar submissão involuntária.
- Mensagens em dialog devem aparecer dentro dele: toast externo fica atrás da camada modal.
- Escapar dados ao inserir HTML, manter a função `esc` nas renderizações.
- LocalStorage não é segurança, banco compartilhado ou sincronização. Não alegar permissões reais.

## Entrega e conversa

Preservar os dados demonstrativos do navegador quando possível. Restaurar demonstração só mediante ação do usuário. Explicar alterações em português, informar o resultado e pedir para recarregar o painel. Não copiar caminhos específicos do computador anterior para o funcionamento do projeto. Nunca versionar dados reais de clientes, credenciais, `.env` ou backups pessoais.
