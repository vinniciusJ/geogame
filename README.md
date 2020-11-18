# GeoGame
GeoGame é um website, desenvolvido para auxiliar no ensino de atividades de geografia. Na atual versão, conta com um único jogo, que trata sobre coordenadas geográficas. 

## Requisitos para Uso
- Qualquer navegador (Firefox, Chrome, etc)
- Acesso à internet

## Motivação
A motivação para esse projeto surgiu quando o professor de geografia do Instituto Federal do Paraná, campus foz do Iguaçu, Luiz Alves, recomendou um [site](http://www.geografia7.com/jogo-das-coordenadas-geograacuteficas.html) aos seus alunos, que contava com um jogo de coordernadas geográficas, a fim de estimular o aprendizado do conteúdo.

No entanto, esse mesmo site se utiliza do Adobe  Flash Player para ser executado, não sendo mais possível o devido acesso a partir de 2021. 

A partir dessa necessidade, de possibilitar que novos alunos ainda possam ter um local que possam se divertir ao mesmo tempo que aprendam sobre coordenadas, surgiu esse projeto. 


## Estrutura do Website

### Tela Inicial
É a tela inicial, sendo então acessada ao entrar no site. 

![Home]()

#### Cabeçalho
No cabeçalho, é possível acessar a aba _Sobre nós_ ou retornar ao _Menu Inicial_
![Header]()

#### Rodapé
No rodapé, há um link, que redireciona para o site das coordenadas comentado em __Motivação__, e que foi usado como inspiração. 
![Footer]()

Seu cabeçalho e rodapé são o mesmo de todo o restante do site. 

#### Jogar
Clicando no botão _Jogar_, o usuário é enviado para uma página em que ele insere seu nome.
Feito isso, basta apertar a tecla ``` Enter ``` 

![Name]()

### Jogo das Coordenadas
É acessado após a inserção do nome pelo usuário. 

![Game]()

Em seu centro, está um mapa-mundi, que possuí pontos aleatoriamente marcados. Cada um desses pontos possuí uma coordenada específica e única. 

Embaixo do mapa, há duas caixas de conteúdo:
- A caixa esquerda indica o tempo que o usuário está no jogo, no formato ```HH:MM:SS```
- A caixa direita indica o número de pontos que o usuário marcou corretamente 

Acima do mapa, aparece a coordenada geográfica dada, que o usuário precisa encontrar no mapa. 

#### Funcionamento 

O jogo informa uma coordenada ao usuário, que precisa clicar em cima do ponto que está localizado nessa coordenada. 

Caso aperte no botão certo, o usuário soma um ponto. Se apertar no incorreto, perde um ponto. 

A cada tentativa, o usuário precisa tentar acertar 10 pontos no mapa, no menor tempo possível. Quanto mais pontos acertados e em menos tempo, maior é a pontuação. 

### Pontuação 
Após o término da realização do _Jogo das Coordenadas_, uma nova tela aparece para o usuário informando sua pontuação, além de mostrar pontuações anteriores e de outros usuários que jogaram na mesma máquina que a sua. 

![Pontuation]()