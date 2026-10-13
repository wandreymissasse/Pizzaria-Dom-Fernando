# Regras e decisões consolidadas

Última consolidação: 12/10/2026, horário de Cuiabá. Esta versão substitui pontos conflitantes do documento original. Implementação atual é demonstrativa; regras futuras não devem ser anunciadas como funcionais.

## Escopo e aparência

- Começar pelo painel central das operações locais, com dados fictícios e três filiais. Depois validar impressões, permissões reais, integrações e periféricos.
- Logo fornecida pelo usuário; cores preto/vermelho/creme. Layout adaptável.
- Cadastro de produtos/clientes/fornecedores/equipe e caixa/financeiro com espaçamento reduzido para menos rolagem.
- Seleções de sabores/bordas/adicionais com tamanho uniforme e espaço suave: três opções por linha no computador, duas no celular. A última linha pode ter menos opções.

## Mesas, pedidos e atendimento

- Mesa, retirada e delivery manual. Todos pertencem à filial.
- Unir mesas, inclusive comandas ocupadas, preservando itens, pagamentos e descontos. Mostrar número principal e mesas vinculadas. Transferir para mesa livre.
- Pedido de mesa não pede cliente, telefone, endereço, taxa de entrega nem pagamento externo na criação.
- Toda mesa tem taxa de garçom de 10% sobre os itens ativos, antes do desconto. Integra totais e divisão por pessoa.
- Delivery exige cliente, telefone e endereço; taxa e previsão são manuais. Sem acesso do entregador. iFood e **Keeta** somente depois.
- Pagamento externo aparece em retirada/delivery e no fechamento da mesa. Informar pago não comprova recebimento nem substitui registrar pagamento.
- QR válido dentro do horário da filial, inclusive se cruzar meia-noite; solicitação aguarda confirmação do garçom. Na versão atual é apenas uma opção de simulação dentro do formulário.
- Prazo começa no pedido confirmado pelo garçom. Exemplo de 50 minutos, alerta quando faltarem 15. Cozinha/bar avançam preparo; balcão confirma entrega.
- Status por item: aguardando, em preparo, pronto, entregue. Estado separado do pagamento.

## Pizza e complementos

| Tamanho | Partes | Preço padrão inicial |
|---|---:|---:|
| P | 2 | R$ 30 |
| M | 2 | R$ 40 |
| G | 2 | R$ 60 |
| GG | 4 | R$ 70 |
| Meio metro | 3 | R$ 90 |
| Metro | 6 | R$ 120 |

- Preço padrão editado uma única vez por tamanho, comum a todos os sabores.
- Sabores comuns: acréscimo zero. Atum: +R$ 5. Picanha com alho: +R$ 10. Acréscimo editável no cadastro do sabor.
- Manter a regra anterior do sabor mais caro: base + **maior acréscimo**, sem somar especiais nem multiplicar por partes. G com Atum e Picanha = R$ 70, antes de complementos e taxa de mesa.
- Todos os sabores podem ser usados em todos os tamanhos. Repetição de sabores permitida. Agrupar proporções (2 de 4 = metade, 2 de 6 = 1/3).
- Flag **Pizza de um sabor só** exibe apenas um grupo de sabores para a pizza inteira. Fora desse modo, um grupo por parte. Sabores são opções marcáveis de seleção única por grupo.
- Bordas combináveis. Flag **Borda de um tipo só** exibe opções marcáveis de escolha única, incluindo Sem borda. Fora desse modo, selecionar várias bordas.
- Preço de borda/adicional fixo por tamanho/modelo. A combinação de bordas usa média dos preços em partes iguais como hipótese implementada; ainda precisa de aceite explícito do usuário.
- Retirado o texto “Preço proporcional em partes iguais entre as bordas selecionadas.” da tela; isso não modificou a fórmula.
- Adicionais por flags, sem quantidade: uma porção padrão de cada opção por pizza, até dez opções. Exibir **Adicionais inclusos** no pedido.
- Preços de pedidos existentes permanecem históricos após alteração de cadastro.
- Disponibilidade de sabores manual; não deduzir indisponibilidade pela despensa.

## Bebidas

- Baixa por unidade na confirmação pelo garçom, uma única vez. QR pendente não baixa.
- Opções **Copo com gelo** e **Copo com gelo e limão**, opcionais e mutuamente exclusivas. Marcar uma desmarca a outra.
- Exibir opção no pedido do bar. Sem acréscimo de preço nesta versão.

