import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    console.log(value,args)
    if(args[0]){
      return args[0]+ ' ' + value
    }
    else{
      return 'miss ' + value;
    }
  }

}
