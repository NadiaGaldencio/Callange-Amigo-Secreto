# Callange-Amigo-Secreto

 Challenge Amigo Secreto

Bem-vindo ao projeto Challenge Amigo Secreto! Este é um aplicativo web simples e interativo que possibilita a realização de sorteios de amigo secreto de forma segura e divertida. Este desafio prático faz parte da formação ALURA Iniciante em Programação G8 - ONE, onde enfrentei desafios como a implementação da função de sorteio e a complexidade de impedir que um participante sorteie a si mesmo.

Índice:
Descrição do Projeto;
Funcionalidades;
Desafios e Soluções;
Tecnologias Utilizadas;
Como Utilizar;
Como Contribuir;
License;
Contato;

Descrição do Projeto
O projeto Amigo Secreto tem como objetivo facilitar a organização de um amigo secreto, resolvendo dificuldades comuns, como:

Evitar que um participante seja sorteado para si mesmo.
Garantir que o sorteio só seja realizado com três ou mais participantes.
Oferecer uma interface simples para cadastro, sorteio e consulta dos participantes.

Durante o desenvolvimento, alguns desafios se destacaram, especialmente:
    • A dificuldade em escrever o código da função que realiza o sorteio (sortearAmigo) de forma correta.
    • A complexidade em garantir que nenhum amigo seja sorteado para si mesmo, exigindo uma lógica de repetição/validação para reembaralhar os nomes ou a adoção de algoritmos específicos.
    • A modificação do HTML para criar um prompt e um botão que permitam a consulta individual do resultado do amigo secreto.
      
Estas soluções foram implementadas utilizando JavaScript puro, com ênfase na manipulação do DOM para criar uma interação dinâmica e intuitiva.

Funcionalidades
Cadastro de Amigos: Permite adicionar nomes de participantes, com validações para evitar entradas inválidas ou duplicadas.
Validação de Número Mínimo: O sorteio só pode ser realizado com três ou mais participantes, garantindo uma experiência justa de amigo secreto.
Sorteio Seguro: Implementação de uma função (sortearAmigo) que realiza o sorteio e, com a ajuda de uma validação/reembaralhamento, impede que um participante seja sorteado para si mesmo.
Consulta Individual: Modificação no HTML permite a criação de um prompt e um botão para consulta do amigo secreto de forma discreta.
Reinicialização Automática: Após o sorteio, a lista de participantes é limpa, possibilitando uma nova rodada.
Desafios e Soluções
Durante o desenvolvimento deste projeto, enfrentei dois desafios principais:

Escrever a Função sortearAmigo:
Foi necessário desenvolver uma lógica que não apenas realizasse um embaralhamento dos participantes, mas também validasse a distribuição dos nomes. A dificuldade maior foi garantir que cada amigo não sorteasse a si mesmo. Para isso, foram utilizadas abordagens que envolvem:

    • A repetição do embaralhamento até que a condição desejada fosse atendida.
    • A opção de utilizar algoritmos como o de Fisher-Yates para assegurar um ciclo único sem repetições.

Impedir que o Amigo Seja Sorteado para Ele Mesmo:
Esse desafio exigiu uma análise cuidadosa dos arrays e das comparações realizadas. Uma verificação foi implementada para garantir que, ao iterar sobre os nomes, nenhum índice corresponda ao próprio nome. Essa validação é crucial para que a mecânica do amigo secreto funcione corretamente, mantendo o elemento surpresa e a integridade do sorteio.




Modificação no HTML
Além disso, foi necessário alterar o HTML para incluir um prompt e um botão que permitam ao usuário consultar o amigo secreto de maneira segura e interativa.

Tecnologias Utilizadas
HTML5: Estrutura básica e elementos de interação (incluindo o prompt e o botão para a consulta).
CSS3: Estilização e responsividade da interface.
JavaScript: Lógica principal do sorteio, manipulação do DOM, validações e controle do fluxo da aplicação.
Como Utilizar
Pré-requisitos
Navegador web moderno (Chrome, Firefox, Edge, etc.).
Editor de texto ou IDE para alterações no código, se necessário.
Passo a Passo
Clone o Repositório:

    • Em seu terminal, execute:
git clone <git@github.com:NadiaGaldencio/Callange-Amigo-Secreto.git>
    • Abra o Projeto:

    • Navegue até o diretório clonado e abra o arquivo index.html em seu navegador.

    • Adicione Participantes:

    • Utilize o campo de cadastro para inserir os nomes dos participantes. Lembre-se de adicionar pelo menos três nomes para que o sorteio possa ser realizado.

    • Realize o Sorteio:

Clique no botão “Sortear” para acionar a função de sorteio, que valida e distribui os nomes garantindo que nenhum participante seja sorteado para si mesmo.




    • Consulta do Amigo Secreto:

Após o sorteio, utilize o prompt e o botão de consulta, adicionados à interface para que cada participante descubra discretamente quem é seu amigo secreto.

    • Nova Rodada:

Com o término do sorteio, a lista de amigos é automaticamente limpa, permitindo iniciar uma nova rodada de sorteios.

Como Contribuir
Contribuições são sempre bem-vindas! Se você deseja melhorar este projeto, siga estas etapas:

Faça um fork deste repositório.
Crie uma branch para suas modificações:
git checkout -b feature/minha-melhoria
Realize suas alterações e realize um commit com as suas mudanças:
git commit -m “Adiciona nova funcionalidade XYZ”
Envie sua branch para o repositório:
git push origin feature/minha-melhoria
Abra um Pull Request explicando detalhadamente suas alterações e melhorias.
Caso tenha sugestões ou encontre algum problema, sinta-se à vontade para abrir uma issue neste repositório.

License
Este projeto está licenciado sob a = opensource.org
. Sinta-se livre para utilizar, modificar e distribuir este código de acordo com os termos da licença.



Contato
Em caso de dúvidas, sugestões ou para mais informações, sinta-se à vontade para entrar em contato:

Nome: Nádia Cristina Da Silva Galdêncio
Email: nadia.c.silva@hotmail.com
GitHub: https://github.com/NadiaGaldencio

Este projeto foi desenvolvido com dedicação e representa um desafio superado no cenário prático da formação ALURA Iniciante em Programação G8 - ONE. Agradeço o interesse no projeto e estou aberto a feedbacks e contribuições para aprimorá-lo ainda mais. Bom sorteio e boa programação!

