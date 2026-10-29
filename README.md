# Surpresa de revelação — Aurora

Experiência web cinematográfica para revelar que o bebê será uma menina chamada Aurora. O quiz é só uma brincadeira: o resultado é sempre o mesmo.

## Como executar localmente

1. Instale o [Node.js](https://nodejs.org/) (LTS).
2. No terminal, dentro desta pasta:

```bash
npm install
npm run dev
```

3. Abra o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Como colocar o vídeo e a música

Coloque os arquivos na pasta `public` com exatamente estes nomes:

- `public/ultrassom.mp4` — vídeo do ultrassom (fundo em tela cheia, em loop, sem áudio)
- `public/musica.mp3` — música instrumental de fundo

Enquanto esses arquivos não existirem, a experiência continua funcionando: o fundo vira um degradê elegante e o controle de som some se a música não estiver disponível.

A música só tenta tocar depois da primeira interação (o botão **Começar essa surpresa**). O volume começa baixo e pode ser ligado ou desligado pelo botão discreto no canto da tela.

## Como publicar de graça e compartilhar no WhatsApp

A forma mais simples é o [Netlify Drop](https://app.netlify.com/drop):

1. Rode `npm run build`.
2. Arraste a pasta `dist` para o Netlify Drop.
3. Copie o link gerado e envie no WhatsApp.

Outras opções gratuitas:

- [Vercel](https://vercel.com): importe o repositório ou use `npx vercel`.
- [Cloudflare Pages](https://pages.cloudflare.com): comando de build `npm run build`, pasta de saída `dist`.
- [GitHub Pages](https://pages.github.com): publique a pasta `dist` (se o site não ficar na raiz do domínio, ajuste `base` em `vite.config.ts`).

Depois de publicar, teste o link no celular antes de enviar para a família.
