# Usando Userops
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/marciogsantana/Account_Abstraction/blob/master/LICENSE) 

# Sobre o projeto
Account Abstraction (abstração de conta) é uma técnica usada em blockchain que separa a identidade do usuário do mecanismo de pagamento subjacente. Essa abstração traz várias vantagens, incluindo maior privacidade e segurança. Ao separar a identidade, os usuários podem realizar transações sem revelar detalhes confidenciais, como saldo da conta ou histórico de transações. Além disso, a abstração de conta permite que diferentes mecanismos de pagamento sejam usados ​​em uma única conta, tornando os pagamentos mais flexíveis e interoperáveis. Essa flexibilidade abre caminho para inovação, permitindo o desenvolvimento de novos modelos de negócios e casos de uso em blockchain.

### Gerar smarts accounts

Este projeto usa o SimpleAccountFactory.sol como uma fábrica de contratos que implementa o SimpleAccountFactory.sol, podemos fazer nossa lógica e alterações apenas no SimpleAccountFactory.sol


### Funcionamento
![Esquema](https://github.com/marciogsantana/imagens/blob/main/esquema_funcionamento.png) 

1- Este contrato implementa o User Operations O SDK da Stackup implementa o restante e retorna a account abstraction que podemos usar normalmente como uma conta EOA


# Tecnologias utilizadas
## Back end
- Javascript
- NodeJs
- Solidity
- Hardhat
- Alchemy
- SDK da Stackup
- Redes de testes Polygon Munbai

## Iniciar o projeto

# clonar repositório
git clone https://github.com/marciogsantana/Account_Abstraction

```bash

# alterar o arqvuivo .env
inserir as chaves para autenticação

# Na raiz do projeto

# instalar dependências
npm install

# fazer deploy do contrato na rede de testes Polygon Munbai

1- npx hardhat run scripts/sample-script.js --network mumbai
2- copiar o endereço do contrato retornado no console este contrato será o entryPoint
3- baixar o SDK da Stackup e seguir o passo a passo para instalação das dependencias 
(link para pagina: https://docs.stackup.sh/docs/account-abstraction)
4- alterar o config  json:
{
  "rpcUrl": "https://api.stackup.sh/v1/node/5dd195124bdfce2250aeedae51ed5c20baddef73cf9b2ff663051cc0f65d7f2b", // padrão SDK
  "signingKey": "INFORMAR A CHAVE PRIVADA DA CONTA EOA ESTA CONTA QUE SERÁ USADA PARA ASSINAR PELAS SMARTS ACCOUNTS",
  "entryPoint": "INFORMAR O ENDEREÇO DO PASSO 2",
  "simpleAccountFactory": "0xD09CC9Cf976FFC5C933C9E4ad480D42332c747f1", // padrão SDK
  "paymaster": {
    "rpcUrl": "https://api.stackup.sh/v1/paymaster/5dd195124bdfce2250aeedae51ed5c20baddef73cf9b2ff663051cc0f65d7f2b", // padrão SDK
    "context": {}
    
  }
}
5- No SDK executar os comandos:

5.1 yarn run simpleAccount address   // para gerar a Smart Account
5.2 yarn run simpleAccount transfer --to (informar uma conta normal )--amount 0.1  
# neste exemplo estamos transferindo 0.1 Matic falcet da smart account para uma conta normal EOA


# Autor

Márcio Gomes de Santana

https://www.linkedin.com/in/marcio-gomes-de-santana-05347198/
