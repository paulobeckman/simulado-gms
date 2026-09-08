import type { Question } from '../types';

/*
 * Banco de questões do assunto "Hermenêutica: Método de Estudo Bíblico" (Aula 02).
 * 25 questões: 12 múltipla escolha, 7 verdadeiro ou falso, 6 discursivas.
 * O campo "sets" define a divisão: a fixação usa as marcadas com 'fixacao';
 * a prova simulada usa todas.
 * Não alterar, não remover e não inventar questões. Manter os ids como estão.
 */
export const hermeneuticaQuestions: Question[] = [
  /* ==================== HERMENÊUTICA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'HER-ME-01',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Definições',
    prompt: 'Qual é a diferença entre hermenêutica e exegese?',
    hint: 'Uma delas desce até a palavra, a outra sobe até o sentido da frase.',
    explanation:
      'A exegese trabalha cada palavra do texto, o significado que ela tinha na língua original e a intenção do autor ao empregá-la. A hermenêutica trabalha o sentido da frase. Método de estudo bíblico é uma parte da hermenêutica.',
    options: [
      { id: 'a', text: 'São sinônimos, apenas com origens linguísticas diferentes' },
      {
        id: 'b',
        text: 'A exegese estuda o significado de cada palavra do texto na língua original; a hermenêutica trabalha o sentido da frase, o que o autor quis dizer',
      },
      {
        id: 'c',
        text: 'A hermenêutica estuda cada palavra no original e a exegese cuida da aplicação prática',
      },
      { id: 'd', text: 'A hermenêutica se aplica ao Antigo Testamento e a exegese ao Novo Testamento' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HER-ME-02',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Etapas do estudo bíblico',
    prompt: 'Quais são as três grandes partes de um estudo bíblico, na ordem correta?',
    hint: 'Sem a primeira etapa, as outras duas ficam comprometidas.',
    explanation:
      'A observação busca o que o autor diz. A interpretação busca o que significa aquilo que o autor diz. A aplicação associa o que o texto diz e significa com a nossa vida, provocando uma reação: gratidão, confissão, correção. Quanto mais precisa a observação, maior a chance de uma boa interpretação.',
    options: [
      { id: 'a', text: 'Interpretação, observação e aplicação' },
      { id: 'b', text: 'Leitura, memorização e pregação' },
      { id: 'c', text: 'Observação, interpretação e aplicação' },
      { id: 'd', text: 'Observação, aplicação e interpretação' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HER-ME-03',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Observação',
    prompt: 'Quais são as três coisas necessárias para a observação de um texto bíblico?',
    hint: 'Uma delas é fazer o que você não quer, outra é continuar quando a vontade acaba, e a terceira não depende de você.',
    explanation:
      'Disciplina é fazer o que você não quer para alcançar o que você quer. Perseverança é continuar quando a vontade termina. Dependência é depender totalmente do Espírito Santo, que é o intérprete da Bíblia e quem nos guia em toda a verdade. Vontade, precisão e persistência formam a sigla VPP, que é a exigência da observação, e não as três coisas necessárias.',
    options: [
      { id: 'a', text: 'Vontade, precisão e persistência' },
      { id: 'b', text: 'Disciplina, perseverança e dependência do Espírito Santo' },
      { id: 'c', text: 'Disciplina, memorização e conhecimento do grego' },
      { id: 'd', text: 'Oração, jejum e vigília' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HER-ME-04',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Observação',
    prompt: 'A exigência da observação é resumida na sigla VPP. O que ela significa?',
    hint: 'A do meio é a que faz uma vírgula mudar tudo.',
    explanation:
      'Sem vontade não há observação, porque é preciso querer saber de fato o que o texto diz. A precisão importa porque um ponto ou uma vírgula alteram o sentido, como em Lucas 23:43. A persistência é ficar no texto, como quem encontra uma pedra ao cavar e precisa encarar aquilo até o fim.',
    options: [
      { id: 'a', text: 'Ver, planejar e pregar' },
      { id: 'b', text: 'Vontade, paciência e prática' },
      { id: 'c', text: 'Vontade, precisão e persistência' },
      { id: 'd', text: 'Versículo, parágrafo e passagem' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HER-ME-05',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Processo de observação',
    prompt: 'Qual é o primeiro passo do processo de observação e qual o mínimo recomendado?',
    hint: 'O objetivo é a mente ficar ensopada com o texto.',
    explanation:
      'O primeiro passo é ler, ler e ler, no mínimo três vezes, previsualizando a cena, vendo o autor dizer aquelas palavras, lendo em voz alta e parafraseando. O propósito da observação é deixar a mente envolvida e permeada com o texto, o que não acontece no meio de distrações.',
    options: [
      { id: 'a', text: 'Consultar um comentário bíblico antes de ler o texto' },
      { id: 'b', text: 'Listar os termos-chave, pelo menos cinco por texto' },
      { id: 'c', text: 'Ler o texto, no mínimo três vezes, e quantas vezes for possível' },
      { id: 'd', text: 'Escrever a aplicação pessoal antes de qualquer análise' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HER-ME-06',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Processo de observação',
    prompt: 'Quais são as perguntas com as quais se deve bombardear o texto?',
    hint: 'São sete, e nenhuma delas pode ganhar complemento.',
    explanation:
      'As perguntas devem ser feitas puras, sem acréscimo: o quê é só o quê, onde é só onde, como é só como. Cada observação deve ser numerada, com o versículo anotado ao fim dela, e o conjunto organizado de forma fácil de visualizar.',
    options: [
      { id: 'a', text: 'Quem, quando, onde e quanto tempo levou' },
      {
        id: 'b',
        text: 'O quê, onde, como, quem, por quê, quando e para quem, sem acrescentar nenhuma palavra a elas',
      },
      { id: 'c', text: 'O que eu sinto, o que Deus quer me dizer e o que devo fazer hoje' },
      { id: 'd', text: 'Qual o versículo-chave, qual a doutrina e qual a aplicação' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HER-ME-07',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'Em Mateus 6:33, a que se referem "todas estas coisas" que serão acrescentadas?',
    hint: 'Olhe os versículos anteriores, sobre os lírios do campo e as aves do céu.',
    explanation:
      'O texto diz "todas estas coisas", e não "todas as demais coisas", como se costuma citar. No contexto, Jesus fala a discípulos com medo de passar fome e ficar sem roupa, e diz que a preocupação com comer, beber e vestir é própria dos ímpios. Ele garante que quem busca primeiro o reino e a justiça de Deus terá o que comer, beber e vestir.',
    options: [
      { id: 'a', text: 'Casa, carro, emprego e prosperidade financeira' },
      { id: 'b', text: 'Dons espirituais e autoridade no ministério' },
      { id: 'c', text: 'Comer, beber e vestir' },
      { id: 'd', text: 'Sabedoria, entendimento e revelação' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HER-ME-08',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'Lido junto com o versículo 12, o que o "tudo posso" de Filipenses 4:13 inclui?',
    hint: 'O versículo 12 fala de saber ter fartura e saber passar fome.',
    explanation:
      'Paulo diz que sabe estar humilhado e honrado, ter fartura e passar fome, e que em todas essas coisas pode naquele que o fortalece. Portanto o "tudo" inclui passar fome naquele que me fortalece, ser humilhado naquele que me fortalece. É o oposto da leitura triunfalista.',
    options: [
      { id: 'a', text: 'Qualquer coisa que se peça com fé suficiente' },
      {
        id: 'b',
        text: 'Passar fome, ser humilhado e viver a necessidade, tanto quanto a fartura',
      },
      { id: 'c', text: 'Apenas os milagres registrados nos evangelhos' },
      { id: 'd', text: 'Somente o que estiver de acordo com os mandamentos' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HER-ME-09',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'O que Colossenses 3:15 está de fato ensinando?',
    hint: 'Leia dos versículos 11 ao 14 e veja do que o texto está tratando. E repare que a palavra sentir nem aparece ali.',
    explanation:
      'O contexto trata de relacionamento: ternos afetos de misericórdia, bondade, humildade, mansidão, suportar uns aos outros e perdoar uns aos outros. Em outras traduções o versículo diz que a paz de Deus domine em vossos corações. O sentido é preservar a paz e a unidade entre os irmãos, não validar decisões pessoais por um sentimento.',
    options: [
      { id: 'a', text: 'Que sentir paz é o critério para tomar decisões' },
      { id: 'b', text: 'Que a paz de Cristo garante que nada dará errado com quem crê' },
      { id: 'c', text: 'Que é preciso orar até sentir paz antes de qualquer decisão importante' },
      {
        id: 'd',
        text: 'Que não se deve fazer nada que quebre a paz entre os irmãos, pois fomos chamados a um só corpo',
      },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'HER-ME-10',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'Segundo o contexto de Efésios 5:18 em diante, como se dá o encher do Espírito?',
    hint: 'Não existe ponto final depois de "enchei-vos do Espírito".',
    explanation:
      'O texto não termina em "enchei-vos do Espírito"; ele continua descrevendo a vida em comunidade. Em todo o Novo Testamento ninguém é cheio do Espírito sozinho: Atos 2 com os 120, Atos 4, Atos 8, Atos 10 na casa de Cornélio e Atos 19 em Éfeso, sempre em grupo. A promessa de Lucas 24 é dada a "vós", segunda pessoa do plural.',
    options: [
      { id: 'a', text: 'Entrando no quarto e fechando a porta' },
      { id: 'b', text: 'Por meio de jejum prolongado' },
      {
        id: 'c',
        text: 'Falando entre vós com salmos, hinos e cânticos espirituais, dando graças e sujeitando-vos uns aos outros, ou seja, no meio da comunidade',
      },
      { id: 'd', text: 'Pela imposição de mãos de um pregador ungido' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HER-ME-11',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'multipla',
    topic: 'Termos-chave',
    prompt: 'Em Efésios 1:7, o que significa a palavra redenção?',
    hint: 'Existe uma cidade no Ceará com esse nome, por causa da abolição.',
    explanation:
      'Redenção é comprar um escravo para dar-lhe liberdade. Assim, ter a redenção pelo sangue de Cristo é ter sido liberto da escravidão do pecado e do império das trevas. No mesmo versículo aparecem outros dois termos especiais que exigem estudo: remissão e graça.',
    options: [
      { id: 'a', text: 'O perdão concedido sem qualquer preço pago' },
      { id: 'b', text: 'A restauração de um povo à sua terra' },
      { id: 'c', text: 'A purificação ritual do templo' },
      { id: 'd', text: 'O ato de comprar um escravo para libertá-lo' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'HER-ME-12',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Termos-chave',
    prompt:
      'No diálogo de Jesus com Pedro em João 21, qual é a dinâmica das palavras gregas para amor?',
    hint: 'A mudança na terceira pergunta é justamente o que entristece Pedro.',
    explanation:
      'No português tudo é amor, mas o grego distingue eros, fileo e ágape. Jesus pergunta pelo amor ágape e Pedro responde com fileo, o afeto de quem tem apreço. Na terceira vez Jesus desce ao nível de Pedro e pergunta com fileo, e Pedro se entristece. Em seguida Jesus anuncia que Pedro estenderá as mãos e outro o cingirá, indicando com que morte glorificaria a Deus, ou seja, aquele amor ainda cresceria.',
    options: [
      { id: 'a', text: 'Jesus pergunta três vezes com eros e Pedro responde com ágape' },
      {
        id: 'b',
        text: 'Jesus pergunta duas vezes usando ágape, Pedro responde com fileo, e na terceira vez Jesus muda e pergunta com fileo',
      },
      { id: 'c', text: 'Jesus e Pedro usam a mesma palavra nas três vezes' },
      { id: 'd', text: 'Pedro responde com ágape nas três vezes e Jesus aceita a resposta' },
    ],
    correctOptionId: 'b',
  },

  /* ==================== HERMENÊUTICA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'HER-VF-01',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Fé e cultura',
    prompt:
      'Boa parte do que a igreja crê é formada mais pela cultura em que ela vive do que pela teologia bíblica.',
    hint: 'Pense por que cantamos, oramos e cultuamos do jeito que fazemos, e como isso muda de país para país.',
    explanation:
      'Seria uma bênção se o nosso cristianismo fosse formado por teologia bíblica, mas em grande parte ele é formado pela cultura. Entendemos a Deus e à Bíblia com os olhos da cultura. Reconhecer isso não é acusação de pecado, é o cuidado de colocar a verdade bíblica acima da verdade cultural.',
    correctAnswer: true,
  },
  {
    id: 'HER-VF-02',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Fé e cultura',
    prompt: 'O pré-tribulacionismo é uma linha teológica presente na igreja desde os primeiros séculos.',
    hint: 'Pergunte-se como soaria essa doutrina para uma igreja perseguida.',
    explanation:
      'Durante cerca de 1900 anos não houve na igreja uma linha teológica que cresse que a igreja não passaria pela tribulação, porque a igreja sempre viveu perseguida. A ideia surge quando as guerras religiosas cessam e gerações passam a nascer em prosperidade e paz. Um cristão perseguido hoje, na Índia por exemplo, não reconheceria essa premissa.',
    correctAnswer: false,
  },
  {
    id: 'HER-VF-03',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Precisão',
    prompt:
      'No grego de Lucas 23:43 não existe vírgula, e a posição dela na tradução altera o sentido da frase.',
    hint: 'Compare "em verdade te digo hoje, estarás comigo no paraíso" com "em verdade te digo, hoje estarás comigo no paraíso".',
    explanation:
      'Sem a vírgula no original, uma leitura diz que Jesus estava falando naquele dia e a outra diz que o ladrão estaria com Ele no paraíso naquele dia. Isso mostra por que a precisão é uma das exigências da observação.',
    correctAnswer: true,
  },
  {
    id: 'HER-VF-04',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Doutrina e erro',
    prompt:
      'A primeira doutrina de Satanás no Novo Testamento é a de que o filho de Deus não pode passar por problema ou necessidade.',
    hint: 'Está na tentação no deserto, diante de alguém com fome.',
    explanation:
      'A proposta foi: se és filho de Deus, manda que estas pedras se tornem pães. A ideia de que ser filho de Deus exclui a fome e a dificuldade não vem de Deus. A teologia triunfalista que nasce disso produz crentes frustrados, que se irritam com Deus por uma promessa que Ele não fez.',
    correctAnswer: true,
  },
  {
    id: 'HER-VF-05',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Contexto',
    prompt:
      'O Novo Testamento registra casos de pessoas cheias do Espírito Santo sozinhas, em oração particular.',
    hint: 'Percorra Atos 2, 4, 8, 10 e 19 e veja o que todos têm em comum.',
    explanation:
      'Em todo o Novo Testamento ninguém é cheio ou batizado no Espírito Santo sozinho. Foi sempre em grupo: os 120 em Atos 2, a igreja em Atos 4, Samaria em Atos 8, a casa de Cornélio em Atos 10 e Éfeso em Atos 19. A promessa em Lucas 24 é dada a "vós", no plural. Isso não anula o valor da oração no secreto, que a Bíblia ensina em outro texto e com outro propósito.',
    correctAnswer: false,
  },
  {
    id: 'HER-VF-06',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'vf',
    topic: 'Fidelidade ao texto',
    prompt:
      'Citar a Escritura acrescentando palavras que não estão nela, como "todas as demais coisas", é uma forma de alterar o texto bíblico.',
    hint: 'Apocalipse 22 trata de quem acrescenta e de quem tira.',
    explanation:
      'Muita gente pensa que alterar a Bíblia é editar uma Bíblia nova, mas isso acontece toda hora, na citação e na pregação. Apocalipse 22 adverte tanto quem acrescenta quanto quem tira. A observação cuidadosa do texto é o que evita esse erro.',
    correctAnswer: true,
  },
  {
    id: 'HER-VF-07',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Uso das Escrituras',
    prompt: 'A Bíblia deve ser lida como a história dos grandes homens de Deus.',
    hint: 'Lembre de Abraão no Egito, de Elias em 1 Reis 19 e de Davi com Bate-Seba.',
    explanation:
      'A Bíblia é o livro da história do grande Deus dos homens. Abraão entregou a esposa por medo, Elias abandonou o ministério e pediu para morrer, Davi tomou Bate-Seba e mandou matar Urias. Não é o grande Davi, é o grande Deus de Davi. Você não precisa ser grande, precisa ser servo do Deus grande.',
    correctAnswer: false,
  },

  /* ==================== HERMENÊUTICA - DISCURSIVAS ==================== */
  {
    id: 'HER-DIS-01',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'discursiva',
    topic: 'Observação',
    prompt:
      'Explique as três coisas necessárias para a observação de um texto bíblico, definindo cada uma delas.',
    hint: 'Duas dependem de você e uma não.',
    explanation:
      'A primeira é a disciplina, que é fazer aquilo que você não quer para alcançar aquilo que você quer. Existe diferença entre o que a pessoa deseja e o preço que ela está disposta a pagar, e o preço costuma ser justamente o que ela não quer. Na prática, disciplina é separar e usar um tempo determinado, tornando aquele momento prioridade, planejado para estudar a Bíblia e não apenas ler devocionalmente. A segunda é a perseverança, que é continuar quando a vontade termina. Ninguém precisa de perseverança para fazer o que quer; ela é necessária para desenvolver o estudo já iniciado, fazendo observações, gastando tempo em interpretar, orando, escrevendo e observando. A terceira é a dependência total do Espírito Santo, que é o intérprete da Bíblia e quem nos guia em toda a verdade, pois a promessa é que Ele nos ensinará a respeito de todas as coisas.',
    modelAnswer:
      'A primeira é a disciplina, que é fazer aquilo que você não quer para alcançar aquilo que você quer. Existe diferença entre o que a pessoa deseja e o preço que ela está disposta a pagar, e o preço costuma ser justamente o que ela não quer. Na prática, disciplina é separar e usar um tempo determinado, tornando aquele momento prioridade, planejado para estudar a Bíblia e não apenas ler devocionalmente. A segunda é a perseverança, que é continuar quando a vontade termina. Ninguém precisa de perseverança para fazer o que quer; ela é necessária para desenvolver o estudo já iniciado, fazendo observações, gastando tempo em interpretar, orando, escrevendo e observando. A terceira é a dependência total do Espírito Santo, que é o intérprete da Bíblia e quem nos guia em toda a verdade, pois a promessa é que Ele nos ensinará a respeito de todas as coisas.',
    keyPoints: [
      'Disciplina, fazer o que não se quer para alcançar o que se quer',
      'Tempo separado e tratado como prioridade, estudo e não apenas devocional',
      'Perseverança, continuar quando a vontade termina',
      'Dependência total do Espírito Santo',
      'O Espírito é o intérprete e nos guia em toda a verdade',
    ],
  },
  {
    id: 'HER-DIS-02',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'discursiva',
    topic: 'Processo de observação',
    prompt: 'Descreva o processo de observação de um texto, do primeiro ao último passo.',
    hint: 'São quatro passos, e o primeiro é o mais simples de todos.',
    explanation:
      'O primeiro passo é ler, ler e ler, no mínimo três vezes e quantas vezes for possível, previsualizando a cena, vendo o autor dizer aquelas palavras, lendo em voz alta e parafraseando, para que a mente fique permeada com o texto. O segundo é bombardear o texto com perguntas: o quê, onde, como, quem, por quê, quando e para quem, sem acrescentar nenhuma palavra a elas. Cada observação deve ser numerada, com o versículo anotado ao fim, e as perguntas e respostas organizadas de forma fácil de visualizar. O terceiro é listar os termos-chave, separando os termos comuns, cujo significado todos conhecem, dos termos especiais, que são palavras novas, difíceis, decisivas no texto ou que encerram grande significado, como redenção, remissão e graça em Efésios 1:7. O quarto é procurar o significado desses termos em um bom dicionário de português e em um bom dicionário bíblico. Tudo isso ainda é observação, que é apenas a primeira das três grandes partes do estudo, seguida pela interpretação e pela aplicação.',
    modelAnswer:
      'O primeiro passo é ler, ler e ler, no mínimo três vezes e quantas vezes for possível, previsualizando a cena, vendo o autor dizer aquelas palavras, lendo em voz alta e parafraseando, para que a mente fique permeada com o texto. O segundo é bombardear o texto com perguntas: o quê, onde, como, quem, por quê, quando e para quem, sem acrescentar nenhuma palavra a elas. Cada observação deve ser numerada, com o versículo anotado ao fim, e as perguntas e respostas organizadas de forma fácil de visualizar. O terceiro é listar os termos-chave, separando os termos comuns, cujo significado todos conhecem, dos termos especiais, que são palavras novas, difíceis, decisivas no texto ou que encerram grande significado, como redenção, remissão e graça em Efésios 1:7. O quarto é procurar o significado desses termos em um bom dicionário de português e em um bom dicionário bíblico. Tudo isso ainda é observação, que é apenas a primeira das três grandes partes do estudo, seguida pela interpretação e pela aplicação.',
    keyPoints: [
      'Ler no mínimo três vezes, visualizando a cena e lendo em voz alta',
      'Bombardear com as sete perguntas, sem acrescentar palavras',
      'Numerar as observações e anotar o versículo, mantendo tudo organizado',
      'Listar os termos-chave, separando comuns e especiais',
      'Buscar o significado em dicionário de português e dicionário bíblico',
    ],
  },
  {
    id: 'HER-DIS-03',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'discursiva',
    topic: 'Contexto',
    prompt:
      'Explique o que Filipenses 4:13 ensina dentro do seu contexto e por que a leitura triunfalista desse versículo é perigosa.',
    hint: 'Ninguém cita o versículo 12.',
    explanation:
      'O versículo 12 mostra que Paulo já havia experimentado tudo: sabe estar humilhado e honrado, sabe ter fartura e sabe passar fome. É em relação a essas experiências que ele diz que tudo pode naquele que o fortalece. Portanto o "tudo" inclui passar fome, ser humilhado e viver a necessidade sustentado por Cristo. A leitura triunfalista transforma o texto em uma promessa de que nada resistirá ao crente, o que produz duas consequências ruins. A primeira é o crente frustrado, que crê em uma promessa que Deus não fez e se revolta quando a realidade não confirma. A segunda é que essa mentalidade repete a primeira doutrina de Satanás no Novo Testamento, quando ele disse a Jesus que, sendo filho de Deus, Ele não deveria estar com fome e deveria transformar pedras em pães. Bem entendido, o texto é mais forte, não mais fraco: se você pode tudo, então você pode atravessar a tristeza, a angústia, a dor e a perda sem perder a fé, não por causa de quem você é, mas por causa daquele que o fortalece.',
    modelAnswer:
      'O versículo 12 mostra que Paulo já havia experimentado tudo: sabe estar humilhado e honrado, sabe ter fartura e sabe passar fome. É em relação a essas experiências que ele diz que tudo pode naquele que o fortalece. Portanto o "tudo" inclui passar fome, ser humilhado e viver a necessidade sustentado por Cristo. A leitura triunfalista transforma o texto em uma promessa de que nada resistirá ao crente, o que produz duas consequências ruins. A primeira é o crente frustrado, que crê em uma promessa que Deus não fez e se revolta quando a realidade não confirma. A segunda é que essa mentalidade repete a primeira doutrina de Satanás no Novo Testamento, quando ele disse a Jesus que, sendo filho de Deus, Ele não deveria estar com fome e deveria transformar pedras em pães. Bem entendido, o texto é mais forte, não mais fraco: se você pode tudo, então você pode atravessar a tristeza, a angústia, a dor e a perda sem perder a fé, não por causa de quem você é, mas por causa daquele que o fortalece.',
    keyPoints: [
      'O versículo 12 fala de fartura e de fome, honra e humilhação',
      'O tudo inclui passar necessidade naquele que fortalece',
      'Leitura triunfalista gera crentes frustrados',
      'Semelhança com a primeira doutrina de Satanás na tentação',
      'O sentido correto sustenta o crente no que ele está atravessando',
    ],
  },
  {
    id: 'HER-DIS-04',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'discursiva',
    topic: 'Contexto',
    prompt:
      'Explique o que Colossenses 3:15 significa e por que a expressão "eu sinto paz" não pode ser usada como critério de decisão.',
    hint: 'Leia do versículo 11 ao 14 e observe do que o texto está tratando.',
    explanation:
      'O contexto imediato trata de relacionamento: revestir-se de ternos afetos de misericórdia, bondade, humildade, mansidão e longanimidade, suportar uns aos outros, perdoar uns aos outros e, sobre tudo isso, revestir-se de amor, que é o vínculo da perfeição. É dentro desse contexto que se diz que a paz de Cristo seja o árbitro em nossos corações, ou, em outra tradução, que a paz de Deus domine em nossos corações, para a qual fomos chamados em um só corpo. O sentido é: não faça nada que quebre a paz entre os irmãos. A paz de Cristo é o fato de Ele ter nos reconciliado com Deus e uns com os outros, derrubando a barreira de separação, e quebrar essa paz é quebrar essa unidade. A leitura popular inverte tudo, transformando um sentimento em árbitro de decisões, ainda que a palavra sentir sequer apareça no texto e ainda que o contexto não trate de decisões. Assim, alguém justifica separar-se do cônjuge, mudar de igreja ou iniciar um relacionamento dizendo que sente paz, e usa Colossenses 3:15 para legitimar exatamente aquilo que quebra a paz que o texto manda preservar.',
    modelAnswer:
      'O contexto imediato trata de relacionamento: revestir-se de ternos afetos de misericórdia, bondade, humildade, mansidão e longanimidade, suportar uns aos outros, perdoar uns aos outros e, sobre tudo isso, revestir-se de amor, que é o vínculo da perfeição. É dentro desse contexto que se diz que a paz de Cristo seja o árbitro em nossos corações, ou, em outra tradução, que a paz de Deus domine em nossos corações, para a qual fomos chamados em um só corpo. O sentido é: não faça nada que quebre a paz entre os irmãos. A paz de Cristo é o fato de Ele ter nos reconciliado com Deus e uns com os outros, derrubando a barreira de separação, e quebrar essa paz é quebrar essa unidade. A leitura popular inverte tudo, transformando um sentimento em árbitro de decisões, ainda que a palavra sentir sequer apareça no texto e ainda que o contexto não trate de decisões. Assim, alguém justifica separar-se do cônjuge, mudar de igreja ou iniciar um relacionamento dizendo que sente paz, e usa Colossenses 3:15 para legitimar exatamente aquilo que quebra a paz que o texto manda preservar.',
    keyPoints: [
      'O contexto dos versículos 11 a 14 é relacionamento e perdão',
      'O texto manda não quebrar a paz entre os irmãos',
      'Chamados em um só corpo, a paz é a unidade que Cristo fez',
      'A palavra sentir não aparece no texto e o contexto não trata de decisões',
      'Uso popular justifica decisões que quebram a própria paz que o texto defende',
    ],
  },
  {
    id: 'HER-DIS-05',
    subject: 'hermeneutica',
    sets: ['fixacao', 'simulado'],
    type: 'discursiva',
    topic: 'Termos-chave',
    prompt:
      'Explique por que é necessário usar um bom dicionário bíblico, dando exemplos de termos que se perdem na tradução.',
    hint: 'Pense em palavras que não existem em outro idioma, como saudade em inglês.',
    explanation:
      'Cada palavra do texto tem um significado na língua original e o autor tinha uma intenção ao usá-la. Existem termos que simplesmente não existem em outras culturas, e o termo relativo escolhido pelo tradutor nunca expressa exatamente o mesmo. É o caso de saudade, que o inglês tenta cobrir com miss sem alcançar o que a palavra carrega. O mesmo acontece na Bíblia. Em Efésios 1:7 há três termos especiais em um só versículo: redenção, que é o ato de comprar um escravo para libertá-lo; remissão; e graça, que é a escolha de Deus de nos dar tudo por causa de quem Ele é e não por causa de quem nós somos. Em 1 Coríntios 14, a palavra traduzida por língua é glossa, o órgão que fala, e não dialektos, o que muda a compreensão do texto. Em João 21, o português usa amor para tudo, enquanto o grego distingue eros, fileo e ágape: Jesus pergunta a Pedro pelo amor ágape e Pedro responde com fileo, o que só se percebe consultando o original. Um bom dicionário bíblico e um léxico, hoje disponíveis inclusive em aplicativos, permitem enxergar isso sem inventar nada, apenas expondo o que o texto diz.',
    modelAnswer:
      'Cada palavra do texto tem um significado na língua original e o autor tinha uma intenção ao usá-la. Existem termos que simplesmente não existem em outras culturas, e o termo relativo escolhido pelo tradutor nunca expressa exatamente o mesmo. É o caso de saudade, que o inglês tenta cobrir com miss sem alcançar o que a palavra carrega. O mesmo acontece na Bíblia. Em Efésios 1:7 há três termos especiais em um só versículo: redenção, que é o ato de comprar um escravo para libertá-lo; remissão; e graça, que é a escolha de Deus de nos dar tudo por causa de quem Ele é e não por causa de quem nós somos. Em 1 Coríntios 14, a palavra traduzida por língua é glossa, o órgão que fala, e não dialektos, o que muda a compreensão do texto. Em João 21, o português usa amor para tudo, enquanto o grego distingue eros, fileo e ágape: Jesus pergunta a Pedro pelo amor ágape e Pedro responde com fileo, o que só se percebe consultando o original. Um bom dicionário bíblico e um léxico, hoje disponíveis inclusive em aplicativos, permitem enxergar isso sem inventar nada, apenas expondo o que o texto diz.',
    keyPoints: [
      'Cada palavra tem significado próprio na língua original',
      'Termos sem equivalente exato entre idiomas, como saudade',
      'Efésios 1:7 com redenção, remissão e graça',
      'Distinção entre glossa e dialektos em 1 Coríntios 14',
      'Eros, fileo e ágape em João 21',
      'Uso de dicionário bíblico e léxico como ferramenta',
    ],
  },
  {
    id: 'HER-DIS-06',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Fé e cultura',
    prompt:
      'Explique a diferença entre uma fé formada pela cultura e uma fé formada pela Bíblia, e diga qual é o risco de quem começa a estudar hermenêutica.',
    hint: 'Use o exemplo do pré-tribulacionismo e o de Mateus 6:33. E lembre da história do pastor que assistiu ao culto inteiro reclamando.',
    explanation:
      'Uma fé formada pela cultura entende Deus e a Bíblia pelos olhos do ambiente em que se vive, e não pelo texto. O pré-tribulacionismo ilustra isso: durante cerca de 1900 anos nenhuma linha teológica sustentou que a igreja não passaria pela tribulação, porque a igreja sempre viveu perseguida. A ideia aparece quando as guerras religiosas cessam e gerações inteiras nascem em paz e prosperidade, passando a crer que Deus sempre protegerá a igreja de qualquer sofrimento. Um cristão perseguido não reconheceria essa premissa. O mesmo vale para Mateus 6:33, citado como "todas as demais coisas", incluindo casa, carro e conforto, quando o texto diz "todas estas coisas" e o contexto define que são comer, beber e vestir. O risco de quem aprende a interpretar a Bíblia é se tornar crítico: passar a enxergar erro em cada pregação e fechar o coração, perdendo o que o Espírito quer falar. É preciso separar a interpretação do pregador da mensagem do Espírito, entendendo que a maioria das pessoas é bem-intencionada e prega do jeito que aprendeu. Quem não faz essa separação corre o risco de ficar com fome sentado à mesa do banquete.',
    modelAnswer:
      'Uma fé formada pela cultura entende Deus e a Bíblia pelos olhos do ambiente em que se vive, e não pelo texto. O pré-tribulacionismo ilustra isso: durante cerca de 1900 anos nenhuma linha teológica sustentou que a igreja não passaria pela tribulação, porque a igreja sempre viveu perseguida. A ideia aparece quando as guerras religiosas cessam e gerações inteiras nascem em paz e prosperidade, passando a crer que Deus sempre protegerá a igreja de qualquer sofrimento. Um cristão perseguido não reconheceria essa premissa. O mesmo vale para Mateus 6:33, citado como "todas as demais coisas", incluindo casa, carro e conforto, quando o texto diz "todas estas coisas" e o contexto define que são comer, beber e vestir. O risco de quem aprende a interpretar a Bíblia é se tornar crítico: passar a enxergar erro em cada pregação e fechar o coração, perdendo o que o Espírito quer falar. É preciso separar a interpretação do pregador da mensagem do Espírito, entendendo que a maioria das pessoas é bem-intencionada e prega do jeito que aprendeu. Quem não faz essa separação corre o risco de ficar com fome sentado à mesa do banquete.',
    keyPoints: [
      'Fé cultural interpreta a Bíblia pelos olhos do ambiente',
      'Pré-tribulacionismo como produto de um tempo de paz e prosperidade',
      'Mateus 6:33 citado com acréscimo, quando estas coisas são comer, beber e vestir',
      'Colocar a verdade bíblica acima da verdade cultural',
      'Risco de se tornar crítico e fechar o coração',
      'Separar a interpretação do pregador da mensagem do Espírito',
    ],
  },
];

/** As 22 questões marcadas para o modo fixação (Aula 02). */
export const hermeneuticaFixacao: Question[] = hermeneuticaQuestions.filter((q) =>
  q.sets?.includes('fixacao'),
);
