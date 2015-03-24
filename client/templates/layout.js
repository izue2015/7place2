Template.layout.rendered = function () {
    $(".button-collapse").sideNav();
};

Template.layout.events({
    'click a': function(e, template) {
    //e.preventDefault();
        $('.button-collapse').sideNav('hide');

}
});
