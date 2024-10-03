### Anagram Groups
Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in <b>any order</b>.

An <b>anagram</b> is a string that contains the exact same characters as another string, but the order of the characters can be different.

#### Example 1:
```bash
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```
#### Example 2:
```bash
Input: strs = ["x"]

Output: [["x"]]
```
#### Example 3:
```bash

Input: strs = [""]

Output: [[""]]
```
#### Constraints:

- `1 <= strs.length <= 1000.`
- `0 <= strs[i].length <= 100`
- `strs[i]` is made up of lowercase <b>English letters</b>.
