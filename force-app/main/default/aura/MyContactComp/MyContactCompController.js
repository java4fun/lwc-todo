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
    },

    editContacts : function(component, event, helper) {
        var btn = event.getSource();

        var name = btn.get('v.name');
        var recordViewForm = component.find('recordViewForm');
        var recordEditForm = component.find('recordEditForm');
        if (name == 'edit') {
            $A.util.addClass(recordViewForm, 'formHide');
            $A.util.removeClass(recordEditForm, 'formHide');
            btn.set('v.name', 'save');
            btn.set('v.label', 'Save');
        } else if (name == 'save') {
            helper.saveContacts(component, event, helper);
        }
    },

})
