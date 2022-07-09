const Signdetail = require("../Models/Signup");

exports.test = function(req, res){
    res.send("Welcome");
};

exports.product_create = function(req, res) {
    const { name, email, password } = req.body;
            const user = new Signdetail(req.body);
            user.save();
                    res.send("Successfully Registered. You can Login now.")
                }

/*

 exports.product_login = function(req, res){
        const { email, password } = req.body;
        const user = new Signdetail({email, password});
        user.save();
        Signdetail.findOne((detail) => {
                if(password === detail.password) {
                    res.send("Login Successful")
                }
                else{
                    res.send("Password didn't match");
                }
                res.send("User not Registered");
        })
    }

*/

