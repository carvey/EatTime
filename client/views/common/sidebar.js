Template.sidebar.helpers({

});


Template.sidebar.onRendered(function () {
    $('#menu_button').click(function() {
        $('#menu').sidebar('setting', {dimPage: true});
        $('#menu').sidebar('toggle');
        console.log($('.ui.dropdown'));
        $('.ui.dropdown').dropdown();
    });
});

