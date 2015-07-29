(function ($) {
  var contacts =
     [{ name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
      { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }],
} (jQuery));

var Contact = Backbone.Model.extend({
  defaults: {
    photo: "/img/placeholder.png"
  }
});

var Directory = Backbone.Collection.extend({
  model: Contact
});

var ContactView = Backbone.View.extend({
  tagName: "article",
  className: "contact-container",
  template: $("#contactTemplate").html(),

  render: function() {
    var tmpl = _.template(this.template);

    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});