## Estoque

- Estoque da filial; todos os recebimentos vão para ele.
- Insumos saem por embalagem inteira da despensa, manualmente. Cinco pacotes, retirar um = quatro, independentemente do uso parcial do conteúdo.
- Não criar estoque de pizza/massa, não baixar ingrediente ao vender pizza, não controlar sobras da bancada ou transferências para cozinha.
- Apresentações 1 kg e 5 kg têm saldos separados.
- Flag por produto permite ou bloqueia saldo negativo. Estoque mínimo por filial; alertar estritamente abaixo do mínimo.
- Inventário, perda, devolução e ajuste com histórico demonstrativo; autorização real será posterior.

## Solicitações, compras e entradas

- **Solicitações de compra**: gerente informa produto, quantidade, data necessária e justificativa. Sem setor e sem fornecedor. Não movimenta estoque.
- Gerar solicitações por estoque mínimo sem duplicar enquanto houver aberta para produto/filial.
- **Compras e entradas**: caixa de entrada do responsável, demonstrando solicitações das três filiais. Aceita/análise, escolhe fornecedor após cotação, registra compra e recebe.
- Status: pendente, aprovada, compra realizada, parcial, recebida, cancelada.
- Entrada sem solicitação prévia também permitida. Preparar entrada não altera saldo.
- Recebimento confirma filial, nota/identificador, embalagens e conversão. Uma caixa com 12 latas = 12 unidades. Histórico preserva dados/conversão.
- Recebimento parcial mantém pendências. Bloquear nota repetida e filial divergente.
- Leitura XML real, múltiplos produtos na mesma nota e contas a pagar ligadas às compras permanecem pendentes.
- Fluxo entre gerente/compras é simulado no mesmo navegador. Sem entrega de mensagens entre computadores.

## Caixa, pagamentos e encerramento

- Caixa por filial, abertura com fundo, suprimento, sangria, fechamento com contagem e justificativa de diferença.
- Dinheiro/Pix/cartão, pagamentos parciais, possibilidade de dividir entre meios, troco somente em dinheiro.
- Caixa informa quantidade de pessoas. Mostrar **total original por pessoa e saldo restante por pessoa**, distribuindo centavos sem alterar a soma. Divisão é informativa, não registra pagamentos.
- Desconto somente caixa/gerência; cancelamento de produto e estorno exigem gerência. Na versão atual essas permissões são declarativas/simuladas.
- Cancelamento não repõe bebida automaticamente: exige devolução física aproveitável. Pizza não retorna ingredientes. Não deixar pagamentos superiores ao total após cancelar; exigir estorno primeiro.
- Encerrar exige pagamentos registrados com saldo zero e todos os itens ativos entregues. Libera mesas. Digitar valor não registra pagamento; usar **Registrar pagamento**.
- Mensagens/bloqueios visíveis dentro do diálogo de fechamento e atalho para Produção e balcão.
- Sangria limitada ao dinheiro físico atual: fundo + pagamentos em dinheiro do turno + suprimentos − sangrias − estornos em dinheiro. Pix/cartão não entram. Exibir disponível e saldo após movimento, permitindo retirada parcial ou total.
- Recebimentos exibem comanda, mesa de referência, horário inicial, solicitação de fechamento, permanência, horário de pagamento, meio e valor.
- Solicitação de fechamento registrada na primeira abertura de Receber/fechar; referência das mesas preservada nesse momento. Contagem começa no primeiro pedido (horário de criação; ao unir, usar o mais antigo). Não confundir com duração até efetivo pagamento/saída.
- Registros antigos sem horário de solicitação mostram Não registrado; não inventar histórico.

## Fase real futura

PostgreSQL via back-end; autorização por ação/filial no servidor; preços calculados no servidor; MFA privilegiado, aprovação de aparelho, revogação, HTTPS e auditoria; transações/concorrência/idempotência; ambientes separados; backups/restauração; Railway portátil; internet móvel de reserva. Não anunciar funcionamento offline. Emissão fiscal, integrações bancárias e iFood/Keeta posteriores. Impressora térmica de 58 mm para cupom **não fiscal**, ainda não integrada. Dados pessoais definidos: nome, CPF e telefone para fiscal futuro; endereço para delivery.
