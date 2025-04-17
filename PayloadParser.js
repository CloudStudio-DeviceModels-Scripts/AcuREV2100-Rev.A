function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        //env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------

        //variables SW PLANTA BASE AGUA AGITADORES ABAJO
        var cor1 = device.endpoints.byAddress(1);
        var cor2 = device.endpoints.byAddress(2);
        var cor3 = device.endpoints.byAddress(3);
        var cor4 = device.endpoints.byAddress(4);
        var cor5 = device.endpoints.byAddress(5);

        //var tiempoUnix = jsonPayload.timestamp;
        //var fecha = new Date(tiempoUnix * 1000);
        //var timestamp = fecha.toISOString();
        //env.log("LA FECHA ES ----->   ",tiempoUnix);

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT SW AGITADORES ACUREV PLAMTA BASE AGUA  SCRIPT SW AGITADORES ACUREV PLAMTA BASE AGUA  SCRIPT SW AGITADORES ACUREV PLAMTA BASE AGUA  

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "Agitadores"){
    
            var data = jsonPayload;
            env.log("Valor  --> ",data);
            if( data.s1 != null){
                if(data.s1>0){
                       cor1.updateGenericSensorStatus(1);
                       env.log("Valor  --> ",data.s1);
                }
                else
                cor1.updateGenericSensorStatus(0);
                       env.log("Valor  --> ",data.s1);

                    
            }
            if( data.s2 != null){
                if(data.s2>0){
                       cor2.updateGenericSensorStatus(1);
                       env.log("Valor  --> ",data.s2);
                }
                else
                cor2.updateGenericSensorStatus(0);
                       env.log("Valor  --> ",data.s2);
                

                    
            }
            if( data.s3 != null){
                if(data.s3>0){
                       cor3.updateGenericSensorStatus(1);
                       env.log("Valor  --> ",data.s3);
                }
                else
                cor3.updateGenericSensorStatus(0);
                       env.log("Valor  --> ",data.s3);

                    
            }
            if( data.s7 != null){
                if(data.s7>0){
                       cor4.updateGenericSensorStatus(1);
                       env.log("Valor  --> ",data.s7);
                }
                else
                cor4.updateGenericSensorStatus(0);
                       env.log("Valor  --> ",data.s7);

                    
            }
            if( data.s9 != null){
                if(data.s9>0){
                       cor5.updateGenericSensorStatus(1);
                       env.log("Valor  --> ",data.s9);
                }
                else
                cor5.updateGenericSensorStatus(0);
                       env.log("Valor  --> ",data.s9);

                    
            }
                   
             
                                                         
   }
 
}
