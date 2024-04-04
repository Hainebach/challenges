import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    phoneNumber: chance.phone(),
    birthday: chance.birthday({ string: true, american: false }),
    address: chance.address({ short_suffix: true }),
    prefix: chance.prefix(),
  };
  response.status(200).json(character);
}
