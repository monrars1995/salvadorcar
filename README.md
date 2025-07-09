# Salvador Car - Landing Page

Landing page moderna e responsiva para a concessionária Salvador Car, especializada em veículos Mitsubishi Eclipse Cross.

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático via GitHub

1. **Crie um repositório no GitHub:**
   - Acesse [GitHub](https://github.com) e crie um novo repositório
   - Faça upload de todos os arquivos do projeto

2. **Conecte com a Vercel:**
   - Acesse [Vercel](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - A Vercel detectará automaticamente as configurações

### Opção 2: Deploy Manual via CLI

1. **Instale a Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Faça login na Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy do projeto:**
   ```bash
   vercel
   ```

4. **Deploy para produção:**
   ```bash
   vercel --prod
   ```

### Opção 3: Deploy via Interface Web

1. Acesse [Vercel](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Browse All Templates"
4. Faça upload da pasta do projeto
5. Configure o domínio personalizado (opcional)

## 📁 Estrutura do Projeto

```
salvador-car/
├── index-short.html          # Página principal otimizada
├── vercel.json              # Configurações da Vercel
├── package.json             # Dependências e scripts
├── README.md                # Documentação
├── logo_webp_comprar-salvador-car_f135245f55.png.webp  # Logo
├── 8197.png                 # Imagem de background Hero/Contact
├── 8198.png                 # Imagem de background Benefits
└── bgcar.webp               # Imagem de backup
```

## ⚙️ Configurações

### Domínio Personalizado

1. No painel da Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

### Variáveis de Ambiente

Se necessário, adicione variáveis de ambiente no painel da Vercel:
- `CONTACT_EMAIL`: Email para recebimento de leads
- `WHATSAPP_NUMBER`: Número do WhatsApp
- `ANALYTICS_ID`: ID do Google Analytics

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor local
npm run dev

# Acessar em http://localhost:8000
```

## 📱 Recursos da Landing Page

- ✅ Design responsivo e moderno
- ✅ Otimizada para SEO
- ✅ Formulário de captura de leads
- ✅ Integração com WhatsApp
- ✅ Animações e efeitos visuais
- ✅ Performance otimizada
- ✅ Segurança implementada

## 🔧 Personalização

### Alterar Informações de Contato

Edite o arquivo `index-short.html` e procure por:
- Telefone: `(71) 3025-8844`
- WhatsApp: `(71) 99999-9999`
- Endereço: `Av. Barros Reis, 44 - Retiro, Salvador - BA, 41150-200`

### Alterar Cores e Estilos

As cores principais estão definidas nas classes CSS:
- Vermelho principal: `red-600`, `red-700`
- Gradientes: `from-red-600 to-red-700`
- Backgrounds: Classes `bg-` do Tailwind CSS

## 📊 Analytics e Monitoramento

Para adicionar Google Analytics:

1. Adicione o script no `<head>` do HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Performance

- Imagens otimizadas em WebP
- CSS minificado via Tailwind
- JavaScript otimizado
- Cache configurado via Vercel
- Lazy loading implementado

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto:
- Email: suporte@salvadorcar.com.br
- WhatsApp: (71) 99999-9999

---

**Desenvolvido para Salvador Car** 🚗
*Sua concessionária Mitsubishi de confiança em Salvador*