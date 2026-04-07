# Wildcards

Source: https://docs.goparagon.com/kb/wildcards/

---

Wildcards – Paradigm ERP by Paragon – Documentation
Home
General
Wildcards
Wildcards
In Paradigm; most list screens, search forms, and filter criteria allow the use of wildcards. Wildcards are special, reserved characters that can be used in place of exact characters. The wildcards that can be used are an asterisk (*), percent sign (%), question mark (?), and pound sign (#) . The uses for these are as follows (Note that more than one wildcard can be used at once):
Asterisk and Percent Sign
The asterisk and percent sign work the same. They will take the place of a string of characters; that is to say, they stand for any amount of characters.
BLUE* or BLUE% will return all records that begin with BLUE (BLUECAR, BLUEPANEL, BLUEANDGREENAWESOMESAUCE).
*BLUE* or %BLUE% will return any record that contains BLUE (REALLYBLUECAR, SECONDSBLUEPANEL, YELLOWANDBLUEAWESOMESAUCE).
BL*UE or BL%UE will return any record starting with BL and ending in UE (BL404UE, BLSPACEUE).
Question Mark
The question mark takes the place of any one character.
BLU? will return any four-character record starting with BLU (BLUE, BLUR, BLUB).
BLU?? will return any five-character record starting with BLU (BLUFF, BLUNT, BLURS).
BL?E will return any four-character record starting with BL and ending in E (BLUE, BLSE).
Pound Sign
The pound sign takes the place of any one number.
1/# will return any record starting with “1/” and ending in a single number. (1/2, 1/3, 1/5).
BLU## will return any record starting with BLU and ending with two numbers. (BLU11, BLU23, BLU99).
A#BLU will return any record starting with A and ending in BLU. (A1BLU, A9BLU).
Brackets
Brackets match any single character within the brackets.
B[ae]ll (finds ball and bell, but not bill.)
Use an exclamation to exclude the characters in the brackets.
b[!ae]ll (finds bill and bull, but not ball or bell.)
Use a dash to include a range of characters.
13[7-9] (finds 137, 138, and 139.)
