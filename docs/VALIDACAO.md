# Validação e cenários

## Verificação automatizada

Da raiz: `node tests.cjs` (29 verificações). Validar sintaxe: `node --check dist/app.js` e `node --check dist/domain.js`. Gerar artefato: `node scripts/build-standalone.cjs`.

Cobertura: renderização de páginas originais nas filiais; abas de cadastro; preço padrão/especiais; bordas/adicionais; centavos/divisão; saldo negativo; confirmação e baixa única de bebida; produção; estoque por embalagem; não duplicar solicitações automáticas; recebimento parcial/conversão/nota/filial; união/transferência; pagamentos e troco; fechamento; estorno; filtros; flags simples; bebida gelo/limão; sangria parcial/total/inválida.

Os testes usam DOM simplificado, não navegador. Alterações visuais recentes e opções radio precisam de verificação manual. Nunca anunciar impressão ou segurança como validadas por esses testes.

## Roteiro manual no HTML local (somente dados fictícios)

1. Percorrer todas as telas, abas, filiais, filtros e botões. Conferir a compacidade/legibilidade em larguras desktop e celular.
2. Mesa livre: criar pizza inteira G comum (R$ 60), adicionar bebida, conferir subtotal e taxa de 10%. Não aparecem dados pessoais/endereço/taxa de entrega.
3. G com Atum (65), Picanha (70), ambos (70). GG com sabores repetidos exibe metade/1/4. Alterar preço padrão não muda pedido anterior.
4. Flag sabor único mostra somente um grupo. Desmarcar permite escolher um sabor por parte. Conferir preservação de seleção ao mudar tamanho/modo e preço resultante.
5. Borda única por flags permite nenhuma/uma; borda combinada permite várias. Adicionais por checkbox, sem quantidade; mostrar Adicionais inclusos na comanda/produção. Fórmula das bordas precisa de validação operacional.
6. Bebida: marcar gelo depois gelo/limão desmarca a primeira; desmarcar ambas permitido. Pedido do bar inclui a escolha, sem acréscimo.
7. Confirmar pedido baixa bebida uma vez; QR pendente não baixa. QR fora do horário é bloqueado. Relógio começa na confirmação do garçom.
8. Produção: aguardando → em preparo → pronto → entregue pelo balcão. Conferir alerta em prazo curto.
9. Unir duas mesas ocupadas, inclusive pagamentos parciais; conferir itens/soma/referências. Transferir para mesa livre libera anteriores.
10. Caixa: abrir Receber/fechar; conferir instruções e mensagens visíveis. Digitar valor não recebe automaticamente. Pagamento parcial, troco, desconto e divisão de total/saldo em pessoas, com centavos preservados.
11. Encerrar antes de pagar/entregar deve explicar bloqueio. Encerrar após saldo zero e entrega libera mesas. Horários/permanência/referência da comanda permanecem nos recebimentos.
12. Sangria com 100 em dinheiro e valores em Pix/cartão deve permitir até 100 (30/50/70/100), bloquear 101 e atualizar saldo. Suprimento aumenta dinheiro físico. Conferir limite após sangrias anteriores/estornos.
13. Retirar farinha 1 kg por embalagem: 5 → 4. Não mexer na apresentação 5 kg nem na outra filial. Vender pizza não baixa farinha.
14. Inventário/ajuste/perda: histórico e flag de negativo. Mínimo estritamente abaixo alerta.
15. Gerência: solicitar produto/quantidade/data/motivo, sem setor/fornecedor. Estoque inalterado.
16. Compras: ver pedido na caixa de entrada, aceitar, selecionar fornecedor após cotação, marcar realizada. Estoque ainda inalterado.
17. Receber 1 caixa × 12 = 12 latas; parcial mantém saldo. Nota repetida ou filial divergente bloqueia. Entrada sem solicitação segue a mesma confirmação final.
18. Cancelamento/estorno simulados: motivo, saldo e reposição de bebida somente com devolução física aproveitável. Sem movimento bancário real.
19. Fechar caixa com contagem diferente exige justificativa. Despesa manual não retira dinheiro físico automaticamente.
20. Recarregar preserva cenário. Outro navegador/PC não compartilha dados. Restaurar demonstração apaga somente os dados demonstrativos locais por escolha do usuário.

## Pendências conhecidas de cobertura

Adicionar testes de interface e de estados novos das telas de solicitações/entrada direta, seleção radio e permanência quando o ambiente permitir. Validar concorrência/idempotência no servidor somente na fase real. Testar impressora 58 mm somente quando a impressão for implementada.
