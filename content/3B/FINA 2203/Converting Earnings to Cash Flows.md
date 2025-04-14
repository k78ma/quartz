---
title: Converting Earnings to Cash Flows
tags:
  - fina2203
date: 2025-04-14
aliases:
  - converting earnings to cash flows
---
[[Forecasting Incremental Earnings|Incremental earnings]] are a measure of the firm's performance but they do not represent real profits. To evaluate a [[Capital Budgeting|capital budgeting]] decision, we need to determine its consequences for the firm's available cash, which is why we want to convert earnings to [[Incremental Free Cash Flow|incremental free cash flow]].

To find incremental free cash flows, we do:
$$
\begin{align}
\text{Incremental FCF} & =\text{Incremental Earnings} \\
      & \quad  + \text{ Depreciation} \\
     & \quad -\text{ Net Capital Expenditures} \\
     & \quad -\text{ Change in NWC}
\end{align}
$$

![[Converting Earnings to Cash Flows-20250414210217588.png|554]]


## Incorporating CAPEX and Depreciation
Depreciation is not a cash flow, but taxes that we saved because of depreciation are.
- Depreciation expense reduces our taxable earnings and in doing so reduces our taxes. Taxes are cash flows, so depreciation affects our cash flows.
- This is why we subtract depreciation and then add it back

Capital expenditures need to be subtracted from incremental earnings; the actual cash outflows when an asset is purchased.

## Incorporating Changes in NWC
Most projects will require an investment in net working capital. Recall that:
$$
\begin{align}
\text{NWC} & =\text{Current Assets}-\text{Current Liabilities} \\
     & = \text{Cash} + \text{Inventory}+\text{Receivables}-\text{Payables}
\end{align}
$$

- A project may cause **inventory** to increase or decrease. An initial increase in inventory usually occurs prior to the first sale, i.e., by end of year 0.
- **Accounts receivable** will increase if sales related to a project are made on credit.
- **Accounts payable** may increase if inventory and supplies are bought on credit
- Cash may be included for extra petty cash requirement. It is not invested to earn a market rate of return.

We define
$$
\text{Trade credit}=\text{Receivables}- \text{Payables}
$$
such that it represents the net amount of capital consumed as a result of credit transactions.

Only changes in NWC impact cash flows. Note that the cash flow effect from a change in net working capital is always equal and opposite in sign to the change in net working capital. We have:
$$
\begin{align}
\Delta \text{NWC}_{t} & =\text{NWC}_{t}-\text{NWC}_{t-1} \\
\text{Sum of }\Delta \text{NWC}  & =0
\end{align}
$$

When the project ends, accumulated NWC is "recovered", resulting in a positive cash flow.
- AR are collected
- Excess inventory is sold off
- AP are paid off

Some NWC may not be recoverable. For example, some AR may be written off, and some inventory may be written off due to loss, damage, or obsolescence. 

Accounting principles require recovery of working capital over the life of the project, i.e., sum of changes in NWC is zero.

## Example
A sports drink project:  
- Projected EBIT = $700,000 per year  
- Cost of equipment = $90,000 (100% depreciated over the three year period straight line)  
- Product life = 3 years  
- Interest on borrowing = $5,000 per year  
- Increase in net working capital at year 0 prior to production  = $20,000  
- Full recovery of net working capital at end of project  
- Tax rate = 34%  
- Cost of capital = 20%  

What are the incremental free cash flows throughout the whole project’s life?

![[Converting Earnings to Cash Flows-20250414221657075.png]]
