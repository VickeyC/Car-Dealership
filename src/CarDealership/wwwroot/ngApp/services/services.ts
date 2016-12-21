namespace CarDealership.Services {

 //Create a service to retrieve the list of cars
    export class CarsListService {
        private CarsListResource;

        public listCars() {
            return this.CarsListResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarsListResource = $resource('/api/cars');
        }
    }
    angular.module('CarDealership').service('carsListService', CarsListService);


//Create a service to retrieve all makes of cars
    export class GetMakesService {
        private GetMakesResource;

        public getMakes() {
            let result = this.GetMakesResource.query();
            return this.GetMakesResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.GetMakesResource = $resource('/api/makes');
        }
    }
    angular.module('CarDealership').service('getMakesService', GetMakesService);

        
//create a service to retrieve details for a specific car
    export class CarDetailService {
        private CarDetailResource;

        public getDetail(id) {
            return this.CarDetailResource.get({ id: id });
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarDetailResource = $resource('/api/cars/:id');
        }
    }
    angular.module('CarDealership').service('carDetailService', CarDetailService);

}


