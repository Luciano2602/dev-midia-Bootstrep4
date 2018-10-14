$(function(){
    
    //aula 26
    
    //backdrop=false, não altera o fundo da pagina
    //keyboard=false, não permite fechar a janela com a tecla ESC
    $("#modal01").modal({backdrop:false, keyboard:false});
    //fazendo com que o modal abra no inicializacao da pagina
        
    $("#modal01").modal("show");
    
    //depois de aberta, deixamos 3 segundus o e proprio js fecha o modal
    
    setTimeout(function(){
        
        $("#modal01").modal("hide");
    
    }, 3000);
    
    // fim aula 26
    
    //aula 28
    
    $(".ttp").tooltip({
        //animation sem efeito    
        animation:false,
        //abre(show) em 1 seg , (hide)fecha apos 5 seg
        delay:{show:1000, hide: 5000},
        //onde não tiver titulo, ele escreve em algum que nao tiver 
        title: "Titulo padrao",
        //disparando a msg apos o click
        trigger : 'click'
        
    });
    
    $(".ppv").popover({        
        title : "titulo do popover",
        trigger: "hover focus"
    });
    
    // fim aula 28
    
    //aula 29
    
    $(".btnjs").button();
    
    $("#troca-estado").click(function(){
        var btn = $(this);
        btn.button("loading");
        
        setTimeout(function(){
            btn.button("reset");
        }, 3000)
        
    });
    
    
    //fim 29  
    
    
    
});