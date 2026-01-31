function CreateUser(role){
    return function(needAccess){
        if(needAccess === role){
            return true;
        }
        return false;
    }
}
const admin = CreateUser("admin");
console.log(admin("admin")); 
console.log(admin("user"));  
const user = CreateUser("user");
console.log(user("user"));   
console.log(user("admin"));   

