module.exports.profile = function(req,res){
    return res.render('users_profile', {
        title: 'profilePage'
    });
}

module.exports.usersPage = function(re,re){
    re.end("<h1>This is the users login psge for profile</h1>");
}

