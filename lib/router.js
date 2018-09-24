Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    // Bono Form Route
    this.route('bonos',{
        path: '/',
        template: 'bonos'
    });

    this.route('success',{
        path: '/success/',
        template: 'success'

        // data: function(){
        //     var nombredelcliente = Session.get('cliente');
        //     var hotel = Session.get('hotel');
        //     var ciudad = Session.get('ciudadhotel');
        //     var emailhotel = Session.get('emailhotel');
        //     var email = Session.get('email');
        //     var telefono = Session.get('telefono');
        //
        //     var tipocoche = Session.get('tipocoche');
        //     var tarifa = Session.get('tarifa');
        //     var recolugar = Session.get('recolugar');
        //     var recomoment = Session.get('recomoment');
        //
        //     var devolugar = Session.get('devolugar');
        //     var devomoment = Session.get('devomoment');
        //
        //     var numerotarjeta = Session.get('numerotarjeta');
        //     var caducidad = Session.get('caducidad');
        //     var coste = Session.get('coste');
        //
        //     var anotaciones = Session.get('anotaciones');
        //
        //     var infoReserva = [hotel, ciudad, emailhotel, nombredelcliente, email, telefono, tipocoche, tarifa, recolugar, recomoment, devolugar, devomoment, numerotarjeta, caducidad, coste, anotaciones];
        //     Session.set(infoReserva);
        //
        //     return infoReserva;
        // }
    });

});
