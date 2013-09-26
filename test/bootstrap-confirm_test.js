(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#bootstrapConfirm', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(
      this.elems.bootstrapConfirm(), this.elems, 'should be chainable'
    );
  });

  test('is bootstrapConfirm', function() {
    expect(1);
    strictEqual(
      this.elems.bootstrapConfirm().text(),
      'lame test markupnormal test markupbootstrapConfirm test markup',
      'should be bootstrapConfirm'
    );
  });

  module('jQuery.bootstrapConfirm');

  test('is bootstrapConfirm', function() {
    expect(2);
    strictEqual(
      $.bootstrapConfirm(), 'bootstrapConfirm.', 'should be bootstrapConfirm'
    );
    strictEqual(
      $.bootstrapConfirm({method: 'get'}), 'bootstrapConfirm.',
      'should be thoroughly bootstrapConfirm'
    );
  });

  module(':bootstrapConfirm selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is bootstrapConfirm', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(
      this.elems.filter(':bootstrapConfirm').get(), this.elems.last().get(),
      'knows bootstrapConfirm when it sees it'
    );
  });

}(jQuery));
