import type { Question } from '../types';

/*
 * Banco de questões do assunto "Evangelismo".
 * Estas são questões para fixar o conhecimento (modo fixação), organizadas por aula/parte.
 * Não alterar, não remover e não inventar questões. Manter os ids como estão.
 */
export const evangelismoQuestions: Question[] = [
  /* ==================== EVANGELISMO - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'E-ME-01',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'O encontro em Samaria',
    prompt:
      'A expressão "era necessário passar por Samaria", em João 4, indica o quê sobre a atitude de Jesus?',
    hint: 'Pergunte se Jesus escolheu o caminho mais confortável ou o caminho onde havia uma vida a alcançar.',
    explanation:
      'Samaria era o lugar que os judeus evitavam. Jesus não estava simplesmente passando, Ele conduzia os acontecimentos para alcançar aquela mulher. O evangelismo começa quando entendemos que Deus nos envia a lugares e pessoas com propósito.',
    options: [
      { id: 'a', text: 'Que aquele era o caminho mais curto e mais seguro até a Galileia' },
      {
        id: 'b',
        text: 'Que havia um propósito e um encontro previamente marcado, e não uma coincidência de rota',
      },
      { id: 'c', text: 'Que Jesus fugia dos fariseus e precisava de um desvio' },
      { id: 'd', text: 'Que a lei judaica obrigava a passagem por aquele território' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'E-ME-02',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'O encontro em Samaria',
    prompt: 'Por que a mulher samaritana foi buscar água por volta do meio-dia?',
    hint: 'O horário era o esconderijo dela, não uma conveniência.',
    explanation:
      'Ela tinha tido cinco maridos e vivia com um sexto homem, e por isso era desprezada pela cidade. O sol a pino era o preço que ela pagava para não encontrar ninguém. Foi exatamente nesse esconderijo que Jesus marcou o encontro.',
    options: [
      { id: 'a', text: 'Porque era o horário em que o poço tinha mais água' },
      { id: 'b', text: 'Porque as mulheres da cidade se reuniam ali nesse horário' },
      {
        id: 'c',
        text: 'Porque era o horário em que ninguém ia ao poço, e ela se escondia da rejeição da cidade',
      },
      { id: 'd', text: 'Porque estava voltando do trabalho no campo' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'E-ME-03',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'Multiplicação e discipulado',
    prompt:
      'Qual o modelo de multiplicação apresentado na aula, a partir da forma como Jesus caminhava com doze e mantinha três mais próximos?',
    hint: 'Na dinâmica da aula, todo mundo escolheu os três que estavam do lado, e esse foi justamente o ponto.',
    explanation:
      'O natural é setorizar e pegar os mais próximos. A visão de Jesus é ramificar em direções diferentes, para que cada ponto alcançado abra um novo campo. É assim que o alcance deixa de ser um raio fechado e se torna exponencial, chegando às nações.',
    options: [
      { id: 'a', text: 'Reunir grandes multidões em um único lugar e pregar para todas de uma vez' },
      {
        id: 'b',
        text: 'Concentrar todo o trabalho nas pessoas do mesmo setor, que são as mais fáceis de alcançar',
      },
      { id: 'c', text: 'Esperar que as pessoas procurem a igreja por conta própria' },
      {
        id: 'd',
        text: 'Cada discípulo cuidar de perto de um grupo pequeno, buscando pessoas de lugares diferentes, para que a ramificação alcance regiões que ninguém alcança',
      },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'E-ME-04',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'Fundamento bíblico',
    prompt: 'Segundo João 15:16, qual é a razão pela qual fomos escolhidos?',
    hint: 'O texto começa dizendo que não fomos nós que o escolhemos.',
    explanation:
      'O texto afirma que não fomos nós que escolhemos a Ele, mas Ele que nos escolheu e designou para dar fruto que permaneça. Junto com Mateus 28:19, isso define a comissão: ir, fazer discípulos e ensinar.',
    options: [
      { id: 'a', text: 'Para sermos servidos e protegidos das dificuldades' },
      { id: 'b', text: 'Para darmos fruto, e para que esse fruto permaneça' },
      { id: 'c', text: 'Para julgarmos as nações que rejeitam o Evangelho' },
      { id: 'd', text: 'Para guardarmos a lei com mais rigor que os outros' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'E-ME-05',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'Abordagem do evangelista',
    prompt:
      'Segundo a aula, qual deve ser a primeira atitude ao evangelizar alguém que a sociedade rejeita, como um dependente químico, um traficante ou um travesti?',
    hint: 'Jesus mencionou os cinco maridos, mas não fez disso o assunto da conversa.',
    explanation:
      'Jesus tocou na vida da samaritana sem transformar o pecado dela no centro da conversa. Ele ganhou o coração primeiro. Essas pessoas já sabem que erram e já são apontadas por todos, o que falta é alguém que transborde amor. Qualquer barreira levantada logo de início faz a pessoa recuar e não querer mais ouvir.',
    options: [
      { id: 'a', text: 'Apontar o pecado com clareza, para que a pessoa entenda sua condição' },
      { id: 'b', text: 'Convidar imediatamente para o culto da igreja' },
      {
        id: 'c',
        text: 'Ganhar o coração pelo amor e pela disponibilidade, oferecendo oração antes de qualquer cobrança',
      },
      { id: 'd', text: 'Esperar que a pessoa mude de vida antes de qualquer aproximação' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'E-ME-06',
    subject: 'evangelismo',
    type: 'multipla',
    topic: 'Presença e Trindade',
    prompt: 'Na ilustração usada na aula, o sol, a luz e o calor representam respectivamente:',
    hint: 'São três realidades distintas, mas um único sol.',
    explanation:
      'O Pai é o sol, o Filho é a luz que sai do sol e o Espírito Santo é o calor que se sente. As pessoas primeiro enxergam de longe a luz, ou seja, a transformação da nossa vida, e depois sentem o calor, que é o Espírito Santo agindo. Os dias de nuvem representam os momentos de fraqueza, em que o sol continua ali mesmo encoberto.',
    options: [
      { id: 'a', text: 'A igreja, a Bíblia e a pregação' },
      { id: 'b', text: 'A fé, a esperança e o amor' },
      { id: 'c', text: 'O Pai, o Filho e o Espírito Santo' },
      { id: 'd', text: 'O chamado, o dom e o ministério' },
    ],
    correctOptionId: 'c',
  },

  /* ==================== EVANGELISMO - VERDADEIRO OU FALSO ==================== */
  {
    id: 'E-VF-01',
    subject: 'evangelismo',
    type: 'vf',
    topic: 'Capacitação e disponibilidade',
    prompt:
      'Segundo a aula, o evangelista só deve sair para evangelizar quando estiver plenamente pronto e capacitado.',
    hint: 'A pergunta certa não é "estou pronto", é outra.',
    explanation:
      'A aula ensina que nunca estaremos prontos nem plenamente capacitados, porque a capacitação é contínua e quem faz a obra é Deus. O que se exige é disponibilidade. A preocupação não deve ser com o que falar, e sim com ser habitação do Espírito Santo.',
    correctAnswer: false,
  },
  {
    id: 'E-VF-02',
    subject: 'evangelismo',
    type: 'vf',
    topic: 'Encher e transbordar',
    prompt:
      'Estar cheio da presença de Deus já cumpre o propósito, mesmo que a pessoa não transborde na vida de outras.',
    hint: 'Existe um mar cheio de água que não produz vida nenhuma.',
    explanation:
      'Quem se enche e não transborda é como o Mar Morto, cheio de água e sem fruto. O propósito é ser canal de bênção, esvaziar na vida do outro, voltar à fonte e encher de novo. Não adianta se preparar como atleta e nunca entrar em campo.',
    correctAnswer: false,
  },
  {
    id: 'E-VF-03',
    subject: 'evangelismo',
    type: 'vf',
    topic: 'A presença de Deus',
    prompt:
      'Mesmo com a promessa de um anjo para conduzir o povo até uma terra que emana leite e mel, Moisés disse a Deus que não sairia dali sem a presença dEle.',
    hint: 'A ousadia dele mudou o desfecho da conversa.',
    explanation:
      'Deus prometeu enviar um anjo adiante do povo, e Moisés respondeu que não iria sem a presença de Deus. O princípio é direto: não adianta o propósito ser bom se não for com a presença. Isso vale para quem sai para evangelizar confiando na própria capacidade.',
    correctAnswer: true,
  },

  /* ==================== EVANGELISMO - DISCURSIVAS ==================== */
  {
    id: 'E-DIS-01',
    subject: 'evangelismo',
    type: 'discursiva',
    topic: 'Samaria como campo missionário',
    prompt:
      'Explique o que significa "era necessário passar por Samaria" e identifique o que representa a Samaria na vida do evangelista hoje.',
    hint: 'Pense no contraste entre o caminho confortável e o caminho onde havia uma vida a alcançar.',
    explanation:
      'Samaria era o território que os judeus evitavam, e Jesus poderia ter escolhido a rota mais confortável e segura. Ao dizer que era necessário passar por ali, Ele revela propósito e não coincidência: havia um encontro marcado com uma mulher específica, num horário específico. A lição para o evangelista é que Deus envia a lugares e pessoas com propósito, e que onde nós enxergamos uma barreira Ele enxerga um campo missionário. A Samaria de hoje é o lugar que a pessoa acha que não pode ou não deve entrar: a favela, a cracolândia, o grupo da escola ou da faculdade, a periferia, o sertão, os ribeirinhos, as redes sociais, a balada, e muitas vezes a própria casa, onde as pessoas mais próximas ainda precisam sentir o calor que vem de Deus. O que muda tudo é a visão, e a orientação não é se preocupar em como fazer, e sim em estar disponível, porque quem faz a obra é Ele.',
    modelAnswer:
      'Samaria era o território que os judeus evitavam, e Jesus poderia ter escolhido a rota mais confortável e segura. Ao dizer que era necessário passar por ali, Ele revela propósito e não coincidência: havia um encontro marcado com uma mulher específica, num horário específico. A lição para o evangelista é que Deus envia a lugares e pessoas com propósito, e que onde nós enxergamos uma barreira Ele enxerga um campo missionário. A Samaria de hoje é o lugar que a pessoa acha que não pode ou não deve entrar: a favela, a cracolândia, o grupo da escola ou da faculdade, a periferia, o sertão, os ribeirinhos, as redes sociais, a balada, e muitas vezes a própria casa, onde as pessoas mais próximas ainda precisam sentir o calor que vem de Deus. O que muda tudo é a visão, e a orientação não é se preocupar em como fazer, e sim em estar disponível, porque quem faz a obra é Ele.',
    keyPoints: [
      'Samaria era território evitado e o caminho não era o mais confortável',
      'Era propósito e encontro marcado, não coincidência',
      'Onde vemos barreira Deus vê campo missionário',
      'Exemplos atuais de Samaria, incluindo a própria casa',
      'Não se preocupar em como fazer, e sim em estar disponível',
    ],
  },
  {
    id: 'E-DIS-02',
    subject: 'evangelismo',
    type: 'discursiva',
    topic: 'A samaritana como evangelista',
    prompt:
      'Descreva como a mulher samaritana passa de rejeitada a evangelista e explique o que isso ensina sobre a mensagem que devemos levar.',
    hint: 'Repare no que ela fala à cidade quando volta, e no que ela não fala.',
    explanation:
      'Ela era desprezada pela cidade e ia ao poço ao meio-dia justamente para não encontrar ninguém. Jesus pede água a ela, quebrando a barreira entre judeus e samaritanos, e conduz a conversa da água do poço para a água viva. Ele toca na vida dela ao mencionar os cinco maridos, mas não faz do pecado o centro da conversa: Ele ganha o coração dela. Quando o coração é ganho, ela recebe a revelação de que Ele é o Messias, larga o cântaro e volta à cidade da qual se escondia. O ponto decisivo é que ela não fala de si mesma nem da própria experiência como mérito, ela fala daquele que a transformou e convida as pessoas a virem ver. Por isso a cidade toda sai atrás dEle. A lição é que o alvo não é vencer discussões nem apontar pecados, é transbordar o amor recebido, apontar para Cristo e deixar que o Espírito Santo faça a obra. Enquanto os doze traziam apenas alimento físico, ela trouxe uma multidão.',
    modelAnswer:
      'Ela era desprezada pela cidade e ia ao poço ao meio-dia justamente para não encontrar ninguém. Jesus pede água a ela, quebrando a barreira entre judeus e samaritanos, e conduz a conversa da água do poço para a água viva. Ele toca na vida dela ao mencionar os cinco maridos, mas não faz do pecado o centro da conversa: Ele ganha o coração dela. Quando o coração é ganho, ela recebe a revelação de que Ele é o Messias, larga o cântaro e volta à cidade da qual se escondia. O ponto decisivo é que ela não fala de si mesma nem da própria experiência como mérito, ela fala daquele que a transformou e convida as pessoas a virem ver. Por isso a cidade toda sai atrás dEle. A lição é que o alvo não é vencer discussões nem apontar pecados, é transbordar o amor recebido, apontar para Cristo e deixar que o Espírito Santo faça a obra. Enquanto os doze traziam apenas alimento físico, ela trouxe uma multidão.',
    keyPoints: [
      'Rejeitada, ia ao poço ao meio-dia para se esconder',
      'Jesus quebra a barreira e conduz da água do poço para a água viva',
      'Toca no pecado mas ganha primeiro o coração',
      'Ela volta e fala dEle, não de si mesma',
      'A cidade toda vai ao encontro de Jesus',
      'Contraste com os discípulos, que trouxeram só alimento físico',
    ],
  },
  {
    id: 'E-DIS-03',
    subject: 'evangelismo',
    type: 'discursiva',
    topic: 'Fogo, azeite e discipulado',
    prompt:
      'Explique a imagem do fogo, da brasa, do carvão e do azeite aplicada à vida do evangelista e ao discipulado.',
    hint: 'Pense no que acontece com a brasa que se afasta da fogueira, e no que sustenta a tocha longe da fonte.',
    explanation:
      'A madeira precisa ser colocada no fogo antes de virar brasa, e o fogo purifica e transforma, mas muitos não querem pagar esse preço. Quem está em brasa e encosta em outro incendeia esse outro, e o fogo se alastra. O risco é o afastamento: a brasa que se separa do grupo esfria e vira carvão, que praticamente não serve para nada. Ainda assim, o carvão não está perdido, porque basta alguém em chama encostar nele para que volte a arder. O azeite representa o que sustenta a chama longe da fonte: sem ele, a tocha vai apagando conforme a pessoa se distancia, e com ele é possível ir para qualquer lugar e ainda acender outras tochas. Daí a importância do discipulado, que é via dupla: quem sente a fé enfraquecendo busca alguém firme para caminhar junto, e quem está firme vai atrás de quem esfriou para trazer de volta, sem condenação, entendendo que aquele é um tempo de nuvem e não o fim. Ninguém é perfeito e todos precisam uns dos outros para se manter aceso.',
    modelAnswer:
      'A madeira precisa ser colocada no fogo antes de virar brasa, e o fogo purifica e transforma, mas muitos não querem pagar esse preço. Quem está em brasa e encosta em outro incendeia esse outro, e o fogo se alastra. O risco é o afastamento: a brasa que se separa do grupo esfria e vira carvão, que praticamente não serve para nada. Ainda assim, o carvão não está perdido, porque basta alguém em chama encostar nele para que volte a arder. O azeite representa o que sustenta a chama longe da fonte: sem ele, a tocha vai apagando conforme a pessoa se distancia, e com ele é possível ir para qualquer lugar e ainda acender outras tochas. Daí a importância do discipulado, que é via dupla: quem sente a fé enfraquecendo busca alguém firme para caminhar junto, e quem está firme vai atrás de quem esfriou para trazer de volta, sem condenação, entendendo que aquele é um tempo de nuvem e não o fim. Ninguém é perfeito e todos precisam uns dos outros para se manter aceso.',
    keyPoints: [
      'A madeira precisa passar pelo fogo, que purifica e transforma',
      'A brasa incendeia quem encosta nela',
      'Quem se afasta esfria e vira carvão',
      'O carvão volta a arder quando alguém em chama encosta nele',
      'O azeite sustenta a chama longe da fonte e permite acender outras tochas',
      'Discipulado como via dupla, sem condenação, buscando quem esfriou',
    ],
  },
];
