/**
 * PROJETO: Gerador de Versículos Aleatórios
 * OBJETIVO: Selecionar e exibir mensagens bíblicas de forma randômica.
 * ESTRUTURA: Array de Objetos (JSON Style).
 */

// 1. BASE DE DADOS (DATA)
// Para adicionar novos versículos, basta replicar a estrutura de objeto { texto: "", 
// referencia: "" }
// DICA: No futuro, este array pode ser movido para um arquivo .json externo ou uma API.

const versiculos = [
    {
        texto: "Tudo posso naquele que me fortalece.",
        referencia: "Filipenses 4:13"
    },
    {
        texto: "O Senhor é o meu pastor, nada me faltará.",
        referencia: "Salmos 23:1"
    },
    {
        texto: "Porque para Deus nada é impossível.",
        referencia: "Lucas 1:37"
    },
    {
        texto: "O amor é paciente, o amor é bondoso.",
        referencia: "1 Coríntios 13:4"
    },
    {
        texto: "Seja forte e corajoso! Não se apavore nem desanime.",
        referencia: "Josué 1:9"
    },
    {
        texto: "E não somente isto, mas também nos gloriamos nas próprias tribulações, sabendo que a tribulação produz perseverança; e a perseverança, experiência; e a experiência, esperança. Ora, a esperança não confunde, porque o amor de Deus é derramado em nosso coração pelo Espírito Santo, que nos foi outorgado.",
        referencia: "Romanos 5:3-5"
    },
    {
        texto: "Porque vivemos pela fé, e não pelo que vemos.",
        referencia: "2 Coríntios 5:7"
    },
    {
        texto: "Os olhos são como luz para o corpo. Quando os olhos de vocês são bons, todo o seu corpo fica cheio de luz. Porém, se os seus olhos forem maus, o seu corpo ficará cheio de escuridão.",
        referencia: "Mateus 6:22-23"
    },
    {
        texto: "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos.",
        referencia: "Provérbios 16-9"
    },
    {
        texto: "Portanto, não vos inquieteis com o dia de amanhã, pois o amanhã trará os seus cuidados; basta ao dia o seu próprio mal.",
        referencia: "Mateus 6:34"
    },
    {
        texto: "Se, porém, algum de vós necessita de sabedoria, peça-a a Deus, que a todos dá liberalmente e nada lhes impropera; e ser-lhe-á concedida.",
        referencia: "Tiago 1:5"
    },
    {
        texto: "E tudo quanto fizerdes, fazei-o de todo o coração, como para o Senhor e não para homens, cientes de que recebereis do Senhor a recompensa da herança. A Cristo, o Senhor, é que estais servindo.",
        referencia: "Colossenses 3:23-24"
    },
    {
        texto: "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito inabalável",
        referencia: "Salmo 51:10"
    },
    {
        texto: "Entrega o teu caminho ao Senhor, confia nele, e o mais ele fará. Ele fará sobressair a tua justiça como a luz e o teu direito, como o sol ao meio-dia. Descansa no Senhor e espera nele...",
        referencia: "Salmo 37:5-7"
    },
    {
        texto: "Vigiai, estai firmes na fé, portai-vos varonilmente, fortalecei-vos. Todos os vossos atos sejam feitos com amor.",
        referencia: "1 Coríntios 16:13-14"
    },
    {
        texto: "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas diante de Deus as vossas petições, pela oração e pela súplica, com ações de graças. E a paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus.",
        referencia: "Filipenses 4:6-7"
    },
    {
        texto: "Eu te instruirei e te ensinarei o caminho que deves seguir; e, sob as minhas vistas, te darei conselho.",
        referencia: "Salmo 32:8"
    },
    {
        texto: "Ele dá força ao cansado e multiplica o vigor ao que não tem nenhum vigor.",
        referencia: "Isaías 40:29"
    },
    {
        texto: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar um futuro e uma esperança.",
        referencia: "Jeremias 29:11"
    },
    {
        texto: "Ora, se alguém não tem cuidado dos seus e especialmente dos da própria casa, tem negado a fé e é pior do que o descrente.",
        referencia: "1 Timóteo 5:8"
    },
    {
        texto: "Tudo fez Deus formoso no seu devido tempo; também pôs a eternidade no coração do homem, sem que este possa descobrir as obras que Deus fez desde o princípio até ao fim.",
        referencia: "Eclesiastes 3:11"
    },
    {
        texto: "Finalmente, irmãos, tudo o que é verdadeiro, tudo o que é respeitável, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se alguma virtude há e se algum louvor existe, seja isso o que ocupe o vosso pensamento.",
        referencia: "Filipenses 4:8"
    },
    {
        texto: "Melhor é o fim das coisas do que o seu princípio; melhor é o paciente de espírito do que o soberbo de espírito.",
        referencia: "Eclesiastes 7:8"
    },
    {
        texto: "Em paz me deito e logo pego no sono, porque a ti só, Senhor, me fazes repousar seguro.",
        referencia: "Salmo 4:8"
    },
    {
        texto: "Vós sois a luz do mundo. Não se pode esconder a edificação edificada sobre um monte; nem se acende uma candeia para colocá-la debaixo do alqueire, mas no velador, e alumia a todos os que se encontram na casa.",
        referencia: "Mateus 5:14-15"
    },
    {
        texto: "Olhai para as aves do céu, que não semeiam, nem colhem, nem ajuntam em celeiros; contudo, vosso Pai celeste as sustenta. Porventura, não valeis vós muito mais do que elas? Qual de vós, por ansioso que esteja, pode acrescentar um côvado à sua estatura?",
        referencia: "Mateus 6:26-27"
    },
    {
        texto: "O Senhor não vê como vê o homem. O homem vê o exterior, porém o Senhor vê o coração.",
        referencia: "1 Samuel 16:7"
    },
    {
        texto: "Pois que aproveita ao homem ganhar o mundo inteiro e perder a sua alma?",
        referencia: "Marcos 8:36"
    },
    {
        texto: "Bem sei que tudo podes, e nenhum dos teus planos pode ser frustrado.",
        referencia: "Jó 42:2"
    },
    {
        texto: "Combati o bom combate, completei a carreira, guardei a fé.",
        referencia: "2 Timóteo 4:7"
    },
    {
        texto: "Esquecendo-me das coisas que para trás ficam e avançando para as que diante de mim estão, prossigo para o alvo.",
        referencia: "Filipenses 3:13-14"
    },
    {
        texto: "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não desfalecermos.",
        referencia: "Gálatas 6:9"
    },
    {
        texto: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque tu estás comigo; a tua vara e o teu cajado me consolam.",
        referencia: "Salmo 23:4"
    },
    {
        texto: "Os que esperam no Senhor renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam.",
        referencia: "Isaías 40:31"
    },
    {
        texto: "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.",
        referencia: "Provérbios 22:6"
    },
    {
        texto: "Ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve...",
        referencia: "Isaías 1:18"
    },
    {
        texto: "Responderam Pedro e os apóstolos: Antes, importa obedecer a Deus do que aos homens.",
        referencia: "Atos 5:29"
    },
    {
        texto: "Longe de vós, toda amargura, e cólera, e ira, e gritaria, e blasfêmias, e bem assim toda malícia.",
        referencia: "Efésios 4:31"
    },
    {
        texto: "Quando eu era menino, falava como menino, sentia como menino, pensava como menino; quando cheguei a ser homem, desisti das coisas próprias de menino.",
        referencia: "1 Coríntios 13:11"
    },
    {
        texto: "As muitas águas não poderiam apagar o amor, nem os rios afogá-lo..",
        referencia: "Cânticos 8:7"
    },
    {
        texto: "Humilhai-vos, pois, sob a poderosa mão de Deus, para que ele, em tempo oportuno, vos exalte.",
        referencia: "1 Pedro 5:6"
    },
    {
        texto: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.",
        referencia: "Naum 1:7"
    },
    {
        texto: "O que guarda a sua boca conserva a sua alma, mas o que muito abre os seus lábios tem destruição.",
        referencia: "Provérbios 13:3"
    },
    {
        texto: "Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes.",
        referencia: "Hebreus 4:12"
    },
    {
        texto: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
        referencia: "João 14:27"
    },
    {
        texto: "A resposta branda desvia o furor, mas a palavra dura suscita a ira.",
        referencia: "Provérbios 15:1"
    },
    {
        texto: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
        referencia: "1 Pedro 5:7"
    },
    {
        texto: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.",
        referencia: "Romanos 8:28"
    },
    {
        texto: "A soberba precede a destruição, e a altivez do espírito precede a queda.",
        referencia: "Provérbios 16:18"
    },
    {
        texto: "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.",
        referencia: "Mateus 7:7"
    },
    {
        texto: "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio.",
        referencia: "Gálatas 5:22-23"
    },
    {
        texto: "Se creres, verás a glória de Deus.",
        referencia: "João 11:40"
    },
    {
        texto: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
        referencia: "Provérbios 3:5-6"
    },
    {
        texto: "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.",
        referencia: "Jeremias 17:7"
    },
    {
        texto: "Mil poderão cair ao teu lado, e dez mil à tua direita; mas tu não serás atingido.",
        referencia: "Salmo 91:7"
    },
    {
        texto: "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é a prudência.",
        referencia: "Provérbios 9:10"
    },
    {
        texto: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.",
        referencia: "Romanos 12:2"
    },
    {
        texto: "O meu socorro vem do Senhor, que fez o céu e a terra.",
        referencia: "Salmo 121:2"
    },
    {
        texto: "A vossa palavra seja sempre agradável, temperada com sal, para que saibais como convém responder a cada um.",
        referencia: "Colossenses 4:6"
    },
    {
        texto: "Escondi a tua palavra no meu coração, para não pecar contra ti.",
        referencia: "Salmo 119:11"
    },
    {
        texto: "Quem caminha com os sábios será sábio, mas o companheiro dos tolos sofrerá aflição.",
        referencia: "Provérbios 13:20"
    },
    {
        texto: "O homem de muitos amigos deve mostrar-se amigável, mas há amigo mais chegado do que um irmão.",
        referencia: "Provérbios 18:24"
    },
    {
        texto: "De que adianta, meus irmãos, se alguém disser que tem fé, e não tiver as obras?",
        referencia: "Tiago 2:14"
    },
    {
        texto: "Sê fiel até à morte, e dar-te-ei a coroa da vida.",
        referencia: "Apocalipse 2:10"
    },
    {
        texto: "O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa, alcançará misericórdia.",
        referencia: "Provérbios 28:13"
    },
    {
        texto: "E conhecereis a verdade, e a verdade vos libertará.",
        referencia: "João 8:32"
    },
    {
        texto: "O temor do Senhor é a instrução da sabedoria, e adiante da honra vai a humildade.",
        referencia: "Provérbios 15:33"
    },
    {
        texto: "O que atenta para o ensino acha o bem, e o que confia no Senhor, esse é feliz.",
        referencia: "Provérbios 16:20"
    },
    {
        texto: "O coração alegre é bom remédio, mas o espírito abatido faz secar os ossos.",
        referencia: "Provérbios 17:22"
    },
    {
        texto: "Torre forte é o nome do Senhor; a ela corre o justo e está seguro.",
        referencia: "Provérbios 18:10"
    },
    {
        texto: "A glória dos jovens é a sua força, e o enfeite dos velhos, as suas cãs.",
        referencia: "Provérbios 20:29"
    },
    {
        texto: "Como o ferro com o ferro se afia, assim o homem ao seu amigo.",
        referencia: "Provérbios 27:17"
    },
    {
        texto: "O que encobre as suas transgressões jamais prosperará; mas o que as confessa e deixa alcançará misericórdia.",
        referencia: "Provérbios 28:13"
    },
    {
        texto: "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.",
        referencia: "Salmo 119:105"
    },
    {
        texto: "Grandes coisas fez o Senhor por nós, por isso estamos alegres.",
        referencia: "Salmo 126:3"
    },
    {
        texto: "Aquietai-vos e sabei que eu sou Deus; sou exaltado entre as nações, sou exaltado na terra.",
        referencia: "Salmo 46:10"
    },
    {
        texto: "Sê fiel até à morte, e dar-te-ei a coroa da vida.",
        referencia: "Apocalipse 2:10"
    },
    {
        texto: "Apascentai o rebanho de Deus que está entre vós, não por constrangimento, mas espontaneamente.",
        referencia: "1 Pedro 5:2"
    },
    {
        texto: "Mas, buscai primeiramente o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
        referencia: "Mateus 6:33"
    },
    {
        texto: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
        referencia: "Mateus 11:28"
    },
    {
        texto: "Agrada-te do Senhor, e ele satisfará os desejos do teu coração.",
        referencia: "Salmo 37:4"
    },
    {
        texto: "Meus irmãos, tende por motivo de toda alegria o passardes por várias provações, sabendo que a provação da vossa fé, uma vez confirmada, produz perseverança.",
        referencia: "Tiago 1:2-3"
    },
    {
        texto: "Tenho-vos dito estas coisas para que em mim tenhais paz. No mundo, passais por aflições; mas tende bom ânimo; eu venci o mundo.",
        referencia: "João 16:33"
    },
    {
        texto: "O pão nosso de cada dia dá-nos hoje.",
        referencia: "Mateus 6:11"
    },
    {
        texto: "Eu sou o pão da vida; o que vem a mim jamais terá fome; e o que crê em mim jamais terá sede.",
        referencia: "João 6:35"
    },
    {
        texto: "O que guarda os seus mandamentos permanece em Deus, e Deus, nele.",
        referencia: "1 João 3:24"
    },
    {
        texto: "Aquele que tem os meus mandamentos e os guarda, esse é o que me ama.",
        referencia: "João 14:21"
    },
    {
        texto: "Oh! Como é bom e quão suave é que os irmãos vivam em união!",
        referencia: "Salmo 133:1"
    },
    {
        texto: "Em todo tempo ama o amigo, e na angústia se faz o irmão.",
        referencia: "Provérbios 17:17"
    },
    {
        texto: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
        referencia: "Provérbios 3:5"
    },
    {
        texto: "Bem-aventurado o homem que suporta, com perseverança, a provação; porque, depois de aprovado, receberá a coroa da vida.",
        referencia: "Tiago 1:12"
    },
    {
        texto: "Ora, o Deus da esperança vos encha de todo o gozo e paz no vosso crer.",
        referencia: "Romanos 15:13"
    },
    {
        texto: "Buscai o Senhor e a sua força; buscai a sua face continuamente.",
        referencia: "1 Crônicas 16:11"
    },
    {
        texto: "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.",
        referencia: "Salmo 119:105"
    },
    {
        texto: "Confessai, pois, os vossos pecados uns aos outros e orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo.",
        referencia: "Tiago 5:16"
    },
    {
        texto: "Apascentai o rebanho de Deus que está entre vós, não por constrangimento, mas espontaneamente.",
        referencia: "1 Pedro 5:2"
    },
    {
        texto: "Não se aparte da tua boca o livro desta Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer segundo tudo quanto nele está escrito.",
        referencia: "Josué 1:8"
    },
    {
        texto: "O que segue a justiça e a bondade achará a vida, a justiça e a honra.",
        referencia: "Provérbios 21:21"
    },
    {
        texto: "Justificados, pois, mediante a fé, temos paz com Deus por meio de nosso Senhor Jesus Cristo.",
        referencia: "Romanos 5:1"
    },
    {
        texto: "Fiel é a palavra e digna de toda aceitação: que Cristo Jesus veio ao mundo para salvar os pecadores.",
        referencia: "1 Timóteo 1:15"
    },
    {
        texto: "Escondi a tua palavra no meu coração, para não pecar contra ti.",
        referencia: "Salmo 119:11"
    },
    {
        texto: "Ainda que eu fale as línguas dos homens e dos anjos, se não tiver caridade, sou como o bronze que soa ou como o címbalo que retine.",
        referencia: "1 Coríntios 13:1"
    },
    {
        texto: "Vigiai e orai, para que não entreis em tentação; o espírito, na verdade, está pronto, mas a carne é fraca.",
        referencia: "Mateus 26:41"
    },
    {
        texto: "Não vos sobreveio tentação que não fosse humana; mas Deus é fiel e não permitirá que sejais tentados além das vossas forças.",
        referencia: "1 Coríntios 10:13"
    },
    {
        texto: "Aquele que recebe um destes pequeninos em meu nome, a mim me acolhe; e quem a mim me acolhe, acolhe não a mim, mas àquele que me enviou.",
        referencia: "Marcos 9:37"
    },
    {
        texto: "Buscai o Senhor enquanto se pode achar, invocai-o enquanto está perto.",
        referencia: "Isaías 55:6"
    },
    {
        texto: "Busquei o Senhor, e ele me acolheu; livrou-me de todos os meus temores.",
        referencia: "Salmo 34:4"
    },
    {
        texto: "Espera pelo Senhor, tem bom ânimo, e fortifique-se o teu coração; espera, pois, pelo Senhor.",
        referencia: "Salmo 27:14"
    },
    {
        texto: "Mas os que esperam no Senhor renovam as suas forças, sobem com asas como águias.",
        referencia: "Isaías 40:31"
    },
    {
        texto: "Orai sem cessar. Em tudo, dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
        referencia: "1 Tessalonicenses 5:17-18"
    },
    {
        texto: "Confia os teus cuidados ao Senhor, e ele te susterá; jamais permitirá que o justo seja abalado.",
        referencia: "Salmo 55:22"
    },
    {
        texto: "Disse-lhes Jesus: Vinde após mim, e eu farei que vos torneis pescadores de homens.",
        referencia: "Marcos 1:17"
    },
    {
        texto: "Lançai sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
        referencia: "1 Pedro 5:7"
    },
    {
        texto: "A caridade é paciente, é benigna; a caridade não arde em ciúmes, não se ufana, não se ensoberbece.",
        referencia: "1 Coríntios 13:4"
    },
    {
        texto: "Ensina-nos a orar, como também João ensinou aos seus discípulos.",
        referencia: "Lucas 11:1"
    },
    {
        texto: "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.",
        referencia: "Jeremias 17:7"
    },
    {
        texto: "E disse-lhes: Lançai a rede à direita do barco e achareis. Lançaram-na, pois, e já não podiam puxá-la, por causa da grande quantidade de peixes.",
        referencia: "João 21:6"
    },
    {
        texto: "Acolhei-vos uns aos outros, como também Cristo nos acolheu para a glória de Deus.",
        referencia: "Romanos 15:7"
    },
    {
        texto: "Buscai, pois, em primeiro lugar, o seu reino e a sua justiça, e todas estas coisas vos serão acrescentadas.",
        referencia: "Mateus 6:33"
    },
    {
        texto: "Suporta as aflições, faze o trabalho de um evangelista, cumpre plenamente o teu ministério.",
        referencia: "2 Timóteo 4:5"
    },
    {
        texto: "Pois a nossa leve e momentânea tribulação produz para nós um eterno peso de glória, acima de toda comparação.",
        referencia: "2 Coríntios 4:17"
    },
    {
        texto: "E disse-lhes Jesus: Vinde após mim, e eu farei que vos torneis pescadores de homens. E eles, deixando imediatamente as redes, o seguiram. Passando adiante, viu outros dois irmãos, Tiago e João, no barco com seu pai, consertando as redes.",
        referencia: "Mateus 4:19-21"
    },
    {
        texto: "Simão Pedro disse aos outros: Vou pescar. Eles responderam: Nós também vamos com você. Foram e entraram no barco, mas naquela noite não pescaram nada.",
        referencia: "João 21:3"
    },
    {
        texto: "Pois a caridade de Cristo nos constrange, julgando nós isto: um morreu por todos; logo, todos morreram.",
        referencia: "2 Coríntios 5:14"
    },
    {
        texto: "Ora, o intuito da presente admoestação é a caridade, que procede de um coração puro, e de uma boa consciência, e de uma fé não fingida.",
        referencia: "1 Timóteo 1:5"
    },
    {
        texto: "Não te furtes a acolher os que são levados à morte e retém os que caminham vacilantes para a matança.",
        referencia: "Provérbios 24:11"
    },
    {
        texto: "Acolhei o que é débil na fé, não, porém, para discutir opiniões.",
        referencia: "Romanos 14:1"
    },
    {
        texto: "Mas Deus, que é riquíssimo em misericórdia, pelo seu muito amor com que nos amou, estando nós ainda mortos em nossos delitos, nos vivificou juntamente com Cristo.",
        referencia: "Efésios 2:4-5"
    },
    {
        texto: "A alegria do Senhor é a vossa força.",
        referencia: "Neemias 8:10"
    },
    {
        texto: "Busquei o Senhor, e ele me acolheu; livrou-me de todos os meus temores.",
        referencia: "Salmo 34:4"
    },
    {
        texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?",
        referencia: "Salmo 27:1"
    },
    {
        texto: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei. Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração; e achareis descanso para a vossa alma.",
        referencia: "Mateus 11:28-29"
    },
    {
        texto: "Pedis e não recebeis, porque pedis mal, para esbanjardes em vossos prazeres.",
        referencia: "Tiago 4:3"
    },
    {
        texto: "Acheguemo-nos, portanto, confiadamente, junto ao trono da graça, a fim de recebermos misericórdia e acharmos graça para socorro em ocasião oportuna.",
        referencia: "Hebreus 4:16"
    },
    {
        texto: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
        referencia: "Salmo 119:105"
    },
    {
        texto: "Cura-me, Senhor, e serei curado; salva-me, e serei salvo; porque tu és o meu louvor.",
        referencia: "Jeremias 17:14"
    },
    {
        texto: "Bem-aventurados os que têm fome e sede de justiça, porque serão fartos.",
        referencia: "Mateus 5:6"
    },
    {
        texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
        referencia: "Isaías 41:10"
    },
    {
        texto: "Tu conservarás em paz aquele cujo pensamento é firme em ti; porque ele confia em ti.",
        referencia: "Isaías 26:3"
    },
    {
        texto: "O Senhor te guardará de todo mal; guardará a tua alma.",
        referencia: "Salmo 121:7"
    },
    {
        texto: "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.",
        referencia: "Salmo 37:4"
    },
    {
        texto: "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio.",
        referencia: "Gálatas 5:22-23"
    },
    {
        texto: "Invocai-me, e vinde, e orai a mim, e eu vos ouvirei. Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração.",
        referencia: "Jeremias 29:12-13"
    },
    {
        texto: "O coração alegre aformoseia o rosto, mas pela dor do coração o espírito se abate.",
        referencia: "Provérbios 15:13"
    },
    {
        texto: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.",
        referencia: "Jeremias 33:3"
    },
    {
        texto: "Sara os quebrantados de coração e estanca-lhes as chagas.",
        referencia: "Salmo 147:3"
    },
    {
        texto: "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas diante de Deus as vossas petições.",
        referencia: "Filipenses 4:6"
    },
    {
        texto: "Pois não nos deu Deus espírito de covardia, mas de poder, de amor e de moderação.",
        referencia: "2 Timóteo 1:7"
    },
    {
        texto: "Digno és, Senhor, de receber glória, honra e poder; porque tu criaste todas as coisas.",
        referencia: "Apocalipse 4:11"
    },
    {
        texto: "O Senhor é o meu pastor; nada me faltará.",
        referencia: "Salmo 23:1"
    },
    {
        texto: "O que segue a justiça e a lealdade achará a vida, a justiça e a honra.",
        referencia: "Provérbios 21:21"
    },
    {
        texto: "Os lábios leais permanecem para sempre, mas a língua mentirosa dura apenas um instante.",
        referencia: "Provérbios 12:19"
    },
    {
        texto: "A lealdade e a fidelidade preservam o rei; por meio da lealdade o seu trono se firma.",
        referencia: "Provérbios 20:28"
    },
    {
        texto: "Pois o Senhor é bom e a sua lealdade dura para sempre; a sua fidelidade permanece de geração em geração.",
        referencia: "Salmo 100:5"
    },
    {
        texto: "Seja o seu coração inteiramente leal ao Senhor, o nosso Deus, para seguirmos os seus decretos e obedecermos aos seus mandamentos.",
        referencia: "1 Reis 8:61"
    },
    {
        texto: "O Senhor retribui a cada um conforme a sua justiça e a sua lealdade.",
        referencia: "1 Samuel 26:23"
    },
    {
        texto: "Misericórdia e lealdade se encontraram; justiça e paz se beijaram.",
        referencia: "Salmo 85:10"
    },
    {
        texto: "Quem é fiel no pouco, também é fiel no muito; e quem é injusto no pouco, também é injusto no muito.",
        referencia: "Lucas 16:10"
    },
    {
        texto: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.",
        referencia: "1 João 1:9"
    },
    {
        texto: "As tuas misericórdias renovam-se cada manhã; grande é a tua fidelidade.",
        referencia: "Lamentações 3:23"
    },
    {
        texto: "Sê fiel até à morte, e dar-te-ei a coroa da vida.",
        referencia: "Apocalipse 2:10"
    },
    {
        texto: "E conhecereis a verdade, e a verdade vos libertará.",
        referencia: "João 8:32"
    },
    {
        texto: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim.",
        referencia: "João 14:6"
    },
    {
        texto: "Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.",
        referencia: "João 4:24"
    },
    {
        texto: "Santifica-os na verdade; a tua palavra é a verdade.",
        referencia: "João 17:17"
    },
    {
        texto: "Porque a palavra do Senhor é reta, e todas as suas obras são feitas com fidelidade.",
        referencia: "Salmo 33:4"
    },
    {
        texto: "Pois o Senhor é justo e ama a justiça; os retos verão a sua face.",
        referencia: "Salmo 11:7"
    },
    {
        texto: "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito inabalável e de retidão.",
        referencia: "Salmo 51:10"
    },
    {
        texto: "O Senhor conhece os dias dos íntegros; a sua herança permanecerá para sempre.",
        referencia: "Salmo 37:18"
    },
    {
        texto: "O caminho do justo é retidão; tu, que és reto, aplanas a vereda do justo.",
        referencia: "Isaías 26:7"
    },
    {
        texto: "Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou.",
        referencia: "João 13:13"
    },
    {
        texto: "O discípulo não está acima do seu mestre, mas todo o que for bem preparado será como o seu mestre.",
        referencia: "Lucas 6:40"
    },
    {
        texto: "Mestre, qual é o grande mandamento na lei? Respondeu Jesus: Amarás o Senhor, teu Deus, de todo o teu coração.",
        referencia: "Mateus 22:36-37"
    },
    {
        texto: "E não queirais ser chamados mestres, porque um só é o vosso Mestre, que é o Cristo.",
        referencia: "Mateus 23:10"
    },
    {
        texto: "Mestre, sabemos que és verdadeiro e ensinas o caminho de Deus segundo a verdade.",
        referencia: "Mateus 22:16"
    },
    {
        texto: "O Mestre está aqui e te chama.",
        referencia: "João 11:28"
    },
    {
        texto: "Ele lhes disse: Ide à cidade, a um certo homem, e dizei-lhe: O Mestre diz: O meu tempo está próximo.",
        referencia: "Mateus 26:18"
    },
    {
        texto: "A resposta calma desvia a fúria, mas a palavra ríspida desperta a ira.",
        referencia: "Provérbios 15:1"
    },
    {
        texto: "É melhor um bocado seco com calma e paz do que casa cheia de banquetes com conflitos.",
        referencia: "Provérbios 17:1"
    },
    {
        texto: "O coração calmo é vida para o corpo, mas a inveja apodrece os ossos.",
        referencia: "Provérbios 14:30"
    },
    {
        texto: "Ele se levantou, repreendeu o vento e disse ao mar: 'Acalma-te! Enudece!'. O vento cessou e houve grande bonança.",
        referencia: "Marcos 4:39"
    },
    {
        texto: "Em paz me deito e logo adormeço, pois só tu, Senhor, me fazes viver em segurança e sossego.",
        referencia: "Salmo 4:8"
    },
    {
        texto: "O homem irritável provoca dissensão, mas quem é paciente acalma a discussão.",
        referencia: "Provérbios 15:18"
    },
    {
        texto: "Pelo muito esperar se convence o príncipe, e a língua branda quebranta os ossos.",
        referencia: "Provérbios 25:15"
    },
    {
        texto: "Aquele que é prudente guarda o seu conhecimento, mas o coração dos tolos proclama a sua estultícia; a calma é o adorno dos sábios.",
        referencia: "Provérbios 12:23"
    },
    {
        texto: "Maridos, vós, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela.",
        referencia: "Efésios 5:25"
    },
    {
        texto: "Assim devem os maridos amar as suas próprias mulheres, como a seus próprios corpos. Quem ama a sua mulher, ama-se a si mesmo.",
        referencia: "Efésios 5:28"
    },
    {
        texto: "Vós, maridos, amai a vossas mulheres, e não vos irriteis contra elas.",
        referencia: "Colossenses 3:19"
    },
    {
        texto: "Igualmente vós, maridos, coabitai com elas com entendimento, dando honra à mulher, como vaso mais frágil; como sendo vós os seus co-herdeiros da graça da vida.",
        referencia: "1 Pedro 3:7"
    },
    {
        texto: "Goza a vida com a mulher que amas, todos os dias da tua vida vã, os quais Deus te deu debaixo do sol.",
        referencia: "Eclesiastes 9:9"
    },
    {
        texto: "O que acha uma mulher acha uma coisa boa, e alcançou a benevolência do Senhor.",
        referencia: "Provérbios 18:22"
    },
    {
        texto: "Beba a água da sua própria cisterna, das águas que brotam do seu próprio poço. Seja bendita a sua fonte! Alegre-se com a esposa da sua juventude.",
        referencia: "Provérbios 5:15,18"
    },
    {
        texto: "A mulher virtuosa é a coroa do seu marido, mas a que procede vergonhosamente é como podridão nos seus ossos.",
        referencia: "Provérbios 12:4"
    },
    {
        texto: "Portanto deixará o homem a seu pai e a sua mãe, e unir-se-á à sua mulher, e serão os dois uma só carne.",
        referencia: "Efésios 5:31"
    },
    {
        texto: "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
        referencia: "Colossenses 3:14"
    }
];

