import type { Question } from '../types';

/*
 * Banco de questões do assunto "Hermenêutica: Observação do Texto".
 * 25 questões: 12 múltipla escolha, 7 verdadeiro ou falso, 6 discursivas.
 * Usadas tanto no modo fixação (sequencial) quanto na prova simulada (com filtros).
 * Não alterar, não remover e não inventar questões. Manter os ids como estão.
 */
export const hermeneuticaObservacaoQuestions: Question[] = [
  /* ==================== HERMENÊUTICA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'HM-ME-01',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Processo de observação',
    prompt: 'Qual é a ordem correta dos passos do processo de observação?',
    hint: 'Tudo começa pela leitura repetida, até o texto entrar na cabeça.',
    explanation:
      'Os passos são: ler o texto quantas vezes for necessário, bombardear o texto com perguntas, listar os termos chaves, procurar o significado desses termos e, por fim, estruturar o texto em estudo. Nenhum deles pode ser pulado.',
    options: [
      {
        id: 'a',
        text: 'Bombardear o texto com perguntas, ler, listar os termos chaves, estruturar o texto',
      },
      {
        id: 'b',
        text: 'Ler o texto, bombardear o texto com perguntas, listar os termos chaves, procurar o significado dos termos, estruturar o texto',
      },
      {
        id: 'c',
        text: 'Listar os termos chaves, ler o texto, estruturar o texto, bombardear o texto com perguntas',
      },
      {
        id: 'd',
        text: 'Estruturar o texto, ler o texto, procurar o significado dos termos, bombardear o texto com perguntas',
      },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-02',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Bombardeio de perguntas',
    prompt: 'Ao bombardear o texto com perguntas, quem deve fornecer as respostas?',
    hint: 'Pense em quem está sendo interrogado.',
    explanation:
      'Quem é perguntado é o texto, logo quem responde é o texto. Se o leitor inventa a resposta, está perguntando a si mesmo, e nunca chegará a uma interpretação correta.',
    options: [
      { id: 'a', text: 'O comentário bíblico consultado' },
      { id: 'b', text: 'O leitor, a partir da própria experiência' },
      { id: 'c', text: 'O próprio texto' },
      { id: 'd', text: 'O pastor ou o professor da matéria' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HM-ME-03',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Bombardeio de perguntas',
    prompt: 'Quais perguntas foram indicadas para interrogar o texto?',
    hint: 'São sete perguntas.',
    explanation:
      'São sete perguntas, com o alerta de que fazer uma pergunta de cada tipo não esgota o que o texto tem a oferecer. Bombardear significa muita pergunta, sem preguiça.',
    options: [
      { id: 'a', text: 'O quê, onde, como, quem, por quê, quando e para quem' },
      { id: 'b', text: 'Quem, quando e onde apenas' },
      { id: 'c', text: 'O quê e por quê apenas' },
      { id: 'd', text: 'Quem, o quê, quanto e para quanto' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'HM-ME-04',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Detalhes do texto',
    prompt:
      'Em Lucas 23:43, a posição da vírgula muda o sentido do que Jesus disse ao ladrão. O que a hermenêutica responde sobre isso?',
    hint: 'Pense em como o texto original era escrito.',
    explanation:
      'O grego não tem vírgulas, tem intervalos, e eles não aparecem naquele ponto, de modo que não é possível decidir a leitura. A leitura popular, de que o ladrão foi para o paraíso naquele mesmo dia, ainda esbarra em João 20:17, onde Jesus ressurreto diz que ainda não havia subido ao Pai.',
    options: [
      { id: 'a', text: 'A vírgula depois de "hoje" é a única leitura possível' },
      { id: 'b', text: 'A vírgula antes de "hoje" é a única leitura possível' },
      {
        id: 'c',
        text: 'Não há resposta definitiva, porque o grego não usa vírgulas, e sim intervalos, que não estão presentes ali',
      },
      { id: 'd', text: 'A discussão é irrelevante, porque o sentido é o mesmo nas duas leituras' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HM-ME-05',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Estrutura do texto',
    prompt: 'O que é a estrutura de um texto bíblico?',
    hint: 'Ela pertence ao autor, não a quem estuda.',
    explanation:
      'A estrutura é o esqueleto do texto, o caminho que o próprio autor seguiu. Como se trata ainda de observação, não é a estrutura do seu estudo nem do seu esboço, e sim a do texto.',
    options: [
      { id: 'a', text: 'O esboço do sermão de quem vai pregar' },
      {
        id: 'b',
        text: 'O esqueleto do texto, o esboço que o autor seguiu para desenvolver o tema que estava ensinando',
      },
      { id: 'c', text: 'A divisão em capítulos e versículos feita pelos tradutores' },
      { id: 'd', text: 'A ordem cronológica dos fatos narrados' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-06',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Estrutura do texto',
    prompt: 'Na descoberta da estrutura do texto, quais elementos devem receber atenção especial?',
    hint: 'Três são relações entre palavras e o quarto é gramatical.',
    explanation:
      'Comparações associam coisas parecidas para ilustrar o ensino, contrastes usam fatos ou palavras opostas, repetições mostram palavras, expressões e verbos que voltam, e o tempo dos verbos precisa ser observado com cuidado.',
    options: [
      { id: 'a', text: 'Comparações, contrastes, repetições e o tempo dos verbos' },
      { id: 'b', text: 'Autor, data, destinatário e ocasião' },
      { id: 'c', text: 'Profecias, milagres, parábolas e genealogias' },
      { id: 'd', text: 'Títulos, subtítulos, capítulos e versículos' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'HM-ME-07',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Comparações',
    prompt: 'Em Hebreus 5:4-5, qual expressão sinaliza a comparação e o que ela compara?',
    hint: 'A expressão liga o exemplo do Antigo Testamento ao caso de Cristo.',
    explanation:
      'Ninguém toma essa honra para si mesmo, senão quando chamado por Deus, como aconteceu com Arão. Assim também Cristo não se glorificou a si mesmo para se tornar sumo sacerdote, mas foi constituído por Aquele que lhe disse: tu és meu filho, eu hoje te gerei.',
    options: [
      { id: 'a', text: '"Porque está escrito"; compara a lei e a graça' },
      {
        id: 'b',
        text: '"Assim também"; compara o modo como Arão e como Cristo foram constituídos sacerdotes',
      },
      { id: 'c', text: '"Em verdade vos digo"; compara Moisés e Cristo' },
      { id: 'd', text: '"Ninguém pois"; compara sacerdotes e profetas' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-08',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Contrastes',
    prompt: 'Romanos 5:12-21 traz comparação e contraste. Qual é a intenção central do texto?',
    hint: 'Repare no "muitos" que aparece antes e depois do "assim também".',
    explanation:
      'A comparação está nas consequências dos atos de um e de outro. O contraste que o texto quer mostrar está entre os muitos que se tornaram pecadores pela desobediência de um só e os muitos que se tornarão justos pela obediência de um só.',
    options: [
      { id: 'a', text: 'Mostrar que Jesus é mais justo que Adão' },
      { id: 'b', text: 'Mostrar o contraste entre os descendentes de Adão e os descendentes de Cristo' },
      { id: 'c', text: 'Provar que a lei foi abolida' },
      { id: 'd', text: 'Comparar a conduta de Adão com a conduta de Moisés' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-09',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Tempos verbais e contexto',
    prompt:
      'A frase "vá, suba naquele cavalo e cavalgue o dia inteiro" foi usada para ilustrar qual erro de leitura?',
    hint: 'Quem falou isso foi o pai do professor, há mais de trinta anos.',
    explanation:
      'O verbo continua no imperativo, mas o fato já aconteceu há mais de trinta anos. O tempo verbal sozinho não localiza o acontecimento, só o contexto faz isso.',
    options: [
      { id: 'a', text: 'Tratar linguagem figurada como se fosse literal' },
      {
        id: 'b',
        text: 'Deduzir a época do fato apenas pelo tempo do verbo, ignorando quando e para quem a frase foi dita',
      },
      { id: 'c', text: 'Ler uma ordem como se fosse uma sugestão' },
      { id: 'd', text: 'Confundir o sujeito da frase' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-10',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Tempos verbais e contexto',
    prompt:
      'Em Mateus 24 Jesus fala de guerras, fomes e perseguições que ainda viriam. Como esses verbos devem ser lidos?',
    hint: 'A pergunta certa é "futuro de quem?".',
    explanation:
      'Quem lê precisa se colocar no dia em que aquilo foi dito. Jesus falava por volta do ano 30, e Mateus registrou depois. Tratar como futuro do leitor atual aquilo que já era passado para os primeiros destinatários produz erros graves de interpretação, especialmente em profecia.',
    options: [
      { id: 'a', text: 'Como futuro absoluto, sempre referente ao leitor de hoje' },
      { id: 'b', text: 'Como futuro a partir de quem falava, por volta do ano 30' },
      { id: 'c', text: 'Como passado, já que Mateus escreveu tempos depois' },
      { id: 'd', text: 'Como linguagem simbólica, sem referência temporal' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HM-ME-11',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Cânon e autoria',
    prompt: 'Por que se pode afirmar que Paulo não escreveu a carta aos Hebreus?',
    hint: 'O próprio autor conta como a mensagem chegou até ele.',
    explanation:
      'O autor se apresenta como alguém de segunda geração, que recebeu o evangelho pelos que estiveram com o Senhor. Isso está no próprio texto, e por isso Hebreus permanece sem autor definido.',
    options: [
      { id: 'a', text: 'Porque a carta não foi citada pelos pais da igreja' },
      { id: 'b', text: 'Porque a carta não traz saudação inicial' },
      {
        id: 'c',
        text: 'Porque em Hebreus 2 o autor se coloca entre os que ouviram o evangelho daqueles que ouviram o Senhor',
      },
      { id: 'd', text: 'Porque o assunto da carta não aparece em nenhuma outra epístola paulina' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HM-ME-12',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Título e subtítulos',
    prompt: 'Quais orientações foram dadas para dar um título ao texto em estudo?',
    hint: 'O título é o produto que você vai vender.',
    explanation:
      'O título é a grande ideia do texto, aquilo que fica na mente de quem estuda e de quem ouve. Deve ser curto, de preferência com uma palavra e nunca mais que três, usar palavras chamativas, palavras do próprio texto ainda não usadas e palavras que ajudem a localizar a passagem.',
    options: [
      {
        id: 'a',
        text: 'De preferência uma palavra só, no máximo três, com palavras pitorescas, tiradas do próprio texto e que ajudem a localizar a passagem',
      },
      { id: 'b', text: 'Uma frase completa que resuma a doutrina do livro inteiro' },
      { id: 'c', text: 'O primeiro versículo da passagem, copiado literalmente' },
      { id: 'd', text: 'Um título livre, sem relação com as palavras do texto' },
    ],
    correctOptionId: 'a',
  },

  /* ==================== HERMENÊUTICA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'HM-VF-01',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Observação e interpretação',
    prompt:
      'É possível chegar a uma boa interpretação de um texto sem ter feito antes uma boa observação dele.',
    hint: 'A ordem das etapas não é opcional.',
    explanation:
      'Ninguém terá uma boa interpretação de um texto antes de ter uma boa observação dele. Enquanto se lê, pergunta, lista termos e estrutura o texto, ainda não se está interpretando nada.',
    correctAnswer: false,
  },
  {
    id: 'HM-VF-02',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Inspiração',
    prompt:
      'A Bíblia foi escrita por homens que tiveram a mente e a mão tomadas por Deus, sem que o próprio raciocínio deles participasse.',
    hint: 'Inspirado não é o mesmo que ditado.',
    explanation:
      'A Bíblia é um livro inspirado, e isso significa que o autor pensou para escrever e tinha razões para escrever. Paulo escreveu aos coríntios porque havia um problema real de divisão na igreja, e não porque tivesse sido possuído.',
    correctAnswer: false,
  },
  {
    id: 'HM-VF-03',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'O que está registrado na Bíblia',
    prompt:
      'Como tudo na Bíblia está ali por vontade de Deus, qualquer frase registrada no texto pode ser tomada como palavra dirigida diretamente ao leitor.',
    hint: 'Lembre-se de quem cita o Salmo 91 na tentação.',
    explanation:
      'Todo o texto é inspirado, mas nem toda frase registrada é fala de Deus. A Bíblia registra falas do diabo, inclusive citando o Salmo 91, e falas humanas equivocadas, como a dos que disseram a Jó que o fogo vindo do céu era de Deus. O contexto é que ensina como lidar com o que está registrado.',
    correctAnswer: false,
  },
  {
    id: 'HM-VF-04',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Cânon',
    prompt: 'O cânon do Novo Testamento se fechou porque os apóstolos morreram.',
    hint: 'Pense em quem tinha ligação direta com Jesus.',
    explanation:
      'O cânon se fecha com os escritos apostólicos, e a morte dos apóstolos encerrou essa possibilidade. Hebreus é o caso particular de um livro sem autor definido, escrito por alguém da geração seguinte.',
    correctAnswer: true,
  },
  {
    id: 'HM-VF-05',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Autoria do Pentateuco',
    prompt:
      'A atribuição do Pentateuco a Moisés é sustentada, entre outras razões, pelo testemunho do próprio Jesus.',
    hint: 'Se Ele afirmou, acabou a conversa.',
    explanation:
      'Os cinco primeiros livros são atribuídos a Moisés e há quem conteste isso, mas Jesus atribuiu esses textos a Moisés e citou Gênesis. Quem crê em Jesus tem aí um argumento decisivo.',
    correctAnswer: true,
  },
  {
    id: 'HM-VF-06',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Repetições',
    prompt: 'Observar palavras, expressões e verbos que se repetem é especialmente útil no estudo de livros inteiros.',
    hint: 'Pense no que aparece muitas vezes ao longo de uma carta.',
    explanation:
      'A repetição é uma das pistas da estrutura, e o efeito dela aparece com mais força quando se estuda um livro inteiro, e não apenas uma passagem isolada.',
    correctAnswer: true,
  },
  {
    id: 'HM-VF-07',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Preparo e disciplina',
    prompt: 'A boa leitura do texto depende principalmente de talento e sensibilidade, e não de trabalho.',
    hint: 'Lembre-se da palavra única com que John Stott respondeu.',
    explanation:
      'Perguntado como extraía tanto de um texto, John Stott respondeu com uma palavra: trabalho. Os dois obstáculos apontados são a falta de atenção ao que foi pedido e a preguiça. O preparo de uma mensagem costuma passar de vinte horas, distribuídas em vários dias.',
    correctAnswer: false,
  },

  /* ==================== HERMENÊUTICA - DISCURSIVAS ==================== */
  {
    id: 'HM-DIS-01',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Processo de observação',
    prompt: 'Descreva os passos do processo de observação e explique o que se faz em cada um deles.',
    hint: 'São cinco etapas, da leitura à estruturação do texto.',
    explanation:
      'O primeiro passo é ler, e ler muitas vezes, até o texto entrar na cabeça, a ponto de conseguir repetir a passagem sem consultar a referência. O segundo é bombardear o texto com perguntas, usando o quê, onde, como, quem, por quê, quando e para quem, em grande quantidade, palavra por palavra, e deixando que o texto responda. O terceiro é listar os termos chaves, aquelas palavras sem as quais o texto perde o sentido. O quarto é procurar o significado desses termos. O quinto é estruturar o texto, o que envolve dar um título à passagem, dividi-la em partes ou parágrafos e dar subtítulos a cada parte. Tudo isso ainda é observação, e não interpretação.',
    modelAnswer:
      'O primeiro passo é ler, e ler muitas vezes, até o texto entrar na cabeça, a ponto de conseguir repetir a passagem sem consultar a referência. O segundo é bombardear o texto com perguntas, usando o quê, onde, como, quem, por quê, quando e para quem, em grande quantidade, palavra por palavra, e deixando que o texto responda. O terceiro é listar os termos chaves, aquelas palavras sem as quais o texto perde o sentido. O quarto é procurar o significado desses termos. O quinto é estruturar o texto, o que envolve dar um título à passagem, dividi-la em partes ou parágrafos e dar subtítulos a cada parte. Tudo isso ainda é observação, e não interpretação.',
    keyPoints: [
      'Ler repetidamente até dominar o texto',
      'Bombardear o texto com perguntas e deixar o texto responder',
      'Listar os termos chaves',
      'Procurar o significado dos termos',
      'Estruturar o texto com título, divisões e subtítulos',
      'Nada disso é interpretação ainda',
    ],
  },
  {
    id: 'HM-DIS-02',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Bombardeio de perguntas',
    prompt:
      'Explique o que significa bombardear o texto com perguntas e por que o leitor não pode responder por conta própria. Use Romanos 12:1 como exemplo.',
    hint: 'Pergunta a cada palavra, e não uma pergunta por versículo.',
    explanation:
      'Bombardear significa fazer muitas perguntas, e não uma pergunta de cada tipo. Em Romanos 12:1 a leitura avança palavra por palavra: rogo o quê, pois o quê, irmãos o quê, pelas o quê, misericórdias de quem, que apresenteis o quê, o corpo como, sacrifício de que tipo, para quem, e assim por diante. Cada resposta precisa vir do próprio texto. Se o leitor responde a partir de si mesmo, ele está perguntando a si mesmo e não ao texto, e por isso nunca chegará a uma interpretação correta. Esse cuidado com cada palavra se justifica porque o próprio Jesus afirmou que nem um til cairia da lei, o que mostra que os detalhes do texto importam. Além disso, Apocalipse 22 adverte contra acrescentar ou retirar do que está escrito, e inventar respostas é uma forma de alterar o texto.',
    modelAnswer:
      'Bombardear significa fazer muitas perguntas, e não uma pergunta de cada tipo. Em Romanos 12:1 a leitura avança palavra por palavra: rogo o quê, pois o quê, irmãos o quê, pelas o quê, misericórdias de quem, que apresenteis o quê, o corpo como, sacrifício de que tipo, para quem, e assim por diante. Cada resposta precisa vir do próprio texto. Se o leitor responde a partir de si mesmo, ele está perguntando a si mesmo e não ao texto, e por isso nunca chegará a uma interpretação correta. Esse cuidado com cada palavra se justifica porque o próprio Jesus afirmou que nem um til cairia da lei, o que mostra que os detalhes do texto importam. Além disso, Apocalipse 22 adverte contra acrescentar ou retirar do que está escrito, e inventar respostas é uma forma de alterar o texto.',
    keyPoints: [
      'Muitas perguntas, não uma de cada tipo',
      'As sete perguntas aplicadas palavra por palavra',
      'Exemplo de Romanos 12:1',
      'Quem responde é o texto, não o leitor',
      'Cada palavra importa, nem um til cairá',
      'Advertência de Apocalipse 22',
    ],
  },
  {
    id: 'HM-DIS-03',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Estrutura do texto',
    prompt:
      'Explique o que é a estrutura do texto e quais elementos devem ser observados para encontrá-la, dando um exemplo de comparação e um de contraste.',
    hint: 'São quatro elementos, e os exemplos estão em Hebreus 5 e em Romanos 5.',
    explanation:
      'A estrutura é o esqueleto do texto, o esboço que o próprio autor seguiu para desenvolver o tema que estava ensinando. Ela pertence ao autor, e não a quem estuda, porque a Bíblia é um livro inspirado, escrito por autores que pensaram e tinham razões para escrever. Para encontrá-la, observam-se quatro coisas. Comparações: o autor associa coisas parecidas para ilustrar o que ensina, como em Hebreus 5:4-5, onde a expressão "assim também" liga o modo como Arão foi constituído sacerdote ao modo como Cristo foi constituído sumo sacerdote, ou seja, nenhum dos dois tomou essa honra para si. Contrastes: o autor usa fatos ou palavras opostas, como em Romanos 5:12-21, onde a comparação está nas consequências dos atos de Adão e de Cristo, mas o contraste que o texto quer destacar está entre os muitos que se tornaram pecadores pela desobediência de um só e os muitos que se tornarão justos pela obediência de um só. Repetições: palavras, expressões e verbos que voltam, algo especialmente útil no estudo de livros inteiros. E o tempo dos verbos, que precisa ser observado com atenção.',
    modelAnswer:
      'A estrutura é o esqueleto do texto, o esboço que o próprio autor seguiu para desenvolver o tema que estava ensinando. Ela pertence ao autor, e não a quem estuda, porque a Bíblia é um livro inspirado, escrito por autores que pensaram e tinham razões para escrever. Para encontrá-la, observam-se quatro coisas. Comparações: o autor associa coisas parecidas para ilustrar o que ensina, como em Hebreus 5:4-5, onde a expressão "assim também" liga o modo como Arão foi constituído sacerdote ao modo como Cristo foi constituído sumo sacerdote, ou seja, nenhum dos dois tomou essa honra para si. Contrastes: o autor usa fatos ou palavras opostas, como em Romanos 5:12-21, onde a comparação está nas consequências dos atos de Adão e de Cristo, mas o contraste que o texto quer destacar está entre os muitos que se tornaram pecadores pela desobediência de um só e os muitos que se tornarão justos pela obediência de um só. Repetições: palavras, expressões e verbos que voltam, algo especialmente útil no estudo de livros inteiros. E o tempo dos verbos, que precisa ser observado com atenção.',
    keyPoints: [
      'Estrutura é o esqueleto do texto e pertence ao autor',
      'Comparações, com o exemplo de Hebreus 5:4-5 e o "assim também"',
      'Contrastes, com o exemplo de Romanos 5:12-21',
      'O contraste está entre os descendentes de Adão e os de Cristo',
      'Repetições, úteis no estudo de livros inteiros',
      'Atenção ao tempo dos verbos',
    ],
  },
  {
    id: 'HM-DIS-04',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Tempos verbais e contexto',
    prompt:
      'Explique por que o tempo do verbo, sozinho, não determina quando um fato aconteceu, usando a frase do cavalo e o discurso de Mateus 24.',
    hint: 'A pergunta decisiva é "futuro de quem?".',
    explanation:
      'A frase "vá, suba naquele cavalo e cavalgue o dia inteiro" está no imperativo e parece apontar para algo a ser feito, mas foi dita pelo pai do professor há mais de trinta anos, de modo que o fato já é passado. O tempo do verbo não localiza o acontecimento, quem faz isso é o contexto, ou seja, quando aquilo foi dito, por quem e para quem. O mesmo vale para Mateus 24, onde Jesus fala de guerras, fomes, terremotos e perseguições que ainda viriam. Muitos leem esses verbos como futuro do leitor de hoje, mas é preciso perguntar futuro de quem. Jesus falava por volta do ano 30, e Mateus registrou depois o que Ele disse. Para interpretar corretamente, o leitor precisa se colocar no dia em que aquilo foi dito, sob pena de tratar como futuro aquilo que, para os primeiros ouvintes, já se tornou passado. É por isso que esse cuidado é decisivo especialmente no estudo de profecia.',
    modelAnswer:
      'A frase "vá, suba naquele cavalo e cavalgue o dia inteiro" está no imperativo e parece apontar para algo a ser feito, mas foi dita pelo pai do professor há mais de trinta anos, de modo que o fato já é passado. O tempo do verbo não localiza o acontecimento, quem faz isso é o contexto, ou seja, quando aquilo foi dito, por quem e para quem. O mesmo vale para Mateus 24, onde Jesus fala de guerras, fomes, terremotos e perseguições que ainda viriam. Muitos leem esses verbos como futuro do leitor de hoje, mas é preciso perguntar futuro de quem. Jesus falava por volta do ano 30, e Mateus registrou depois o que Ele disse. Para interpretar corretamente, o leitor precisa se colocar no dia em que aquilo foi dito, sob pena de tratar como futuro aquilo que, para os primeiros ouvintes, já se tornou passado. É por isso que esse cuidado é decisivo especialmente no estudo de profecia.',
    keyPoints: [
      'Exemplo do cavalo: verbo no imperativo, fato já ocorrido',
      'O contexto localiza o fato, não o tempo verbal',
      'Mateus 24 e a pergunta "futuro de quem"',
      'Jesus falava por volta do ano 30 e Mateus registrou depois',
      'Necessidade de se colocar no dia em que o texto foi dito',
      'Importância disso na leitura de profecia',
    ],
  },
  {
    id: 'HM-DIS-05',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Inspiração e uso indevido do texto',
    prompt:
      'Explique a diferença entre dizer que tudo na Bíblia é inspirado e dizer que tudo na Bíblia é fala de Deus, e mostre o risco da prática de abrir a Bíblia ao acaso em busca de direção.',
    hint: 'Pense em quem cita o Salmo 91 na tentação e no que disseram a Jó.',
    explanation:
      'Tudo o que está escrito na Bíblia está ali por vontade de Deus e é inspirado, mas nem toda frase registrada é fala de Deus. A Bíblia registra falas do diabo, como na tentação, quando ele manda transformar pedras em pães, propõe que Jesus se lance do pináculo e chega a citar o Salmo 91. Registra também falas humanas equivocadas, como a dos mensageiros que disseram a Jó que o fogo caído do céu era de Deus, quando o próprio livro deixa claro que não era. O texto registra essas falas justamente para que o contexto ensine como lidar com aquilo que muitas vezes chega travestido de santo ou de desafio de fé. Daí o perigo de abrir a Bíblia ao acaso pedindo direção, como no caso do rapaz que, orando por uma esposa, abriu o texto em uma frase sobre tomar a mulher do amigo e concluiu que deveria tomar a noiva de outro. Ele não era desonesto, estava sinceramente convencido, e é isso que torna a prática perigosa. O caminho correto é reconhecer que o texto tem um autor, que ele escreveu por razões concretas e para destinatários concretos, entender o que ele ensinou àquele povo e só então extrair a aplicação para hoje.',
    modelAnswer:
      'Tudo o que está escrito na Bíblia está ali por vontade de Deus e é inspirado, mas nem toda frase registrada é fala de Deus. A Bíblia registra falas do diabo, como na tentação, quando ele manda transformar pedras em pães, propõe que Jesus se lance do pináculo e chega a citar o Salmo 91. Registra também falas humanas equivocadas, como a dos mensageiros que disseram a Jó que o fogo caído do céu era de Deus, quando o próprio livro deixa claro que não era. O texto registra essas falas justamente para que o contexto ensine como lidar com aquilo que muitas vezes chega travestido de santo ou de desafio de fé. Daí o perigo de abrir a Bíblia ao acaso pedindo direção, como no caso do rapaz que, orando por uma esposa, abriu o texto em uma frase sobre tomar a mulher do amigo e concluiu que deveria tomar a noiva de outro. Ele não era desonesto, estava sinceramente convencido, e é isso que torna a prática perigosa. O caminho correto é reconhecer que o texto tem um autor, que ele escreveu por razões concretas e para destinatários concretos, entender o que ele ensinou àquele povo e só então extrair a aplicação para hoje.',
    keyPoints: [
      'Tudo é inspirado, mas nem tudo registrado é fala de Deus',
      'Falas do diabo registradas, inclusive citando o Salmo 91',
      'Falas humanas equivocadas, como a dos que falaram a Jó',
      'O contexto ensina como lidar com o que está registrado',
      'Risco de abrir a Bíblia ao acaso, com o caso do rapaz e da noiva',
      'O texto tem autor, razões e destinatários, e é daí que vem a aplicação',
    ],
  },
  {
    id: 'HM-DIS-06',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Título e subtítulos',
    prompt:
      'Explique o que é o título do texto em estudo, quais orientações devem ser seguidas para formulá-lo e qual o papel dos subtítulos.',
    hint: 'Pense na lógica de anunciar um produto.',
    explanation:
      'O título é a grande ideia do texto, aquilo que fica na mente de quem estuda e de quem ouve, e por isso foi comparado ao produto que se vai vender. Para chegar a ele é preciso ler a passagem muitas vezes, até estar ensopado do texto, e identificar o tema que o autor desenvolve. As orientações são: usar de preferência uma palavra só e nunca mais que três; usar palavras pitorescas, chamativas ou cômicas, que fixem na memória; usar palavras do próprio texto que ainda não tenham sido usadas; e usar palavras que ajudem a localizar a passagem. Depois do título, divide-se o texto em partes ou parágrafos, e é aí que a estrutura aparece. Em seguida dão-se subtítulos a essas partes, que são as divisões lógicas encontradas no texto. Se o título é o nome do produto anunciado, os subtítulos são as razões pelas quais aquele produto é o que se afirma ser, cada uma delas sustentada pelo próprio parágrafo correspondente.',
    modelAnswer:
      'O título é a grande ideia do texto, aquilo que fica na mente de quem estuda e de quem ouve, e por isso foi comparado ao produto que se vai vender. Para chegar a ele é preciso ler a passagem muitas vezes, até estar ensopado do texto, e identificar o tema que o autor desenvolve. As orientações são: usar de preferência uma palavra só e nunca mais que três; usar palavras pitorescas, chamativas ou cômicas, que fixem na memória; usar palavras do próprio texto que ainda não tenham sido usadas; e usar palavras que ajudem a localizar a passagem. Depois do título, divide-se o texto em partes ou parágrafos, e é aí que a estrutura aparece. Em seguida dão-se subtítulos a essas partes, que são as divisões lógicas encontradas no texto. Se o título é o nome do produto anunciado, os subtítulos são as razões pelas quais aquele produto é o que se afirma ser, cada uma delas sustentada pelo próprio parágrafo correspondente.',
    keyPoints: [
      'O título é a grande ideia, o produto que se vai vender',
      'Ler muitas vezes até identificar o tema do autor',
      'Uma palavra, no máximo três',
      'Palavras pitorescas, do próprio texto e que localizem a passagem',
      'Dividir o texto em partes ou parágrafos, onde a estrutura aparece',
      'Subtítulos como as razões que sustentam o título',
    ],
  },
];
