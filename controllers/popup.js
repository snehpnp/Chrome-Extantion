
var ngApp = angular.module("popupApp", []).config(function($sceProvider) {
  $sceProvider.enabled(false);
});

ngApp.controller("popupController", function($scope, $http,$sce) {

  $scope.developer = DEVELOPER_INFO;
  $scope.manifest = chrome.runtime.getManifest();
  $scope.welcome = WelcomeController.model;
  $scope.Tabs = Tabs;
  $scope.$fc = FoxCommon;
  $scope.$auth = Auth;
  $scope.$config = Config;

  /* ------------------------------- Login Page ------------------------------- */
  $scope.loginPage = {
    email : "",
    password : "",
    isLoading : false,
  };

  /* ---------------------------------- Local --------------------------------- */
  $scope.local = $box.getDefaultLocalModel();

  /* ----------------------------- On Local Change ---------------------------- */
  $box.onLocalChange(data => {
    $box.getLocal(local => {
      $scope.$apply(() => {
        $scope.local = local;
      });
    });
  });
  /* ----------------------------- On Local Change ---------------------------- */

  /* ------------------------------- Init Local ------------------------------- */
  $box.getLocal(local => {
    $scope.$apply(() => {
      $scope.local = { ...$scope.local, ...local };
    });

    /* Get the active tab URL*/

    $box.activeTab(tab => {
      $scope.$apply(() => {
        $scope.local.activeTabUrl = tab.url;
      });
    });
  });
  /* ------------------------------- Init Local ------------------------------- */

  /*	Toggle Tab*/

  $scope.toggleTab = tab => {
    $scope.local.activeTab = tab;
    $scope.saveLocal();
    $scope.initiMaterialDesignComponents();
  };

  $scope.saveLocal = function() {
    $box.setLocal($scope.local);
  };

  $scope.send = function(action, data = {}) {
    $box.send(action, data);
  };


  /* URL List */
  $scope.saveUrlAsList = ()=>{
    $scope.local.urlList = $scope.local.urlListTextarea.split('\n').filter(x=>x.length);
    $scope.saveLocal();
  };


  /* -------------------------------- Material Design -------------------------------- */
  $scope.initiMaterialDesignComponents = () => {
    MaterialDesignLite.init();
  };
  $scope.initiMaterialDesignComponents();
  /* -------------------------------- Material Design -------------------------------- */

  /* ---------------------------------- Login --------------------------------- */
  $scope.login = ()=>{
    $scope.loginPage.isLoading = true;
    Auth.login($scope.loginPage.email,$scope.loginPage.password,{
      authSuccess : (response)=>{
        $scope.toggleTab('home');
        $scope.local._auth = response._auth;
        $scope.saveLocal();
        $scope.snackbar.show("Login Success");
      },
      authFailed : (response)=>{
        $scope.snackbar.show(response.errorMessage);
      },
      error : ()=>{
        $scope.snackbar.show("Error connecting");
      },
      complete : ()=>{
        $scope.$apply(()=>{
          $scope.loginPage.isLoading = false;
        });
      }
    });
  };
  /* ---------------------------------- Login --------------------------------- */

  $scope.logout = ()=>{
    Auth.logout();
  };

  $scope.download = ()=>{
    $fc.downloadAs.text(JSON.stringify($scope.local.matchData),"bet365_collectedData");
  }

  /* -------------------------------- Snackbar -------------------------------- */
  $scope.snackbar = {
    isShown : false,
    text: '',
    show:(text,closeAfterSec=3)=>{
      $scope.snackbar.text = text;
      $scope.snackbar.isShown = true;
      $scope.snackbar.closeAfter(closeAfterSec);
    },
    hide:()=>{
      $scope.snackbar.isShown = false;
    },
    closeAfter :(closeAfterSec)=>{
      setTimeout(()=>{
        $scope.$apply(()=>{
          $scope.snackbar.isShown = false;
        });
      },closeAfterSec*1000);
    }
  };
  /* -------------------------------- Snackbar -------------------------------- */


  $scope.init = ()=>{

    setTimeout(()=>{
      Auth.check();

    },$fc.randBetween(5000,15000));

    setTimeout(()=>{
      $scope.$apply(()=>{
        $scope.showItemExtensionFooter = true;
      });
    },400);

  };

  $scope.init();

});
