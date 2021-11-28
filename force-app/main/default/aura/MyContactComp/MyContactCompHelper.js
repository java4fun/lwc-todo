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
    }
})
