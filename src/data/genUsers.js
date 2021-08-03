import faker from 'faker';

export const genUsers = () => {
  const users = [];
  for (let i = 0; i < 16; i++) {
    // declaring firstName and lastName here so they can be passed as arguments in faker.internet.email()
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const company = faker.company.companyName();
    const companyPhrase = faker.company.catchPhrase();
    users.push({
      id: i,
      name: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email(firstName, lastName),
      phone: faker.phone.phoneNumber(),
      address: `${faker.address.streetAddress(
        true
      )}, ${faker.address.city()}, ${faker.address.zipCode()}`,
      website: faker.internet.domainName(),
      company: company,
      companyPhrase: companyPhrase,
      companyInfo: [company, companyPhrase],
      image: `${faker.image.avatar()}?random=${Math.round(
        Math.random() * 500
      )}`,
    });
  }
  return users;
};
