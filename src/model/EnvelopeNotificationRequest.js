/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Expirations', 'model/Reminders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Expirations'), require('./Reminders'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeNotificationRequest = factory(root.Docusign.ApiClient, root.Docusign.Expirations, root.Docusign.Reminders);
  }
}(this, function(ApiClient, Expirations, Reminders) {
  'use strict';


  /**
   * The EnvelopeNotificationRequest model module.
   * @module model/EnvelopeNotificationRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeNotificationRequest</code>.
   * @alias module:model/EnvelopeNotificationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeNotificationRequest} obj Optional instance to populate.
   * @return {module:model/EnvelopeNotificationRequest} The populated <code>EnvelopeNotificationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirations')) {
        obj['expirations'] = Expirations.constructFromObject(data['expirations']);
      }
      if (data.hasOwnProperty('reminders')) {
        obj['reminders'] = Reminders.constructFromObject(data['reminders']);
      }
      if (data.hasOwnProperty('useAccountDefaults')) {
        obj['useAccountDefaults'] = ApiClient.convertToType(data['useAccountDefaults'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Expirations} expirations
   */
  exports.prototype['expirations'] = undefined;
  /**
   * @member {module:model/Reminders} reminders
   */
  exports.prototype['reminders'] = undefined;
  /**
   * 
   * @member {String} useAccountDefaults
   */
  exports.prototype['useAccountDefaults'] = undefined;



  return exports;
}));


