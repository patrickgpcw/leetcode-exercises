## Buy and Sell Crypto
You are given an integer array `prices` where `prices[i]` is the price of NeetCoin on the `ith` day.

You may choose a <b>single day</b> to buy one NeetCoin and choose a <b>different day in the future</b> to sell it.

Return the maximum profit you can achieve. You may choose to <b>not make any transactions</b>, in which case the profit would be `0`.

#### Example 1:
```bash
Input: prices = [10,1,5,6,7,1]

Output: 6
```
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

#### Example 2:
```bash
Input: prices = [10,8,7,5,2]

Output: 0
```
Explanation: No profitable transactions can be made, thus the max profit is 0.

#### Constraints:

- `1 <= prices.length <= 100`
- `0 <= prices[i] <= 100`