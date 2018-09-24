Schemas = {};

Template.registerHelper("Schemas", Schemas);

Template.registerHelper('formatDate', function () {
    return moment().format('DD.MM.YY');
});

Template.registerHelper('formatHour', function () {
    return moment().format('HH:mm');
});

Template.registerHelper('getCoste', function () {
    var costeBono = Session.get('costeabono');
    return costeBono;
});

Template.registerHelper('getCard', function () {
    var lastCard = Session.get('credito');
    return lastCard;
});

Template.bonos.helpers({
    nombrecompleto: function(){
        var sunombre = bonosform.getFieldValue(nombre);
    }
});


SimpleSchema.messages({
    "invalid-card": "Número de tarjeta no válido",
    "devo-anterior":"Fecha de devolución anterior a Fecha de Recogida",
});

Schemas.BonoReserva = new SimpleSchema({
    hotel: {
        type: String,
        label: "Nombre de Hotel o Agencia"
    },

    ciudad: {
        type: String,
        label: "Ciudad"
    },

    emailhotel: {
        type: String,
        label: "Email de Hotel o Agencia"
    },

    nombre: {
        type: String,
        label: "Nombre Conductor"
    },

    apellidos: {
        type: String,
        label: "Apellidos"
    },

    email: {
        type: String,
        label: "eMail"
    },

    telefono: {
        type: String,
        label: "Telefono"
    },

    tipocoche: {
        type: String,
        label: "Tipo de Coche",
        autoform: {
            defaultValue: "A",
            options: function(){
                return [
                    {label: "A", value: "A"},
                    {label: "B", value: "B"},
                    {label: "C", value: "C"},
                    {label: "E", value: "E"},
                    {label: "F", value: "F"},
                    {label: "G", value: "G"},
                    {label: "H", value: "H"},
                    {label: "I", value: "I"},
                    {label: "J", value: "J"},
                    {label: "K", value: "K"},
                    {label: "L", value: "L"},
                    {label: "Transfer", value: "Transfer"},
                    {label: "Furgonetas", value: "Furgonetas"}
                ];
            }
        }
    },

    tarifa: {
        type: String,
        label: "Tarifa",
        autoform: {
            defaultValue: "Ampliada",
            options: function(){
                return [
                    {label: "Básica", value: "Básica"},
                    {label: "Ampliada", value: "Ampliada"}
                ];
            }
        }
    },

    recolugar: {
        type: String,
        label: "Lugar"
    },

    recofecha:{
        type: Date,
        autoform: {
            defaultValue: function(){
                return new Date;
            },

            afFieldInput: {
                type: "datetime-local"
            }
        }
    },

    recohora:{
        type: String,
        label: "Hora",
        autoform: {
            defaultValue: "08",
            options: function(){
                return [
                    {label: "01", value: "01"},
                    {label: "02", value: "02"},
                    {label: "03", value: "03"},
                    {label: "04", value: "04"},
                    {label: "05", value: "05"},
                    {label: "06", value: "06"},
                    {label: "07", value: "07"},
                    {label: "08", value: "08"},
                    {label: "09", value: "09"},
                    {label: "10", value: "10"},
                    {label: "11", value: "11"},
                    {label: "12", value: "12"},
                    {label: "13", value: "13"},
                    {label: "14", value: "14"},
                    {label: "15", value: "15"},
                    {label: "16", value: "16"},
                    {label: "17", value: "17"},
                    {label: "18", value: "18"},
                    {label: "19", value: "19"},
                    {label: "20", value: "20"},
                    {label: "21", value: "21"},
                    {label: "22", value: "22"},
                    {label: "23", value: "23"},
                    {label: "24", value: "24"}
                ];
            }
        }
    },

    recomin:{
        type: String,
        label: "Min",
        autoform: {
            defaultValue: ":00",
            options: function(){
                return [
                    {label: ":00", value: ":00"},
                    {label: ":15", value: ":15"},
                    {label: ":30", value: ":30"},
                    {label: ":45", value: ":45"}
                ];
            }
        }
    },

    devolugar: {
        type: String,
        label: "Lugar",
        optional: true
    },

    devofecha:{
        type: Date,
        autoform: {
            defaultValue: function(){
                return new Date;
            },
            afFieldInput: {
                type: "datetime-local"
            }
        },
        custom: function(){
            var tempreco = moment($('input[data-schema-key="recofecha"]').val());
            var tempdevo = moment($('input[data-schema-key="devofecha"]').val());
            var getMessageDevo = $('#error-fecha-devo');
            if(tempreco.isAfter(tempdevo)){

              getMessageDevo.addClass('message-shaked');
              return "devo-anterior";
            }
            else {
              getMessageDevo.removeClass('message-shaked');
            }
        }
    },

    devohora:{
        type: String,
        label: "Hora",
        autoform: {
            defaultValue: "08",
            options: function(){
                return [
                    {label: "01", value: "01"},
                    {label: "02", value: "02"},
                    {label: "03", value: "03"},
                    {label: "04", value: "04"},
                    {label: "05", value: "05"},
                    {label: "06", value: "06"},
                    {label: "07", value: "07"},
                    {label: "08", value: "08"},
                    {label: "09", value: "09"},
                    {label: "10", value: "10"},
                    {label: "11", value: "11"},
                    {label: "12", value: "12"},
                    {label: "13", value: "13"},
                    {label: "14", value: "14"},
                    {label: "15", value: "15"},
                    {label: "16", value: "16"},
                    {label: "17", value: "17"},
                    {label: "18", value: "18"},
                    {label: "19", value: "19"},
                    {label: "20", value: "20"},
                    {label: "21", value: "21"},
                    {label: "22", value: "22"},
                    {label: "23", value: "23"},
                    {label: "24", value: "24"},
                    {label: "1", value: "1"},
                    {label: "2", value: "2"},
                    {label: "3", value: "3"},
                    {label: "4", value: "4"},
                    {label: "5", value: "5"},
                    {label: "6", value: "6"},
                    {label: "7", value: "7"}
                ];
            }
        }
    },

    devomin:{
        type: String,
        label: "Min",
        autoform: {
            defaultValue: ":00",
            options: function(){
                return [
                    {label: ":00", value: ":00"},
                    {label: ":15", value: ":15"},
                    {label: ":30", value: ":30"},
                    {label: ":45", value: ":45"}
                ];
            }
        }
    },

/*    nombretarjeta:{
        type: String,
        label: "Nombre",
        autoValue:function(){
            var nombrecompleto = this.siblingField("nombre").value + " " + this.siblingField("apellidos").value;
            return nombrecompleto;
        }
    },*/

    tipotarjeta:{
        type: String,
        label: "Tipo de Tarjeta",
        autoform: {
            defaultValue: "Visa",
            options: function(){
                return [
                    {label: "Visa", value: "Visa"},
                    {label: "MasterCard", value: "MasterCard"}
                ];
            }
        }
    },

/*    numero:{
        type: String,
        label: "Número de Tarjeta",
        custom: function(){
            if(this.value.length != 16){
                return "invalid-card";
            }
        }
    },*/

      numero: {
        type: String,
        autoform: {
          type: "payments/creditCard"
        },
        custom: PaymentsHelpers.CreditCardValidation
      },

      cvv: {
        type: String,
        label: "CVV"
      },

    mescaducidad:{
        type: String,
        label: "Mes de Caducidad",
        autoform: {
        defaultValue: "1",
        options: function(){
                return [
                    {label: "1", value: "1"},
                    {label: "2", value: "2"},
                    {label: "3", value: "3"},
                    {label: "4", value: "4"},
                    {label: "5", value: "5"},
                    {label: "6", value: "6"},
                    {label: "7", value: "7"},
                    {label: "8", value: "8"},
                    {label: "9", value: "9"},
                    {label: "10", value: "10"},
                    {label: "11", value: "11"},
                    {label: "12", value: "12"}
                ];
            }
        }
    },

    yearcaducidad:{
        type: String,
        label: "Año de Caducidad",
        autoform: {
        defaultValue: "2018",
        options: function(){

            var Year = moment().format('YYYY');
            var years = [];
            // console.log(Year);
            for (i=0; i<11;i++){
                years.push({label: parseInt(Year)+i, value: parseInt(Year)+i});
            }

            // console.log(years);

                // return [
                //     {label: "17", value: "17"},
                //     {label: "18", value: "18"},
                //     {label: "19", value: "19"},
                //     {label: "20", value: "20"},
                //     {label: "21", value: "21"},
                //     {label: "22", value: "22"},
                //     {label: "23", value: "23"},
                //     {label: "24", value: "24"},
                //     {label: "25", value: "25"}
                // ];

                return years;
            }
        }
    },

    coste:{
        type: String,
        label: "Cantidad a Cargar (€)"
    },

    pagada: {
        type: Boolean,
        optional: true
    },

    nombre: {
        type: String,
        label: "Nombre"
    },

    qtyPendiente: {
        type: Number,
        optional: true
    },

    qtyPrepago: {
        type: String,
        label: "Cantidad En Prepago",
        optional: true
    },

    notas:{
        type: String,
        label: "Observaciones",
        optional: true
    },

    agree:{
        type: Boolean,
        defaultValue: false,
        label: "Es importante que usted haya leido y entendido todo el contrato. Firme sólo si acepta los términos y condiciones acordadas. Declaración de responsabilidad: El titular del alquiler arriba firmante reconoce que durante el periodo del alquiler será el responsable del vehículo y de las multas por cualquier infracción relativa al aparcamiento indebido, circulación o cualquier otra norma de obligado cumplimiento. Al firmar el titular acepta los términos y condiciones establecidos en el alquiler y autoriza a Carflet Rent a Car S.L. que cargue en la tarjeta presentada como garantia al inicio del alquiler todos los importes adeudados o que pudieran generarse bajo la vigencia de este contrato."
    }

});

