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
- docker build -t <nome_imagem>:<versao> . -> Cria imagem a partir de um diretorio, a nomeia e insere uma tag
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

### Volume

```bash
- docker volume create <volume_name> -> Cria um volume
- docker volume ls -> Lista os volumes
- docker volume rm <volume_name> -> Remove um volume
- docker volume prune -> Remove todos os volumes não utilizados
- docker create volume <volume_name> -> Cria um volume
- docker run -v <volume_name>:<diretorio_container> <image_name> -> Cria um container e monta um volume
```

### Network

- Externa -> Conexão com uma API de um servidor remoto
- Interna -> Conexão entre containers - utiliza driver bridge e permite a comunicação entre dois ou mais containers
- Host -> Comunicação com a máquina que está executando o container

- Drivers
  - bridge -> Rede padrão do docker (default)
  - host -> Rede da máquina que está executando o container
  - macvlan -> Rede com endereço MAC
  - nove -> remove todas conexões de rede de um container
  - plugins -> permite extensões de terceiros para criar outras redes

```bash
    - docker network ls -> Lista as redes
    - docker network create <network_name> -> Cria uma rede
    - docker network create -d <driver_name> <network_name> -> Cria uma rede com um driver específico
    - docker network rm <network_name> -> Remove uma rede
    - docker network prune -> Remove todas as redes não utilizadas
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
docker stats -> Exibe estatísticas dos containers
docker inspect <container_id> -> Exibe informações do container
```
