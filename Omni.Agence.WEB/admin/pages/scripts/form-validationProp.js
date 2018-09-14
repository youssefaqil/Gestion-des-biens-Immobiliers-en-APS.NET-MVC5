var FormValidation = function () {

    // basic validation
    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#form_sample_1');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate(
                {
                //errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                //focusInvalid: false, // do not focus the last invalid input
                //ignore: "",  // validate all fields including form hidden input
                //messages: {
                //    select_multi: {
                //        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                //        minlength: jQuery.validator.format("At least {0} items must be selected")
                //    }
                //},
                rules: {
                    
                    nom: {
                        minlength: 3,
                        required: true
                    },
                    prenom: {
                        minlength: 3,
                        required: true
                    },
                    carteSejour: {
                        minlength: 3,
                        required: true
                    },
                    TelMobilPers: {
                        minlength: 3,
                        required: true
                    },
                   
                    EmailPers: {
                        required: false,
                        email: true
                    },
                    descAdresse: {
                        required: true
                        
                    },
                    quartier: {
                        required: true
                        
                    }
                },
                
                messages: { // custom messages for radio buttons and checkboxes
                    
                    nom: {
                        required: "Ce Champ est Obligatoire."
                    },
                    prenom: {
                        required: "Ce Champ est Obligatoire."
                    },
                    carteSejour: {
                        required: "Ce Champ est Obligatoire."
                    },
                    TelMobilPers: {
                        required: "Ce Champ est Obligatoire."
                    },
                    descAdresse: {
                        required: "Ce Champ est Obligatoire."
                    },
                    quartier: {
                        required: "Ce Champ est Obligatoire."
                    },
                    EmailPers: {
                        email: "Adresse mail invalide"
                    }
                },



                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    Metronic.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                //unhighlight: function (element) { // revert the change done by hightlight
                //    $(element)
                //        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                //},

                //success: function (label) {
                //    label
                //        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                //},

                //submitHandler: function (form) {
                //    success1.show();
                //    error1.hide();
                //}
            });


    }

    // validation using icons
    var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_sample_2');
            var error2 = $('.alert-danger', form2);
            var success2 = $('.alert-success', form2);

            form2.validate({

                //errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                //focusInvalid: false, // do not focus the last invalid input
                //ignore: "",  // validate all fields including form hidden input
                //messages: {
                //    select_multi: {
                //        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                //        minlength: jQuery.validator.format("At least {0} items must be selected")
                //    }
                //},
                rules: {

                    employeurM: {
                        minlength: 3,
                        required: true
                    },
                    activiteM: {
                        minlength: 3,
                        required: true
                    },
                    rcM: {
                        minlength: 3,
                        required: true
                    },
                    fixM: {
                        minlength: 3,
                        required: true
                    },
                    nomM: {
                        minlength: 3,
                        required: true
                    },
                    prenomM: {
                        minlength: 3,
                        required: true
                    },
                    mobileM: {
                        minlength: 3,
                        required: true
                    },
                    adresseM: {
                        minlength: 3,
                        required: true
                    },
                    quartierM: {
                        minlength: 3,
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes

                    employeurM: {
                        required: "Ce Champ est Obligatoire."
                    },
                    activiteM: {
                        required: "Ce Champ est Obligatoire."
                    }
                    
                },



                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success2.hide();
                    error2.show();
                    Metronic.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                //unhighlight: function (element) { // revert the change done by hightlight
                //    $(element)
                //        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                //},

                //success: function (label) {
                //    label
                //        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                //},

                //submitHandler: function (form) {
                //    success1.show();
                //    error1.hide();
                //}
            });


    }

    // advance validation
    var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#form_sample_3');
            var error3 = $('.alert-danger', form3);
            var success3 = $('.alert-success', form3);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form3.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form3.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "", // validate all fields including form hidden input
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },  
                    options1: {
                        required: true
                    },
                    options2: {
                        required: true
                    },
                    select2tags: {
                        required: true
                    },
                    datepicker: {
                        required: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    membership: {
                        required: true
                    },
                    service: {
                        required: true,
                        minlength: 2
                    },
                    markdown: {
                        required: true
                    },
                    editor1: {
                        required: true
                    },
                    editor2: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    membership: {
                        required: "Please select a Membership type"
                    },
                    service: {
                        required: "Please select  at least 2 types of Service",
                        minlength: jQuery.validator.format("Please select  at least {0} types of Service")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parent(".input-group").size() > 0) {
                        error.insertAfter(element.parent(".input-group"));
                    } else if (element.attr("data-error-container")) { 
                        error.appendTo(element.attr("data-error-container"));
                    } else if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else if (element.parents('.radio-inline').size() > 0) { 
                        error.appendTo(element.parents('.radio-inline').attr("data-error-container"));
                    } else if (element.parents('.checkbox-list').size() > 0) {
                        error.appendTo(element.parents('.checkbox-list').attr("data-error-container"));
                    } else if (element.parents('.checkbox-inline').size() > 0) { 
                        error.appendTo(element.parents('.checkbox-inline').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success3.hide();
                    error3.show();
                    Metronic.scrollTo(error3, -200);
                },

                highlight: function (element) { // hightlight error inputs
                   $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success3.show();
                    error3.hide();
                    form[0].submit(); // submit the form
                }

            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2me', form3).change(function () {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });

            // initialize select2 tags
            $("#select2_tags").change(function() {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input 
            }).select2({
                tags: ["red", "green", "blue", "yellow", "pink"]
            });

            //initialize datepicker
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                autoclose: true
            });
            $('.date-picker .form-control').change(function() {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input 
            })
    }

    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["../../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation2();
            handleValidation3();

        }

    };

}();