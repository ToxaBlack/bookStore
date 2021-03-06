Ext.define('BookStore.controller.Login', {
    extend: 'BookStore.controller.BaseController',

    refs: [
        {ref: 'userName', selector: '#usernametext'},
        {ref: 'password', selector: '#passwordtext'},
        {ref: 'toolbar', selector: '#main-nav-toolbar'}
    ],

    init: function () {
        this.control({
            '#loginbutton': {
                click: this.authenticate
            },
            '#main-nav-toolbar > button': {
                click: this.onMainNavClick
            }
        });
    },

    index: function () {
        var navToolbar = this.getToolbar();
        navToolbar.query('> button').forEach(function (item) {
            item.hide();
        });
        this.show('Login');
    },


    logout: function () {
        Ext.Router.redirect('');
    },

    authenticate: function () {
        if (this.getUserName().getValue() == 'admin' &&
            this.getPassword().getValue() == 'admin') {
            var navToolbar = this.getToolbar();
            navToolbar.query('> button').forEach(function (item, i) {
                item.show();
            });
            Ext.Router.redirect('books');
        }
        else
            Ext.Msg.alert('Invalid credentials');
    },
    onMainNavClick: function (btn) {
        Ext.Router.redirect(btn.link);
    }
});