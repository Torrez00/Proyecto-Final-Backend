var btn = document.getElementById('mostrarTodos');
var $div = $('#resultados')

btn.addEventListener('click',function()
{
    $.getJSON('data-1.json',function(data)
    {
        $div.html('');

        for(var i = 0;i<data["Propiedades"].length;i++)
        {
            $div.append($('<div>'));
            $div.append($('<img height="200px" style="float: left; margin: 10px 10px 10px 10px;" src="img/home.jpg"></img>'));
            $div.append($('<strong><label for="Direccion"></strong>').text("Direccion: "));
            $div.append($('<label ID="Direccion">').text(data["Propiedades"][i]["Direccion"]));
            $div.append($('<br/>'));
            $div.append($('<strong><label for="Ciudad"></strong>').text("Ciudad: "));
            $div.append($('<label ID="Ciudad">').text(data["Propiedades"][i]["Ciudad"]));
            $div.append($('<br/>'));
            $div.append($('<strong><label for="Telefono"></strong>').text("Telefono: "));
            $div.append($('<label ID="Telefono">').text(data["Propiedades"][i]["Telefono"]));
            $div.append($('<br/>'));
            $div.append($('<strong><label for="Codigo"></strong>').text("Codigo Postal: "));
            $div.append($('<label ID="Codigo">').text(data["Propiedades"][i]["Codigo_Postal"]));
            $div.append($('<br/>'));
            $div.append($('<strong><label for="Tipo"></strong>').text("Tipo: "));
            $div.append($('<label ID="Tipo">').text(data["Propiedades"][i]["Tipo"]));
            $div.append($('<br/>'));
            $div.append($('<strong><label for="Precio"></strong>').text("Precio: "));
            $div.append($('<strong><label ID="Precio" style="color: #FF9900;"></strong>').text(data["Propiedades"][i]["Precio"]));
            $div.append($('</div>'));
            $div.append($('<br/>'));
            $div.append($('<br/>'));
            $div.append($('<br/>'));
            $div.append($('<br/>'));
            $div.append($('<br/>'));
      }
  })
});

function submitd(event)
{
    event.preventDefault();

    var $ciudad = $('#selectCiudad');
    var Ciudad = $('form').find('select[id="selectCiudad"]').val()
    var Tipo = $('form').find('select[id="selectTipo"]').val();
    var Precio = $('form').find('input[name="precio"]').val();

    var form_data = new FormData();

    if (Ciudad != "Elige una Ciudad")
    {
      form_data.append('ciudad', Ciudad);
    }
    else
    {
      form_data.append('ciudad',"");
    }

    if (Tipo != "Elige un Tipo")
    {
      form_data.append('tipo', Tipo);
    }
    else
    {
      form_data.append('tipo',"");
    }

    form_data.append('precio', Precio);
    $.ajax({
      url: './Buscador.php',
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: 'post',

      success: function(data)
      {
        $div.html('');
        data = data.substring(0,data.length-1);
        data = '[' + data + ']';
        data = JSON.parse(data)
        for(var i = 0;i<data.length;i++)
        {
          $div.append($('<div>'));
          $div.append($('<img height="200px" style="float: left; margin: 10px 10px 10px 10px;" src="img/home.jpg"></img>'));
          $div.append($('<strong><label for="Direccion"></strong>').text("Direccion: "));
          $div.append($('<label ID="Direccion">').text(data[i]["Direccion"]));
          $div.append($('<br/>'));
          $div.append($('<strong><label for="Ciudad"></strong>').text("Ciudad: "));
          $div.append($('<label ID="Ciudad">').text(data[i]["Ciudad"]));
          $div.append($('<br/>'));
          $div.append($('<strong><label for="Telefono"></strong>').text("Telefono: "));
          $div.append($('<label ID="Telefono">').text(data[i]["Telefono"]));
          $div.append($('<br/>'));
          $div.append($('<strong><label for="Codigo"></strong>').text("Codigo Postal: "));
          $div.append($('<label ID="Codigo">').text(data[i]["Codigo_Postal"]));
          $div.append($('<br/>'));
          $div.append($('<strong><label for="Tipo"></strong>').text("Tipo: "));
          $div.append($('<label ID="Tipo">').text(data[i]["Tipo"]));
          $div.append($('<br/>'));
          $div.append($('<strong><label for="Precio"></strong>').text("Precio: "));
          $div.append($('<strong><label ID="Precio" style="color: #FF9900;"></strong>').text(data[i]["Precio"]));
          $div.append($('</div>'));
          $div.append($('<br/>'));
          $div.append($('<br/>'));
          $div.append($('<br/>'));
          $div.append($('<br/>'));
          $div.append($('<br/>'));
        }
    },
    error: function()
    {
        alert("error in ajax form submission");
    }
  });
}

$(function()
{
      $("#formulario").submit(submitd);
})

/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout)
{
  $(this).scroll(function()
  {
    var $this = $(this);
    if ($this.data('scrollTimeout'))
    {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();
