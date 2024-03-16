$(document).ready(function() {
    $('#Expandir').click(function() {
        $('.TecladoNumerico').animate({
            width: 'toggle'
        }, 1300);
        $('.TecladoNumerico').css({
            display: 'flex'
        })    
    });


    const contatos = [];
    const nums = [];


    let contador = 0;
    let linhas = "";



    $('form').submit(function(adicionar) {
        adicionar.preventDefault();

        adicionarLinha();
        atualizaTabela();
        atualizaTotal();
    })
    
    function adicionarLinha() {
        const nomeContato = document.getElementById('nomeContato');
        const numeroContato = document.getElementById('numeroContato');

        if(contatos.includes(numeroContato.value)) {
            alert('Você não pode ter dois contatos com o mesmo numero');
        } else {
            contatos.push(nomeContato.value);
            nums.push(numeroContato.value);

            let linha = '<tr>';
            linha += `<td> ${nomeContato.value} </td>`;
            linha += `<td> ${numeroContato.value} </td>`;
            linha += '</tr>';

            linhas += linha;
            contador++;
        }
        nomeContato.value = "";
        numeroContato.value = "";
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    function atualizaTotal() {
        document.getElementById('TotalContatos').innerHTML = contador;
    }

});