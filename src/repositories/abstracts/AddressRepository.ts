import AddressInterface from '../../interfaces/AddressInterface';

interface AddressRepositoryGroup {
  key: string;
  addresses: AddressInterface[];
}

abstract class AddressRepository {
  protected abstract addresses: AddressInterface[];

  filter(predicate: (address: AddressInterface) => Boolean): AddressRepository {
    this.addresses = this.addresses.filter(predicate);
    return this;
  }

  get(): AddressInterface[] {
    return this.addresses;
  }

  postcodeStartsWith(substring: string): AddressRepository {
    return this.filter((address => address.postcode.toString().startsWith(substring)));
  }

  groupBy(predicate: (address: AddressInterface) => string): AddressRepositoryGroup[] {
    let groups: [string, AddressInterface[]] = [];

    return this.addresses.reduce((groups, instance) => {
      groups.indexOf(group => group.key == )
    }, [])
  }
}

export default AddressRepository;