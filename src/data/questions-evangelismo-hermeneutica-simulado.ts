import type { Question } from '../types';

/*
 * Banco de questões da Prova Simulada do assunto "Evangelismo e Hermenêutica".
 * Cobre as quatro aulas do assunto (Evangelismo Aula 01 e Hermenêutica Aulas 02-4).
 * Todas as questões pertencem apenas ao conjunto "simulado" (sets: ['simulado']).
 * Não alterar, não remover e não inventar questões. Manter os ids como estão.
 */
export const evangelismoHermeneuticaSimulado: Question[] = [
  /* ==================== PROVA SIMULADA - MÚLTIPLA ESCOLHA ==================== */
  {
    id: 'EH-ME-01',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'O encontro em Samaria',
    prompt:
      'Em João 4, o texto afirma que "era necessário passar por Samaria". Segundo a aula, o que essa necessidade revela?',
    hint: 'A palavra "necessário" aponta para intenção, não para geografia.',
    explanation:
      'Havia rota alternativa e havia hostilidade entre judeus e samaritanos. Jesus não estava apenas passando: ele criou a estratégia, sabia que aquela mulher estaria ali no calor do meio-dia e conduziu os acontecimentos. A lição para o evangelista é que Deus envia a lugares e pessoas com propósito, inclusive aos lugares dos quais normalmente se desvia.',
    options: [
      { id: 'a', text: 'Que aquele era o único caminho existente entre a Judeia e a Galileia' },
      { id: 'b', text: 'Que Jesus já tinha um encontro marcado e um propósito naquele lugar' },
      { id: 'c', text: 'Que os discípulos insistiram para encurtar a viagem' },
      { id: 'd', text: 'Que Jesus queria evitar os fariseus que o vigiavam na Judeia' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-02',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'O encontro em Samaria',
    prompt:
      'Por que, segundo a exposição da aula, todos os doze discípulos foram enviados à cidade para comprar comida?',
    hint: 'Pela lógica humana, alguém teria ficado para proteger o mestre. Ninguém ficou.',
    explanation:
      'Deixar Jesus sozinho num lugar hostil contraria toda lógica de proteção. O cenário foi preparado: Jesus fica diante da mulher que precisava de alimento espiritual enquanto os discípulos buscavam alimento físico. Deus prepara encontros, e o evangelista precisa aprender a reconhecer quando um encontro foi marcado.',
    options: [
      { id: 'a', text: 'Porque a viagem tinha sido longa e todos estavam famintos' },
      { id: 'b', text: 'Porque Jesus queria que eles evangelizassem a cidade primeiro' },
      { id: 'c', text: 'Porque o encontro com a samaritana seria exclusivo e pessoal' },
      { id: 'd', text: 'Porque em Samaria era proibido a um grupo de judeus permanecer reunido' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-03',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Abordagem do evangelista',
    prompt:
      'Jesus menciona os cinco maridos da samaritana. Qual é a leitura que a aula faz dessa abordagem?',
    hint: 'Ele cita o fato, mas não constrói o diálogo em cima dele.',
    explanation:
      'Jesus toca no ponto, mas não prega sobre o pecado dela. O alvo é o coração. As pessoas que erram já sabem que erram e em geral já são apontadas por todos. O que falta é amor. Ganho o coração, o Espírito Santo faz a obra.',
    options: [
      { id: 'a', text: 'Ele expôs o pecado dela publicamente para produzir vergonha e arrependimento' },
      {
        id: 'b',
        text: 'Ele tocou a realidade dela sem transformar o pecado em tema, porque o alvo era ganhar o coração',
      },
      { id: 'c', text: 'Ele aplicou a lei de Moisés antes de oferecer a água viva' },
      { id: 'd', text: 'Ele quis provar aos discípulos que conhecia os pecados ocultos das pessoas' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-04',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Presença e Trindade',
    prompt: 'Na ilustração usada na aula, como se relacionam sol, luz e calor?',
    hint: 'A luz é o que sai do sol e o calor é o que se sente.',
    explanation:
      'Deus é o sol, Jesus é a luz que sai do sol, o Espírito Santo é o calor que se recebe do sol, e os três são um só sol. A aplicação prática: quem caminha com Deus leva junto luz e calor, e as pessoas primeiro enxergam a transformação de longe e depois sentem a presença.',
    options: [
      { id: 'a', text: 'O sol é o Filho, a luz é o Pai e o calor é o Espírito Santo' },
      { id: 'b', text: 'O sol é o Espírito Santo, a luz é o Pai e o calor é o Filho' },
      { id: 'c', text: 'O sol é o Pai, a luz é o Filho e o calor é o Espírito Santo' },
      { id: 'd', text: 'Os três representam apenas fases da atuação do Espírito Santo' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-05',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Multiplicação e discipulado',
    prompt:
      'No exercício em que cada aluno escolheu três pessoas, o que caracterizou a escolha chamada de "setorizada"?',
    hint: 'Todos pegaram quem estava do lado. Ninguém atravessou a sala.',
    explanation:
      'Pegar os mais próximos é o caminho fácil e limita o crescimento ao próprio bairro, à própria igreja, ao próprio círculo. O modelo exponencial escolhe de lugares diferentes, inclusive onde ninguém entra, deixando semente em regiões distintas. Foi assim que Jesus, caminhando com doze e mais de perto com três, alcançou as nações.',
    options: [
      { id: 'a', text: 'Escolher pessoas de regiões diferentes da sala, alcançando lugares distantes' },
      {
        id: 'b',
        text: 'Escolher sempre os mais próximos, o que mantém o alcance dentro de um mesmo raio',
      },
      { id: 'c', text: 'Escolher pessoas com o mesmo perfil ministerial' },
      { id: 'd', text: 'Escolher apenas pessoas já convertidas' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-06',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Capacitação e disponibilidade',
    prompt:
      'Ao ser perguntado "quando vou saber que estou pronto e capacitado para evangelizar?", qual é a resposta dada na aula?',
    hint: 'A preocupação não é com a capacidade de fazer, e sim com quem faz a obra.',
    explanation:
      'A aula insiste que a obra é de Deus e que o evangelista é veículo. Não se trata de preparo suficiente, mas de disponibilidade e de ser habitação do Espírito Santo. A capacitação é contínua, porque é Deus quem enche, e quem transborda precisa voltar à fonte.',
    options: [
      { id: 'a', text: 'Ao concluir o período de formação e receber o envio da liderança' },
      { id: 'b', text: 'Quando houver domínio da doutrina e dos textos bíblicos principais' },
      {
        id: 'c',
        text: 'Nunca se estará pronto nem plenamente capacitado; o que se exige é estar disponível',
      },
      { id: 'd', text: 'Quando se sentir paz no coração a respeito do chamado' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-07',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Definições',
    prompt: 'Como a aula define hermenêutica?',
    hint: 'A definição tem duas metades, e uma delas exige método e princípios.',
    explanation:
      'Hermenêutica vem do grego e significa interpretar. É ciência porque exige estudo, pesquisa e princípios seguros e imutáveis, e é arte porque estabelece regras práticas para o seu uso. Método de estudo bíblico é uma parte da hermenêutica.',
    options: [
      { id: 'a', text: 'A arte e a ciência de interpretar' },
      { id: 'b', text: 'O estudo das línguas originais da Bíblia' },
      { id: 'c', text: 'A técnica de memorizar e citar textos bíblicos' },
      { id: 'd', text: 'A aplicação devocional do texto à vida pessoal' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'EH-ME-08',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Definições',
    prompt: 'Qual a distinção feita na aula entre hermenêutica e exegese?',
    hint: 'Uma delas desce ao nível da palavra.',
    explanation:
      'A exegese examina cada palavra do texto no original, porque o autor tinha intenção em cada palavra que colocou ali. A hermenêutica trabalha o sentido da frase, o que o autor queria dizer. Foi essa diferença que a aula usou para tratar de Filipenses 4:13.',
    options: [
      { id: 'a', text: 'A hermenêutica é para pregadores e a exegese é para teólogos acadêmicos' },
      { id: 'b', text: 'A exegese trabalha o sentido da frase e a hermenêutica trabalha a aplicação' },
      {
        id: 'c',
        text: 'A exegese aprofunda cada palavra do texto na língua original e a hermenêutica trabalha o sentido do que foi dito',
      },
      { id: 'd', text: 'São sinônimos, usados em contextos diferentes' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-09',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'Em Mateus 6:33, a que se referem "todas estas coisas" que serão acrescentadas?',
    hint: 'Olhe os versículos anteriores: aves, lírios e a preocupação dos ímpios.',
    explanation:
      'O contexto trata de discípulos com medo de passar fome e frio ao serem enviados. Jesus aponta as aves e os lírios e diz que quem se preocupa com comer, beber e vestir são os ímpios. "Estas coisas" são exatamente essas três. A versão popular troca "estas" por "as demais" e ainda omite "e a sua justiça", o que já é um erro de observação.',
    options: [
      { id: 'a', text: 'Casa, carro, prosperidade financeira e bens em geral' },
      { id: 'b', text: 'Comer, beber e vestir' },
      { id: 'c', text: 'Os dons espirituais e o galardão futuro' },
      { id: 'd', text: 'As bênçãos prometidas a Abraão' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-10',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt: 'Lido à luz de Filipenses 4:12, o que "tudo posso naquele que me fortalece" significa?',
    hint: 'O versículo anterior fala de saber ter fartura e saber passar fome.',
    explanation:
      'No verso 12 Paulo diz que sabe estar humilhado e honrado, ter fartura e passar fome. O "tudo" do verso 13 recolhe esse conjunto. Logo, posso passar fome naquele que me fortalece, posso ser humilhado naquele que me fortalece. A leitura triunfalista inverte o sentido e produz crentes frustrados, além de ecoar a primeira doutrina de Satanás no Novo Testamento: se és filho de Deus, não podes ter problema.',
    options: [
      { id: 'a', text: 'Que o crente tem autoridade para determinar qualquer coisa em nome de Cristo' },
      { id: 'b', text: 'Que não haverá barreira nem derrota para quem tem fé suficiente' },
      {
        id: 'c',
        text: 'Que o "tudo" inclui passar fome, ser humilhado e ter necessidade, sem perder a fé',
      },
      { id: 'd', text: 'Que Paulo falava apenas do seu ministério apostólico, não do crente comum' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-11',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Contexto',
    prompt:
      'Segundo o contexto de Colossenses 3:11-15, o que significa "seja a paz de Cristo o árbitro em vossos corações"?',
    hint: 'Procure no texto a palavra "sentir". Ela não está lá.',
    explanation:
      'Os versículos anteriores tratam de relacionamento: misericórdia, bondade, humildade, mansidão, suportar e perdoar uns aos outros. Outra tradução diz "domine em vossos corações". O texto chama à unidade, porque fomos chamados em um só corpo. Usar esse versículo para justificar decisões pelo sentimento é o oposto do que ele diz.',
    options: [
      { id: 'a', text: 'Que o sentimento de paz é o critério para decidir entre uma opção e outra' },
      { id: 'b', text: 'Que não se deve fazer nada que quebre a paz entre os irmãos' },
      { id: 'c', text: 'Que o crente em paz está livre de tentação' },
      { id: 'd', text: 'Que a paz confirma que a decisão tomada era a vontade de Deus' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-12',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Observação',
    prompt: 'Quais são as três coisas necessárias para a observação de um texto bíblico?',
    hint: 'A terceira delas não depende de você.',
    explanation:
      'Disciplina é fazer o que você não quer para alcançar o que você quer, e envolve separar um tempo específico para estudar, não apenas ler devocionalmente. Perseverança é continuar quando a vontade termina. Dependência é do Espírito Santo, que é o intérprete e quem guia em toda a verdade. As alternativas b e c são, respectivamente, a exigência da observação e as três grandes partes do estudo.',
    options: [
      { id: 'a', text: 'Oração, jejum e leitura devocional' },
      { id: 'b', text: 'Vontade, precisão e persistência' },
      { id: 'c', text: 'Observação, interpretação e aplicação' },
      { id: 'd', text: 'Disciplina, perseverança e dependência do Espírito Santo' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'EH-ME-13',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Precisão',
    prompt: 'A sigla VPP, apresentada como a exigência da observação, corresponde a:',
    hint: 'Uma delas foi ilustrada com a vírgula de Lucas 23:43.',
    explanation:
      'Vontade é querer de fato saber o que o texto diz. Precisão é a atenção a vírgulas, pontos e limites da frase, como no caso de Lucas 23:43 e de Efésios 5:18. Persistência é continuar observando o texto mesmo quando aparece a pedra no meio do caminho.',
    options: [
      { id: 'a', text: 'Vontade, precisão e persistência' },
      { id: 'b', text: 'Verdade, propósito e prática' },
      { id: 'c', text: 'Vontade, perseverança e paciência' },
      { id: 'd', text: 'Versículo, parágrafo e passagem' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'EH-ME-14',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Processo de observação',
    prompt:
      'No passo "bombardeie o texto com perguntas", quais são as perguntas e quem deve respondê-las?',
    hint: 'São sete perguntas, e nenhuma palavra pode ser acrescentada a elas.',
    explanation:
      'As sete perguntas são o quê, onde, como, quem, por quê, quando e para quem, sem acrescentar nada. Quem é bombardeado é o texto, portanto quem responde é o texto. Inventar a resposta é perguntar a si mesmo, e assim nunca se chega a uma interpretação correta. Cada observação deve ser numerada e acompanhada do versículo onde se encontra.',
    options: [
      { id: 'a', text: 'O quê, onde, como, quem, por quê, quando e para quem; quem responde é o texto' },
      {
        id: 'b',
        text: 'O quê, quando e por quê; quem responde é o estudante, a partir do que já aprendeu',
      },
      { id: 'c', text: 'Quem, o quê e para quê; quem responde é o comentário bíblico consultado' },
      { id: 'd', text: 'O quê, onde e como; quem responde é o pregador ou professor' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'EH-ME-15',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Termos-chave',
    prompt: 'Em Efésios 1:7 aparece a palavra "redenção". Qual o significado apresentado na aula?',
    hint: 'Existe no Ceará uma cidade com esse nome, e o motivo é histórico.',
    explanation:
      'Redenção é comprar um escravo para libertá-lo. Daí o nome da primeira cidade do Brasil a aderir à abolição. Aplicado ao texto: fomos libertos da escravidão do pecado e do império das trevas. Efésios 1:7 traz três termos especiais que sozinhos rendem meses de estudo: redenção, remissão e graça.',
    options: [
      { id: 'a', text: 'O perdão concedido a quem confessa o pecado' },
      { id: 'b', text: 'O ato de comprar um escravo para lhe dar liberdade' },
      { id: 'c', text: 'A restituição em dobro daquilo que foi perdido' },
      { id: 'd', text: 'A entrega voluntária de si mesmo em sacrifício' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-16',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Termos-chave',
    prompt: 'Qual a definição de graça apresentada na aula?',
    hint: 'A definição mais conhecida foi considerada curta demais na aula.',
    explanation:
      'A aula reconhece "favor imerecido" como definição válida, mas seca. A definição preferida é: graça é a escolha de Deus de nos dar tudo, força, unção, alegria, discernimento e dons, por causa de quem Ele é e não por causa de quem nós somos. Isso liga diretamente à conclusão de que a Bíblia não é o livro dos grandes homens de Deus, e sim do grande Deus dos homens.',
    options: [
      { id: 'a', text: 'Favor imerecido concedido ao pecador arrependido' },
      { id: 'b', text: 'A capacidade sobrenatural de cumprir a lei de Deus' },
      {
        id: 'c',
        text: 'A escolha de Deus de nos dar tudo por causa de quem Ele é, e não por causa de quem nós somos',
      },
      { id: 'd', text: 'O conjunto de dons distribuídos pelo Espírito Santo à igreja' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-17',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Comparações',
    prompt: 'Em Hebreus 5:4-5, a expressão "assim também", ligando Arão e Cristo, é um caso de:',
    hint: 'O autor associa coisas parecidas para ilustrar o que ensina.',
    explanation:
      'Comparação é quando o autor associa coisas parecidas para ilustrar o ensino. Arão não tomou para si a honra de sumo sacerdote, foi escolhido por Deus, e assim também Cristo não se glorificou a si mesmo, mas foi estabelecido por Deus. Na descoberta da estrutura do texto observam-se comparações, contrastes, repetições e os tempos dos verbos.',
    options: [
      { id: 'a', text: 'Contraste' },
      { id: 'b', text: 'Repetição' },
      { id: 'c', text: 'Comparação' },
      { id: 'd', text: 'Alegoria' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'EH-ME-18',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Contrastes',
    prompt: 'Em Romanos 5:12-21 há comparação e contraste. Qual é o contraste que o texto quer mostrar?',
    hint: 'Repare onde aparece a palavra "muitos", antes e depois do "assim também".',
    explanation:
      'O "muitos" aparece dos dois lados: pela desobediência de um só, muitos se tornaram pecadores; pela obediência de um só, muitos se tornarão justos. Existem outros contrastes no texto, inclusive entre as condutas, mas a intenção do autor é o contraste entre os descendentes. A comparação, por sua vez, está nas consequências dos dois atos.',
    options: [
      { id: 'a', text: 'Entre Jesus ser mais justo do que Adão' },
      { id: 'b', text: 'Entre a conduta pessoal de Adão e a conduta pessoal de Jesus' },
      { id: 'c', text: 'Entre a lei de Moisés e a graça do evangelho' },
      { id: 'd', text: 'Entre os descendentes do primeiro Adão e os descendentes de Cristo' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'EH-ME-19',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Tempos verbais e contexto',
    prompt: 'A frase "vá, suba naquele cavalo e cavalgue" foi usada na aula para ensinar que:',
    hint: 'O professor disse que a frase se cumpriu quando ele tinha doze anos.',
    explanation:
      'A frase está no imperativo, mas descreve algo que aconteceu há mais de trinta anos. Ler apenas o verbo, sem perguntar quando e onde foi escrito e quem falava, produz tragédia interpretativa, sobretudo em profecia. Jesus falando por volta do ano 30 usa o futuro, mas o futuro dele pode ser passado para nós.',
    options: [
      { id: 'a', text: 'O imperativo indica sempre uma ordem ainda não cumprida' },
      { id: 'b', text: 'O tempo verbal precisa ser lido a partir de quando e para quem o texto foi dito' },
      { id: 'c', text: 'Textos proféticos devem ser lidos sempre no futuro' },
      { id: 'd', text: 'Traduções modernas corrigem os tempos verbais do original' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'EH-ME-20',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'multipla',
    topic: 'Princípios de interpretação',
    prompt:
      'Entre os lembretes gerais de interpretação apresentados, está correto afirmar que:',
    hint: 'Todas as alternativas erradas são inversões da regra.',
    explanation:
      'A lista apresentada é: o Novo Testamento interpreta o Antigo; as epístolas interpretam os evangelhos; as passagens sistemáticas interpretam as incidentais ou casuais; as universais interpretam as locais; as didáticas interpretam as simbólicas. Exemplo dado: sem o Novo Testamento não se interpreta o Salmo 110, "disse o Senhor ao meu Senhor".',
    options: [
      { id: 'a', text: 'O Antigo Testamento interpreta o Novo, porque é a base histórica' },
      { id: 'b', text: 'As passagens simbólicas interpretam as didáticas' },
      { id: 'c', text: 'O Novo Testamento interpreta o Antigo, e as passagens universais interpretam as locais' },
      { id: 'd', text: 'As passagens incidentais interpretam as sistemáticas' },
    ],
    correctOptionId: 'c',
  },

  /* ==================== PROVA SIMULADA - VERDADEIRO OU FALSO ==================== */
  {
    id: 'EH-VF-01',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'vf',
    topic: 'O encontro em Samaria',
    prompt:
      'A expressão "era necessário passar por Samaria", em João 4, indica apenas que aquele era o trajeto geograficamente mais curto entre a Judeia e a Galileia.',
    hint: 'Judeus e samaritanos não se davam bem, e havia rota alternativa.',
    explanation:
      'A necessidade era de propósito, não de geografia. Jesus escolheu o caminho onde havia uma vida a ser alcançada, e não o mais confortável. A aplicação levantada na aula é a pergunta: qual é a sua Samaria, o lugar em que você acha que não pode entrar e para onde Deus está te enviando?',
    correctAnswer: false,
  },
  {
    id: 'EH-VF-02',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Enchimento do Espírito Santo',
    prompt:
      'Segundo a aula, não há no Novo Testamento nenhum registro de alguém sendo cheio do Espírito Santo sozinho.',
    hint: 'Veja Atos 2, 4, 8, 10 e 19 e repare no número de pessoas em cada cena.',
    explanation:
      'Em todos os casos citados o derramamento acontece em grupo. Efésios 5:18 também não termina em "enchei-vos do Espírito": o texto continua falando entre vós, cantando, dando graças e sujeitando-vos uns aos outros. A promessa de Lucas 24 é dada a "vós", segunda pessoa do plural. Isso não anula o quarto fechado de Mateus 6, que trata de oração, mas trata de outro assunto.',
    correctAnswer: true,
  },
  {
    id: 'EH-VF-03',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Processo de observação',
    prompt:
      'No passo da observação, as perguntas devem ser respondidas pelo próprio estudante, com base no conhecimento que ele já possui do assunto.',
    hint: 'Quem está sendo bombardeado com as perguntas?',
    explanation:
      'Quem responde é o texto. Se o estudante responde, ele está perguntando a si mesmo e nunca chegará a uma interpretação correta. O exercício feito em sala com Romanos 12:1 mostra isso: "o quê" leva a "rogo", depois "pois", depois "irmãos", palavra por palavra, deixando o texto responder.',
    correctAnswer: false,
  },
  {
    id: 'EH-VF-04',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Inspiração',
    prompt:
      'A Bíblia registra falas que não procedem de Deus, como as palavras de Satanás na tentação de Jesus.',
    hint: '"Se és Filho de Deus, manda que estas pedras se transformem em pães."',
    explanation:
      'Tudo que está escrito é palavra de Deus no sentido de ser texto inspirado e registrado por propósito, mas nem tudo que está registrado procede de Deus. Satanás cita o Salmo 91 na tentação, e em Jó alguém afirma que "fogo de Deus caiu do céu" quando o fogo não era de Deus. O contexto é que ensina como lidar com aquilo que o inimigo traz, muitas vezes travestido de desafio de fé.',
    correctAnswer: true,
  },
  {
    id: 'EH-VF-05',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Doutrina e erro',
    prompt:
      'Uma doutrina pode ser legitimamente estabelecida com base em um único versículo, desde que o versículo seja claro.',
    hint: 'Uma casa é feita de tijolos, mas um monte de tijolos não é uma casa.',
    explanation:
      'Nenhuma doutrina se fundamenta em um só versículo, e as doutrinas se firmam melhor quando registradas em várias passagens. Doutrinas que não têm referência específica podem ser determinadas pelo conteúdo geral das Escrituras, como a Trindade, cujo nome não aparece na Bíblia mas cuja realidade percorre todo o texto, de Elohim em Gênesis 1:1 à fórmula batismal de Mateus 28.',
    correctAnswer: false,
  },
  {
    id: 'EH-VF-06',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Parábolas',
    prompt: 'Os detalhes e adornos de uma parábola servem de base legítima para construir doutrina.',
    hint: 'Em Lucas 11:5-8, quem seria Deus: o que bate na porta ou o que está deitado?',
    explanation:
      'Parábolas e demais figuras de linguagem servem para ilustrar e esclarecer ensinamentos, não para fundamentar doutrina. Prender-se aos adornos de Lucas 11:5-8 produz absurdos, como um Deus que dorme ou que não tem pão. As regras são: descobrir o objetivo da parábola, observar seu início e seu fim, e ficar com o ensinamento principal.',
    correctAnswer: false,
  },
  {
    id: 'EH-VF-07',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Profecia e cumprimento',
    prompt:
      'Em Atos 2, Pedro afirma que o que estava acontecendo naquele momento era o cumprimento da profecia de Joel.',
    hint: 'Repare no tempo verbal da frase de Pedro, e não apenas na citação que vem depois.',
    explanation:
      'Pedro diz que aqueles homens não estão embriagados, mas que "o que ocorre" é o que foi dito pelo profeta Joel, e então cita a profecia inteira, não apenas a parte do derramamento do Espírito. Na leitura apresentada, o prodígio celestial e terreno é um sacrifício, o sol convertido em trevas é Cristo morrendo, a lua em sangue é a igreja, e a consequência é que todo o que invocar o nome do Senhor será salvo, como aconteceu com os três mil naquele dia.',
    correctAnswer: true,
  },
  {
    id: 'EH-VF-08',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Parábolas',
    prompt: 'Em Mateus 7:24-27, a diferença entre as duas casas está no material com que foram construídas.',
    hint: 'Leia o que Jesus diz sobre cada um dos dois homens antes de falar da casa.',
    explanation:
      'O assunto não é casa, é quem ouve a palavra. Um ouve e pratica, o outro ouve e não pratica. A tempestade vem sobre os dois. Praticar é o que mantém de pé. É a mesma ênfase de Tiago 1:22, tornai-vos praticantes da palavra e não somente ouvintes, enganando-vos a vós mesmos.',
    correctAnswer: false,
  },
  {
    id: 'EH-VF-09',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Abordagem do evangelista',
    prompt:
      'Segundo o conselho dado sobre evangelismo, o alvo não é fazer a pessoa largar o pecado, mas levá-la a receber Cristo.',
    hint: 'A ilustração envolve uma criança, um pirulito sujo e um saco de pirulitos.',
    explanation:
      'Tomar o pirulito da criança gera resistência e choro; mostrar algo maior faz com que ela solte sozinha. Da mesma forma, não se ganha alguém apontando pecado, e sim revelando Cristo. Na história do condenado e do rei disfarçado, a frase final resume a ideia: ele morre não pelos pecados que cometeu, mas pelo perdão que não recebeu.',
    correctAnswer: true,
  },
  {
    id: 'EH-VF-10',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'vf',
    topic: 'Passagens paralelas',
    prompt:
      'Ao buscar passagens paralelas, a ordem de preferência é começar pelo mesmo livro, depois pelo mesmo autor, depois por autores contemporâneos e por fim pelos demais livros da Bíblia.',
    hint: 'Comece pelo círculo mais próximo do texto e vá abrindo.',
    explanation:
      'Passagens paralelas são as que se referem umas às outras ou tratam do mesmo assunto, e servem para esclarecer palavras e conceitos obscuros. Exemplos usados: Atos 9:4, 22:7 e 26:14, que juntos informam que a voz falou em hebraico e que Saulo caiu por terra; e Isaías 61 lido com Lucas 4:18.',
    correctAnswer: true,
  },

  /* ==================== PROVA SIMULADA - DISCURSIVAS ==================== */
  {
    id: 'EH-DIS-01',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'A presença de Deus',
    prompt:
      'Explique o que a expressão "era necessário passar por Samaria" ensina sobre encontros preparados por Deus, e relacione com o pedido de Moisés em Êxodo 33.',
    hint: 'Pense na diferença entre um propósito bom e um propósito acompanhado da presença de Deus.',
    explanation:
      'A necessidade não é geográfica, é de propósito. Jesus escolheu o caminho onde havia uma vida a alcançar, e não o mais confortável, e o encontro já estava marcado, inclusive no horário em que a mulher se escondia. Isso ensina que Deus prepara encontros antes que o evangelista saiba, e que barreiras aos olhos humanos podem ser campo missionário aos olhos de Deus. O paralelo com Moisés é que o propósito bom não basta: Deus se dispôs a enviar um anjo para conduzir o povo à terra prometida, mas Moisés disse que não sairia dali sem a presença. Da mesma forma, não adianta ir evangelizar confiando na própria capacidade; sem a presença, o propósito perde o sentido.',
    modelAnswer:
      'A necessidade não é geográfica, é de propósito. Jesus escolheu o caminho onde havia uma vida a alcançar, e não o mais confortável, e o encontro já estava marcado, inclusive no horário em que a mulher se escondia. Isso ensina que Deus prepara encontros antes que o evangelista saiba, e que barreiras aos olhos humanos podem ser campo missionário aos olhos de Deus. O paralelo com Moisés é que o propósito bom não basta: Deus se dispôs a enviar um anjo para conduzir o povo à terra prometida, mas Moisés disse que não sairia dali sem a presença. Da mesma forma, não adianta ir evangelizar confiando na própria capacidade; sem a presença, o propósito perde o sentido.',
    keyPoints: [
      'Propósito e não geografia',
      'Encontro previamente marcado',
      'Barreira humana como campo missionário',
      'Êxodo 33 e a recusa de ir sem a presença',
      'Presença acima de capacidade',
    ],
  },
  {
    id: 'EH-DIS-02',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Encher e transbordar',
    prompt:
      'Explique a diferença entre encher-se e transbordar e o que as imagens de fogo, brasa, carvão e azeite ensinam sobre a vida do evangelista.',
    hint: 'Pense no que acontece com a brasa que se afasta da fogueira, e no que sustenta a tocha longe da fonte.',
    explanation:
      'Encher-se é receber da fonte; transbordar é derramar na vida de outros. Estar cheio sem transbordar é ser mar morto: cheio de água e sem fruto. A madeira precisa ser colocada no fogo antes de virar brasa, e a brasa que se aproxima de outra acende outra, de modo que o fogo se alastra. Quem se afasta do grupo esfria e vira carvão, mas basta alguém em chama encostar para que volte a arder, porque ninguém permanece carvão para sempre. O azeite é o que sustenta a tocha acesa longe da fogueira: quem sai com azeite pode ir a qualquer lugar e continuar acendendo outras tochas. Na prática, isso significa voltar sempre à fonte quando se percebe vazio, e buscar quem está forte na fé quando se percebe esfriando.',
    modelAnswer:
      'Encher-se é receber da fonte; transbordar é derramar na vida de outros. Estar cheio sem transbordar é ser mar morto: cheio de água e sem fruto. A madeira precisa ser colocada no fogo antes de virar brasa, e a brasa que se aproxima de outra acende outra, de modo que o fogo se alastra. Quem se afasta do grupo esfria e vira carvão, mas basta alguém em chama encostar para que volte a arder, porque ninguém permanece carvão para sempre. O azeite é o que sustenta a tocha acesa longe da fogueira: quem sai com azeite pode ir a qualquer lugar e continuar acendendo outras tochas. Na prática, isso significa voltar sempre à fonte quando se percebe vazio, e buscar quem está forte na fé quando se percebe esfriando.',
    keyPoints: [
      'Encher vem da fonte, transbordar vai para o outro',
      'Cheio sem transbordar é estéril',
      'Contágio da brasa',
      'Afastamento leva ao esfriamento',
      'Azeite sustenta longe da fogueira',
      'Necessidade do discipulado e da comunhão',
    ],
  },
  {
    id: 'EH-DIS-03',
    subject: 'evangelismo',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Abordagem do evangelista',
    prompt:
      'Por que, segundo a aula, ganhar o coração precede apontar o pecado? Use o encontro com a samaritana e explique o risco da abordagem contrária.',
    hint: 'Pense no que a mulher já sabia sobre si mesma antes de Jesus falar com ela.',
    explanation:
      'Jesus cita os cinco maridos, mas não constrói o diálogo sobre o pecado dela; ele oferece água viva e ganha o coração. Quem vive no erro em geral já sabe que erra e já é apontado por todos, de modo que repetir a condenação apenas fecha a porta. A pergunta que importa é por que aquela pessoa busca o que busca, porque existe um vazio que só Cristo preenche. O risco da abordagem contrária é criar uma barreira que faz a pessoa recuar e nunca mais querer ouvir. A alternativa proposta é chegar amando, oferecer oração, criar vínculo, e deixar que o Espírito Santo faça a obra. O resultado, no texto, é que a mulher rejeitada pela cidade sai falando não de si mesma, mas daquele que a transformou, e traz a cidade inteira.',
    modelAnswer:
      'Jesus cita os cinco maridos, mas não constrói o diálogo sobre o pecado dela; ele oferece água viva e ganha o coração. Quem vive no erro em geral já sabe que erra e já é apontado por todos, de modo que repetir a condenação apenas fecha a porta. A pergunta que importa é por que aquela pessoa busca o que busca, porque existe um vazio que só Cristo preenche. O risco da abordagem contrária é criar uma barreira que faz a pessoa recuar e nunca mais querer ouvir. A alternativa proposta é chegar amando, oferecer oração, criar vínculo, e deixar que o Espírito Santo faça a obra. O resultado, no texto, é que a mulher rejeitada pela cidade sai falando não de si mesma, mas daquele que a transformou, e traz a cidade inteira.',
    keyPoints: [
      'O pecado é tocado mas não é o tema',
      'A pessoa já sabe que erra',
      'Vazio que só Cristo preenche',
      'Risco de recuo definitivo',
      'Amar, orar, vincular',
      'A samaritana como evangelista que fala do outro e não de si',
    ],
  },
  {
    id: 'EH-DIS-04',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Etapas do estudo bíblico',
    prompt:
      'Explique as três grandes partes do estudo bíblico e por que a ordem entre elas não pode ser invertida.',
    hint: 'Pense no que acontece quando alguém tira uma conclusão sem antes ter observado o texto com cuidado.',
    explanation:
      'A primeira é a observação, cuja preocupação é o que o autor diz, deixando a mente envolvida e ensopada com o texto. A segunda é a interpretação, que sai da superfície para descobrir o que significa aquilo que o autor disse. A terceira é a aplicação, que associa o que a Bíblia diz e o que significa com a nossa vida, produzindo uma reação: gratidão, confissão, correção, mudança. A ordem é irreversível porque cada etapa depende da anterior. Observação errada gera interpretação errada, e interpretação errada gera aplicação errada. É isso que acontece quando alguém marca data para o fim do mundo porque a lua ficou avermelhada, ou quando lê "todas as demais coisas" em Mateus 6:33 sem ter observado que o texto diz "estas coisas".',
    modelAnswer:
      'A primeira é a observação, cuja preocupação é o que o autor diz, deixando a mente envolvida e ensopada com o texto. A segunda é a interpretação, que sai da superfície para descobrir o que significa aquilo que o autor disse. A terceira é a aplicação, que associa o que a Bíblia diz e o que significa com a nossa vida, produzindo uma reação: gratidão, confissão, correção, mudança. A ordem é irreversível porque cada etapa depende da anterior. Observação errada gera interpretação errada, e interpretação errada gera aplicação errada. É isso que acontece quando alguém marca data para o fim do mundo porque a lua ficou avermelhada, ou quando lê "todas as demais coisas" em Mateus 6:33 sem ter observado que o texto diz "estas coisas".',
    keyPoints: [
      'Observação, interpretação, aplicação',
      'O que diz, o que significa, o que muda',
      'Dependência encadeada',
      'Exemplos de erro em cadeia',
    ],
  },
  {
    id: 'EH-DIS-05',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Processo de observação',
    prompt:
      'Explique o que é "bombardear o texto com perguntas". Liste as sete perguntas, diga quem deve respondê-las e cite a regra sobre a formulação delas.',
    hint: 'Lembre-se de quantas vezes o texto precisa ser lido antes desse passo, e de quem, de fato, deve responder.',
    explanation:
      'É o segundo passo do processo de observação, feito depois de ler o texto várias vezes, no mínimo três. Consiste em lançar sobre o texto muitas perguntas, palavra por palavra, até destrinchá-lo. As sete perguntas são: o quê, onde, como, quem, por quê, quando e para quem. A regra é não acrescentar nenhuma palavra à pergunta: "o quê" é apenas "o quê". Quem é bombardeado é o texto, portanto quem responde é o texto, e não o estudante. Responder por conta própria é perguntar a si mesmo e garantir uma interpretação incorreta. Cada observação deve ser numerada e trazer ao final o versículo em que se encontra, e as perguntas e respostas devem ser organizadas na folha de forma visualmente clara. Em Romanos 12:1, por exemplo, "o quê" leva a rogo, pois, irmãos, pelas misericórdias, de Deus, que apresenteis, o corpo, por sacrifício, vivo, santo, agradável, culto, racional.',
    modelAnswer:
      'É o segundo passo do processo de observação, feito depois de ler o texto várias vezes, no mínimo três. Consiste em lançar sobre o texto muitas perguntas, palavra por palavra, até destrinchá-lo. As sete perguntas são: o quê, onde, como, quem, por quê, quando e para quem. A regra é não acrescentar nenhuma palavra à pergunta: "o quê" é apenas "o quê". Quem é bombardeado é o texto, portanto quem responde é o texto, e não o estudante. Responder por conta própria é perguntar a si mesmo e garantir uma interpretação incorreta. Cada observação deve ser numerada e trazer ao final o versículo em que se encontra, e as perguntas e respostas devem ser organizadas na folha de forma visualmente clara. Em Romanos 12:1, por exemplo, "o quê" leva a rogo, pois, irmãos, pelas misericórdias, de Deus, que apresenteis, o corpo, por sacrifício, vivo, santo, agradável, culto, racional.',
    keyPoints: [
      'Vem depois de ler no mínimo três vezes',
      'As sete perguntas exatas',
      'Não acrescentar palavras',
      'Quem responde é o texto',
      'Numerar observações com o versículo',
      'Exemplo de Romanos 12:1',
    ],
  },
  {
    id: 'EH-DIS-06',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Fé e cultura',
    prompt:
      'Explique a diferença entre teologia bíblica e teologia cultural e apresente dois exemplos citados nas aulas.',
    hint: 'Pense em qual das duas nasce do texto e qual nasce do ambiente em que se vive.',
    explanation:
      'Teologia bíblica é a que nasce do texto; teologia cultural é a que nasce do ambiente em que se vive e depois procura texto que a sustente. A aula afirma que boa parte do cristianismo atual é cultural, porque entendemos a Deus e a Bíblia com os olhos da nossa cultura. O exemplo histórico é o pré-tribulacionismo, que não existiu durante cerca de mil e novecentos anos porque a igreja sempre viveu perseguida, e que surge em contexto de paz e prosperidade, quando se torna concebível crer que a igreja não passará por tribulação. Outros exemplos: Mateus 6:33 lido como promessa de bens materiais, quando "estas coisas" são comer, beber e vestir; Filipenses 4:13 lido como triunfalismo, quando o "tudo" inclui passar fome; e Colossenses 3:15 usado para decidir pelo sentimento de paz, quando o texto trata de não quebrar a paz entre os irmãos. A correção proposta não é desprezar a cultura, e sim colocar a verdade bíblica acima dela.',
    modelAnswer:
      'Teologia bíblica é a que nasce do texto; teologia cultural é a que nasce do ambiente em que se vive e depois procura texto que a sustente. A aula afirma que boa parte do cristianismo atual é cultural, porque entendemos a Deus e a Bíblia com os olhos da nossa cultura. O exemplo histórico é o pré-tribulacionismo, que não existiu durante cerca de mil e novecentos anos porque a igreja sempre viveu perseguida, e que surge em contexto de paz e prosperidade, quando se torna concebível crer que a igreja não passará por tribulação. Outros exemplos: Mateus 6:33 lido como promessa de bens materiais, quando "estas coisas" são comer, beber e vestir; Filipenses 4:13 lido como triunfalismo, quando o "tudo" inclui passar fome; e Colossenses 3:15 usado para decidir pelo sentimento de paz, quando o texto trata de não quebrar a paz entre os irmãos. A correção proposta não é desprezar a cultura, e sim colocar a verdade bíblica acima dela.',
    keyPoints: [
      'Origem no texto versus origem no ambiente',
      'Caso do pré-tribulacionismo',
      'Mateus 6:33',
      'Filipenses 4:13',
      'Colossenses 3:15',
      'Verdade bíblica acima da cultural',
    ],
  },
  {
    id: 'EH-DIS-07',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Regra fundamental da hermenêutica',
    prompt:
      'Enuncie a regra fundamental da hermenêutica e explique, com a ilustração dos tijolos, por que ela desmonta doutrinas construídas com versículos costurados.',
    hint: 'Pense no que separa uma casa de um simples monte de material de construção.',
    explanation:
      'A regra fundamental é que a Bíblia interpreta a própria Bíblia. Um texto não pode ser interpretado isoladamente do todo, e o que ele significa no seu lugar não pode entrar em conflito com nenhuma outra parte da Escritura, porque não há contradição na palavra de Deus. A ilustração é que a casa é feita de tijolos, mas um monte de tijolos não é uma casa. Da mesma forma, um monte de versículos não é uma doutrina. O erro típico é reunir textos que compartilham a mesma palavra, como "casa" em Josué 24:15, Isaías 2:3, João 14:2 e João 19:27, ignorando que ali a palavra significa família, templo, morada e residência, e a partir dessa costura construir um ensino que nenhum dos textos ensina. A aula lembra ainda que foi com a própria palavra de Deus, mal interpretada, que a serpente tentou a mulher no Éden e que Satanás tentou Jesus.',
    modelAnswer:
      'A regra fundamental é que a Bíblia interpreta a própria Bíblia. Um texto não pode ser interpretado isoladamente do todo, e o que ele significa no seu lugar não pode entrar em conflito com nenhuma outra parte da Escritura, porque não há contradição na palavra de Deus. A ilustração é que a casa é feita de tijolos, mas um monte de tijolos não é uma casa. Da mesma forma, um monte de versículos não é uma doutrina. O erro típico é reunir textos que compartilham a mesma palavra, como "casa" em Josué 24:15, Isaías 2:3, João 14:2 e João 19:27, ignorando que ali a palavra significa família, templo, morada e residência, e a partir dessa costura construir um ensino que nenhum dos textos ensina. A aula lembra ainda que foi com a própria palavra de Deus, mal interpretada, que a serpente tentou a mulher no Éden e que Satanás tentou Jesus.',
    keyPoints: [
      'A Bíblia interpreta a Bíblia',
      'Nenhum texto isolado do todo',
      'Ausência de contradição',
      'Tijolos não são casa',
      'Exemplo da palavra "casa"',
      'A distorção como método do tentador',
    ],
  },
  {
    id: 'EH-DIS-08',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Parábolas',
    prompt:
      'Apresente as regras de interpretação de parábolas e aplique-as à parábola de Lucas 14 sobre o homem que constrói uma torre.',
    hint: 'Olhe o que vem antes e depois da parábola da torre, não só a parábola isolada.',
    explanation:
      'As regras são: procurar descobrir qual o objetivo da parábola, lembrando que ela existe para ilustrar; observar o início e o fim da parábola para identificar com que objetivo foi ensinada; e não se prender aos adornos, mas ao ensinamento principal. Também vale o lembrete de que não se estabelece doutrina com base em figuras de linguagem. Aplicando a Lucas 14: o texto costuma ser usado como princípio de administração financeira, no sentido de planejar antes de empreender. O conselho em si é bom e verdadeiro, o que torna o erro mais difícil de perceber, mas não é o que o texto diz. O contexto anterior e posterior fala de aborrecer pai, mãe, irmãos e a própria vida, e de renunciar a tudo quanto se possui para ser discípulo. Logo, a torre é o discipulado: calcule quanto custa seguir a Jesus antes de começar, para que a obra iniciada não se torne monumento de vergonha.',
    modelAnswer:
      'As regras são: procurar descobrir qual o objetivo da parábola, lembrando que ela existe para ilustrar; observar o início e o fim da parábola para identificar com que objetivo foi ensinada; e não se prender aos adornos, mas ao ensinamento principal. Também vale o lembrete de que não se estabelece doutrina com base em figuras de linguagem. Aplicando a Lucas 14: o texto costuma ser usado como princípio de administração financeira, no sentido de planejar antes de empreender. O conselho em si é bom e verdadeiro, o que torna o erro mais difícil de perceber, mas não é o que o texto diz. O contexto anterior e posterior fala de aborrecer pai, mãe, irmãos e a própria vida, e de renunciar a tudo quanto se possui para ser discípulo. Logo, a torre é o discipulado: calcule quanto custa seguir a Jesus antes de começar, para que a obra iniciada não se torne monumento de vergonha.',
    keyPoints: [
      'Objetivo, início e fim, não se prender a adornos',
      'Doutrina não se funda em figura',
      'Leitura financeira comum',
      'Contexto de renúncia',
      'Calcular o custo de seguir a Cristo',
      'Monumento de vergonha',
    ],
  },
  {
    id: 'EH-DIS-09',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Aplicação',
    prompt:
      'Explique o que torna uma aplicação prática e diretiva, e apresente os três níveis de maturidade indicados pelas perguntas que fazemos diante do que nos incomoda.',
    hint: 'Perceba para onde o foco da pergunta se move a cada novo nível: para o outro, para o ato, ou para você mesmo.',
    explanation:
      'A aplicação precisa ser confronto, prática e diretiva. Confronto é colocar a própria vida diante do texto e perguntar como está a minha vida à luz do que estudei. Prática é sair do abstrato: em vez de "vou procurar ser mais paciente", perguntar com quem tenho sido impaciente, quando fui grosseiro pela última vez, se pedi perdão, em que circunstâncias isso se repete. Diretiva é decidir o que fazer agora, o que confessar, o que devolver, a quem pedir perdão, que qualidade desenvolver e o que largar para que esse desenvolvimento comece. Os três níveis de maturidade aparecem na mudança da pergunta: primeiro "por que você faz isso que me incomoda tanto", com o foco no outro; depois "por que isso que você faz me incomoda tanto", com o foco no ato; e por fim "por que eu me incomodo com isso", com o foco em si mesmo. Só o terceiro nível liberta, porque enquanto o incômodo depender do outro sempre haverá incômodo, e a única pessoa que posso mudar sou eu.',
    modelAnswer:
      'A aplicação precisa ser confronto, prática e diretiva. Confronto é colocar a própria vida diante do texto e perguntar como está a minha vida à luz do que estudei. Prática é sair do abstrato: em vez de "vou procurar ser mais paciente", perguntar com quem tenho sido impaciente, quando fui grosseiro pela última vez, se pedi perdão, em que circunstâncias isso se repete. Diretiva é decidir o que fazer agora, o que confessar, o que devolver, a quem pedir perdão, que qualidade desenvolver e o que largar para que esse desenvolvimento comece. Os três níveis de maturidade aparecem na mudança da pergunta: primeiro "por que você faz isso que me incomoda tanto", com o foco no outro; depois "por que isso que você faz me incomoda tanto", com o foco no ato; e por fim "por que eu me incomodo com isso", com o foco em si mesmo. Só o terceiro nível liberta, porque enquanto o incômodo depender do outro sempre haverá incômodo, e a única pessoa que posso mudar sou eu.',
    keyPoints: [
      'Confronto, prática e diretiva',
      'Sair do abstrato com perguntas concretas',
      'Decidir o que fazer, confessar, devolver, largar',
      'Os três níveis de pergunta',
      'Foco no outro, no ato e em si mesmo',
    ],
  },
  {
    id: 'EH-DIS-10',
    subject: 'hermeneutica',
    sets: ['simulado'],
    type: 'discursiva',
    topic: 'Profecia e cumprimento',
    prompt:
      'Explique como Atos 2 orienta a leitura da profecia de Joel 2, e o que esse caso ensina sobre o princípio de que o Novo Testamento interpreta o Antigo.',
    hint: 'Observe se Pedro cita só o trecho do derramamento do Espírito ou a profecia inteira, e em que tempo verbal ele fala.',
    explanation:
      'Em Atos 2, Pedro responde à acusação de embriaguez dizendo que aquilo que ocorre é o que foi dito pelo profeta Joel, e cita a profecia inteira, não apenas o trecho do derramamento do Espírito. O verbo está no presente do próprio Pedro, o que indica cumprimento naquele momento. Na leitura apresentada, os dois pontos do texto de Joel introduzem a explicação do prodígio: o prodígio celestial e terreno é um sacrifício, identificado com Cristo, e sangue, fogo e coluna de fumaça correspondem à ordem do holocausto. O sol convertido em trevas é Cristo morrendo, sendo ele o sol da justiça, e a lua em sangue é a igreja, que não tem luz própria e reflete o sol. A consequência declarada é que todo o que invocar o nome do Senhor será salvo, e naquele dia três mil pessoas foram salvas. O caso ilustra o princípio de que o Novo Testamento interpreta o Antigo, como também ocorre com o Salmo 110 e com a apresentação de Jesus como o Cordeiro de Deus. Vale registrar a ressalva feita na própria aula: alguns entendem que a profecia se cumpre em mais de um tempo, e a insistência principal é que se façam as perguntas certas ao texto em vez de repetir leituras herdadas.',
    modelAnswer:
      'Em Atos 2, Pedro responde à acusação de embriaguez dizendo que aquilo que ocorre é o que foi dito pelo profeta Joel, e cita a profecia inteira, não apenas o trecho do derramamento do Espírito. O verbo está no presente do próprio Pedro, o que indica cumprimento naquele momento. Na leitura apresentada, os dois pontos do texto de Joel introduzem a explicação do prodígio: o prodígio celestial e terreno é um sacrifício, identificado com Cristo, e sangue, fogo e coluna de fumaça correspondem à ordem do holocausto. O sol convertido em trevas é Cristo morrendo, sendo ele o sol da justiça, e a lua em sangue é a igreja, que não tem luz própria e reflete o sol. A consequência declarada é que todo o que invocar o nome do Senhor será salvo, e naquele dia três mil pessoas foram salvas. O caso ilustra o princípio de que o Novo Testamento interpreta o Antigo, como também ocorre com o Salmo 110 e com a apresentação de Jesus como o Cordeiro de Deus. Vale registrar a ressalva feita na própria aula: alguns entendem que a profecia se cumpre em mais de um tempo, e a insistência principal é que se façam as perguntas certas ao texto em vez de repetir leituras herdadas.',
    keyPoints: [
      'Pedro usa o presente e cita a profecia inteira',
      'Prodígio celestial e terreno como sacrifício',
      'Sol da justiça e lua como igreja',
      'Consequência de salvação e os três mil',
      'Novo Testamento interpreta o Antigo',
      'Ressalva sobre duplo cumprimento',
    ],
  },
];
