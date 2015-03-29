Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'

});
Router.map(function() {
    this.route('products', {
        path: '/',
        action: function() {
            this.render();
        }
    });
    this.route('products2', {
        path: '/products2',
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