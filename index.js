'use strict';
const fs = require('fs');
const assert = require('assert');

class Row {
  constructor(str) {
    this._str = str;
  }

  get() { return this._str; }
}

class Rows {
  constructor(lines) {
    this._lines = lines.map(v => v.get()).join('\n');
  }

  toBuffer() {
    return Buffer.from(this._lines);
  }
}
assert.ok((new Row()) instanceof Row);
let row1 = new Row('sample01, sample02, sample03');
assert.equal(row1.get(), 'sample01, sample02, sample03');
let row2 = new Row('sample04, sample05, sample06');
let rows = new Rows([row1, row2]);
assert.deepEqual(rows.toBuffer(), Buffer.from('sample01, sample02, sample03\nsample04, sample05, sample06'));
