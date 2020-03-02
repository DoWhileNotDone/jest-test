
test('object assignment', () => {
  const obj = {
    fieldone: 'valueone',
  };

  Object.assign(obj, {'f2' : 'v2'});

  expect(obj).toEqual({
    fieldone: 'valueone',
    f2: 'v2',
  })
});
