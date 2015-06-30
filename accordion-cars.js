angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('Cars', function ($scope) {
    $scope.accordionGroups = ["make", "category", "model", "comment"];
    $scope.model = {
        make: null,
        category: null,
        model: null,
        comment: null
    }
    $scope.selection = {
        make: {
            value: null,
            isSet: false,
            isOpen: true
        },
        category: {
            value: null,
            isSet: false,
            isOpen: false
        },
        model: {
            value: null,
            isSet: false,
            isOpen: false
        },
        comment: {
            value: null,
            isSet: false,
            isOpen: false
        }
    };
    $scope.setSelection = function (key, value) {
        switch (key) {
            case 'make':
                if (value != $scope.selection.make.value) {
                    $scope.resetSelection(["category", "model", "comment"]);
                    $scope.resetModel(key);
                }
                //$scope.setModel(value);
                break;
            case 'category':
                if (value != $scope.selection.category.value)
                    $scope.resetSelection(["model", "comment"]);
                //$scope.setMethods(value);
                break;
            default:
                break;
        }
        $scope.selection[key].value = value;
        $scope.selection[key].isSet = true;
        $scope.selection[key].isOpen = false;
        var nextIndex = $scope.accordionGroups.indexOf(key) + 1;
        var nextKey = $scope.accordionGroups[nextIndex];
        if (nextKey)
            $scope.selection[nextKey].isOpen = true;
    }
    $scope.resetSelection = function (keysArr) {
        keysArr.forEach( function (element) {
            $scope.selection[element] = {
                value: null,
                isSet: false,
                isOpen: false
            }
        })
    }
    $scope.setModel = function (key, value) {
        $scope.model[key] = value[key];
    }
    $scope.resetModel = function (key) {
        switch (key) {
            case 'make':
                $scope.model.category = null;
                $scope.model.model = null;
                $scope.comment = null;
                break;
            case 'category':
                $scope.model.model = null;
                $scope.comment = null;
                break;
            case 'model':
                $scope.comment = null;
                break;
            default:
                break;
        }
    }
    // make/category/model
    $scope.sampleData = {
        makes: [
            {
                name: 'Subaru',
                category: [
                    {
                        name: 'Wagon',
                        model: ['Forester', 'Legacy']
                    },
                    {
                        name: 'Hatchback',
                        model: ['Outback', 'Impreza']
                    }

                ]
            },
            {
                name: 'Acura',
                category: [
                    {
                        name: 'Sedan',
                        model: ['Legend', 'TL', 'RL']
                    },
                    {
                        name: 'SUV',
                        model: ['RDX', 'MDX']
                    }

                ]
            },
            {
                name: 'Honda',
                category: [
                    {
                        name: 'Coupe',
                        model: ['Civic', 'CR-X', 'Del Sol']
                    },
                    {
                        name: 'Sedan',
                        model: ['Civic', 'Accord']
                    }

                ]
            }
        ]
    }
/*    // make > category > model > style
    $scope.sampleData= {
        cars: {
            "make": [
                {
                    "name": "Mazda",
                    "category": [
                        {
                            "name": "Sedan",
                            "model": [
                                {
                                    "name": 'Mazda 6',
                                    style: ["a", "b", "c"]
                                }
                            ]
                        },
                        {
                            "name": "Hatchback",
                            "years": [2000, 2001, 2002]
                        },
                        {
                            "name": "Coupe",
                            "years": [2000, 2001, 2002]
                        }
                    ]
                },
                {
                    "name": "Acura",
                    "models": [
                        {
                            "name": "TL",
                            "years": [2000, 2001, 2002]
                        },
                        {
                            "name": "RL",
                            "years": [2000, 2001, 2002]
                        },
                        {
                            "name": "Integra",
                            "years": [2000, 2001, 2002]
                        }
                    ]
                },
                {
                    "name": "Subaru",
                    "models": [
                        {
                            "name": "Outback",
                            "years": [2000, 2001, 2002]
                        },
                        {
                            "name": "Forester",
                            "years": [2000, 2001, 2002]
                        },
                        {
                            "name": "Legacy",
                            "years": [2000, 2001, 2002]
                        }
                    ]
                }
            ]
        }
    };

    $scope.exampleSelector = make['mazda'].category['sedan'].model['mazda3'].style['iTouringHatch4D'];

    // make > category > model > style
    $scope.sampleCarData = {
        name: 'make',
        data: ['mazda', 'volvo', 'subaru', 'volkswagen'],
        child: {
            name: 'category',
            data: [],
            child: {
                name: 'model',
                data: [],
                child: {
                    name: 'style',
                    data: []
                }
            }
        }
    };*/
});