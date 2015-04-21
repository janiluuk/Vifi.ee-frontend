App.Views.ResetPasswordForm = Backbone.View.extend({ 

    bindings: {
        '[name=currentPassword]': {
            observe: 'password',
            setOptions: {
                validate: false
            }
        },
        '[name=newPassword]': {
            observe: 'newPassword', 
            setOptions: {
                validate: false
            }
        },
        '[name=repeatPassword]': {
            observe: 'repeatPassword',
            setOptions: {
                validate: false
            }
        },
         
    },
    events: {  
        'click #change-password-save-button': 'changePassword'
    },
    initialize: function (options) {
        if (options && options.profile) this.profile = options.profile;

        // This hooks up the validation
        Backbone.Validation.bind(this);
    },
    changePassword: function (e) {
        e.preventDefault();

        // Check if the model is valid before saving

        if(this.model.isValid(true)) { 
            var email = app.session.profile.get("email");
            var pass = this.model.get("newPassword");
            if (app.session.profile.isRegistered()) {
                var oldpass = this.model.get("password");
                app.session.profile.changePassword(oldpass, pass);
            } else { 
                app.session.profile.register(email, pass);
            }
            // this.model.save();
        }
        return false;

    },
    render: function() {
        this.stickit();
        return this;
    },
    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }
})