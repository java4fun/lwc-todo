public with sharing class MyContactController {
    public MyContactController() {

        @AuraEnabled
        public static List<Contact> getContacts( List<Id> accountIds){
            try {
                List<Contact> contactList = [  SELECT Id, Name, AccountId, Phone, Email FROM Contact WHERE AccountId in :accountIds];
                return contactList;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
            return null;
        }
    }
}
