# Termo — Galpão ao vivo

Esta atualização usa o mesmo servidor, o sensor no P0 e o LED no P1. Não é necessário alterar ou gravar novamente o código do Micro:bit.

## Instalar no seu projeto atual

1. Faça uma cópia de segurança do seu `app.js`.
2. Extraia `termo-galpao-atualizacao.zip`.
3. Copie os quatro arquivos para a mesma pasta do seu `index.html`: `app.js`, `simulacao.html`, `simulacao.css` e `simulacao.js`. Substitua somente o `app.js` anterior. Ele mantém as funções do painel e acrescenta a comunicação com o galpão.
4. Mantenha seu `index.html`, seu `style.css`, sua pasta `assets` e o código do Micro:bit. Sua logo não precisa ser substituída.
5. No seu `index.html`, coloque este link dentro do `<nav>`, antes de `</nav>`:

```html
<a class="button" href="simulacao.html" target="_blank" rel="noopener">
  ◇ Galpão ao vivo ↗
</a>
```

6. Inicie o Live Server e atualize o painel com Ctrl + Shift + R.
7. Clique em “Galpão ao vivo”. Também pode abrir diretamente `simulacao.html` pelo Live Server.

## Usar na apresentação

- Se o Micro:bit já está conectado no painel, deixe essa aba aberta. O galpão recebe as mesmas medições automaticamente, sem abrir novamente a porta USB.
- As duas páginas precisam estar no mesmo navegador e exatamente no mesmo endereço de servidor: não misture `localhost` com `127.0.0.1` nem portas diferentes.
- Se o painel não está conectado, clique em “Conectar Micro:bit” na própria simulação e escolha a porta.
- Passe o mouse sobre Estoque A ou clique nos botões dos setores para ver os detalhes. Em telas de toque, toque nos setores.
- O Estoque A é o único setor medido. Expedição e Apoio são ilustrativos e aparecem sem sensor.
- Quando o Grove detectar a temperatura de acionamento, o galpão destaca o alerta. O vento começa quando chega a confirmação de que o LED P1 está ligado.
- A umidade aparece como informação, mas não aciona o LED.
- Os limites vêm das configurações do painel. Por padrão: liga em 30 °C e desliga em 27 °C ou menos.
- O botão “Apresentar” simplifica a página e tenta entrar em tela cheia. Pressione Esc para sair.
- Ao desconectar ou ficar mais de 10 segundos sem leitura, o galpão informa ausência de dados e para de representar o LED como confirmado.

## Testar sem hardware

Abra “Sem a maquete? Testar com dados fictícios” e clique em “Iniciar demonstração”. Aumente a temperatura para 31 °C; depois baixe para 27 °C. Os controles fictícios não enviam comandos ao Micro:bit.

Pause a demonstração antes de conectar o sensor real. Não use duas conexões USB ao mesmo tempo. Em outra aba, o galpão recebe dados, mas não interfere nos comandos.

O LED e o vento representam climatização. Eles não resfriam fisicamente a maquete. Mantenha o computador e uma das páginas conectadas abertos para coletar dados. O histórico continua no navegador, como no painel original.
