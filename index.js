'use strict';
const assert = require('assert');

class Row {
  constructor(str) {
    this._str = str;
  }

  get() { return this._str; }

  toBuffer() { return Buffer.from(this.get() + '\n'); }
}
assert.ok((new Row()) instanceof Row);
let row1 = new Row('sample01, sample02, sample03');
assert.equal(row1.get(), 'sample01, sample02, sample03');
let row2 = new Row('sample04, sample05, sample06');
assert.deepEqual(row2.toBuffer(), Buffer.from('sample04, sample05, sample06\n'));
