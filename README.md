# 🎮 Fábrica de Jogos

Este repositório contém a aplicação web e as configurações de deploy automatizado para a **Fábrica de Jogos**.

## Como Rodar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/FabSoftwareVideira/fabrica-games.git
cd fabrica-games
```

2. **Suba o container:**
```bash
docker compose up
```

5. **Acesse:** Abra o navegador em `http://localhost:8080`.

## Fluxo de Deploy (CI/CD)

O deploy é totalmente automatizado via GitHub Actions. Sempre que um código é enviado para a branch `main`, o workflow de deploy é acionado, garantindo que a última versão esteja sempre disponível em produção.

## Como Colaborar

1. **Crie uma Branch:** Nunca envie alterações direto para a `main`.
```bash
git checkout -b feature/minha-melhoria
```

2. Quando terminar, abra um Pull Request para revisão.
```bash
git push origin feature/minha-melhoria
```

## Como Colaborar (direto na `main`)

> **Atenção:** Enviar código direto para a `main` pode quebrar o deploy. Use esta opção apenas para correções urgentes.

1. Faça as alterações diretamente na `main`.
```bash
git checkout main
# Faça suas alterações
git add .
git commit -m "Mensagem de Commit"
git push origin main
```

**Desenvolvido pela Fábrica de Software - IFC Videira**