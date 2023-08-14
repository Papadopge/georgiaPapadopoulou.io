// main.component.js
class Router {
    navigate(url) {
      window.location.href = url;
    }
  }
  
  class MainComponent {
    constructor() {
      this.router = new Router();
    }
  
    goToLoginPage() {
      this.router.navigate('/login.html');
    }
  
    goToContactUsPage() {
      this.router.navigate('/contact_us.html');
    }
  
    goToDoListPage() {
      this.router.navigate('/todo_list.html');
    }
  
    goToFileUploadPage() {
      this.router.navigate('/file_upload.html');
    }
  
    goToSettingsSimulatorPage() {
      this.router.navigate('/settings_simulator.html');
    }
  }
  
  const mainComponent = new MainComponent();
  