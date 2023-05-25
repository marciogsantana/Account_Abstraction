# Usando Userops
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/marciogsantana/Account_Abstraction/blob/master/LICENSE) 

# Sobre o projeto
O ERC-4337 e a abstração de contas trazem diversas vantagens para os usuários, proporcionando uma experiência agradável e simplificada. O ERC4337 é um padrão de token que permite a interoperabilidade entre diferentes blockchains, facilitando a transferência de ativos digitais de forma rápida e segura. Com a abstração de conta, os usuários podem desfrutar de uma experiência mais amigável, eliminando a necessidade de gerenciar múltiplas chaves privadas e endereços em diferentes blockchains. Isso simplifica significativamente o processo de interação com aplicativos descentralizados (dApps) e facilita o uso de recursos em diferentes plataformas blockchain, tornando a experiência do usuário mais intuitiva e acessível.
### Gerar smarts accounts

Este projeto usa o SimpleAccountFactory.sol como uma fábrica de contratos que implementa o SimpleAccountFactory.sol, podemos fazer nossa lógica e alterações apenas no SimpleAccountFactory.sol


### Funcionamento
![Esquema](https://github.com/marciogsantana/imagens/blob/main/esquema_funcionamento.png) 

1- Este contrato implementa o User Operations. O SDK da Stackup implementa o restante e retorna a account abstraction que podemos usar normalmente como uma conta EOA


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

# alterar o arquivo .env
inserir as chaves para autenticação

# Na raiz do projeto

# instalar dependências
npm install

# fazer deploy do contrato na rede de testes Polygon Munbai

1- npx hardhat run scripts/sample-script.js --network mumbai
2- copiar o endereço do contrato retornado no console este contrato sera usado como referencia para este SDK
3- baixar o SDK da Stackup e seguir o passo a passo para instalação das dependencias 
(link para pagina: https://docs.stackup.sh/docs/account-abstraction)
4- alterar o config  json:
{
  "rpcUrl": "https://api.stackup.sh/v1/node/5dd195124bdfce2250aeedae51ed5c20baddef73cf9b2ff663051cc0f65d7f2b", // padrão SDK
  "signingKey": "INFORMAR A CHAVE PRIVADA DA CONTA EOA ESTA CONTA QUE SERÁ USADA PARA ASSINAR PELAS SMARTS ACCOUNTS",
  "entryPoint": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // padrão SDK
  "simpleAccountFactory": "INFORMAR O ENDEREÇO DO PASSO 2", 
  "paymaster": {
    "rpcUrl": "https://api.stackup.sh/v1/paymaster/5dd195124bdfce2250aeedae51ed5c20baddef73cf9b2ff663051cc0f65d7f2b", // padrão SDK
    "context": {}
    
  }
}
5- No SDK executar os comandos:

5.1 yarn run simpleAccount address   // para gerar a Smart Account
5.2 Impotar Matic Faucets para a smart account  
5.3 yarn run simpleAccount transfer --to (informar uma conta normal )--amount 0.1  
# neste exemplo estamos transferindo 0.1 Matic falcet da smart account para uma conta normal EOA


# Autor

Márcio Gomes de Santana

https://www.linkedin.com/in/marcio-gomes-de-santana-05347198/
