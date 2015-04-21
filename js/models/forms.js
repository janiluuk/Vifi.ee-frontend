App.Forms = {};

App.Forms.FormView = Backbone.View.extend({ 
    events: {
        'submit form': 'onSubmit'
    },
    initialize: function(options) {
        this.options = options || {};
        
        Backbone.Validation.bind(this);
    },
    onSubmit: function(e) {

    },
    render: function() {
        if (this.options.template) { 
            this.$el.empty().append(this.options.template);
        }
        this.stickit();
        return this;
    },

});

App.Forms.ResetPasswordFormView = App.Forms.FormView.extend({ 

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
        'click #change-password-save-button': 'onSubmit'
    },

    onSubmit: function (e) {
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

    }   
 
});
App.Forms.ResetPasswordForm = Backbone.Model.extend({
    defaults: {
        password: ''
    },
    // Define a model with some validation rules

    validation: {

        newPassword: {
            minLength: 8
        },
        repeatPassword: {
            equalTo: 'newPassword',
            msg: 'The passwords does not match'
        }
    }
});

App.Forms.ContactForm  = Backbone.Model.extend({ 

     validation: {
        contact_email: {
          required:false,
          pattern: 'email',
          msg: 'Please enter a valid email'
        },
        contact_name: { 
            required:false,

        },
        contact_phone: {
          required: false,
          minLength: 5,
          msg: 'Invalid phonenumber!'
        },
        contact_body: {
          minLength: 10,
          required: true,
          msg: 'Please enter some text as well!'
        },
    }

});