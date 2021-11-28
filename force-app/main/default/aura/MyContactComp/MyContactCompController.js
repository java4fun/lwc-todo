({
    getContactsList : function(component, event, helper) {
        helper.fetchContacts(component, event, helper);
    },
    newContact : function(component, event, helper) {
        // only work for one.app
        var createContact = $A.get("e.force:createRecord");
        createContact.setParams({
            'entityApiName': 'Contact',
            'defaultFieldValues': {
                'AccountId': component.get("v.recordId")
            }
        });
        createContact.fire();
    }
})
