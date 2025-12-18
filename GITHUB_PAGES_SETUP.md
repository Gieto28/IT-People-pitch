# Configuração do GitHub Pages

Este projeto está configurado para fazer deploy no GitHub Pages.

## Como fazer deploy

### 1. Preparação no GitHub

1. Crie um repositório no GitHub (se ainda não tiver)
2. Configure o repositório para usar GitHub Pages:
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione **gh-pages branch**
   - Salve

### 2. Configurar o repositório local

```bash
# Se ainda não inicializou o git
git init

# Adicione o repositório remoto (substitua USERNAME pelo seu usuário do GitHub)
git remote add origin https://github.com/USERNAME/itpeople.git

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit"

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### 3. Fazer o deploy

```bash
npm run deploy
```

Este comando irá:
1. Fazer o build do projeto (`npm run build`)
2. Fazer deploy para a branch `gh-pages` no GitHub
3. O site estará disponível em: `https://USERNAME.github.io/itpeople`

## Atualizar o homepage no package.json

**IMPORTANTE:** Antes de fazer o deploy, atualize o campo `homepage` no `package.json` com o caminho correto do seu repositório:

```json
"homepage": "https://SEU_USUARIO.github.io/itpeople"
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

## Scripts disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run deploy` - Faz o build e deploy para GitHub Pages

## Notas

- O deploy é feito para a branch `gh-pages`, não para `main`
- Após o deploy, pode levar alguns minutos para o site estar disponível
- Certifique-se de que o repositório está público ou tenha GitHub Pages ativado para repositórios privados

