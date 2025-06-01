export const authentication = (request, response, next) => {
    if(request.session && request.session.isLoggedIn) {
        return next();
    }
    response.redirect("/signin");
}