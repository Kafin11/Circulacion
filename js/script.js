
$("input[type='radio']").click(function () {
    var status = $(this).data("status");
    var name = $(this).prop("name");
    // clear the other checked options of the radio group
    $("#" + name + "-menu input[type='radio']").each(function (index) {
        $(this).data("status", "unchecked");;
    });

    // change of status checked/unchecked
    if (status == undefined || status == "unchecked") {
        $(this).prop("checked", true);
        $(this).data("status", "checked");
    } else {
        $(this).prop("checked", false);
        $(this).data("status", "unchecked");
    }

    updateResult();

});





function updateResult() {

    var placa = $("#placa-menu input[type='radio']:checked").val();
    var vehicle = $("#vehicle-menu input[type='radio']:checked").val();
    var days = ['LUNES ', 'MARTES ', 'MIÉRCOLES ', 'JUEVES ', 'VIERNES ', 'SÁBADO ', 'DOMINGO ']

    pico_domingo = [['0', '2', '4', '6', '8', '1', '3', '5', '7', '9']]
    pico_impar = [['1', '3', '5', '7', '9']]
    pico_par = [['0', '2', '4', '6', '8']]

    for (i = 0; i < 7; i++) {
        if (placa != undefined) {
            if (pico_domingo[i].includes(placa)) {
                
                $(".day #day-6").prop("class", "box_yes");
                $(".day #day-6").html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[6] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon></span>');
           

                            if (placa != undefined) {
                                if (pico_par[i].includes(placa)) {
                                    $(".day #day-1").prop("class", "box_yes");
                                    $(".day #day-1").html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[1] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                                    $(".day #day-3").prop("class", "box_yes");
                                    $(".day #day-3" ).html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[3] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                                    $(".day #day-5").prop("class", "box_yes");
                                    $(".day #day-5" ).html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[5] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                                
                            if(pico_par[i].includes(placa)!=pico_impar){
                                $(".day #day-0" ).prop("class", "box_no");
                                $(".day #day-0" ).html('<span><ion-icon name="walk-sharp"></ion-icon> </i> ' + days[0] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                                $(".day #day-2" ).prop("class", "box_no");
                                $(".day #day-2" ).html('<span><ion-icon name="walk-sharp"></ion-icon> </i> ' + days[2] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                                $(".day #day-4" ).prop("class", "box_no");
                                $(".day #day-4" ).html('<span><ion-icon name="walk-sharp"></ion-icon> </i> ' + days[4] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                            }}
                                
                               
                            

                        }
                        if (placa != undefined) {
                        if (pico_impar[i].includes(placa)) {
                            $(".day #day-0").prop("class", "box_yes");
                            $(".day #day-0").html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[0] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                            $(".day #day-2").prop("class", "box_yes");
                            $(".day #day-2" ).html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[2] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                            $(".day #day-4").prop("class", "box_yes");
                            $(".day #day-4" ).html('<span><ion-icon name="car-sport-sharp"></ion-icon> </i> ' + days[4] + ': Puedes salir <ion-icon name="checkmark-circle"></ion-icon>');
                        
                        if (pico_impar[i].includes(placa)!=pico_par)  {
                        $(".day #day-1" ).prop("class", "box_no");
                        $(".day #day-1" ).html('<span><ion-icon name="walk-sharp"></ion-icon></i> ' + days[1] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                        $(".day #day-3" ).prop("class", "box_no");
                        $(".day #day-3" ).html('<span><ion-icon name="walk-sharp"></ion-icon> </i> ' + days[3] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                        $(".day #day-5" ).prop("class", "box_no");
                        $(".day #day-5" ).html('<span><ion-icon name="walk-sharp"></ion-icon> </i> ' + days[5] + ': No puedes salir en vehículo <ion-icon name="warning"></ion-icon></span>');
                        }}
                        
                    }

        }
    }
}

}
                        




