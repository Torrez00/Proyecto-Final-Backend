<?php
          $ciudad = $_POST["ciudad"];
          $tipo = $_POST["tipo"];
          $precio = $_POST["precio"];

          $data = file_get_contents("data-1.json");

          if (($ciudad == "") && ($tipo == ""))
                regresa_propiedades("","",$precio);
          elseif (($ciudad != "") && ($tipo == ""))
                      regresa_propiedades($ciudad,"",$precio);
          elseif (($ciudad == "") && ($tipo != ""))
                      regresa_propiedades("",$tipo,$precio);
          else
                regresa_propiedades($ciudad,$tipo,$precio);

function regresa_propiedades($ciudads,$tipos,$precios)
{
      $data = file_get_contents("data-1.json");
      $rprecio = explode(";",$precios);

      $preciomin = $rprecio[0];
      $preciomax = $rprecio[1];
      $propiedades = json_decode(($data));
      $arrPropiedades = array();

      foreach($propiedades->propiedades as $propiedad)
      {
        if($ciudads != "" && $tipos != "")
            if(($propiedad->Ciudad == $ciudads) && ($propiedad->Tipo == $tipos))
                if(str_replace(",","",substr($propiedad->Precio,1)) >= $preciomin && str_replace(",","",substr($propiedad->Precio,1)) <= $preciomax)
                    echo "{",'"Id"',":",$propiedad->Id,',"Direccion"',':','"',$propiedad->Direccion,'"',',"Ciudad"',':','"',$propiedad->Ciudad,'"',',"Telefono"',':','"',$propiedad->Telefono,'"',',"Codigo Postal"',':','"',$propiedad->Codigo_Postal,'"',',"Tipo"',':','"',$propiedad->Tipo,'"',',"Precio"',':','"',$propiedad->Precio,'"',"},";
                      if($ciudads != "" && $tipos == "")
                          if(($propiedad->Ciudad == $ciudads))
                              if(str_replace(",","",substr($propiedad->Precio,1)) >= $preciomin && str_replace(",","",substr($propiedad->Precio,1)) <= $preciomax)
                                  echo "{",'"Id"',":",$propiedad->Id,',"Direccion"',':','"',$propiedad->Direccion,'"',',"Ciudad"',':','"',$propiedad->Ciudad,'"',',"Telefono"',':','"',$propiedad->Telefono,'"',',"Codigo_Postal"',':','"',$propiedad->Codigo_Postal,'"',',"Tipo"',':','"',$propiedad->Tipo,'"',',"Precio"',':','"',$propiedad->Precio,'"',"},";
                                  if($ciudads == "" && $tipos != "")
                                      if(($propiedad->Tipo == $tipos))
                                          if(str_replace(",","",substr($propiedad->Precio,1)) >= $preciomin && str_replace(",","",substr($propiedad->Precio,1)) <= $preciomax)
                                              echo "{",'"Id"',":",$propiedad->Id,',"Direccion"',':','"',$propiedad->Direccion,'"',',"Ciudad"',':','"',$propiedad->Ciudad,'"',',"Telefono"',':','"',$propiedad->Telefono,'"',',"Codigo_Postal"',':','"',$propiedad->Codigo_Postal,'"',',"Tipo"',':','"',$propiedad->Tipo,'"',',"Precio"',':','"',$propiedad->Precio,'"',"},";
                                              if($ciudads == "" && $tipos == "")
                                                  if(str_replace(",","",substr($propiedad->Precio,1)) >= $preciomin && str_replace(",","",substr($propiedad->Precio,1)) <= $preciomax)
                                                      echo "{",'"Id"',":",$propiedad->Id,',"Direccion"',':','"',$propiedad->Direccion,'"',',"Ciudad"',':','"',$propiedad->Ciudad,'"',',"Telefono"',':','"',$propiedad->Telefono,'"',',"Codigo_Postal"',':','"',$propiedad->Codigo_Postal,'"',',"Tipo"',':','"',$propiedad->Tipo,'"',',"Precio"',':','"',$propiedad->Precio,'"',"},";
        }
}
?>
