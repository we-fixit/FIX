$(function() {
    var nom_status = false;
    var prenom_status = false;
    var username_status = false;
    var email_status = false;
    var adr_status = false;

    var adr_status = false;
    $("#fos_user_registration_form_nom").keyup(function(){
        check_nom();
    })
    $("#fos_user_registration_form_prenom").keyup(function(){
        check_prenom();
    })
    $("#fos_user_registration_form_username").keyup(function () {
        check_username();
    })
    $("#fos_user_registration_form_email").keyup(function () {
        check_email();
    })
    $("#fos_user_registration_form_adresse").keyup(function () {
        check_adr();
    })
    //nom
    function check_nom()
    {
        var filtre = /^[a-zA-Z]+$/;
        var Fname = $("#fos_user_registration_form_nom").val();
        if(Fname.length == 0)
        {
            $('#fos_user_registration_form_nom').css("border-bottom","2px solid #f26957");
            $("#error_nom").css("display","block").html("Entrez votre nom");
            $("#error_nom").css("color","#f26957");
        }
        else if(Fname !== "" && filtre.test(Fname))
        {
            $('#fos_user_registration_form_nom').css("border-bottom","2px solid green",);
            $('#fos_user_registration_form_nom').css("color","green");
            $("#error_nom").css("display","none").html("");
            nom_status = true;
        }
        else
        {
            $('#fos_user_registration_form_nom').css("border-bottom","2px solid #f26957");
            $('#fos_user_registration_form_nom').css("color","#f26957");
            $("#error_nom").css("display","block").html("Votre nom ne devrait contenir que des caractères");
            $("#error_nom").css("color","#f26957");
        }
    }
    //prenom
    function check_prenom()
    {
        var filtre = /^[a-zA-Z]+$/;
        var Lname = $("#fos_user_registration_form_prenom").val();
        if(Lname.length == 0)
        {
            $('#fos_user_registration_form_prenom').css("border-bottom","2px solid #f26957");
            $("#error_prenom").css("display","block").html("Entrez votre prénom");
            $("#error_prenom").css("color","#f26957");
        }
        else if(Lname !== "" && filtre.test(Lname))
        {
            $('#fos_user_registration_form_prenom').css("border-bottom","2px solid green",);
            $('#fos_user_registration_form_prenom').css("color","green");
            $("#error_prenom").css("display","none").html("");
            prenom_status = true;
        }
        else
        {
            $('#fos_user_registration_form_prenom').css("border-bottom","2px solid #f26957");
            $('#fos_user_registration_form_prenom').css("color","#f26957");
            $("#error_prenom").css("display","block").html("Votre prénom ne devrait contenir que des caractères");
            $("#error_prenom").css("color","#f26957");
        }
    }
    //username
    function check_username()
    {
        var none = /^[a-zA-Z0-9.-]+.[a-zA-z0-9]$/;
        var username = $("#fos_user_registration_form_username").val();

        if (username.length == 0) {
            $('#fos_user_registration_form_username').css("border-bottom", "2px solid #f26957");
            $("#error_username").css("display","block").html("Entrez votre username");
            $("#error_username").css("color","#f26957");
        }
        else if (username.length < 4 || username.length > 8) {
            $('#fos_user_registration_form_username').css("border-bottom", "2px solid #f26957");
            $("#error_username").css("display","block").html("Votre username doit etre 4 et 8 caractères");
            $("#error_username").css("color","#f26957");
        }
        else if (!isNaN(username)) {
            $('#fos_user_registration_form_username').css("border-bottom", "2px solid #f26957");
            $("#error_username").css("display","block").html("Votre username ne devrait contenir que des caractères");
            $("#error_username").css("color","#f26957");
        }
        else if (!none.test(username)) {
            $('#fos_user_registration_form_username').css("border-bottom", "2px solid #f26957");
        }
    }
    //email
        function check_email()
        {
            var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
            var email = $("#fos_user_registration_form_email").val();
            if(email.length == 0)
            {
                $('#fos_user_registration_form_email').css("border-bottom","2px solid #f26957");
                $("#error_email").css("display","block");
                $('#error_email').css("color","#f26957");
                $("#error_email").html("Entrez votre email");
            }
            else if (filter.test(email))
            {
                $('#fos_user_registration_form_email').css("border-bottom","2px solid #ffcc00");
                $('#fos_user_registration_form_email').css("color","#ffcc00");
                $('#fos_user_registration_form_email').css("color","#ffcc00");
                $('#error_email').css("color","#ffcc00").html('vérification...');
                if(email == "houssem.kraoua@esprit.tn" || email == "houssem.kraoua@esprit.com")
                {
                    $('#fos_user_registration_form_email').css("border-bottom","2px solid #f26957");
                                $('#fos_user_registration_form_email').css("color","#f26957");
                                $('#error_email').html(email+ '<br>' +'cette adresse  déja existe');
                                $('#error_email').css("color","#f26957");
                }
                else
                    {
                        $('#fos_user_registration_form_email').css("border-bottom","2px solid green");
                        $('#fos_user_registration_form_email').css("color","green");
                    $('#error_email').css('color','green').html('Available');
                                email_status = true;
                }
                // var dataPass = {email : $("#fos_user_registration_form_email").val()};
                // var path=$("#email_from_fos").attr("data-path");
                // $.ajax({
                //     type : 'POST',
                //     data : dataPass,
                //     url  : path,
                //     success: function(responseText)
                //     {
                //         if(responseText == 0)
                //         {
                //             $('#error_email').html('Available');
                //             email_status = true;
                //         }
                //
                //         else if(responseText > 0)
                //         {
                //             $('#fos_user_registration_form_email').css("border-bottom","2px solid #f26957");
                //             $('#fos_user_registration_form_email').css("color","#f26957");
                //             $('#error_email').html(email+ '<br>' +'already added canot use this email');
                //             $('#error_email').css("color","#f26957");
                //         }
                //
                //         else
                //         {
                //             alert("DB PROB :(");
                //             $('#error_email').html('DB PROB');
                //         }
                //     }
                // })
            }
            else if (!filter.test(email))
            {
                $('#fos_user_registration_form_email').css("border-bottom","2px solid #f26957");
                $('#error_email').html("Votre email n'est pas verifié");
                $('#error_email').css("color","#f26957");
            }
        }
        //adr
       function check_adr()
       {
           var adr = $("#fos_user_registration_form_adresse").val();
           if(adr.length == 0)
           {
               $('#fos_user_registration_form_adresse').css("border-bottom","2px solid #f26957");
               $("#error_adr").css("display","block");
               $('#error_adr').css("color","#f26957");
               $("#error_adr").html("Entrez votre adresse");
           }
           else if(adr.length >=  1)
           {
               $('#fos_user_registration_form_adresse').css("border-bottom","2px solid green");
               $('#error_adr ').css("color","green").html('verifiée');
               $('#error_adr ').css("display","block");
               adr_status = true;
           }
       }
    $("body").delegate("#signup-btn", "click", function () {
        check_nom();
        check_prenom();
        check_username();
        check_email();
        check_adr();
        if(nom_status == true && prenom_status == true &&  email_status == true && adr_status == true)
        {
            alert(":)");
            return true;
        }
        else
        {
            alert("verifier vos informations");
            return false;
        }
    })
})