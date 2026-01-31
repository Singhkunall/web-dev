function storeSecret(secret) {
    return function() {
        return secret;
    }
}
let getSecret = storeSecret("My Secret");
console.log(getSecret());   