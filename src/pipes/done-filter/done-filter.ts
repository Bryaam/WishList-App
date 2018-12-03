import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

/**
 * Generated class for the DoneFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'doneFilter',
  pure: false
})
export class DoneFilterPipe implements PipeTransform {
  
  transform(lists: List[], finished: boolean) {
    return lists.filter( list => {
      return list.finished === finished;
    });
  }
}
