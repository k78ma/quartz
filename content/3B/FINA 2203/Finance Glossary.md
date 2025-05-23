---
title: Finance Glossary
tags:
  - fina2203
date: 2025-03-10
aliases:
  - finance glossary
---
| Symbol | Term              |
| ------ | ----------------- |
| $r$    | Interest rate     |
| $PV$   | Present value     |
| $FV$   | Future value      |
| $C$    | Cash flow         |
| $n$    | Number of periods |
|        |                   |

## Time Value of Money
Future value of a cash flow:
$$
FV_{n}=C\times(1+r)^{n}
$$
Present value of a cash flow:
$$
PV= \frac{C}{(1+r)^{n}}
$$

## Interest Rate vs. Discount Rate vs. Cost of Capital
- “Interest rate” is used to mean a quoted rate in the market.
- “Discount rate” is the appropriate rate for discounting a given cash flow, matched to the frequency of the cash flow. 
- “Cost of capital” to indicate the rate of return on an investment of similar risk.


## Chapter 6 - Bonds

### Bond Calculation Questions
- Use coupon rate to calculate PMT:
$$
\text{PMT} = \frac{\text{Coupon Rate} \times \text{Par Value}}{\text{\# of payments per year}}
$$
- Make sure to multiply $N$ by number of payments per year
- I/Y is yield to maturity divided by number of payments per year
- FV is par value
- PV is price paid

### Premium/Par/Discount
- **Premium**/Above par: Bond price > Face Value, or **Coupon** rate > YTM
- At par: Bond value = Face Value, or Coupon Rate = YTM
- **Discount**/Below par: Bond price < Face Value, or Coupon Rate < **YTM**
### Sensitivity
Longer maturity = sensitive
Low coupon = sensitive
- Why is low/no coupon sensitive? A larger portion of the cash flows to be received in the future will result in larger changes due to compounding

Market rate rises -> Price falls -> YTM rises to match market
Market rate falls -> Price rises -> YTM falls to match market

### Credit Spread
Credit spread = Bond yield - treasury yield

## Chapter 7 - Stock
- Reinvsting earnings: $g = \text{Retention rate}\times \text{Return on enw investments}$ 
## Chapter 9 - Capital Budgeting
- Free cash flows = Earnings + Depreciation - Capital Expenditures - Change in NWC
    - Earnings here is incremental earnings or unlevered net income
- Net working capital (NWC) = Current Assets - Current Liabilities

Incremental earnings approach:
$$
\begin{align}
\text{Incremental FCF} & =(\text{Revenues}-\text{Costs}-\text{Depreciation})(1-t_{c}) \\
     & \quad  +\text{ Depreciation} \\
     & \quad - \text{ Net Capital Expenditures} \\
     & \quad - \,\Delta \text{NWC}
\end{align}
$$
Tax shield approach:
$$
\begin{align}
\text{Incremental FCF} & =(\text{Revenues}-\text{Costs})(1-t_{c}) \\
     & \quad  +\, \,t_{c}\times \text{Depreciation} \\
     & \quad - \text{ Net Capital Expenditures} \\
     & \quad  - \,\Delta \text{NWC}
\end{align}
$$

After-tax cash flow from asset sale:
$$
\text{Sale Price} - (t_{c}) \times (\text{Capital gain/loss})
$$
where capital gain/loss is sale price - salvage value.
- Savage value = purchase price - accumulated depreciation

## Chapter 12 Systematic Risk
### Beta
- Beta ($\beta$) is the is the expected percentage change in the return of a security for a 1% change in the market’s return.
        -Beta for HP = 1.4, Market excess return was -2.5 → HP excess return was $1.4\cdot -2.5 = -3.5$

- Excess return = Return - Market portfolio return

### SML
- $y$-intercept = risk-free rate
- $m$ = market risk premium
- above SML → underpriced (we should buy)
- below SML → overpriced (we should sell)

![[Finance Glossary-20250520163702646.png]]