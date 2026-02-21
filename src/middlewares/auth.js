export default function auth(req, res, next) {
    if (req.session.userLogged){
        next()
    } else {
        res.redirect('/login')
    }
}