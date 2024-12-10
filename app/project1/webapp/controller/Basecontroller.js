sap.ui.define(
  [ "sap/ui/core/mvc/Controller",
     "sap/ui/core/Fragment"
  ],
  function (BaseController, Fragment) {
    "use strict";

    return BaseController.extend("com.app.project1.controller.Basecontroller", {
      onInit: function () {

      },
      readData:function (oModel,sPath,filters,sorters) {
        return new Promise((resolve, reject) => {
          oModel.read(sPath,{
            success:function(oData){
              resolve(oData);
            },
            error: function(oError){
              reject(oError);
            }
          })
        })
      },
      //Performing crud operations
      createData: function (oModel, oPayload, sPath) {
        return new Promise((resolve, reject) => {
          oModel.create(sPath, oPayload, {
           // refreshAfterChange: true,
            success: function (oSuccessData) {
              resolve(oSuccessData);
            },
            error: function (oErrorData) {
              reject(oErrorData);
            },
          });
        });
      },
      //Function for loading the fragment
      loadFragment: async function (sFragmentName) {
        const oFragment = await Fragment.load({
          id: this.getView().getId(),
          name: `com.app.project1.fragments.${sFragmentName}`,
          controller: this,
        });
        this.getView().addDependent(oFragment);
        return oFragment;
      },
    });
  }
);
