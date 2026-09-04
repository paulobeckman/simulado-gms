import type { Question } from '../types';

/*
 * Banco fixo de 40 questões.
 * 20 de História da Igreja, 20 de Apologética.
 * Não alterar, não remover e não inventar questões.
 */

export const questions: Question[] = [
  /* ==================== HISTÓRIA DA IGREJA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'H-ME-01',
    area: 'historia',
    type: 'multipla',
    topic: 'Concílios e heresias',
    prompt: 'Qual heresia foi condenada no Concílio de Niceia, em 325?',
    hint: 'O nome vem de um presbítero de Alexandria.',
    explanation:
      'Ário ensinava que apenas o Pai era eterno e que o Filho havia sido criado. Niceia respondeu com o termo homoousios: Cristo é consubstancial ao Pai, "gerado, não criado".',
    options: [
      { id: 'a', text: 'Nestorianismo' },
      { id: 'b', text: 'Arianismo' },
      { id: 'c', text: 'Monofisismo' },
      { id: 'd', text: 'Macedonianismo' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'H-ME-02',
    area: 'historia',
    type: 'multipla',
    topic: 'Concílios e heresias',
    prompt:
      'O Concílio de Calcedônia (451) foi convocado para responder a qual heresia, e qual definição adotou?',
    hint: 'A base doutrinária foi o Tomo de Leão, do Papa Leão Magno.',
    explanation:
      'O monofisismo defendia que Cristo teria uma só natureza. Calcedônia definiu que Ele é plenamente Deus e plenamente homem, duas naturezas sem confusão e sem divisão, tendo como base o Tomo de Leão.',
    options: [
      { id: 'a', text: 'Nestorianismo; definiu Maria como Theotokos' },
      { id: 'b', text: 'Arianismo; definiu o Filho como consubstancial ao Pai' },
      {
        id: 'c',
        text: 'Monofisismo; definiu que Cristo tem duas naturezas, sem confusão e sem divisão',
      },
      { id: 'd', text: 'Apolinarismo; definiu a plena divindade do Espírito Santo' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'H-ME-03',
    area: 'historia',
    type: 'multipla',
    topic: 'Concílios e heresias',
    prompt:
      'O Concílio de Éfeso (431) condenou o nestorianismo. Qual era o ponto central da controvérsia?',
    hint: 'A disputa girava em torno de um título dado a Maria.',
    explanation:
      'Nestório, patriarca de Constantinopla, defendia o termo Christotokos por achar excessiva a ênfase divina em Maria. O concílio o condenou.',
    options: [
      { id: 'a', text: 'Se o Espírito Santo procedia também do Filho' },
      {
        id: 'b',
        text: 'Se Maria deveria ser chamada Theotokos (mãe de Deus) ou apenas Christotokos (mãe de Cristo)',
      },
      { id: 'c', text: 'Se Cristo tinha vontade humana e vontade divina' },
      { id: 'd', text: 'Se o batismo de hereges era válido' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'H-ME-04',
    area: 'historia',
    type: 'multipla',
    topic: 'Traduções e transmissão',
    prompt: 'Quem traduziu a Bíblia para o latim, produzindo a Vulgata, e a pedido de quem?',
    hint: 'O trabalho foi feito entre 382 e 405, no Império Romano do Ocidente.',
    explanation:
      'Jerônimo produziu a Vulgata (a "versão comum") entre 382 e 405, a pedido do Papa Dâmaso I. Ela se tornou o texto padrão da igreja ocidental por mais de mil anos.',
    options: [
      { id: 'a', text: 'Agostinho de Hipona, a pedido de Ambrósio' },
      { id: 'b', text: 'Orígenes, a pedido do imperador Constantino' },
      { id: 'c', text: 'Jerônimo, a pedido do Papa Dâmaso I' },
      { id: 'd', text: 'Atanásio, a pedido do Concílio de Niceia' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'H-ME-05',
    area: 'historia',
    type: 'multipla',
    topic: 'Idade Média',
    prompt: 'Qual foi a primeira universidade da história e em que ano foi fundada?',
    hint: 'Fica na Itália e nasceu como centro de estudos jurídicos e teológicos.',
    explanation:
      'A Universidade de Bolonha, fundada em 1088, marca a institucionalização do ensino superior no Ocidente. O conceito de universidade nasceu como iniciativa cristã, a partir do trabalho que as igrejas já faziam de preservação e transmissão de conhecimento.',
    options: [
      { id: 'a', text: 'Universidade de Paris, 1150' },
      { id: 'b', text: 'Universidade de Bolonha, 1088' },
      { id: 'c', text: 'Universidade de Oxford, 1096' },
      { id: 'd', text: 'Universidade de Salamanca, 1218' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'H-ME-06',
    area: 'historia',
    type: 'multipla',
    topic: 'Reforma',
    prompt: 'Qual das alternativas NÃO é uma das cinco solas da Reforma?',
    hint: 'As cinco são: Escritura, graça, fé, Cristo e glória a Deus.',
    explanation:
      'As cinco solas são Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus e Soli Deo Gloria. "Sola Ecclesia" seria justamente o oposto do que a Reforma defendia.',
    options: [
      { id: 'a', text: 'Sola Scriptura' },
      { id: 'b', text: 'Sola Gratia' },
      { id: 'c', text: 'Sola Ecclesia' },
      { id: 'd', text: 'Soli Deo Gloria' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'H-ME-07',
    area: 'historia',
    type: 'multipla',
    topic: 'Igreja no Brasil',
    prompt:
      'A Assembleia de Deus foi fundada no Brasil em 1911, em Belém do Pará, por quais missionários?',
    hint: 'Eram dois suecos que vieram dos Estados Unidos após o avivamento da Rua Azusa.',
    explanation:
      'Daniel Berg e Gunnar Vingren, dois suecos radicados nos Estados Unidos, chegaram a Belém do Pará e fundaram a Assembleia de Deus em 1911. Luigi Francescon havia fundado a Congregação Cristã no ano anterior.',
    options: [
      { id: 'a', text: 'Luigi Francescon e William Seymour' },
      { id: 'b', text: 'Daniel Berg e Gunnar Vingren' },
      { id: 'c', text: 'Robert Kalley e Ashbel Green Simonton' },
      { id: 'd', text: 'Melvin Ueber e Manuel da Nóbrega' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'H-ME-08',
    area: 'historia',
    type: 'multipla',
    topic: 'Linha do tempo',
    prompt: 'Qual sequência cronológica está correta?',
    hint: 'As datas são 249, 313, 325 e 476.',
    explanation:
      'Décio em 249 (primeira perseguição sistemática imperial), Édito de Milão em 313 (fim da perseguição), Niceia em 325 e queda de Roma em 476.',
    options: [
      {
        id: 'a',
        text: 'Édito de Milão, perseguição de Décio, Concílio de Niceia, queda de Roma',
      },
      {
        id: 'b',
        text: 'Perseguição de Décio, Édito de Milão, Concílio de Niceia, queda de Roma',
      },
      {
        id: 'c',
        text: 'Concílio de Niceia, perseguição de Décio, Édito de Milão, queda de Roma',
      },
      {
        id: 'd',
        text: 'Perseguição de Décio, Concílio de Niceia, Édito de Milão, queda de Roma',
      },
    ],
    correctOptionId: 'b',
  },

  /* ==================== HISTÓRIA DA IGREJA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'H-VF-01',
    area: 'historia',
    type: 'vf',
    topic: 'Cânon',
    prompt:
      'O cânon do Novo Testamento foi formulado e votado durante o Concílio de Niceia, em 325.',
    hint: 'Pergunte-se o que a igreja usava como Escritura nos 200 anos anteriores ao concílio.',
    explanation:
      'O cânon não foi formulado em Niceia, apenas reconhecido. Desde o fim do primeiro século as igrejas já tratavam como Escritura os escritos de pessoas com conexão direta a Jesus. O concílio apenas confirmou formalmente o que já era prática consolidada.',
    correctAnswer: false,
  },
  {
    id: 'H-VF-02',
    area: 'historia',
    type: 'vf',
    topic: 'Terminologia',
    prompt: 'A igreja já era chamada de "católica" antes de existir a Igreja Católica Romana.',
    hint: 'Pense no significado original da palavra em grego.',
    explanation:
      'Katholikos significa universal. A igreja católica era a soma de todas as igrejas, a Igreja com I maiúsculo. A igreja era católica antes de ser católica romana.',
    correctAnswer: true,
  },
  {
    id: 'H-VF-03',
    area: 'historia',
    type: 'vf',
    topic: 'Perseguição',
    prompt:
      'A perseguição promovida por Décio, a partir de 249, foi a primeira perseguição sistemática em escala imperial contra os cristãos.',
    hint: 'Antes dela, as perseguições eram intermitentes e movidas por hostilidade popular.',
    explanation:
      'Antes de Décio as perseguições eram esporádicas e locais. Décio foi o primeiro a exigir de todos os cidadãos o libellus, certificado de que haviam oferecido sacrifício, tornando a perseguição uma política imperial.',
    correctAnswer: true,
  },
  {
    id: 'H-VF-04',
    area: 'historia',
    type: 'vf',
    topic: 'Igreja primitiva',
    prompt: 'Estêvão foi o primeiro mártir cristão registrado nas Escrituras.',
    hint: 'Ele era um dos escolhidos para cuidar da diaconia (Atos 6 e 7).',
    explanation:
      'Estêvão, um dos sete escolhidos para cuidar da diaconia, foi apedrejado em Atos 7. Pregou em vez de se defender e morreu pedindo perdão pelos que o matavam.',
    correctAnswer: true,
  },
  {
    id: 'H-VF-05',
    area: 'historia',
    type: 'vf',
    topic: 'Expansão',
    prompt:
      'A expansão do Evangelho para além de Jerusalém partiu primeiro dos doze apóstolos originais.',
    hint: 'Justo González destaca justamente esse ponto frequentemente esquecido.',
    explanation:
      'A expansão veio primeiro dos judeus helenistas da própria comunidade cristã, o grupo de Estêvão e Filipe. A perseguição que se seguiu à morte de Estêvão levou o Evangelho a Samaria, Fenícia, Chipre e Antioquia.',
    correctAnswer: false,
  },
  {
    id: 'H-VF-06',
    area: 'historia',
    type: 'vf',
    topic: 'Reforma',
    prompt: 'Henrique VIII rompeu com Roma por convicções doutrinárias semelhantes às de Lutero.',
    hint: 'A motivação inglesa foi bem diferente da alemã.',
    explanation:
      'Henrique VIII rompeu com Roma porque o Papa recusou anular seu casamento com Catarina de Aragão. O Ato de Supremacia de 1534 o declarou chefe supremo da igreja da Inglaterra. O anglicanismo manteve boa parte da liturgia e da estrutura episcopal católica.',
    correctAnswer: false,
  },
  {
    id: 'H-VF-07',
    area: 'historia',
    type: 'vf',
    topic: 'Reforma',
    prompt: 'Os anabatistas foram perseguidos tanto por católicos quanto pelos próprios protestantes.',
    hint: 'O batismo funcionava também como certidão de nascimento civil na época.',
    explanation:
      'Luteranos e reformados viam os anabatistas como ameaça à ordem social, já que o batismo tinha função civil. Eles foram mortos, torturados e perseguidos pelos dois lados.',
    correctAnswer: true,
  },
  {
    id: 'H-VF-08',
    area: 'historia',
    type: 'vf',
    topic: 'Igreja no Brasil',
    prompt:
      'A separação oficial entre Estado e Igreja Católica no Brasil se deu em 1890, pelo Decreto 119-A, de autoria de Rui Barbosa.',
    hint: 'Aconteceu logo após a Proclamação da República.',
    explanation:
      'O Decreto 119-A, de 7 de janeiro de 1890, assinado por Deodoro da Fonseca e de autoria de Rui Barbosa, separou Estado e Igreja. A laicidade plena veio em 1891.',
    correctAnswer: true,
  },

  /* ==================== HISTÓRIA DA IGREJA - DISCURSIVAS ==================== */
  {
    id: 'H-DIS-01',
    area: 'historia',
    type: 'discursiva',
    topic: 'Expansão primitiva',
    prompt:
      'Explique quais fatores históricos favoreceram a rápida expansão do Evangelho no primeiro século.',
    hint: 'Foram quatro fatores: um político, um de infraestrutura, um linguístico e um religioso.',
    explanation:
      'A Pax Romana permitia o trânsito livre de ideias, desde que não ameaçassem o poder político de Roma. O Império havia construído estradas e rotas marítimas que facilitavam viagens e o envio de cartas. O grego koinê funcionava como língua franca, e o Novo Testamento foi escrito nele, no grego popular e acessível, e não no grego épico da literatura clássica. Por fim, a diáspora judaica já havia estabelecido sinagogas em quase toda cidade importante do Império, e essas sinagogas eram o ponto de entrada habitual de Paulo.',
    modelAnswer:
      'A Pax Romana permitia o trânsito livre de ideias, desde que não ameaçassem o poder político de Roma. O Império havia construído estradas e rotas marítimas que facilitavam viagens e o envio de cartas. O grego koinê funcionava como língua franca, e o Novo Testamento foi escrito nele, no grego popular e acessível, e não no grego épico da literatura clássica. Por fim, a diáspora judaica já havia estabelecido sinagogas em quase toda cidade importante do Império, e essas sinagogas eram o ponto de entrada habitual de Paulo.',
    keyPoints: [
      'Pax Romana e liberdade de circulação de ideias',
      'Estradas e rotas marítimas',
      'Grego koinê como língua franca',
      'Diáspora judaica e sinagogas já estabelecidas',
    ],
  },
  {
    id: 'H-DIS-02',
    area: 'historia',
    type: 'discursiva',
    topic: 'Constantino',
    prompt:
      'Discorra sobre os efeitos positivos e negativos da conversão de Constantino para a igreja.',
    hint: 'Pense no contraste entre o que ela permitiu e o que ela custou à qualidade do evangelho vivido.',
    explanation:
      'Do lado positivo, Constantino pôs fim a quase 300 anos de perseguição, permitiu que famílias cristãs sobrevivessem, deu espaço para o crescimento da igreja e convocou o Concílio de Niceia numa hora em que nenhum pai da igreja teria autoridade para reunir os lados divididos. Também impulsionou o desenvolvimento artístico, arquitetônico e teológico. Do lado negativo, introduziu o sincretismo pagão com imagens, transformou a igreja em instituição política, criou uma espécie de cota de cristãos na política, tornou as reuniões pomposas e custeadas pelo Império e, sobretudo, baixou a qualidade do evangelho vivido: antes, dizer sim a Jesus era dizer não à própria vida; depois, passou a ser socialmente vantajoso. Sua própria conversão foi imatura, já que recusou passar pelo catecumenato alegando ser imperador escolhido por Deus, aceitando fazê-lo apenas no leito de morte.',
    modelAnswer:
      'Do lado positivo, Constantino pôs fim a quase 300 anos de perseguição, permitiu que famílias cristãs sobrevivessem, deu espaço para o crescimento da igreja e convocou o Concílio de Niceia numa hora em que nenhum pai da igreja teria autoridade para reunir os lados divididos. Também impulsionou o desenvolvimento artístico, arquitetônico e teológico. Do lado negativo, introduziu o sincretismo pagão com imagens, transformou a igreja em instituição política, criou uma espécie de cota de cristãos na política, tornou as reuniões pomposas e custeadas pelo Império e, sobretudo, baixou a qualidade do evangelho vivido: antes, dizer sim a Jesus era dizer não à própria vida; depois, passou a ser socialmente vantajoso. Sua própria conversão foi imatura, já que recusou passar pelo catecumenato alegando ser imperador escolhido por Deus, aceitando fazê-lo apenas no leito de morte.',
    keyPoints: [
      'Fim da perseguição e liberdade para a igreja crescer',
      'Convocação do Concílio de Niceia',
      'Sincretismo pagão e idolatria',
      'Fusão entre igreja e política',
      'Queda na qualidade do evangelho vivido',
      'Conversão imatura, recusa do catecumenato',
    ],
  },
  {
    id: 'H-DIS-03',
    area: 'historia',
    type: 'discursiva',
    topic: 'Grande Cisma',
    prompt:
      'Explique as causas que levaram ao Grande Cisma de 1054 entre a Igreja do Ocidente e a do Oriente.',
    hint: 'Foram divergências doutrinárias, de autoridade e de prática litúrgica acumuladas por séculos.',
    explanation:
      'A principal questão doutrinária foi a cláusula Filioque: o Ocidente acrescentou ao credo que o Espírito Santo procede do Pai e do Filho, enquanto o Oriente manteve a formulação original de Constantinopla. Somaram-se a isso a disputa sobre a autoridade e a infalibilidade papal, rejeitada pelo Oriente; a exigência de celibato clerical no Ocidente, inexistente no Oriente; e a divergência sobre o uso de pão fermentado ou ázimo na eucaristia. Essas diferenças vinham se acumulando desde a divisão do Império em 395, que produziu desenvolvimentos teológicos, litúrgicos e linguísticos distintos, grego no Oriente e latim no Ocidente. Em 1054 as igrejas se excomungaram mutuamente.',
    modelAnswer:
      'A principal questão doutrinária foi a cláusula Filioque: o Ocidente acrescentou ao credo que o Espírito Santo procede do Pai e do Filho, enquanto o Oriente manteve a formulação original de Constantinopla. Somaram-se a isso a disputa sobre a autoridade e a infalibilidade papal, rejeitada pelo Oriente; a exigência de celibato clerical no Ocidente, inexistente no Oriente; e a divergência sobre o uso de pão fermentado ou ázimo na eucaristia. Essas diferenças vinham se acumulando desde a divisão do Império em 395, que produziu desenvolvimentos teológicos, litúrgicos e linguísticos distintos, grego no Oriente e latim no Ocidente. Em 1054 as igrejas se excomungaram mutuamente.',
    keyPoints: [
      'Cláusula Filioque',
      'Autoridade e infalibilidade papal',
      'Celibato clerical',
      'Pão fermentado x ázimo',
      'Excomunhões mútuas',
      'Divergência acumulada desde a divisão do Império',
    ],
  },
  {
    id: 'H-DIS-04',
    area: 'historia',
    type: 'discursiva',
    topic: 'Reforma',
    prompt: 'Explique por que a prensa de Gutenberg foi decisiva para o sucesso da Reforma Protestante.',
    hint: 'Lutero teve que se esconder logo depois de publicar as 95 teses.',
    explanation:
      'Depois de publicar as 95 teses em 1517, Lutero entrou em perigo iminente e precisou se esconder. O que deu força à Reforma não foi a presença pessoal dele, mas a difusão de suas ideias e, principalmente, da Bíblia. A prensa móvel de Gutenberg, de 1450, permitiu imprimir em massa a tradução da Bíblia para o alemão, devolvendo o texto às mãos do povo, que pôde conferir por si mesmo se as críticas de Lutero procediam. O efeito colateral foi uma explosão da alfabetização, já que todos queriam aprender a ler para verificar, e o surgimento de traduções em línguas vernáculas, que ajudaram a formar identidades nacionais e igrejas nacionais protestantes.',
    modelAnswer:
      'Depois de publicar as 95 teses em 1517, Lutero entrou em perigo iminente e precisou se esconder. O que deu força à Reforma não foi a presença pessoal dele, mas a difusão de suas ideias e, principalmente, da Bíblia. A prensa móvel de Gutenberg, de 1450, permitiu imprimir em massa a tradução da Bíblia para o alemão, devolvendo o texto às mãos do povo, que pôde conferir por si mesmo se as críticas de Lutero procediam. O efeito colateral foi uma explosão da alfabetização, já que todos queriam aprender a ler para verificar, e o surgimento de traduções em línguas vernáculas, que ajudaram a formar identidades nacionais e igrejas nacionais protestantes.',
    keyPoints: [
      'Lutero precisou se esconder após 1517',
      'Prensa de 1450 permitiu impressão em massa',
      'Tradução da Bíblia para o alemão',
      'O povo passou a conferir por si mesmo',
      'Explosão da alfabetização',
      'Traduções vernáculas e igrejas nacionais',
    ],
  },

  /* ==================== APOLOGÉTICA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'A-ME-01',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Tomás de Aquino',
    prompt: 'Qual das alternativas NÃO faz parte das cinco vias de Tomás de Aquino?',
    hint: 'As cinco vias partem sempre da observação do mundo natural.',
    explanation:
      'As cinco vias são: primeiro motor imóvel, ser necessário, ser perfeito, inteligência ordenadora e causa e efeito. Todas partem da realidade observável, o que dialoga com Romanos 1 e Atos 17.',
    options: [
      { id: 'a', text: 'Primeiro motor imóvel' },
      { id: 'b', text: 'Ser necessário' },
      { id: 'c', text: 'Argumento ontológico do ser máximo concebível' },
      { id: 'd', text: 'Inteligência ordenadora' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'A-ME-02',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Profecias',
    prompt:
      'Segundo o cálculo apresentado por Josh McDowell, qual a probabilidade de um único homem cumprir por acidente oito profecias messiânicas?',
    hint: 'São 100 quatrilhões.',
    explanation:
      'A probabilidade é de 1 em 10¹⁷, ou 1 em 100 quatrilhões. E isso considerando apenas oito das mais de 300 profecias cumpridas por Jesus.',
    options: [
      { id: 'a', text: '1 em 10 mil' },
      { id: 'b', text: '1 em 1 milhão' },
      { id: 'c', text: '1 em 10¹⁷' },
      { id: 'd', text: '1 em 10³' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'A-ME-03',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Confiabilidade científica',
    prompt: 'Qual associação entre texto bíblico e antecipação científica está correta?',
    hint: 'Hiparco contou 1.022 estrelas; Ptolomeu contou 1.026.',
    explanation:
      'Jeremias 33:22 afirma que não se pode contar o exército dos céus. Jó 26:7 fala da terra pairando sobre o nada, e Levítico 17:11 afirma que a vida está no sangue, numa época em que a sangria era tratamento padrão.',
    options: [
      { id: 'a', text: 'Jó 26:7 e a existência de bactérias' },
      { id: 'b', text: 'Jeremias 33:22 e a impossibilidade de contar as estrelas' },
      { id: 'c', text: 'Levítico 17:11 e o movimento das placas tectônicas' },
      { id: 'd', text: 'Provérbios 8 e a circulação sanguínea' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'A-ME-04',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Cristianismo progressivo',
    prompt: 'Quem mais falou sobre o inferno nas Escrituras?',
    hint: 'Conte as ocorrências de Hades e Geena no Novo Testamento.',
    explanation:
      'Das 12 ocorrências de Hades no Novo Testamento, 11 são de Jesus. De cerca de 13 de Geena, 9 são dele. Tártaro aparece uma única vez, por Pedro. Isso desmonta o argumento de que crer no inferno é incompatível com o Jesus dos evangelhos.',
    options: [
      { id: 'a', text: 'Paulo' },
      { id: 'b', text: 'Pedro' },
      { id: 'c', text: 'Jesus' },
      { id: 'd', text: 'João, no Apocalipse' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'A-ME-05',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Gnosticismo',
    prompt: 'O gnosticismo, surgido no século II, se caracterizava por:',
    hint: 'Nessa visão, a serpente do jardim é quem liberta a humanidade.',
    explanation:
      'O gnosticismo tentou pegar carona na credibilidade do cristianismo, defendendo a salvação pela gnosis, o conhecimento. Na sua leitura invertida de Gênesis, a serpente liberta a humanidade e o Deus criador é a figura malévola. Produziu apócrifos como o Evangelho de Judas.',
    options: [
      { id: 'a', text: 'Negar a divindade do Espírito Santo' },
      { id: 'b', text: 'Defender a salvação pelo conhecimento, invertendo a leitura de Gênesis' },
      { id: 'c', text: 'Afirmar que Cristo tinha uma só natureza' },
      { id: 'd', text: 'Rejeitar a autoridade dos apóstolos em favor da tradição oral' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'A-ME-06',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Islamismo',
    prompt: 'Por que as Suratas 5:46-47 e 10:94 são úteis para pregar a muçulmanos?',
    hint: 'O gancho está no que o próprio livro deles valida.',
    explanation:
      'A Surata 5:46-47 chama o Evangelho de orientação e luz e manda que os seguidores do Evangelho julguem segundo o que Deus nele revelou. A Surata 10:94 orienta a perguntar aos que leem os livros anteriores. Isso abre uma ponte a partir do próprio livro sagrado deles.',
    options: [
      { id: 'a', text: 'Porque negam a existência de Maomé' },
      { id: 'b', text: 'Porque afirmam que Jesus é Deus encarnado' },
      {
        id: 'c',
        text: 'Porque o próprio Alcorão chama o Evangelho de orientação e luz e manda consultar quem leu os livros anteriores',
      },
      { id: 'd', text: 'Porque descrevem a crucificação de Jesus em detalhes' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'A-ME-07',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Teoria crítica',
    prompt: 'O chamado "problema do Robin Hood" aponta qual falha da teoria crítica?',
    hint: 'Robin Hood tira do rico e dá ao pobre; o que acontece quando o pobre enriquece?',
    explanation:
      'Se apenas os oprimidos têm autoridade moral, a inversão de papéis é só questão de tempo. Daí a hipocrisia observável em movimentos que condenam a opressão e a praticam como vingança, ou movimentos antirracistas que se tornam racistas.',
    options: [
      { id: 'a', text: 'Que ela nega a existência do mundo material' },
      { id: 'b', text: 'Que ela permite que o oprimido se torne opressor, num ciclo sem fim' },
      { id: 'c', text: 'Que ela é incompatível com a teoria da evolução' },
      { id: 'd', text: 'Que ela não oferece explicação para a origem do universo' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'A-ME-08',
    area: 'apologetica',
    type: 'multipla',
    topic: 'Unidade temática',
    prompt: 'Qual descrição corresponde à composição da Bíblia?',
    hint: 'Compare com o Alcorão, escrito por um homem só.',
    explanation:
      'A Bíblia foi escrita por cerca de 40 autores, ao longo de 1.500 anos, em 3 continentes e 3 línguas, por poetas, profetas, príncipes, pescadores, soldados e um médico, mantendo uma narrativa unificada com mais de 60 mil referências cruzadas.',
    options: [
      { id: 'a', text: '27 autores, 500 anos, 2 continentes, 2 línguas' },
      { id: 'b', text: 'Cerca de 40 autores, 1.500 anos, 3 continentes, 3 línguas' },
      { id: 'c', text: '12 autores, 300 anos, 1 continente, 1 língua' },
      { id: 'd', text: '66 autores, 2.000 anos, 4 continentes, 5 línguas' },
    ],
    correctOptionId: 'b',
  },

  /* ==================== APOLOGÉTICA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'A-VF-01',
    area: 'apologetica',
    type: 'vf',
    topic: 'Fundamento bíblico',
    prompt:
      '1 Pedro 3:15-16 ordena que estejamos prontos a responder a qualquer um, mas exige que isso seja feito com educação e respeito.',
    hint: 'O texto define não só o que fazer, mas o como.',
    explanation:
      'O texto estabelece dois princípios: nossa esperança em Cristo é digna de explicação, e o modo importa. Ganhar discussões sem ganhar pessoas desrespeita a própria Escritura.',
    correctAnswer: true,
  },
  {
    id: 'A-VF-02',
    area: 'apologetica',
    type: 'vf',
    topic: 'Interpretação',
    prompt: 'Toda a Bíblia é verdade e toda a Bíblia deve ser lida literalmente.',
    hint: 'Se fosse assim, você já teria arrancado o próprio olho direito.',
    explanation:
      'Toda a Bíblia é verdade, mas nem toda a Bíblia é literal. É preciso identificar o estilo literário: narrativa histórica, poesia, canção, correspondência, literatura apocalíptica. Confundir os gêneros produz interpretações erradas.',
    correctAnswer: false,
  },
  {
    id: 'A-VF-03',
    area: 'apologetica',
    type: 'vf',
    topic: 'Manuscritos',
    prompt:
      'Os Manuscritos do Mar Morto revelaram alterações doutrinárias significativas no texto do Antigo Testamento.',
    hint: 'A diferença encontrada foi quase toda ortográfica.',
    explanation:
      'Encontrados entre 1947 e 1956 e escritos por volta de 100 aC, eles anteciparam em cerca de mil anos as cópias mais antigas conhecidas. A alteração encontrada foi de cerca de 0,5%, quase toda ortográfica. O conteúdo não mudou.',
    correctAnswer: false,
  },
  {
    id: 'A-VF-04',
    area: 'apologetica',
    type: 'vf',
    topic: 'Integridade textual',
    prompt:
      'Bart Ehrman, doutor em Novo Testamento que não crê em Jesus, conduziu um estudo que chegou a cerca de 99,5% de integridade textual do Novo Testamento.',
    hint: 'O estudo tinha justamente a intenção oposta.',
    explanation:
      'Ehrman e Bruce Metzger conduziram o maior estudo de integridade textual do Novo Testamento com a intenção de atacá-lo, e chegaram a 99,5%. Por não ter viés cristão, o resultado é apologeticamente muito forte.',
    correctAnswer: true,
  },
  {
    id: 'A-VF-05',
    area: 'apologetica',
    type: 'vf',
    topic: 'História da apologética',
    prompt: 'Justino Mártir é considerado o pai da apologética.',
    hint: 'Era professor de filosofia e fundou uma escola chamada Verdadeira Filosofia.',
    explanation:
      'Justino era professor de filosofia e foi estudar o Evangelho para desmenti-lo, acabando convertido. Fundou a escola Verdadeira Filosofia, venceu debates públicos e chegou a pedir audiência ao imperador para explicar que o cristianismo fazia sentido. Foi executado por isso.',
    correctAnswer: true,
  },
  {
    id: 'A-VF-06',
    area: 'apologetica',
    type: 'vf',
    topic: 'Teoria crítica',
    prompt:
      'Na teoria crítica, o conhecimento e a verdade são determinados pela localização social do indivíduo.',
    hint: 'Daí decorre a ideia de que só os oprimidos teriam autoridade moral.',
    explanation:
      'A teoria crítica sustenta que o conhecimento é determinado pela localização social e que a hegemonia controla a moralidade, de modo que apenas os oprimidos teriam autoridade moral para dizer o que é certo. Isso a torna vulnerável ao mesmo colapso do relativismo moral.',
    correctAnswer: true,
  },
  {
    id: 'A-VF-07',
    area: 'apologetica',
    type: 'vf',
    topic: 'Islamismo',
    prompt: 'O Alcorão reconhece Jesus como grande profeta, mas nega sua crucificação e ressurreição.',
    hint: 'Segundo o texto, alguém teria sido trocado de lugar com Ele.',
    explanation:
      'O Alcorão diz que Jesus não foi morto e que teria sido trocado de lugar. Isso gera contradição interna: Jesus previu a própria morte e ressurreição; se não ocorreram, Ele mentiu e não seria profeta. Somado à validação dos evangelhos pelo próprio Alcorão, o argumento fecha em pinça.',
    correctAnswer: true,
  },
  {
    id: 'A-VF-08',
    area: 'apologetica',
    type: 'vf',
    topic: 'Problema do mal',
    prompt: 'Segundo a Bíblia, o inferno foi criado para a humanidade.',
    hint: 'O texto identifica claramente para quem ele foi preparado.',
    explanation:
      'A Bíblia diz que o inferno foi preparado para o diabo e seus anjos. O ser humano chega lá porque, no jardim, ao obedecer à serpente e desobedecer a Deus, sujeitou-se a outro senhorio e passou a partilhar o destino dele. Cristo, como segundo Adão, nos traz de volta ao Seu senhorio.',
    correctAnswer: false,
  },

  /* ==================== APOLOGÉTICA - DISCURSIVAS ==================== */
  {
    id: 'A-DIS-01',
    area: 'apologetica',
    type: 'discursiva',
    topic: 'Argumento moral',
    prompt: 'Explique o argumento moral usado na apologética, incluindo o conceito de "cadeira cósmica".',
    hint: 'A sequência tem três etapas: sociedade, indivíduo e a conclusão necessária.',
    explanation:
      'C.S. Lewis observa dois fenômenos presentes em todos os povos de todos os tempos: todos estabelecem um código de certo e errado, e todos falham em cumpri-lo. A partir disso, testa-se quem poderia definir a moral. Se for a sociedade, então o canibalismo tribal está certo por ser costume, e a Alemanha nazista não fez nada de errado, já que não quebrou nenhuma lei própria. Como a sociedade comprovadamente erra, seguir a norma social não garante estar certo. Se for o indivíduo, basta perguntar se ele já mentiu ou roubou para constatar que ele também falha. Se nem a sociedade nem o indivíduo conseguem definir corretamente o certo e o errado, então só um ser perfeito poderia fazê-lo, o que se conecta à terceira via de Tomás de Aquino. A "cadeira cósmica" é o trono de onde se define o que é bom e o que é mau. Alguém precisa se sentar nela. Quando alguém diz que não confia nas definições de Deus, é ele mesmo quem se senta ali, sendo que sabe ser imperfeito. As opções são confiar na sociedade imperfeita, em si mesmo imperfeito, ou em Deus.',
    modelAnswer:
      'C.S. Lewis observa dois fenômenos presentes em todos os povos de todos os tempos: todos estabelecem um código de certo e errado, e todos falham em cumpri-lo. A partir disso, testa-se quem poderia definir a moral. Se for a sociedade, então o canibalismo tribal está certo por ser costume, e a Alemanha nazista não fez nada de errado, já que não quebrou nenhuma lei própria. Como a sociedade comprovadamente erra, seguir a norma social não garante estar certo. Se for o indivíduo, basta perguntar se ele já mentiu ou roubou para constatar que ele também falha. Se nem a sociedade nem o indivíduo conseguem definir corretamente o certo e o errado, então só um ser perfeito poderia fazê-lo, o que se conecta à terceira via de Tomás de Aquino. A "cadeira cósmica" é o trono de onde se define o que é bom e o que é mau. Alguém precisa se sentar nela. Quando alguém diz que não confia nas definições de Deus, é ele mesmo quem se senta ali, sendo que sabe ser imperfeito. As opções são confiar na sociedade imperfeita, em si mesmo imperfeito, ou em Deus.',
    keyPoints: [
      'Os dois fenômenos observados por C.S. Lewis',
      'Falha da sociedade como critério (exemplo do nazismo)',
      'Falha do indivíduo como critério',
      'Conclusão: só um ser perfeito pode definir',
      'Conceito de cadeira cósmica e as três alternativas',
    ],
  },
  {
    id: 'A-DIS-02',
    area: 'apologetica',
    type: 'discursiva',
    topic: 'Veracidade bíblica',
    prompt:
      'Discorra sobre os quatro pilares que sustentam a confiabilidade da Bíblia, dando pelo menos um exemplo de cada.',
    hint: 'Histórica, científica, profética e temática.',
    explanation:
      'O primeiro é a confiabilidade histórica: os copistas copiavam letra por letra, e os Manuscritos do Mar Morto, encontrados entre 1947 e 1956 e escritos por volta de 100 aC, confirmaram uma integridade de cerca de 99,5%; a arqueologia confirmou as 54 cidades, 39 países e 9 ilhas descritos por Lucas em Atos, além da existência dos hititas, antes tidos como ficção. O segundo é a confiabilidade científica: Jó 26:7 fala da terra pairando sobre o nada numa época em que se acreditava em Atlas ou em elefantes; Jeremias 33:22 diz que as estrelas não podem ser contadas; Levítico 17:11 afirma que a vida está no sangue, e o mesmo livro trata de higiene e quarentena. Tão importante quanto o que a Bíblia diz é o que ela não diz, pois nenhuma das crenças científicas erradas da época entrou no texto. O terceiro é a confiabilidade profética: mais de 300 profecias cumpridas em Jesus, Ciro nomeado cerca de 200 anos antes de nascer, Daniel antecipando Alexandre e a divisão do império grego, e a probabilidade de 1 em 10¹⁷ para apenas oito profecias. O quarto é a unidade temática: cerca de 40 autores, 1.500 anos, 3 continentes, 3 línguas e estilos literários diferentes, com uma única narrativa coerente.',
    modelAnswer:
      'O primeiro é a confiabilidade histórica: os copistas copiavam letra por letra, e os Manuscritos do Mar Morto, encontrados entre 1947 e 1956 e escritos por volta de 100 aC, confirmaram uma integridade de cerca de 99,5%; a arqueologia confirmou as 54 cidades, 39 países e 9 ilhas descritos por Lucas em Atos, além da existência dos hititas, antes tidos como ficção. O segundo é a confiabilidade científica: Jó 26:7 fala da terra pairando sobre o nada numa época em que se acreditava em Atlas ou em elefantes; Jeremias 33:22 diz que as estrelas não podem ser contadas; Levítico 17:11 afirma que a vida está no sangue, e o mesmo livro trata de higiene e quarentena. Tão importante quanto o que a Bíblia diz é o que ela não diz, pois nenhuma das crenças científicas erradas da época entrou no texto. O terceiro é a confiabilidade profética: mais de 300 profecias cumpridas em Jesus, Ciro nomeado cerca de 200 anos antes de nascer, Daniel antecipando Alexandre e a divisão do império grego, e a probabilidade de 1 em 10¹⁷ para apenas oito profecias. O quarto é a unidade temática: cerca de 40 autores, 1.500 anos, 3 continentes, 3 línguas e estilos literários diferentes, com uma única narrativa coerente.',
    keyPoints: [
      'Histórica: copistas, Mar Morto, arqueologia',
      'Científica: Jó, Jeremias, Levítico, e o que a Bíblia não diz',
      'Profética: 300+ profecias, Ciro, Daniel, 1 em 10¹⁷',
      'Temática: 40 autores, 1.500 anos, 3 continentes, 3 línguas',
    ],
  },
  {
    id: 'A-DIS-03',
    area: 'apologetica',
    type: 'discursiva',
    topic: 'Problema do mal',
    prompt:
      'Explique a ilustração do juiz e como ela demonstra que a cruz une justiça e misericórdia.',
    hint: 'São três cenários possíveis para o mesmo crime.',
    explanation:
      'Imagine alguém que rouba tudo o que uma vítima construiu e gasta o dinheiro, sendo levado a juízo sem defesa possível. No primeiro cenário, o juiz o perdoa e o solta: é misericordioso, mas injusto com a vítima, porque o buraco continua aberto e o mal não foi tratado. No segundo, o juiz o condena a restituir cada centavo, nem que leve gerações: é justo, mas sem misericórdia. Essa é a imagem da sentença eterna do pecado, pois roubamos algo de valor eterno e por isso a restituição seria eterna. No terceiro cenário, o juiz profere a condenação e então desce do palanque e paga a dívida do próprio bolso: há justiça e misericórdia ao mesmo tempo, às custas do juiz. Esse é o Evangelho. Deus não exonerou a sentença, porque exonerar não lida com o mal; Ele tomou o prejuízo sobre si em Cristo. Por isso o arrependimento é um luxo bancado pelo amor, um cartão de crédito debitado na conta de Deus.',
    modelAnswer:
      'Imagine alguém que rouba tudo o que uma vítima construiu e gasta o dinheiro, sendo levado a juízo sem defesa possível. No primeiro cenário, o juiz o perdoa e o solta: é misericordioso, mas injusto com a vítima, porque o buraco continua aberto e o mal não foi tratado. No segundo, o juiz o condena a restituir cada centavo, nem que leve gerações: é justo, mas sem misericórdia. Essa é a imagem da sentença eterna do pecado, pois roubamos algo de valor eterno e por isso a restituição seria eterna. No terceiro cenário, o juiz profere a condenação e então desce do palanque e paga a dívida do próprio bolso: há justiça e misericórdia ao mesmo tempo, às custas do juiz. Esse é o Evangelho. Deus não exonerou a sentença, porque exonerar não lida com o mal; Ele tomou o prejuízo sobre si em Cristo. Por isso o arrependimento é um luxo bancado pelo amor, um cartão de crédito debitado na conta de Deus.',
    keyPoints: [
      'Cenário 1: perdão sem justiça, o buraco fica aberto',
      'Cenário 2: justiça sem misericórdia, restituição eterna',
      'Cenário 3: o juiz condena e paga a dívida',
      'Deus não exonerou a sentença, tomou o prejuízo sobre si',
      'A cruz une justiça e misericórdia',
    ],
  },
  {
    id: 'A-DIS-04',
    area: 'apologetica',
    type: 'discursiva',
    topic: 'Cristianismo progressivo',
    prompt:
      'Explique por que o cristianismo progressivo é considerado a mais subversiva das cosmovisões e aponte suas incoerências lógicas.',
    hint: 'O problema não é o que ele nega abertamente, é o que ele mantém com cara de Evangelho.',
    explanation:
      'Ele é considerado o mais subversivo porque tem cara de Evangelho: mantém Jesus como ícone, enfatiza pautas boas como justiça social e acolhimento, e por isso ressoa com muita gente. Mas sua premissa de fundo é que a Bíblia não é a voz de Deus, e sim um diário espiritual imperfeito. Daí decorre a seletividade: fica-se com as partes agradáveis e descartam-se as difíceis. Em João 8, aproveita-se o "eu também não te condeno" e corta-se o "vai e não peques mais". A primeira incoerência é que Jesus é o centro do movimento, mas foi justamente quem mais falou sobre o inferno, doutrina que o movimento rejeita por ser intolerante. A segunda é que, se as pessoas são boas e o inferno não existe, não há necessidade real de conversão, o que elimina o fogo missionário e reduz tudo a assistencialismo, que alivia esta vida mas não salva ninguém para a eternidade. A terceira é a crítica de Agostinho: quem crê apenas naquilo de que gosta no Evangelho não crê no Evangelho, crê em si mesmo. Sem fundamento externo, a cosmovisão não tem onde ficar de pé e escorrega facilmente para o sincretismo.',
    modelAnswer:
      'Ele é considerado o mais subversivo porque tem cara de Evangelho: mantém Jesus como ícone, enfatiza pautas boas como justiça social e acolhimento, e por isso ressoa com muita gente. Mas sua premissa de fundo é que a Bíblia não é a voz de Deus, e sim um diário espiritual imperfeito. Daí decorre a seletividade: fica-se com as partes agradáveis e descartam-se as difíceis. Em João 8, aproveita-se o "eu também não te condeno" e corta-se o "vai e não peques mais". A primeira incoerência é que Jesus é o centro do movimento, mas foi justamente quem mais falou sobre o inferno, doutrina que o movimento rejeita por ser intolerante. A segunda é que, se as pessoas são boas e o inferno não existe, não há necessidade real de conversão, o que elimina o fogo missionário e reduz tudo a assistencialismo, que alivia esta vida mas não salva ninguém para a eternidade. A terceira é a crítica de Agostinho: quem crê apenas naquilo de que gosta no Evangelho não crê no Evangelho, crê em si mesmo. Sem fundamento externo, a cosmovisão não tem onde ficar de pé e escorrega facilmente para o sincretismo.',
    keyPoints: [
      'Tem aparência de Evangelho e usa pautas boas',
      'Premissa: a Bíblia não é a voz de Deus',
      'Seletividade (exemplo de João 8)',
      'Jesus foi quem mais falou do inferno',
      'Sem condenação não há urgência missionária',
      'Crítica de Agostinho: crer em si mesmo, não no Evangelho',
    ],
  },
];
