// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! ' + name.split ( " " ) [ 0 ] + ' Eu me chamo Jônatas Bruno e sou representante do Short Cinta Modelador É um prazer falar com você. Hoje eu quero te apresentar o Short Cinta Modelador Redutor de Medidas, um produto incrível para quem busca conforto, modelagem do corpo e praticidade no dia a dia. Deixa eu te contar um pouco mais sobre ele! O short modelador comprime suavemente a região abdominal, cintura e quadris, proporcionando uma silhueta mais delineada, no momento que você veste o design sem costuras visíveis permite que você o use por baixo de qualquer roupa Além de modelar ele oferece suporte para a região lombar, ajudando na postura e evitando desconfortos. \nAgora escreva seu nome completo e em seguida escolha o tamanho do shorte que você deseja, temos eles no tamanho, ( por favor escreva seu nome e o tamanho do seu short em linhas separadas para que nao haja nenhum mal entendido ) P-M-G-GG.: \n\nP.\nM.\nG.\nGG \nEm ate 12x de 13,36. Enviamos para todo o Brasil.'); 
        
    }




    if (msg.body !== null && msg.body === 'P' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=pladqjp4&ck=che09eg0&af=afizjenpx6');

      

    }


    if (msg.body !== null && msg.body === 'p' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=pladqjp4&ck=che09eg0&af=afizjenpx6');

      

    }

    if (msg.body !== null && msg.body === 'M' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=pladqjp4&ck=che09eg0&af=afizjenpx6');





        
    }

    if (msg.body !== null && msg.body === 'm' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=pladqjp4&ck=che09eg0&af=afizjenpx6');





        
    }

     
    if (msg.body !== null && msg.body === 'G' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=plajgkxo&ck=che09eg0&af=afizjenpx6');





    
    }


    if (msg.body !== null && msg.body === 'g' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=plajgkxo&ck=che09eg0&af=afizjenpx6');





    
    }


    if (msg.body !== null && msg.body === 'GG' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=plajgkxo&ck=che09eg0&af=afizjenpx6');





    
    }

    if (msg.body !== null && msg.body === 'Gg' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=plajgkxo&ck=che09eg0&af=afizjenpx6');





    
    }

    if (msg.body !== null && msg.body === 'gg' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'https://ev.braip.com/ref?pl=plajgkxo&ck=che09eg0&af=afizjenpx6');





    
    }







});