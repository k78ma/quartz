---
title: Incremental Earning and Cash Flow Example
tags:
  - fina2203
date: 2025-04-14
aliases:
  - incremental earning and cash flow example
---
## Problem:

Background:
- Suppose that the managers of the router division of Cisco Systems are considering the development of a wireless home networking appliance, called HomeNet, that will provide both the hardware and the software necessary to run an entire home from any Internet connection.
- In addition to connecting computers and smartphones, HomeNet will control Internet-capable televisions, streaming video services, heating and air conditioning units, major appliances, security systems, office equipment, and so on. The major competitor for HomeNet is a product being developed by Brandt-Quigley Corporation

Incremental earnings part:
- Cisco has completed a **$300,000** feasibility study to assess its attractiveness.
- Based on extensive marketing surveys, the sales forecast for HomeNet is **50,000** units per year. Given the pace of technological change, Cisco expects the product will have a **four-year** life with an expected retail (B2C) price of **$375** per unit. The expected wholesale (B2B) price is **$260**. Actual production will be outsourced at a cost (including packaging) of **$110** per unit. 
- To verify the compatibility of new consumer Internet-ready appliances, as they become available, with the HomeNet system, Cisco must also establish a new lab for testing purposes. It will rent lab space but will need to purchase **$7.5 million** of new equipment. The equipment will be depreciated using the straight-line method over a **five-year life**. Cisco's marginal tax rate is 40%.
- The lab will be operational at the end of one year. At that time. HomeNet will be required to ship. Cisco expects to spend $2.8 million per year on rental costs for the lab space, as well as marketing and support for this product.

Incremental free cash flow part:
- Suppose that HomeNet will have no incremental cash or inventory requirements (products will be shipped directly from the contract manufacturer to customers). 
- However, receivables related to HomeNet are expected to account for 15% of annual sales, and payables are expected to be 15% of the annual cost of goods sold (COGS). 
    - 15% of $13 million in sales is $1.95 million and 15% of $5.5 million in COGS is $825,000.
- HomeNet’s net working capital requirements are shown in the following table

![[Incremental Earning and Cash Flow Example-20250414215925996.png]]


After-tax salvage value part:
- Suppose that the $7.5 million lab equipment can be sold for $800,000 when the production discontinues and the lab is shut down in year 4. So the machine won’t be kept till year 5. What adjustments must we make to HomeNet’s free cash flow?

## Solution

### Incremental Earnings
In this part, we forecast the incremental earnings from the HomeNet project.

In general, we want to solve
$$
\begin{align}
\text{Incremental Earnings} =  & (\text{Incremental Revenues}  \\
 & - \text{Incremental Costs}  \\
 & -  \text{Depreciation})  \\
 & \times (1 - \text{Tax Rate})
\end{align}
$$
Let's find each of the quantities in the formula.

Incremental revenue: Sales of 50,000 units/year, per unit price = $260
$$
50,000\times $260 = $13,000,000
$$
Incremental cost estimates: 
- Per unit production cost = $110
$$
50,000\times $110 = $5,500,000
$$
- Up-front new testing equipment = $7.5 million
    - Annual depreciation = $7.5/5 = $1.5 million
    - Note that the project lasts for 4 years but the equipment has a 5-year life. So there is a final depreciation charge in the 5th year.
- Annual operating cost = $2.8 million

![[Forecasting Incremental Earnings-20250414123136375.png]]

### Incremental Free Cash Flows
In this part, we compute the incremental free cash flows for HomeNet to decide whether Linksys should proceed with the project.

We recognize that:
- There is a 7.5 million cash outflow associated with the purchase in year 0
- We need to add back the 1.5 million depreciation expenses from year 1 to 5 as they are not actually cash outflows

![[Incremental Earning and Cash Flow Example-20250414214242959.png]]

Let's account for NWC now. Looking at the NWC requirement table in the problem section, we see that:
- In year 1, NWC increases by $1.125 million. Any increases in NWC represent an investment that reduces the cash available to the firm.
- In years 2-4, NWC does not change, so no further contributions are needed.
- In year 5, when the project is shut down, NWC decreases by $1.125 million as the payments of last customers are received and the final bills are paid.

![[Incremental Earning and Cash Flow Example-20250414220241827.png]]

Note that cash flow effect from changes in NWC is always opposite in sign to the change of NWC. So, in capital budgeting, we subtract changes in NWC from earnings to estimate incremental cash flows.

Then, the final solution for incremental free cash flows is:

![[Incremental Earning and Cash Flow Example-20250414220409061.png]]

We can use this to calculate the NPV:
$$
\text{NPV}=-7500+ \frac{2295}{1.12}+\frac{3420}{1.12^{2}}+\frac{3420}{1.12^{3}}+\frac{3420}{1.12^{4}}+\frac{1725}{1.12^{5}}=2862
$$
HomeNet's NPV is thus $2862 million dollars.

### After-Tax Salvage
Suppose that the $7.5 million lab equipment can be sold for $800,000 when the production discontinues and the lab is shut down in year 4. So the machine won’t be kept till year 5. What adjustments must we make to HomeNet’s free cash flow?

We want to:
1. Compute accumulated depreciation and determine the book value of equipment at end of year 4. 
2. Compute difference between sale price and book value. 
3. Compute tax credit/due on capital loss/gain and subtract it from the sale price. 
4. Remove the depreciation expense in year 5

We have:
- BV = 1.5 million in year 4
- BV > SV → Capital loss → Tax credit
- Capital loss = $1,500,000 - $800,000 = $700,000
- Tax credit = 0.4 × $700,000 = $280,000
- After-tax cash flow from selling the equipment: = $800,000 + $280,000 = $1,080,000

As sale price is lower than book value, there will be a capital loss which leads to tax credit. $1,080,000 will need to be added to HomeNet’s free cash flow in year 4.

![[Incremental Earning and Cash Flow Example-20250414230506341.png]]
