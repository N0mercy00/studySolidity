var hello = artifacts.require("Hello");
module.exports=function(deployer){
    deployer.deploy(hello,"Hello");
};