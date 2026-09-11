import type { Question } from '../types';

/*
 * Banco de questões do assunto "Hermenêutica e Estudo Bíblico" (Aula 4).
 * 25 questões: 12 múltipla escolha, 7 verdadeiro ou falso, 6 discursivas.
 * Não alterar, não remover e não inventar questões. Manter os ids como estão.
 */
export const hermeneuticaEstudoBiblicoQuestions: Question[] = [
  /* ==================== HERMENÊUTICA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'HE-ME-01',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Fases do estudo bíblico',
    prompt: 'Qual é a sequência correta das três fases do estudo bíblico?',
    hint: 'A hermenêutica é a fase intermediária.',
    explanation:
      'Primeiro se observa o que o texto diz, depois se interpreta o que ele significa e só então se aplica à vida. A ordem importa porque uma observação errada gera uma interpretação errada, e uma interpretação errada gera uma aplicação errada.',
    options: [
      { id: 'a', text: 'Interpretação, observação, aplicação' },
      { id: 'b', text: 'Observação, interpretação, aplicação' },
      { id: 'c', text: 'Aplicação, observação, interpretação' },
      { id: 'd', text: 'Observação, aplicação, interpretação' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HE-ME-02',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Princípios de interpretação',
    prompt: 'Por que a hermenêutica é definida ao mesmo tempo como ciência e como arte?',
    hint: 'A palavra vem do grego, com o sentido de interpretar.',
    explanation:
      'Hermenêutica é a arte e a ciência de interpretar. Ciência porque exige estudo, pesquisa e princípios seguros e imutáveis; arte porque estabelece regras práticas de aplicação desses princípios.',
    options: [
      { id: 'a', text: 'Porque depende de inspiração pessoal e de talento natural do intérprete' },
      {
        id: 'b',
        text: 'Porque é ciência ao exigir estudo, pesquisa e princípios seguros e imutáveis, e arte ao estabelecer regras práticas para o seu uso',
      },
      { id: 'c', text: 'Porque combina teologia sistemática com teologia bíblica' },
      { id: 'd', text: 'Porque une o texto original grego ao texto hebraico' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HE-ME-03',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Acessórios da observação',
    prompt: 'Quais são os acessórios da observação que devem ser anotados no estudo de um texto?',
    hint: 'Um deles responde quem escreveu e para quem escreveu.',
    explanation:
      'Além dos passos principais da observação, devem ser anotados a atmosfera da passagem, a forma literária e o autor com o seu destinatário. As perguntas quem escreveu e para quem escreveu precisam ser respondidas mesmo quando a resposta não está no trecho em estudo.',
    options: [
      { id: 'a', text: 'Autor, data e local de escrita' },
      { id: 'b', text: 'Palavras-chave, verbos e conectivos' },
      { id: 'c', text: 'Atmosfera da passagem, forma literária, autor e destinatário' },
      { id: 'd', text: 'Contexto histórico, contexto cultural e contexto geográfico' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-04',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Acessórios da observação',
    prompt: 'Filipenses 3.1 e 2 é usado como exemplo de quê na observação do texto?',
    hint: 'O trecho começa com "alegrai-vos" e logo depois vem "acautelai-vos dos cães".',
    explanation:
      'A passagem começa em tom de alegria e, em dois versículos, passa ao tom de advertência. Isso mostra que a atmosfera pode mudar dentro do mesmo trecho, e o leitor precisa perceber essa mudança.',
    options: [
      { id: 'a', text: 'De alegoria, por causa da imagem dos cães' },
      { id: 'b', text: 'De que uma mesma passagem curta pode conter mais de um tom' },
      { id: 'c', text: 'De passagem paralela, porque repete o que Paulo já dissera' },
      { id: 'd', text: 'De literatura profética dentro de uma epístola' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HE-ME-05',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Princípios de interpretação',
    prompt: 'Qual é a regra fundamental da hermenêutica bíblica?',
    hint: 'Foi assim que Jesus respondeu a Satanás na tentação.',
    explanation:
      'Um texto não pode ser interpretado isoladamente do restante da Escritura. O que ele significa no lugar onde está não pode entrar em conflito com nenhuma outra parte da Bíblia, pois não existe contradição na palavra de Deus.',
    options: [
      { id: 'a', text: 'O texto deve ser lido sempre no sentido literal' },
      { id: 'b', text: 'O texto deve ser lido à luz da tradição da igreja' },
      { id: 'c', text: 'A Bíblia explica a própria Bíblia' },
      { id: 'd', text: 'O texto deve ser lido a partir da experiência do leitor' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-06',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Sentido da palavra e contexto',
    prompt:
      'A palavra "ovelha" aparece em Mateus 12.11 e 12 e também em João 10.14. O que essa comparação ensina?',
    hint: 'Vale o mesmo raciocínio da palavra "manga" em português.',
    explanation:
      'Em Mateus a ovelha é o animal, em João é o povo de Deus. Deve-se interpretar a palavra pelo seu significado comum e usual enquanto isso for possível, mas é o contexto que define o sentido, exatamente como ninguém confunde suco de manga com a manga da camisa.',
    options: [
      { id: 'a', text: 'Que o Novo Testamento usa sempre a mesma imagem para o povo de Deus' },
      { id: 'b', text: 'Que o sentido figurado deve ser preferido sempre que possível' },
      {
        id: 'c',
        text: 'Que a mesma palavra pode ter sentido comum em um texto e figurado em outro, e o contexto é que decide',
      },
      { id: 'd', text: 'Que a tradução usada muda o significado da palavra' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-07',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Sentido da palavra e contexto',
    prompt:
      'A palavra grega exousia aparece em Mateus 28.18, quando Jesus diz que toda autoridade lhe foi dada, e também em Efésios, ao falar de principados e potestades. O que esse caso demonstra?',
    hint: 'Se valesse apenas o verbete do léxico, a conclusão sobre Mateus 28.18 seria monstruosa.',
    explanation:
      'É a mesma palavra nos dois textos, e ela de fato significa autoridade. Os poderes espirituais são um tipo de autoridade, mas isso não permite ler Mateus 28.18 como se Jesus tivesse recebido demônios. Fazer exegese só pelo significado isolado da palavra distorce o texto.',
    options: [
      { id: 'a', text: 'Que houve erro de tradução em uma das passagens' },
      {
        id: 'b',
        text: 'Que o significado isolado da palavra não basta, e concluir pelo léxico que Jesus recebeu os demônios seria um absurdo produzido por má interpretação',
      },
      { id: 'c', text: 'Que Jesus recebeu autoridade sobre os demônios apenas depois da ressurreição' },
      { id: 'd', text: 'Que Efésios usa a palavra em sentido figurado e Mateus em sentido literal' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HE-ME-08',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Passagens paralelas',
    prompt: 'Qual é a ordem de preferência na busca de passagens paralelas?',
    hint: 'Comece pelo que está mais próximo do texto em estudo.',
    explanation:
      'A preferência é sempre por passagens do mesmo livro. Não havendo, busca-se no mesmo autor, depois em autores contemporâneos e, por fim, nos demais livros da Bíblia.',
    options: [
      { id: 'a', text: 'Novo Testamento, Antigo Testamento, apócrifos, comentários' },
      { id: 'b', text: 'Textos mais claros, textos mais antigos, textos mais citados, textos mais longos' },
      { id: 'c', text: 'Mesmo livro, mesmo autor, autores contemporâneos, demais livros da Bíblia' },
      { id: 'd', text: 'Mesmo autor, mesmo gênero literário, mesmo idioma, mesmo período' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-09',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Profecia e cumprimento',
    prompt: 'Em Atos 2, ao citar a profecia de Joel, o que exatamente Pedro afirma?',
    hint: 'Preste atenção ao tempo verbal usado por Pedro no versículo 16.',
    explanation:
      'Pedro diz que aqueles homens não estavam embriagados e que o que ocorre é o que fora dito por intermédio do profeta Joel. Ele não disse o que ocorreu nem o que ocorrerá, e citou a profecia inteira, e não apenas a parte do derramamento do Espírito.',
    options: [
      { id: 'a', text: 'Que a profecia ainda se cumpriria no futuro distante' },
      { id: 'b', text: 'Que apenas o derramamento do Espírito estava se cumprindo naquele dia' },
      {
        id: 'c',
        text: 'Que o que estava ocorrendo ali era o que fora dito pelo profeta Joel, no tempo presente',
      },
      { id: 'd', text: 'Que a profecia já havia se cumprido no tempo dos profetas' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-10',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Profecia e cumprimento',
    prompt:
      'Na profecia de Joel citada por Pedro, a expressão "sangue, fogo e coluna de fumaça" corresponde a quê?',
    hint: 'O texto anuncia um prodígio que é ao mesmo tempo celestial e terreno, e depois explica o que ele é.',
    explanation:
      'Sangue, fogo e coluna de fumaça é a ordem do holocausto. O prodígio anunciado no céu e na terra é um sacrifício, visto do céu e visto da terra. O sol da justiça é Cristo, e o seu escurecimento aponta para a Sua morte, enquanto a lua, figura da igreja, reflete a luz que vem do sol.',
    options: [
      { id: 'a', text: 'Às pragas do Egito' },
      { id: 'b', text: 'À ordem do holocausto, ou seja, ao sacrifício' },
      { id: 'c', text: 'Aos sinais de guerra no fim dos tempos' },
      { id: 'd', text: 'Aos fenômenos naturais observados em eclipses' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'HE-ME-11',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Linguagem figurada',
    prompt: 'Qual alternativa define corretamente a alegoria?',
    hint: 'João 6.51 a 54 e 1 Coríntios 3.5 a 9 são exemplos.',
    explanation:
      'A metáfora é a comparação baseada em semelhança, como em João 14.6. A parábola é a narração que ilustra uma verdade moral ou espiritual. A alegoria é uma série de metáforas com significado próprio, que torna quase impossível a leitura literal e costuma vir acompanhada da sua própria interpretação.',
    options: [
      { id: 'a', text: 'Comparação direta baseada em uma semelhança entre duas coisas' },
      { id: 'b', text: 'Narração ou história criada para ilustrar uma verdade moral ou espiritual' },
      {
        id: 'c',
        text: 'Série de metáforas encadeadas, com significado próprio correspondente, quase impossível de ler literalmente e em geral acompanhada da própria interpretação',
      },
      { id: 'd', text: 'Exagero proposital usado para reforçar uma advertência' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'HE-ME-12',
    subject: 'hermeneutica',
    type: 'multipla',
    topic: 'Parábolas',
    prompt: 'Qual é a intenção do texto da torre, em Lucas 14.28?',
    hint: 'Alguns versículos adiante Jesus diz quem não pode ser Seu discípulo.',
    explanation:
      'O contexto trata de discipulado, e no versículo 33 Jesus diz que quem não renuncia a tudo quanto possui não pode ser Seu discípulo. A torre não é sobre administração ou finanças, e sim sobre calcular o custo de seguir a Cristo, para que a vida não se torne um monumento inacabado.',
    options: [
      { id: 'a', text: 'Ensinar que o cristão deve gastar menos do que ganha' },
      { id: 'b', text: 'Ensinar a elaborar projetos antes de qualquer empreendimento' },
      { id: 'c', text: 'Ensinar a calcular o custo de seguir a Jesus antes de começar a segui-lo' },
      { id: 'd', text: 'Ensinar que obras inacabadas envergonham o testemunho cristão' },
    ],
    correctOptionId: 'c',
  },

  /* ==================== HERMENÊUTICA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'HE-VF-01',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Lei e pecado',
    prompt:
      'Quando Romanos 5 diz que o pecado não é levado em conta quando não há lei, o texto está dizendo que Deus não considerava pecado a conduta dos homens antes da lei de Moisés.',
    hint: 'Pergunte ao texto para quem o pecado não era levado em conta.',
    explanation:
      'A pergunta que falta fazer é para quem o pecado não era levado em conta. Não era para o próprio homem, que pecava sem consciência do pecado, já que não havia lei que lhe dissesse que aquilo era pecado. Diante de Deus o pecado existia, tanto que a morte reinou de Adão até Moisés e o dilúvio veio muito antes da lei.',
    correctAnswer: false,
  },
  {
    id: 'HE-VF-02',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Lei e pecado',
    prompt:
      'A lei foi dada como tutor para conduzir a Cristo, revelando ao homem que ele é pecador e incapaz de cumpri-la.',
    hint: 'Lembre da ilustração da vassoura e da água, no livro O Peregrino.',
    explanation:
      'A lei veio para trazer o pecado à tona, como a vassoura que levanta a poeira do quarto e mostra o quanto ele está sujo. O evangelho é a água que assenta a poeira e permite que a sujeira seja removida. O propósito da lei é mostrar que o homem não consegue, e Cristo vem ser a resposta em nosso lugar.',
    correctAnswer: true,
  },
  {
    id: 'HE-VF-03',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Lei e pecado',
    prompt:
      'Como Paulo se chamou de o maior dos pecadores, o cristão convertido deve continuar se identificando como pecador.',
    hint: 'Repare a que tempo da vida de Paulo aquela frase se refere.',
    explanation:
      'Paulo se referia ao período anterior à sua conversão, quando perseguia a igreja. A Escritura diz que Cristo morreu por nós quando ainda éramos pecadores e que, agora justificados, seremos por Ele salvos da ira. O antônimo de pecador, nesse caso, é justificado.',
    correctAnswer: false,
  },
  {
    id: 'HE-VF-04',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Princípios de interpretação',
    prompt: 'Reunir vários versículos que contêm a mesma palavra já é suficiente para construir uma doutrina bíblica.',
    hint: 'A casa é feita de tijolos, mas um monte de tijolos não é uma casa.',
    explanation:
      'Um monte de versículos não é uma doutrina, assim como um monte de tijolos não é uma casa. Costurar textos apenas porque repetem a mesma palavra, ignorando o sentido de cada um no seu contexto, é como se constroem doutrinas estranhas à intenção da Escritura.',
    correctAnswer: false,
  },
  {
    id: 'HE-VF-05',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Princípios de interpretação',
    prompt:
      'Um texto não pode ser interpretado isoladamente do restante da Escritura, pois não existe contradição na palavra de Deus.',
    hint: 'Apocalipse 22.18 e 19, Deuteronômio 4.2 e 1 Coríntios 4.6 tratam do mesmo cuidado.',
    explanation:
      'Nada se acrescenta e nada se tira da palavra. Se o princípio é violado, torna-se possível montar doutrinas contrárias ao que Deus quer ensinar, como se faz ao justificar práticas e sistemas inteiros a partir de textos lidos fora do todo.',
    correctAnswer: true,
  },
  {
    id: 'HE-VF-06',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Princípios de interpretação',
    prompt:
      'Em Mateus 19, ao ser questionado sobre o divórcio, Jesus corrige a premissa da pergunta dizendo que Moisés permitiu, e não mandou, dar carta de divórcio.',
    hint: 'A pergunta já vinha com a resposta embutida, e Jesus não entrou nela.',
    explanation:
      'O texto de Deuteronômio 24 narra uma situação e concede uma permissão que protegia a mulher repudiada, não um mandamento. Jesus responde que Moisés permitiu por causa da dureza do coração deles, mas que não foi assim desde o princípio. O mesmo cuidado com palavras colocadas na boca do outro é uma lição de interpretação.',
    correctAnswer: true,
  },
  {
    id: 'HE-VF-07',
    subject: 'hermeneutica',
    type: 'vf',
    topic: 'Traduções',
    prompt:
      'A Almeida Revista e Corrigida traz em Mateus 5.44 frases que não constam nos manuscritos originais e que estão ausentes na Revista e Atualizada.',
    hint: 'Compare o versículo nas duas versões e veja qual é mais curta.',
    explanation:
      'Na Revista e Atualizada o versículo se encerra em amar os inimigos e orar pelos que perseguem. A Corrigida traz acréscimos que não estão no texto original. Traduções feitas a partir de outra tradução acumulam esse tipo de problema, e por isso a recomendação recai sobre a Revista e Atualizada, a NVI e a NAA.',
    correctAnswer: true,
  },

  /* ==================== HERMENÊUTICA - DISCURSIVAS ==================== */
  {
    id: 'HE-DIS-01',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Fases do estudo bíblico',
    prompt: 'Explique as três fases do estudo bíblico e por que um erro na primeira compromete todas as demais.',
    hint: 'Pense no efeito cascata e em um exemplo concreto de aplicação equivocada.',
    explanation:
      'As três fases são observação, interpretação e aplicação. Na observação se registra o que o texto diz, incluindo verbos, tempos verbais, divisão em parágrafos e os acessórios da observação, que são a atmosfera da passagem, a forma literária e o autor com o seu destinatário. A interpretação é a fase intermediária, na qual se busca o significado correto do que foi observado, sempre com dependência do Espírito Santo e sem acrescentar nem diminuir a palavra. A aplicação leva o texto à vida. O erro se propaga em cascata: uma observação errada produz uma interpretação errada, e esta produz uma aplicação errada. É assim que alguém termina marcando data para o fim do mundo porque a lua apareceu avermelhada. O caminho para evitar isso é bombardear o texto de perguntas, porque cada palavra está ali por um propósito.',
    modelAnswer:
      'As três fases são observação, interpretação e aplicação. Na observação se registra o que o texto diz, incluindo verbos, tempos verbais, divisão em parágrafos e os acessórios da observação, que são a atmosfera da passagem, a forma literária e o autor com o seu destinatário. A interpretação é a fase intermediária, na qual se busca o significado correto do que foi observado, sempre com dependência do Espírito Santo e sem acrescentar nem diminuir a palavra. A aplicação leva o texto à vida. O erro se propaga em cascata: uma observação errada produz uma interpretação errada, e esta produz uma aplicação errada. É assim que alguém termina marcando data para o fim do mundo porque a lua apareceu avermelhada. O caminho para evitar isso é bombardear o texto de perguntas, porque cada palavra está ali por um propósito.',
    keyPoints: [
      'Observação, interpretação e aplicação, nessa ordem',
      'O que se registra na observação',
      'A interpretação é intermediária, mas não secundária',
      'Erro em cascata de uma fase para a outra',
      'Exemplo de aplicação equivocada',
      'Fazer perguntas ao texto',
    ],
  },
  {
    id: 'HE-DIS-02',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Lei e pecado',
    prompt:
      'Explique o que Romanos 5 quer dizer com "o pecado não é levado em conta quando não há lei", respondendo a quem se refere essa expressão, e relacione com o propósito da lei.',
    hint: 'A pergunta decisiva é para quem o pecado não é levado em conta.',
    explanation:
      'A maioria supõe que quem não leva o pecado em conta é Deus, mas não é. O texto fala da consciência do homem: sem uma lei que diga que cobiçar é pecado, o homem cobiça sem consciência de pecado. Que o pecado existia diante de Deus fica claro no próprio contexto, pois a morte reinou de Adão até Moisés, sobre pessoas que não pecaram à semelhança da transgressão de Adão, e o dilúvio veio muito antes da lei, antes até de Abraão. O propósito da lei, portanto, não é salvar, e sim revelar. Ela foi dada como tutor para conduzir a Cristo, fazendo o pecado vir à tona e mostrando ao homem que ele não consegue cumpri-la. É a imagem do quarto empoeirado em O Peregrino: a vassoura, que é a lei, apenas levanta a poeira e mostra a sujeira; a água, que é o evangelho, assenta a poeira e permite que a sujeira seja removida. Onde abundou o pecado, superabundou a graça.',
    modelAnswer:
      'A maioria supõe que quem não leva o pecado em conta é Deus, mas não é. O texto fala da consciência do homem: sem uma lei que diga que cobiçar é pecado, o homem cobiça sem consciência de pecado. Que o pecado existia diante de Deus fica claro no próprio contexto, pois a morte reinou de Adão até Moisés, sobre pessoas que não pecaram à semelhança da transgressão de Adão, e o dilúvio veio muito antes da lei, antes até de Abraão. O propósito da lei, portanto, não é salvar, e sim revelar. Ela foi dada como tutor para conduzir a Cristo, fazendo o pecado vir à tona e mostrando ao homem que ele não consegue cumpri-la. É a imagem do quarto empoeirado em O Peregrino: a vassoura, que é a lei, apenas levanta a poeira e mostra a sujeira; a água, que é o evangelho, assenta a poeira e permite que a sujeira seja removida. Onde abundou o pecado, superabundou a graça.',
    keyPoints: [
      'Não é Deus que deixa de levar em conta, é a consciência do homem',
      'Sem lei não há consciência de pecado',
      'A morte reinou de Adão até Moisés e o dilúvio veio antes da lei',
      'A lei é tutor que conduz a Cristo',
      'Ilustração da vassoura e da água',
      'Onde abundou o pecado, superabundou a graça',
    ],
  },
  {
    id: 'HE-DIS-03',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Profecia e cumprimento',
    prompt:
      'Explique como Pedro, em Atos 2, aplica a profecia de Joel, e o que significam o prodígio celestial e terreno, o sol convertido em trevas e a lua em sangue.',
    hint: 'Comece pelo tempo verbal que Pedro usa e siga o que vem depois dos dois pontos na profecia.',
    explanation:
      'Pedro diz que aqueles homens não estavam embriagados e que o que ocorre é o que fora dito por intermédio do profeta Joel. O verbo está no presente, e ele cita a profecia inteira, não apenas a parte do derramamento do Espírito. Na profecia, Deus anuncia um prodígio no céu e na terra, isto é, um fenômeno ao mesmo tempo celestial e terreno, e em seguida explica qual é: sangue, fogo e coluna de fumaça, que é a ordem do holocausto, ou seja, um sacrifício. O único sacrifício visto do céu e da terra é Cristo. O sol que se converte em trevas é o sol da justiça, figura de Cristo, apontando para a Sua morte. A lua é figura da igreja, que não tem luz própria e só brilha refletindo o sol da justiça, e que naquele momento foi coberta. A consequência anunciada é que todo aquele que invocar o nome do Senhor será salvo, e foi exatamente o que aconteceu ali, com três mil pessoas salvas. Isso corrige a leitura popular que transforma a lua avermelhada em sinal de fim do mundo, já que depois da volta de Jesus não seriam salvos os que invocassem o nome do Senhor.',
    modelAnswer:
      'Pedro diz que aqueles homens não estavam embriagados e que o que ocorre é o que fora dito por intermédio do profeta Joel. O verbo está no presente, e ele cita a profecia inteira, não apenas a parte do derramamento do Espírito. Na profecia, Deus anuncia um prodígio no céu e na terra, isto é, um fenômeno ao mesmo tempo celestial e terreno, e em seguida explica qual é: sangue, fogo e coluna de fumaça, que é a ordem do holocausto, ou seja, um sacrifício. O único sacrifício visto do céu e da terra é Cristo. O sol que se converte em trevas é o sol da justiça, figura de Cristo, apontando para a Sua morte. A lua é figura da igreja, que não tem luz própria e só brilha refletindo o sol da justiça, e que naquele momento foi coberta. A consequência anunciada é que todo aquele que invocar o nome do Senhor será salvo, e foi exatamente o que aconteceu ali, com três mil pessoas salvas. Isso corrige a leitura popular que transforma a lua avermelhada em sinal de fim do mundo, já que depois da volta de Jesus não seriam salvos os que invocassem o nome do Senhor.',
    keyPoints: [
      'Pedro usa o tempo presente e cita a profecia inteira',
      'Prodígio celestial e terreno seguido da explicação',
      'Sangue, fogo e fumaça como ordem do holocausto, um sacrifício',
      'O sol da justiça é Cristo e a lua é figura da igreja',
      'Todo aquele que invocar será salvo, com três mil salvos',
      'Crítica à leitura popular da lua de sangue',
    ],
  },
  {
    id: 'HE-DIS-04',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Passagens paralelas',
    prompt:
      'Explique o princípio das passagens paralelas: o que são, quando usá-las, qual a ordem de preferência e dê um exemplo.',
    hint: 'Pense nos três relatos da conversão de Saulo.',
    explanation:
      'Passagens paralelas são passagens que fazem referência umas às outras, têm entre si alguma relação ou tratam de um modo ou de outro do mesmo assunto. Usa-se esse princípio quando no texto em estudo aparecem palavras de significado difícil ou frases e conceitos que não estão claros, e então se recorre a outras passagens que esclareçam o ponto. A ordem de preferência começa pelas passagens do mesmo livro, segue para outras passagens do mesmo autor, depois para autores contemporâneos e, por último, para os demais livros da Bíblia. Um exemplo são os três relatos da conversão de Saulo em Atos 9, 22 e 26: um informa que ele ouviu a voz, outro que a voz falava em língua hebraica e outro acrescenta que ele caiu por terra. Outro exemplo é Isaías 61, cujo sentido se esclarece em Lucas 4.18, onde Jesus assume para Si aquele texto. Ferramentas de busca em Bíblias digitais ajudam a localizar essas passagens, mas a regra de proximidade continua valendo.',
    modelAnswer:
      'Passagens paralelas são passagens que fazem referência umas às outras, têm entre si alguma relação ou tratam de um modo ou de outro do mesmo assunto. Usa-se esse princípio quando no texto em estudo aparecem palavras de significado difícil ou frases e conceitos que não estão claros, e então se recorre a outras passagens que esclareçam o ponto. A ordem de preferência começa pelas passagens do mesmo livro, segue para outras passagens do mesmo autor, depois para autores contemporâneos e, por último, para os demais livros da Bíblia. Um exemplo são os três relatos da conversão de Saulo em Atos 9, 22 e 26: um informa que ele ouviu a voz, outro que a voz falava em língua hebraica e outro acrescenta que ele caiu por terra. Outro exemplo é Isaías 61, cujo sentido se esclarece em Lucas 4.18, onde Jesus assume para Si aquele texto. Ferramentas de busca em Bíblias digitais ajudam a localizar essas passagens, mas a regra de proximidade continua valendo.',
    keyPoints: [
      'Definição de passagem paralela',
      'Quando usar: termos difíceis ou conceitos obscuros',
      'Ordem: mesmo livro, mesmo autor, contemporâneos, demais livros',
      'Exemplo dos três relatos da conversão de Saulo',
      'Exemplo de Isaías 61 e Lucas 4.18',
    ],
  },
  {
    id: 'HE-DIS-05',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Linguagem figurada',
    prompt:
      'Diferencie metáfora, alegoria e parábola, dando um exemplo de cada, e explique por que ignorar o gênero literário produz interpretações erradas.',
    hint: 'Pergunte-se por que nenhum discípulo aparece sem uma das mãos.',
    explanation:
      'A metáfora é uma comparação baseada em semelhança, como em João 14.6, quando Jesus diz ser o caminho, sem que isso signifique uma estrada onde os discípulos pisariam. A alegoria é uma série de metáforas com significado próprio correspondente, que torna quase impossível a leitura literal e em geral vem acompanhada da própria interpretação, como em João 6.51 a 54 e em 1 Coríntios 3.5 a 9. A parábola é uma espécie de alegoria em forma de narração ou história, com o propósito de ilustrar ou esclarecer uma verdade moral ou espiritual, como em Mateus 13.3 a 8 e Mateus 13.24 a 30. Ignorar o gênero literário leva a tratar como literal o que não foi escrito para ser literal. Se alguém diz que a esposa é a abelha que produz o mel da sua vida, um leitor distante mil anos concluiria que ele se casou com um inseto. Da mesma forma, é evidente que os discípulos pecaram depois de Pentecostes e a Bíblia registra isso, mas nenhum deles aparece sem uma das mãos ou sem um dos olhos, o que mostra que aquelas palavras de Jesus tinham outra intenção.',
    modelAnswer:
      'A metáfora é uma comparação baseada em semelhança, como em João 14.6, quando Jesus diz ser o caminho, sem que isso signifique uma estrada onde os discípulos pisariam. A alegoria é uma série de metáforas com significado próprio correspondente, que torna quase impossível a leitura literal e em geral vem acompanhada da própria interpretação, como em João 6.51 a 54 e em 1 Coríntios 3.5 a 9. A parábola é uma espécie de alegoria em forma de narração ou história, com o propósito de ilustrar ou esclarecer uma verdade moral ou espiritual, como em Mateus 13.3 a 8 e Mateus 13.24 a 30. Ignorar o gênero literário leva a tratar como literal o que não foi escrito para ser literal. Se alguém diz que a esposa é a abelha que produz o mel da sua vida, um leitor distante mil anos concluiria que ele se casou com um inseto. Da mesma forma, é evidente que os discípulos pecaram depois de Pentecostes e a Bíblia registra isso, mas nenhum deles aparece sem uma das mãos ou sem um dos olhos, o que mostra que aquelas palavras de Jesus tinham outra intenção.',
    keyPoints: [
      'Metáfora: comparação por semelhança, com exemplo',
      'Alegoria: série de metáforas, quase sempre autointerpretada, com exemplo',
      'Parábola: narração que ilustra verdade moral ou espiritual, com exemplo',
      'Ignorar o gênero literaliza o que não é literal',
      'Exemplos da linguagem poética e da mão arrancada',
    ],
  },
  {
    id: 'HE-DIS-06',
    subject: 'hermeneutica',
    type: 'discursiva',
    topic: 'Parábolas',
    prompt:
      'Explique as regras para interpretar uma parábola e mostre, usando o texto da torre em Lucas 14, como o descuido com essas regras produz uma leitura equivocada.',
    hint: 'A intenção da parábola não está nos detalhes, e leitura picotada esconde a intenção do texto.',
    explanation:
      'As regras são procurar descobrir qual o objetivo da parábola, observar o seu início e o seu fim para verificar com que propósito ela foi ensinada, e não se prender aos adornos, mas ao ensinamento principal, já que a intenção não está nos muitos detalhes e sim na mensagem geral. O texto da torre costuma ser pregado como princípio de administração financeira, no sentido de gastar menos do que se ganha e planejar antes de empreender. Mas o contexto trata de discipulado: pouco antes Jesus fala em aborrecer pai, mãe e a própria vida para ser Seu discípulo, e no versículo 33 diz que quem não renuncia a tudo quanto possui não pode ser Seu discípulo. A intenção, portanto, é calcular o custo de segui-Lo antes de começar, para que a vida não vire um monumento inacabado. A raiz do erro é o hábito de ler quatro ou cinco versículos isolados, porque cada carta e cada narrativa tem uma intenção que só aparece na leitura do texto completo. Vale lembrar que na parábola do semeador Jesus explica que a semente à beira do caminho é a de quem ouve e não compreende, e por isso o inimigo a rouba, o que obriga quem ensina a levar as pessoas à compreensão, e não apenas à emoção.',
    modelAnswer:
      'As regras são procurar descobrir qual o objetivo da parábola, observar o seu início e o seu fim para verificar com que propósito ela foi ensinada, e não se prender aos adornos, mas ao ensinamento principal, já que a intenção não está nos muitos detalhes e sim na mensagem geral. O texto da torre costuma ser pregado como princípio de administração financeira, no sentido de gastar menos do que se ganha e planejar antes de empreender. Mas o contexto trata de discipulado: pouco antes Jesus fala em aborrecer pai, mãe e a própria vida para ser Seu discípulo, e no versículo 33 diz que quem não renuncia a tudo quanto possui não pode ser Seu discípulo. A intenção, portanto, é calcular o custo de segui-Lo antes de começar, para que a vida não vire um monumento inacabado. A raiz do erro é o hábito de ler quatro ou cinco versículos isolados, porque cada carta e cada narrativa tem uma intenção que só aparece na leitura do texto completo. Vale lembrar que na parábola do semeador Jesus explica que a semente à beira do caminho é a de quem ouve e não compreende, e por isso o inimigo a rouba, o que obriga quem ensina a levar as pessoas à compreensão, e não apenas à emoção.',
    keyPoints: [
      'Descobrir o objetivo da parábola',
      'Observar início e fim',
      'Não se prender aos adornos, mas ao ensino principal',
      'Lucas 14 trata de discipulado, não de finanças',
      'Versículo 33 e a renúncia a tudo',
      'Leitura picotada esconde a intenção do texto',
      'Semeador: sem compreensão, o inimigo rouba a semente',
    ],
  },
];
