
angular.module('app').controller("MainController", function(){
  var vm= this; 
  vm.title = 'Cars I owned throught out the years';
  vm.searchInput = '';
  vm.cars = [
{
  title: 'Infiniti G35',
year: 2005,
favorite: true
},
{
  title: 'Toyota Camry',
year: 2002,
favorite: false
},
{
  title: 'Subaru',
  year: 1999,
  favorite: false
},
{
  title: 'Benz Mercedes',
  year: 2004,
  favorite: true
},
{
  title: 'Nissan',
  year: 2005,
  favorite: false
}
];

vm.orders = [
{
  id: 1,
    title:'Year Ascending',
    key: 'year',
    reverse: false
},
{
  id: 2,
  title: 'Year Descending',
  key: 'year',
  reverse: true
},
{
  id: 3,
  title: 'Title Ascending',
  key: 'year',
  reverse: true
},
{
  id: 4,
  title: 'Title Ascending',
  key: 'title',
  reverse: true
}

];
 vm.order = vm.orders[0];
  vm.new = {};
  vm.addcar= function(){
    vm.cars.push(vm.new);
    
};
});

