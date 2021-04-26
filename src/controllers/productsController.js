const productsController = {
    carrito: (req,res) => {
        let cssSheets = ["carrito"];
        let title = "Tus compras";
        return res.render ('carrito', {cssSheets, title});
    },

    leonidas: (req,res) => {
        let cssSheets = ["productos"];
        let title = "Detalle de producto";
        return res.render ('leonidas', {cssSheets, title});
    },

    helena: (req,res) => {
        let cssSheets = ["productos"];
        let title = "Detalle de producto";
        return res.render ('helena', {cssSheets, title});
    },

    anaxandro: (req,res) => {
        let cssSheets = ["productos"];
        let title = "Detalle de producto";
        return res.render ('anaxandro', {cssSheets, title});
    },

    speedrope: (req,res) => {
        let cssSheets = ["productos"];
        let title = "Detalle de producto";
        return res.render ('speedrope', {cssSheets, title});
    },

    bandas: (req,res) => {
        let cssSheets = ["productos"];
        let title = "Detalle de producto";
        return res.render ('bandas', {cssSheets, title});
    }
    
}

module.exports = productsController;