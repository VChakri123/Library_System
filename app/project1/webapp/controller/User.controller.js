sap.ui.define(
  [
    "./Basecontroller",
    // "sap/ui/core/mvc/Controller", 
    "sap/ui/core/Fragment"],

  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("com.app.project1.controller.User", {
      onInit: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.attachRoutePatternMatched(this.onUserDetailsLoad, this);
      },


      onUserDetailsLoad: function (oEvent) {
        const { ID } = oEvent.getParameter("arguments");
        this.ID = ID;
        // const sRouterName = oEvent.getParameter("name");
        const oObjectPage = this.getView().byId("iduserpage");

        oObjectPage.bindElement(`/User(${ID})`);
      },


      // close function for the dynamic page
      onpageclose: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Routeindexpage1", {}, true);
      },

      
      onPressallBooks: async function () {
        const userId = this.ID;
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteAllbooks", {
          id: userId,
        });
      },

      //
      onpressnotify: async function () {
        if (!this.oNotification) {
          this.oNotification = await Fragment.load({
            id: this.getView().getId(),
            name: "com.app.project1.fragments.Notification",
            controller: this,
          });
          this.getView().addDependent(this.oNotification);
        }

        this.oNotification.open();
        const oObjectPage = this.getView().byId("idnotificationDialog");
        oObjectPage.bindElement(`/User(${this.ID})`);
      },

      onCloseNotificationDialog: function () {
        if (this.oNotification.isOpen()) {
          this.oNotification.close();
        }
      },
    });
  }
);
