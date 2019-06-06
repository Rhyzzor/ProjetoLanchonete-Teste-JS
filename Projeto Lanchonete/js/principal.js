$(document).on("click", "#botaoXBurguer", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> X-Burguer </td> <td class='valor'> " + $("#botaoXBurguer").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoXSalada", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> X-Salada </td> <td class='valor'> " + $("#botaoXSalada").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoXEgg", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> X-Egg </td> <td class='valor'> " + $("#botaoXEgg").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoXTudo", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> X-Tudo </td> <td class='valor'> " + $("#botaoXTudo").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoBauru", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Bauru </td> <td class='valor'> " + $("#botaoBauru").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})
$(document).on("click", "#botaoMisto", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Misto </td> <td class='valor'> " + $("#botaoMisto").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoAgua", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Água </td> <td class='valor'> " + $("#botaoAgua").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoSuco", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Suco Natural </td> <td class='valor'> " + $("#botaoSuco").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoCocaCola", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Coca Cola </td> <td class='valor'> " + $("#botaoCocaCola").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoTubaina", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Tubaina </td> <td class='valor'> " + $("#botaoTubaina").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoPepsi", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Pepsi </td> <td class='valor'> " + $("#botaoPepsi").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#botaoDolly", function(){
  var produto = $("#tabelaProduto").html();
  produto += "<tr> <td> Dolly </td> <td class='valor'> " + $("#botaoDolly").val() + ",00</td> </tr>";
  $("#tabelaProduto").html(produto);
})

$(document).on("click", "#calcular", function(){
  var total = 0;
  $(".valor").each(function(index,element){

      total += parseFloat($(element).text());
  })
  $("#resultado").text(total)
})
