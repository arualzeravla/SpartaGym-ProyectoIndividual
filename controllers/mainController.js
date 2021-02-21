const mainController = {
    index: (req,res) => {
        return res.render ('home');
    },

    register: (req,res) => {
        return res.render ('register');
    },

    login: (req,res) => {
        return res.render ('login');
    },

    carrito: (req,res) => {
        return res.render ('carrito');
    },

    leonidas: (req,res) => {
        return res.render ('leonidas');
    },

    helena: (req,res) => {
        return res.render ('helena');
    },

    anaxandro: (req,res) => {
        return res.render ('anaxandro');
    },

    speedRope: (req,res) => {
        return res.render ('speedRope');
    },

    bandas: (req,res) => {
        return res.render ('bandas');
    }
    
}

module.exports = mainController;