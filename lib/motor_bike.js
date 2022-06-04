/**
 *
 * @namespace faker.motor_bike
 */
 var motor_bike = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * motor_bike
   *
   * @method faker.motor_bike.motor_bike
   */
  self.motor_bike = function () {
    return fake('{{motor_bike.manufacturer}} {{motor_bike.Models}}');
  };

  self.motor_bike.schema = {
    "description": "Generates a random motor_bike.",
    "sampleResults": ["Suzuki Jupiter", "Honda NTORQ", "Yamaha Hayabusa"]
  };

  /**
   * manufacturer
   *
   * @method faker.motor_bike.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.motor_bike.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Suzuki", "Honda", "Yamaha"]
  };


  /**
   * ModelS
   *
   * @method faker.motor_bike.Models
   */
  self.Models = function () {
    return faker.random.arrayElement(faker.definitions.motor_bike.Models);
  };

  self.Models.schema = {
    "description": "Generates a motor bike model.",
    "sampleResults": ["Jupiter", "NTORQ", "Hayabusa"]
  };

  /**
   * motor_bike_type
   *
   * @method faker.motor_bike.motor_bike_type
   */
  self.motor_bike_type = function () {
    return faker.random.arrayElement(faker.definitions.motor_bike.motor_bike_type);
  };

  self.motor_bike_type.schema = {
    "description": "Generates a motor bike type.",
    "sampleResults": ["Cruiser", "Adventure", "Scooter", "Sports bike"]
  };

  
};

module["exports"] = motor_bike;