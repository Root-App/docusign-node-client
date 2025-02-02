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
    define(['ApiClient', 'model/CaptiveRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaptiveRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CaptiveRecipientInformation = factory(root.Docusign.ApiClient, root.Docusign.CaptiveRecipient);
  }
}(this, function(ApiClient, CaptiveRecipient) {
  'use strict';


  /**
   * The CaptiveRecipientInformation model module.
   * @module model/CaptiveRecipientInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>CaptiveRecipientInformation</code>.
   * @alias module:model/CaptiveRecipientInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CaptiveRecipientInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaptiveRecipientInformation} obj Optional instance to populate.
   * @return {module:model/CaptiveRecipientInformation} The populated <code>CaptiveRecipientInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('captiveRecipients')) {
        obj['captiveRecipients'] = ApiClient.convertToType(data['captiveRecipients'], [CaptiveRecipient]);
      }
    }
    return obj;
  }

  /**
   * A complex type containing information about one or more captive recipients.
   * @member {Array.<module:model/CaptiveRecipient>} captiveRecipients
   */
  exports.prototype['captiveRecipients'] = undefined;



  return exports;
}));


