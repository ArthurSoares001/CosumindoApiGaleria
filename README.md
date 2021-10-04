# CosumindoApiGaleria
No Html esta simples, coloquei a tag pai   <div class="product_section"> 
No Js 1 criei um metodo fazGet para pegar a conexão com a fonte de cosumo.
Na Função chamar() esta chamando a conexao com o parametro do servidor API, converte de json para objeto.
Dentro desse objeto busca-se cada elemento com o parametro de repetição(FOREACH)e para cada elemento, 
Chama a função criarElementos() que irá criar suas tags padrões de exibição por produto com a função do js(createElement()),
Ainda dentro de CriaElementos(), apos criadas as Tag ou (elementos) e inserido os dados dentro das tags com a função do js(InnerHtml)
e por fim são atribuidas as appendChild que irá informar quais tag são filhas de que pai.
Assim  criando as tags e adicionando os valor de cada elemento do JSon passado.
