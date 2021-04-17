/* eslint-disable */
const expect = require('chai').expect;
const parsers = require('../api/color/parsers');
const converters = require('../api/color/converters');

describe('Color parsers', function () {
	describe('Hexadecimal parser', function () {
		it('should return 09AFFF', function () {
			expect(parsers.parseHex('09AfFf')).to.equal('09AFFF');
		});
		it('should return 00FF00', function () {
			expect(parsers.parseHex('#00FF00')).to.equal('00FF00');
		});
		it('should return EEFFEE', function () {
			expect(parsers.parseHex('#EFE')).to.equal('EEFFEE');
		});
		it('should return AFAF98', function () {
			expect(parsers.parseHex('#AFAF98')).to.equal('AFAF98');
		});
		it('should return FFFFFF', function () {
			expect(parsers.parseHex('FFF')).to.be.equal('FFFFFF');
		});
		it('should return null', function () {
			expect(parsers.parseHex('12345z')).to.be.null;
		});
		it('should return null', function () {
			expect(parsers.parseHex('zklpzoxp')).to.be.null;
		});
	});
	describe('RGB parser', function () {
		it('should return [0, 255, 0]', function () {
			expect(parsers.parseRgb('0 , 255  ,  0  ')).to.eql([0, 255, 0]);
		});
		it('should return [0, 25, 255]', function () {
			expect(parsers.parseRgb('0,25,255')).to.eql([0, 25, 255]);
		});
		it('should return null', function () {
			expect(parsers.parseRgb('-1,25,255')).to.be.null;
		});
		it('should return null', function () {
			expect(parsers.parseRgb('1,25,285')).to.be.null;
		});
		it('should return null', function () {
			expect(parsers.parseRgb('1,25,2825')).to.be.null;
		});
	});
});

describe('Color converters', function () {
	describe('Hexadecimal to RGB', function () {
		it('should return [255, 0, 255]', function () {
			expect(converters.hexToRgb('ff00Ff')).to.eql([255, 0, 255]);
		});
		it('should return [0, 0, 0]', function () {
			expect(converters.hexToRgb('000000')).to.eql([0, 0, 0]);
		});
		it('should return null', function () {
			expect(converters.hexToRgb('ff00xx')).to.be.null;
		});
		it('should return null', function () {
			expect(converters.hexToRgb('00000')).to.be.null;
		});
	});
	describe('RGB to hexadecimal', function () {
		it('should return FF0000', function () {
			expect(converters.rgbToHex('255, 0, 0')).to.equal('FF0000');
		});
		// Somehow it also works when you pass an array
		it('should return FF0000', function () {
			expect(converters.rgbToHex([255, 0, 0])).to.equal('FF0000');
		});
		it('should return null', function () {
			expect(converters.rgbToHex('0')).to.be.null;
		});
	});
});