const mainController = {
    index: (req, res) => {
        let cssSheets = ["index"];
        let title = "Home";
        return res.render("index", {cssSheets, title})
}
}

module.exports = mainController;