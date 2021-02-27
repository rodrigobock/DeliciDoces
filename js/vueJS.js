var titulo = new Vue({
  el: '#titulo',
  data: {
    message: 'DeliciDoces'
  }
})

var subtitulo = new Vue({
  el: '#sub',
  data: {
    message: 'O melhor da confeitaria!'
  }
})

var Paragrafo1 = new Vue({
  el: '#p1',
  data: {
    message: 'Tudo começou com um sonho, em 2014, quando dona Margarida começou a trabalhar de atendente em uma padaria de Blumenau. Aos poucos ela foi percebendo que seu potencial não seria atingido se continuasse no mesmo cargo por mais tempo, com isso em mente, dona Margarida começou a aprender a decorar seus bolos com o então confeiteiro do lugar onde ela trabalhava. Não demorou muito até que ela comecasse a amar seu trabalho e se dedicar cada vez mais. Foi aprendendo e aprendendo, dia após dia, até chegar o momento de criar o seu próprio negócio! O DeliciDoces é uma empresa administrada inteiramente por dona Margarida, que cria seus bolos com amor, carinho e dedicação.'
  }
})

var Paragrafo2 = new Vue({
  el: '#p2',
  data: {
    message: 'E você? Está esperando o que para ser feliz?'
  }
})

var Dev = new Vue({
  el: '#dev',
  data: {
    message: 'Site desenvolvido por Rodrigo Cabral Bock.'
  }
})

var data = new Vue({
  el: '#data',
  data: {
    message: 'Fevereiro/2021'
  }
})

var TituloReceita = new Vue({
  el: '#TituloReceita',
  data: {
    message: 'Receita de Orelha de Gato'
  }
})

var Descricao = new Vue({
  el: '#Descricao',
  data: {
    message: 'Este doce na verdade possui vários nomes pelo Brasil, pode ser chamado de Cueca Virada ou Calça virada, Orelha de gato e até Cavaquinho.'
  }
})

var Ingredientes = new Vue({
  el: '#Ingredientes',
  data: {
    message: 'Ingredientes: '
  }
})

var ListaIngredientes = new Vue({
  el: '#listaIngredientes',
  data: {
    todos: [
    { text: '4 Ovos' },
    { text: '8 colheres de sopa de açucar' },
    { text: '1 colher de sopa de margarina' },
    { text: '1 colher de chá de sal' },
    { text: '1 copo de leite' },
    { text: '1 colher de fermento rasa' },
    { text: '1 kg de trigo' }
    ]
  }
})

var Preparo = new Vue({
  el: '#Preparo',
  data: {
    message: 'Preparo: '
  }
})

var PassosPreparacao = new Vue({
  el: '#Passos',
  data: {
    todos: [
    { text: 'Juntar todos os ingredientes e aos poucos adicionar o trigo até que a massa solte das mãos, mas cuidado para não deixar a massa muito dura.' },
    { text: 'Após esticar a massa com um rolo e recortar as orelhas de gato.' },
    { text: 'Fritar em fogo baixo' },
    ]
  }
})

var msgWpp = new Vue({
  el: '#msgWpp',
  data: {
    message: 'Caso tenha interesse em fazer um orçamento, entre em contato pelo nosso Whatsapp:'
  }
})