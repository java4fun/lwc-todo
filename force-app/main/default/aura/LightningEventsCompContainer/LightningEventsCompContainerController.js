({
    handleTotalIncomeComponentEvent : function(component, event, helper) {
        alert('Event handler at the parent component');
        var totalIncome = event.getParam('totalIncome');
        component.set('v.totalIncome', totalIncome);

        // STOP propagation
        //event.stopPropagation();
    }
})


// bubble phase - event propagage from child to parent - it can be stopped at child itself while moving bottom to top
// capture phase - event propagate from root to source - it can be stopped anywhere in the hierarchy while moving top to bottom
// --------------------------------------
// 
// source and parent - bubble -> bottom to top
// source and parent - capture -> top to bottom
// 
// source - capture - execute first
// parent - bubble
// 
// source - bubble
// parent - capture - execute first
// 
//  capture phase > bubble phase
// 
// Event is stop propagating in capture => it will not propagate in bubble too because capture is executed first
// Event is stop propagating in bubble => it will not effect capture phase because it is already executed in capture phase
// 

