$(document).ready(function () {
    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
            $("#port").addClass("fade-in");
            $("#port_1").addClass("fade-in_1");
        }

    });


    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 1250) {
            $("#p_first").addClass("animated animatedFadeInUp fadeInUp_1");
            $("#p_second").addClass("animated animatedFadeInUp fadeInUp_2");
            $("#p_third").addClass("animated animatedFadeInUp fadeInUp_3");
            $("#p_fourth").addClass("animated animatedFadeInUp fadeInUp_4");
            $("#p_fifth").addClass("animated animatedFadeInUp fadeInUp_5");
            $("#p_sixth").addClass("animated animatedFadeInUp fadeInUp_6");
        }

    });


    // Scrolling effect for Arrow icons
    $("#scrollIcon").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    $("#nav-about").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    $("#nav-portfolio").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#portfolio"), 1000);
    });
    $("#nav-contact").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#contact"), 1000);
    });
    $(".navbar-brand").click(function (e) {
        e.preventDefault();
        $.scrollTo(0, 1000);
    });


    var html = new ProgressBar.Circle(HTML, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1500,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#dd4132', width: 6 },
      to: { color: '#9e1030', width: 6 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText(''+"%");
        } else {
          circle.setText(value+"%");
        }

      }
    });
    html.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    html.text.style.fontSize = '1.43rem';


    var css = new ProgressBar.Circle(CSSS, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1500,
      text: {
        autoStyleContainer: false
      },
        from: { color: '#2BAE66', width:6 },
        to: { color: '#2BAE66', width: 6 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText(''+"%");
        } else {
          circle.setText(value+"%");
        }

      }
    });
    css.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    css.text.style.fontSize = '1.43rem';


    var js = new ProgressBar.Circle(JS, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6,
      trailWidth: 6,
      easing: 'easeInOut',
      duration: 1500,
      text: {
        autoStyleContainer: false
      },
        from: { color: '#DF6589', width: 6},
        to: { color: '#DF6589', width: 6 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText(''+"%");
        } else {
          circle.setText(value+"%");
        }

      }
    });
    js.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    js.text.style.fontSize = '1.43rem';

    var php = new ProgressBar.Circle(PH, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#dd4132', width: 6 },
        to: { color: '#89ABE3', width: 6 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('' + "%");
            } else {
                circle.setText(value + "%");
            }

        }
    });
    php.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    php.text.style.fontSize = '1.43rem';

    var java = new ProgressBar.Circle(JAVA, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FC766A', width: 6 },
        to: { color: '#FC766A', width: 6 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('' + "%");
            } else {
                circle.setText(value + "%");
            }

        }
    });
    java.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    java.text.style.fontSize = '1.43rem';

    var c = new ProgressBar.Circle(CPLUS, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#dd4132', width: 6 },
        to: { color: '#89ABE3', width: 6 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('' + "%");
            } else {
                circle.setText(value + "%");
            }

        }
    });
    c.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    c.text.style.fontSize = '1.43rem';


    var and = new ProgressBar.Circle(ANDROID, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#5F4B8B', width: 6 },
        to: { color: '#5F4B8B', width: 6 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('' + "%");
            } else {
                circle.setText(value + "%");
            }

        }
    });
    and.text.style.fontFamily = '"Comfortaa", Helvetica, Arial, sans-serif';
    and.text.style.fontSize = '1.43rem';

    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 820) {
            html.animate(0.7);  // Number from 0.0 to 1.0 HTML
            css.animate(0.7);  // Number from 0.0 to 1.0 CSS
            js.animate(0.7);  // Number from 0.0 to 1.0 JavaScript
            php.animate(0.4);  // Number from 0.0 to 1.0 PHP
            java.animate(0.8);  // Number from 0.0 to 1.0 JAVA
            and.animate(0.4);  // Number from 0.0 to 1.0 Android Studio
            c.animate(0.8);  // Number from 0.0 to 1.0 C#/C++
        }

    });
});
