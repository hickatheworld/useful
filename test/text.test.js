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
			expect(transform.format(testSentence, false, true, false)).to.equal('𝗧𝗵𝗲 𝗾𝘂𝗶𝗰𝗸 𝗯𝗿𝗼𝘄𝗻 𝗳𝗼𝘅 𝗷𝘂𝗺𝗽𝘀 𝗼𝘃𝗲𝗿 𝘁𝗵𝗲 𝗹𝗮𝘇𝘆 𝗱𝗼𝗴. 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵 𝟬');
		});
		it('Bold serif', function () {
			expect(transform.format(testSentence, false, true, true)).to.equal('𝐓𝐡𝐞 𝐪𝐮𝐢𝐜𝐤 𝐛𝐫𝐨𝐰𝐧 𝐟𝐨𝐱 𝐣𝐮𝐦𝐩𝐬 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐥𝐚𝐳𝐲 𝐝𝐨𝐠. 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗 𝟎');
		});
		it('Italic sans', function () {
			expect(transform.format(testSentence, true, false, false)).to.equal('𝘛𝘩𝘦 𝘲𝘶𝘪𝘤𝘬 𝘣𝘳𝘰𝘸𝘯 𝘧𝘰𝘹 𝘫𝘶𝘮𝘱𝘴 𝘰𝘷𝘦𝘳 𝘵𝘩𝘦 𝘭𝘢𝘻𝘺 𝘥𝘰𝘨. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Italic serif', function () {
			expect(transform.format(testSentence, true, false, true)).to.equal('𝑇ℎ𝑒 𝑞𝑢𝑖𝑐𝑘 𝑏𝑟𝑜𝑤𝑛 𝑓𝑜𝑥 𝑗𝑢𝑚𝑝𝑠 𝑜𝑣𝑒𝑟 𝑡ℎ𝑒 𝑙𝑎𝑧𝑦 𝑑𝑜𝑔. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Bold italic sans', function () {
			expect(transform.format(testSentence, true, true, false)).to.equal('𝙏𝙝𝙚 𝙦𝙪𝙞𝙘𝙠 𝙗𝙧𝙤𝙬𝙣 𝙛𝙤𝙭 𝙟𝙪𝙢𝙥𝙨 𝙤𝙫𝙚𝙧 𝙩𝙝𝙚 𝙡𝙖𝙯𝙮 𝙙𝙤𝙜. 1 2 3 4 5 6 7 8 9 0');
		});
		it('Bold italic serif', function () {
			expect(transform.format(testSentence, true, true, true)).to.equal('𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈. 1 2 3 4 5 6 7 8 9 0');
		});
	});
});