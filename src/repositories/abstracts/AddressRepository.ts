import AddressInterface from '../../interfaces/AddressInterface';
import Group from '../../classes/Group';

abstract class AddressRepository {
  protected abstract addresses: AddressInterface[];

  get(): AddressInterface[] {
    return this.addresses;
  }

  filter(predicate: (address: AddressInterface) => Boolean): AddressRepository {
    this.addresses = this.addresses.filter(predicate);
    return this;
  }

  filterManchesterOutwardCodes() {
    const expression = RegExp(/^(\w{1})(\d{1})/);
    // First we filter for post codes starting with M
    // then we filter for post code starting with a single letter and digit (preventing postcode such as MK, ME etc as those are not manchester based)
    return this
      .filter((address) => address.postcode.toString().startsWith('M'))
      .filter((address) => expression.test(address.postcode));
  }

  groupBy(predicate: (address: AddressInterface) => string): Group<AddressInterface>[] {
    return Group.make<AddressInterface>(this.get(), predicate);
  }

  groupByOutwardCode(): Group<AddressInterface>[]  {
    return this.groupBy(address => address.postcode.toString().split(' ')[0].toString());
  }
}

export default AddressRepository;