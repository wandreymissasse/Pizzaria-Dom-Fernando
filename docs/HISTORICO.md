# Histórico das ações e decisões

Resumo em ordem das alterações discutidas em 11–12/10/2026. Não são timestamps de commits individuais: todas serão entregues como uma consolidação inicial.

1. Leitura dos requisitos anexados; análise de lacunas e plano por etapas. Repositório inicialmente inacessível; depois tornou-se público e foi identificado como ainda sem aplicação.
2. Usuário definiu união/transferência de mesas, pagamento parcial e divisão por pessoas; complemento por tamanho; desconto caixa/gerência; cancelamento/estorno de gerência; flag de negativo por produto; produção por cozinha e entrega por balcão.
3. Definições: mostrar total e saldo por pessoa; bebida baixa após confirmação do garçom; prazo começa no pedido; integrações futuras com iFood/Keeta, inicialmente manual; endereço no delivery; impressora térmica não fiscal 58 mm; limite de dez adicionais e bordas combináveis.
4. Base real movida para etapa 6, antes da homologação. Escopo inicial reduzido ao painel central local; periféricos e dispositivos depois.
5. Logo fornecida (`images.jfif`) incorporada sem recriar a identidade. Preto/vermelho/creme.
6. Implementação de HTML/CSS/JS, regras em centavos, seed com três filiais, navegação, LocalStorage e restaurar demonstração.
7. Telas: visão geral; mesas; pedidos; produção/bar/balcão; cadastros; estoque; compras; caixa; histórico. Servidor estático e comando de execução Windows.
8. União de comandas ocupadas, transferência para mesa livre, pagamentos/itens preservados. Estorno simulado, mensagens, limite por saldo e fechamento após entrega/pagamento.
9. Testes de lógica em VM, pacote ZIP e HTML único. Primeira entrega local; nenhum site publicado. Limitação de verificação visual explicada.
10. Mesa passou a ocultar cliente/telefone/endereço/taxa de entrega. Taxa automática de garçom 10%. Pagamento externo somente retirada/delivery ou fechamento da mesa.
11. Preços mudaram de tabela por sabor para padrão por tamanho: 30/40/60/70/90/120. Acréscimos Atum 5 e Picanha com alho 10; maior acréscimo selecionado. Editor global de preços e editor de acréscimo do sabor. Migração sem alterar pedidos existentes.
12. Filtros/pesquisa nos quatro cadastros. Produtos por tipo/disponibilidade; equipe por perfil; pesquisa sem acentos; contador e limpar filtros.
13. Retirada de setor/fornecedor da solicitação de compra: necessidade vinculada à filial e destino estoque.
14. Separação de Solicitações de compra e Compras e entradas. Caixa de entrada de solicitações das três filiais; aceitar, escolher fornecedor após cotação, compra realizada e receber. Entrada sem solicitação.
15. Flag pizza de um sabor só e borda de um tipo só. Adicionais por seleção, uma porção padrão por opção, identificação Adicionais inclusos.
16. Bebidas: flags opcionais e exclusivas Copo com gelo / Copo com gelo e limão, mostradas no pedido do bar.
17. Texto da regra proporcional da borda removido da tela, sem alteração no cálculo.
18. Sabores alterados de dropdown para flags radio por parte; compactação do formulário do garçom.
19. Diagnóstico do Encerrar comanda: saldo/entrega bloqueavam, mas toast ficava atrás do dialog. Mensagens movidas para dentro da janela, instrução explícita, atalho para produção. Troco/resultado de pagamento exibido após redesenhar modal.
20. Borda única mudou de dropdown para flags, incluindo Sem borda. Uniformização de sabores/bordas/adicionais: 3 colunas desktop, 2 mobile; tamanho comum e espaço suave.
21. Caixa/financeiro compactado. Recebimentos com número de mesa/comanda, primeiro pedido, primeira solicitação de fechamento, permanência e horário de pagamento. Preservar referência da mesa; história antiga sem timestamp não é inventada.
22. Sangria: mostrar saldo físico disponível, preenchimento até o total, valor parcial permitido, saldo após movimento e bloquear acima do saldo. Pix/cartão excluídos. Validação de valores positivos.
23. Compactação de linhas, botões, cabeçalhos, filtros e cards nas abas Produtos/Clientes/Fornecedores/Equipe.
24. Pedido atual: documentar todas as ações e enviar código/documentos ao GitHub para continuidade em outro computador. AGENTS.md, guias, fonte e gerador portátil adicionados para esse fim.

## Documentação que prevalece

Requisitos originais permanecem como referência histórica. REGRAS consolida as correções. CONTINUIDADE distingue o que funciona, simulações e lacunas. Não interpretar as etapas planejadas como entregas já concluídas.
