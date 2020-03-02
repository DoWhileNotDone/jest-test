test('the correct data is received', done => {
  const callback = data => {
    try {
      expect(data).toBe('testy');
      done();
    } catch (error) {
      done(error);
    }
  }

  const fetchData = cb => {
    setTimeout(cb, 4000, 'testy');
  }

  fetchData(callback);

});
