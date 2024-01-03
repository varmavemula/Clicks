module.exports.profile = function(req,res){
    return res.render('users_profile', {
        title: 'profilePage'
    });
}

module.exports.usersPage = function(re,re){
    re.end("<h1>This is the users login psge for profile</h1>");
}

module.exports.sign_in = function(req, res){
    return res.render('user_sign_in', {
        title: 'users | sign-in'
    });
}

module.exports.sign_up = function(req, res){
    return res.render('user_sign_up', {
        title: 'users | sign-up'
    });
}