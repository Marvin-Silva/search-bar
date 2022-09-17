import ROUTE from "../routes";

const customer = {
    refCustomer: '1',
    FirstName: 'Jean',
    LastName: 'Michel',
    BankAccountNumber:'1234567891A',
    BirthDate: '1992-02-09 00:00:00',
    BirthPlace: '',
    PhoneNumber: '+33 06 87 45 69 32',
    email: 'jean_michel@net.eu'
}


describe('return List de customers', () => 

    test('fetch customers', () => {
      
        fetch(ROUTE.OF_CUSTOMERS).then(
            data => { 
              expect(data.json()).toBe(customer)
            })
     
    }));
