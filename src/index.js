/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AccountInformation', 'model/AccountSettingsInformation', 'model/AccountSharedAccess', 'model/AddressInformation', 'model/AddressInformationInput', 'model/Agent', 'model/ApiRequestLog', 'model/ApiRequestLogsResult', 'model/Approve', 'model/Attachment', 'model/AuthenticationStatus', 'model/BccEmailAddress', 'model/BulkEnvelope', 'model/BulkEnvelopeStatus', 'model/CarbonCopy', 'model/CertifiedDelivery', 'model/Checkbox', 'model/Company', 'model/CompositeTemplate', 'model/ConsoleViewRequest', 'model/CorrectViewRequest', 'model/CustomFieldV2', 'model/CustomFields', 'model/CustomFieldsEnvelope', 'model/DateSigned', 'model/Decline', 'model/DiagnosticsSettingsInformation', 'model/DobInformationInput', 'model/Document', 'model/DocumentFieldsInformation', 'model/DocumentTemplate', 'model/DocumentTemplateList', 'model/Editor', 'model/Email', 'model/EmailAddress', 'model/EmailSettings', 'model/Envelope', 'model/EnvelopeAuditEvent', 'model/EnvelopeAuditEventResponse', 'model/EnvelopeDefinition', 'model/EnvelopeDocument', 'model/EnvelopeDocumentsResult', 'model/EnvelopeEvent', 'model/EnvelopeId', 'model/EnvelopeIdsRequest', 'model/EnvelopeSummary', 'model/EnvelopeTemplate', 'model/EnvelopeTemplateDefinition', 'model/EnvelopeTemplateResult', 'model/EnvelopeTemplateResults', 'model/EnvelopeTransactionStatus', 'model/EnvelopeUpdateSummary', 'model/EnvelopesInformation', 'model/ErrorDetails', 'model/EventNotification', 'model/EventResult', 'model/Expirations', 'model/FileType', 'model/FileTypeList', 'model/Filter', 'model/FirstName', 'model/Folder', 'model/FolderItem', 'model/FolderItemResponse', 'model/FolderItemV2', 'model/FolderItemsResponse', 'model/FoldersRequest', 'model/FoldersResponse', 'model/FormulaTab', 'model/FullName', 'model/Group', 'model/GroupInformation', 'model/IdCheckInformationInput', 'model/InPersonSigner', 'model/InitialHere', 'model/InlineTemplate', 'model/Intermediary', 'model/LastName', 'model/List', 'model/ListCustomField', 'model/ListItem', 'model/LockInformation', 'model/LockRequest', 'model/LoginAccount', 'model/LoginInformation', 'model/MatchBox', 'model/MemberSharedItems', 'model/MergeField', 'model/ModelDate', 'model/ModelNumber', 'model/NameValue', 'model/Note', 'model/Notification', 'model/OfflineAttributes', 'model/PageRequest', 'model/Radio', 'model/RadioGroup', 'model/RecipientEmailNotification', 'model/RecipientEvent', 'model/RecipientPhoneAuthentication', 'model/RecipientSAMLAuthentication', 'model/RecipientSMSAuthentication', 'model/RecipientSignatureInformation', 'model/RecipientUpdateResponse', 'model/RecipientViewRequest', 'model/Recipients', 'model/RecipientsUpdateSummary', 'model/Reminders', 'model/ResourceInformation', 'model/ReturnUrlRequest', 'model/SamlAssertionAttribute', 'model/SenderEmailNotifications', 'model/ServerTemplate', 'model/ServiceInformation', 'model/ServiceVersion', 'model/SharedItem', 'model/SignHere', 'model/SignatureType', 'model/Signer', 'model/SignerAttachment', 'model/SignerEmailNotifications', 'model/SocialAuthentication', 'model/Ssn', 'model/Ssn4InformationInput', 'model/Ssn9InformationInput', 'model/TabMetadata', 'model/TabMetadataList', 'model/Tabs', 'model/TemplateCustomFields', 'model/TemplateDocumentsResult', 'model/TemplateInformation', 'model/TemplateMatch', 'model/TemplateNotificationRequest', 'model/TemplateRecipients', 'model/TemplateRole', 'model/TemplateSummary', 'model/TemplateTabs', 'model/TemplateUpdateSummary', 'model/Text', 'model/TextCustomField', 'model/Title', 'model/UserInfo', 'model/UserSettingsInformation', 'model/ViewLinkRequest', 'model/ViewUrl', 'model/Zip', 'api/AccountsApi', 'api/AuthenticationApi', 'api/CustomTabsApi', 'api/DiagnosticsApi', 'api/EnvelopesApi', 'api/FoldersApi', 'api/TemplatesApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AccountInformation'), require('./model/AccountSettingsInformation'), require('./model/AccountSharedAccess'), require('./model/AddressInformation'), require('./model/AddressInformationInput'), require('./model/Agent'), require('./model/ApiRequestLog'), require('./model/ApiRequestLogsResult'), require('./model/Approve'), require('./model/Attachment'), require('./model/AuthenticationStatus'), require('./model/BccEmailAddress'), require('./model/BulkEnvelope'), require('./model/BulkEnvelopeStatus'), require('./model/CarbonCopy'), require('./model/CertifiedDelivery'), require('./model/Checkbox'), require('./model/Company'), require('./model/CompositeTemplate'), require('./model/ConsoleViewRequest'), require('./model/CorrectViewRequest'), require('./model/CustomFieldV2'), require('./model/CustomFields'), require('./model/CustomFieldsEnvelope'), require('./model/DateSigned'), require('./model/Decline'), require('./model/DiagnosticsSettingsInformation'), require('./model/DobInformationInput'), require('./model/Document'), require('./model/DocumentFieldsInformation'), require('./model/DocumentTemplate'), require('./model/DocumentTemplateList'), require('./model/Editor'), require('./model/Email'), require('./model/EmailAddress'), require('./model/EmailSettings'), require('./model/Envelope'), require('./model/EnvelopeAuditEvent'), require('./model/EnvelopeAuditEventResponse'), require('./model/EnvelopeDefinition'), require('./model/EnvelopeDocument'), require('./model/EnvelopeDocumentsResult'), require('./model/EnvelopeEvent'), require('./model/EnvelopeId'), require('./model/EnvelopeIdsRequest'), require('./model/EnvelopeSummary'), require('./model/EnvelopeTemplate'), require('./model/EnvelopeTemplateDefinition'), require('./model/EnvelopeTemplateResult'), require('./model/EnvelopeTemplateResults'), require('./model/EnvelopeTransactionStatus'), require('./model/EnvelopeUpdateSummary'), require('./model/EnvelopesInformation'), require('./model/ErrorDetails'), require('./model/EventNotification'), require('./model/EventResult'), require('./model/Expirations'), require('./model/FileType'), require('./model/FileTypeList'), require('./model/Filter'), require('./model/FirstName'), require('./model/Folder'), require('./model/FolderItem'), require('./model/FolderItemResponse'), require('./model/FolderItemV2'), require('./model/FolderItemsResponse'), require('./model/FoldersRequest'), require('./model/FoldersResponse'), require('./model/FormulaTab'), require('./model/FullName'), require('./model/Group'), require('./model/GroupInformation'), require('./model/IdCheckInformationInput'), require('./model/InPersonSigner'), require('./model/InitialHere'), require('./model/InlineTemplate'), require('./model/Intermediary'), require('./model/LastName'), require('./model/List'), require('./model/ListCustomField'), require('./model/ListItem'), require('./model/LockInformation'), require('./model/LockRequest'), require('./model/LoginAccount'), require('./model/LoginInformation'), require('./model/MatchBox'), require('./model/MemberSharedItems'), require('./model/MergeField'), require('./model/ModelDate'), require('./model/ModelNumber'), require('./model/NameValue'), require('./model/Note'), require('./model/Notification'), require('./model/OfflineAttributes'), require('./model/PageRequest'), require('./model/Radio'), require('./model/RadioGroup'), require('./model/RecipientEmailNotification'), require('./model/RecipientEvent'), require('./model/RecipientPhoneAuthentication'), require('./model/RecipientSAMLAuthentication'), require('./model/RecipientSMSAuthentication'), require('./model/RecipientSignatureInformation'), require('./model/RecipientUpdateResponse'), require('./model/RecipientViewRequest'), require('./model/Recipients'), require('./model/RecipientsUpdateSummary'), require('./model/Reminders'), require('./model/ResourceInformation'), require('./model/ReturnUrlRequest'), require('./model/SamlAssertionAttribute'), require('./model/SenderEmailNotifications'), require('./model/ServerTemplate'), require('./model/ServiceInformation'), require('./model/ServiceVersion'), require('./model/SharedItem'), require('./model/SignHere'), require('./model/SignatureType'), require('./model/Signer'), require('./model/SignerAttachment'), require('./model/SignerEmailNotifications'), require('./model/SocialAuthentication'), require('./model/Ssn'), require('./model/Ssn4InformationInput'), require('./model/Ssn9InformationInput'), require('./model/TabMetadata'), require('./model/TabMetadataList'), require('./model/Tabs'), require('./model/TemplateCustomFields'), require('./model/TemplateDocumentsResult'), require('./model/TemplateInformation'), require('./model/TemplateMatch'), require('./model/TemplateNotificationRequest'), require('./model/TemplateRecipients'), require('./model/TemplateRole'), require('./model/TemplateSummary'), require('./model/TemplateTabs'), require('./model/TemplateUpdateSummary'), require('./model/Text'), require('./model/TextCustomField'), require('./model/Title'), require('./model/UserInfo'), require('./model/UserSettingsInformation'), require('./model/ViewLinkRequest'), require('./model/ViewUrl'), require('./model/Zip'), require('./api/AccountsApi'), require('./api/AuthenticationApi'), require('./api/CustomTabsApi'), require('./api/DiagnosticsApi'), require('./api/EnvelopesApi'), require('./api/FoldersApi'), require('./api/TemplatesApi'), require('./api/UsersApi'));
  }
}(function(Configuration, ApiClient, AccountInformation, AccountSettingsInformation, AccountSharedAccess, AddressInformation, AddressInformationInput, Agent, ApiRequestLog, ApiRequestLogsResult, Approve, Attachment, AuthenticationStatus, BccEmailAddress, BulkEnvelope, BulkEnvelopeStatus, CarbonCopy, CertifiedDelivery, Checkbox, Company, CompositeTemplate, ConsoleViewRequest, CorrectViewRequest, CustomFieldV2, CustomFields, CustomFieldsEnvelope, DateSigned, Decline, DiagnosticsSettingsInformation, DobInformationInput, Document, DocumentFieldsInformation, DocumentTemplate, DocumentTemplateList, Editor, Email, EmailAddress, EmailSettings, Envelope, EnvelopeAuditEvent, EnvelopeAuditEventResponse, EnvelopeDefinition, EnvelopeDocument, EnvelopeDocumentsResult, EnvelopeEvent, EnvelopeId, EnvelopeIdsRequest, EnvelopeSummary, EnvelopeTemplate, EnvelopeTemplateDefinition, EnvelopeTemplateResult, EnvelopeTemplateResults, EnvelopeTransactionStatus, EnvelopeUpdateSummary, EnvelopesInformation, ErrorDetails, EventNotification, EventResult, Expirations, FileType, FileTypeList, Filter, FirstName, Folder, FolderItem, FolderItemResponse, FolderItemV2, FolderItemsResponse, FoldersRequest, FoldersResponse, FormulaTab, FullName, Group, GroupInformation, IdCheckInformationInput, InPersonSigner, InitialHere, InlineTemplate, Intermediary, LastName, List, ListCustomField, ListItem, LockInformation, LockRequest, LoginAccount, LoginInformation, MatchBox, MemberSharedItems, MergeField, ModelDate, ModelNumber, NameValue, Note, Notification, OfflineAttributes, PageRequest, Radio, RadioGroup, RecipientEmailNotification, RecipientEvent, RecipientPhoneAuthentication, RecipientSAMLAuthentication, RecipientSMSAuthentication, RecipientSignatureInformation, RecipientUpdateResponse, RecipientViewRequest, Recipients, RecipientsUpdateSummary, Reminders, ResourceInformation, ReturnUrlRequest, SamlAssertionAttribute, SenderEmailNotifications, ServerTemplate, ServiceInformation, ServiceVersion, SharedItem, SignHere, SignatureType, Signer, SignerAttachment, SignerEmailNotifications, SocialAuthentication, Ssn, Ssn4InformationInput, Ssn9InformationInput, TabMetadata, TabMetadataList, Tabs, TemplateCustomFields, TemplateDocumentsResult, TemplateInformation, TemplateMatch, TemplateNotificationRequest, TemplateRecipients, TemplateRole, TemplateSummary, TemplateTabs, TemplateUpdateSummary, Text, TextCustomField, Title, UserInfo, UserSettingsInformation, ViewLinkRequest, ViewUrl, Zip, AccountsApi, AuthenticationApi, CustomTabsApi, DiagnosticsApi, EnvelopesApi, FoldersApi, TemplatesApi, UsersApi) {
  'use strict';

  /**
   * DocuSign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Docusign = require('index'); // See note below*.
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountInformation model constructor.
     * @property {module:model/AccountInformation}
     */
    AccountInformation: AccountInformation,
    /**
     * The AccountSettingsInformation model constructor.
     * @property {module:model/AccountSettingsInformation}
     */
    AccountSettingsInformation: AccountSettingsInformation,
    /**
     * The AccountSharedAccess model constructor.
     * @property {module:model/AccountSharedAccess}
     */
    AccountSharedAccess: AccountSharedAccess,
    /**
     * The AddressInformation model constructor.
     * @property {module:model/AddressInformation}
     */
    AddressInformation: AddressInformation,
    /**
     * The AddressInformationInput model constructor.
     * @property {module:model/AddressInformationInput}
     */
    AddressInformationInput: AddressInformationInput,
    /**
     * The Agent model constructor.
     * @property {module:model/Agent}
     */
    Agent: Agent,
    /**
     * The ApiRequestLog model constructor.
     * @property {module:model/ApiRequestLog}
     */
    ApiRequestLog: ApiRequestLog,
    /**
     * The ApiRequestLogsResult model constructor.
     * @property {module:model/ApiRequestLogsResult}
     */
    ApiRequestLogsResult: ApiRequestLogsResult,
    /**
     * The Approve model constructor.
     * @property {module:model/Approve}
     */
    Approve: Approve,
    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment: Attachment,
    /**
     * The AuthenticationStatus model constructor.
     * @property {module:model/AuthenticationStatus}
     */
    AuthenticationStatus: AuthenticationStatus,
    /**
     * The BccEmailAddress model constructor.
     * @property {module:model/BccEmailAddress}
     */
    BccEmailAddress: BccEmailAddress,
    /**
     * The BulkEnvelope model constructor.
     * @property {module:model/BulkEnvelope}
     */
    BulkEnvelope: BulkEnvelope,
    /**
     * The BulkEnvelopeStatus model constructor.
     * @property {module:model/BulkEnvelopeStatus}
     */
    BulkEnvelopeStatus: BulkEnvelopeStatus,
    /**
     * The CarbonCopy model constructor.
     * @property {module:model/CarbonCopy}
     */
    CarbonCopy: CarbonCopy,
    /**
     * The CertifiedDelivery model constructor.
     * @property {module:model/CertifiedDelivery}
     */
    CertifiedDelivery: CertifiedDelivery,
    /**
     * The Checkbox model constructor.
     * @property {module:model/Checkbox}
     */
    Checkbox: Checkbox,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The CompositeTemplate model constructor.
     * @property {module:model/CompositeTemplate}
     */
    CompositeTemplate: CompositeTemplate,
    /**
     * The ConsoleViewRequest model constructor.
     * @property {module:model/ConsoleViewRequest}
     */
    ConsoleViewRequest: ConsoleViewRequest,
    /**
     * The CorrectViewRequest model constructor.
     * @property {module:model/CorrectViewRequest}
     */
    CorrectViewRequest: CorrectViewRequest,
    /**
     * The CustomFieldV2 model constructor.
     * @property {module:model/CustomFieldV2}
     */
    CustomFieldV2: CustomFieldV2,
    /**
     * The CustomFields model constructor.
     * @property {module:model/CustomFields}
     */
    CustomFields: CustomFields,
    /**
     * The CustomFieldsEnvelope model constructor.
     * @property {module:model/CustomFieldsEnvelope}
     */
    CustomFieldsEnvelope: CustomFieldsEnvelope,
    /**
     * The DateSigned model constructor.
     * @property {module:model/DateSigned}
     */
    DateSigned: DateSigned,
    /**
     * The Decline model constructor.
     * @property {module:model/Decline}
     */
    Decline: Decline,
    /**
     * The DiagnosticsSettingsInformation model constructor.
     * @property {module:model/DiagnosticsSettingsInformation}
     */
    DiagnosticsSettingsInformation: DiagnosticsSettingsInformation,
    /**
     * The DobInformationInput model constructor.
     * @property {module:model/DobInformationInput}
     */
    DobInformationInput: DobInformationInput,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The DocumentFieldsInformation model constructor.
     * @property {module:model/DocumentFieldsInformation}
     */
    DocumentFieldsInformation: DocumentFieldsInformation,
    /**
     * The DocumentTemplate model constructor.
     * @property {module:model/DocumentTemplate}
     */
    DocumentTemplate: DocumentTemplate,
    /**
     * The DocumentTemplateList model constructor.
     * @property {module:model/DocumentTemplateList}
     */
    DocumentTemplateList: DocumentTemplateList,
    /**
     * The Editor model constructor.
     * @property {module:model/Editor}
     */
    Editor: Editor,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The EmailAddress model constructor.
     * @property {module:model/EmailAddress}
     */
    EmailAddress: EmailAddress,
    /**
     * The EmailSettings model constructor.
     * @property {module:model/EmailSettings}
     */
    EmailSettings: EmailSettings,
    /**
     * The Envelope model constructor.
     * @property {module:model/Envelope}
     */
    Envelope: Envelope,
    /**
     * The EnvelopeAuditEvent model constructor.
     * @property {module:model/EnvelopeAuditEvent}
     */
    EnvelopeAuditEvent: EnvelopeAuditEvent,
    /**
     * The EnvelopeAuditEventResponse model constructor.
     * @property {module:model/EnvelopeAuditEventResponse}
     */
    EnvelopeAuditEventResponse: EnvelopeAuditEventResponse,
    /**
     * The EnvelopeDefinition model constructor.
     * @property {module:model/EnvelopeDefinition}
     */
    EnvelopeDefinition: EnvelopeDefinition,
    /**
     * The EnvelopeDocument model constructor.
     * @property {module:model/EnvelopeDocument}
     */
    EnvelopeDocument: EnvelopeDocument,
    /**
     * The EnvelopeDocumentsResult model constructor.
     * @property {module:model/EnvelopeDocumentsResult}
     */
    EnvelopeDocumentsResult: EnvelopeDocumentsResult,
    /**
     * The EnvelopeEvent model constructor.
     * @property {module:model/EnvelopeEvent}
     */
    EnvelopeEvent: EnvelopeEvent,
    /**
     * The EnvelopeId model constructor.
     * @property {module:model/EnvelopeId}
     */
    EnvelopeId: EnvelopeId,
    /**
     * The EnvelopeIdsRequest model constructor.
     * @property {module:model/EnvelopeIdsRequest}
     */
    EnvelopeIdsRequest: EnvelopeIdsRequest,
    /**
     * The EnvelopeSummary model constructor.
     * @property {module:model/EnvelopeSummary}
     */
    EnvelopeSummary: EnvelopeSummary,
    /**
     * The EnvelopeTemplate model constructor.
     * @property {module:model/EnvelopeTemplate}
     */
    EnvelopeTemplate: EnvelopeTemplate,
    /**
     * The EnvelopeTemplateDefinition model constructor.
     * @property {module:model/EnvelopeTemplateDefinition}
     */
    EnvelopeTemplateDefinition: EnvelopeTemplateDefinition,
    /**
     * The EnvelopeTemplateResult model constructor.
     * @property {module:model/EnvelopeTemplateResult}
     */
    EnvelopeTemplateResult: EnvelopeTemplateResult,
    /**
     * The EnvelopeTemplateResults model constructor.
     * @property {module:model/EnvelopeTemplateResults}
     */
    EnvelopeTemplateResults: EnvelopeTemplateResults,
    /**
     * The EnvelopeTransactionStatus model constructor.
     * @property {module:model/EnvelopeTransactionStatus}
     */
    EnvelopeTransactionStatus: EnvelopeTransactionStatus,
    /**
     * The EnvelopeUpdateSummary model constructor.
     * @property {module:model/EnvelopeUpdateSummary}
     */
    EnvelopeUpdateSummary: EnvelopeUpdateSummary,
    /**
     * The EnvelopesInformation model constructor.
     * @property {module:model/EnvelopesInformation}
     */
    EnvelopesInformation: EnvelopesInformation,
    /**
     * The ErrorDetails model constructor.
     * @property {module:model/ErrorDetails}
     */
    ErrorDetails: ErrorDetails,
    /**
     * The EventNotification model constructor.
     * @property {module:model/EventNotification}
     */
    EventNotification: EventNotification,
    /**
     * The EventResult model constructor.
     * @property {module:model/EventResult}
     */
    EventResult: EventResult,
    /**
     * The Expirations model constructor.
     * @property {module:model/Expirations}
     */
    Expirations: Expirations,
    /**
     * The FileType model constructor.
     * @property {module:model/FileType}
     */
    FileType: FileType,
    /**
     * The FileTypeList model constructor.
     * @property {module:model/FileTypeList}
     */
    FileTypeList: FileTypeList,
    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter: Filter,
    /**
     * The FirstName model constructor.
     * @property {module:model/FirstName}
     */
    FirstName: FirstName,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The FolderItem model constructor.
     * @property {module:model/FolderItem}
     */
    FolderItem: FolderItem,
    /**
     * The FolderItemResponse model constructor.
     * @property {module:model/FolderItemResponse}
     */
    FolderItemResponse: FolderItemResponse,
    /**
     * The FolderItemV2 model constructor.
     * @property {module:model/FolderItemV2}
     */
    FolderItemV2: FolderItemV2,
    /**
     * The FolderItemsResponse model constructor.
     * @property {module:model/FolderItemsResponse}
     */
    FolderItemsResponse: FolderItemsResponse,
    /**
     * The FoldersRequest model constructor.
     * @property {module:model/FoldersRequest}
     */
    FoldersRequest: FoldersRequest,
    /**
     * The FoldersResponse model constructor.
     * @property {module:model/FoldersResponse}
     */
    FoldersResponse: FoldersResponse,
    /**
     * The FormulaTab model constructor.
     * @property {module:model/FormulaTab}
     */
    FormulaTab: FormulaTab,
    /**
     * The FullName model constructor.
     * @property {module:model/FullName}
     */
    FullName: FullName,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The GroupInformation model constructor.
     * @property {module:model/GroupInformation}
     */
    GroupInformation: GroupInformation,
    /**
     * The IdCheckInformationInput model constructor.
     * @property {module:model/IdCheckInformationInput}
     */
    IdCheckInformationInput: IdCheckInformationInput,
    /**
     * The InPersonSigner model constructor.
     * @property {module:model/InPersonSigner}
     */
    InPersonSigner: InPersonSigner,
    /**
     * The InitialHere model constructor.
     * @property {module:model/InitialHere}
     */
    InitialHere: InitialHere,
    /**
     * The InlineTemplate model constructor.
     * @property {module:model/InlineTemplate}
     */
    InlineTemplate: InlineTemplate,
    /**
     * The Intermediary model constructor.
     * @property {module:model/Intermediary}
     */
    Intermediary: Intermediary,
    /**
     * The LastName model constructor.
     * @property {module:model/LastName}
     */
    LastName: LastName,
    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List: List,
    /**
     * The ListCustomField model constructor.
     * @property {module:model/ListCustomField}
     */
    ListCustomField: ListCustomField,
    /**
     * The ListItem model constructor.
     * @property {module:model/ListItem}
     */
    ListItem: ListItem,
    /**
     * The LockInformation model constructor.
     * @property {module:model/LockInformation}
     */
    LockInformation: LockInformation,
    /**
     * The LockRequest model constructor.
     * @property {module:model/LockRequest}
     */
    LockRequest: LockRequest,
    /**
     * The LoginAccount model constructor.
     * @property {module:model/LoginAccount}
     */
    LoginAccount: LoginAccount,
    /**
     * The LoginInformation model constructor.
     * @property {module:model/LoginInformation}
     */
    LoginInformation: LoginInformation,
    /**
     * The MatchBox model constructor.
     * @property {module:model/MatchBox}
     */
    MatchBox: MatchBox,
    /**
     * The MemberSharedItems model constructor.
     * @property {module:model/MemberSharedItems}
     */
    MemberSharedItems: MemberSharedItems,
    /**
     * The MergeField model constructor.
     * @property {module:model/MergeField}
     */
    MergeField: MergeField,
    /**
     * The ModelDate model constructor.
     * @property {module:model/ModelDate}
     */
    ModelDate: ModelDate,
    /**
     * The ModelNumber model constructor.
     * @property {module:model/ModelNumber}
     */
    ModelNumber: ModelNumber,
    /**
     * The NameValue model constructor.
     * @property {module:model/NameValue}
     */
    NameValue: NameValue,
    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note: Note,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The OfflineAttributes model constructor.
     * @property {module:model/OfflineAttributes}
     */
    OfflineAttributes: OfflineAttributes,
    /**
     * The PageRequest model constructor.
     * @property {module:model/PageRequest}
     */
    PageRequest: PageRequest,
    /**
     * The Radio model constructor.
     * @property {module:model/Radio}
     */
    Radio: Radio,
    /**
     * The RadioGroup model constructor.
     * @property {module:model/RadioGroup}
     */
    RadioGroup: RadioGroup,
    /**
     * The RecipientEmailNotification model constructor.
     * @property {module:model/RecipientEmailNotification}
     */
    RecipientEmailNotification: RecipientEmailNotification,
    /**
     * The RecipientEvent model constructor.
     * @property {module:model/RecipientEvent}
     */
    RecipientEvent: RecipientEvent,
    /**
     * The RecipientPhoneAuthentication model constructor.
     * @property {module:model/RecipientPhoneAuthentication}
     */
    RecipientPhoneAuthentication: RecipientPhoneAuthentication,
    /**
     * The RecipientSAMLAuthentication model constructor.
     * @property {module:model/RecipientSAMLAuthentication}
     */
    RecipientSAMLAuthentication: RecipientSAMLAuthentication,
    /**
     * The RecipientSMSAuthentication model constructor.
     * @property {module:model/RecipientSMSAuthentication}
     */
    RecipientSMSAuthentication: RecipientSMSAuthentication,
    /**
     * The RecipientSignatureInformation model constructor.
     * @property {module:model/RecipientSignatureInformation}
     */
    RecipientSignatureInformation: RecipientSignatureInformation,
    /**
     * The RecipientUpdateResponse model constructor.
     * @property {module:model/RecipientUpdateResponse}
     */
    RecipientUpdateResponse: RecipientUpdateResponse,
    /**
     * The RecipientViewRequest model constructor.
     * @property {module:model/RecipientViewRequest}
     */
    RecipientViewRequest: RecipientViewRequest,
    /**
     * The Recipients model constructor.
     * @property {module:model/Recipients}
     */
    Recipients: Recipients,
    /**
     * The RecipientsUpdateSummary model constructor.
     * @property {module:model/RecipientsUpdateSummary}
     */
    RecipientsUpdateSummary: RecipientsUpdateSummary,
    /**
     * The Reminders model constructor.
     * @property {module:model/Reminders}
     */
    Reminders: Reminders,
    /**
     * The ResourceInformation model constructor.
     * @property {module:model/ResourceInformation}
     */
    ResourceInformation: ResourceInformation,
    /**
     * The ReturnUrlRequest model constructor.
     * @property {module:model/ReturnUrlRequest}
     */
    ReturnUrlRequest: ReturnUrlRequest,
    /**
     * The SamlAssertionAttribute model constructor.
     * @property {module:model/SamlAssertionAttribute}
     */
    SamlAssertionAttribute: SamlAssertionAttribute,
    /**
     * The SenderEmailNotifications model constructor.
     * @property {module:model/SenderEmailNotifications}
     */
    SenderEmailNotifications: SenderEmailNotifications,
    /**
     * The ServerTemplate model constructor.
     * @property {module:model/ServerTemplate}
     */
    ServerTemplate: ServerTemplate,
    /**
     * The ServiceInformation model constructor.
     * @property {module:model/ServiceInformation}
     */
    ServiceInformation: ServiceInformation,
    /**
     * The ServiceVersion model constructor.
     * @property {module:model/ServiceVersion}
     */
    ServiceVersion: ServiceVersion,
    /**
     * The SharedItem model constructor.
     * @property {module:model/SharedItem}
     */
    SharedItem: SharedItem,
    /**
     * The SignHere model constructor.
     * @property {module:model/SignHere}
     */
    SignHere: SignHere,
    /**
     * The SignatureType model constructor.
     * @property {module:model/SignatureType}
     */
    SignatureType: SignatureType,
    /**
     * The Signer model constructor.
     * @property {module:model/Signer}
     */
    Signer: Signer,
    /**
     * The SignerAttachment model constructor.
     * @property {module:model/SignerAttachment}
     */
    SignerAttachment: SignerAttachment,
    /**
     * The SignerEmailNotifications model constructor.
     * @property {module:model/SignerEmailNotifications}
     */
    SignerEmailNotifications: SignerEmailNotifications,
    /**
     * The SocialAuthentication model constructor.
     * @property {module:model/SocialAuthentication}
     */
    SocialAuthentication: SocialAuthentication,
    /**
     * The Ssn model constructor.
     * @property {module:model/Ssn}
     */
    Ssn: Ssn,
    /**
     * The Ssn4InformationInput model constructor.
     * @property {module:model/Ssn4InformationInput}
     */
    Ssn4InformationInput: Ssn4InformationInput,
    /**
     * The Ssn9InformationInput model constructor.
     * @property {module:model/Ssn9InformationInput}
     */
    Ssn9InformationInput: Ssn9InformationInput,
    /**
     * The TabMetadata model constructor.
     * @property {module:model/TabMetadata}
     */
    TabMetadata: TabMetadata,
    /**
     * The TabMetadataList model constructor.
     * @property {module:model/TabMetadataList}
     */
    TabMetadataList: TabMetadataList,
    /**
     * The Tabs model constructor.
     * @property {module:model/Tabs}
     */
    Tabs: Tabs,
    /**
     * The TemplateCustomFields model constructor.
     * @property {module:model/TemplateCustomFields}
     */
    TemplateCustomFields: TemplateCustomFields,
    /**
     * The TemplateDocumentsResult model constructor.
     * @property {module:model/TemplateDocumentsResult}
     */
    TemplateDocumentsResult: TemplateDocumentsResult,
    /**
     * The TemplateInformation model constructor.
     * @property {module:model/TemplateInformation}
     */
    TemplateInformation: TemplateInformation,
    /**
     * The TemplateMatch model constructor.
     * @property {module:model/TemplateMatch}
     */
    TemplateMatch: TemplateMatch,
    /**
     * The TemplateNotificationRequest model constructor.
     * @property {module:model/TemplateNotificationRequest}
     */
    TemplateNotificationRequest: TemplateNotificationRequest,
    /**
     * The TemplateRecipients model constructor.
     * @property {module:model/TemplateRecipients}
     */
    TemplateRecipients: TemplateRecipients,
    /**
     * The TemplateRole model constructor.
     * @property {module:model/TemplateRole}
     */
    TemplateRole: TemplateRole,
    /**
     * The TemplateSummary model constructor.
     * @property {module:model/TemplateSummary}
     */
    TemplateSummary: TemplateSummary,
    /**
     * The TemplateTabs model constructor.
     * @property {module:model/TemplateTabs}
     */
    TemplateTabs: TemplateTabs,
    /**
     * The TemplateUpdateSummary model constructor.
     * @property {module:model/TemplateUpdateSummary}
     */
    TemplateUpdateSummary: TemplateUpdateSummary,
    /**
     * The Text model constructor.
     * @property {module:model/Text}
     */
    Text: Text,
    /**
     * The TextCustomField model constructor.
     * @property {module:model/TextCustomField}
     */
    TextCustomField: TextCustomField,
    /**
     * The Title model constructor.
     * @property {module:model/Title}
     */
    Title: Title,
    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The UserSettingsInformation model constructor.
     * @property {module:model/UserSettingsInformation}
     */
    UserSettingsInformation: UserSettingsInformation,
    /**
     * The ViewLinkRequest model constructor.
     * @property {module:model/ViewLinkRequest}
     */
    ViewLinkRequest: ViewLinkRequest,
    /**
     * The ViewUrl model constructor.
     * @property {module:model/ViewUrl}
     */
    ViewUrl: ViewUrl,
    /**
     * The Zip model constructor.
     * @property {module:model/Zip}
     */
    Zip: Zip,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The CustomTabsApi service constructor.
     * @property {module:api/CustomTabsApi}
     */
    CustomTabsApi: CustomTabsApi,
    /**
     * The DiagnosticsApi service constructor.
     * @property {module:api/DiagnosticsApi}
     */
    DiagnosticsApi: DiagnosticsApi,
    /**
     * The EnvelopesApi service constructor.
     * @property {module:api/EnvelopesApi}
     */
    EnvelopesApi: EnvelopesApi,
    /**
     * The FoldersApi service constructor.
     * @property {module:api/FoldersApi}
     */
    FoldersApi: FoldersApi,
    /**
     * The TemplatesApi service constructor.
     * @property {module:api/TemplatesApi}
     */
    TemplatesApi: TemplatesApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
