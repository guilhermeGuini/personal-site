const casual = require('casual')

module.exports = () => {
  casual.define("article", function () {
    return {
      id: casual.uuid,
      title: casual.title,
      image: 'https://via.placeholder.com/150',
      description: casual.text,
      socialFeedback: {
        likes: casual.integer(from = 0, to = 99),
        deslikes: casual.integer(from = 0, to = 99),
        comments: casual.integer(from = 0, to = 99)
      },
      comments: [
        {
          id: casual.uuid,
          text: casual.text
        }
      ],
      content: `
      <article class="content-article">
      <div class="row art-title">
        <div class="col-md-12 text-center">
          <h1 class="art-title-primary">Java SE 8 Programmer OCA Certification</h1>
          <span class="art-title-second">Três assuntos que caem na certificação OCA que seria legal desenvolvedores Java conhecer</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 art-tags">
          <span>8 de Junho 2020.</span>
          <span class="badge badge-secondary">Java 8</span>
          <span class="badge badge-secondary">OCA Certification</span>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <ol class="art-list-summary">
            <li>Passagem por referência.</li>
            <li>String Pool.</li>
            <li>Algumas características de Interfaces.</li>
          </ol>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <h2>1. Passagem por referência</h2>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            Para entendermos esse assunto, primeiro precisamos conhecer o que uma variável armazena.
            </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            Independente se uma variável é um tipo primitivo ou um objeto, uma variável apenas armazena bits.
            Podendo ser a representação do valor para tipos primitivos ou a representação do endereço na memória (Heap) para objetos.
            </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            Agora sim, vamos ver dois exemplos de passagem de parâmetro por referência.
            O que seria exibido se o método main abaixo fosse executado?
            </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <figure>
            <img src="/imgs/gist/passagem_referencia.png" alt="Imagem com código exemplo de passagem de referência." />
            <figcaption>Imagem com código exemplo de passagem de referência.</figcaption>
          </figure>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            Seria exibido Maria, isto porque a variável a2 do método changeName recebeu a cópia dos bits da variável a1 do método main, que representa o endereço de memória para o objeto Aluno("Jose"). Por isso a alteração do atributo name no método changeName, acaba refletindo no método principal, pois ambas variáveis a1 e a2 "apontam" para o mesmo objeto.
            </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            O que aconteceria se instanciássemos um novo objeto dentro do método changeName?
            </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <figure>
            <img src="/imgs/gist/passagem_referencia2.png" alt="Imagem com código exemplo de passagem de referência." />
            <figcaption>Imagem com código exemplo de passagem de referência.</figcaption>
          </figure>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>
            Nesse caso seria exibido Jose, pois a variável a2 do método changeName recebe uma cópia dos bits da variável a1, e não o objeto em si. Portanto, quando é instanciado um novo objeto, a variável a2 que é uma cópia, é alterada recebendo os bits que representarão o endereço de memória do novo objeto Aluno(“Maria”), não afetando a variável a1 do método principal.
          </p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <h2>2. String Pool</h2>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>Strings em java são imutáveis, ou seja, uma vez criada não é possível alterar. Como são muito utilizadas em aplicações Java, um pool de String se faz necessário para diminuir o consumo de recursos.</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>No cenário abaixo é possível ver o uso do pool, quando comparamos se a variável <b>name1</b> e <b>name2</b> “apontam” para o mesmo objeto em memória. A comparação retornará verdadeiro, pois como a String “GUINI” já existe no pool (pois foi criada na linha 3), é reutilizada na linha 4.</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <figure>
            <img src="/imgs/gist/string_pool.png" alt="Imagem com código exemplo de pool de string." />
            <figcaption>Imagem com código exemplo de pool de string.</figcaption>
          </figure>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>É possível não utilizar o pool, para isto basta instanciar uma String usando a palavra reservada new. Nesse caso a comparação retornará falso, pois a variável name2 não utilizará o pool de String, e criará outro objeto.</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <figure>
            <img src="/imgs/gist/string_pool2.png" alt="Imagem com código exemplo de pool de string." />
            <figcaption>Imagem com código exemplo de pool de string.</figcaption>
          </figure>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <h2>3. Algumas características de Interfaces</h2>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>A ideia aqui não é explicar o que é uma interface, e sim apenas compartilhar algumas características.</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <ul class="art-list ">
            <li>Todas as variáveis declaradas nas interfaces são constantes, independente se você declarar ou não.</li>
            <li>Todos os métodos são públicos e abstratos, independente se você declarar ou não.</li>
            <li>Interfaces são abstratas.</li>
          </ul>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>Portanto, quando você ver variações de interfaces como abaixo:</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <figure>
            <img src="/imgs/gist/interfaces.png" alt="Imagem com código exemplo de Interfaces." />
            <figcaption>Imagem com código exemplo de Interfaces.</figcaption>
          </figure>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <p>Lembre-se de que as variações tem o mesmo comportamento e claro procure utilizar as declarações reduzidas visto que o compilador por padrão irá adicionar o que não é obrigatório.</p>
        </div>
      </div>
      <div class="row art-section">
        <div class="col-md-12">
          <span>Referência: livro OCA Java SE 8 Programmer I Exam Guide (Exams 1Z0-808).</span>
        </div>
      </div>
    </article>
                `
    };
  });

  data = {
    article: {}
  };

  data.article = casual.article;

  return data;
};