angular.module('WeatherApp')
    .controller('WeatherController', WeatherController);

function WeatherController($http) {
    var vm = this;

    vm.currentCity = " ";
    vm.searchHistory = [];
    vm.apiKey = "809e8d14ac7047d37c58fdc9c5acc9e2";


    vm.APIcall = function APIcall(city) {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=' + vm.apiKey
        }).then(function successCallback(response) {
            vm.currentCity = response.data;
            vm.date = new Date();
            vm.searchHistory.unshift({
                city: vm.currentCity.name,
                date: vm.date.toUTCString()
            });
            vm.citySearch = "";
            //  console.log(response.data);
        });
        //closes the function

      }
    } // closes controller
