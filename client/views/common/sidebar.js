Template.sidebar.helpers({

});


Template.sidebar.onRendered(function () {
    $('#menu_button').click(function() {
        $('#menu').sidebar('setting', {dimPage: false});
        $('#menu').sidebar('toggle');
        console.log($('.ui.dropdown'));
        $('.ui.dropdown').dropdown();
    });
});
