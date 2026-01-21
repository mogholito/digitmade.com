(function(d, $, w){
    /***********************************
    Configuration
    ***********************************/
    var launchDate = 'Oct 10, 2013' ; // Your Launch Date!
    var twitterScreenName = 'johndoe'; // Your Twitter Screen name
    var current_year = new Date().getFullYear();
    $('.copyright').html('&copy;'+current_year+' digitmade.com');

    /***********************************
    Other Variables
    ***********************************/
    var w = $(w),
        topSect       = $('.top-section'),
        topSectHeight = topSect.outerHeight(),  // includes padding
        seconds       = $(".unodos .seconds .digits"),
        minutes       = $(".unodos .minutes .digits"),
        hours         = $(".unodos .hours .digits"),
        days          = $(".unodos .days .digits")
        form          = $('#signup'),
        fieldset      = form.find('fieldset'),
        formAlert     = form.find('.alert'),
        inputCont     = form.find('.input-cont'),
        emailInput    = form.find('.email-input');

    // If the Window Height is greater than the top container,
    // set the height of the top container so that the 'See More" link
    // is always at the bottom of the viewport.
    //
    // @param height number the height to change the top section to
    function adjustHeight(height){
        if( height > topSectHeight )
            topSect.height( height ).css({'padding': 0});
    }

    // On window resize adjust the height of the container
    w.resize(function() {
        adjustHeight( w.height() );
    });

    // Adjust height on page load
    adjustHeight( w.height() );

    // Function to hide the address bar ion Iphone devices
    function hideIphoneBar() {
        if( !w.location.hash && w.addEventListener ){
            w.addEventListener( "load",function() {
                setTimeout(function(){
                    window.scrollTo(0, 0);
                }, 100);
            });
        }
    }


    /***********************************
    Tweets
    ***********************************/
    if ($.fn.jquery.tweet) {
    $(".tweets-ticker").tweet({
        username: twitterScreenName,  // SET TWITTER NAME HERE
        // Uncomment below to use a search term instead of a username
        // query: '#elementID',
        page: 1,
        avatar_size: 32,
        count: 10,
        loading_text: "loading ...",
        template: '{avatar}{text}'
    }).bind("loaded", function() {
        var ul  = $(this).find(".tweet_list"),
        ticker  = function() {
                    setTimeout(function() {
                        var item = ul.find('li:first');
                            height = item.height()+15;
                            item.animate( { marginTop: '-'+height+'px', 'opacity': '0'} , 500, function() {
                                    $(this).detach().appendTo(ul).removeAttr('style');
                            });
                        ticker();
                    }, 5000);
                };
        ticker();
    });
    // endif
    };

    /***********************************
    Countdown Timer
    ***********************************/
    // MediaLoot jQuery Countdown Timer
    // Description: Allows you to choose which unit of time from which to countdown and allows you to style each unit of time separately.
    // Author: Natalie Hipp | MediaLoot.com
    // URL: http://medialoot.com/item/

    // Pads numbers with a leading 0
    function pad(num) {
        var s = num+"";
        while (s.length < 2) s = "0" + s;
        return s;
    }

    // You can delete this function, it's only used for demo purposes to get a future date
    /*function futureDate() {
            var futureDate = new Date();
            futureDate.setDate(futureDate.getDate() + 30);

            dd = futureDate.getDate();
            mm = futureDate.getMonth() + 1;
            y = futureDate.getFullYear();

            futureFormattedDate = mm + '/'+ dd + '/'+ y;

            return futureFormattedDate;
    }*/


    function mlCountdown() {
        // Step 1: Launch Date of your site.
        // var launchDate  = futureDate(); // Demo Future Date

        var eventTime   = new Date(launchDate).getTime()/1000.0;
        var startFrom   = 'D'; // Adjust from which time unit you'd like to countdown: Use D for days, H for hours, M for minutes, or S for seconds.

        // We'll take it from here
        var currentTime = Math.round(new Date().getTime() / 1000); // Grabs current time in seconds
        var timeLeft = eventTime - currentTime;

        // Calculate numbers based on what kind of time they want to count from
        if (startFrom == 'S') {
            var scLeft = Math.floor(timeLeft);

            seconds.html( pad( scLeft ) );
        }
        else if (startFrom == 'M') {
            var minLeft = Math.floor(timeLeft / 60);
            var scLeft1 = timeLeft - (minLeft * 60); // number of whole minutes
            var scLeft = Math.floor(scLeft1);

            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
        else if (startFrom == 'H') {
            var hrLeft = Math.floor(timeLeft / 60 / 60);
            var minLeft1 = hrLeft * 60 * 60; // number of whole hours
            var minLeft2 = timeLeft - minLeft1;
            var minLeft = Math.floor(minLeft2 / 60);
            var scLeft1 = minLeft * 60; //number of whole minutes
            var scLeft2 = timeLeft - minLeft1 - scLeft1;
            var scLeft = Math.floor(scLeft2);

            hours.html( pad( hrLeft ) );
            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
        // Otherwise, default as if counting from days
        else {
            var dayLeft = Math.floor(timeLeft / 60 / 60 / 24);
            var hrLeft1 = dayLeft * 24 * 60 * 60; // days left in seconds
            var hrLeft2 = timeLeft - hrLeft1;
            var hrLeft = Math.floor(hrLeft2 / 60 / 60);
            var minLeft1 = hrLeft * 60 * 60; // hours left in seconds
            var minLeft2 = timeLeft - hrLeft1 - minLeft1;
            var minLeft = Math.floor(minLeft2 / 60);
            var scLeft1 = minLeft * 60; // minutes left in seconds
            var scLeft2 = timeLeft - hrLeft1 - minLeft1 - scLeft1;
            var scLeft = Math.floor(scLeft2);


            days.html( pad( dayLeft ) );
            hours.html( pad( hrLeft ) );
            minutes.html( pad( minLeft ) );
            seconds.html( pad( scLeft ) );
        }
    }

    var t = setInterval( mlCountdown, 1000);


    /***********************************
    PlaceHolders - Cross Browser
    ***********************************/
    var input = d.createElement("input");
    if(('placeholder' in input)==false) {
        $('[placeholder]').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if(i.hasClass('password')) {
                    i.removeClass('password');
                    this.type='password';
                }
            }
        }).blur(function() {
            var i = $(this);
            if(i.val() == '' || i.val() == i.attr('placeholder')) {
                if(this.type=='password') {
                    i.addClass('password');
                    this.type='text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if(i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }

    /***********************************
    Form Validation
    ***********************************/
    // validation method
    emailInput.isValidEmail = function(){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test( this.val() );
    }

    // On keyup notify validation status with icon
    emailInput.on('keyup change focus', function () {
        // If the input is not empty, begin to validate
        if( emailInput.val() != '' ){
            if( !emailInput.isValidEmail() ){
                if(!inputCont.hasClass('error'))
                    inputCont.removeClass('valid').addClass('error');
            }else{
                inputCont.removeClass('error').addClass('valid');
            }
            return;
        }

        // Else remove error and valid classes
        inputCont.removeClass('error').removeClass('valid');
    });

    /***********************************
    Form Submit
    ***********************************/
    function showAlert(response){
        if( response.type && response.message ){
            formAlert.html(response.message).addClass('alert-'+response.type).removeClass('hidden').fadeIn(400);
        }else{
            formAlert.html(response).removeClass('hidden').fadeIn(400);
        }
        formAlert.delay(5000).fadeOut(400);
    }
    // this is the id of the submit button
    form.submit(function () {
        $.ajax({
                type: form.attr('method'), // The forms input method
                url: form.attr('action'), // the script where you handle the form input
                data: form.serialize(), // serializes the form's elements
                success: function( response ){

                    // Fade the form out if successful
                    if( response.type == 'success' ){
                        fieldset.fadeOut(function(){
                            showAlert(response);
                        });
                        return;
                    }

                    showAlert(response);

                },
                error: function( response ){

                    showAlert(response);
                }
            });

        return false; // avoid to execute the actual submit of the form.
    });

    /***********************************
    Onload
    ***********************************/
    function winLoad(){
        // Fire the countdown timer
        mlCountdown();
    }

    window.onload = winLoad;

})(document, jQuery, window);