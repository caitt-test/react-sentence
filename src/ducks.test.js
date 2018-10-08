import { submitAnswers, reducer } from './ducks';

describe('reducer', () => {
   it('computes right answer', () => {
       const data = { what: 'is coding', when: 'today', who: 'Mark', where: 'on his computer' };
       const result = reducer(undefined, { type: 'ANSWERS', data });

       expect(result).toEqual({ sentence: 'Mark is coding today on his computer'});
   });

   it('ignores unknown action', () => {
       const data = 'TEST';
       const result = reducer(undefined, {type: 'UNKNOWN', data });

       expect(result).toEqual({});
   });
});

describe('submitAnswers', () => {
   it('creates correct action', () => {
       const data = { what: 'is coding', when: 'today', who: 'Mark', where: 'on his computer' };
       const action = submitAnswers(data);

       expect(action).toEqual({
           type: 'ANSWERS',
           data
       });
   })
});