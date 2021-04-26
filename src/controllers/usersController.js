const usersController = {
    register: (req, res) => {
        let cssSheets = ["register"];
        let title = "Registro";
        return res.render("users/register.ejs", {cssSheets, title})
    },

    login: (req, res) => {
        let cssSheets = ["login"];
        let title = "Inicio de sesión";
        return res.render("users/login.ejs", {cssSheets, title})
    },

    
}

module.exports = usersController;