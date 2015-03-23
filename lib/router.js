Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'

});
Router.map(function() {
    this.route('product', {
        path: '/',
        action: function() {
            this.render();
        }
    });
});

/*
Router.route('product', {
    path: '/',
    template: 'product',

    action: function () {
               this.render();

    }

});
Router.route('subcategories', {
    path: '/subcategories',
    template: 'subcategories',

    action: function () {
        this.render();

    }

});
Router.route('models', {
    path: '/models',
    template: 'models',

    action: function () {
        this.render();

    }

});
*/