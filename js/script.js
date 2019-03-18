// "use strict";function init(){myMap=new ymaps.Map("map",{center:[55.670833,37.912381],zoom:12}),myMap.controls.remove("geolocationControl"),myMap.controls.remove("searchControl"),myMap.controls.remove("routeEditor"),myMap.controls.remove("trafficControl"),myMap.controls.remove("typeSelector"),myMap.controls.remove("rulerControl"),myPlacemark=new ymaps.Placemark([55.670833,37.912381],{hintContent:"Производственный цех",balloonContent:"Люберцы, ул. Хлебозаводская, д. 8"}),myMap.geoObjects.add(myPlacemark)}ymaps.ready(init);var myMap,myPlacemark;$(document).ready(function(){function t(){var t=.6*$(window).width()*.762,e=$(".credit .credit_descriptor").height(),o=Math.floor(.69*t);$(".credit").css({height:o+"px"}),$(".credit .privacy").css({top:$(".credit").height()-e-25+"px"}),$(".credit .credit_descriptor").css({bottom:t+"px"}),$(".prefooter h2:first-child").css({marginTop:Math.floor(.35*t)+"px"})}function e(){var t=$(".metering").height(),e=$(".metering_descriptor").height();$(".metering .privacy").css({top:t-e-25+"px"})}function o(){$(".partners").css({paddingBottom:$(window).height()/4+"px"})}function i(){$("#map").css({height:$(window).height()/2+"px"})}function r(){var t=0;$(".stat").each(function(){var e=parseInt($(this).height());e>t&&(t=e)}),$(".stat").height(function(){return t+.18*$(this).width()})}$("html").hasClass("desktop")?$("section").viewportChecker({classToAdd:"animated fadeInUp",classToRemove:"invisible",offset:"35%"}):$(".invisible").removeClass("invisible"),r(),i(),o(),t(),e(),setTimeout(t,500),setTimeout(e,500),$(window).resize(function(){t(),e(),o(),i()}),$("form").submit(function(){var t=$(this).serializeArray();$.ajax({type:"POST",url:"mail.php",data:t,success:function(){$("#successRequest").show("slow"),$(".modal").modal("hide"),setTimeout(function(){$("#successRequest").hide("slow")},3500),$("input:not([type=hidden]), textarea").val("")}})})});


$(document).ready(function () {

        $('#menu-button, #menu-close-button').click(function () {
          $('.nav--bar .container').slideToggle();
          $('#menu-button').toggle();
          $('#menu-close-button').toggle();
        })

        $('.meteringForm').submit(function (e) {
            e.preventDefault();
            const type = $('.meteringForm input[name="type"]').val();
            const name = $('.meteringForm input[name="name"]').val();
            const phone = $('.meteringForm input[name="phone"]').val();
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                  'type': type,
                  'name': name,
                  'phone': phone
                },
                success: function () {
                  $('#successRequest').show().delay(3000).fadeOut(600);
                },
                error: function () {
                  alert("Возникла ошибка. Попробуйте еще раз.");
                }
            })

        })

        $('.callbackForm').submit(function (e) {
            e.preventDefault();
            const type = $('.callbackForm input[name="type"]').val();
            const name = $('.callbackForm input[name="name"]').val();
            const phone = $('.callbackForm input[name="phone"]').val();
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                  'type': type,
                  'name': name,
                  'phone': phone
                },
                success: function () {
                    $('#callback').modal('hide');
                    $('#successRequest').show().delay(3000).fadeOut(600);
                },
                error: function () {
                  alert("Возникла ошибка. Попробуйте еще раз.");
                }
            })
        })

        $('.questionForm').submit(function (e) {
            e.preventDefault();
            const type = $('.questionForm input[name="type"]').val();
            const name = $('.questionForm input[name="name"]').val();
            const email = $('.questionForm input[name="email"]').val();
            const text = $('.questionForm textarea[name="text"]').val();
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                  'type': type,
                  'name': name,
                  'email': email,
                  'text': text
                },
                success: function () {
                  $('#question').modal('hide');
                  $('#successRequest').show().delay(3000).fadeOut(600);
                },
                error: function () {
                  alert("Возникла ошибка. Попробуйте еще раз.");
                }
            })
        })
    })
