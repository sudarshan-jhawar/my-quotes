(function() {
'use strict';

    angular
        .module('myQuotesApp')
        .controller('MyQuotesController', MyQuotesController);

    MyQuotesController.$inject = ['dataAccessService'];
    function MyQuotesController(dataAccessService) {
        var vm = this;
        
        activate();

        function activate() { 
            vm.quotes = dataAccessService.getQuotes();
        }
    }
})();