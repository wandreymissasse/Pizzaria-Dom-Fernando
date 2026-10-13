Crie um protótipo navegável de um sistema web para uma pizzaria com três filiais. Leia os requisitos abaixo, organize um plano curto e implemente primeiro as telas com dados fictícios. Não publique nem use dados reais nesta etapa.

IDENTIDADE E INTERFACE
- Usar a logo fornecida como referência visual. Não inventar suas cores caso o arquivo ainda não esteja disponível.
- Interface adaptada para celular, tablet e computador.
- Telas de garçom com botões grandes; cozinha com leitura à distância.
- Diferenciar claramente funções demonstrativas de funções realmente implementadas.

FILIAIS E ACESSOS
- Cada filial tem cozinha, despensa, bebidas e caixa próprios.
- Perfis: dono, gerente, compras/estoque, caixa, garçom, cozinha e bar.
- Permissões por ação e por filial; um usuário pode acessar várias filiais.
- Garçom não vê estoque, custos ou financeiro gerencial.
- Garçom consulta comanda e solicita fechamento; recebimento depende de permissão própria.
- Gerência acompanha filiais autorizadas; dono tem visão consolidada.
- Prever aprovação de novo navegador/aparelho pelo gerente e revogação de sessões.
- Essa aprovação não substitui MFA individual. No protótipo, simular o fluxo sem alegar segurança real.

PEDIDOS
- Modalidades: mesa, retirada e delivery.
- Delivery inicialmente lançado manualmente pela equipe, com cliente, telefone, endereço, taxa e situação do pagamento.
- Todas as modalidades usam estoque e produção da filial.
- QR Code da mesa abre cardápio e permite solicitar pedidos.
- Pedido do cliente fica pendente até conferência presencial e confirmação do garçom.
- Após confirmação, itens entram na comanda: pizzas seguem para cozinha; bebidas, para bar.
- Status por item: aguardando, em preparo, pronto e entregue.
- Registrar rejeições e cancelamentos com motivo.
- Mostrar pré-conta e situação de pagamento.

PIZZAS
- P, M e G: até duas partes.
- GG: até quatro partes.
- Meio metro: até três partes.
- Metro: até seis partes.
- Um sabor por parte, podendo repetir.
- Agrupar proporções na exibição: duas partes de quatro queijos em uma GG representam metade.
- Preço da pizza: maior preço entre os sabores selecionados no tamanho escolhido.
- Prever bordas, adicionais e observações; regras de preço desses complementos ainda precisam ser definidas.
- Disponibilidade de sabores controlada manualmente por usuário autorizado.

COZINHA E BAR
- Filas por filial, identificando mesa ou número do delivery/retirada.
- Mostrar composição, observações, horário e tempo decorrido.
- Prazo configurável, com exemplo de 50 minutos e alerta quando faltarem 15.
- Manter o início da contagem configurável até validação da regra operacional.
- Garçom acompanha os status e avisos de itens prontos.

ESTOQUE
- Produtos vendidos diretamente, como bebidas: baixa automática por unidade, sem duplicidade; definir e documentar o evento exato da baixa.
- Insumos da cozinha: baixa manual da embalagem inteira ao retirar da despensa.
- Exemplo: cinco pacotes de farinha; retirada de um deixa quatro, mesmo que somente 400 g sejam usados.
- Não gerar estoque de pizza ou massa.
- Não descontar ingredientes novamente ao vender pizza.
- Não controlar sobras na bancada nem transferências para cozinha nesta versão.
- Apresentações diferentes, como farinha de 1 kg e 5 kg, têm saldos separados.
- Cadastro: unidade básica, peso/volume, embalagem de compra, conversão e modo de baixa.
- Estoque mínimo por produto e filial; alerta quando saldo for menor que o mínimo.
- Prever inventário, perdas, devoluções e ajustes com autorização e histórico.
- Não inferir indisponibilidade de pizza pelo saldo da despensa.

COMPRAS E ENTRADAS
- Solicitações automáticas por estoque abaixo do mínimo e manuais por necessidade antecipada.
- Solicitação manual informa filial, setor, produto, quantidade, data necessária e justificativa.
- Evitar solicitações automáticas duplicadas enquanto houver uma aberta.
- Estados: pendente, aprovada, compra realizada, recebida e cancelada; admitir recebimento parcial.
- Solicitação não aumenta estoque.
- Entrada vinculada à nota e filial recebedora.
- Importação de XML com de-para por fornecedor e código do produto.
- Conversões conferidas: uma caixa de 12 latas entra como 12 latas.
- Guardar dados originais da nota e conversão aplicada.
- Rascunho não movimenta estoque; confirmação do recebimento movimenta.
- Detectar chave de nota duplicada e divergência de filial destinatária.
- No protótipo, demonstrar a conferência; sinalizar se leitura real do XML ainda não foi implementada.

FINANCEIRO E DASHBOARD
- Abertura e fechamento de caixa por filial e operador.
- Recebimentos por dinheiro, Pix e cartão.
- Marcar pagamento no sistema não comprova recebimento bancário: prever conferência ou integração futura.
- Cartões com taxas e datas previstas de repasse.
- Contas a pagar vinculadas a compras, vencimentos e parcelas.
- Outras despesas lançadas manualmente.
- Fluxo realizado e projetado; separar vendas, recebimentos, saldo disponível e resultado.
- Não apresentar lucro exato usando apenas retiradas da despensa.
- Dashboard por filial e consolidado: vendas, pedidos, atrasos, caixa, vencimentos, estoque mínimo e solicitações.
- Descontos, cancelamentos, sangrias e ajustes têm permissões específicas e auditoria.

ETAPA POSTERIOR: SISTEMA REAL
- Repositório privado no GitHub, segredos fora do código e configurações por ambiente.
- PostgreSQL persistente, acessado somente pelo back-end.
- Autorizações por ação e filial conferidas no servidor em toda operação.
- Preços e totais calculados no servidor.
- Autenticação segura; se usar JWT, implementar expiração, validação, renovação e revogação adequadas. JWT não é uma proteção suficiente por si só.
- MFA para contas privilegiadas.
- HTTPS, limitação de tentativas, proteção de sessões e registros de auditoria.
- Transações e controle de concorrência para pagamentos, estoque e confirmação de pedidos.
- Impedir pedidos e pagamentos duplicados em reenvios.
- Homologação separada de produção, backups e testes de recuperação.
- Preparar implantação inicial na Railway, com configuração portátil e documentação para eventual migração.
- Nuvem depende de internet; prever conexão móvel de reserva nas lojas. Não anunciar funcionamento offline.
- Emissão fiscal e integrações bancárias permanecem pendentes de definição.

ENTREGA INICIAL
Disponibilize o protótipo para execução local, com contas demonstrativas e cenários das três filiais. Demonstre:
1. Pedido de mesa, confirmação e atendimento por cozinha/bar.
2. Pizza com proporções e cobrança pelo sabor mais caro.
3. Retirada manual de farinha e alerta de estoque mínimo.
4. Solicitação de compra e entrada com conversão de embalagem.
5. Fechamento de comanda e fluxo financeiro.
6. Diferentes visões por perfil e filial.

Informe o que está funcional, o que é simulado e quais decisões faltam. O protótipo serve para validar telas e fluxos; não está liberado para operação real.