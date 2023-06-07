$(document).ready(function() {
    $("#studentForm").submit(function(e) {
      e.preventDefault(); // Evita o envio do formulário
  
      // Obter os valores dos campos
      var codigo = $("#codigo").val();
      var nome = $("#nome").val();
      var estadoCivil = $("#estadoCivil").val();
      var genero = $("input[name='genero']:checked").val();
      var teste1 = parseFloat($("#teste1").val());
      var teste2 = parseFloat($("#teste2").val());
  
      // Calcular a média dos testes
      var media = (teste1 + teste2) / 2;
  
      // Adicionar os dados à tabela
      var row = $("<tr></tr>");
      $("<td></td>").text(codigo).appendTo(row);
      $("<td></td>").text(nome).appendTo(row);
      $("<td></td>").text(estadoCivil).appendTo(row);
      $("<td></td>").text(teste1).appendTo(row);
      $("<td></td>").text(teste2).appendTo(row);
      $("<td></td>").text(genero).appendTo(row);
      $("<td></td>").text(media.toFixed(2)).appendTo(row);
      $("#studentTable tbody").append(row);
  
     
      $("#codigo").val("");
      $("#nome").val("");
      $("#estadoCivil").val("");
      $("input[name='genero']").prop("checked", false);
      $("#teste1").val("");
      $("#teste2").val("");
    });
  
    $("#cancelButton").click(function() {
      // Limpar os campos do formulário
      $("#codigo").val("");
      $("#nome").val("");
      $("#estadoCivil").val("");
      $("input[name='genero']").prop("checked", false);
      $("#teste1").val("");
      $("#teste2").val("");
    });
  });
  