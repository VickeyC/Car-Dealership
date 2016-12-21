namespace CarDealership.Controllers {

    export class CarDetailController {
        public carDetail;

        public ok() {
            this.$uibModalInstance.close();
        };

        public showDetail() {
            this.carDetail = this.carDetailService.getDetail(this.id);
        };

        //inject the $resource service into the constructor thru dependency injection to retrieve the car detail for the selected car
        constructor(public id: number, private carDetailService: CarDealership.Services.CarDetailService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
            this.showDetail();
        }
    }


    //Controller to list all cars
    export class CarsListController {
        public cars;
        public carMakes;
        public selectedMake;
        public searchArg;


        //Open the modal detail box
        public openDialog(id: number) {
            this.$uibModal.open({
                templateUrl: '/ngApp/modals/detail.html',
                controller: CarDetailController,
                controllerAs: 'modal',
                resolve: {
                    id: () => id
                },
                size: 'lg'

            })
        };

        //Filter the records by Make ID 
        debugger;
        public filterByMake(makeId: number) {
            for (let i = 0; i < this.cars.length; i++)
            {
                if (this.carMakes.id = this.cars.carMakeId) {
                    this.searchArg = this.cars.carMakeId;
                }
            }

            return this.searchArg;

        }



        //inject the $resource service into the constructor thru dependency injection to retrieve the list of cars
        constructor(carsListService: CarDealership.Services.CarsListService, getMakesService: CarDealership.Services.GetMakesService, private $uibModal: angular.ui.bootstrap.IModalService) {
            this.cars = carsListService.listCars();
            this.carMakes = getMakesService.getMakes();
        }
    }


    //controller to retrieve all car makes
    export class GetMakesController {
        public carMakes;
        public selectedMake;

        //inject the $resource service into the constructor thru dependency injection to retrieve the list of car makes
        constructor(getMakesService: CarDealership.Services.GetMakesService) {
            this.carMakes = getMakesService.getMakes();
        }

    }

}
