public with sharing class ToDoListController {

    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks(){

        return [SELECT Subject FROM Task WHERE OwnerId =:UserInfo.getUserId()];
    }

    @AuraEnabled
    public static Task insertTask(String subject){
        try {
            Task task = new Task(
                Subject = subject,
                OwnerId = UserInfo.getUserId(),
                Status = 'Not Started',
                Priority = 'Normal'
            );
            insert task;
            return task;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
        return null;
    }

    @AuraEnabled
    public static Boolean deleteTask(Id recordId){
        try {
            Database.delete(recordId);
            return true;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
        return false;
    }
}
