import Group from '../classes/Group';

class GroupHistogramEntry {
  key: string;
  count: number;
  percent: number;
  constructor(key: string, count: number, percent: number) {
    this.key = key;
    this.count = count;
    this.percent = percent;
  }

  toString(): string {
    return `${this.key} - ${this.count} (${(this.percent * 100).toPrecision(2)}%)`;
  }

  static fromGroupArray(groups: Group<any>[]): GroupHistogramEntry[] {
    const total = groups.reduce((sum, group) => sum + group.items.length, 0);

    return groups.map(group => new GroupHistogramEntry(group.key, group.items.length, group.items.length / total)).sort((a,b) => b.count - a.count);
  }
}

export default GroupHistogramEntry;