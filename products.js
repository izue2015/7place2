if (Meteor.isClient) {
    /*
     $(".button-collapse").sideNav();*/
    var productsData = [{
        'name': 'Collar',
        'description': 'Collar de acero',
        'price': 10.50,
        'image': 'http://lorempixel.com/300/300/'
    },
        {
            'name': 'Collar',
            'description': 'Collar de acero',
            'price': 10.50,
            'image': 'http://lorempixel.com/300/300/'
        },
        {
            'name': 'Collar 2',
            'description': 'Collar de acero',
            'price': 8.50,
            'image': 'http://lorempixel.com/300/300/'
        },
        {
            'name': 'Collar 3',
            'description': 'Collar de acero',
            'price': 5.50,
            'image': 'http://lorempixel.com/300/300/'
        },
        {
            'name': 'Collar 4',
            'description': 'Collar de acero',
            'price': 15.50,
            'image': 'http://lorempixel.com/300/300/'
        },
        {
            'name': 'Collar 5',
            'description': 'Collar de acero',
            'price': 25.50,
            'image': 'http://lorempixel.com/300/300/'
        },
        {
            'name': 'Collar 6',
            'description': 'Collar de acero',
            'price': 10.50,
            'image': 'http://lorempixel.com/300/300/'
        }
    ]
    Template.productItem.currency = function (number) {
        return 'S/.' + Number(number).toFixed(2);
    };
    Template.productList.helpers(
        {
            products: function () {
                var self = this;
                self.myArray = self.myArray || productsData;
                return _.map(self.myArray, function (value, index) {
                    return {value: value, index: index};
                });
            }
            /*products: productsData*/
        }
    );
}