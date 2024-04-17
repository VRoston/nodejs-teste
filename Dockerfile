# Escolha a imagem base
FROM node:14

# Crie o diretório da aplicação no container
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 8081

# Comando para iniciar a aplicação
CMD [ "node", "index.js" ]
