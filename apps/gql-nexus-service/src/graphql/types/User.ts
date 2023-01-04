import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.string('name');
    t.string('username');
    t.string('email');
    t.string('phone');
    t.string('website');
  },
});
