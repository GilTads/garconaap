$('.collection').on('click', '.collection-item', function(){
     
   var $badge = $('.badge', this);
    
    if($badge.length === 0){
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }
    
    $badge.text(parseInt($badge.text()) + 1);
    
    var nomeProduto = this.firstChild.textContent;
    Materialize.toast(nomeProduto + ' adicionado', 2000);
});

//Inicializa o plugin de modal do materialize
$('.modal-trigger').leanModal();





$('#confirmar').on('click', function(){
    var texto = '';
    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });
    
    $('#resumo').empty().text(texto)
});
    
    


$('.collection').on('click', '.badge', function(){
    $(this).remove();
    return false;
});

$('.limpar').on('click', function(){
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 5, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
});

