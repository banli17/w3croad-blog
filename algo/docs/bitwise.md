# 位运算

## 关于位运算

为什么要有位运算? 因为机器里表示和存储是用的二进制。而人类手指 10 个，为了方便采用是十进制。

## 十进制和二进制的转换

- 4(d) 0100
- 8(d) 01000
- 5(d) 0101

**十进制转二进制**

十进制转二进制的方法是`余数短除法处以二`。

## 位运算符

左移 << 0011->0110
右移 >> 0110 -> 0011
按位或 | 0011 | 1011 -> 1011
按位与 & 0011 & 1011 -> 0011
按位取反 ~ ~0011 -> 1100
按位异或(相同为 0，不同为 1) ^ 0011 ^ 1011 -> 1000

XOR - 异或

异或：相同为 0，不同为 1，也可用`不进位的加法`来理解。比如:

```
1 ^ 0 -> 1
1 ^ 1 -> 0 因为不进位，所以 10->0
```

异或的一些特点：

```
x ^ 0 = x
x ^ 1s = ~x  // 注意 1s = ~0
x ^ (~x) = 1s
x ^ x = 0

c = a ^ b => a ^ c = b, b ^ c = a  // 交换两个数
// b = a^b, a = b^a, b = a^b

a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c // associative
```

## 指定位置的位运算

1. 将 x 最右边的 n 位清零： `x & (~0 <<n)`
2. 获取 x 的第 n 位值(0 或者 1): `x>>n &1`
3. 获取 x 的第 n 位的幂值：`x&(1<<(n-1))`
4. 仅将第 n 位置为 1: `x|(1<<n)`
5. 仅将第 n 位置为 0: `x&(~(1<<n))`
6. 将 x 最高位至第 n 位(含)清零：`x&((1<<n)-1)`
7. 将第 n 位至第 0 位(含)清零：`x&&(~((1<<(n+1))-1))`

## 实战要点

```
// 判断奇偶
x%2 ==1 -> (x&1) == 1

// x>>1 -> x/2
x = x/2  -> x = x>>1
mid = (left + right) /2  -> mid = (left+right)>>1

// x = x&(x-1) 清零最低位的1
// x&-x => 得到最低位的1
x & ~x => 0
```
