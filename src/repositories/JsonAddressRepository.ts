import AddressInterface from './../interfaces/AddressInterface';
import AddressRepository from './abstracts/AddressRepository';

import * as fs from 'fs';

class JsonAddressRepository extends AddressRepository {
  protected filepath: string;
  protected addresses: AddressInterface[];

  constructor(filepath: string) {
    super();
    this.filepath = filepath;

    // Load files from 
    this.addresses  = [];
    if(fs.existsSync(this.filepath)) {
      this.addresses = JSON.parse(fs.readFileSync(this.filepath).toString()).data.list;
    }
  }

  
}

export default JsonAddressRepository;