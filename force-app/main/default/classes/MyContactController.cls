public with sharing class MyContactController {
    public MyContactController() {

        @AuraEnabled
        public static List<Contact> getContacts( List<Id> accountIds){
            try {
                List<Contact> contactList = [  SELECT Id, FirstName, LastName, AccountId, Phone, Email FROM Contact WHERE AccountId in :accountIds];
                return contactList;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
            return null;
        }

        @AuraEnabled
        public static Map<String, String> saveContactList(List<Contact> contactList) {

            Map<String, String> resultMap = new Map<String, String> ();
            try {
                update contactList;
                resultMap.put('status', 'success');
                resultMap.put('message', 'Contacts updated sucecssfully');
            } catch (Exception e) {
                resultMap.put('status', 'error');
                resultMap.put('message', e.getMessage());
            }

            return resultMap;
        }
    }

    @AuraEnabled
    public static Map<String, String> deleteContactList(List<Id> contactIds) {
        List<Contact> contactsToDelete = [SELECT Id FROM Contact WHERE Id in :contactIds];

            Map<String, String> resultMap = new Map<String, String> ();
            try {
                // SObject or list of SObject
                delete contactsToDelete;
                resultMap.put('status', 'success');
                resultMap.put('message', 'Contacts deleted sucecssfully');
            } catch (Exception e) {
                resultMap.put('status', 'error');
                resultMap.put('message', e.getMessage());
            }
            return resultMap;
    }

    @AuraEnabled
    public static Map<String, String> createContactRecord(Contact newContact) {

        Map<String, String> resultMap = new Map<String, String> ();
        try {
            insert newContact;
            resultMap.put('status', 'success');
            resultMap.put('message', 'Contacts inserted sucecssfully');
        } catch (Exception e) {
            resultMap.put('status', 'error');
            resultMap.put('message', e.getMessage());
        }

        return resultMap;
    }

}
