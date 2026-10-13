# Estado para o Codex do próximo computador

## Contexto e objetivo

O usuário está desenhando a operação de uma pizzaria com três filiais. Pediu primeiro o painel central navegável local, com todas as opções do dia a dia; configurações de periféricos, TV, celulares, impressão, permissões reais e integrações virão depois. O desenvolvimento atual foi guiado por revisões de telas feitas pelo próprio usuário no HTML local.

Repositório: `wandreymissasse/Pizzaria-Dom-Fernando`. Antes desta entrega havia somente README e .gitignore. Este envio leva o código e a documentação; não implanta um site.

## Estado técnico

HTML/CSS/JS buildless. `dist/` é fonte, não saída descartável. Funções globais em app.js, domínio separado. Não há framework nem pacote npm. Arquivo único gerado incorpora CSS, JS e logo em base64. Servidor opcional escuta apenas 127.0.0.1:4173.

Persistência: `localStorage`, chave `dom-fernando-demo-v1`; `state.version` atualmente 2, migração dos preços comuns e sabores especiais. Não mudar a chave nem restaurar cenário sem necessidade: o usuário fez testes e pode querer preservá-los. `state` contém produtos, filiais, clientes, fornecedores, usuários, pedidos, compras, despesas, histórico e unidades com mesas/saldo/mínimos/caixa/configurações.

Pedidos guardam preço unitário do item. Preços padrão por tamanho ficam em `state.pizzaPrices`; sabores usam `surcharge`; bordas/adicionais mantêm `prices` por tamanho. Solicitações e compras compartilham `state.purchases`, mas têm telas diferentes; entradas diretas têm `direct:true`. Não inferir que já existem entidades SQL ou API.

## Validação realizada e limites

29 verificações automatizadas de lógica na entrega; conferir resultado executando `node tests.cjs`. Testes usam `node:vm`, FormData e DOM simplificados. Algumas revisões mais recentes de layout, grupos radio, telas de solicitações e histórico de permanência não têm cobertura completa de interação no navegador.

Inspeção visual automatizada **não foi concluída**: servidor iniciado no ambiente anterior não ficou acessível e a política do navegador bloqueou URLs file://. Não contornar bloqueios de navegador. O usuário abriu o arquivo diretamente e revisou telas na conversa. Não afirmar que os testes validam responsividade, impressão ou cliques reais.

## Funcional x demonstração

Os cálculos, alterações de estado e persistência local funcionam no protótipo. Ações de gerente/caixa/balcão são usadas no mesmo painel sem login. Auditoria é editável pelo armazenamento local. Aprovação de cancelamento/estorno não autentica gerente. Pix/cartão não são conciliados; estorno não executa transação bancária. QR não é público. Solicitação não é notificação entre pessoas/computadores.

Não implementado: banco/API, autenticação, MFA, permissões no servidor, dispositivos/sessões reais, impressoras, PDF/comprovantes fiscais, XML real, cotação comparativa completa, contas a pagar por nota, projeções financeiras completas, taxas/repasse de cartão, painel consolidado do dono, sincronização multiusuário, iFood/Keeta, emissão fiscal, backup/restauração de banco.

## Decisões que precisam de validação

- Média proporcional das bordas combinadas é hipótese atual. O usuário pediu tirar o texto explicativo e usar flags; ainda não definiu outra fórmula nem confirmou explicitamente a média.
- Confirmar se a primeira abertura de Receber/fechar deve ser mantida como solicitação de fechamento ou se haverá botão próprio do garçom.
- Dados e preços são compartilhados entre filiais; saldo, pedidos, compras e caixa são separados. Confirmar necessidade de preço diferente por filial.
- Recebimento usa identificador de nota único por registro. Para uma nota com vários produtos, será preciso modelo nota/itens e conferência conjunta; não contornar duplicidade por dados falsos no sistema real.
- Seed inicial contém pedidos demonstrativos antigos com preços históricos; pode haver diferença em relação aos novos preços padrão, intencional pela preservação do histórico. Confirmar cenários antes de modificar seed.

## Etapas aprovadas pelo usuário (preservar ordem)

1. Documentação e estrutura.
2. Protótipo local.
3. Pedidos e produção.
4. Estoque e compras.
5. Caixa e impressão.
6. **Base real e permissões** (o usuário pediu mover para antes da homologação).
7. Homologação operacional.
8. Integrações e fiscal.

O protótipo já simula parte das etapas 3–5, mas não significa conclusão real delas. O próximo trabalho é seguir a revisão do usuário e validar telas/fluxos. Não iniciar a base real por conta própria.

## Rotina de entrega

Editar fontes → validar lógica aplicável → gerar HTML único → atualizar documentação quando a regra mudar → enviar commit quando autorizado. Manter o arquivo único e fonte consistentes. Não versionar scripts temporários de substituição da conversa, ZIP redundante ou dados reais do navegador. Use caminhos relativos, compatíveis com o próximo computador.
