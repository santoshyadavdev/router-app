import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface UserItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UserItem[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
  {id: 21, name: 'Scandium'},
  {id: 22, name: 'Titanium'},
  {id: 23, name: 'Vanadium'},
  {id: 24, name: 'Chromium'},
  {id: 25, name: 'Manganese'},
  {id: 26, name: 'Iron'},
  {id: 27, name: 'Cobalt'},
  {id: 28, name: 'Nickel'},
  {id: 29, name: 'Copper'},
  {id: 30, name: 'Zinc'},
  {id: 31, name: 'Gallium'},
  {id: 32, name: 'Germanium'},
  {id: 33, name: 'Arsenic'},
  {id: 34, name: 'Selenium'},
  {id: 35, name: 'Bromine'},
  {id: 36, name: 'Krypton'},
  {id: 37, name: 'Rubidium'},
  {id: 38, name: 'Strontium'},
  {id: 39, name: 'Yttrium'},
  {id: 40, name: 'Zirconium'},
  {id: 41, name: 'Niobium'},
  {id: 42, name: 'Molybdenum'},
  {id: 43, name: 'Technetium'},
  {id: 44, name: 'Ruthenium'},
  {id: 45, name: 'Rhodium'},
  {id: 46, name: 'Palladium'},
  {id: 47, name: 'Silver'},
  {id: 48, name: 'Cadmium'},
  {id: 49, name: 'Indium'},
  {id: 50, name: 'Tin'},
];

/**
 * Data source for the User view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserDataSource extends DataSource<UserItem> {
  data: UserItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UserItem[]): UserItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UserItem[]): UserItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
