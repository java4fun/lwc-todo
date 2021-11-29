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
        
    },

    removeContacts : function (component, event, helper) {
        var contactsToDelete = component.find("deleteContact");

        var idsToDelete = [];

        // Checking if contactsToDelete is an array
        if(contactsToDelete.length!=undefined) {
            // Iterating the array to get contact ids
            for(var i=0;i<contactsToDelete.length;i++) {
                // If contact has delete checkbox checked, add contact id to list of ids to delete
                if(contactsToDelete[i].get("v.checked"))            
                    idsToDelete.push(contactsToDelete[i].get("v.value"));
            }            
        } else {
            // if contactsToDelete is not an array but single object, 
            // check if delete checkbox is checked and push id to list of ids to delete
            if(contactsToDelete.get("v.checked"))            
                idsToDelete.push(contactsToDelete.get("v.value"));            
        }
        // Initializing the toast event to show toast
        var toastEvent = $A.get('e.force:showToast');
        // Defining the action to delete contact List ( will call the deleteContactList apex controller )
        var deleteAction = component.get('c.deleteContactList');
        // setting the params to be passed to apex controller
        deleteAction.setParams({
            contactIds: idsToDelete
        });
        // callback action on getting the response from server
        deleteAction.setCallback(this, function(response) {
            // Getting the state from response
            var state = response.getState();
            if(state === 'SUCCESS') {
                // Getting the response from server
                var dataMap = response.getReturnValue();
                // Checking if the status is success
                if(dataMap.status=='success') {
                    // Setting the success toast which is dismissable ( vanish on timeout or on clicking X button )
                    toastEvent.setParams({
                        'title': 'Success!',
                        'type': 'success',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    // Fire success toast event ( Show toast )
                    toastEvent.fire();            
	                window.location.reload();
                }
                // Checking if the status is error 
                else if(dataMap.status=='error') {
                    // Setting the error toast which is dismissable ( vanish on timeout or on clicking X button )
                    toastEvent.setParams({
                        'title': 'Error!',
                        'type': 'error',
                        'mode': 'dismissable',
                        'message': dataMap.message
                    });
                    // Fire error toast event ( Show toast )
                    toastEvent.fire();                
                }
            }
            else {
                // Show an alert if the state is incomplete or error
                alert('Error in getting data');
            }            
        });
        // Adding the action variable to the global action queue
        $A.enqueueAction(deleteAction);
    },

    insertContacts : function (component, event, helper) {
        var contact = component.get('v.contact');
        contact.AccountId = component.get('v.recordId');

        var toastEvent = $A.get('e.force:showToast');

        // Apex Controller - createContactRecord() different from createContact() in JS Controller
        var createAction = component.get('c.createContactRecord');

        createAction.setParams({
            newContact: contact
        });

        createAction.setCallBack(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS') {
                var dataMap = response.getReturnValue();
                if (dataMap.status == 'success') {
                    toastEvent.setParams({
                        'title': 'Success!',
                        'type': 'success',
                        'modal': 'dismissable',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                    window.location.reload();
                } else if (dataMap.status == 'error') {
                    toastEvent.setParams({
                        'title': 'Error!',
                        'type': 'error',
                        'modal': 'dismissable',
                        'message': dataMap.message
                    });
                    toastEvent.fire();
                }
            } else {
                alert('Error in getting data')
            }

        });

        $A.enqueueAction(createAction);
    }

})
