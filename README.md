# Comando docker

## Comando e flags

### Status

```bash
- docker ps -> Lista os containers ativos
- docker ps -a -> Lista todos os containers
```

### Imagem

```bash
- docker build <diretorio_imagem> .-> Cria imagem a partir de um diretorio
- dockber build -t <nome_imagem>:<versao> . -> Cria imagem a partir de um diretorio, a nomeia e insere uma tag
- docker pull <nome_imagem> -> Baixa imagem
- docker images -> Lista imagens
- docker rmi <nome_imagem> -> Remove imagem
- docker tag <nome_imagem> <nome_imagem>:<versao> -> Adiciona nome e versão a imagem
```

### Run

```bash
- docker run <image_name> -> Cria um container
- docker run -it <image_name> -> Cria um container e inicia o terminal
- docker run -d <image_name> -> Cria um container e o mantém ativo sem ocupar o terminal
- docker run -p <porta_pc>:<porta_container> <image_name>
    -> Cria um container e o abre na porta especificada
```

### Container

```bash
- docker start <container_id/container_name> -> Inicia um container
- docker start -i <container_id/container_name> -> Inicia um container parado e abre o terminal
- docker stop <container_id/container_name> -> Para um container
- docker run --name <container_name> <image_name> -> Cria um container e o nomeia
- docker run --rm <image_name> -> Cria um container e o remove após o término
- docker logs <container_id/container_name> -> Verifica os logs do container
- docker rm <container_id/container_name> -> Remove um container
- docker rm -f <container_id/container_name> -> Remove um container a força
```

## Dockerfile

- FROM -> Imagem base
- WORKDIR -> Diretório da aplicação
- EXPOSE -> Porta da aplicação
- COPY -> Quais arquivos precisam ser copiados

## Utilidades

```bash
docker <command> --help -> Exibe ajuda do comando
docker system prune -> Remove todos os containers e imagens não utilizados
docker cp <container_id>:/<path_arquivo> <path_destino> -> Copia arquivo do container para o host 
docker top <container_id> -> Exibe processos do container
```
