import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if(true){
    return true;
  }
};
