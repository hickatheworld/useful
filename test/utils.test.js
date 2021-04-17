/* eslint-disable */
const expect = require('chai').expect;
const utils = require('../utils');

describe('Util functions', function () {
	describe('cap()', function () {
		it('should capitalize the given string', function () {
			expect(utils.cap('caPitaliZed')).to.equal('Capitalized');
		});
	});
	describe('now()', function () {
		it('should format the Date according to ISO 8601', function () {
			expect(utils.now(new Date(390625))).to.equal('1970-01-01 01:06:30');
		});
	});
});