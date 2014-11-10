describe('wrapWord', function() {
  it('do nothing if gutter is bigger than text lenght', function() {
    var textToWrap = 'short text';
    var wrappedText = wrapWords(textToWrap, 5);
    expect(wrappedText).toBe('short \ntext');
  });

  it('wraps longer text', function() {
    var textToWrap = 'The quick brown fox jumped over the lazy dog.';
    var wrappedText = wrapWords(textToWrap, 10);
    expect(wrappedText).toEqual('The quick \nbrown fox \njumped \nover the \nlazy dog.');
  });

  it('wraps longer text', function() {
    var textToWrap = 'The quick brown fox jumped over the lazy dog.';
    var wrappedText = wrapWords(textToWrap, 20);
    expect(wrappedText).toEqual('The quick brown fox \njumped over the lazy \ndog.');
  });
});
