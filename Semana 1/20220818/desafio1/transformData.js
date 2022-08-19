const meta = {
  cpf: '123.456-789-00',
  email: 'myemail@email.com',
  expected_address: [
    {
      city: 'são paulo',
      postal_code: '10001-123',
      state: 'sp',
    },
  ],
  phones: ['5585 99999-9999'],
};

const newMeta = [];
Object.entries(meta).forEach(([key, value], index) => {
  let description = value;

  if (typeof value === 'object') {
    const [nValue] = value;
    description = nValue;
  }

  newMeta.push({
    id: index,
    title: key,
    description,
  });
});

console.log(newMeta);
