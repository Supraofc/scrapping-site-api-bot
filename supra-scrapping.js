// Fiz esses scrapping deixe meus creditos



function instagram(quero) { //@SupraOfc
    return new Promise((resolve, reject) => { 
    axios.get('https://dumpoir.com/v/' + quero,
     { headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' } }).then((data) => {
     const $ = cheerio.load(data.data) 
       const images = $('div.user__img').attr('style')
        const tirar_1 = images.indexOf("('") + 2;
        const tirar_2 = images.indexOf("')");
        const image = images.substring(tirar_1, tirar_2);
        const nome = $('div.user__title > a > h1').text()
        const nomeusuario = $('div.user__title > h4').text()
        const resu = $('ul.list > li.list__item')
        const posts = $(resu[0]).text();
        const seguir = $(resu[1]).text();
        const seguin = $(resu[2]).text();
        const postagem = posts.match(/\d+/g).join('');
        const seguidores = seguir.match(/\d+/g).join('');
        const seguindo = seguin.match(/\d+/g).join('');
        const descricao = $('div.user__info-desc').text()
        const resultado = {
          image,
          nome,
          nomeusuario,
          postagem,
          seguidores,
          seguindo,
          descricao
        };
        resolve(resultado);
    })
    })
    }


    function ipportas() { //@SupraOfc
        return new Promise((resolve, reject) => {
        axios.get(`https://www.socks-proxy.net/`).then(data => {
       var resposta = []
       const $ = cheerio.load(data.data)
       $('tbody > tr').each((index, supra) => {
         const coluna = $(supra).find('td');
         const ip = $(coluna[0]).text();
         const porta = $(coluna[1]).text();
         const cod = $(coluna[2]).text();
         const pais = $(coluna[3]).text();
       resposta.push({ip , porta , cod, pais})
        })
        var resultado = resposta[Math.floor(Math.random() * resposta.length)] 
       resolve(resultado);
       })
       })
       } 
       
       function gerarapelidos() { //@SupraOfc
        return new Promise((resolve, reject) => { 
       axios.get('https://instausername.com/pt/last-name-generator').then((data) => {
         var resposta = [];
         var ver = [];
         const $ = cheerio.load(data.data);
       
         $('ul.ulist_tags_full > li').each((_, supra) => {
           const nome = $(supra).find('.icn-copy').attr('data-clipboard-text');
           resposta.push(nome);
         });
         const nome1 = resposta[0];
         const nome2 = resposta[1];
         const nome3 = resposta[2];
         const nome4 = resposta[3];
         const nome5 = resposta[4];
         const nome6 = resposta[5];
         const nome7 = resposta[6];
         const nome8 = resposta[7];
         const nome9 = resposta[8];
         const nome10 = resposta[9];
         ver.push({nome1 , nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10})
         resolve(ver);
       }).catch((error) => {
         console.error('Erro ao buscar os dados:', error);
       });
       })
       }
       
       function nomescoreanos() { //@SupraOfc
        return new Promise((resolve, reject) => { 
       axios.get('https://instausername.com/pt/korean-name-generator').then((data) => {
         var resposta = [];
         var ver = [];
         const $ = cheerio.load(data.data);
       
         $('ul.ulist_tags_full > li').each((_, supra) => {
           const nome = $(supra).find('.icn-copy').attr('data-clipboard-text');
           resposta.push(nome);
         });
         const nome1 = resposta[0];
         const nome2 = resposta[1];
         const nome3 = resposta[2];
         const nome4 = resposta[3];
         const nome5 = resposta[4];
         const nome6 = resposta[5];
         const nome7 = resposta[6];
         const nome8 = resposta[7];
         const nome9 = resposta[8];
         const nome10 = resposta[9];
         const nome11 = resposta[10];
         const nome12 = resposta[11];
         const nome13 = resposta[12];
         const nome14 = resposta[13];
         const nome15 = resposta[14];
         ver.push({nome1 , nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10, nome11, nome12, nome13, nome14, nome15})
         resolve(ver);
       
       }).catch((error) => {
         console.error('Erro ao buscar os dados:', error);
       });
       })
       }
       
       
       function gerarpessoas() { //@SupraOfc
           return new Promise((resolve, reject) => {
               axios.get('https://www.invertexto.com/gerador-de-pessoas').then((response) => {
                   const html = response.data;
                   const $ = cheerio.load(html);
                   const secoes = ['DADOS PESSOAIS', 'NASCIMENTO', 'ENDEREÇO', 'ONLINE', 'CARTÃO DE CRÉDITO', 'CARACTERÍSTICAS FÍSICAS'];
                   const resultado = [];
       
                   secoes.forEach((secao) => {
                       const secaoDados = $(`section:has(h2:contains("${secao}"))`);
                       const supraDeEntrada = secaoDados.find('input[type="text"]');
       
                       supraDeEntrada.each((index, element) => {
                          
                           const valor = $(element).val().trim();
                           
                           resultado.push({ valor: valor });
                       });
                   });
       
                   
                   resolve(resultado);
               }).catch((error) => {
                   console.error('Ocorreu um erro ao fazer a requisição:', error);
                   reject(error);
               });
           });
       }


       function videosmeme() { //@SupraOfc
        return new Promise((resolve, reject) => {
        var rads = Math.floor(Math.random() * 52) + 1
        axios.get(`https://melhoresmemes.com/videos?page=${rads}`).then(data=>{
        var resposta = []
        const $ = cheerio.load(data.data)
        $("div > div > div > div.col-6").each((_,supra) => {
        var url = $(supra).find("a").attr("href")
        axios.get(url).then(datas=>{
        const $$ = cheerio.load(datas.data)
        var video = $$("video > source").attr("src")
        var resultado = {
          video : video
        }
        resposta.push(resultado)
        resolve(resposta)
        })
        })
        })
        })
        }