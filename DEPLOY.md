# Guia de Deploy - GitHub & Vercel

## 📋 Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com)
- Git instalado

## 1️⃣ Preparar GitHub

### Criar repositório no GitHub
1. Acesse https://github.com/new
2. Preencha:
   - **Repository name**: `alcino-landing` (ou seu nome preferido)
   - **Description**: Landing page do Alcino
   - **Visibility**: Public (recomendado para portfólio)
   - **Initialize repository**: Deixe desmarcado
3. Clique em "Create repository"

### Conectar repositório local ao GitHub

```bash
# Adicione o repositório remoto (substitua seu-usuario/seu-repo)
git remote add origin https://github.com/seu-usuario/alcino-landing.git

# Renomeie a branch principal se necessário
git branch -M main

# Faça o primeiro push
git push -u origin main
```

## 2️⃣ Deploy no Vercel

### Opção A: Via Dashboard (Recomendado)
1. Acesse https://vercel.com
2. Clique em "Add New..." → "Project"
3. Selecione "Import Git Repository"
4. Conecte sua conta GitHub (autorize o acesso)
5. Selecione o repositório `alcino-landing`
6. Configure:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
7. Clique em "Deploy"

### Opção B: Via CLI
```bash
# Instale Vercel CLI globalmente
npm i -g vercel

# Faça deploy
vercel

# Para deployments subsequentes
vercel --prod
```

## 3️⃣ Configurações Importantes

### Variáveis de Ambiente
Se precisar de variáveis de ambiente:

1. No Vercel Dashboard:
   - Projeto → Settings → Environment Variables
   - Adicione as variáveis necessárias

2. Localmente:
   - Copie `.env.local.example` para `.env.local`
   - Preencha os valores

### Domínio Personalizado
1. No Vercel Dashboard → Projeto → Settings → Domains
2. Clique "Add Domain"
3. Digite seu domínio
4. Siga as instruções de DNS

## 4️⃣ Fluxo de Desenvolvimento

```bash
# Após fazer mudanças:
git add .
git commit -m "Descrição das mudanças"
git push origin main

# Vercel detectará automaticamente o push e iniciará o deploy
```

## 📊 Status dos Deploys
- Dashboard Vercel: https://vercel.com/dashboard
- GitHub Releases: https://github.com/seu-usuario/alcino-landing/releases

## 🔗 Links Úteis
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Vercel](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)

## ⚙️ Troubleshooting

**Build falha?**
- Verifique logs no Vercel: Projeto → Deployments → clique no deploy com erro

**Variáveis de ambiente não funcionam?**
- Certifique-se de que está usando `NEXT_PUBLIC_` para variáveis do cliente
- Redeploy após adicionar variáveis

**Site não atualiza após push?**
- Aguarde o deploy completar (você receberá notificação)
- Limpe cache do navegador (Ctrl+Shift+Delete)
