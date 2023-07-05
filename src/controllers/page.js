exports.renderProfile = (req, res) => {
    res.render('profile', {title: 'My info - qna_web'});
};

exports.renderJoin = (req, res) => {
    res.render('join', {title: 'Sign-up'});
};

exports.renderLogin = (req, res) => {
    res.render('login', {title: 'Login'});
};

// exports.renderAdmin = (req, res) => {
//     res.render('admin', {title: 'Admin'});
// };

exports.renderContact = (req, res) => {
    res.render('contact', {title: 'Contact'});
};

exports.renderMain = (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'qna_web',
        twits,
    });
};