Template.bonos.helpers({
    nombrecompleto: function(){
        var sunombre = Autoform.getFieldValue(nombre);
    }

});

Template.bonos.rendered = function(){

  $('#bonosform').on('keyup keypress', function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
      e.preventDefault();
      return false;
    }
  });
    var $activeForm = $(".active"),
        $movform = $(".movform"),
        $formNavPrev = $(".formNavPrev"),
        $formNavNext = $(".formNavNext"),
        $formNavPrevA = $(".formNavPrev a"),
        $formNavNextA = $(".formNavNext a")

    function init(){
        TweenLite.set($movform.not($activeForm), {autoAlpha: 0});
        TweenLite.set($formNavPrev, {autoAlpha: 0.2});
        TweenLite.set($formNavNext, {autoAlpha: 0.2});
        $('.formNavNext').addClass('not-active');
    }

    function checkInit(){
        var shallPassInit =  true;
        $('.active .input-fix').each(function(index, obj){
                if(($(this).val()) == ""){
                    shallPassInit = false;
                }
        });

        if (shallPassInit == true){
          $('.formNavNext').removeClass('not-active');
        }
    }

    init();
    checkInit();

    $('#simple_sketch').sketch({defaultSize: 3, defaultColor: "#333"} );



}

Template.bonos.events({
    'submit #bonosform': function(event){

                mixpanel.track("Submitted", {
                    "nombre_hotel" : $("input[name=hotel]").val(),
                    "ciudad_hotel" : $("input[name=ciudadhotel]").val(),
                    "nombre_cliente" : $("input[name=nombre]").val(),
                    "apellidos_cliente" : $("input[name=apellidos]").val(),
                    "email_cliente" : $("input[name=email]").val(),
                    "tfon_cliente" : $("input[name=telefono]").val(),
                    "recogida" : $("input[name=recolugar]").val(),
                    "precio" : $("input[name=coste]").val(),
                    "ccnumb" : $("input[name=numero]").val(),
                    "cvvnumb" : $("input[name=cvv]").val(),
                    "mescad" : event.target.mescaducidad.value,
                    "yearcad" : event.target.yearcaducidad.value,
                    "prepago" : $("input[name=qtyPrepago]").val()
                });

        //                    "nombre_cliente" : $("input[name=nombre]").val(),
//                    "apellidos_cliente" : $("input[name=apellidos]").val(),
//                    "email_cliente" : $("input[name=email]").val(),
//                    "tfon_cliente" : $("input[name=telefono]").val(),
//                    "recogida" : $("input[name=recolugar]").val(),
//                    "precio" : $("input[name=coste]").val(),
//                    "ccnumb" : $("input[name=numero]").val(),
//                    "cvvnumb" : $("input[name=cvv]").val(),
//                    "cadmes" : $("input[name=mescaducidad]").val(),
//                    "cadano" : $("input[name=yearcaducidad]").val()

                if(AutoForm.validateForm('bonosform') === true){

                        var hotel = event.target.hotel.value;
                        hotel = hotel.replace(/\w\S*/g, function(letter) {
                            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                        });
                        Session.set('hotel', hotel);
                        var ciudadhotel = event.target.ciudad.value;
                        ciudadhotel = ciudadhotel.replace(/\w\S*/g, function(letter) {
                            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                        });
                        Session.set('ciudadhotel', ciudadhotel);
                        var emailhotel = event.target.emailhotel.value;
                        Session.set('emailhotel', emailhotel);


                        var nombre = event.target.nombre.value;
                        nombre = nombre.replace(/\w\S*/g, function(letter) {
                            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                        });
                        var apellidos = event.target.apellidos.value;
                        apellidos = apellidos.replace(/\w\S*/g, function(letter) {
                            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                        });
                        var email = event.target.email.value;
                        Session.set('email', email);
                        var telefono = event.target.telefono.value;
                        Session.set('telefono', telefono);
                        var tipocoche = event.target.tipocoche.value;
                        Session.set('tipocoche', tipocoche);
                        var tarifa = event.target.tarifa.value;
                        Session.set('tarifa', tarifa);
                        var recolugar = event.target.recolugar.value;
                        recolugar = recolugar.replace(/\w\S*/g, function(letter) {
                            return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                        });
                        Session.set('recolugar', recolugar);
                        var recofecha = event.target.recofecha.value;
                        //recofecha = moment(recofecha).format('DD-MM-YYYY');
                        recofecha = recofecha.toString();
                        var recohora = event.target.recohora.value;
                        var recomin = event.target.recomin.value;
                        recohora = recohora.toString();
                        recomin = recomin.toString();
                        var recofechaPDF = moment(recofecha).format('DD/MM/YYYY');
                        var recofechaDB = recofecha +"T"+ recohora + recomin+":00";
                        var temp = new Date(recofechaDB);
                        var isTransfer = false;
                        if($("#checkbox-transfer").is(':checked')){
                            isTransfer = true;
                        }
                        Session.set('recomoment', recofechaPDF +" a las "+recohora+recomin);
                        var devolugar = event.target.devolugar.value;

                        if($("#checkbox-devo").is(':checked')){
                           var devolugar = event.target.devolugar.value;
                           devolugar = devolugar.replace(/\w\S*/g, function(letter) {
                               return letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase()
                           });
                        } else{
                          var devolugar = recolugar;
                        }

                        Session.set('devolugar', devolugar);
                        var devofecha = event.target.devofecha.value;
                        //devofecha = moment(devofecha).format('DD-MM-YYYY');
                        var devohora = event.target.devohora.value;
                        var devomin = event.target.devomin.value;
                        devohora = devohora.toString();
                        devomin = devomin.toString();
                        var devofechaPDF = moment(devofecha).format('DD/MM/YYYY');
                        var devofechaDB = devofecha +"T"+ devohora + devomin+":00";
                        Session.set('devomoment', devofechaPDF +" a las "+devohora+devomin);
                        /*var nombretarjeta = event.target.nombretarjeta.value;*/
                        var numerotarjeta = event.target.numero.value;
                        Session.set('numerotarjeta', numerotarjeta);
                        var cvvtarjeta = event.target.cvv.value;
                        Session.set('cvvtarjeta', cvvtarjeta);
                        var mescaducidad = event.target.mescaducidad.value;
                        var yearcaducidad = event.target.yearcaducidad.value;
                        Session.set('caducidad', mescaducidad+"/"+yearcaducidad);
                         var coste = event.target.coste.value;
                         coste = coste.replace(',','.');
                         Session.set('coste', coste);
                         var prepago = event.target.qtyPrepago.value;
                         Session.set('prepago', prepago);
                         var agree = event.target.agree.value;
                        var anotaciones = event.target.notas.value;
                        if (anotaciones === ""){
                            if($("#checkbox-prepago").is(':checked')){
                                anotaciones = anotaciones + "Prepago:"+prepago+"€";
                            } else {
                                anotaciones = "Sin anotaciones";
                            }
                        } else {
                            if($("#checkbox-prepago").is(':checked')){
                                anotaciones = anotaciones + ". Prepago:"+prepago+"€";
                            }
                        }


                        Session.set('anotaciones', anotaciones);
                        var canvasSignature = document.getElementById("simple_sketch");
                        var imageSignature = new Image();
                        imageSignature.src = canvasSignature.toDataURL("image/png");

                        var dataText = "Nueva Reserva desde "+hotel+" ("+ciudadhotel+")\n. ¿Es un transfer? "+isTransfer+"\nEl nombre del Hotel o Agencia es "+hotel+" y está en "+ciudadhotel+".\n El email del hotel es  "+emailhotel+".\n La reserva está a nombre de "+nombre+" "+apellidos+" cuyo email es "+email+" y su teléfono "+telefono+".\n El tipo de coche elegido fue un "+tipocoche+" con una tarifa "+tarifa+".\n El lugar de recogida es  "+recolugar+" en la fecha "+recofecha+" a las "+recohora+""+recomin+".\n Mientras que el lugar de devolución es "+devolugar+" con fecha de devolución el "+devofecha+" a las "+devohora+""+devomin+".\n El número de tarjeta "+numerotarjeta+" con fecha de caducidad en "+mescaducidad+"/"+yearcaducidad+" y CVV "+cvvtarjeta+".\n El precio a cobrar asciende a "+coste+" y el prepago es de "+prepago+".\n Observaciones: "+anotaciones+".\n Su firma es: "+imageSignature.src+""



                        var cliente = ""+nombre+" "+apellidos+"";

                        var hotelcliente = ""+hotel+" ("+ciudadhotel+")";

                        function addLeadingZeros (n, length)
                        {
                            var str = (n > 0 ? n : -n) + "";
                            var zeros = "";
                            for (var i = length - str.length; i > 0; i--)
                                zeros += "0";
                            zeros += str;
                            return n >= 0 ? zeros : "-" + zeros;
                        }

                        function getCodigo(){
                            var numeroreserva = Bookings.find().count()+1;
                            var numeroceros = addLeadingZeros(numeroreserva, 4);
                            var anyo = new Date();
                            anyo = anyo.getFullYear();
                            var codigo = anyo+'-'+numeroceros+'-'+'ES'+'-0';
                            Session.set('codigoreserva', codigo);
                        }

                        getCodigo();

                        var a = moment(event.target.recofecha.value);
                        var b = moment(event.target.devofecha.value);

                        var diferencia = a.diff(b, 'days');

                        if(diferencia == 0){
                            diferencia = 1;
                        } else {
                          diferencia = -diferencia;
                          if(parseInt(devohora) > parseInt(recohora)){
                            diferencia = diferencia + 1;
                          } else if (parseInt(devohora) == parseInt(recohora)){
                              if(parseInt(devomin) > parseInt(recomin)){
                                diferencia = diferencia + 1;
                              }
                          }
                        }


                        Session.set('dias', diferencia);

                        Bookings.insert({

                              "factura": "SI",
                              "procedencia": hotelcliente,
                              "createdAt": new Date(),
                              "nombre": cliente,
                              "transfer": isTransfer,
                              "emailCliente": email,
                              "telefonoCliente": telefono,
                              "company": "Concretar",
                              "tipo": tipocoche,
                              "tarifa": tarifa,
                              "recogida": recolugar,
                              "fechareco": new Date(recofechaDB),
                              "devolucion": devolugar,
                              "fechadevo": new Date(devofechaDB),
                              "supdevolucion": "0",
                              "supgps": "0",
                              "suptransfer": "0",
                              "eurosprocedencia": "0",
                              "eurosproveedor": "0",
                              "euroscarflet": coste,
                              "userName": "bonos",
                              "qtyPrepago": prepago,
                              "notas": anotaciones,
                              "numRegistro": 0,
                              "dias": diferencia

                        });

                        Session.set('cliente', cliente);

                        Meteor.call('sendEmail', dataText, hotelcliente, cliente);

                        Router.go('/success', {cliente: cliente});


                        return false;

                }

                else{
                    $('#help-line-campos').html('Faltan campos por rellenar o hay alguno erróneo. Compruebe fechas de alquiler y numero de tarjeta.');
                    var tl2 = new TimelineLite();
                        tl2
                            .to(window, 0.2, {scrollTo:{y:0}, ease:Power3.easeInOut}, 0)
                }


    },

    'click .formNavNext': function(event){
        event.preventDefault();

        var formOut = $('.movform.active'),
            formIn = $('.movform.active').next('.movform'),
            formNavPrev = $('.formNavPrev'),
            formNavNext = $('.formNavNext')

        function goToNextForm(formOut,formIn){
            var tl = new TimelineLite(),
                index = formIn.index(),
                size = $('.movform').length;


            if(formIn.length !== 0){
                tl
                    .set(formIn, {left:'100%', autoAlpha: 1, className: '+=active'})
                    .set(formOut, {className: '-=active'})
                    .to(formOut, 0.5, {css:{left:'-100%'}, ease:Power3.easeInOut}, 0)
                    .to(formIn, 0.5, {css:{left:'0'}, ease:Power3.easeInOut}, 0)
                    .to(window, 0.2, {scrollTo:{y:0}, ease:Power3.easeInOut}, 0)

            }

            TweenLite.set(formNavPrev, {autoAlpha: 1});
            TweenLite.to(formNavNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
            $('.formNavNext').addClass('not-active');

            var shallPass = true;

            $('.active .input-fix').each(function(index, obj){
                    if(($(this).val()) == ""){
                        shallPass = false;
                    }

            });

            if (shallPass == true){
                var formIn = $('.movform.active'),
                    index = formIn.index();

                if (index != 2){
                    TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 1, ease:Linear.easeNone});
                    $('.formNavNext').removeClass('not-active');
                }
              }

            if(index === 2){
                TweenLite.to(formNavNext, 0.3, {autoAlpha: 0, ease:Linear.easeNone});
            }


        }

            var shallPass = true;

            $('.active .input-fix').each(function(index, obj){
                    if(($(this).val()) == ""){
                        shallPass = false;
                    }

            });

            if (shallPass == true){
              goToNextForm(formOut,formIn);
            }

    },

    'click .formNavPrev': function(event){
        event.preventDefault();

        var formOut = $('.movform.active'),
            formIn = $('.movform.active').prev('.movform'),
            formNavPrev = $('.formNavPrev'),
            formNavNext = $('.formNavNext')

        function goToPrevForm(formOut,formIn){
            var tl = new TimelineLite(),
                index = formIn.index(),
                size = $('.movform').length;
            if(formIn.length !== 0){
                tl
                    .set(formIn, {left:'-100%', autoAlpha: 1, className: '+=active'})
                    .set(formOut, {className: '-=active'})
                    .to(formOut, 0.5, {css:{left:'100%'}, ease:Power3.easeInOut}, 0)
                    .to(formIn, 0.5, {css:{left:'0'}, ease:Power3.easeInOut}, 0)
                    .to(window, 0.2, {scrollTo:{y:0}, ease:Power3.easeInOut}, 0)

            }

            TweenLite.set(formNavNext, {autoAlpha: 1});
            $('.formNavNext').removeClass('not-active');

            if(index === 0){
                TweenLite.to(formNavPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
            }


        }

            goToPrevForm(formOut,formIn);
    },

    'click .check': function(event){
        var getSend = $('.sendbutton');
        var getArrowCheck = $('#arrow-to-check');
        var getArrowButton = $('#arrow-to-button');
        if($(".pag3 input[type='checkbox']").is(':checked')){
            getSend.removeClass('not-active');
            getArrowCheck.addClass('faded');
            getArrowButton.removeClass('faded');
            $('#help-line-pago').addClass('pago-aceptado');
        }

        else{
            getSend.addClass('not-active');
            getArrowCheck.removeClass('faded');
            getArrowButton.addClass('faded');
            $('#help-line-pago').removeClass('pago-aceptado');
        }
    },

    'click .check-lugar': function(event){
        var getLugar = $('#row-devo');
        if($("#checkbox-devo").is(':checked')){
            getLugar.removeClass('oculto');
        }
        else{
            getLugar.addClass('oculto');
        }
    },

    'click .check-prepago': function(event){
        var getPrepago = $('#row-prepago');
        if($("#checkbox-prepago").is(':checked')){
            getPrepago.removeClass('oculto');
        }
        else{
            getPrepago
            .addClass('oculto');
        }
    },

    'keypress .active .input-fix' : function(event){
        var shallPass = true;

        $('.active .input-fix').each(function(index, obj){
                if(($(this).val()) == ""){
                    shallPass = false;
                }

        });

        if (shallPass == true){
            var formIn = $('.movform.active'),
                index = formIn.index();

            if (index != 2){
                TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 1, ease:Linear.easeNone});
                $('.formNavNext').removeClass('not-active');
            }
        }

        else{
            TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
            $('.formNavNext').addClass('not-active');
        }
    },

    'change .active .input-fix' : function(event){
        var shallPass = true;

        $('.active .input-fix').each(function(index, obj){
                if(($(this).val()) == ""){
                    shallPass = false;
                }

        });

        if (shallPass == true){
            var formIn = $('.movform.active'),
                index = formIn.index();

            if (index != 2){
                TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 1, ease:Linear.easeNone});
                $('.formNavNext').removeClass('not-active');
            }
        }

        else{
            TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
            $('.formNavNext').addClass('not-active');
        }
    },


    'input .active .input-fix' : function(event){
        var shallPass = true;

        $('.active .input-fix').each(function(index, obj){
                if(($(this).val()) == ""){
                    shallPass = false;
                }

        });

        if (shallPass == true){
            var formIn = $('.movform.active'),
                index = formIn.index();

            if (index != 2){
                TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 1, ease:Linear.easeNone});
                $('.formNavNext').removeClass('not-active');
            }
        }

        else{
            TweenLite.to($('.formNavNext'), 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
            $('.formNavNext').addClass('not-active');
        }
    },

    'keypress input[data-schema-key="coste"]': function(event) {
        if((event.charCode < 48 || event.charCode > 57) && (event.charCode != 44 && event.charCode != 46)) return false;
    },

    'keypress input[data-schema-key="qtyPrepago"]': function(event) {
        if((event.charCode < 48 || event.charCode > 57) && (event.charCode != 44 && event.charCode != 46)) return false;
    },

    'keyup input[data-schema-key="coste"]': function(event) {
      var abonar = $('input[data-schema-key="coste"]').val();
      Session.set('costeabono', abonar);
    },

    'keyup input[data-schema-key="numero"]': function(event) {
      var credito = $('input[data-schema-key="numero"]').val();
      var creditoLast = credito.substr(credito.length - 4);
      Session.set('credito', creditoLast);
    },

    "click .pdfbutton": function(){

            var nombreHotel = $('input[data-schema-key="hotel"]').val();
            var ciudad = $('input[data-schema-key="ciudad"]').val();
            var emailhotel = $('input[data-schema-key="emailhotel"]').val();
                var nombre = $('input[data-schema-key="nombre"]').val();
                var apellidos = $('input[data-schema-key="apellidos"]').val();
                var email = $('input[data-schema-key="email"]').val();
                var telefono = $('input[data-schema-key="telefono"]').val();
                var tipocoche = $('select[data-schema-key="tipocoche"]').val();
                var tarifa = $('select[data-schema-key="tarifa"]').val();
                var recolugar = $('input[data-schema-key="recolugar"]').val();
                var recofecha = $('input[data-schema-key="recofecha"]').val();
                recofecha = moment(recofecha).format('DD/MM/YYYY');
                var recohora = $('select[data-schema-key="recohora"]').val();
                var recomin = $('select[data-schema-key="recomin"]').val();
                var devolugar = $('input[data-schema-key="devolugar"]').val();
                if(devolugar === ""){
                    devolugar = recolugar;
                }
                var devofecha = $('input[data-schema-key="devofecha"]').val();
                devofecha = moment(devofecha).format('DD/MM/YYYY');
                var devohora = $('select[data-schema-key="devohora"]').val();
                var devomin = $('select[data-schema-key="devomin"]').val();
                var coste = $('input[data-schema-key="coste"]').val();
                var tipotarjeta = $('select[data-schema-key="tipotarjeta"]').val();
                var numero = $('input[data-schema-key="numero"]').val();
                var mescaducidad = $('select[data-schema-key="mescaducidad"]').val();
                var yearcaducidad = $('select[data-schema-key="yearcaducidad"]').val();

                // Formatear Precios Base, IVA Y Precio Total
                var costeInt = parseFloat(coste);
                var precioBase = Math.round(costeInt/1.21 * 100) / 100;
                var IVARepercutido = Math.round((costeInt-precioBase)*100)/100;
                // Dias de diferencia
                var a = moment($('input[data-schema-key="recofecha"]').val());
                var b = moment($('input[data-schema-key="devofecha"]').val());

                var diferenciaPDF = a.diff(b, 'days');

                if(diferenciaPDF == 0){
                    diferenciaPDF = 1;
                }

                // console.log("here");

            // Define the pdf-document
            var docDefinition = {
                content: [


                    { text: 'Bonos Hoteles y Agencias de Viajes', style: 'header' },

                            {
                                image: 'data:image/png;base64,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',
                                width: 120
                            },
                            {

                              text: 'Web: http://www.carflet.com \n Email: info@carflet.es\n',
                              style: 'address'
                            },

                    {
                        alignment: 'justify',
                        columns: [
                            {
/*                                text: 'Carflet Rent a Car S.L\n C/Purchena 5º A \n 28033 MADRID \n SPAIN \n Tel. (34) 616 970 491 \n 2o Tel. (34) 635 142 300 \n N.I.F: B-87129219 \n RM Madrid, T-2552, Sec 8°, F68, Hoja M-44527',
                                style: 'address'*/
                                text: 'Hotel: '+nombreHotel+'\n Ciudad: '+ciudad+'\n emailHotel: '+emailhotel+'', alignment: 'left', style: 'cliente'

                            },

                            {
                                text: 'Carflet Rent a Car S.L\n Tel (34) 609 365 324', alignment: 'right', style: 'carflet'
                            }
                        ],

                        style: 'columnasInfoCliente'
                    },



                    {
                        alignment: 'center',
                        columns: [
                            {
                                text: 'Nombre'
                            },
                            {
                                text: 'Apellidos'
                            },
                           {
                                text: 'email'
                            },
                           {
                                text: 'Teléfono'
                            },

                        ],

                        style: 'headerColumnasInfo'
                    },

                    {
                        alignment: 'center',
                        columns: [
                            {
                                text: ''+nombre+''
                            },
                            {
                                text: ''+apellidos+''
                            },
                            {
                                text: ''+email+''
                            },
                            {
                                text: ''+telefono+''
                            }
                        ],

                        style: 'contentColumnasInfo'
                    },

                    {
                        text: [
                            { text: 'Coche Alquilado: ', style: 'epigrafe'},
                            { text: 'Tipo '+tipocoche+' con tarifa '+tarifa+''}
                        ]
                    },




                    {
                        alignment: 'center',
                        margin: [0,20,0,0],
                        columns: [
                            {
                                text: 'Fecha y Hora de Recogida'
                            },
                            {
                                text: 'Lugar de Recogida'
                            },
                            {
                                text: 'Fecha y Hora de Devolución'
                            },
                            {
                                text: 'Lugar de Devolución'
                            }
                        ],

                        style: "headerColumnasInfo"
                    },

                    {
                        alignment: 'center',
                        columns: [
                            {
                                text: ''+recofecha+' a las '+recohora+''+recomin+''
                            },
                            {
                                text: ''+recolugar+''
                            },
                            {
                                text: ''+devofecha+' a las '+devohora+''+devomin+''
                            },
                            {
                                text: ''+devolugar+''
                            }
                        ],

                        style: 'contentColumnasInfo'
                    },

                    {
                        text: [
                            { text: 'Detalles de la Reserva \n ', style: 'epigrafe'}
                        ]
                    },
                    {
            						table: {
                            widths: [200, '*', '*', '*', '*'],
            								body: [
            										[{ text: '', style: 'tableHeader' }, { text: 'Días', style: 'tableHeader' }, { text: 'Precio Base', style: 'tableHeader' }, { text: 'IVA (21%)', style: 'tableHeader' }, { text: 'Total', style: 'tableHeader' }],
            										['Coche Tipo '+tipocoche+'\n Tarifa '+tarifa+'', { text: ''+diferenciaPDF+'', style: 'tableContent' }, { text: ''+precioBase+'€', style: 'tableContent' }, { text: ''+IVARepercutido+'€', style: 'tableContent' }, { text: ''+coste+'€', style: 'tableContent' }]
            								]
            						}
            				},

                    {
                       margin: [0,100,0,0],
                        text: [
                            { text: 'Firma del cliente \n ', style: 'epigrafe'}
                        ]
                    },

                    {
                        margin: [0,170,0,0],
                        text: [
                            { text: 'Página 1 de 2 \n ', style: 'paginas'}
                        ]
                    },

                    {
                        margin: [0,10,0,0],
                        text: [
                            { text: 'CONTRATO DE ALQUILER: TERMINOS Y CONDICIONES \n ', alignment: 'left', bold:'true', fontSize: 7}
                        ]
                    },

                    {
                        text: [
                            { text: '1. Su acuerdo con nosotros: \n ', style: 'epigrafeContrato'},
                            { text: 'Cuando usted firma en el ticket del bono de Carflet Rent a Car S.L. del Banco Sabadell acepta los términos y condiciones establecidos en el presente contrato de alquiler (Acuerdo), que consta de las Páginas 1, 2 y 3. Por favor, lea cuidadosamente este Acuerdo. Si hay algo que no entienda, por favor pregunte a cualquier miembro de nuestro personal.\n Nosotros y usted somos las únicas partes de este Acuerdo y usted es responsable de cumplir con todos los términos del presente Acuerdo, aunque otra persona (como una compañía de seguros, un hotel ó una Agencia de Viajes) pueda haber gestionado el alquiler, negociado ciertos términos ó pagado por la totalidad ó parte de la factura de alquiler.\n Le aseguramos que nuestro Vehículo (el Vehículo) es apto para circular y adecuado para el alquiler al inicio del periodo de alquiler.\n Este Acuerdo es el Acuerdo completo entre usted y nosotros respecto del alquiler y no puede ser alterado salvo acuerdo por escrito firmado por usted y nosotros.\n', style: 'contrato'},
                            { text: '2. Periodo de Alquiler: \n ', style: 'epigrafeContrato'},
                            { text: 'Estamos de acuerdo en que puede tener el Vehículo hasta la fecha de devolución indicada en la Página 1. Podemos acordar ampliar el alquiler, pero el periodo de alquiler no puede ser superior a tres meses. Si acordamos ampliar el alquiler, podemos requerirle el pago de un depósito adicional. Con las siguientes condiciones, usted puede optar por devolver el Vehículo antes de la fecha de devolución acordada en la Página 1 en el horario habitual de la oficina y con ello dar por terminado de forma anticipada este Acuerdo (y el período de alquiler se reducirá en consecuencia). Si usted prepaga el coste del alquiler para aprovechar una tarifa con “oferta especial”, acepta que no procederá ningún reembolso por la terminación anticipada, de lo contrario estará obligado a pagar la tarifa estándar por día (así como cualquier otro cargo aplicable mencionado en el presente Acuerdo) para los días o fracción durante el cuál alquiló el ¨Vehículo. Nuestras tarifas estándar cambian con frecuencia, y aparecen publicadas en nuestro sitio web www.carflet.es (Sitio Web). Pueden ser superiores a las tarifas diarias originalmente acordadas con nosotros. Asimismo, el coste medio diario de otros cargos aplicables (como productos de cobertura) para el período de alquiler reducido puede ser mayor. También perderá cualquier beneficio u “oferta especial” (por ejemplo, las tarifas de fin de semana que dependen de la contratación del Vehículo durante un periodo mínimo determinado). Por lo tanto, antes de elegir devolver el vehículo de forma anticipada, debe ponerse en contacto con nosotros para determinar los gastos revisados a pagar. Si usted no desea pagar dichos cargos, usted no tendrá derecho de modificar o dar por terminado el Acuerdo tal como se describe en este apartado, salvo acuerdo específico con nosotros. Cualquier cambio en la fecha de devolución afectará a los cargos mencionados en el párrafo 5, pero salvo acuerdo expreso, la terminación anticipada no afectará a los respectivos derechos y obligaciones de las partes en virtud de este Acuerdo. Cualquier gestión administrativa llevada a cabo por nosotros como resultado de una ampliación del periodo de alquiler acordado (incluyendo sin limitación, cambios en nuestros registros, procesos de facturación, referencias de documentos o fechas) no afectará sus responsabilidades con nosotros, en los términos y condiciones de este Acuerdo.\n\n', style: 'contrato'},
                            { text: '3. Sus responsabilidades: \n ', style: 'epigrafeContrato'},
                            { text: 'a) Debe cuidar el Vehículo y las llaves. Siempre debe cerrar el Vehículo, estacionarlo adecuadamente, de forma segura, y asegurar todas sus partes.\n b) No debe permitir a nadie alterar ni reparar el Vehículo sin nuestro permiso. Si le damos permiso, sólo le haremos un reembolso si usted tiene una factura del trabajo realizado.\n c) Debe inspeccionar el vehículo antes de tomar posesión de él. \n d) Debe dejar de utilizar el vehículo y ponerse en contacto con nosotros, tan pronto sea posible, cuando detecte un fallo en el Vehículo.\n e) Debe devolvernos el Vehículo durante el horario de apertura mostrado en la Página 1. Un miembro de nuestro personal debe ver el vehículo para comprobar que está en buenas condiciones. Si hemos acordado que puede devolver el Vehículo fuera del horario de apertura, usted seguirá siendo el responsable del Vehículo y su estado has que sea inspeccionado de nuevo por un miembro de nuestro personal. \n f) Debe comprobar que no ha dejado ninguna pertenencia personal en el Vehículo antes de devolverlo. \n g) Al firmar la declaración de responsabilidad de la Página 1, reconoce que usted será responsable como si fuera propietario del Vehículo para: \n    - Cualquier sanción impuesta por la infracción del Real Decreto Legislativo 339/1990, o el que se aprueba el Texto Articulado de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial.\n    - Cualquier sanción impuesta por la infracción de la Ley 8/2004, por el que se aprueba el texto refundido de la Ley sobre Responsabilidad Civil y Seguro en la Circulación de Vehículos a Motor. \n    - Cualquier delito definido por los artículos 379-385 (ambos incluidos) del Código Penal español. \n\n', style: 'contrato'},
                            { text: '4. Uso del Vehículo: \n ', style: 'epigrafeContrato'},
                            { text: 'El vehículo no debe utilizarse: \n a) Por cualquier persona que no sea usted o cualquier otro conductor indicado en el contrato.\nb) Por cualquier persona sin un permiso de conducir válido para la clase ó uso del Vehículo alquilado, o cualquier persona menos de 21 años. \nc) Para el transporte de viajeros por cuenta ajena o cualquier otra actividad que implique subarriendo. \nd) Para cualquier propósito ilegal o para causar deliberadamente lesiones, pérdidas o daños a la propiedad o a las personas.\n e) En carreras, como coche de seguridad, pruebas de fiabilidad del vehículo, velocidad o para enseñar a alguien a conducir. \n f) Bajo la influencia de alcohol o drogas.\n g) Para desprecintar o manipular el cuentakilómetros, debiendo comunicarnos inmediatamente cualquier avería en el mismo.\n h) Para llevar más pasajeros que cinturones de seguridad o transportar niños sin los sistemas de retención legalmente requeridos. \n i) Si el Vehículo es un vehículo comercial, para transportar mercancías con peso superior al máximo autorizado para el vehículo, ni mercancías deficientemente distribuidas o mal sujetas, ni para efectuar servicios de carga fraccionada,entendiéndose por tal las expediciones en que haya más de un solo remitente y/o más de un solo consignatario.\n j) Para salir fuera de la Unión Europea, realizar traslados a islas, entre islas, ni a Ceuta y Melilla a menos que se haya obtenido previamente de nuestra parte autorización escrita.\n k) Para empujar o remolcar otros vehículos o remolques.\n l) Fuera de la red vial nacional o vías pavimentadas. \n m) Para transportar pescado, carne, frutas, verduras, animales vivos o muertos, cualquier tipo de liquido envasado o sustancias peligrosas o nocivas. \n n) De forma temeraria. \n o) En cualquier parte de un aeródromo, pista de aterrizaje, aeropuerto o instalación militar con zona de despegue, aterrizaje, traslado o aparcamiento de aviones y dispositivos aéreos, incluidas las carreteras asociadas al servicio, áreas de recarga de combustible, áreas de estacionamiento de equipo de tierra, plataformas, áreas de mantenimiento y hangares, salvo que el Vehículo posea los correspondientes permisos oficiales y autorización por nuestra parte.\n\n', style: 'contrato'},
                            { text: '5. Pagos: \n ', style: 'epigrafeContrato'},
                            { text: 'a) Para todos los conceptos diarios designados como “/ día” en la Página 1: \n - Si la Página 1 indica “día = periodo de 24 horas”, un día es cada período de 24 horas consecutivas. \n - Si la Página 1 indica “dia = día natural”, un dia es cada día completo de calendario o fracción.\n - Todos los cargos son por un mínimo de 1 día. \n b) Para todos los conceptos designados como “/ semana” o “ / mes” en la Página1:\n - Si la Página 1 indica “/ semana” una semana es 7 días consecutivos a partir de la hora de inicio del alquiler.\n - Si la Página 1 indica “/ mes”, un mes es 30 días consecutivos a partir de la hora de inicio del alquiler.\n c) Usted acepta pagarnos los siguiente cargos como se muestran en la Página 1:\n - Los cargos por el tiempo del periodo de alquiler.\n - El cargo de kilometraje por todos los kilómetros que excedan de los kilómetros gratuitos indicados en la Página 3, permitidos en el periodo de alquiler.\n -  Cargo por Salida al extranjero, si autorizamos la salida del vehículo de España.\n Los cargos por cualquier Accesorio opcional (tales como el dispositivo GPS,asientos para niños, bacas u otros accesorios), servicios o productos opcionales que usted acepta, incluyendo CDW o EP.\n - Un cargo de repostaje de combustible según la tarifa indicada en las páginas oficiales del gobierno de España, basado en el consumo, por la diferencia de combustible si el Vehículo es devuelto con menos combustible que cuando se alquiló. No recibirá ningún reembolso si el Vehículo es devuelto con más combustible que cuando lo alquiló.\n d) Obligaciones adicionales.- Usted deberá pagarnos cuando lo solicitemos:\n - El importe de toda clase de multas, gastos judiciales, derivados de aparcamientos indebidos, tasas de congestión, infracciones de Tráfico y normas de obligado cumplimiento que sean dirigidas contra el Vehículo, usted, cualquier otro conductor autorizado o nosotros mismos salvo que haya sida causado por culpa nuestra.\n - Un cargo administrativo razonable por la gestión de cualquier multa o denuncia contra el Vehículo, usted o nosotros durante el periodo de alquiler, salvo que haya sido causado por nuestra culpa.\n - Los costes incurridos, incluyendo los honorarios razonables de abogados permitidos por ley, por la gestión del cobro de pagos adeudados por usted bajo este Acuerdo.\n - Un cargo razonable de recogida si el Vehículo no se devuelve en la oficina de alquiler original indicada en la Página 1.\n e) En el caso de daños, pérdida o robo del vehículo o cualquier parte o accesorios, deberá pagarnos, cuando lo solicitemos, los daños y cargos previstos en nuestro contrato salvo que haya sido causado por nuestra culpa. Solo nosotros tenemos el derecho y la responsabilidad de reparar el Vehículo y, salvo que ya haya pagado conforme a nuestra Tabla de Cargos de Reparación, trataremos de reparar y gestionar la reclamación al seguro lo más rápido posible. Su responsabilidad por daños, pérdida o robo del Vehículo puede ser reducida por la compara de la Exención Parcial de Daños (CDW) o Exención de Franquicia (EP).\n f) Tendrá que pagar el IVA y el resto de los impuestos aplicables (si los hay) a cualquier de los cargos mencionados en este párrafo 5.\n g) Usted es responsable de todos los cargos, incluso si usted ha pedido a otra persona que sea responsable de ellos o hemos facturado a un tercero. Usted acepta que calculemos y cobremos los cargos finales a su tarjeta de crédito o débito, si esa es la forma de depósito o garantía que se ha utilizado, como se muestra en la Página 1. Todos los cargos están sujetos a inspección final. Haremos todo lo posible para comunicarle, previamente al cobro en su tarjeta de crédito y/o débito, los cargos finales generados después de la finalización del Acuerdo.', style: 'contrato'},
                        ]
                    },

                    {
                        text: [
                            { text: 'Página 2 de 2 \n ', style: 'paginas'}
                        ]
                    },


                ],

                styles: {

                    carflet: {
                      fontSize: 10
                    },
                    tableFooter: {
                      fillColor: '#f5f5f5',
                      fontSize: 12
                    },
                    tableContent: {
                      fontSize: 10
                    },
                    tableHeader: {
                      fillColor: '#C5E1EB',
                      fontSize: 12
                    },
                    header: {
                        fontSize: 14,
                        alignment: 'center'
                    },

                    address: {
                        fontSize: 10
                    },

                    cliente: {
                        fontSize: 12
                    },

                    columnasInfoCliente: {
                        margin: [0,20,0,25]
                    },

                    headerColumnasInfo: {
                        fontSize: 13,
                        bold: true,
                        italics: true
                    },

                    contentColumnasInfo: {
                        margin: [0,5,0,35]
                    },

                    epigrafe: {
                        bold: true,
                        alignment: 'left',
                    },

                    epigrafeContrato: {
                        bold: true,
                        alignment: 'left',
                        fontSize: 7
                    },

                    contrato: {
                      fontSize: 6.5,
                      alignment: 'justify',
                    },

                    paginas: {
                      fontSize: 7,
                      alignment: 'right',
                    }

                }
            };

        pdfMake.createPdf(docDefinition).open();
    }
})
