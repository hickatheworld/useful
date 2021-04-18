# This script just makes us gain time while generating the JS Objects for charmaps using special characters found on Internet.
# This same script in JavaScript turns each special character to �.
# Haven't found any solution about it so switched to Python whichs handles these characters perfectly.

map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
chars = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'
s = '{'
for i in range(len(map)):
    s += f"'{map[i]}': '{chars[i]}',"
s += '};'
f = open('output.txt', 'w', encoding='utf8')
f.write(s)
f.close()
