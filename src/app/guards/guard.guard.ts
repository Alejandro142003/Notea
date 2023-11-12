import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  private constructor(router:Router){
    
  }

  if(true){
    return true;
  }else{
    this.router.navigate(['/login']);
    return false
  }
};
