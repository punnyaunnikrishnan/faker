/**
 *
 * @namespace faker.refrigerator
 */
 var refrigerator = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * refrigerator
     *
     * @method faker.refrigerator.refrigerator
     */
    self.refrigerator = function () {
      return fake('{{refrigerator.manufacturer}} {{refrigerator.model}}');
    };
  
    self.refrigerator.schema = {
      "description": "Generates a random regrigerator.",
      "sampleResults": ["bosch single door", "haier side by side door", "lloyd double door"]
    };
  
    /**
     * manufacturer
     *
     * @method faker.refrigerator.manufacturer
     */
    self.manufacturer = function () {
      return faker.random.arrayElement(faker.definitions.refrigerator.manufacturer);
    };
  
    self.manufacturer.schema = {
      "description": "Generates a manufacturer name.",
      "sampleResults": ["lloyd", "samsung", "godrej"]
    };
  
  
    /**
     * model
     *
     * @method faker.refrigerator.model
     */
    self.model = function () {
      return faker.random.arrayElement(faker.definitions.refrigerator.model);
    };
  
    self.model.schema = {
      "description": "Generates a refrigerator model.",
      "sampleResults": ["single door", "side by side door", "double door"]
    };
  
    /**
     * country_of_origin
     *
     * @method faker.refrigerator.country_of_origin
     */
    self.country_of_origin = function () {
      return faker.random.arrayElement(faker.definitions.refrigerator.country_of_origin);
    };
  
    self.country_of_origin.schema = {
      "description": "Generates a refrigerator country_of_origin.",
      "sampleResults": ["india", "china", "USA", "japan"]
    };
  
    /**
     * power_consumption
     *
     * @method faker.refrigerator.power_consumption
     */
    self.power_consumption = function () {
      return faker.random.arrayElement(faker.definitions.refrigerator.power_consumption);
    };
  
    self.power_consumption.schema = {
      "description": "Generates a refrigerators power consumption.",
      "sampleResults": ["33kWt", "42kWt", "60kWt"]
    };
  
    /**
     * vin
     *
     * @method faker.refrigerator.vin
     */
    self.vin = function () {
      return (
        faker.random.alphaNumeric(10) +
        faker.random.alpha({ count: 1, upcase: true }) +
        faker.random.alphaNumeric(1) +
        faker.random.number({ min: 10000, max: 100000}) // return five digit #
      ).toUpperCase();
    };
  
    self.vin.schema = {
      "description": "Generates a valid VIN number.",
      "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
    };
  
    /**
     * color
     *
     * @method faker.refrigerator.color
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };
  
    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["red", "white", "black"]
    };
  };
  
  module["exports"] = refrigerator;
  