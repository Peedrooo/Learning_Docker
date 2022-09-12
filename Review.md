# Comando docker

## Comando e flags

### Status

- docker ps -> Lista os containers ativos
- docker ps -a -> Lista todos os containers

### Criando imagem

- docker build <diretorio_imagem> -> Cria imagem a partir de um diretorio

### Run

- docker run <image_name> -> Cria um container
- docker run -it <image_name> -> Cria um container e inicia o terminal
- docker run -d <image_name> -> Cria um container e o mantém ativo sem ocupar o terminal
- docker run -p <porta_pc>:<porta_container> <image_name> -> Cria um container e o abre na porta especificada

### Stop

- docker stop <container_id/container_name> -> Para um container

### Inciando o container

- docker start <container_id/container_name> -> Inicia um container

### Nomeando o container

- docker run --name <container_name> <image_name> -> Cria um container e o nomeia

### Verificando logs de um container

- docker logs <container_id/container_name> -> Verifica os logs do container

### Removendo um container

- docker -rm <container_id/container_name> -> Remove um container
- docker -rm <container_id/container_name> -f -> Remove um container a força

## Dockerfile

- FROM -> Imagem base
- WORKDIR -> Diretório da aplicação
- EXPOSE -> Porta da aplicação
- COPY -> Quais arquivos precisam ser copiados
