/* eslint-disable */
const expect = require('chai').expect;
const transform = require('../api/text/transform');

describe('Text transformers', function () {
	describe('Formatter', function () {
		const testSentence = 'The quick brown fox jumps over the lazy dog. 1 2 3 4 5 6 7 8 9 0';
		it('No alteration', function () {
			expect(transform.format(testSentence, false, false, false)).to.equal('The quick brown fox jumps over the lazy dog. 1 2 3 4 5 6 7 8 9 0');
		});
		it('No alteration + serif on', function () {
			expect(transform.format(testSentence, false, false, true)).to.equal('The quick brown fox jumps over the lazy dog. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Bold sans', function () {
			expect(transform.format(testSentence, false, true, false)).to.equal('๐ง๐ต๐ฒ ๐พ๐๐ถ๐ฐ๐ธ ๐ฏ๐ฟ๐ผ๐๐ป ๐ณ๐ผ๐ ๐ท๐๐บ๐ฝ๐ ๐ผ๐๐ฒ๐ฟ ๐๐ต๐ฒ ๐น๐ฎ๐๐ ๐ฑ๐ผ๐ด. ๐ญ ๐ฎ ๐ฏ ๐ฐ ๐ฑ ๐ฒ ๐ณ ๐ด ๐ต ๐ฌ');
		});
		it('Bold serif', function () {
			expect(transform.format(testSentence, false, true, true)).to.equal('๐๐ก๐ ๐ช๐ฎ๐ข๐๐ค ๐๐ซ๐จ๐ฐ๐ง ๐๐จ๐ฑ ๐ฃ๐ฎ๐ฆ๐ฉ๐ฌ ๐จ๐ฏ๐๐ซ ๐ญ๐ก๐ ๐ฅ๐๐ณ๐ฒ ๐๐จ๐ . ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐');
		});
		it('Italic sans', function () {
			expect(transform.format(testSentence, true, false, false)).to.equal('๐๐ฉ๐ฆ ๐ฒ๐ถ๐ช๐ค๐ฌ ๐ฃ๐ณ๐ฐ๐ธ๐ฏ ๐ง๐ฐ๐น ๐ซ๐ถ๐ฎ๐ฑ๐ด ๐ฐ๐ท๐ฆ๐ณ ๐ต๐ฉ๐ฆ ๐ญ๐ข๐ป๐บ ๐ฅ๐ฐ๐จ. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Italic serif', function () {
			expect(transform.format(testSentence, true, false, true)).to.equal('๐โ๐ ๐๐ข๐๐๐ ๐๐๐๐ค๐ ๐๐๐ฅ ๐๐ข๐๐๐  ๐๐ฃ๐๐ ๐กโ๐ ๐๐๐ง๐ฆ ๐๐๐. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Bold italic sans', function () {
			expect(transform.format(testSentence, true, true, false)).to.equal('๐๐๐ ๐ฆ๐ช๐๐๐  ๐๐ง๐ค๐ฌ๐ฃ ๐๐ค๐ญ ๐๐ช๐ข๐ฅ๐จ ๐ค๐ซ๐๐ง ๐ฉ๐๐ ๐ก๐๐ฏ๐ฎ ๐๐ค๐. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Bold italic serif', function () {
			expect(transform.format(testSentence, true, true, true)).to.equal('๐ป๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐. 1 2 3 4 5 6 7 8 9 0');
		});
	});
});