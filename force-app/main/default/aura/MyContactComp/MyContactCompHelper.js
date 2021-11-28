({
    fetchContacts : function(component, event, helper) {
        var action = component.get("c.getContacts");
        var accountId = component.get("v.recordId");

        action.setParams({
            accountIds: accountId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();

            // state can be success, error, incomplete
            if (statge === ' SUCCESS') {
                var contactList = response.getReturnValue();
                console.log(contactList);
                component.set("v.contactList", contactList);
            } else {
                alert('Error in getting datga');
            }

        });

        $A.enqueueAction(action);
    },


    saveContacts : function(component, event, helper) {
        var contactList = component.get('v.contactList');
        var recordViewForm = component.find('recordViewForm');
        var recordEditForm = component.find('recordEditForm');
        // Defining the action to save contact List ( will call the saveContactList apex controller )
        var saveAction = component.get('c.saveContactList');

        var toastEvent = $A.get('e.force:showToast');

        saveAction.setParams({
            contactList: contactList
        });

        saveAction.setCallBack(this, function(response) {
            var state = response.getState();            
            
            var btn = event.getSource();

            // one.app container only
            if (state === 'SUCCESS') {
                var dataMap = response.getReturnValue();
                if (dataMap.status == 'success') {
                    $A.util.addClass(recordViewForm, 'formHide');
                    $A.util.removeClass(recordEditForm, 'formHide');
                    btn.set('v.name', 'edit');
                    btn.set('v.label', 'Edit');
                    toastEvent.setParams({
                        'title': 'Success!',
                        'type': 'success',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                } else if (dataMap.status == 'error') {
                        toastEvent.setParams({
                        'title': 'Error!',
                        'type': 'error',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                }
            } else {
                alert('Error in getting data');
            }
        });
        
    }
})
