import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Note } from './note';

@Pipe({name: 'filterNotes'})
@Injectable()
export class FilterNotes implements PipeTransform {
     transform(items: Note[], args: string): any {
     
      if (args && items.length > 0) {

       let itemsFound = items.filter(
         item => item.title && 
         item.title.toLowerCase().includes(args.toLowerCase())
       );
       if (itemsFound && itemsFound.length > 0 ){
         return itemsFound;
       }
       return [-1]; // to display error message (none found) in view.
     }
   return [];
 }
}

