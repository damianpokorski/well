class Group<T>  {
  key: string;
  items: T[];
  constructor(key: string, items: T[]) {
    this.key = key;
    this.items = items;
  }

  /**
   * Creates a group of items based off predicate
   * @param items 
   * @param predicate 
   */
  static make<T>(items: T[], predicate: (item: T) => string): Group<T>[] {
    return items.reduce((groups: Group<T>[], item: T) => {
      const key = predicate(item);
      const existingGroup = groups.find(group => group.key == key);
      if(existingGroup == undefined) {
        groups.push(new Group<T>(key, [item]));
      } else {
        existingGroup.items.push(item);
      }
      return groups;
    }, []);
  }
}


export default Group;