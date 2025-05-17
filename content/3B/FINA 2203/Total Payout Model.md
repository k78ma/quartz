---
title: Total Payout Model
tags:
  - fina2203
date: 2025-05-17
aliases:
  - total payout model
---
The [[Stock Prices and Returns|dividend-discount model]] has some key flaws:
- A tremendous amount of uncertainty associated with forecasting a firm’s dividend growth rate and future dividends, which depends on future earnings, payout ratio and future share count.
- Small changes in the assumed dividend growth rate can lead to large changes in the estimated stock price.
- Other aspects of cash flow at management’s discretion
    - Repurchase decision - Cash can be received by shareholders in the form of share repurchase instead of dividends.
    - Borrowing decision - Earnings depends on interest expenses

## Total Payout Model
In recent years, firms have been replacing dividend payouts with share purchases; in this case, the firm uses excess cash to buy back its own stock. Thus, total cash flows paid to shareholders should include both dividends and share repurchases.
- The larger the portion of cash payout that the firm uses to repurchase shares, the smaller the portion to pay dividends, but shareholders’ wealth is unchanged.
- By repurchasing shares, the firm decreases its share count, which increases its earnings and dividends on a per-share basis. Valuation of share price based on dividend per share, and EPS, etc will need to be adjusted.
- We can't use the dividend-discount model to value these stocks, and use the Total Payout Model instead.

The Total Payout Model gives:
$$
PV_{0}=\frac{PV(\text{Future Total Dividends and Repurchases})}{\text{Shares Outstanding}_{0}}
$$
- The equity value is the PV of future total dividends and repurchases

## Total Payout vs. Dividend-Discount
The Total Payout Model:
- Values all of the firm’s equity, rather than a single share.
- Discounts total amount of dividends and share repurchases, rather than earnings per share or dividends per share.
- Uses the growth rate of earnings to forecast the growth of the firm’s total payouts, rather than growth rate of dividends.

## Examples

![[Total Payout Model-20250517114537565.png]]

We first compute the PV of future payouts as a growing perpetuity:
$$
\text{Total payouts}= \text{860 million} \times 50\% = 430 \text{ million}
$$
$$
PV=\frac{430 \text{ million}}{10\% - 7.5\%} = 17.2 \text{ billion}
$$
The PV of payouts is equal to the total value of equity and market capitalization. Thus, we have:
$$
\text{Price per share} = \frac{\text{Total equity}_{0}}{\text{Shares outstanding}_{0}} = \frac{17.2 \text{ billion}}{217 \text{ million shares}}=79.26
$$
Notes:
- Using the total payout method, we did not need to know the firm’s split between dividends and share repurchases.
- Cannot use Dividend Discount Model to value these stocks as number of shares will decrease after share repurchase so per share dividend amount is not applicable anymore.