// Selecionando Elementos
// 2. SELEÇÃO DE ELEMENTOS (DOM)
// Armazenamos as referências do HTML em constantes para evitar buscas repetitivas no 
// documento.
const btn = document.querySelector("#btn-sortear");
const textoElemento = document.querySelector("#texto");
const refElemento = document.querySelector("#referencia");
const inputBusca = document.querySelector("#input-busca");

// Função do sorteio 
function gerarVersiculo() {
    const termoBusca = inputBusca.value.toLowerCase().trim();
    let listaFiltrada;

    if (termoBusca === "") {
        //Se não houver busca, usa a lista completa de 150 versículos
        listaFiltrada = versiculos;
    } else {
        //Filtra a lista: Só entram versículos onde o texto contém o termo buscado.
        listaFiltrada = versiculos.filter(v =>
            v.texto.toLowerCase().includes(termoBusca)
        );
    }

    // Sorteamos apenas dentro da lista que restou (a filtrada)
    const indiceAleatorio = Math.floor(Math.random() * listaFiltrada.length);
    // Validação: Caso não encontre nenhum versículo com aquela palavra
    if (listaFiltrada.length === 0) {
        textoElemento.innerText = `Nenhum versículo encontrado com a palavra "${termoBusca}".;`
        refElemento.innerText = "";
        return; // Para a função aqui
    }

    // Gerar um número aleatório entre 0 e o tamanho da lista
    const indice = Math.floor(Math.random() * listaFiltrada.length); // Usa o tamanho da lista atual
    const escolhido = listaFiltrada[indice];

    let textoExibicao = escolhido.texto;
    if (termoBusca !== "") {
        const expressao = new RegExp(`(${termoBusca})`, "gi");
        textoExibicao = textoExibicao.replace(expressao, "<mark>$1</mark>");
    }

    textoElemento.innerHTML = `"${textoExibicao}"`;
    refElemento.innerText = escolhido.referencia;
    console.log(indice);
    
    // Adiciona o evento de ouvir as teclas no campo de busca
    inputBusca.addEventListener("keydown", function(event) {
        // Se a tecla apertada for "Enter"
        if (event.key === "Enter") {
        gerarVersiculo(); // Executa a mesma função do botão
        }
    });
};

btn.addEventListener("click", gerarVersiculo);

gerarVersiculo();