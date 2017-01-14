import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email'
    })
  ],
  password: [
    validator('presence', true),
    validator('format', {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
      message: 'Your password must include at least one upper case letter, one lower case letter, and a number',
      description(model) {
        // heh why would you do this IRL?
        return `Password for ${model.get('name')}`;
      }
    })
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
});
